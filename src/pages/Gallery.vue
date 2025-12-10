<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section with configurable background image (maquette) -->
    <section
      class="relative min-h-screen text-white flex items-center overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    >
      <!-- Dark overlay for contrast -->
      <div class="absolute inset-0 bg-black/55 z-10"></div>
      <!-- Bottom gradient to match maquette darker base -->
      <div class="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 to-transparent z-15"></div>

      <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-20 py-20 animate-fade-in-up">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left content: aligned left with roomy padding -->
          <div class="flex flex-col justify-center">
            <div class="max-w-3xl">
              <div class="text-left">
                <div class="text-yellow-300 text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in-up delay-100" style="font-family: 'Montserrat', sans-serif;">Galerie</div>
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up delay-200" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">GALERIE DES PROJETS & FORMATIONS</h1>

                <div class="space-y-3 mb-8 animate-fade-in-up delay-300">
                  <p class="text-lg md:text-xl lg:text-2xl font-bold tracking-tight leading-tight text-blue-100" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.3px;">Découvrez nos installations, nos étudiants et nos ateliers pratiques</p>
                </div>

                <router-link
                  to="/contact"
                  class="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors font-bold text-lg animate-fade-in-up delay-400 hover:shadow-lg transform hover:-translate-y-1" style="font-family: 'Montserrat', sans-serif;"
                >
                  Demander une visite
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Right column left empty so background image shows through (responsive) -->
          <div class="hidden lg:block"></div>
        </div>
      </div>
    </section>

    <!-- Gallery Grid Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-cyan-50 animate-fade-in-up delay-100">
      <div class="max-w-7xl mx-auto">
        <!-- Filter Tabs -->
        <div class="flex justify-center gap-4 mb-12 flex-wrap animate-fade-in-up delay-200">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-full font-semibold transition-colors transform hover:scale-105 hover:shadow-lg',
              selectedCategory === category
                ? 'bg-yellow-400 text-gray-900 shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-yellow-400'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up delay-300">
          <div
            v-for="(item, index) in filteredItems"
            :key="item.id"
            @click="openLightbox(index)"
            :class="`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in-up`"
            :style="{ animationDelay: `${(index % 3) * 100}ms` }"
          >
            <!-- Image -->
            <div class="w-full h-64 overflow-hidden">
              <picture class="w-full h-full block">
                <source type="image/webp" :srcset="getWebpSrcset(item.image)" sizes="(max-width: 640px) 480px, (max-width: 1024px) 800px, 1200px" />
                <img :src="item.image" alt="" loading="lazy" decoding="async" class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" />
              </picture>
            </div>

            <!-- Overlay on Hover -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end">
              <div class="w-full p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 class="font-bold text-lg" style="font-family: 'Montserrat', sans-serif;">{{ item.title }}</h3>
                <p class="text-sm opacity-90">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredItems.length === 0" class="text-center py-12">
          <p class="text-gray-500 text-lg">Aucune image dans cette catégorie</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <transition name="fade">
      <div v-if="lightboxOpen" class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" @click.self="closeLightbox">
        <!-- Close Button -->
        <button
          @click="closeLightbox"
          class="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors z-60"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Image Container -->
        <div class="relative max-w-5xl w-full h-5/6 flex flex-col justify-center">
          <div class="relative w-full h-full flex items-center justify-center">
            <picture class="w-full h-full flex items-center justify-center">
              <source type="image/webp" :srcset="getWebpSrcset(currentLightboxItem.image)" sizes="(max-width: 768px) 100vw, 90vw" />
              <img :src="currentLightboxItem.image" :alt="currentLightboxItem.title" decoding="async" class="w-full h-full object-contain rounded-lg" />
            </picture>

            <!-- Left Navigation Button - ON IMAGE -->
            <button
              @click="previousImage"
              :disabled="currentLightboxIndex === 0"
              class="absolute top-1/2 -translate-y-1/2 bg-yellow-400/60 hover:bg-yellow-500/80 disabled:bg-gray-500/40 disabled:cursor-not-allowed text-gray-900 p-3 sm:p-4 rounded-full transition-colors flex items-center justify-center z-20 hover:scale-110 transform left-2 sm:left-4 backdrop-blur-sm"
            >
              <svg class="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>

            <!-- Right Navigation Button - ON IMAGE -->
            <button
              @click="nextImage"
              :disabled="currentLightboxIndex === filteredItems.length - 1"
              class="absolute top-1/2 -translate-y-1/2 bg-yellow-400/60 hover:bg-yellow-500/80 disabled:bg-gray-500/40 disabled:cursor-not-allowed text-gray-900 p-3 sm:p-4 rounded-full transition-colors flex items-center justify-center z-20 hover:scale-110 transform right-2 sm:right-4 backdrop-blur-sm"
            >
              <svg class="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <!-- Image Info -->
          <div class="mt-6 text-white text-center">
            <h3 class="text-2xl font-bold mb-2" style="font-family: 'Montserrat', sans-serif;">{{ currentLightboxItem.title }}</h3>
            <p class="text-gray-300 mb-4">{{ currentLightboxItem.description }}</p>
            <p class="text-gray-400 text-sm">{{ currentLightboxIndex + 1 }} / {{ filteredItems.length }}</p>
          </div>
        </div>
      </div>
    </transition>

    <!-- CTA Section -->
    <!-- <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white animate-fade-in-up">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4 animate-slide-in-left" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">Galerie Complète</h2>
        <p class="text-lg text-indigo-100 mb-8 animate-fade-in-up delay-100">
          Découvrez nos installations, nos formations et nos étudiants en action
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <button class="inline-flex items-center gap-2 px-8 py-3 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-colors font-bold transform hover:-translate-y-1 hover:scale-105">
            Charger plus de photos
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
          </button>
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-bold hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
          >
            Demander une visite
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import backgroundImg from '../assets/images/_DSC4869-1200.jpg'
import img1 from '../assets/images/_DSC0294.JPG'
import img2 from '../assets/images/_DSC0332.jpg'
import img3 from '../assets/images/_DSC0335.jpg'
import img4 from '../assets/images/_DSC0343.jpg'
import img5 from '../assets/images/_DSC0350.jpg'
import img6 from '../assets/images/_DSC4869-1200.jpg'

