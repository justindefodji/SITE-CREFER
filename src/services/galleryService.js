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

const GALLERY_COLLECTION = 'gallery'

// Créer une nouvelle image de galerie
export const createGalleryImage = async (imageData) => {
  try {
    const docRef = await addDoc(collection(db, GALLERY_COLLECTION), {
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

// Récupérer toutes les images de la galerie
export const getAllGalleryImages = async () => {
  try {
    const q = query(collection(db, GALLERY_COLLECTION), orderBy('createdAt', 'desc'))
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

// Récupérer une image par ID
export const getGalleryImageById = async (id) => {
  try {
    const docRef = doc(db, GALLERY_COLLECTION, id)
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

// Mettre à jour une image
export const updateGalleryImage = async (id, imageData) => {
  try {
    const docRef = doc(db, GALLERY_COLLECTION, id)
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

// Supprimer une image
export const deleteGalleryImage = async (id) => {
  try {
    await deleteDoc(doc(db, GALLERY_COLLECTION, id))
    return id
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'image:', error)
    throw error
  }
}

// Hook Vue pour gérer les images de galerie de manière réactive
export const useGallery = () => {
  const images = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchGalleryImages = async () => {
    loading.value = true
    error.value = null
    try {
      images.value = await getAllGalleryImages()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const addGalleryImage = async (imageData) => {
    try {
      const newImage = await createGalleryImage(imageData)
      images.value.unshift(newImage)
      return newImage
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  const editGalleryImage = async (id, imageData) => {
    try {
      await updateGalleryImage(id, imageData)
      const index = images.value.findIndex(i => i.id === id)
      if (index !== -1) {
        images.value[index] = { id, ...imageData }
      }
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  const removeGalleryImage = async (id) => {
    try {
      await deleteGalleryImage(id)
      images.value = images.value.filter(i => i.id !== id)
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  return {
    images,
    loading,
    error,
    fetchGalleryImages,
    addGalleryImage,
    editGalleryImage,
    removeGalleryImage
  }
}
