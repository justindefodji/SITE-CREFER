// Plugin pour précharger les images critiques au démarrage de l'application
export function useImagePreload() {
  const preloadImage = (src) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  }

  const preloadImages = (imageSources) => {
    imageSources.forEach(src => {
      if (src) {
        preloadImage(src)
      }
    })
  }

  const addImageOptimizationHeaders = () => {
    // Ajouter les en-têtes pour le cache des images
    const meta = document.createElement('meta')
    meta.httpEquiv = 'Cache-Control'
    meta.content = 'public, max-age=31536000'
    document.head.appendChild(meta)
  }

  return {
    preloadImage,
    preloadImages,
    addImageOptimizationHeaders
  }
}

// Plugin Vue pour l'intégration automatique
export default {
  install(app) {
    app.config.globalProperties.$imagePreload = useImagePreload()
  }
}
