#!/usr/bin/env node

/**
 * Script pour uploader les images des articles vers Firebase Storage
 * Usage: node scripts/uploadArticlesToFirebase.js
 */

import admin from 'firebase-admin'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const config = {
  articlesDir: path.join(__dirname, '../src/assets/images'),
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || 'sitecrefer',
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || 'sitecrefer.firebasestorage.app'
}

// Mapping des articles et leurs images
const articleImageMapping = {
  '1': {
    name: 'Soutenance de Mémoire',
    images: ['soutenance-1200.jpg']
  },
  '2': {
    name: 'Lancement 14ème Promotion',
    images: ['image1article2.jpg', 'image2article2.jpg', 'image3article2.jpg']
  },
  '3': {
    name: '1500+ Étudiants Formés',
    images: ['articlesolaire1.jpg', 'articlesolaire2.jpg']
  },
  '4': {
    name: 'Stage Concret',
    images: ['install1article.jpg', 'install2article.jpg', 'install3article.jpg', 'install4article.jpg']
  },
  '5': {
    name: 'Examen Blanc BT',
    images: ['exam1article.jpg', 'exam2article.jpg', 'exam3article.jpg', 'exam4article.jpg']
  }
}

/**
 * Initialise Firebase Admin SDK
 */
function initializeFirebase() {
  try {
    // Chercher le fichier de clé de service
    const serviceAccountPath = path.join(__dirname, '../serviceAccountKey.json')
    
    if (!fs.existsSync(serviceAccountPath)) {
      console.error('❌ Erreur: serviceAccountKey.json non trouvé à', serviceAccountPath)
      console.log('📝 Instructions:')
      console.log('1. Allez sur https://console.firebase.google.com')
      console.log('2. Projet: sitecrefer')
      console.log('3. Paramètres → Comptes de service → Firebase Admin SDK')
      console.log('4. Cliquez sur "Générer une nouvelle clé privée"')
      console.log('5. Sauvegardez le fichier JSON à la racine du projet')
      process.exit(1)
    }

    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'))
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: config.storageBucket
    })

    console.log('✅ Firebase Admin SDK initialisé')
    return true
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error.message)
    return false
  }
}

/**
 * Vérifie que les fichiers image existent
 */
function verifyImages() {
  console.log('\n📸 Vérification des images...')
  
  let missingFiles = []
  
  for (const [articleId, { name, images }] of Object.entries(articleImageMapping)) {
    console.log(`\nArticle ${articleId}: ${name}`)
    
    for (const image of images) {
      const filePath = path.join(config.articlesDir, image)
      const exists = fs.existsSync(filePath)
      
      console.log(`  ${exists ? '✅' : '❌'} ${image}`)
      
      if (!exists) {
        missingFiles.push({ articleId, image, path: filePath })
      }
    }
  }
  
  return missingFiles
}

/**
 * Upload une image vers Firebase Storage
 */
async function uploadImage(bucket, articleId, filePath, fileName) {
  const destination = `articles/article-${articleId}/${fileName}`
  
  try {
    await bucket.upload(filePath, {
      destination,
      metadata: {
        contentType: 'image/jpeg',
        cacheControl: 'public, max-age=31536000' // 1 an
      }
    })
    
    return {
      success: true,
      destination,
      message: `✅ Uploadé: ${destination}`
    }
  } catch (error) {
    return {
      success: false,
      destination,
      message: `❌ Erreur upload: ${error.message}`
    }
  }
}

/**
 * Enregistre les références des images dans Firestore
 */
async function saveImageReferencesInFirestore(db, articleId, imagePaths) {
  try {
    await db.collection('articleImages').doc(articleId).set({
      imagePaths,
      articleId: parseInt(articleId),
      updatedAt: new Date(),
      count: imagePaths.length
    }, { merge: true })
    
    return true
  } catch (error) {
    console.error(`Erreur Firestore: ${error.message}`)
    return false
  }
}

/**
 * Lance le processus d'upload
 */
async function uploadAllArticleImages() {
  console.log('🚀 Démarrage de l\'upload des images des articles vers Firebase...\n')
  
  // Initialiser Firebase
  if (!initializeFirebase()) {
    process.exit(1)
  }
  
  // Vérifier les images
  const missingFiles = verifyImages()
  
  if (missingFiles.length > 0) {
    console.log('\n⚠️  Fichiers manquants:')
    missingFiles.forEach(({ articleId, image, path }) => {
      console.log(`   Article ${articleId}: ${image} → ${path}`)
    })
    
    console.log('\n📝 Assurez-vous que tous les fichiers existent avant de continuer.')
    process.exit(1)
  }
  
  console.log('\n✅ Tous les fichiers ont été trouvés!\n')
  
  // Uploader les images
  const bucket = admin.storage().bucket()
  const db = admin.firestore()
  
  let totalUploaded = 0
  let totalFailed = 0
  const results = []
  
  for (const [articleId, { name, images }] of Object.entries(articleImageMapping)) {
    console.log(`\n📤 Upload pour Article ${articleId}: ${name}`)
    
    const uploadedPaths = []
    
    for (const imageName of images) {
      const filePath = path.join(config.articlesDir, imageName)
      const result = await uploadImage(bucket, articleId, filePath, imageName)
      
      console.log(`  ${result.message}`)
      results.push(result)
      
      if (result.success) {
        totalUploaded++
        uploadedPaths.push(result.destination)
      } else {
        totalFailed++
      }
    }
    
    // Sauvegarder les références dans Firestore
    if (uploadedPaths.length > 0) {
      const firestoreSaved = await saveImageReferencesInFirestore(db, articleId, uploadedPaths)
      console.log(`  ${firestoreSaved ? '✅' : '❌'} Références Firestore: ${uploadedPaths.length} image(s)`)
    }
  }
  
  // Résumé
  console.log('\n' + '='.repeat(50))
  console.log('📊 RÉSUMÉ')
  console.log('='.repeat(50))
  console.log(`✅ Uploadés: ${totalUploaded}`)
  console.log(`❌ Échoués: ${totalFailed}`)
  console.log(`📦 Total: ${totalUploaded + totalFailed}`)
  console.log('='.repeat(50))
  
  if (totalFailed === 0) {
    console.log('\n🎉 Tous les uploads sont terminés avec succès!')
    console.log('\n📝 Prochaines étapes:')
    console.log('1. Vérifiez les images sur Firebase Console')
    console.log('2. Intégrez useArticlesWithFirebase dans vos composants')
    console.log('3. Testez le chargement des images')
  } else {
    console.log(`\n⚠️  ${totalFailed} upload(s) n'ont pas réussi. Vérifiez les erreurs ci-dessus.`)
  }
  
  // Fermer Firebase
  await admin.app().delete()
}

// Lancer le script
uploadAllArticleImages().catch(error => {
  console.error('Erreur fatal:', error)
  process.exit(1)
})
