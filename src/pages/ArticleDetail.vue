<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center py-32">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <template v-else-if="currentArticle">
    <!-- Header Section -->
    <section
      class="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    >
      <!-- Dark overlay for contrast -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
      <div class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-black/60 to-transparent z-15"></div>
      
      <div class="max-w-6xl mx-auto relative z-20 pt-28 pb-8">
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">{{ currentArticle.title }}</h1>
        <p class="text-lg lg:text-xl text-slate-200">{{ currentArticle.subtitle }}</p>
      </div>
    </section>

    <!-- Article Detail Section -->
    <section class="py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <!-- Article Card -->
        <article class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
          <!-- Post Header -->
          <div class="px-6 py-4 border-b border-gray-100">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-bold text-gray-900">CREFER 🎓</h3>
              <span class="text-xs text-gray-500">{{ currentArticle.date }}</span>
            </div>
            <p class="text-sm text-gray-600">{{ currentArticle.category }}</p>
          </div>

          <!-- Post Content -->
          <div class="px-6 py-4">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ currentArticle.fullTitle }}</h2>
            <p class="text-gray-700 mb-4 leading-relaxed">
              {{ currentArticle.description }}
            </p>
            <div class="mt-6 pt-4 border-t border-gray-200">
              <p class="text-gray-700 leading-relaxed">
                {{ currentArticle.fullContent }}
              </p>
            </div>
          </div>

          <!-- Post Gallery -->
          <div v-if="currentArticle.images.length > 1" class="grid grid-cols-2 gap-1 w-full h-96 bg-gray-100">
            <div 
              v-for="(image, index) in currentArticle.images" 
              :key="index"
              class="overflow-hidden cursor-pointer group"
              @click="openLightbox(index)"
            >
              <img 
                :src="image" 
                :alt="`Image ${index + 1}`" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div v-else class="w-full h-96 bg-gray-100 overflow-hidden">
            <img 
              :src="currentArticle.images[0]" 
              alt="Article Image" 
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              @click="openLightbox(0)"
            />
          </div>

          <!-- Back Button -->
          <div class="px-6 py-4 border-t border-gray-100">
            <router-link
              to="/articles"
              class="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-yellow-50 hover:bg-yellow-100 text-yellow-700 font-semibold transition-all duration-200"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              Retour aux articles
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div 
      v-if="showLightbox" 
      class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <div class="relative max-w-4xl w-full" @click.stop>
        <button 
          @click="closeLightbox"
          class="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img 
          :src="currentArticle.images[currentLightboxIndex]" 
          :alt="`Image ${currentLightboxIndex + 1}`" 
          class="w-full h-auto rounded-lg" 
        />
        <button 
          v-if="currentLightboxIndex > 0"
          @click="previousImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          v-if="currentLightboxIndex < currentArticle.images.length - 1"
          @click="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
    </template>

    <!-- Error State -->
    <div v-else class="flex flex-col justify-center items-center py-32">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h2>
      <p class="text-gray-600 mb-6">Désolé, cet article n'existe pas.</p>
      <router-link
        to="/articles"
        class="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Retour aux articles
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSEO } from '@/composables/useSEO'
import { articlesData } from '@/data/articlesData'
import { getArticleById } from '@/services/articlesService'