export default {
  name: 'Gallery',
  setup() {
    const backgroundImageUrl = ref(backgroundImg)
    const selectedCategory = ref('Tous')
    const lightboxOpen = ref(false)
    const currentLightboxIndex = ref(0)
    const categories = ['Tous', 'Théorie', 'Travaux pratiques', 'Stage', 'Sortie pédagogique', 'Autres']
    
    const galleryItems = [
      { id: 1, title: 'Atelier Électronique 1', description: 'Travaux pratiques en électronique', category: 'Travaux pratiques', image: img1 },
      { id: 2, title: 'Atelier Électronique 2', description: 'Manipulation de circuits électroniques', category: 'Travaux pratiques', image: img2 },
      { id: 3, title: 'Atelier Électricité', description: 'Travaux pratiques en électricité', category: 'Travaux pratiques', image: img3 },
      { id: 4, title: 'Cours Théorique', description: 'Session de cours théorique en classe', category: 'Théorie', image: img4 },
      { id: 5, title: 'Sortie Pédagogique', description: 'Visite d\'une installation industrielle', category: 'Sortie pédagogique', image: img5 },
      { id: 6, title: 'Projet de Stage', description: 'Présentation d\'un projet réalisé en stage', category: 'Stage', image: img6 }

    ]

    const filteredItems = computed(() => {
      if (selectedCategory.value === 'Tous') {
        return galleryItems
      }
      return galleryItems.filter(item => item.category === selectedCategory.value)
    })

    const currentLightboxItem = computed(() => {
      return filteredItems.value[currentLightboxIndex.value]
    })

    function getWebpSrcset(original) {
      // Pour maintenant, retourner une chaîne vide pour désactiver WebP
      // Car les fichiers WebP ne sont pas générés avec les images importées
      return ''
    }

    function openLightbox(index) {
      currentLightboxIndex.value = index
      lightboxOpen.value = true
      document.body.style.overflow = 'hidden'
    }

    function closeLightbox() {
      lightboxOpen.value = false
      document.body.style.overflow = 'auto'
    }

    function nextImage() {
      if (currentLightboxIndex.value < filteredItems.value.length - 1) {
        currentLightboxIndex.value++
      }
    }

    function previousImage() {
      if (currentLightboxIndex.value > 0) {
        currentLightboxIndex.value--
      }
    }

    function handleKeyboard(e) {
      if (!lightboxOpen.value) return
      
      if (e.key === 'ArrowRight') {
        nextImage()
      } else if (e.key === 'ArrowLeft') {
        previousImage()
      } else if (e.key === 'Escape') {
        closeLightbox()
      }
    }

    onMounted(() => {
      window.addEventListener('keydown', handleKeyboard)
    })

    onUnmounted(() => {
      // Close lightbox if open
      lightboxOpen.value = false
      document.body.style.overflow = 'auto'
      currentLightboxIndex.value = 0
      // Remove keyboard listener
      window.removeEventListener('keydown', handleKeyboard)
    })

    return {
      selectedCategory,
      categories,
      filteredItems,
      backgroundImageUrl,
      getWebpSrcset,
      lightboxOpen,
      currentLightboxIndex,
      currentLightboxItem,
      openLightbox,
      closeLightbox,
      nextImage,
      previousImage
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
