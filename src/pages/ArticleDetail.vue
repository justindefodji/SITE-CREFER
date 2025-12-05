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
        <h1 class="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">{{ currentArticle.title }}</h1>
        <p class="text-lg lg:text-xl text-slate-200">{{ currentArticle.subtitle }}</p>
      </div>
    </section>

    <!-- Article Detail Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div class="max-w-2xl mx-auto">
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
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'ArticleDetail',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const showLightbox = ref(false)
    const currentLightboxIndex = ref(0)

    // Function to update meta tags for social sharing
    const updateMetaTags = (article) => {
      const baseUrl = window.location.origin
      const imageUrl = article.images && article.images.length > 0 ? article.images[0] : ''
      const pageUrl = `${baseUrl}/articles/${article.id}`

      // Update or create og:title
      let ogTitle = document.querySelector('meta[property="og:title"]')
      if (!ogTitle) {
        ogTitle = document.createElement('meta')
        ogTitle.setAttribute('property', 'og:title')
        document.head.appendChild(ogTitle)
      }
      ogTitle.setAttribute('content', article.fullTitle)

      // Update or create og:description
      let ogDescription = document.querySelector('meta[property="og:description"]')
      if (!ogDescription) {
        ogDescription = document.createElement('meta')
        ogDescription.setAttribute('property', 'og:description')
        document.head.appendChild(ogDescription)
      }
      ogDescription.setAttribute('content', article.description)

      // Update or create og:image
      let ogImage = document.querySelector('meta[property="og:image"]')
      if (!ogImage) {
        ogImage = document.createElement('meta')
        ogImage.setAttribute('property', 'og:image')
        document.head.appendChild(ogImage)
      }
      ogImage.setAttribute('content', imageUrl)

      // Update or create og:url
      let ogUrl = document.querySelector('meta[property="og:url"]')
      if (!ogUrl) {
        ogUrl = document.createElement('meta')
        ogUrl.setAttribute('property', 'og:url')
        document.head.appendChild(ogUrl)
      }
      ogUrl.setAttribute('content', pageUrl)

      // Update or create og:type
      let ogType = document.querySelector('meta[property="og:type"]')
      if (!ogType) {
        ogType = document.createElement('meta')
        ogType.setAttribute('property', 'og:type')
        document.head.appendChild(ogType)
      }
      ogType.setAttribute('content', 'article')

      // Update or create twitter:card
      let twitterCard = document.querySelector('meta[name="twitter:card"]')
      if (!twitterCard) {
        twitterCard = document.createElement('meta')
        twitterCard.setAttribute('name', 'twitter:card')
        document.head.appendChild(twitterCard)
      }
      twitterCard.setAttribute('content', 'summary_large_image')

      // Update or create twitter:image
      let twitterImage = document.querySelector('meta[name="twitter:image"]')
      if (!twitterImage) {
        twitterImage = document.createElement('meta')
        twitterImage.setAttribute('name', 'twitter:image')
        document.head.appendChild(twitterImage)
      }
      twitterImage.setAttribute('content', imageUrl)
    }
    
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

    const articles = {
      '1': {
        id: '1',
        title: 'Soutenance de Mémoire',
        fullTitle: 'Soutenance de Mémoire - Promotion 12 SPV',
        subtitle: 'Une étape décisive vers le succès',
        date: '31 OCT 2025',
        category: 'Événement important',
        description: 'Ce vendredi 31 octobre, 12 étudiants de la filière SPV (Solaire Photovoltaïque) soutiendront leur mémoire de fin de formation. Une étape décisive qui marque l\'aboutissement de plusieurs mois d\'efforts, de rigueur et de passion !',
        fullContent: 'Ces étudiants ont suivi une formation rigoureuse et complète dans le domaine des énergies renouvelables. La soutenance de mémoire est une excellente opportunité pour eux de démontrer leur compréhension approfondie et leurs compétences pratiques. Chaque soutenance est un moment crucial où les étudiants présentent leurs recherches et leurs conclusions devant un jury d\'experts.',
        images: [soutenanceImageUrl.value]
      },
      '2': {
        id: '2',
        title: 'Lancement de la 14ème Promotion',
        fullTitle: 'Lancement de la 14ème Promotion des Formations Modulaires',
        subtitle: 'Bienvenue aux nouveaux apprenants',
        date: '14 OCT 2025',
        category: 'Rentrée académique',
        description: 'Ce lundi 14 octobre marque le lancement de la 14ème promotion des formations modulaires de 06 et 12 mois. Bienvenue aux nouveaux apprenants ! CREFER confirme son engagement à former des techniciens compétents et opérationnels.',
        fullContent: 'Les formations modulaires offrent une grande flexibilité et permettent aux apprenants de développer des compétences spécifiques de manière progressive et adaptée à leurs besoins. Cette 14ème promotion accueille des étudiants motivés et déterminés à l\'excellence dans les domaines des énergies renouvelables. Notre pédagogie innovante combine la théorie et la pratique pour assurer une formation de qualité.',
        images: [promotionImage1Url.value, promotionImage2Url.value, promotionImage3Url.value]
      },
      '3': {
        id: '3',
        title: '1500+ Étudiants Formés',
        fullTitle: '1500+ Étudiants Formés et Transformés',
        subtitle: 'Nos success stories et réalisations',
        date: '2021 - NOS RÉALISATIONS',
        category: 'Success Stories',
        description: 'Depuis sa création, CREFER a déjà formé près de 1500 étudiants du Togo et d\'ailleurs. Découvrez en images nos anciens étudiants en pleine immersion sur le terrain !',
        fullContent: 'Nos anciens étudiants travaillent maintenant dans des entreprises majeures et contribuent au développement des énergies renouvelables en Afrique de l\'Ouest. Leurs succès professionnels témoignent de la qualité de nos formations et de notre approche pédagogique axée sur la pratique. Chaque année, de nouveaux techniciens qualifiés sortent de CREFER et font la différence dans l\'industrie.',
        images: [solarImage1Url.value, solarImage2Url.value]
      },
      '4': {
        id: '4',
        title: 'Stage Concret',
        fullTitle: 'CREFER, la Garantie d\'un Stage Concret !',
        subtitle: 'Formation pratique et immersion professionnelle',
        date: 'NOVEMBRE 2025',
        category: 'Formation Pratique',
        description: 'Nos étudiants maîtrisent chaque étape : du dimensionnement à l\'installation. Chaque formation est ancrée dans la réalité du terrain, garantissant une expérience pratique authentique !',
        fullContent: 'Pendant les stages, nos étudiants travaillent sur des projets réels : installation de systèmes solaires photovoltaïques, pose de panneaux, maintenance et dépannage. Cette approche pédagogique est ce qui différencie CREFER dans le secteur de la formation technique. Les apprenants acquièrent une expérience pratique inestimable qui leur permet de commencer à travailler immédiatement après leur formation.',
        images: [installImage1Url.value, installImage2Url.value, installImage3Url.value, installImage4Url.value]
      },
      '5': {
        id: '5',
        title: 'Examen Blanc BT',
        fullTitle: 'Examen Blanc – BT Électrotechnique',
        subtitle: 'Excellence académique et préparation à l\'examen',
        date: 'NOVEMBRE 2025',
        category: 'Évaluation & Excellence',
        description: 'Nos étudiants de troisième année BT Électrotechnique sont en examen blanc, une étape cruciale dans leur préparation à l\'examen national prévu pour juillet 2025. Succès à tous !',
        fullContent: 'L\'examen blanc permet aux étudiants d\'identifier leurs forces et faiblesses avant l\'examen national. Nos formateurs fournissent un accompagnement personnalisé et des ressources pédagogiques pour garantir le succès de chaque étudiant. Nous croyons que la persévérance et la pratique régulière sont les clés de l\'excellence académique.',
        images: [examImage1Url.value, examImage2Url.value, examImage3Url.value, examImage4Url.value]
      }
    }

    const currentArticle = computed(() => {
      const articleId = route.params.id
      return articles[articleId] || articles['1']
    })

    // Update meta tags when article changes
    onMounted(() => {
      updateMetaTags(currentArticle.value)
    })

    watch(currentArticle, (newArticle) => {
      updateMetaTags(newArticle)
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
      if (currentLightboxIndex.value < currentArticle.value.images.length - 1) {
        currentLightboxIndex.value++
      }
    }

    const previousImage = () => {
      if (currentLightboxIndex.value > 0) {
        currentLightboxIndex.value--
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
      previousImage
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
