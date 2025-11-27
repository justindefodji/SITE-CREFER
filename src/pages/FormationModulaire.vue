<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation Top Padding -->
    <div class="h-16 sm:h-20"></div>

    <!-- Hero Banner with Image -->
    <div class="relative h-96 sm:h-[500px] w-full overflow-hidden">
      <img 
        :src="heroBannerImage"
        alt="Formations Modulaires" 
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
            Formations Modulaires
          </h1>
          <p class="text-lg sm:text-xl text-gray-100 max-w-2xl">
            Des formations flexibles et adaptées à vos besoins spécifiques
          </p>
        </div>
      </div>
    </div>

    <!-- Main Article Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Introduction -->
      <div class="bg-green-50 rounded-xl p-8 mb-12 border-l-4 border-green-600">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Formations Modulaires Flexibles</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          Nos formations modulaires sont conçues pour vous offrir une flexibilité maximale. Que vous souhaitiez vous perfectionner, vous reconvertir ou acquérir de nouvelles compétences, nous proposons deux grandes filières regroupant 9 formations spécialisées.
        </p>
      </div>

      <!-- FILIÈRE SPV Section -->
      <article class="mb-16">
        <div class="mb-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 class="text-4xl font-bold text-gray-900">Filière SPV</h2>
              <p class="text-xl text-gray-600">Systèmes Photovoltaïques et Énergies Renouvelables</p>
            </div>
          </div>
          <div class="rounded-xl overflow-hidden shadow-lg mb-8">
            <img 
              :src="spvSectionImage"
              alt="Énergie solaire photovoltaïque" 
              class="w-full h-96 object-cover"
            />
          </div>
        </div>

        <!-- SPV Formation 1 -->
        <div class="mb-12 bg-gray-50 rounded-xl p-8 border-l-4 border-blue-500">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-blue-600">1</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Électricité Bâtiment et Industrielle</h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Acquisition de compétences complètes pour les installations électriques dans le bâtiment et l'industrie. Maîtrisez les techniques essentielles, les normes de sécurité, et les meilleures pratiques du secteur.
              </p>
            </div>
          </div>
        </div>

        <!-- SPV Formation 2 -->
        <div class="mb-12 bg-gray-50 rounded-xl p-8 border-l-4 border-green-500">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center font-bold text-green-600">2</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Efficacité Énergétique</h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Formation pour devenir expert en réduction de la consommation d'énergie. Apprenez à optimiser les installations, réaliser des audits énergétiques, et mettre en place des solutions durables.
              </p>
            </div>
          </div>
        </div>

        <!-- SPV Formation 3 -->
        <div class="mb-12 bg-gray-50 rounded-xl p-8 border-l-4 border-yellow-500">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center font-bold text-yellow-600">3</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Énergie Solaire Photovoltaïque</h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Apprentissage complet des techniques d'installation des systèmes solaires photovoltaïques et thermiques. Formation pratique couvrant la conception, l'installation, et la maintenance des systèmes solaires.
              </p>
            </div>
          </div>
        </div>

        <!-- SPV Formation 4 -->
        <div class="mb-12 bg-gray-50 rounded-xl p-8 border-l-4 border-emerald-500">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center font-bold text-emerald-600">4</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Biogaz</h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Maîtrise du processus de transformation des déchets organiques en énergie verte. Formation axée sur la conception, la construction, l'exploitation et la maintenance des digesteurs biogaz pour applications domestiques et agricoles.
              </p>
            </div>
          </div>
        </div>

        <!-- SPV Formation 5 -->
        <div class="mb-12 bg-gray-50 rounded-xl p-8 border-l-4 border-cyan-500">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center font-bold text-cyan-600">5</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Plomberie</h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Formation pratique sur l'installation et l'entretien des réseaux d'eau (froide et chaude), des équipements sanitaires, et des systèmes de distribution. Idéal pour les chantiers résidentiels, industriels et les énergies renouvelables intégrées (chauffe-eau solaire, etc.).
              </p>
            </div>
          </div>
        </div>

        <!-- SPV Formation 6 -->
        <div class="mb-12 bg-gray-50 rounded-xl p-8 border-l-4 border-sky-500">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center font-bold text-sky-600">6</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Froid & Climatisation</h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Développement de compétences techniques dans l'installation, le dépannage et l'entretien des systèmes de réfrigération et de climatisation, avec une sensibilisation à l'efficacité énergétique et aux normes environnementales.
              </p>
            </div>
          </div>
        </div>
      </article>

      <!-- Divider -->
      <div class="border-t-2 border-gray-200 my-16"></div>

      <!-- FILIÈRE SST Section -->
      <article class="mb-16">
        <div class="mb-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h2 class="text-4xl font-bold text-gray-900">Filière SST</h2>
              <p class="text-xl text-gray-600">Systèmes de Sécurité et Télécommunications</p>
            </div>
          </div>
          <div class="rounded-xl overflow-hidden shadow-lg mb-8">
            <img 
              :src="sstSectionImage"
              alt="Systèmes de sécurité et télécommunications" 
              class="w-full h-96 object-cover"
            />
          </div>
        </div>

        <!-- SST Formation 1 -->
        <div class="mb-12 bg-gray-50 rounded-xl p-8 border-l-4 border-indigo-500">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center font-bold text-indigo-600">1</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Réseau et Télécommunication</h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Conception, déploiement et gestion des infrastructures et services de réseaux et de télécommunications. Maîtrisez les technologies modernes et les meilleures pratiques du secteur.
              </p>
            </div>
          </div>
        </div>

        <!-- SST Formation 2 -->
        <div class="mb-12 bg-gray-50 rounded-xl p-8 border-l-4 border-orange-500">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center font-bold text-orange-600">2</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Système d'Alarme et Éclairage de Sécurité</h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Maîtrise de l'installation de systèmes d'éclairage pour la sécurité des bâtiments. Apprenez à mettre en place des solutions fiables et conformes aux normes de sécurité.
              </p>
            </div>
          </div>
        </div>

        <!-- SST Formation 3 -->
        <div class="mb-12 bg-gray-50 rounded-xl p-8 border-l-4 border-teal-500">
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center font-bold text-teal-600">3</div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Installation et Configuration de Caméras et Antennes Paraboliques</h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Formation à l'installation et à la configuration de caméras et d'antennes paraboliques, avec des solutions alimentées par des panneaux solaires. Devenez expert en surveillance et télécommunications modernes.
              </p>
            </div>
          </div>
        </div>
      </article>

      <!-- Divider -->
      <div class="border-t-2 border-gray-200 my-16"></div>

      <!-- Features Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Pourquoi Choisir nos Formations Modulaires?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
            <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a4 4 0 118 0m-8 0a4 4 0 100-8m0 8a4 4 0 110-8m0 8a4 4 0 100-8m0 8a4 4 0 110-8" />
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">Flexibilité Maximale</h3>
              <p class="text-gray-700">Adaptez votre apprentissage à votre emploi du temps et vos objectifs professionnels.</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-6 bg-green-50 rounded-xl">
            <div class="flex-shrink-0 w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">Pratique Intensives</h3>
              <p class="text-gray-700">Des formations centrées sur la pratique avec matériel moderne et équipé.</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-6 bg-yellow-50 rounded-xl">
            <div class="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">Experts Formateurs</h3>
              <p class="text-gray-700">Apprenez auprès de professionnels expérimentés du secteur.</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-6 bg-purple-50 rounded-xl">
            <div class="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">Débouchés Professionnels</h3>
              <p class="text-gray-700">Accédez à des emplois recherchés dans les énergies renouvelables et la sécurité.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <div class="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl shadow-xl p-12 text-white text-center">
        <h2 class="text-3xl font-bold mb-4">Prêt à vous former?</h2>
        <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
          Découvrez nos formations modulaires et développez vos compétences dans les secteurs d'avenir.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all">
            S'inscrire à une formation
          </router-link>
          <router-link to="/" class="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-green-700 transition-all">
            Retour à l'accueil
          </router-link>
        </div>
      </div>

      <!-- Autres Formations Disponibles -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Autres formations disponibles</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- CAP Électricité d'Équipement -->
          <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <img 
              :src="capElectriciteImage"
              alt="CAP Électricité d'Équipement"
              class="h-48 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">CAP Électricité d'Équipement</h3>
              <p class="text-gray-700 mb-4">
                Diplôme d'état reconnu pour maîtriser l'installation et la maintenance des équipements électriques en 3 ans.
              </p>
              <router-link to="/cap-electricite" class="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
                En savoir plus
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </router-link>
            </div>
          </div>

          <!-- BT Électrotechnique -->
          <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <img 
              :src="btElectrotechniqueImage"
              alt="BT Électrotechnique"
              class="h-48 w-full object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">BT Électrotechnique</h3>
              <p class="text-gray-700 mb-4">
                Brevet de Technicien pour accéder à des postes de technicien supérieur en électrotechnique.
              </p>
              <router-link to="/bt-electrotechnique" class="text-yellow-600 font-semibold hover:text-yellow-700 inline-flex items-center gap-2">
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
  name: 'FormationModulaire',
  data() {
    return {
      heroBannerImage: new URL('../assets/images/_DSC4863-1200.jpg', import.meta.url).href,
      spvSectionImage: new URL('../assets/images/théorie-1200.jpg', import.meta.url).href,
      sstSectionImage: new URL('../assets/images/pratique-1200.jpg', import.meta.url).href,
      capElectriciteImage: new URL('../assets/images/entreprenariat-1200.jpg', import.meta.url).href,
      btElectrotechniqueImage: new URL('../assets/images/distinction2-1200.jpg', import.meta.url).href
    }
  },
  head() {
    return {
      title: 'Formations Modulaires | CREFER',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Formations modulaires CREFER - SPV (Énergies Renouvelables) et SST (Sécurité & Télécommunications)'
        }
      ]
    }
  }
}
</script>

<style scoped>
.transition-all {
  transition: all 0.3s ease;
}
</style>
