<template>
  <div class="min-h-screen flex flex-col bg-white">
    <InfosBar />
    <Navigation />
    <main class="flex-1 pt-32">
      <router-view :key="$route.fullPath" />
    </main>
    <Footer />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import InfosBar from './components/InfosBar.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    InfosBar
  },
  setup() {
    const router = useRouter()

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
      // Scroller vers le haut de la page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    onMounted(() => {
      // Ajouter un listener pour les changements de route
      router.beforeEach((to, from, next) => {
        handleRouteChange()
        next()
      })
    })

    return {}
  }
}
</script>

<style>
/* Les styles sont fournis par Tailwind via src/assets/index.css */
</style>
