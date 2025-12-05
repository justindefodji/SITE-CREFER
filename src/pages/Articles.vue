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

    <!-- Articles Section - Social Feed Style -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div class="max-w-2xl mx-auto space-y-6">
        <!-- Article 1 Post - Social Style -->
        <article class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
          <!-- Post Header -->
          <div class="px-6 py-4 border-b border-gray-100">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-bold text-gray-900">CREFER 🎓</h3>
              <span class="text-xs text-gray-500">31 OCT 2025</span>
            </div>
            <p class="text-sm text-gray-600">Événement important</p>
          </div>

          <!-- Post Content -->
          <div class="px-6 py-4">
            <router-link to="/articles/1" class="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-600 transition-colors inline-block cursor-pointer">
              <h2 class="hover:underline">Soutenance de Mémoire - Promotion 12 SPV</h2>
            </router-link>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Ce vendredi 31 octobre, 12 étudiants de la filière SPV (Solaire Photovoltaïque) soutiendront leur mémoire de fin de formation. Une étape décisive qui marque l'aboutissement de plusieurs mois d'efforts, de rigueur et de passion !
            </p>
            <router-link
              to="/articles/1"
              class="text-yellow-600 hover:text-yellow-700 font-semibold text-sm transition-colors inline-block"
            >
              + Voir plus
            </router-link>
            <div v-if="expandedArticles.article1" class="mt-3 pt-3 border-t border-gray-200">
              <p class="text-gray-700 leading-relaxed">
                Ces étudiants ont suivi une formation rigoureuse et complète dans le domaine des énergies renouvelables. La soutenance de mémoire est une excellente opportunité pour eux de démontrer leur compréhension approfondie et leurs compétences pratiques.
              </p>
            </div>
          </div>

          <!-- Post Image -->
          <div class="w-full h-72 bg-gray-100 overflow-hidden">
            <img 
              :src="soutenanceImageUrl" 
              alt="Soutenance Mémoire" 
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              @click="openLightbox(0)"
            />
          </div>

          <!-- Link Card -->
          <router-link
            to="/articles/1"
            class="w-full px-6 py-4 border-t border-gray-100 bg-white hover:bg-gray-50 transition-colors flex items-stretch gap-0 no-underline"
          >
            <div class="w-32 h-32 bg-gray-100 flex-shrink-0 overflow-hidden rounded-lg">
              <img 
                :src="soutenanceImageUrl" 
                alt="article link" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1 p-4 flex flex-col justify-between text-left">
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase">crefer.tech</p>
                <h4 class="text-sm font-bold text-gray-900 line-clamp-2">Soutenance Mémoire SPV 2025</h4>
                <p class="text-xs text-gray-600 line-clamp-1 mt-1">Découvrez notre événement académique majeur</p>
              </div>
            </div>
          </router-link>
        </article>

        <!-- Article 2 Post -->
        <article class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
          <!-- Post Header -->
          <div class="px-6 py-4 border-b border-gray-100">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-bold text-gray-900">CREFER 🎓</h3>
              <span class="text-xs text-gray-500">14 OCT 2025</span>
            </div>
            <p class="text-sm text-gray-600">Rentrée académique</p>
          </div>

          <!-- Post Content -->
          <div class="px-6 py-4">
            <router-link to="/articles/2" class="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-600 transition-colors inline-block cursor-pointer">
              <h2 class="hover:underline">Lancement de la 14ème Promotion des Formations Modulaires</h2>
            </router-link>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Ce lundi 14 octobre marque le lancement de la 14ème promotion des formations modulaires de 06 et 12 mois. Bienvenue aux nouveaux apprenants ! CREFER confirme son engagement à former des techniciens compétents et opérationnels.
            </p>
            <router-link
              to="/articles/2"
              class="text-yellow-600 hover:text-yellow-700 font-semibold text-sm transition-colors inline-block"
            >
              + Voir plus
            </router-link>
            <div v-if="expandedArticles.article2" class="mt-3 pt-3 border-t border-gray-200">
              <p class="text-gray-700 leading-relaxed mb-3">
                Les formations modulaires offrent une grande flexibilité et permettent aux apprenants de développer des compétences spécifiques de manière progressive et adaptée à leurs besoins. Cette 14ème promotion accueille des étudiants motivés et déterminés à excellence dans les domaines des énergies renouvelables.
              </p>
            </div>
            <div class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-3 border-l-4 border-yellow-400 mt-3">
              <p class="text-sm font-semibold text-gray-800">Bienvenue aux nouveaux apprenants ! 🚀</p>
            </div>
          </div>

          <!-- Post Gallery -->
          <div class="grid grid-cols-2 gap-1 w-full h-72 bg-gray-100">
            <div class="overflow-hidden cursor-pointer group" @click="openLightbox(0)">
              <img :src="promotionImage1Url" alt="Promo 14" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="overflow-hidden cursor-pointer group" @click="openLightbox(1)">
              <img :src="promotionImage2Url" alt="Promo 14" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
            </div>
          </div>

          <!-- Link Card -->
          <router-link
            to="/articles/2"
            class="w-full px-6 py-4 border-t border-gray-100 bg-white hover:bg-gray-50 transition-colors flex items-stretch gap-0 no-underline"
          >
            <div class="w-32 h-32 bg-gray-100 flex-shrink-0 overflow-hidden rounded-lg">
              <img :src="promotionImage1Url" alt="article link" class="w-full h-full object-cover"/>
            </div>
            <div class="flex-1 p-4 flex flex-col justify-between text-left">
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase">crefer.tech</p>
                <h4 class="text-sm font-bold text-gray-900 line-clamp-2">14ème Promotion Formations Modulaires</h4>
                <p class="text-xs text-gray-600 line-clamp-1 mt-1">Rentrée académique 2025 - Formations qualifiantes</p>
              </div>
            </div>
          </router-link>
        </article>

        <!-- Article 3 Post -->
        <article class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
          <!-- Post Header -->
          <div class="px-6 py-4 border-b border-gray-100">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-bold text-gray-900">CREFER 🎓</h3>
              <span class="text-xs text-gray-500">2021 - NOS RÉALISATIONS</span>
            </div>
            <p class="text-sm text-gray-600">Success Stories</p>
          </div>

          <!-- Post Content -->
          <div class="px-6 py-4">
            <router-link to="/articles/3" class="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-600 transition-colors inline-block cursor-pointer">
              <h2 class="hover:underline">1500+ Étudiants Formés et Transformés</h2>
            </router-link>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Depuis sa création, CREFER a déjà formé près de 1500 étudiants du Togo et d'ailleurs. Découvrez en images nos anciens étudiants en pleine immersion sur le terrain !
            </p>
            <router-link
              to="/articles/3"
              class="text-yellow-600 hover:text-yellow-700 font-semibold text-sm transition-colors inline-block"
            >
              + Voir plus
            </router-link>
            <div v-if="expandedArticles.article3" class="mt-3 pt-3 border-t border-gray-200">
              <p class="text-gray-700 leading-relaxed mb-3">
                Nos anciens étudiants travaillent maintenant dans des entreprises majeures et contribuent au développement des énergies renouvelables en Afrique de l'Ouest. Leurs succès professionnels témoignent de la qualité de nos formations et de notre approche pédagogique axée sur la pratique.
              </p>
            </div>
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 border-l-4 border-purple-400 mt-3">
              <p class="text-sm font-semibold text-gray-800">Une nouvelle génération prête à relever les défis énergétiques de l'Afrique ! 💡</p>
            </div>
          </div>

          <!-- Post Gallery -->
          <div class="grid grid-cols-2 gap-1 w-full h-72 bg-gray-100">
            <div class="overflow-hidden cursor-pointer group" @click="openSolarLightbox(0)">
              <img :src="solarImage1Url" alt="Réalisations" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="overflow-hidden cursor-pointer group" @click="openSolarLightbox(1)">
              <img :src="solarImage2Url" alt="Réalisations" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
            </div>
          </div>

          <!-- Link Card -->
          <router-link
            to="/articles/3"
            class="w-full px-6 py-4 border-t border-gray-100 bg-white hover:bg-gray-50 transition-colors flex items-stretch gap-0 no-underline"
          >
            <div class="w-32 h-32 bg-gray-100 flex-shrink-0 overflow-hidden rounded-lg">
              <img :src="solarImage1Url" alt="article link" class="w-full h-full object-cover"/>
            </div>
            <div class="flex-1 p-4 flex flex-col justify-between text-left">
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase">crefer.tech</p>
                <h4 class="text-sm font-bold text-gray-900 line-clamp-2">1500+ Étudiants Formés</h4>
                <p class="text-xs text-gray-600 line-clamp-1 mt-1">Découvrez nos success stories et réalisations</p>
              </div>
            </div>
          </router-link>
        </article>

        <!-- Article 4 Post -->
        <article class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
          <!-- Post Header -->
          <div class="px-6 py-4 border-b border-gray-100">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-bold text-gray-900">CREFER 🎓</h3>
              <span class="text-xs text-gray-500">NOVEMBRE 2025</span>
            </div>
            <p class="text-sm text-gray-600">Formation Pratique</p>
          </div>

          <!-- Post Content -->
          <div class="px-6 py-4">
            <router-link to="/articles/4" class="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-600 transition-colors inline-block cursor-pointer">
              <h2 class="hover:underline">⚡ CREFER, la Garantie d'un Stage Concret !</h2>
            </router-link>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Nos étudiants maîtrisent chaque étape : du dimensionnement à l'installation. Chaque formation est ancrée dans la réalité du terrain, garantissant une expérience pratique authentique ! 🔧
            </p>
            <router-link
              to="/articles/4"
              class="text-yellow-600 hover:text-yellow-700 font-semibold text-sm transition-colors inline-block"
            >
              + Voir plus
            </router-link>
            <div v-if="expandedArticles.article4" class="mt-3 pt-3 border-t border-gray-200">
              <p class="text-gray-700 leading-relaxed mb-3">
                Pendant les stages, nos étudiants travaillent sur des projets réels : installation de systèmes solaires photovoltaïques, pose de panneaux, maintenance et dépannage. Cette approche pédagogique est ce qui différencie CREFER dans le secteur de la formation technique.
              </p>
            </div>
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3 border-l-4 border-orange-400 mt-3">
              <p class="text-sm font-semibold text-gray-800">Choisis CREFER et deviens le pro du solaire ! ☀️</p>
            </div>
          </div>

          <!-- Post Gallery -->
          <div class="grid grid-cols-2 gap-1 w-full h-72 bg-gray-100">
            <div class="overflow-hidden cursor-pointer group" @click="openInstallLightbox(0)">
              <img :src="installImage1Url" alt="Stage" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="overflow-hidden cursor-pointer group" @click="openInstallLightbox(1)">
              <img :src="installImage2Url" alt="Stage" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
            </div>
          </div>

          <!-- Link Card -->
          <router-link
            to="/articles/4"
            class="w-full px-6 py-4 border-t border-gray-100 bg-white hover:bg-gray-50 transition-colors flex items-stretch gap-0 no-underline"
          >
            <div class="w-32 h-32 bg-gray-100 flex-shrink-0 overflow-hidden rounded-lg">
              <img :src="installImage1Url" alt="article link" class="w-full h-full object-cover"/>
            </div>
            <div class="flex-1 p-4 flex flex-col justify-between text-left">
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase">crefer.tech</p>
                <h4 class="text-sm font-bold text-gray-900 line-clamp-2">Formation Pratique - Installation Solaire</h4>
                <p class="text-xs text-gray-600 line-clamp-1 mt-1">Stage concret et formation professionnelle</p>
              </div>
            </div>
          </router-link>
        </article>

        <!-- Article 5 Post -->
        <article class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
          <!-- Post Header -->
          <div class="px-6 py-4 border-b border-gray-100">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-bold text-gray-900">CREFER 🎓</h3>
              <span class="text-xs text-gray-500">NOVEMBRE 2025</span>
            </div>
            <p class="text-sm text-gray-600">Évaluation & Excellence</p>
          </div>

          <!-- Post Content -->
          <div class="px-6 py-4">
            <router-link to="/articles/5" class="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-600 transition-colors inline-block cursor-pointer">
              <h2 class="hover:underline">🎓 Examen Blanc – BT Électrotechnique ⚡</h2>
            </router-link>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Nos étudiants de troisième année BT Électrotechnique sont en examen blanc, une étape cruciale dans leur préparation à l'examen national prévu pour juillet 2025. Succès à tous !
            </p>
            <router-link
              to="/articles/5"
              class="text-yellow-600 hover:text-yellow-700 font-semibold text-sm transition-colors inline-block"
            >
              + Voir plus
            </router-link>
            <div v-if="expandedArticles.article5" class="mt-3 pt-3 border-t border-gray-200">
              <p class="text-gray-700 leading-relaxed mb-3">
                L'examen blanc permet aux étudiants d'identifier leurs forces et faiblesses avant l'examen national. Nos formateurs fournissent un accompagnement personnalisé et des ressources pédagogiques pour garantir le succès de chaque étudiant. Nous croyons que la persévérance et la pratique régulière sont les clés de l'excellence.
              </p>
            </div>
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border-l-4 border-blue-400 mt-3">
              <p class="text-sm font-semibold text-gray-800">Le chemin vers l'excellence passe par la pratique et la persévérance ! 💪</p>
            </div>
          </div>

          <!-- Post Gallery -->
          <div class="grid grid-cols-2 gap-1 w-full h-72 bg-gray-100">
            <div class="overflow-hidden cursor-pointer group" @click="openExamLightbox(0)">
              <img :src="examImage1Url" alt="Examen" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
            </div>
            <div class="overflow-hidden cursor-pointer group" @click="openExamLightbox(1)">
              <img :src="examImage2Url" alt="Examen" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
            </div>
          </div>

          <!-- Link Card -->
          <router-link
            to="/articles/5"
            class="w-full px-6 py-4 border-t border-gray-100 bg-white hover:bg-gray-50 transition-colors flex items-stretch gap-0 no-underline"
          >
            <div class="w-32 h-32 bg-gray-100 flex-shrink-0 overflow-hidden rounded-lg">
              <img :src="examImage1Url" alt="article link" class="w-full h-full object-cover"/>
            </div>
            <div class="flex-1 p-4 flex flex-col justify-between text-left">
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase">crefer.tech</p>
                <h4 class="text-sm font-bold text-gray-900 line-clamp-2">Examen Blanc BT Électrotechnique</h4>
                <p class="text-xs text-gray-600 line-clamp-1 mt-1">Excellence académique et évaluation 2025</p>
              </div>
            </div>
          </router-link>
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
        <img :src="lightboxImages[currentLightboxIndex]" :alt="`Image ${currentLightboxIndex + 1}`" class="w-full h-auto rounded-lg" />
        <button 
          v-if="currentLightboxIndex > 0"
          @click="previousLightboxImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          v-if="currentLightboxIndex < lightboxImages.length - 1"
          @click="nextLightboxImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Lightbox pour autres galeries -->
    <div 
      v-if="showSolarLightbox" 
      class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      @click="closeSolarLightbox"
    >
      <div class="relative max-w-4xl w-full" @click.stop>
        <button 
          @click="closeSolarLightbox"
          class="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img :src="solarLightboxImages[currentSolarLightboxIndex]" :alt="`Image ${currentSolarLightboxIndex + 1}`" class="w-full h-auto rounded-lg" />
      </div>
    </div>

    <div 
      v-if="showInstallLightbox" 
      class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      @click="closeInstallLightbox"
    >
      <div class="relative max-w-4xl w-full" @click.stop>
        <button 
          @click="closeInstallLightbox"
          class="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img :src="installLightboxImages[currentInstallLightboxIndex]" :alt="`Image ${currentInstallLightboxIndex + 1}`" class="w-full h-auto rounded-lg" />
      </div>
    </div>

    <div 
      v-if="showExamLightbox" 
      class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      @click="closeExamLightbox"
    >
      <div class="relative max-w-4xl w-full" @click.stop>
        <button 
          @click="closeExamLightbox"
          class="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img :src="examLightboxImages[currentExamLightboxIndex]" :alt="`Image ${currentExamLightboxIndex + 1}`" class="w-full h-auto rounded-lg" />
      </div>
    </div>
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

    // Expand/collapse states
    const expandedArticles = ref({
      article1: false,
      article2: false,
      article3: false,
      article4: false,
      article5: false,
    })

    const toggleExpand = (articleId) => {
      expandedArticles.value[articleId] = !expandedArticles.value[articleId]
    }

    // Social interactions
    const likes = ref({
      article1: false,
      article2: false,
      article3: false,
      article4: false,
      article5: false,
    })

    const likeCounts = ref({
      article1: 142,
      article2: 287,
      article3: 456,
      article4: 334,
      article5: 198,
    })

    const commentCounts = ref({
      article1: 23,
      article2: 45,
      article3: 67,
      article4: 38,
      article5: 28,
    })

    const toggleLike = (articleId) => {
      likes.value[articleId] = !likes.value[articleId]
      if (likes.value[articleId]) {
        likeCounts.value[articleId]++
      } else {
        likeCounts.value[articleId]--
      }
    }

    const copyPostLink = (postId) => {
      const url = `${window.location.origin}${window.location.pathname}#${postId}`
      navigator.clipboard.writeText(url).then(() => {
        alert('✓ Lien copié dans le presse-papiers!')
      }).catch(() => {
        alert('Erreur lors de la copie du lien')
      })
    }

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
      likes,
      likeCounts,
      commentCounts,
      toggleLike,
      copyPostLink,
      expandedArticles,
      toggleExpand,
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