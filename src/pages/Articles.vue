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

    <!-- Articles Section - Grid Style -->
    <section class="py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <!-- Section Title -->
        <div class="mb-12">
          <h2 class="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-2xl font-bold rounded" style="font-family: 'Montserrat', sans-serif;">Derniers articles</h2>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Article 1 Card -->
          <div class="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
            <!-- Image Container -->
            <div class="w-full h-40 bg-gray-100 overflow-hidden rounded-t-xl">
              <img 
                :src="soutenanceImageUrl" 
                alt="Soutenance Mémoire" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Content Container -->
            <div class="p-4 flex flex-col justify-between h-48">
              <router-link 
                to="/articles/1"
                class="text-base font-bold text-gray-900 hover:text-yellow-600 transition-colors line-clamp-3"
              >
                Soutenance de Mémoire - Promotion 12 SPV
              </router-link>

              <!-- Link -->
              <router-link
                to="/articles/1"
                class="text-yellow-600 hover:text-yellow-700 font-semibold text-xs transition-colors inline-block"
              >
                Lire l'article »
              </router-link>
            </div>
          </div>

          <!-- Article 2 Card -->
          <div class="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
            <!-- Image Container -->
            <div class="w-full h-40 bg-gray-100 overflow-hidden rounded-t-xl">
              <img 
                :src="promotionImage1Url" 
                alt="14ème Promotion" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Content Container -->
            <div class="p-4 flex flex-col justify-between h-48">
              <router-link 
                to="/articles/2"
                class="text-base font-bold text-gray-900 hover:text-yellow-600 transition-colors line-clamp-3"
              >
                Lancement de la 14ème Promotion des Formations Modulaires
              </router-link>

              <!-- Link -->
              <router-link
                to="/articles/2"
                class="text-yellow-600 hover:text-yellow-700 font-semibold text-xs transition-colors inline-block"
              >
                Lire l'article »
              </router-link>
            </div>
          </div>

          <!-- Article 3 Card -->
          <div class="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
            <!-- Image Container -->
            <div class="w-full h-40 bg-gray-100 overflow-hidden rounded-t-xl">
              <img 
                :src="solarImage1Url" 
                alt="Réalisations" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Content Container -->
            <div class="p-4 flex flex-col justify-between h-48">
              <router-link 
                to="/articles/3"
                class="text-base font-bold text-gray-900 hover:text-yellow-600 transition-colors line-clamp-3"
              >
                1500+ Étudiants Formés et Transformés
              </router-link>

              <!-- Link -->
              <router-link
                to="/articles/3"
                class="text-yellow-600 hover:text-yellow-700 font-semibold text-xs transition-colors inline-block"
              >
                Lire l'article »
              </router-link>
            </div>
          </div>

          <!-- Article 4 Card -->
          <div class="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
            <!-- Image Container -->
            <div class="w-full h-40 bg-gray-100 overflow-hidden rounded-t-xl">
              <img 
                :src="installImage1Url" 
                alt="Formation Pratique" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Content Container -->
            <div class="p-4 flex flex-col justify-between h-48">
              <router-link 
                to="/articles/4"
                class="text-base font-bold text-gray-900 hover:text-yellow-600 transition-colors line-clamp-3"
              >
                 CREFER, la Garantie d'un Stage Concret !
              </router-link>

              <!-- Link -->
              <router-link
                to="/articles/4"
                class="text-yellow-600 hover:text-yellow-700 font-semibold text-xs transition-colors inline-block"
              >
                Lire l'article »
              </router-link>
            </div>
          </div>

          <!-- Article 5 Card -->
          <div class="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
            <!-- Image Container -->
            <div class="w-full h-40 bg-gray-100 overflow-hidden rounded-t-xl">
              <img 
                :src="examImage1Url" 
                alt="Examen Blanc" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Content Container -->
            <div class="p-4 flex flex-col justify-between h-48">
              <router-link 
                to="/articles/5"
                class="text-base font-bold text-gray-900 hover:text-yellow-600 transition-colors line-clamp-3"
              >
                Examen Blanc – BT Électrotechnique 
              </router-link>

              <!-- Link -->
              <router-link
                to="/articles/5"
                class="text-yellow-600 hover:text-yellow-700 font-semibold text-xs transition-colors inline-block"
              >
                Lire l'article »
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Articles',
  setup() {
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