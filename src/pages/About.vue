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

      <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-20 py-20 animate-fade-in-up">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left content: aligned left with roomy padding -->
          <div class="flex flex-col justify-center">
            <div class="max-w-3xl">
              <div class="text-left">
                <div class="text-orange-300 text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in-up delay-100" style="font-family: 'Montserrat', sans-serif;">À propos</div>
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up delay-200" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">CREFER, PREMIÈRE ACADÉMIE RÉGIONALE</h1>

                <div class="space-y-3 mb-8 animate-fade-in-up delay-300">
                  <p class="text-lg md:text-xl lg:text-2xl font-bold tracking-tight leading-tight text-blue-100" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.3px;">AXÉE SUR LES MÉTIERS D'<span class="text-orange-300">ÉNERGIES</span></p>
                  <p class="text-lg md:text-xl lg:text-2xl font-bold tracking-tight leading-tight text-blue-100" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.3px;">AVEC SON SIÈGE À <span class="text-orange-300">LOMÉ-TOGO</span></p>
                </div>

                <router-link
                  to="/admissions"
                  class="inline-block px-8 py-4 bg-orange-400 text-gray-900 rounded-lg hover:bg-orange-500 transition-colors font-bold text-lg animate-fade-in-up delay-400 hover:shadow-lg transform hover:-translate-y-1" style="font-family: 'Montserrat', sans-serif;"
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
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">NOTRE HISTOIRE</h2>
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
          <div class="flex justify-center animate-fade-in-up delay-200">
            <div class="w-full max-w-md bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg p-8 flex items-center justify-center h-96 hover:shadow-xl transition-shadow transform hover:scale-105">
              <div class="text-center text-white">
                <svg class="w-24 h-24 mx-auto mb-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
                <p class="text-lg font-semibold">Histoire de CREFER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- (Programmes d'Études Section moved below) -->

    <!-- Notre Vision & Mission Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Vision -->
          <div class="animate-fade-in-up">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 animate-slide-in-left" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">NOTRE VISION</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Rendre autonome la jeunesse Africaine au travers d'un métier professionnel pratique pour briser en partie la chaîne du chômage.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Former des ambassadeurs qualifiés aux métiers d'énergies qui puissent vulgariser le bon fonctionnement des installations solaires au travers de leur prestation.
            </p>
          </div>

          <!-- Mission -->
          <div class="animate-fade-in-up delay-100">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 animate-slide-in-left" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">NOTRE MISSION</h2>
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
          <div class="bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg h-64 flex items-center justify-center text-white animate-fade-in-up delay-200 hover:shadow-xl transition-shadow transform hover:scale-105">
            <div class="text-center">
              <svg class="w-20 h-20 mx-auto mb-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
              </svg>
              <p class="font-semibold">Jeunes formés en énergies</p>
            </div>
          </div>
          <div class="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg h-64 flex items-center justify-center text-white animate-fade-in-up delay-300 hover:shadow-xl transition-shadow transform hover:scale-105">
            <div class="text-center">
              <svg class="w-20 h-20 mx-auto mb-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <p class="font-semibold">Experts en énergies renouvelables</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Méthode Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">NOTRE MÉTHODE</h2>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-12 animate-fade-in-up delay-100">
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
            <div class="bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg shadow-lg h-40 flex items-center justify-center text-white animate-fade-in-up hover:shadow-xl transition-shadow transform hover:scale-105">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto mb-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V5h2v8z"/>
                </svg>
                <p class="text-sm font-semibold">Théorie</p>
              </div>
            </div>
            <div class="bg-gradient-to-br from-green-300 to-green-500 rounded-lg shadow-lg h-40 flex items-center justify-center text-white animate-fade-in-up delay-100 hover:shadow-xl transition-shadow transform hover:scale-105">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto mb-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.87 15.07L17.6 7.5s.11-.35.11-.54c0-.72-.6-1.32-1.33-1.32h-.35c-.28 0-.53.11-.82.38l-7.44 8.35c-.74.81-.74 2.04 0 2.89l7.44 8.35c.29.27.54.38.82.38h.35c.74 0 1.33-.6 1.33-1.33 0-.18-.05-.38-.15-.54l-4.73-7.62zM6.4 6.38C6.4 7.32 7.29 8 8.4 8H13.6V4H8.4C7.29 4 6.4 4.67 6.4 5.56V6.38z"/>
                </svg>
                <p class="text-sm font-semibold">Pratique</p>
              </div>
            </div>
            <div class="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg shadow-lg h-40 flex items-center justify-center text-white animate-fade-in-up delay-200 hover:shadow-xl transition-shadow transform hover:scale-105">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto mb-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
                <p class="text-sm font-semibold">Stages</p>
              </div>
            </div>
            <div class="bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg shadow-lg h-40 flex items-center justify-center text-white animate-fade-in-up delay-300 hover:shadow-xl transition-shadow transform hover:scale-105">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto mb-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <p class="text-sm font-semibold">Entrepreneuriat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- (Programmes d'Études Section moved below) -->

    <!-- Nos Valeurs Fondamentales Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center animate-fade-in-up" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">NOS VALEURS FONDAMENTALES</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
          Les valeurs qui guident chaque action, chaque décision et chaque interaction au sein de CREFER
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Excellence -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow animate-fade-in-up delay-200 transform hover:scale-105">
            <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-orange-100 rounded-full group-hover:bg-orange-200">
              <svg class="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
            <p class="text-gray-600">
              Nous nous engageons à fournir l'enseignement et la formation de la plus haute qualité, en veillant à ce que nos étudiants reçoivent les meilleures instructions et ressources disponibles.
            </p>
          </div>

          <!-- Innovation -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow animate-fade-in-up delay-300 transform hover:scale-105">
            <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-orange-100 rounded-full group-hover:bg-orange-200">
              <svg class="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p class="text-gray-600">
              Nous encourageons la pensée créative et l'adoption de nouvelles technologies pour rester à la pointe de l'industrie des énergies renouvelables.
            </p>
          </div>

          <!-- Durabilité -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow animate-fade-in-up delay-400 transform hover:scale-105">
            <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-orange-100 rounded-full group-hover:bg-orange-200">
              <svg class="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
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
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">PROGRAMMES D'ÉTUDES</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Card 1: Formation Modulaire - Électricité Bâtiment -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center relative">
              <picture class="w-full h-full block">
                <source type="image/webp" :srcset="webpSrcset(elecImage)" sizes="(max-width: 640px) 480px, (max-width: 1024px) 800px, 1200px" />
                <img :src="elecImage" alt="Formation Modulaire - Électricité Bâtiment" loading="lazy" class="w-full h-full object-cover object-center" />
              </picture>
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
              <picture class="w-full h-full block">
                <source type="image/webp" :srcset="webpSrcset(efficaciteImage)" sizes="(max-width: 640px) 480px, (max-width: 1024px) 800px, 1200px" />
                <img :src="efficaciteImage" alt="Formation Modulaire - Efficacité Énergétique" loading="lazy" class="w-full h-full object-cover object-center" />
              </picture>
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
              <picture class="w-full h-full block">
                <source type="image/webp" :srcset="webpSrcset(expertImage)" sizes="(max-width: 640px) 480px, (max-width: 1024px) 800px, 1200px" />
                <img :src="expertImage" alt="Formation Modulaire - Expert Solaire" loading="lazy" class="w-full h-full object-cover object-center" />
              </picture>
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
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white animate-fade-in-up" v-scroll-animate>
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4 animate-slide-in-left" style="font-family: 'Montserrat', sans-serif;">Prêt à rejoindre CREFER ?</h2>
        <p class="text-lg text-blue-100 mb-8 animate-fade-in-up delay-100">
          Découvrez nos programmes et devenez un expert en énergies renouvelables
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <router-link
            to="/admissions"
            class="inline-flex items-center gap-2 px-8 py-3 bg-orange-400 text-blue-900 rounded-lg hover:bg-orange-300 transition-colors font-bold hover:shadow-lg transform hover:-translate-y-1"
          >
            Nos Admissions
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </router-link>
          <router-link
            to="/contact"
            class="px-8 py-3 border-2 border-orange-400 text-orange-400 rounded-lg hover:bg-orange-400 hover:text-blue-900 transition-colors font-bold hover:shadow-lg transform hover:-translate-y-1"
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
      // Image de fond du hero section (utilise une image locale .jpg)
      backgroundImageUrl: new URL('../assets/images/_DSC4860.jpg', import.meta.url).href,
      // images des cartes programmess sorties du template
      elecImage: new URL('../assets/images/_DSC4863.jpg', import.meta.url).href,
      efficaciteImage: new URL('../assets/images/_DSC4864.jpg', import.meta.url).href,
      expertImage: new URL('../assets/images/_DSC4865.jpg', import.meta.url).href
    }
  },
  methods: {
    webpSrcset(original) {
      if (!original) return '';
      const base = original.replace(/\.jpg$/i, '').replace(/\.jpeg$/i, '');
      return `${base}-480.webp 480w, ${base}-800.webp 800w, ${base}-1200.webp 1200w`;
    }
  }
}
</script>
