<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section with configurable background image -->
    <section
      class="relative min-h-[420px] md:min-h-[520px] lg:min-h-[640px] text-white flex items-center overflow-hidden bg-cover bg-right"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    >
      <!-- Dark overlay for contrast -->
      <div class="absolute inset-0 bg-black/55 z-10"></div>
      <!-- Bottom gradient to match maquette darker base -->
      <div class="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 to-transparent z-15"></div>

      <div class="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 relative z-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left content: aligned left with roomy padding -->
          <div class="py-8 lg:py-12 pr-8 lg:pr-0">
            <div class="max-w-2xl pl-0 md:pl-6 lg:pl-12">
              <div class="text-left">
                <div class="text-orange-400 text-xl md:text-2xl font-semibold mb-4">À PROPOS/</div>
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">CREFER, PREMIÈRE ACADÉMIE RÉGIONALE</h1>

                <div class="space-y-6 mb-8">
                  <p class="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight">AXÉE SUR LES MÉTIERS D'<span class="text-orange-400">ÉNERGIES</span></p>
                  <p class="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight">AVEC SON SIÈGE À <span class="text-orange-400">LOMÉ-TOGO</span></p>
                </div>

                <router-link
                  to="/admissions"
                  class="inline-block mt-2 px-10 md:px-12 py-4 bg-orange-400 text-gray-900 rounded-lg hover:bg-orange-300 transition-colors font-bold text-lg"
                >
                  Découvrir nos formations
                </router-link>
              </div>
            </div>
          </div>

          <!-- Right column left empty so background image shows through (responsive) -->
          <div class="hidden lg:block"></div>
        </div>
      </div>
    </section>

    <!-- Programmes d'Études Section (moved to follow Nos Valeurs Fondamentales) -->

    <!-- Programmes d'Études Section (moved to follow Nos Valeurs Fondamentales) -->

    <!-- Notre Histoire Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div>
            <h2 class="text-4xl font-bold text-orange-400 mb-6">NOTRE HISTOIRE</h2>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              "DEPUIS 2019, NOUS FORMONS DES JEUNES PRÊTS À RELEVER LES DÉFIS ÉNERGÉTIQUES DE L'AFRIQUE."
            </p>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Créé en 2019, CREFER doit son existence à EGENT TOGO, entreprise solaire expert près des cours et tribunaux du TOGO œuvrant dans la fourniture et la pose du système photovoltaïque et dans l'électricité générale.
            </p>
            <p class="text-gray-600 leading-relaxed">
              Le manque des techniciens qualifiés spécialistes en système photovoltaïque est au centre de l'ouverture dudit centre.
            </p>
          </div>

          <!-- Right Image Placeholder -->
          <div class="flex justify-center">
            <div class="w-full max-w-md bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg p-8 flex items-center justify-center h-96">
              <div class="text-center text-white">
                <div class="text-6xl mb-4">📜</div>
                <p class="text-lg font-semibold">Histoire de CREFER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- (Programmes d'Études Section moved below) -->

    <!-- Notre Vision & Mission Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Vision -->
          <div>
            <h2 class="text-3xl font-bold text-orange-400 mb-6">NOTRE VISION</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Rendre autonome la jeunesse Africaine au travers d'un métier professionnel pratique pour briser en partie la chaîne du chômage.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Former des ambassadeurs qualifiés aux métiers d'énergies qui puissent vulgariser le bon fonctionnement des installations solaires au travers de leur prestation.
            </p>
          </div>

          <!-- Mission -->
          <div>
            <h2 class="text-3xl font-bold text-orange-400 mb-6">NOTRE MISSION</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Rendre autonome la jeunesse Africaine au travers d'un métier professionnel pratique pour briser en partie la chaîne du chômage.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Former des ambassadeurs qualifiés aux métiers d'énergies qui puissent vulgariser le bon fonctionnement des installations solaires au travers de leur prestation.
            </p>
          </div>
        </div>

        <!-- Vision & Mission Images -->
        <div class="grid lg:grid-cols-2 gap-8 mt-12">
          <div class="bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg h-64 flex items-center justify-center text-white">
            <div class="text-center">
              <div class="text-6xl mb-4">👥</div>
              <p class="font-semibold">Jeunes formés en énergies</p>
            </div>
          </div>
          <div class="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg h-64 flex items-center justify-center text-white">
            <div class="text-center">
              <div class="text-6xl mb-4">⚡</div>
              <p class="font-semibold">Experts en énergies renouvelables</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Méthode Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-orange-400 mb-12 text-center">NOTRE MÉTHODE</h2>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <!-- Left Content -->
          <div>
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
              Nous offrons une formation complète regroupant la phase théorique, travaux pratiques puis les stages professionnels en entreprise.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              Nous disposons d'une division spéciale mise à la disposition des étudiants qui œuvre pour leur insertion professionnelle, égairement à les accompagner sur leur différents projet entrepreneuriales au tour des métiers d'énergies.
            </p>
            <div class="space-y-3">
              <div class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Phase théorique avancée</span>
              </div>
              <div class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Travaux pratiques intensifs</span>
              </div>
              <div class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Stages en entreprise</span>
              </div>
              <div class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Accompagnement entrepreneurial</span>
              </div>
            </div>
          </div>

          <!-- Right Images Placeholder -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg shadow-lg h-40 flex items-center justify-center text-white">
              <div class="text-center">
                <div class="text-5xl mb-2">📚</div>
                <p class="text-sm font-semibold">Théorie</p>
              </div>
            </div>
            <div class="bg-gradient-to-br from-green-300 to-green-500 rounded-lg shadow-lg h-40 flex items-center justify-center text-white">
              <div class="text-center">
                <div class="text-5xl mb-2">🔧</div>
                <p class="text-sm font-semibold">Pratique</p>
              </div>
            </div>
            <div class="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg shadow-lg h-40 flex items-center justify-center text-white">
              <div class="text-center">
                <div class="text-5xl mb-2">👷</div>
                <p class="text-sm font-semibold">Stages</p>
              </div>
            </div>
            <div class="bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg shadow-lg h-40 flex items-center justify-center text-white">
              <div class="text-center">
                <div class="text-5xl mb-2">🚀</div>
                <p class="text-sm font-semibold">Entrepreneuriat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- (Programmes d'Études Section moved below) -->

    <!-- Nos Valeurs Fondamentales Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-orange-400 mb-4 text-center">NOS VALEURS FONDAMENTALES</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Les valeurs qui guident chaque action, chaque décision et chaque interaction au sein de CREFER
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Excellence -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-orange-100 rounded-full">
              <span class="text-5xl">🏆</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
            <p class="text-gray-600">
              Nous nous engageons à fournir l'enseignement et la formation de la plus haute qualité, en veillant à ce que nos étudiants reçoivent les meilleures instructions et ressources disponibles.
            </p>
          </div>

          <!-- Innovation -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-orange-100 rounded-full">
              <span class="text-5xl">💡</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p class="text-gray-600">
              Nous encourageons la pensée créative et l'adoption de nouvelles technologies pour rester à la pointe de l'industrie des énergies renouvelables.
            </p>
          </div>

          <!-- Durabilité -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-orange-100 rounded-full">
              <span class="text-5xl">⚡</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Durabilité</h3>
            <p class="text-gray-600">
              Nous sommes dédiés à la promotion de solutions énergétiques durables et respectueuses de l'environnement pour un avenir meilleur.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Programmes d'Études Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-orange-400 mb-12 text-center">PROGRAMMES D'ÉTUDES</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Card 1: Formation Modulaire - Électricité Bâtiment -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center relative">
              <img 
                src="https://via.placeholder.com/400x300?text=Électricité+Bâtiment" 
                alt="Formation Modulaire - Électricité Bâtiment"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 right-4 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-sm">C</span>
              </div>
            </div>
            <div class="p-6">
              <p class="text-orange-400 font-bold mb-3">FORMATION MODULAIRE</p>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Devenez expert en électricité bâtiment</h3>
              <p class="text-gray-600">
                Installation, maintenance et sécurisation des réseaux électriques pour les habitations, les commerces et les sites industriels.
              </p>
            </div>
          </div>

          <!-- Card 2: Formation Modulaire - Efficacité Énergétique -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center relative">
              <img 
                src="https://via.placeholder.com/400x300?text=Efficacité+Énergétique" 
                alt="Formation Modulaire - Efficacité Énergétique"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 right-4 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-sm">C</span>
              </div>
            </div>
            <div class="p-6">
              <p class="text-orange-400 font-bold mb-3">FORMATION MODULAIRE</p>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Efficacité énergétique</h3>
              <p class="text-gray-600">
                Optimisation de la consommation d'énergie afin de réduire les coûts et l'empreinte carbone, grâce à des équipements performants et une meilleure gestion des usages.
              </p>
            </div>
          </div>

          <!-- Card 3: Formation Modulaire - Expert Solaire -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center relative">
              <img 
                src="https://via.placeholder.com/400x300?text=Expert+Solaire" 
                alt="Formation Modulaire - Expert Solaire"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 right-4 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-sm">C</span>
              </div>
            </div>
            <div class="p-6">
              <p class="text-orange-400 font-bold mb-3">FORMATION MODULAIRE</p>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Devenez expert solaire</h3>
              <p class="text-gray-600">
                Production d'électricité à partir de la lumière du soleil via des panneaux solaires, pour des solutions autonomes ou connectées au réseau.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Prêt à rejoindre CREFER ?</h2>
        <p class="text-lg text-blue-100 mb-8">
          Découvrez nos programmes et devenez un expert en énergies renouvelables
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/admissions"
            class="px-8 py-3 bg-orange-400 text-blue-900 rounded-lg hover:bg-orange-300 transition-colors font-bold"
          >
            Nos Admissions
          </router-link>
          <router-link
            to="/contact"
            class="px-8 py-3 border-2 border-orange-400 text-orange-400 rounded-lg hover:bg-orange-400 hover:text-blue-900 transition-colors font-bold"
          >
            Nous Contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      // Image de fond du hero section
      // Remplacez par le chemin de votre image
      backgroundImageUrl: 'https://via.placeholder.com/1920x1080?text=CREFER+Background'
    }
  }
}
</script>
