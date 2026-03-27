import { getStorage, ref, getBytes, listAll } from 'firebase/storage'
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore'

// Service pour gérer les images dans Firebase Storage et Firestore
class FirebaseImageService {
  constructor() {
    this.storage = getStorage()
    this.db = getFirestore()
    this.imageCache = new Map() // Cache local pour éviter les requêtes répétées
    this.uploadingPromises = new Map() // Éviter les uploads dupliqués
  }

  /**
   * Récupère l'URL d'une image depuis Firebase Storage
   * @param {string} imagePath - Chemin de l'image dans Storage (ex: 'articles/image1.jpg')
   * @returns {Promise<string>} URL de l'image
   */
  async getImageUrl(imagePath) {
    if (!imagePath) return null

    // Vérifier le cache
    if (this.imageCache.has(imagePath)) {
      return this.imageCache.get(imagePath)
    }

    try {
      const imageRef = ref(this.storage, imagePath)
      // Utiliser getDownloadURL si disponible, sinon retourner le chemin
      const { getDownloadURL } = await import('firebase/storage')
      const url = await getDownloadURL(imageRef)
      
      // Stocker en cache
      this.imageCache.set(imagePath, url)
      return url
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'image: ${imagePath}`, error)
      return null
    }
  }

  /**
   * Récupère plusieurs URLs d'images
   * @param {string[]} imagePaths - Tableau de chemins d'images
   * @returns {Promise<string[]>} Tableau d'URLs
   */
  async getImageUrls(imagePaths) {
    if (!imagePaths || !Array.isArray(imagePaths)) return []
    
    return Promise.all(
      imagePaths.map(path => this.getImageUrl(path))
    ).then(urls => urls.filter(url => url !== null))
  }

  /**
   * Enregistre les données des images dans Firestore
   * @param {string} articleId - ID de l'article
   * @param {string[]} imagePaths - Tableau de chemins d'images
   */
  async saveArticleImages(articleId, imagePaths) {
    try {
      const articlesRef = collection(this.db, 'articleImages')
      await setDoc(doc(articlesRef, articleId), {
        imagePaths,
        updatedAt: new Date(),
        count: imagePaths.length
      })
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des images de l\'article:', error)
    }
  }

  /**
   * Récupère les données des images d'un article depuis Firestore
   * @param {string} articleId - ID de l'article
   * @returns {Promise<Object>} Données des images
   */
  async getArticleImages(articleId) {
    try {
      const { getDocs, query, where } = await import('firebase/firestore')
      const articlesRef = collection(this.db, 'articleImages')
      const q = query(articlesRef, where('__name__', '==', articleId))
      
      const snapshot = await getDocs(q)
      if (!snapshot.empty) {
        return snapshot.docs[0].data()
      }
      return null
    } catch (error) {
      console.error('Erreur lors de la récupération des images de l\'article:', error)
      return null
    }
  }

  /**
   * Vide le cache des images
   */
  clearCache() {
    this.imageCache.clear()
  }

  /**
   * Génère une URL de cache appropriée pour une image
   * @param {string} imagePath - Chemin de l'image
   * @returns {number} Timestamp de cache (1 jour par défaut)
   */
  getCacheDuration() {
    return 24 * 60 * 60 * 1000 // 1 jour en millisecondes
  }
}

export default new FirebaseImageService()
