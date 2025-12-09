// Service pour gérer les vidéos YouTube
import { ref } from 'vue'

const VIDEOS_STORAGE_KEY = 'crefer_videos'

// Vidéos par défaut
const defaultVideos = [
  {
    id: '1',
    title: 'De CREFER vers l\'excellence – L\'école des métiers de l\'énergie',
    description: 'Découvrez comment CREFER forme les professionnels de demain dans les métiers de l\'énergie solaire, électrique et renouvelable. Avec des formations modulaires et diplômantes, alliant théorie, pratique et discipline, nous préparons nos étudiants à devenir des acteurs compétents et recherchés sur le marché de l\'emploi, au Togo et dans toute la sous-région.',
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
  }
]

// Récupérer les vidéos du localStorage ou retourner les vidéos par défaut
export const getVideos = () => {
  try {
    const stored = localStorage.getItem(VIDEOS_STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.error('Erreur lors de la lecture des vidéos:', e)
  }
  return defaultVideos
}

// Sauvegarder les vidéos dans le localStorage
export const saveVideos = (videos) => {
  try {
    localStorage.setItem(VIDEOS_STORAGE_KEY, JSON.stringify(videos))
  } catch (e) {
    console.error('Erreur lors de la sauvegarde des vidéos:', e)
  }
}

// Obtenir une vidéo spécifique par ID
export const getVideoById = (id) => {
  const videos = getVideos()
  return videos.find(v => String(v.id) === String(id))
}

// Créer un ref réactif pour les vidéos
export const useVideos = () => {
  const videos = ref(getVideos())
  
  const updateVideos = (newVideos) => {
    videos.value = newVideos
    saveVideos(newVideos)
  }

  return {
    videos,
    updateVideos
  }
}

// Fonction utilitaire pour obtenir l'URL de la vidéo embeddée
export const getEmbedUrl = (youtubeId) => {
  return `https://www.youtube.com/embed/${youtubeId}`
}

// Fonction utilitaire pour extraire l'ID YouTube d'une URL
export const extractYoutubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}
