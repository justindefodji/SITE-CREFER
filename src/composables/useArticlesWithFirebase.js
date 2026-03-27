import { ref, computed, onMounted } from 'vue'
import { articlesData } from '../data/articlesData'
import firebaseImageService from '../services/firebaseImageService'
import { useSmartImagePreload } from './useSmartImagePreload'

/**
 * Composable pour gérer les articles avec images Firebase
 * Charge les images supplémentaires depuis Firebase Storage de manière lazy
 */
export function useArticlesWithFirebaseImages() {
  const articles = ref([])
  const loading = ref(false)
  const { preloadCriticalImages } = useSmartImagePreload()

  /**
   * Initialise les articles avec les images principales préchargées
   */
  const initializeArticles = async () => {
    loading.value = true
    try {
      articles.value = articlesData

      // Précharger UNIQUEMENT les images principales (first visible article)
      const mainImages = articles.value
        .slice(0, 3) // Seulement les 3 premiers articles
        .map(article => article.mainImage)
        .filter(img => img)

      preloadCriticalImages(mainImages)
    } catch (error) {
      console.error('Erreur lors de l\'initialisation des articles:', error)
    } finally {
      loading.value = false
    }
  }

  /**
   * Récupère les images supplémentaires d'un article depuis Firebase
   * @param {number|string} articleId - ID de l'article
   * @returns {Promise<string[]>} Tableau des URLs des images
   */
  const getArticleImages = async (articleId) => {
    try {
      // Vérifier si les images sont déjà en cache local
      const article = articles.value.find(a => a.id === articleId)
      if (!article) return []

      // If images are already local, use them
      if (article.images && article.images.length > 0) {
        return article.images
      }

      // Sinon, essayer de récupérer depuis Firebase
      const firebaseImageData = await firebaseImageService.getArticleImages(articleId)
      if (firebaseImageData && firebaseImageData.imagePaths) {
        const urls = await firebaseImageService.getImageUrls(firebaseImageData.imagePaths)
        // Stocker en cache local
        article.images = urls
        return urls
      }

      return []
    } catch (error) {
      console.error(`Erreur lors de la récupération des images de l'article ${articleId}:`, error)
      return []
    }
  }

  /**
   * Précharge les images supplémentaires d'un article de manière lazy
   * @param {number|string} articleId - ID de l'article
   */
  const preloadArticleImages = async (articleId) => {
    try {
      const images = await getArticleImages(articleId)
      
      // Précharger les images supplémentaires avec priorité basse
      if (images && images.length > 1) {
        // Précharger seulement la deuxième image (les autres viennent avec le lazy loading)
        const { preloadImage } = useSmartImagePreload()
        preloadImage(images[1], {
          priority: 'low',
          fetchPriority: 'low'
        })
      }
    } catch (error) {
      console.error('Erreur lors du préchargement des images:', error)
    }
  }

  /**
   * Récupère un article par son ID
   * @param {number|string} id - ID de l'article
   * @returns {Object|null}
   */
  const getArticleById = (id) => {
    return articles.value.find(a => a.id === parseInt(id))
  }

  /**
   * Récupère un article par son slug
   * @param {string} slug - Slug de l'article
   * @returns {Object|null}
   */
  const getArticleBySlug = (slug) => {
    return articles.value.find(a => a.slug === slug)
  }

  /**
   * Récupère les articles d'une catégorie
   * @param {string} category - Catégorie
   * @returns {Object[]}
   */
  const getArticlesByCategory = (category) => {
    return articles.value.filter(a => a.category === category)
  }

  /**
   * Récupère tous les articles triés par date (plus récents en premier)
   * @returns {Object[]}
   */
  const getSortedArticles = () => {
    return [...articles.value].sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB - dateA
    })
  }

  const categories = computed(() => {
    const cats = new Set(articles.value.map(a => a.category))
    return Array.from(cats)
  })

  const totalArticles = computed(() => articles.value.length)

  onMounted(() => {
    initializeArticles()
  })

  return {
    articles: computed(() => articles.value),
    loading,
    categories,
    totalArticles,
    initializeArticles,
    getArticleById,
    getArticleBySlug,
    getArticlesByCategory,
    getSortedArticles,
    getArticleImages,
    preloadArticleImages
  }
}
