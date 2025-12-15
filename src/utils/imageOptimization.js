// Stratégie d'optimisation des images pour le déploiement
export const imageOptimizationConfig = {
  // Formats supportés avec fallback
  formats: {
    webp: 'image/webp',
    jpg: 'image/jpeg',
    png: 'image/png'
  },

  // Configuration du lazy loading
  lazyLoadConfig: {
    loading: 'lazy',
    decoding: 'async'
  },

  // Tailles optimisées
  sizes: {
    small: '400px',
    medium: '800px',
    large: '1200px'
  },

  // Configuration du preload pour les images critiques
  preloadCritical: [
    'assets/images/soutenance-1200.jpg',
    'assets/images/image1article2.jpg',
    'assets/images/articlesolaire1.jpg',
    'assets/images/install1article.jpg',
    'assets/images/exam1article.jpg',
    'assets/images/imageback.jpg'
  ]
}

// Helper pour générer des sources picture
export function generatePictureSources(webpPath, jpgPath) {
  return {
    webp: webpPath,
    jpg: jpgPath
  }
}

// Helper pour obtenir l'image optimisée
export function getOptimizedImagePath(basePath) {
  // Remplacer .jpg par .webp si disponible, sinon retourner .jpg
  if (basePath.endsWith('.jpg')) {
    return basePath.replace('.jpg', '.webp')
  }
  return basePath
}
