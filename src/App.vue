<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Loading screen while Firebase initializes -->
    <div v-if="!authInitialized && isAdminRoute" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 text-center">
        <div class="mb-4">
          <div class="w-12 h-12 border-4 border-yellow-400 border-t-black rounded-full animate-spin mx-auto"></div>
        </div>
        <p class="text-gray-700 font-medium">Initialisation en cours...</p>
      </div>
    </div>

    <!-- Préchargement des images critiques -->
    <ImagePreloader />
    
    <!-- Masquer la navbar et infosBar en mode admin -->
    <InfosBar v-if="!isAdminRoute" />
    <Navigation v-if="!isAdminRoute" />
    
    <main class="flex-1" :class="{ 'pt-16': !isAdminRoute }">
      <router-view :key="$route.fullPath" />
    </main>
    
    <!-- Masquer le footer en mode admin -->
    <Footer v-if="!isAdminRoute" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted, computed } from 'vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import InfosBar from './components/InfosBar.vue'
import ImagePreloader from './components/ImagePreloader.vue'
import { authInitialized } from './services/authService'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    InfosBar,
    ImagePreloader
  },
  setup() {
    const router = useRouter()

    // Vérifier si on est en route admin
    const isAdminRoute = computed(() => {
      return router.currentRoute.value.path.startsWith('/admin')
    })

    const triggerAnimationReset = () => {
      // Forcer le repaint/reflow pour relancer les animations CSS
      setTimeout(() => {
        const elements = document.querySelectorAll('[class*="animate-"]')
        elements.forEach(el => {
          el.style.animation = 'none'
          // Force le reflow
          el.offsetHeight
          el.style.animation = ''
        })
      }, 0)
    }

    const handleRouteChange = () => {
      // Réinitialiser les animations quand on change de route
      triggerAnimationReset()
      // Scroller vers le haut de la page immédiatement
      window.scrollTo(0, 0)
    }

    onMounted(() => {
      // Enregistrer le service worker pour le cache des images
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(err => {
          console.log('SW registration failed:', err)
        })
      }

      // Remonte en haut au chargement initial
      window.scrollTo(0, 0)
      
      // Ajouter un listener pour les changements de route
      router.beforeEach((to, from, next) => {
        handleRouteChange()
        next()
      })
    })

    return {
      isAdminRoute,
      authInitialized
    }
  }
}
</script>

<style>
/* Les styles sont fournis par Tailwind via src/assets/index.css */
</style>
