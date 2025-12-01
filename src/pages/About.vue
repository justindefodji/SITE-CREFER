<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section with configurable background image -->
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
                <div class="text-yellow-300 text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in-up delay-100" style="font-family: 'Montserrat', sans-serif;">À propos</div>
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up delay-200" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">CREFER, PREMIÈRE ACADÉMIE RÉGIONALE</h1>

                <div class="space-y-3 mb-8 animate-fade-in-up delay-300">
                  <p class="text-lg md:text-xl lg:text-2xl font-bold tracking-tight leading-tight text-blue-100" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.3px;">AXÉE SUR LES MÉTIERS D'<span class="text-yellow-300">ÉNERGIES</span></p>
                  <p class="text-lg md:text-xl lg:text-2xl font-bold tracking-tight leading-tight text-blue-100" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.3px;">AVEC SON SIÈGE À <span class="text-yellow-300">LOMÉ-TOGO</span></p>
                </div>

                <router-link
                  to="/programmes"
                  class="inline-block px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors font-bold text-lg animate-fade-in-up delay-400 hover:shadow-lg transform hover:-translate-y-1" style="font-family: 'Montserrat', sans-serif;"
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
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-cyan-50" v-scroll-animate>
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
            <img 
              :src="distinction3Image" 
              alt="Histoire de CREFER" 
              class="w-full max-w-md rounded-lg shadow-lg h-96 object-cover hover:shadow-xl transition-shadow transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- (Programmes d'Études Section moved below) -->

    <!-- Notre Vision & Mission Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100" v-scroll-animate>
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
          <img 
            :src="mission1Image" 
            alt="Vision CREFER" 
            class="rounded-lg shadow-lg h-64 object-cover animate-fade-in-up delay-200 hover:shadow-xl transition-shadow transform hover:scale-105 w-full"
          />
          <img 
            :src="vision2Image" 
            alt="Mission CREFER" 
            class="rounded-lg shadow-lg h-64 object-cover animate-fade-in-up delay-300 hover:shadow-xl transition-shadow transform hover:scale-105 w-full"
          />
        </div>
      </div>
    </section>

    <!-- Notre Méthode Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 to-amber-50" v-scroll-animate>
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
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Phase théorique avancée</span>
              </div>
              <div class="flex items-start">
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Travaux pratiques intensifs</span>
              </div>
              <div class="flex items-start">
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Stages en entreprise</span>
              </div>
              <div class="flex items-start">
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Accompagnement entrepreneurial</span>
              </div>
            </div>
          </div>

          <!-- Right Images Placeholder -->
          <div class="grid grid-cols-2 gap-4">
            <img
              :src="theoryImage"
              alt="Théorie"
              class="rounded-lg shadow-lg h-40 w-full object-cover animate-fade-in-up hover:shadow-xl transition-shadow transform hover:scale-105"
            />
            <img
              :src="practicalImage"
              alt="Travaux pratique"
              class="rounded-lg shadow-lg h-40 w-full object-cover animate-fade-in-up delay-100 hover:shadow-xl transition-shadow transform hover:scale-105"
            />
            <img
              :src="stageImage"
              alt="Stages"
              class="rounded-lg shadow-lg h-40 w-full object-cover animate-fade-in-up delay-200 hover:shadow-xl transition-shadow transform hover:scale-105"
            />
            <img
              :src="entrepreneurshipImage"
              alt="Entrepreneuriat"
              class="rounded-lg shadow-lg h-40 w-full object-cover animate-fade-in-up delay-300 hover:shadow-xl transition-shadow transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- (Programmes d'Études Section moved below) -->

    <!-- Nos Valeurs Fondamentales Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center animate-fade-in-up" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">NOS VALEURS FONDAMENTALES</h2>
        <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
          Les valeurs qui guident chaque action, chaque décision et chaque interaction au sein de CREFER
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Excellence -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow animate-fade-in-up delay-200 transform hover:scale-105" v-scroll-animate>
            <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-yellow-100 rounded-full group-hover:bg-yellow-200">
              <svg class="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
            <p class="text-gray-600">
              Nous nous engageons à fournir l'enseignement et la formation de la plus haute qualité, en veillant à ce que nos étudiants reçoivent les meilleures instructions et ressources disponibles.
            </p>
          </div>

          <!-- Innovation -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow animate-fade-in-up delay-300 transform hover:scale-105" v-scroll-animate>
            <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-yellow-100 rounded-full group-hover:bg-yellow-200">
              <svg class="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p class="text-gray-600">
              Nous encourageons la pensée créative et l'adoption de nouvelles technologies pour rester à la pointe de l'industrie des énergies renouvelables.
            </p>
          </div>

          <!-- Durabilité -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow animate-fade-in-up delay-400 transform hover:scale-105" v-scroll-animate>
            <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-yellow-100 rounded-full group-hover:bg-yellow-200">
              <svg class="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
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

    <!-- Nos Deux Sites Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-fade-in-up">
          <span class="inline-block text-yellow-600 text-sm font-bold tracking-widest uppercase px-4 py-2 bg-yellow-100 rounded-full mb-4">Nos Infrastructures</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6" style="font-family: 'Montserrat', sans-serif;">
            NOS DEUX SITES DE FORMATION
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            CREFER dispose de deux sites de formations distants de 800 mètres pour une meilleure accessibilité
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- Site 1: Siège -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all animate-fade-in-up" style="animation-delay: 0.1s;">
            <img 
              :src="batiment1Image" 
              alt="Siège CREFER à Totsi Gblenkome" 
              class="w-full h-64 object-cover"
            />
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Le Siège</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Situé près de la salle de réunion des témoins de Jéhovah à <strong>Totsi Gblenkome</strong>, le siège principal de CREFER accueille nos programmes de formation complets.
              </p>
              <div class="pt-4 border-t border-gray-200">
                <p class="text-sm text-yellow-600 font-semibold">📍 Totsi Gblenkome, Lomé</p>
              </div>
            </div>
          </div>

          <!-- Site 2: Annexe -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all animate-fade-in-up" style="animation-delay: 0.2s;">
            <img 
              :src="batiment2Image" 
              alt="Annexe CREFER à Totsi" 
              class="w-full h-64 object-cover"
            />
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">L'Annexe</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Implantée au bord des pavés de Totsi, non loin de l'agence <strong>TogoCom</strong>, l'annexe offre des espaces supplémentaires pour nos programmes pratiques.
              </p>
              <div class="pt-4 border-t border-gray-200">
                <p class="text-sm text-yellow-600 font-semibold">📍 Près de TogoCom, Totsi</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Distance Information -->
        <div class="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center mb-12 animate-fade-in-up" style="animation-delay: 0.3s;">
          <div class="flex items-center justify-center gap-4 mb-4">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z"/>
            </svg>
          </div>
          <p class="text-2xl font-bold mb-2">Distance entre les deux sites</p>
          <p class="text-3xl font-extrabold text-yellow-300">800 mètres</p>
        </div>
      </div>
    </section>

    <!-- Formation Complète et Diversité Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-green-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-fade-in-up">
          <span class="inline-block text-green-600 text-sm font-bold tracking-widest uppercase px-4 py-2 bg-green-100 rounded-full mb-4">Approche Pédagogique</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6" style="font-family: 'Montserrat', sans-serif;">
            UNE FORMATION COMPLÈTE ET DIVERSIFIÉE
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Au-delà de la technique, nous formons des entrepreneurs et des leaders
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <!-- Formation Complète Card -->
          <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all animate-fade-in-up overflow-hidden relative" style="animation-delay: 0.1s;">
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
            <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Formation Complète</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Outre les cours techniques, nos étudiants bénéficient de sessions sur le <strong>leadership</strong> et la <strong>création d'entreprise</strong>.
            </p>
            <p class="text-gray-600 text-sm italic">
              Cette approche holistique vise à former des professionnels compétents et entrepreneurs.
            </p>
            <div class="mt-6 pt-6 border-t border-green-100">
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Cours techniques avancés</li>
                <li class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Formation en leadership</li>
                <li class="flex items-center gap-2"><span class="text-green-600 font-bold">✓</span> Création d'entreprise</li>
              </ul>
            </div>
          </div>

          <!-- Diversité des Énergies Card -->
          <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all animate-fade-in-up overflow-hidden relative" style="animation-delay: 0.2s;">
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            <div class="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Diversité Énergétique</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Nos cours couvrent diverses <strong>énergies renouvelables</strong>, y compris le <strong>biogaz</strong>, avec des expériences pratiques de cuisson.
            </p>
            <p class="text-gray-600 text-sm italic">
              Expériences basées sur des déchets organiques et cas réels.
            </p>
            <div class="mt-6 pt-6 border-t border-yellow-100">
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-center gap-2"><span class="text-yellow-600 font-bold">⚡</span> Énergie solaire</li>
                <li class="flex items-center gap-2"><span class="text-yellow-600 font-bold">⚡</span> Biogaz</li>
                <li class="flex items-center gap-2"><span class="text-yellow-600 font-bold">⚡</span> Autres renouvelables</li>
              </ul>
            </div>
          </div>

          <!-- Deux Rentrées Card -->
          <div class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all animate-fade-in-up overflow-hidden relative" style="animation-delay: 0.3s;">
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Deux Rentrées par an</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              Nous offrons deux rentrées (<strong>Avril et Octobre</strong>) chaque année depuis plus de 5 ans.
            </p>
            <p class="text-gray-600 text-sm italic">
              Une flexibilité accrue pour les étudiants avec diverses opportunités d'admission.
            </p>
            <div class="mt-6 pt-6 border-t border-blue-100">
              <div class="grid grid-cols-2 gap-4 text-center">
                <div class="bg-blue-50 rounded-lg p-3">
                  <p class="text-2xl font-bold text-blue-600">Avril</p>
                  <p class="text-xs text-gray-600">Rentrée 1</p>
                </div>
                <div class="bg-blue-50 rounded-lg p-3">
                  <p class="text-2xl font-bold text-blue-600">Octobre</p>
                  <p class="text-xs text-gray-600">Rentrée 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Distinctions et Collaborations Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-fade-in-up">
          <span class="inline-block text-purple-600 text-sm font-bold tracking-widest uppercase px-4 py-2 bg-purple-100 rounded-full mb-4">Reconnaissances</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6" style="font-family: 'Montserrat', sans-serif;">
            DISTINCTIONS ET COLLABORATIONS
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            CREFER est honoré d'avoir reçu plusieurs distinctions au Togo et à l'international
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- Distinctions Card -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all animate-fade-in-up" style="animation-delay: 0.1s;">
            <!-- Image Section -->
            <img
              :src="distinction1Image"
              alt="Distinctions Honorifiques"
              class="w-full h-80 object-cover"
            />
            <!-- Content Section -->
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                Distinctions Honorifiques
              </h3>
              <div class="space-y-4">
                <div class="border-l-4 border-yellow-500 pl-4 py-2">
                  <p class="font-bold text-gray-900 text-lg">Décembre 2020</p>
                  <p class="text-gray-600 text-sm">Meilleur acteur de formation en énergie renouvelable</p>
                </div>
                <div class="border-l-4 border-yellow-500 pl-4 py-2">
                  <p class="font-bold text-gray-900 text-lg">Novembre 2023</p>
                  <p class="text-gray-600 text-sm">Meilleur centre de formation en énergie renouvelable</p>
                </div>
                <div class="border-l-4 border-yellow-500 pl-4 py-2">
                  <p class="font-bold text-gray-900 text-lg">Décembre 2023</p>
                  <p class="text-gray-600 text-sm">Meilleur acteur de l'éducation à Cotonou au Bénin</p>
                </div>
              </div>
              <div class="mt-8 pt-8 border-t border-gray-200">
                <p class="text-sm text-gray-600 flex items-center gap-2">
                  <span class="text-lg"></span>
                  <strong>Membre actif de SAER-TOGO</strong>
                </p>
                <p class="text-xs text-gray-500 mt-2">  Synergie des acteurs des énergies renouvelables au Togo</p>
              </div>
            </div>
          </div>

          <!-- Collaborations Card -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all animate-fade-in-up" style="animation-delay: 0.2s;">
            <!-- Image Section -->
            <img
              :src="distinction2Image"
              alt="Collaborations Académiques"
              class="w-full h-80 object-cover"
            />
            <!-- Content Section -->
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                Collaborations Académiques
              </h3>
              <div class="space-y-6">
                <div>
                  <p class="font-bold text-gray-900 mb-2 text-lg">Commission Consultation Sectorielle (CCS)</p>
                  <p class="text-gray-600 leading-relaxed text-sm">
                    CREFER est fière d'être <strong>membre de la CCS du CERME</strong> de l'université de Lomé. Nous collaborons étroitement pour garantir des programmes de qualité et actualisés.
                  </p>
                </div>
                <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200">
                  <p class="text-sm text-gray-700">
                    <strong>Engagement académique :</strong> Nous organisons des activités pédagogiques stimulantes, y compris des sorties en entreprise pour une expérience pratique réelle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <!-- <div class="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-white text-center animate-fade-in-up" style="animation-delay: 0.3s;">
          <h3 class="text-3xl font-bold mb-4">Rejoignez le CREFER</h3>
          <p class="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Pour une formation complète, pratique et diversifiée, préparant les étudiants à exceller dans les secteurs des énergies renouvelables et des technologies de surveillance.
          </p>
          <router-link to="/admissions" class="inline-block px-10 py-4 bg-yellow-400 text-purple-900 font-bold rounded-xl hover:bg-yellow-300 transition-all hover:shadow-lg">
            Candidater maintenant
          </router-link>
        </div> -->
      </div>
    </section>

    <!-- Programmes d'Études Section -->
    <section class="section-spacing bg-gradient-to-b from-blue-50 to-indigo-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-fade-in-up">
          <div class="inline-block mb-4 px-4 py-2 bg-yellow-100 rounded-full">
            <span class="text-sm font-bold text-yellow-600 uppercase tracking-wide">Formations disponibles</span>
          </div>
          <h2 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: -1.5px;">
            Nos Programmes<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">d'Excellence</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Découvrez nos formations modulaires conçues pour vous faire devenir un expert reconnu.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <!-- Card 1 -->
          <div class="card-modern rounded-3xl overflow-hidden shadow-xl group animate-fade-in-up" style="animation-delay: 0.1s;">
            <div class="relative h-64 overflow-hidden bg-gradient-to-br from-blue-300 to-blue-500">
              <img 
                :src="elecImage"
                alt="Formation en électricité bâtiment"
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-8">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span class="text-xs font-bold text-blue-600 uppercase tracking-wider">ÉLECTRICITÉ</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Expert en<br/>Électricité Bâtiment</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6">Installation, maintenance et sécurisation des réseaux électriques pour habitations et sites industriels.</p>
              <button class="btn-modern w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg">
                En savoir plus →
              </button>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="card-modern rounded-3xl overflow-hidden shadow-xl group animate-fade-in-up" style="animation-delay: 0.2s;">
            <div class="relative h-64 overflow-hidden bg-gradient-to-br from-green-300 to-green-500">
              <img 
                :src="efficaciteImage"
                alt="Formation en efficacité énergétique"
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-8">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span class="text-xs font-bold text-green-600 uppercase tracking-wider">EFFICACITÉ</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Efficacité<br/>Énergétique</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6">Optimisez la consommation énergétique et réduisez l'empreinte carbone avec les meilleures pratiques.</p>
              <button class="btn-modern w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg">
                En savoir plus →
              </button>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="card-modern rounded-3xl overflow-hidden shadow-xl group animate-fade-in-up" style="animation-delay: 0.3s;">
            <div class="relative h-64 overflow-hidden bg-gradient-to-br from-yellow-300 to-yellow-500">
              <img 
                :src="expertImage"
                alt="Formation en énergie solaire"
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-8">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
                  </svg>
                </div>
                <span class="text-xs font-bold text-yellow-600 uppercase tracking-wider">SOLAIRE</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Expert<br/>en Énergie Solaire</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6">Maîtrisez la production solaire et les solutions autonomes connectées au réseau.</p>
              <button class="btn-modern w-full px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg">
                En savoir plus →
              </button>
            </div>
          </div>
        </div>
        <div class="text-center animate-fade-in-up" style="animation-delay: 0.4s;">
          <router-link
            to="/programmes"
            class="btn-modern inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl hover:shadow-2xl font-bold text-lg"
          >
            Voir tous les programmes
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-yellow-500 text-white animate-fade-in-up" v-scroll-animate>
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4 animate-slide-in-left" style="font-family: 'Montserrat', sans-serif;">Prêt à rejoindre CREFER ?</h2>
        <p class="text-lg text-yellow-100 mb-8 animate-fade-in-up delay-100">
          Découvrez nos programmes et devenez un expert en énergies renouvelables
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <router-link
            to="/admissions"
            class="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:shadow-lg transition-colors font-bold transform hover:-translate-y-1 hover:scale-105"
          >
            Nos Admissions
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </router-link>
          <router-link
            to="/contact"
            class="px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors font-bold hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
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
      backgroundImageUrl: new URL('../assets/images/_DSC4860-1200.jpg', import.meta.url).href,
      // images des cartes programmess sorties du template
      elecImage: new URL('../assets/images/_DSC4863-1200.jpg', import.meta.url).href,
      efficaciteImage: new URL('../assets/images/_DSC4864-1200.jpg', import.meta.url).href,
      expertImage: new URL('../assets/images/_DSC4865-1200.jpg', import.meta.url).href,
      batiment1Image: new URL('../assets/images/batiment1-1200.jpg', import.meta.url).href,
      batiment2Image: new URL('../assets/images/batiment2-1200.jpg', import.meta.url).href,
      distinction3Image: new URL('../assets/images/distinction3-1200.jpg', import.meta.url).href,
      mission1Image: new URL('../assets/images/mission1-1200.jpg', import.meta.url).href,
      vision2Image: new URL('../assets/images/vision2-1200.jpg', import.meta.url).href,
      theoryImage: new URL('../assets/images/théorie-1200.jpg', import.meta.url).href,
      practicalImage: new URL('../assets/images/pratique-1200.jpg', import.meta.url).href,
      stageImage: new URL('../assets/images/stage-1200.jpg', import.meta.url).href,
      entrepreneurshipImage: new URL('../assets/images/entreprenariat-1200.jpg', import.meta.url).href,
      distinction1Image: new URL('../assets/images/distinction1-1200.jpg', import.meta.url).href,
      distinction2Image: new URL('../assets/images/distinction2-1200.jpg', import.meta.url).href
      
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
