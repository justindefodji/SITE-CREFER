#!/usr/bin/env node

/**
 * Configuration pour les images Firebase
 * Définit les paramètres de préchargement et d'optimisation des images
 */

export const imageConfig = {
  // Paramètres de préchargement
  preload: {
    // Nombre d'images à précharger au démarrage
    initialCount: 3,
    
    // Priorité de préchargement
    priorities: {
      critical: 'high',    // Images hero, principales
      secondary: 'low',    // Images de galerie
      background: 'auto'   // Images d'arrière-plan
    },
    
    // Délai avant préchargement des images secondaires (ms)
    delaySecondary: 1000,
    
    // Délai avant préchargement des images d'arrière-plan (ms)
    delayBackground: 2000
  },

  // Paramètres de cache
  cache: {
    // Durée de vie du cache navigateur (en secondes)
    maxAge: 31536000, // 1 an
    
    // Type de cache
    cacheControl: 'public, max-age=31536000, immutable',
    
    // Utiliser localStorage pour le cache des URLs
    useLocalStorage: true,
    
    // Clé localStorage pour le cache
    cacheKeyPrefix: 'firebase_image_cache_'
  },

  // Paramètres d'optimisation
  optimization: {
    // Formats supportés (par ordre de préférence)
    formats: ['webp', 'jpg', 'png'],
    
    // Dimensions d'image adaptatives (en px)
    breakpoints: {
      mobile: 480,
      tablet: 768,
      desktop: 1280,
      full: 1920
    },
    
    // Qualité JPEG par défaut
    jpegQuality: 85,
    
    // Qualité WebP par défaut
    webpQuality: 80,
    
    // Appliquer la décoration asynchrone
    asyncDecoding: true,
    
    // Charger les images en lazy par défaut
    lazyLoad: true
  },

  // Structure Firebase Storage
  storage: {
    // Bucket Firebase
    bucket: 'sitecrefer.firebasestorage.app',
    
    // Dossiers principaux
    folders: {
      articles: 'articles',
      gallery: 'gallery',
      users: 'users',
      other: 'other'
    },
    
    // Nommage des chemins
    pathFormat: 'articles/article-{id}/{filename}',
    
    // Taille maximale de fichier (en MB)
    maxFileSize: 50
  },

  // Collection Firestore
  firestore: {
    // Nom de la collection
    collection: 'articleImages',
    
    // Champs à indexer
    indexFields: ['articleId', 'updatedAt', 'count']
  },

  // Articles à précharger au démarrage
  articlesToPreload: [
    {
      id: 1,
      priority: 'high',
      imageCount: 1
    },
    {
      id: 2,
      priority: 'high',
      imageCount: 3
    },
    {
      id: 3,
      priority: 'low',
      imageCount: 2
    }
  ],

  // Statistiques et monitoring
  monitoring: {
    // Activer les logs de debug
    debug: process.env.NODE_ENV !== 'production',
    
    // Tracker les performances
    trackPerformance: true,
    
    // Reporter les erreurs
    reportErrors: true
  }
}

/**
 * Obtenir le chemin de l'image dans Firebase Storage
 */
export function getImagePath(articleId, filename) {
  return imageConfig.storage.pathFormat
    .replace('{id}', articleId)
    .replace('{filename}', filename)
}

/**
 * Obtenir les dimensions d'image adaptatives
 */
export function getResponsiveImageDimensions() {
  return imageConfig.optimization.breakpoints
}

/**
 * Obtenir les paramètres de cache
 */
export function getCacheConfig() {
  return {
    maxAge: imageConfig.cache.maxAge,
    cacheControl: imageConfig.cache.cacheControl
  }
}

/**
 * Vérifier si une image est en cache
 */
export function getImageFromCache(imageKey) {
  if (!imageConfig.cache.useLocalStorage) return null
  
  try {
    const cached = localStorage.getItem(
      imageConfig.cache.cacheKeyPrefix + imageKey
    )
    return cached ? JSON.parse(cached) : null
  } catch (error) {
    console.error('Erreur accès cache:', error)
    return null
  }
}

/**
 * Sauvegarder une image en cache
 */
export function cacheImage(imageKey, imageUrl) {
  if (!imageConfig.cache.useLocalStorage) return
  
  try {
    localStorage.setItem(
      imageConfig.cache.cacheKeyPrefix + imageKey,
      JSON.stringify({
        url: imageUrl,
        timestamp: Date.now(),
        ttl: imageConfig.cache.maxAge * 1000
      })
    )
  } catch (error) {
    console.error('Erreur sauvegarde cache:', error)
  }
}

/**
 * Vérifier si le cache a expiré
 */
export function isCacheExpired(cachedItem) {
  if (!cachedItem) return true
  
  const now = Date.now()
  const age = now - cachedItem.timestamp
  
  return age > cachedItem.ttl
}

export default imageConfig
