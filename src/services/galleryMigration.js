/**
 * Utilitaire de migration pour importer les images de la galerie vers Firebase Firestore
 * Ce fichier peut être utilisé directement dans la console du navigateur via FirestoreService
 */

import { createGalleryImage } from './galleryService'
import { DEFAULT_GALLERY_DATA } from '../data/defaultGalleryData'

/**
 * Importe une image depuis le projet (relative path) et la convertit en base64
 * @param {string} imagePath - Chemin de l'image (ex: 'assets/images/photo.jpg')
 * @returns {Promise<string>} - Image compressée en base64
 */
export const loadImageAsBase64 = async (imagePath) => {
  try {
    console.log(`Chargement de: ${imagePath}`)
    
    return await new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      
      // Timeout après 5 secondes
      const timeout = setTimeout(() => {
        reject(new Error(`Timeout: ${imagePath}`))
      }, 5000)
      
      img.onload = () => {
        clearTimeout(timeout)
        
        try {
          // Créer un canvas pour convertir et compresser
          const canvas = document.createElement('canvas')
          
          // Limiter la taille max à 1200px de largeur
          let width = img.width
          let height = img.height
          const maxWidth = 1200
          
          if (width > maxWidth) {
            height = Math.round((maxWidth * height) / width)
            width = maxWidth
          }
          
          canvas.width = width
          canvas.height = height
          
          const ctx = canvas.getContext('2d')
          if (!ctx) {
            reject(new Error('Impossible d\'obtenir le contexte canvas'))
            return
          }
          
          ctx.drawImage(img, 0, 0, width, height)
          
          // Compresser avec qualité adaptée
          let quality = 0.7
          let base64 = canvas.toDataURL('image/jpeg', quality)
          
          // Si l'image est trop grande, réduire la qualité
          while (base64.length > 900000 && quality > 0.3) {
            quality -= 0.2
            base64 = canvas.toDataURL('image/jpeg', quality)
          }
          
          console.log(`✅ ${imagePath} compressée (taille: ${(base64.length / 1024).toFixed(2)}KB)`)
          resolve(base64)
          
        } catch (err) {
          reject(err)
        }
      }
      
      img.onerror = () => {
        clearTimeout(timeout)
        reject(new Error(`Impossible de charger: ${imagePath}`))
      }
      
      // Utiliser le chemin public pour le chargement
      // Essayer d'abord le chemin complet depuis public
      const fullPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
      img.src = fullPath
      
    })
  } catch (error) {
    console.error(`❌ Erreur chargement ${imagePath}:`, error)
    throw error
  }
}

/**
 * Lance la migration complète de toutes les images
 * @param {Function} onProgress - Callback optionnel pour le tracking de progression
 * @returns {Promise<Object>} - Résumé de la migration
 */
export const migrateGalleryToFirestore = async (onProgress = null) => {
  console.log('🚀 Début de la migration de la galerie...')
  
  const results = {
    successful: 0,
    failed: 0,
    failedImages: [],
    totalTime: 0
  }
  
  const startTime = Date.now()
  const total = DEFAULT_GALLERY_DATA.length
  
  for (let i = 0; i < DEFAULT_GALLERY_DATA.length; i++) {
    const imageData = DEFAULT_GALLERY_DATA[i]
    const progress = Math.round((i / total) * 100)
    
    try {
      const statusMsg = `Chargement: ${imageData.title} (${i + 1}/${total})`
      console.log(`📸 ${statusMsg}...`)
      
      if (onProgress) {
        onProgress({
          current: i + 1,
          total: total,
          progress: progress,
          status: statusMsg
        })
      }
      
      // Charger l'image en base64 avec timeout
      let imageBase64
      try {
        imageBase64 = await Promise.race([
          loadImageAsBase64(imageData.imagePath),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout chargement image')), 10000)
          )
        ])
      } catch (loadError) {
        throw new Error(`Impossible de charger l'image: ${loadError.message}`)
      }
      
      // Créer l'objet à envoyer à Firestore
      const galleryItem = {
        title: imageData.title,
        description: imageData.description,
        category: imageData.category,
        image: imageBase64
      }
      
      // Envoyer à Firestore avec retry
      let retries = 3
      while (retries > 0) {
        try {
          await createGalleryImage(galleryItem)
          break
        } catch (firebaseError) {
          retries--
          if (retries === 0) {
            throw firebaseError
          }
          console.warn(`Retry ${4 - retries}/3 pour ${imageData.title}`)
          await new Promise(r => setTimeout(r, 1000))
        }
      }
      
      results.successful++
      console.log(`✅ ${imageData.title} migrée avec succès`)
      
    } catch (error) {
      results.failed++
      results.failedImages.push({
        title: imageData.title,
        error: error.message
      })
      console.error(`❌ Erreur migration ${imageData.title}:`, error)
    }
  }
  
  results.totalTime = Date.now() - startTime
  
  // Afficher un résumé
  console.log('\n' + '='.repeat(50))
  console.log('📊 RÉSUMÉ DE LA MIGRATION')
  console.log('='.repeat(50))
  console.log(`✅ Migrées avec succès: ${results.successful}/${DEFAULT_GALLERY_DATA.length}`)
  console.log(`❌ Échecs: ${results.failed}/${DEFAULT_GALLERY_DATA.length}`)
  console.log(`⏱️  Temps total: ${(results.totalTime / 1000).toFixed(2)}s`)
  
  if (results.failedImages.length > 0) {
    console.warn('\n⚠️  Images non migrées:')
    results.failedImages.forEach(img => {
      console.warn(`  - ${img.title}: ${img.error}`)
    })
  }
  
  console.log('='.repeat(50))
  
  return results
}

/**
 * Vérifie combien d'images sont déjà dans Firestore
 * @returns {Promise<number>} - Nombre d'images
 */
export const checkGalleryCount = async () => {
  try {
    const { getAllGalleryImages } = await import('./galleryService')
    const images = await getAllGalleryImages()
    return images.length
  } catch (error) {
    console.error('Erreur lors de la vérification du compte:', error)
    return 0
  }
}

/**
 * Fonction simple pour exécuter la migration via la console
 * À appeler dans la console du navigateur:
 * import { migrateGallery } from '@/services/galleryMigration'
 * migrateGallery()
 */
export const migrateGallery = async () => {
  try {
    const count = await checkGalleryCount()
    
    if (count > 0) {
      console.warn(`⚠️  La galerie contient déjà ${count} images. Voulez-vous continuer? (risque de doublons)`)
      return {
        status: 'warning',
        message: `Galerie déjà peuplée avec ${count} images`,
        count
      }
    }
    
    const results = await migrateGalleryToFirestore()
    
    return {
      status: 'success',
      message: 'Migration terminée',
      results
    }
  } catch (error) {
    console.error('Erreur fatale lors de la migration:', error)
    return {
      status: 'error',
      message: error.message,
      error
    }
  }
}

export default {
  migrateGallery,
  migrateGalleryToFirestore,
  loadImageAsBase64,
  checkGalleryCount
}
