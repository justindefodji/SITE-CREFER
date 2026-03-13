<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
    <!-- Header Section -->
    <section
      class="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    >
      <!-- Dark overlay for contrast -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
      <div class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-black/60 to-transparent z-15"></div>
      
      <div class="max-w-6xl mx-auto relative z-20 pt-28 pb-8">
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">Actualités & Projets</h1>
        <p class="text-lg lg:text-xl text-slate-200">Découvrez les dernières actualités et projets de CREFER - Partageables et engageants</p>
      </div>
    </section>

    <!-- Videos Section - Avant les articles texte -->
    <section class="py-16 bg-gradient-to-b from-slate-50 via-red-50 to-slate-50">
      <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <!-- Section Title -->
        <div class="mb-12">
          <h2 class="inline-block px-4 py-2 bg-yellow-400 from-black text-2xl font-bold rounded" style="font-family: 'Montserrat', sans-serif;">Echo du CREFER</h2>
        </div>

        <!-- Videos Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div v-for="video in videos" :key="video.id" class="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
            <!-- Video Container -->
            <div class="w-full aspect-video bg-black overflow-hidden rounded-t-xl">
              <iframe
                :src="getEmbedUrl(video.youtubeId)"
                :title="video.title"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            <!-- Video Info Container -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2" style="font-family: 'Montserrat', sans-serif;">
                {{ video.title }}
              </h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                {{ video.description }}
              </p>
              <div class="flex gap-4 text-sm text-gray-500 mb-4">
                <span> {{ video.date }}</span>
                <span> {{ video.category }}</span>
              </div>
              <a
                :href="`https://www.youtube.com/watch?v=${video.youtubeId}`"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-semibold transition-all duration-200"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM16.364 15.364a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM12 18a1 1 0 101-2 1 1 0 00-1 2zM5.343 15.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1-1V8a1 1 0 012 0v1a1 1 0 01-1 1zM4.929 4.929a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z" />
                </svg>
                Voir sur YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Section - Grid Style -->
    <section class="py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <!-- Section Title -->
        <div class="mb-12">
          <h2 class="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-2xl font-bold rounded" style="font-family: 'Montserrat', sans-serif;">Derniers articles</h2>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
        </div>

        <!-- Articles Grid -->
        <div v-else-if="articles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Dynamic Article Cards -->
          <div v-for="article in articles.slice(0, 5)" :key="article.id" class="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
            <!-- Image Container -->
            <div class="w-full h-40 bg-gray-100 overflow-hidden rounded-t-xl">
              <img 
                v-if="article.mainImage"
                :src="article.mainImage" 
                :alt="article.title" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div v-else class="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                <svg class="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <!-- Content Container -->
            <div class="p-4 flex flex-col justify-between h-48">
              <router-link 
                :to="`/articles/${article.id}`"
                class="text-base font-bold text-gray-900 hover:text-yellow-600 transition-colors line-clamp-3"
              >
                {{ article.title }}
              </router-link>

              <!-- Category & Date -->
              <div class="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span class="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-semibold">
                  {{ article.category }}
                </span>
                <span>{{ article.date }}</span>
              </div>

              <!-- Links Container -->
              <div class="flex gap-3 items-center justify-between">
                <router-link
                  :to="`/articles/${article.id}`"
                  class="text-yellow-600 hover:text-yellow-700 font-semibold text-xs transition-colors inline-block"
                >
                  Lire l'article »
                </router-link>
                <button
                  @click="shareArticle(article.title, article.id)"
                  class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold text-xs transition-all duration-200 hover:shadow-md hover:scale-105"
                  title="Partager cet article"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                  </svg>
                  Partager
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
          <p class="text-gray-600 text-lg">Aucun article disponible pour le moment.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useVideosCRUD } from '../services/videosServiceCRUD'
import { getAllArticles } from '../services/articlesService'
import { useSEO } from '@/composables/useSEO'
import { articlesData } from '@/data/articlesData'

