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
  orderBy
} from 'firebase/firestore'
import { ref } from 'vue'

const IMAGES_COLLECTION = 'admissions_images'

/**
 * Créer une nouvelle image d'admission (JPG compressée)
 */
export const createAdmissionImage = async (imageData) => {
  try {
    const docRef = await addDoc(collection(db, IMAGES_COLLECTION), {
      ...imageData,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return { id: docRef.id, ...imageData }
  } catch (error) {
    console.error('Erreur lors de la création de l\'image:', error)
    throw error
  }
}

/**
 * Récupérer toutes les images d'admission
 */
export const getAllAdmissionImages = async () => {
  try {
    const q = query(collection(db, IMAGES_COLLECTION), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    const images = []
    querySnapshot.forEach((doc) => {
      images.push({ id: doc.id, ...doc.data() })
    })
    return images
  } catch (error) {
    console.error('Erreur lors de la récupération des images:', error)
    throw error
  }
}

/**
 * Récupérer une image par ID
 */
export const getAdmissionImageById = async (id) => {
  try {
    const docRef = doc(db, IMAGES_COLLECTION, id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    }
    throw new Error('Image non trouvée')
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'image:', error)
    throw error
  }
}

/**
 * Mettre à jour une image
 */
export const updateAdmissionImage = async (id, imageData) => {
  try {
    const docRef = doc(db, IMAGES_COLLECTION, id)
    await updateDoc(docRef, {
      ...imageData,
      updatedAt: new Date()
    })
    return { id, ...imageData }
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'image:', error)
    throw error
  }
}

/**
 * Supprimer une image
 */
export const deleteAdmissionImage = async (id) => {
  try {
    await deleteDoc(doc(db, IMAGES_COLLECTION, id))
    return id
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'image:', error)
    throw error
  }
}

/**
 * Hook Vue pour gérer les images d'admission de manière réactive
 */
export const useAdmissionImages = () => {
  const images = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchAdmissionImages = async () => {
    loading.value = true
    error.value = null
    try {
      images.value = await getAllAdmissionImages()
    } catch (err) {
      error.value = err.message
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const addAdmissionImage = async (imageData) => {
    try {
      const newImage = await createAdmissionImage(imageData)
      images.value.unshift(newImage)
      return newImage
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  const editAdmissionImage = async (id, imageData) => {
    try {
      const updated = await updateAdmissionImage(id, imageData)
      const index = images.value.findIndex(img => img.id === id)
      if (index !== -1) {
        images.value[index] = { id, ...imageData }
      }
      return updated
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  const removeAdmissionImage = async (id) => {
    try {
      await deleteAdmissionImage(id)
      images.value = images.value.filter(img => img.id !== id)
      return id
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  return {
    images,
    loading,
    error,
    fetchAdmissionImages,
    addAdmissionImage,
    editAdmissionImage,
    removeAdmissionImage
  }
}
