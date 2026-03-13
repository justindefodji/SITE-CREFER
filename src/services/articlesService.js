import { db } from './firebase'
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  query,
  orderBy
} from 'firebase/firestore'
import { ref } from 'vue'

const ARTICLES_COLLECTION = 'articles'

// Créer un nouvel article
export const createArticle = async (articleData) => {
  try {
    const docRef = await addDoc(collection(db, ARTICLES_COLLECTION), {
      ...articleData,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return { id: docRef.id, ...articleData }
  } catch (error) {
    console.error('Erreur lors de la création de l\'article:', error)
    throw error
  }
}

// Récupérer tous les articles
export const getAllArticles = async () => {
  try {
    const q = query(collection(db, ARTICLES_COLLECTION), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    const articles = []
    querySnapshot.forEach((doc) => {
      articles.push({ id: doc.id, ...doc.data() })
    })
    return articles
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error)
    throw error
  }
}

// Récupérer un article par ID (cherche d'abord par ID doc, puis par articleId)
export const getArticleById = async (id) => {
  try {
    // D'abord, essayer de récupérer par l'ID du document
    const docRef = doc(db, ARTICLES_COLLECTION, id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    }
    
    // Si non trouvé, chercher par le champ articleId
    const allArticles = await getAllArticles()
    const foundArticle = allArticles.find(a => a.articleId === parseInt(id) || a.id === parseInt(id))
    if (foundArticle) {
      return foundArticle
    }
    
    throw new Error('Article non trouvé')
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error)
    throw error
  }
}

// Mettre à jour un article
export const updateArticle = async (id, articleData) => {
  try {
    const docRef = doc(db, ARTICLES_COLLECTION, id)
    await updateDoc(docRef, {
      ...articleData,
      updatedAt: new Date()
    })
    return { id, ...articleData }
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'article:', error)
    throw error
  }
}

// Supprimer un article
export const deleteArticle = async (id) => {
  try {
    await deleteDoc(doc(db, ARTICLES_COLLECTION, id))
    return id
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'article:', error)
    throw error
  }
}

// Hook Vue pour gérer les articles de manière réactive
export const useArticles = () => {
  const articles = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchArticles = async () => {
    loading.value = true
    error.value = null
    try {
      articles.value = await getAllArticles()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const addArticle = async (articleData) => {
    try {
      const newArticle = await createArticle(articleData)
      articles.value.unshift(newArticle)
      return newArticle
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  const editArticle = async (id, articleData) => {
    try {
      await updateArticle(id, articleData)
      const index = articles.value.findIndex(a => a.id === id)
      if (index !== -1) {
        articles.value[index] = { id, ...articleData }
      }
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  const removeArticle = async (id) => {
    try {
      await deleteArticle(id)
      articles.value = articles.value.filter(a => a.id !== id)
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  return {
    articles,
    loading,
    error,
    fetchArticles,
    addArticle,
    editArticle,
    removeArticle
  }
}

// Importer les articles par défaut dans Firebase
export const importDefaultArticles = async () => {
  try {
    const { defaultArticles } = await import('../data/articlesData.js')
    const results = []
    
    for (const article of defaultArticles) {
      try {
        const createdArticle = await createArticle({
          articleId: article.id, // Stocker l'ID original comme champ
          title: article.title,
          category: article.category,
          date: article.date,
          description: article.description,
          fullContent: article.fullContent,
          mainImage: article.mainImage,
          images: article.images || []
        })
        results.push(createdArticle)
      } catch (error) {
        console.error(`Erreur lors de l'importation de "${article.title}":`, error)
      }
    }
    
    return results
  } catch (error) {
    console.error('Erreur lors de l\'importation des articles par défaut:', error)
    throw error
  }
}
