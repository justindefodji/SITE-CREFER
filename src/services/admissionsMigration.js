import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

// Données des images d'admission existantes
const admissionsImagesData = [
  {
    title: 'Fiche d\'inscription Modulaire',
    category: 'Fiche Modulaire',
    description: 'Document d\'inscription pour la formation modulaire',
    imagePath: '/pdfs/fiche-inscription-modulaire.jpg'
  },
  {
    title: 'Liste des outils TP',
    category: 'Outils TP',
    description: 'Liste complète des outils requis pour les travaux pratiques et le stage',
    imagePath: '/pdfs/liste-outils-tp.jpg'
  },
  {
    title: 'Flyer Formation Modulaire 2026',
    category: 'Flyer',
    description: 'Flyer informatif pour la formation modulaire 2026',
    imagePath: '/pdfs/flyermodul2026.jpg'
  },
  {
    title: 'Fiche de renseignement CAP',
    category: 'Fiche BT/CAP',
    description: 'Fiche de renseignement pour la formation CAP',
    imagePath: '/pdfs/fiche-renseignement-cap.jpg'
  },
  {
    title: 'Fiche de renseignement BT',
    category: 'Fiche BT/CAP',
    description: 'Fiche de renseignement pour la formation BT',
    imagePath: '/pdfs/fiche-renseignement-bt.jpg'
  }
]

// Données des documents existants
const admissionsDocumentsData = [
  {
    title: 'Fiche d\'inscription Modulaire',
    description: 'Formulaire d\'inscription pour la formation modulaire',
    type: 'Fiche d\'inscription modulaire',
    fileName: 'fiche-inscription-modulaire.pdf'
  },
  {
    title: 'Fiche d\'inscription BT & CAP',
    description: 'Formulaire d\'inscription pour les formations BT et CAP',
    type: 'Fiche d\'inscription BT & CAP',
    fileName: 'fiche-inscription-bt-cap.pdf'
  },
  {
    title: 'Liste des outils TP et stage',
    description: 'Liste complète des outils requis pour les travaux pratiques et le stage',
    type: 'Liste des outils de TP et pour le stage',
    fileName: 'liste-outils-tp.pdf'
  },
  {
    title: 'Flyer Formation Modulaire 2026',
    description: 'Document informatif sur la formation modulaire 2026',
    type: 'Flyer Formation Modulaire 2026',
    fileName: 'flyermodul2026.pdf'
  },
  {
    title: 'Fiche de renseignement CAP',
    description: 'Fiche de renseignement pour les candidats CAP',
    type: 'Fiche de renseignement CAP',
    fileName: 'fiche-renseignement-cap.pdf'
  },
  {
    title: 'Fiche de renseignement BT',
    description: 'Fiche de renseignement pour les candidats BT',
    type: 'Fiche de renseignement BT',
    fileName: 'fiche-renseignement-bt.pdf'
  }
]

/**
 * Charge une image et la retourne en base64
 */
async function loadImageAsBase64(imagePath) {
  const basePath = import.meta.env.BASE_URL || '/'
  const fullPath = `${basePath}${imagePath.startsWith('/') ? imagePath.slice(1) : imagePath}`
  
  try {
    const response = await fetch(fullPath, {
      signal: AbortSignal.timeout(15000)
    })
    
    if (!response.ok) {
      throw new Error(`Impossible de charger l'image: ${response.status}`)
    }
    
    const blob = await response.blob()
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  } catch (error) {
    console.error(`Erreur lors du chargement de l'image ${imagePath}:`, error)
    throw error
  }
}

/**
 * Compresse une image en base64
 */
async function compressImageToBase64(base64String) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      let width = img.width
      let height = img.height
      
      // Redimensionner si nécessaire (max 1200px de largeur)
      if (width > 1200) {
        height = (height * 1200) / width
        width = 1200
      }
      
      canvas.width = width
      canvas.height = height
      
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, width, height)
      
      // Essayer différentes qualités jusqu'à trouver une qui convient
      let quality = 0.7
      let compressedBase64 = canvas.toDataURL('image/jpeg', quality)
      
      while (compressedBase64.length > 900000 && quality > 0.3) {
        quality -= 0.1
        compressedBase64 = canvas.toDataURL('image/jpeg', quality)
      }
      
      resolve(compressedBase64)
    }
    img.onerror = reject
    img.src = base64String
  })
}

/**
 * Récupère un fichier PDF et le retourne en base64
 */
