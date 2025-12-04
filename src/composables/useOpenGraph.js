/**
 * Composable pour gérer les métadonnées Open Graph
 * Permet le partage avec vignette sur les réseaux sociaux
 */

export function useOpenGraph() {
  /**
   * Définit les métadonnées Open Graph pour un article
   * @param {Object} config - Configuration Open Graph
   * @param {string} config.title - Titre de l'article
   * @param {string} config.description - Description courte
   * @param {string} config.image - URL de l'image (doit être une URL absolue)
   * @param {string} config.url - URL complète de l'article
   * @param {string} config.type - Type de contenu (article, website, etc.)
   */
  const setOpenGraph = (config) => {
    const {
      title = 'CREFER',
      description = 'Découvrez les actualités et formations de CREFER',
      image = '',
      url = window.location.href,
      type = 'article'
    } = config

    // Convertir l'image en URL absolue si nécessaire
    let absoluteImageUrl = image
    if (image && !image.startsWith('http')) {
      // Si c'est une URL relative, la convertir en URL absolue
      try {
        absoluteImageUrl = new URL(image, window.location.origin).href
      } catch (e) {
        absoluteImageUrl = image
      }
    }

    // Fonction helper pour créer ou mettre à jour une meta tag
    const setMeta = (property, content) => {
      let element = document.querySelector(`meta[property="${property}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('property', property)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }

    // Métadonnées Open Graph
    setMeta('og:title', title)
    setMeta('og:description', description)
    setMeta('og:image', absoluteImageUrl)
    setMeta('og:url', url)
    setMeta('og:type', type)
    setMeta('og:site_name', 'CREFER')

    // Twitter Card (optionnel mais recommandé)
    const setTwitterMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }

    setTwitterMeta('twitter:card', 'summary_large_image')
    setTwitterMeta('twitter:title', title)
    setTwitterMeta('twitter:description', description)
    setTwitterMeta('twitter:image', absoluteImageUrl)

    // Mise à jour du titre de la page
    document.title = title + ' - CREFER'
  }

  /**
   * Réinitialise les métadonnées à leurs valeurs par défaut
   */
  const resetOpenGraph = () => {
    setOpenGraph({
      title: 'NOS ACTUALITÉS - CREFER',
      description: 'Découvrez les dernières actualités et projets de CREFER',
      image: new URL('/src/assets/images/imageback.jpg', import.meta.url).href,
      url: window.location.href,
      type: 'website'
    })
  }

  return {
    setOpenGraph,
    resetOpenGraph
  }
}
