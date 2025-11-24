<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation Top Padding -->
    <div class="h-16 sm:h-20"></div>

    <!-- Hero Banner with Image -->
    <div class="relative h-96 sm:h-[500px] w-full overflow-hidden">
      <img 
        :src="heroBannerImage"
        alt="CAP Électricité d'Équipement" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
        <div class="w-full p-8 sm:p-12 lg:p-16 max-w-6xl mx-auto">
          <button @click="$router.back()" class="flex items-center gap-2 mb-6 text-white hover:text-gray-200 transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Retour
          </button>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4" style="font-family: 'Montserrat', sans-serif;">
            CAP Électricité d'Équipement
          </h1>
          <p class="text-lg sm:text-xl text-gray-100 max-w-2xl">
            Un diplôme d'état pour maîtriser l'installation et la maintenance des équipements électriques
          </p>
        </div>
      </div>
    </div>

    <!-- Main Article Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Table of Contents -->
      <div class="bg-blue-50 rounded-xl p-8 mb-12 border-l-4 border-blue-600">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Sommaire</h2>
        <ul class="space-y-2 text-blue-700">
          <li><a href="#qualification" class="hover:text-blue-900 flex items-center gap-2"><span>➜</span> Niveau de Qualification</a></li>
          <li><a href="#duree" class="hover:text-blue-900 flex items-center gap-2"><span>➜</span> Durée de la Formation</a></li>
          <li><a href="#objectifs" class="hover:text-blue-900 flex items-center gap-2"><span>➜</span> Objectifs de la Formation</a></li>
          <li><a href="#debouches" class="hover:text-blue-900 flex items-center gap-2"><span>➜</span> Débouchés Professionnels</a></li>
        </ul>
      </div>

      <!-- Section 1: Niveau de Qualification with Image -->
      <article class="mb-16 scroll-mt-20" id="qualification">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Niveau de Qualification</h2>
            </div>
            <p class="text-gray-700 text-lg leading-relaxed mb-4">
              Le CAP est un diplôme d'état, attestant une qualification professionnelle de base. Il certifie vos compétences et vous prépare à l'exercice d'un métier reconnu dans le secteur de l'électricité.
            </p>
            <div class="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <p class="text-gray-800 font-semibold">
                💡 Reconnu nationalement, ce diplôme vous permet d'accéder directement au marché de l'emploi ou de poursuivre vos études.
              </p>
            </div>
          </div>
          <div class="rounded-xl overflow-hidden shadow-lg">
            <img 
              :src="qualificationImage"
              alt="Certification diplôme CAP" 
              class="w-full h-64 object-cover"
            />
          </div>
        </div>
      </article>

      <!-- Section 2: Durée de la Formation with Image -->
      <article class="mb-16 scroll-mt-20" id="duree">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div class="rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <img 
              :src="dureeImage"
              alt="Durée de formation 3 ans" 
              class="w-full h-64 object-cover"
            />
          </div>
          <div class="order-1 md:order-2">
            <div class="flex items-center gap-3 mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Durée de la Formation</h2>
            </div>
            <div class="space-y-4">
              <div class="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <p class="text-3xl font-bold text-yellow-600 mb-2">3 ans</p>
                <p class="text-gray-700">Parcours complet avec alternance théorie et pratique</p>
              </div>
              <div>
                <p class="text-gray-700 text-lg leading-relaxed">
                  La formation s'étend sur <strong>trois (03) ans</strong> avec un <strong>niveau d'entrée minimum de la classe de quatrième</strong>.
                </p>
              </div>
              <div class="grid grid-cols-3 gap-4 mt-6">
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <p class="text-2xl font-bold text-blue-600">Année 1</p>
                  <p class="text-xs text-gray-600 mt-1">Bases fondamentales</p>
                </div>
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <p class="text-2xl font-bold text-blue-600">Année 2</p>
                  <p class="text-xs text-gray-600 mt-1">Pratique approfondie</p>
                </div>
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <p class="text-2xl font-bold text-blue-600">Année 3</p>
                  <p class="text-xs text-gray-600 mt-1">Spécialisation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- Section 3: Objectifs with Image -->
      <article class="mb-16 scroll-mt-20" id="objectifs">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Objectifs de la Formation</h2>
            </div>
            <p class="text-gray-700 text-lg leading-relaxed mb-6">
              Former des ouvriers qualifiés capables d'exécuter des travaux d'installation et de maintenance des équipements électriques dans les bâtiments neufs ou en rénovation.
            </p>
            <div class="space-y-3">
              <div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <span class="text-green-600 font-bold mt-1">✓</span>
                <p class="text-gray-700">Maîtriser les techniques d'installation électrique</p>
              </div>
              <div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <span class="text-green-600 font-bold mt-1">✓</span>
                <p class="text-gray-700">Assurer la maintenance des installations</p>
              </div>
              <div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <span class="text-green-600 font-bold mt-1">✓</span>
                <p class="text-gray-700">Respecter les normes de sécurité électrique</p>
              </div>
              <div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <span class="text-green-600 font-bold mt-1">✓</span>
                <p class="text-gray-700">Intervenir en toute confiance sur des chantiers</p>
              </div>
            </div>
          </div>
          <div class="rounded-xl overflow-hidden shadow-lg">
            <img 
              :src="objectifsImage"
              alt="Installation électrique" 
              class="w-full h-64 object-cover"
            />
          </div>
        </div>
      </article>

      <!-- Section 4: Débouchés Professionnels with Image -->
      <article class="mb-16 scroll-mt-20" id="debouches">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div class="rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <img 
              :src="debouchesImage"
              alt="Débouchés professionnels" 
              class="w-full h-64 object-cover"
            />
          </div>
          <div class="order-1 md:order-2">
            <div class="flex items-center gap-3 mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0 0h4m-6 8h6m0 0a2 2 0 100-4m0 4a2 2 0 110-4m0 0h-4" />
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Débouchés Professionnels</h2>
            </div>
            <div class="space-y-4">
              <div class="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
                <p class="font-bold text-gray-900 mb-1">Électricien d'équipement</p>
                <p class="text-gray-700 text-sm">Installer et maintenir les équipements électriques dans les bâtiments</p>
              </div>
              <div class="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
                <p class="font-bold text-gray-900 mb-1">Installateur électrique</p>
                <p class="text-gray-700 text-sm">Réaliser les installations dans les bâtiments neufs et rénovés</p>
              </div>
              <div class="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
                <p class="font-bold text-gray-900 mb-1">Maintenancier en électricité</p>
                <p class="text-gray-700 text-sm">Assurer la maintenance et le dépannage des installations</p>
              </div>
              <div class="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
                <p class="font-bold text-gray-900 mb-1">Poursuite d'études</p>
                <p class="text-gray-700 text-sm">Accès au Brevet de Technicien en Électrotechnique (BT)</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- Divider -->
      <div class="border-t-2 border-gray-200 my-16"></div>

      <!-- CTA Section -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-12 text-white text-center">
        <h2 class="text-3xl font-bold mb-4">Prêt à vous inscrire?</h2>
        <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Rejoignez notre formation CAP Électricité d'Équipement et lancez votre carrière dans le secteur électrique.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all">
            Demander une admission
          </router-link>
          <router-link to="/" class="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-all">
            Retour à l'accueil
          </router-link>
        </div>
      </div>

      <!-- Related Programs -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Autres formations disponibles</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <img 
              :src="btElectrotechniqueImage"
              alt="BT Électrotechnique"
              class="h-48 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">BT Électrotechnique</h3>
              <p class="text-gray-700 mb-4">
                Poursuivez vos études avec le Brevet de Technicien en Électrotechnique et accédez à des postes de technicien supérieur.
              </p>
              <router-link to="/bt-electrotechnique" class="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center gap-2">
                En savoir plus
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </router-link>
            </div>
          </div>

          <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <img 
              :src="formationModulaireImage"
              alt="Formation Modulaire"
              class="h-48 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Formation Modulaire</h3>
              <p class="text-gray-700 mb-4">
                Des formations flexibles et adaptées à vos besoins spécifiques pour perfectionnement ou reconversion.
              </p>
              <router-link to="/formation-modulaire" class="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-2">
                En savoir plus
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CapElectricite',
  data() {
    return {
      heroBannerImage: new URL('../assets/images/_DSC4865.jpg', import.meta.url).href,
      qualificationImage: new URL('../assets/images/_DSC4864.jpg', import.meta.url).href,
      dureeImage: new URL('../assets/images/batiment2.jpg', import.meta.url).href,
      objectifsImage: new URL('../assets/images/entreprenariat.jpg', import.meta.url).href,
      debouchesImage: new URL('../assets/images/distinction1.jpg', import.meta.url).href,
      btElectrotechniqueImage: new URL('../assets/images/pratique.jpg', import.meta.url).href,
      formationModulaireImage: new URL('../assets/images/mission1.jpg', import.meta.url).href
    }
  },
  head() {
    return {
      title: 'CAP Électricité d\'Équipement | CREFER',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Formation CAP Électricité d\'Équipement à CREFER - Formation d\'installation et maintenance des équipements électriques'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Smooth transitions */
.transition-all {
  transition: all 0.3s ease;
}

/* Article styling */
article {
  scroll-behavior: smooth;
}

/* Smooth anchor links */
a[href^="#"] {
  scroll-behavior: smooth;
}
</style>