export default {
  name: 'ArticleDetail',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const seo = useSEO()
    const showLightbox = ref(false)
    const currentLightboxIndex = ref(0)
    const article = ref(null)
    const loading = ref(true)

    // Function to update meta tags for social sharing (Facebook-like structure)
    const updateMetaTags = (articleData) => {
      if (!articleData) return
      
      const baseUrl = window.location.origin
      const imageUrl = articleData.mainImage || ''
      const pageUrl = `${baseUrl}/articles/${articleData.id}`

      // Supprimer les anciennes métadonnées
      const oldMetaSelectors = [
        'meta[property="og:title"]',
        'meta[property="og:description"]',
        'meta[property="og:image"]',
        'meta[property="og:image:width"]',
        'meta[property="og:image:height"]',
        'meta[property="og:type"]',
        'meta[property="og:url"]',
        'meta[property="og:site_name"]',
        'meta[property="article:published_time"]',
        'meta[property="article:author"]',
        'meta[property="article:section"]',
        'meta[name="twitter:card"]',
        'meta[name="twitter:title"]',
        'meta[name="twitter:description"]',
        'meta[name="twitter:image"]',
        'meta[name="description"]'
      ]

      oldMetaSelectors.forEach(selector => {
        const element = document.querySelector(selector)
        if (element) {
          element.remove()
        }
      })

      // Métadonnées Open Graph (protocole Facebook)
      const metaTags = [
        { property: 'og:title', content: articleData.title },
        { property: 'og:description', content: articleData.description },
        { property: 'og:image', content: imageUrl },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: pageUrl },
        { property: 'og:site_name', content: 'CREFER' },
        { property: 'article:published_time', content: new Date().toISOString() },
        { property: 'article:author', content: 'CREFER' },
        { property: 'article:section', content: articleData.category },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: articleData.title },
        { name: 'twitter:description', content: articleData.description },
        { name: 'twitter:image', content: imageUrl },
        { name: 'description', content: articleData.description }
      ]

      // Ajouter les nouvelles métadonnées
      metaTags.forEach(tag => {
        const meta = document.createElement('meta')
        if (tag.property) {
          meta.setAttribute('property', tag.property)
        } else {
          meta.setAttribute('name', tag.name)
        }
        meta.setAttribute('content', tag.content)
        document.head.appendChild(meta)
      })

      // Ajouter le lien canonique
      let canonicalLink = document.querySelector('link[rel="canonical"]')
      if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.rel = 'canonical'
        document.head.appendChild(canonicalLink)
      }
      canonicalLink.href = pageUrl

      // Mettre à jour le title du document
      document.title = `${articleData.title} - CREFER`
    }
    
    const backgroundImageUrl = ref(new URL('../assets/images/imageback.jpg', import.meta.url).href)

    const currentArticle = computed(() => {
      if (article.value) {
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

        const images = Array.isArray(article.value.images) ? article.value.images.map(convertImagePath) : []
        const mainImage = convertImagePath(article.value.mainImage)
        
        return {
          ...article.value,
          subtitle: article.value.category,
          fullTitle: article.value.title,
          mainImage: mainImage,
          images: images && images.length > 0 ? images : (mainImage ? [mainImage] : [])
        }
      }
      return null
    })

    // Load article from Firebase
    onMounted(async () => {
      try {
        const articleId = route.params.id
        
        // D'abord, essayer de charger depuis Firebase (UUID)
        try {
          const loadedArticle = await getArticleById(articleId)
          article.value = loadedArticle
          updateMetaTags(loadedArticle)
          
          // Configurer le SEO
          seo.setSEO({
            title: `${loadedArticle.title} - CREFER`,
            description: loadedArticle.description,
            keywords: `${loadedArticle.category}, CREFER, actualités, articles`,
            canonical: `https://crefer.tech/articles/${loadedArticle.id}`
          })
          return // Succès, sortir
        } catch (firebaseError) {
          console.log('Article non trouvé en Firebase, essai dans articlesData...')
        }
        
        // Fallback: chercher dans articlesData (par numéro d'ID)
        const numericId = parseInt(articleId)
        if (!isNaN(numericId)) {
          const fallbackArticle = articlesData.find(a => a.id === numericId)
          if (fallbackArticle) {
            article.value = fallbackArticle
            updateMetaTags(fallbackArticle)
            
            seo.setSEO({
              title: `${fallbackArticle.title} - CREFER`,
              description: fallbackArticle.description,
              keywords: `${fallbackArticle.category}, CREFER, actualités, articles`,
              canonical: `https://crefer.tech/articles/${fallbackArticle.id}`
            })
            return // Succès
          }
        }
        
        // Si on arrive ici, l'article n'a pas été trouvé
        console.error('Article non trouvé:', articleId)
        // article.value reste null, ce qui affichera le message d'erreur
        
      } catch (error) {
        console.error('Erreur lors du chargement de l\'article:', error)
      } finally {
        loading.value = false
      }
      
      window.addEventListener('keydown', handleKeydown)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handleKeydown)
    })

    watch(currentArticle, (newArticle) => {
      if (newArticle) {
        updateMetaTags(newArticle)
      }
    })

    const openLightbox = (index) => {
      currentLightboxIndex.value = index
      showLightbox.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
      showLightbox.value = false
      document.body.style.overflow = 'auto'
    }

    const nextImage = () => {
      const imagesCount = currentArticle.value?.images?.length || 0
      if (currentLightboxIndex.value < imagesCount - 1) {
        currentLightboxIndex.value++
      }
    }

    const previousImage = () => {
      if (currentLightboxIndex.value > 0) {
        currentLightboxIndex.value--
      }
    }

    // Handle keyboard events for lightbox navigation
    const handleKeydown = (event) => {
      if (!showLightbox.value) return

      if (event.key === 'Escape') {
        closeLightbox()
      } else if (event.key === 'ArrowRight') {
        nextImage()
      } else if (event.key === 'ArrowLeft') {
        previousImage()
      }
    }

    return {
      backgroundImageUrl,
      currentArticle,
      showLightbox,
      currentLightboxIndex,
      openLightbox,
      closeLightbox,
      nextImage,
      previousImage,
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

article {
  animation: fadeIn 0.3s ease-out;
}
</style>
