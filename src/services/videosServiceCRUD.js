import { db } from './firebase'
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs,
  query,
  orderBy
} from 'firebase/firestore'
import { ref } from 'vue'

const VIDEOS_COLLECTION = 'videos'
const VIDEOS_STORAGE_KEY = 'crefer_videos'

// Vidéos par défaut (fallback)
const defaultVideos = [
  {
    id: '1',
    title: 'De CREFER vers l\'excellence – L\'école des métiers de l\'énergie',
    description: 'Découvrez comment CREFER forme les professionnels de demain dans les métiers de l\'énergie solaire, électrique et renouvelable.',
    youtubeId: 'NWOT2EqrOHM',
    date: '08 décembre 2025',
    category: 'Présentation',
    thumbnail: 'https://img.youtube.com/vi/NWOT2EqrOHM/maxresdefault.jpg'
  },
  {
    id: '2',
    title: 'Formation en électrotechnique',
    description: 'Découvrez nos programmes de formation pratiques et innovants en électrotechnique.',
    youtubeId: 'G_nT0I-pmLw',
    date: '09 décembre 2025',
    category: 'Formation',
    thumbnail: 'https://img.youtube.com/vi/G_nT0I-pmLw/maxresdefault.jpg'
  },
  {
    id: '3',
    title: 'Regardez la vidéo et dites-nous ce que vous en pensez',
    description: 'Partagez vos impressions sur notre contenu de formation. #Apprentissage #Continue',
    youtubeId: 'QCx-BY9Ciz8',
    date: '07 décembre 2025',
    category: 'Shorts',
    thumbnail: 'https://img.youtube.com/vi/QCx-BY9Ciz8/maxresdefault.jpg'
  },
  {
    id: '4',
    title: 'Chaque réussite est le fruit d\'un rêve nourri par la discipline et l\'effort',
    description: 'Découvrez comment la discipline et l\'effort mènent à la réussite au CREFER. #CREFER 🇹🇬',
    youtubeId: 'gcjje_T9suM',
    date: '06 décembre 2025',
    category: 'Shorts',
    thumbnail: 'https://img.youtube.com/vi/gcjje_T9suM/maxresdefault.jpg'
  },
  {
    id: '5',
    title: 'De la salle de cours à l\'atelier !',
    description: 'Découvrez la transition de la théorie à la pratique dans nos formations.',
    youtubeId: 'J1xR0FdaOBw',
    date: '05 décembre 2025',
    category: 'Shorts',
    thumbnail: 'https://img.youtube.com/vi/J1xR0FdaOBw/maxresdefault.jpg'
  }
]

// Créer une nouvelle vidéo
export const createVideo = async (videoData) => {
  try {
    const docRef = await addDoc(collection(db, VIDEOS_COLLECTION), {
      ...videoData,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return { id: docRef.id, ...videoData }
  } catch (error) {
    console.error('Erreur lors de la création de la vidéo:', error)
    // Fallback: localStorage
    const stored = localStorage.getItem(VIDEOS_STORAGE_KEY)
    const videos = stored ? JSON.parse(stored) : defaultVideos
    const newVideo = {
      id: Date.now().toString(),
      ...videoData
    }
    videos.push(newVideo)
    localStorage.setItem(VIDEOS_STORAGE_KEY, JSON.stringify(videos))
    throw error
  }
}

// Récupérer toutes les vidéos
export const getAllVideos = async () => {
  try {
    const q = query(collection(db, VIDEOS_COLLECTION), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    const videos = []
    querySnapshot.forEach((doc) => {
      videos.push({ id: doc.id, ...doc.data() })
    })
    return videos
  } catch (error) {
    console.error('Erreur lors de la récupération des vidéos:', error)
    // Fallback: localStorage
    try {
      const stored = localStorage.getItem(VIDEOS_STORAGE_KEY)
      if (stored) {
        return JSON.parse(stored)
      }
    } catch (e) {
      console.error('Erreur localStorage:', e)
    }
    return defaultVideos
  }
}

// Mettre à jour une vidéo
export const updateVideo = async (id, videoData) => {
  try {
    const docRef = doc(db, VIDEOS_COLLECTION, id)
    await updateDoc(docRef, {
      ...videoData,
      updatedAt: new Date()
    })
    return { id, ...videoData }
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la vidéo:', error)
    // Fallback: localStorage
    const stored = localStorage.getItem(VIDEOS_STORAGE_KEY)
    const videos = stored ? JSON.parse(stored) : defaultVideos
    const index = videos.findIndex(v => v.id === id)
    if (index !== -1) {
      videos[index] = { id, ...videoData }
      localStorage.setItem(VIDEOS_STORAGE_KEY, JSON.stringify(videos))
    }
    throw error
  }
}

// Supprimer une vidéo
export const deleteVideo = async (id) => {
  try {
    await deleteDoc(doc(db, VIDEOS_COLLECTION, id))
    return id
  } catch (error) {
    console.error('Erreur lors de la suppression de la vidéo:', error)
    // Fallback: localStorage
    const stored = localStorage.getItem(VIDEOS_STORAGE_KEY)
    const videos = stored ? JSON.parse(stored) : defaultVideos
    const filtered = videos.filter(v => v.id !== id)
    localStorage.setItem(VIDEOS_STORAGE_KEY, JSON.stringify(filtered))
    throw error
  }
}

// Hook Vue pour gérer les vidéos de manière réactive
export const useVideosCRUD = () => {
  const videos = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchVideos = async () => {
    loading.value = true
    error.value = null
    try {
      videos.value = await getAllVideos()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const addVideo = async (videoData) => {
    try {
      const newVideo = await createVideo(videoData)
      videos.value.unshift(newVideo)
      return newVideo
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  const editVideo = async (id, videoData) => {
    try {
      await updateVideo(id, videoData)
      const index = videos.value.findIndex(v => v.id === id)
      if (index !== -1) {
        videos.value[index] = { id, ...videoData }
      }
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  const removeVideo = async (id) => {
    try {
      await deleteVideo(id)
      videos.value = videos.value.filter(v => v.id !== id)
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  return {
    videos,
    loading,
    error,
    fetchVideos,
    addVideo,
    editVideo,
    removeVideo
  }
}

// Importer les vidéos par défaut dans Firebase
export const importDefaultVideos = async () => {
  try {
    const results = []
    
    for (const video of defaultVideos) {
      try {
        const createdVideo = await createVideo({
          title: video.title,
          description: video.description,
          youtubeId: video.youtubeId,
          date: video.date,
          category: video.category,
          thumbnail: video.thumbnail
        })
        results.push(createdVideo)
      } catch (error) {
        console.error(`Erreur lors de l'importation de "${video.title}":`, error)
      }
    }
    
    return results
  } catch (error) {
    console.error('Erreur lors de l\'importation des vidéos par défaut:', error)
    throw error
  }
}