async function fetchPdfAsBase64(pdfPath) {
  const basePath = import.meta.env.BASE_URL || '/'
  const fullPath = `${basePath}${pdfPath.startsWith('/') ? pdfPath.slice(1) : pdfPath}`
  
  try {
    const response = await fetch(fullPath, {
      signal: AbortSignal.timeout(15000)
    })
    
    if (!response.ok) {
      throw new Error(`Impossible de charger le PDF: ${response.status}`)
    }
    
    const blob = await response.blob()
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  } catch (error) {
    console.error(`Erreur lors du chargement du PDF ${pdfPath}:`, error)
    throw error
  }
}

/**
 * Migre les images d'admissions vers Firestore
 */
export async function migrateAdmissionsImagesToFirestore(onProgress = null) {
  const collectionRef = collection(db, 'admissions_images')
  let successCount = 0
  let errorCount = 0
  
  for (let i = 0; i < admissionsImagesData.length; i++) {
    const imageData = admissionsImagesData[i]
    
    try {
      // Charge l'image
      if (onProgress) onProgress({
        phase: 'images',
        current: i + 1,
        total: admissionsImagesData.length,
        status: `Chargement: ${imageData.title}`
      })
      
      const base64 = await loadImageAsBase64(imageData.imagePath)
      
      // Compresse l'image
      if (onProgress) onProgress({
        phase: 'images',
        current: i + 1,
        total: admissionsImagesData.length,
        status: `Compression: ${imageData.title}`
      })
      
      const compressedBase64 = await compressImageToBase64(base64)
      
      // Upload vers Firestore
      await addDoc(collectionRef, {
        title: imageData.title,
        category: imageData.category,
        description: imageData.description,
        image: compressedBase64,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      })
      
      successCount++
      
      if (onProgress) onProgress({
        phase: 'images',
        current: i + 1,
        total: admissionsImagesData.length,
        status: `✓ ${imageData.title}`
      })
    } catch (error) {
      console.error(`Erreur lors de la migration de ${imageData.title}:`, error)
      errorCount++
      
      if (onProgress) onProgress({
        phase: 'images',
        current: i + 1,
        total: admissionsImagesData.length,
        status: `✗ Erreur: ${imageData.title}`,
        error: error.message
      })
    }
  }
  
  return { successCount, errorCount, type: 'images' }
}

/**
 * Migre les documents d'admissions vers Firestore (base64)
 */
export async function migrateAdmissionsDocumentsToFirebase(onProgress = null) {
  const collectionRef = collection(db, 'admissions_documents')
  let successCount = 0
  let errorCount = 0
  
  for (let i = 0; i < admissionsDocumentsData.length; i++) {
    const docData = admissionsDocumentsData[i]
    
    try {
      // Fetch le PDF
      if (onProgress) onProgress({
        phase: 'documents',
        current: i + 1,
        total: admissionsDocumentsData.length,
        status: `Téléchargement: ${docData.title}`
      })
      
      const pdfBase64 = await fetchPdfAsBase64(`/pdfs/${docData.fileName}`)
      
      // Ajouter à Firestore avec le PDF en base64
      if (onProgress) onProgress({
        phase: 'documents',
        current: i + 1,
        total: admissionsDocumentsData.length,
        status: `Stockage: ${docData.title}`
      })
      
      await addDoc(collectionRef, {
        title: docData.title,
        description: docData.description,
        type: docData.type,
        fileName: docData.fileName,
        document: pdfBase64,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      })
      
      successCount++
      
      if (onProgress) onProgress({
        phase: 'documents',
        current: i + 1,
        total: admissionsDocumentsData.length,
        status: `✓ ${docData.title}`
      })
    } catch (error) {
      console.error(`Erreur lors de la migration de ${docData.fileName}:`, error)
      errorCount++
      
      if (onProgress) onProgress({
        phase: 'documents',
        current: i + 1,
        total: admissionsDocumentsData.length,
        status: `✗ Erreur: ${docData.fileName}`,
        error: error.message
      })
    }
  }
  
  return { successCount, errorCount, type: 'documents' }
}

/**
 * Migre tous les éléments d'admissions (images + documents)
 */
export async function migrateAdmissionsToFirebase(onProgress = null) {
  try {
    // Migrer les images d'abord
    const imagesResult = await migrateAdmissionsImagesToFirestore(onProgress)
    
    // Puis les documents
    const documentsResult = await migrateAdmissionsDocumentsToFirebase(onProgress)
    
    if (onProgress) onProgress({
      phase: 'complete',
      totalSuccess: imagesResult.successCount + documentsResult.successCount,
      totalError: imagesResult.errorCount + documentsResult.errorCount
    })
    
    return {
      images: imagesResult,
      documents: documentsResult,
      totalSuccess: imagesResult.successCount + documentsResult.successCount,
      totalError: imagesResult.errorCount + documentsResult.errorCount
    }
  } catch (error) {
    console.error('Erreur lors de la migration complète:', error)
    throw error
  }
}