export default {
  name: 'Articles',
  setup() {
    const seo = useSEO()
    const { videos, fetchVideos } = useVideosCRUD()
    const articles = ref([])
    const loading = ref(true)
    
    onMounted(async () => {
      // Configurer le SEO
      seo.setSEO({
        title: 'Actualités et Projets - CREFER',
        description: 'Consultez les dernières actualités, vidéos et projets du CREFER. Restez informé de la vie de notre école d\'énergies renouvelables.',
        keywords: 'actualités CREFER, projets école, événements formation, news CREFER, vidéos CREFER',
        canonical: 'https://crefer.tech/articles'
      })

      try {
        // Charger les articles depuis Firestore
        const firebaseArticles = await getAllArticles()
        
        if (firebaseArticles && firebaseArticles.length > 0) {
          articles.value = firebaseArticles.map(article => {
            // Convertir les chemins d'images locaux en URLs publiques
            const convertImagePath = (path) => {
              if (!path) return null
              // Garder les images base64 telles quelles
              if (path.startsWith('data:image/')) return path
              // Garder les URLs absolues
              if (path.startsWith('http')) return path
              // Convertir les chemins relatifs de développement
              if (path.startsWith('/src/assets/images/')) {
                return path.replace('/src/assets/images/', '/assets/images/')
              }
              return path
            }

            return {
              ...article,
              mainImage: convertImagePath(article.mainImage),
              images: Array.isArray(article.images) ? article.images.map(convertImagePath) : [],
              date: article.date instanceof Object && article.date.toDate ? article.date.toDate().toLocaleDateString('fr-FR') : article.date
            }
          })
        } else {
          // Fallback aux données statiques si Firestore est vide
          articles.value = articlesData
        }

        // Charger les vidéos YouTube depuis Firestore
        await fetchVideos()
      } catch (error) {
        console.warn('Erreur lors du chargement depuis Firestore:', error)
        // Fallback aux données statiques en cas d'erreur
        articles.value = articlesData
      } finally {
        loading.value = false
      }
    })
    
    const backgroundImageUrl = ref(new URL('../assets/images/imageback.jpg', import.meta.url).href)
    const soutenanceImageUrl = ref(new URL('../assets/images/soutenance-1200.jpg', import.meta.url).href)
    const promotionImage1Url = ref(new URL('../assets/images/image1article2.jpg', import.meta.url).href)
    const promotionImage2Url = ref(new URL('../assets/images/image2article2.jpg', import.meta.url).href)
    const promotionImage3Url = ref(new URL('../assets/images/image3article2.jpg', import.meta.url).href)
    const solarImage1Url = ref(new URL('../assets/images/articlesolaire1.jpg', import.meta.url).href)
    const solarImage2Url = ref(new URL('../assets/images/articlesolaire2.jpg', import.meta.url).href)
    const installImage1Url = ref(new URL('../assets/images/install1article.jpg', import.meta.url).href)
    const installImage2Url = ref(new URL('../assets/images/install2article.jpg', import.meta.url).href)
    const installImage3Url = ref(new URL('../assets/images/install3article.jpg', import.meta.url).href)
    const installImage4Url = ref(new URL('../assets/images/install4article.jpg', import.meta.url).href)
    const examImage1Url = ref(new URL('../assets/images/exam1article.jpg', import.meta.url).href)
    const examImage2Url = ref(new URL('../assets/images/exam2article.jpg', import.meta.url).href)
    const examImage3Url = ref(new URL('../assets/images/exam3article.jpg', import.meta.url).href)
    const examImage4Url = ref(new URL('../assets/images/exam4article.jpg', import.meta.url).href)

    // Lightbox states
    const showLightbox = ref(false)
    const currentLightboxIndex = ref(0)
    const lightboxImages = ref([])
    const showSolarLightbox = ref(false)
    const currentSolarLightboxIndex = ref(0)
    const solarLightboxImages = ref([])
    const showInstallLightbox = ref(false)
    const currentInstallLightboxIndex = ref(0)
    const installLightboxImages = ref([])
    const showExamLightbox = ref(false)
    const currentExamLightboxIndex = ref(0)
    const examLightboxImages = ref([])

    const openLightbox = (index) => {
      lightboxImages.value = [promotionImage1Url.value, promotionImage2Url.value, promotionImage3Url.value]
      currentLightboxIndex.value = index
      showLightbox.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
      showLightbox.value = false
      document.body.style.overflow = 'auto'
    }

    const nextLightboxImage = () => {
      if (currentLightboxIndex.value < lightboxImages.value.length - 1) {
        currentLightboxIndex.value++
      }
    }

    const previousLightboxImage = () => {
      if (currentLightboxIndex.value > 0) {
        currentLightboxIndex.value--
      }
    }

    const openSolarLightbox = (index) => {
      solarLightboxImages.value = [solarImage1Url.value, solarImage2Url.value]
      currentSolarLightboxIndex.value = index
      showSolarLightbox.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeSolarLightbox = () => {
      showSolarLightbox.value = false
      document.body.style.overflow = 'auto'
    }

    const openInstallLightbox = (index) => {
      installLightboxImages.value = [installImage1Url.value, installImage2Url.value, installImage3Url.value, installImage4Url.value]
      currentInstallLightboxIndex.value = index
      showInstallLightbox.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeInstallLightbox = () => {
      showInstallLightbox.value = false
      document.body.style.overflow = 'auto'
    }

    const openExamLightbox = (index) => {
      examLightboxImages.value = [examImage1Url.value, examImage2Url.value, examImage3Url.value, examImage4Url.value]
      currentExamLightboxIndex.value = index
      showExamLightbox.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeExamLightbox = () => {
      showExamLightbox.value = false
      document.body.style.overflow = 'auto'
    }

    const shareArticle = (title, articleId) => {
      const article = articles.value.find(a => a.id === articleId)
      const url = window.location.origin + `/articles/${articleId}`
      const shareText = `${title} - CREFER`

      const shareData = {
        title: shareText,
        text: article?.description || title,
        url: url
      }

      if (navigator.share) {
        navigator.share(shareData).catch(err => {
          if (err.name !== 'AbortError') {
            console.error('Erreur lors du partage:', err)
          }
        })
      } else {
        navigator.clipboard.writeText(url).then(() => {
          alert('Lien copié dans le presse-papiers!')
        }).catch(err => {
          console.error('Erreur lors de la copie:', err)
        })
      }
    }

    const getEmbedUrl = (youtubeId) => {
      return `https://www.youtube.com/embed/${youtubeId}`
    }

    return {
      backgroundImageUrl,
      soutenanceImageUrl,
      promotionImage1Url,
      promotionImage2Url,
      promotionImage3Url,
      solarImage1Url,
      solarImage2Url,
      installImage1Url,
      installImage2Url,
      installImage3Url,
      installImage4Url,
      examImage1Url,
      examImage2Url,
      examImage3Url,
      examImage4Url,
      showLightbox,
      currentLightboxIndex,
      lightboxImages,
      openLightbox,
      closeLightbox,
      nextLightboxImage,
      previousLightboxImage,
      showSolarLightbox,
      currentSolarLightboxIndex,
      solarLightboxImages,
      openSolarLightbox,
      closeSolarLightbox,
      showInstallLightbox,
      currentInstallLightboxIndex,
      installLightboxImages,
      openInstallLightbox,
      closeInstallLightbox,
      showExamLightbox,
      currentExamLightboxIndex,
      examLightboxImages,
      openExamLightbox,
      closeExamLightbox,
      videos,
      getEmbedUrl,
      shareArticle,
      articles,
      loading
    }
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

div[class*="group"] {
  animation: fadeIn 0.3s ease-out;
}
</style>