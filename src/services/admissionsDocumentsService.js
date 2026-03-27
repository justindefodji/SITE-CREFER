import { db } from './firebase'
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore'
import { ref } from 'vue'

const DOCUMENTS_COLLECTION = 'admissions_documents'

/**
 * Convertir un fichier en base64
 */
async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

/**
 * Créer un nouveau document d'admission (PDF en base64 Firestore)
 */
export const createAdmissionDocument = async (documentData) => {
  try {
    let documentBase64 = null
    
    // Si on a un fichier, le convertir en base64
    if (documentData.file) {
      documentBase64 = await fileToBase64(documentData.file)
    }

    // Créer l'enregistrement Firestore
    const docRef = await addDoc(collection(db, DOCUMENTS_COLLECTION), {
      title: documentData.title,
      description: documentData.description,
      type: documentData.type || 'other',
      fileName: documentData.file?.name || '',
      document: documentBase64,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
    
    return { 
      id: docRef.id, 
      title: documentData.title,
      description: documentData.description,
      type: documentData.type,
      fileName: documentData.file?.name || ''
    }
  } catch (error) {
    console.error('Erreur createAdmissionDocument:', error)
    throw error
  }
}

/**
 * Récupérer tous les documents d'admission
 */
export const getAllAdmissionDocuments = async () => {
  try {
    const q = query(collection(db, DOCUMENTS_COLLECTION), orderBy('createdAt', 'desc'))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate?.() || new Date()
    }))
  } catch (error) {
    console.error('Erreur getAllAdmissionDocuments:', error)
    throw error
  }
}

/**
 * Récupérer un document par ID
 */
export const getAdmissionDocumentById = async (id) => {
  try {
    const docRef = doc(db, DOCUMENTS_COLLECTION, id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { 
        id: docSnap.id, 
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate?.() || new Date(),
        updatedAt: docSnap.data().updatedAt?.toDate?.() || new Date()
      }
    }
    throw new Error('Document non trouvé')
  } catch (error) {
    console.error('Erreur getAdmissionDocumentById:', error)
    throw error
  }
}

/**
 * Mettre à jour un document d'admission
 */
export const updateAdmissionDocument = async (id, documentData) => {
  try {
    let updateData = {
      title: documentData.title,
      description: documentData.description,
      type: documentData.type,
      updatedAt: serverTimestamp()
    }

    // Si on a un nouveau fichier, le convertir en base64
    if (documentData.file) {
      updateData.document = await fileToBase64(documentData.file)
      updateData.fileName = documentData.file.name
    }

    const docRef = doc(db, DOCUMENTS_COLLECTION, id)
    await updateDoc(docRef, updateData)
    return { id, ...documentData }
  } catch (error) {
    console.error('Erreur updateAdmissionDocument:', error)
    throw error
  }
}

/**
 * Supprimer un document d'admission
 */
export const deleteAdmissionDocument = async (id) => {
  try {
    await deleteDoc(doc(db, DOCUMENTS_COLLECTION, id))
    return id
  } catch (error) {
    console.error('Erreur deleteAdmissionDocument:', error)
    throw error
  }
}

/**
 * Télécharger un document (récupérer le base64)
 */
export const downloadAdmissionDocument = async (documentBase64, fileName) => {
  try {
    if (!documentBase64) throw new Error('Document introuvable')

    // Créer un lien de téléchargement
    const link = document.createElement('a')
    link.href = documentBase64
    link.download = fileName || 'document.pdf'
    link.style.display = 'none'
    document.body.appendChild(link)

    // Déclencher le téléchargement
    setTimeout(() => {
      link.click()
      setTimeout(() => {
        document.body.removeChild(link)
      }, 100)
    }, 10)
  } catch (error) {
    console.error('Erreur downloadAdmissionDocument:', error)
    throw error
  }
}

/**
 * Hook Vue pour gérer les documents d'admission de manière réactive
 */
export const useAdmissionDocuments = () => {
  const documents = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchAdmissionDocuments = async () => {
    loading.value = true
    error.value = null
    try {
      documents.value = await getAllAdmissionDocuments()
    } catch (err) {
      error.value = err.message
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const addAdmissionDocument = async (documentData) => {
    try {
      const newDocument = await createAdmissionDocument(documentData)
      await fetchAdmissionDocuments()
      return newDocument
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  const editAdmissionDocument = async (id, documentData) => {
    try {
      await updateAdmissionDocument(id, documentData)
      await fetchAdmissionDocuments()
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  const removeAdmissionDocument = async (id) => {
    try {
      await deleteAdmissionDocument(id)
      await fetchAdmissionDocuments()
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  const downloadDocument = async (item) => {
    try {
      await downloadAdmissionDocument(item.document, item.fileName)
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  return {
    documents,
    loading,
    error,
    fetchAdmissionDocuments,
    addAdmissionDocument,
    editAdmissionDocument,
    removeAdmissionDocument,
    downloadDocument
  }
}
