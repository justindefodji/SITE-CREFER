import { ref, computed } from 'vue'

/**
 * Composable pour gérer le préchargement intelligent des images
 * - Précharge uniquement les images critically de la page actuelle
 * - Charge les images additionnelles de manière lazy
 * - Supporte le chargement progressif
 */
export function useSmartImagePreload() {
  const preloadedImages = ref(new Set())
  const failedImages = ref(new Set())

  /**
   * Précharge une image de manière optimisée
   * @param {string} src - URL de l'image
   * @param {Object} options - Options de préchargement
   * @param {string} options.as - Type d'asset (image, font, style, etc.)
   * @param {number} options.priority - Priorité: 'high', 'low', 'auto'
   * @param {string} options.imageAs - Type spécifique d'image (JPG, WebP, etc.)
   * @returns {Promise<void>}
   */
  const preloadImage = async (src, options = {}) => {
    if (!src || preloadedImages.value.has(src)) {
      return
    }

    const {
      as = 'image',
      priority = 'auto',
      imageAs = 'image',
      fetchPriority = 'auto'
    } = options

    try {
      // Méthode 1: Utiliser requestIdleCallback si disponible (moins urgent)
      if (fetchPriority === 'low' && 'requestIdleCallback' in window) {
        requestIdleCallback(() => {
          _createPreloadLink(src, as, imageAs, priority)
        })
      } else {
        // Méthode 2: Créer un lien de préchargement immédiat
        _createPreloadLink(src, as, imageAs, priority)
      }

      preloadedImages.value.add(src)
    } catch (error) {
      console.error(`Erreur lors du préchargement de ${src}:`, error)
      failedImages.value.add(src)
    }
  }

  /**
   * Crée un lien de préchargement
   */
  const _createPreloadLink = (src, as, imageAs, priority) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = as
    link.href = src
    
    // Ajouter les attributs appropriés
    if (priority !== 'auto') {
      link.fetchPriority = priority
    }
    
    // Pour les images WebP
    if (imageAs && imageAs !== 'image') {
      link.type = 'image/webp'
    }

    document.head.appendChild(link)
  }

  /**
   * Précharge un ensemble d'images avec priorités
   * @param {Array<{src: string, priority?: 'high'|'low'}>} images
   */
  const preloadImages = (images) => {
    if (!Array.isArray(images)) return

    images.forEach((image, index) => {
      const delay = image.priority === 'high' ? 0 : (index + 1) * 100
      
      setTimeout(() => {
        preloadImage(image.src, {
          priority: image.priority || 'low',
          fetchPriority: image.priority === 'high' ? 'high' : 'low'
        })
      }, delay)
    })
  }

  /**
   * Précharge uniquement les images essentielles d'une page
   * @param {string[]} essentialImages - URLs des images essentielles
   */
  const preloadCriticalImages = (essentialImages) => {
    if (!Array.isArray(essentialImages)) return

    essentialImages.forEach((src, index) => {
      preloadImage(src, {
        priority: 'high',
        fetchPriority: 'high'
      })
    })
  }

  /**
   * Charge les images de manière lazy en arrière-plan
   * @param {string[]} images - URLs des images
   */
  const lazyLoadImages = (images) => {
    if (!Array.isArray(images) || typeof IntersectionObserver === 'undefined') {
      return
    }

    const imageElements = document.querySelectorAll('img[data-src]')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          observer.unobserve(img)
        }
      })
    })

    imageElements.forEach(img => observer.observe(img))
  }

  /**
   * Ajoute les en-têtes de cache appropriés pour les images
   */
  const addCacheHeaders = () => {
    const meta = document.createElement('meta')
    meta.httpEquiv = 'Cache-Control'
    meta.content = 'public, max-age=31536000, immutable'
    document.head.appendChild(meta)
  }

  /**
   * Vide le cache des images préchargées
   */
  const clearCache = () => {
    preloadedImages.value.clear()
    failedImages.value.clear()
  }

  const stats = computed(() => ({
    total: preloadedImages.value.size,
    failed: failedImages.value.size,
    success: preloadedImages.value.size - failedImages.value.size
  }))

  return {
    preloadImage,
    preloadImages,
    preloadCriticalImages,
    lazyLoadImages,
    addCacheHeaders,
    clearCache,
    stats,
    preloadedImages: computed(() => preloadedImages.value),
    failedImages: computed(() => failedImages.value)
  }
}

// Plugin Vue pour l'intégration automatique
export default {
  install(app) {
    app.config.globalProperties.$smartImagePreload = useSmartImagePreload()
  }
}
