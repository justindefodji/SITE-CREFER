import { db, storage } from './firebase'
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
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage'
import { ref } from 'vue'

const DOCUMENTS_COLLECTION = 'admissions_documents'
const STORAGE_PATH = 'admissions_documents'

async function uploadPdfToStorage(file, docId) {
  const fileRef = storageRef(storage, `${STORAGE_PATH}/${docId}/${file.name}`)
  await uploadBytes(fileRef, file)
  return { url: await getDownloadURL(fileRef), storagePath: fileRef.fullPath }
}

async function deletePdfFromStorage(storagePath) {
  if (!storagePath) return
  try {
    await deleteObject(storageRef(storage, storagePath))
  } catch {
    // Fichier déjà supprimé ou inexistant
  }
}

export const createAdmissionDocument = async (documentData) => {
  try {
    // Créer d'abord le document Firestore pour obtenir l'ID
    const docRef = await addDoc(collection(db, DOCUMENTS_COLLECTION), {
      title: documentData.title,
      description: documentData.description,
      type: documentData.type || 'other',
      fileName: documentData.file?.name || '',
      fileUrl: null,
      storagePath: null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })

    // Uploader le PDF dans Storage avec l'ID du doc
    if (documentData.file) {
      const { url, storagePath } = await uploadPdfToStorage(documentData.file, docRef.id)
      await updateDoc(docRef, { fileUrl: url, storagePath })
    }

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

export const getAllAdmissionDocuments = async () => {
  try {
    const q = query(collection(db, DOCUMENTS_COLLECTION), orderBy('createdAt', 'desc'))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(d => ({
      id: d.id,
      ...d.data(),
      createdAt: d.data().createdAt?.toDate?.() || new Date(),
      updatedAt: d.data().updatedAt?.toDate?.() || new Date()
    }))
  } catch (error) {
    console.error('Erreur getAllAdmissionDocuments:', error)
    throw error
  }
}

export const getAdmissionDocumentById = async (id) => {
  try {
    const docSnap = await getDoc(doc(db, DOCUMENTS_COLLECTION, id))
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

export const updateAdmissionDocument = async (id, documentData) => {
  try {
    const updateData = {
      title: documentData.title,
      description: documentData.description,
      type: documentData.type,
      updatedAt: serverTimestamp()
    }

    if (documentData.file) {
      // Supprimer l'ancien fichier si présent
      if (documentData.storagePath) {
        await deletePdfFromStorage(documentData.storagePath)
      }
      const { url, storagePath } = await uploadPdfToStorage(documentData.file, id)
      updateData.fileUrl = url
      updateData.storagePath = storagePath
      updateData.fileName = documentData.file.name
    }

    await updateDoc(doc(db, DOCUMENTS_COLLECTION, id), updateData)
    return { id, ...documentData }
  } catch (error) {
    console.error('Erreur updateAdmissionDocument:', error)
    throw error
  }
}

export const deleteAdmissionDocument = async (id, storagePath) => {
  try {
    await deletePdfFromStorage(storagePath)
    await deleteDoc(doc(db, DOCUMENTS_COLLECTION, id))
    return id
  } catch (error) {
    console.error('Erreur deleteAdmissionDocument:', error)
    throw error
  }
}

export const downloadAdmissionDocument = async (fileUrl, fileName) => {
  try {
    if (!fileUrl) throw new Error('Document introuvable')
    const response = await fetch(fileUrl)
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = fileName || 'document.pdf'
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    setTimeout(() => {
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }, 100)
  } catch (error) {
    console.error('Erreur downloadAdmissionDocument:', error)
    throw error
  }
}

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

  const removeAdmissionDocument = async (id, storagePath) => {
    try {
      await deleteAdmissionDocument(id, storagePath)
      await fetchAdmissionDocuments()
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  const downloadDocument = async (item) => {
    try {
      await downloadAdmissionDocument(item.fileUrl, item.fileName)
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
