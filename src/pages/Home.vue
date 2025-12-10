<template>
  <div class="min-h-screen">
    <!-- Hero Section with configurable background image -->
    <section
      class="relative min-h-screen text-white flex items-center overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
      v-scroll-animate
    >
      <div class="absolute inset-0 bg-black/55 z-10"></div>

      <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 md:pt-20 lg:py-0 pb-12 lg:pb-0 relative z-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="text-white animate-fade-in-up">
            <div class="mb-6 inline-block animate-fade-in-up delay-100">
              <span class="text-yellow-500 text-sm font-semibold tracking-widest uppercase">Bienvenue à CREFER</span>
            </div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight animate-fade-in-up delay-200" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
              L'ÉCOLE RÉGIONALE<br />AXÉE SUR <br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">LES MÉTIERS DE L'ÉNERGIE</span>
            </h1>

            <p class="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-lg animate-fade-in-up delay-300" style="font-weight: 400; letter-spacing: 0.5px;">
              Rejoignez la révolution des énergies renouvelables et devenez un leader reconnu.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-400">
              <router-link
                to="/admissions"
                class="btn-modern px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-full hover:shadow-2xl font-bold text-lg text-center"
              >
                Admission
              </router-link>
              <router-link
                to="/Programmes"
                class="btn-modern px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 backdrop-blur font-bold text-lg text-center transition-all"
              >
                Découvrir nos formations
              </router-link>
            </div>

            <!-- Info Pills -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm animate-fade-in-up delay-500">
              <div class="flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-3 rounded-full">
                <svg class="w-5 h-5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-white font-medium">Accrédité</span>
              </div>
              <div class="flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-3 rounded-full">
                <svg class="w-5 h-5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-white font-medium">Experts</span>
              </div>
              <div class="flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-3 rounded-full">
                <svg class="w-5 h-5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-white font-medium">Modernes</span>
              </div>
            </div>
          </div>

          <!-- Right Column Empty -->
          <div class="hidden lg:block"></div>
        </div>
      </div>
    </section>

    <!-- Statistics & Gallery Section -->
    <section class="section-spacing bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <!-- Statistics -->
        <div class="grid md:grid-cols-4 gap-8 mb-20">
          <div class="card-modern p-8 text-center group animate-fade-in-up" style="animation-delay: 0.1s;">
            <div class="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-3" style="font-family: 'Montserrat', sans-serif;">+{{ formesCount }}</div>
            <p class="text-gray-600 font-semibold text-lg">Jeunes Formés</p>
            <div class="mt-3 h-1 w-12 bg-gradient-to-r from-yellow-400 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div class="card-modern p-8 text-center group animate-fade-in-up" style="animation-delay: 0.2s;" v-scroll-animate>
            <div class="text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-3" style="font-family: 'Montserrat', sans-serif;">+{{ emploiCount }}</div>
            <p class="text-gray-600 font-semibold text-lg">En emploi</p>
            <div class="mt-3 h-1 w-12 bg-gradient-to-r from-blue-400 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div class="card-modern p-8 text-center group animate-fade-in-up" style="animation-delay: 0.3s;" v-scroll-animate>
            <div class="text-6xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-3" style="font-family: 'Montserrat', sans-serif;">{{ partnersCount }}</div>
            <p class="text-gray-600 font-semibold text-lg">Entreprises Partenaires</p>
            <div class="mt-3 h-1 w-12 bg-gradient-to-r from-green-400 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div class="card-modern p-8 text-center group animate-fade-in-up" style="animation-delay: 0.4s;" v-scroll-animate>
            <div class="text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent mb-3" style="font-family: 'Montserrat', sans-serif;">{{ certifiesCount }}</div>
            <p class="text-gray-600 font-semibold text-lg">Programmes Certifiants</p>
            <p class="text-gray-500 text-sm mt-1">Reconnu par l'État et le secteur</p>
            <div class="mt-3 h-1 w-12 bg-gradient-to-r from-purple-400 to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        <!-- Gallery & Video Section -->
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Video Section -->
          <div class="relative bg-white rounded-3xl overflow-hidden shadow-2xl card-modern group animate-scale-up">
            <video 
              controls
              preload="metadata"
              class="w-full h-96 object-cover"
            >
              <source :src="videoUrl" type="video/mp4">
              Votre navigateur ne supporte pas les vidéos HTML5.
            </video>
            <div class="absolute top-6 right-6 bg-white/95 backdrop-blur px-6 py-3 rounded-full shadow-lg z-10 pointer-events-none">
              <p class="text-sm font-bold text-blue-900">2024-2025</p>
            </div>
          </div>

          <!-- Info Box -->
          <div class="card-modern rounded-3xl p-10 animate-slide-in-right">
            <div class="inline-block mb-4 px-4 py-2 bg-yellow-100 rounded-full">
              <span class="text-sm font-bold text-yellow-600 uppercase tracking-wide">Nouvelle session</span>
            </div>
            <h3 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8" style="font-family: 'Montserrat', sans-serif; letter-spacing: -1px;">
              FORMATIONS MODULAIRES
            </h3>
            <div class="space-y-6 mb-10">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-semibold uppercase tracking-wide">Durée du programme</p>
                  <p class="text-2xl font-bold text-gray-900">6 à 12 mois</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center text-white">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 font-semibold uppercase tracking-wide">Démarrage</p>
                  <p class="text-2xl font-bold text-gray-900">13 AVRIL 2026</p>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-r from-yellow-50 to-blue-50 rounded-2xl p-6 mb-8 border border-yellow-200/50">
              <p class="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-2">Reconnaissance</p>
              <p class="text-xl font-bold text-blue-900">Meilleur acteur de formation en énergie renouvelable</p>
            </div>
            <router-link
              to="/admissions"
              class="btn-modern block text-center w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl hover:shadow-2xl font-bold text-lg"
            >
              Candidater Maintenant
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="section-spacing bg-gray-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left Image -->
          <div class="order-2 lg:order-1 animate-slide-in-left">
            <div class="relative">
              <div class="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-3xl opacity-10 blur-2xl"></div>
              <img 
                :src="storyImageUrl"
                alt="Notre Histoire CREFER"
                loading="lazy"
                class="w-full rounded-3xl shadow-2xl relative z-10 object-cover"
              />
            </div>
          </div>

          <!-- Right Content -->
          <div class="order-1 lg:order-2 animate-slide-in-right">
            <div class="inline-block mb-4 px-4 py-2 bg-yellow-100 rounded-full">
              <span class="text-sm font-bold text-yellow-600 uppercase tracking-wide">Notre Histoire</span>
            </div>
            <h2 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-8" style="font-family: 'Montserrat', sans-serif; letter-spacing: -1.5px;">
              Une <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">Vision</span><br/>pour l'Afrique
            </h2>
            
            <p class="text-2xl lg:text-3xl font-bold text-yellow-600 mb-6 leading-tight">
              "Depuis 2019, formant les experts énergétiques africains."
            </p>

            <div class="space-y-6 mb-8">
              <p class="text-lg text-gray-700 leading-relaxed font-light">
                CREFER est née en 2019 d'une vision claire, former des jeunes Africains aux métiers des énergies renouvelables. Fondée par EGENT TOGO, leader en solutions solaires, notre académie répond au besoin urgent de techniciens qualifiés.
              </p>
              <div class="pl-6 border-l-4 border-yellow-400">
                <p class="text-lg text-gray-700 leading-relaxed font-light">
                  Le manque de spécialistes en photovoltaïque a motivé notre création. Aujourd'hui, nous sommes la référence régionale, formant des leaders de l'énergie solaire et de l'électricité.
                </p>
              </div>
            </div>

            <router-link
              to="/about"
              class="btn-modern inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl hover:shadow-2xl font-bold text-lg"
            >
              Découvrir notre histoire
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Programmes d'études Section -->
    <section class="section-spacing bg-gradient-to-b from-white via-gray-50 to-white" v-scroll-animate>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16 animate-fade-in-up">
          <span class="inline-block text-yellow-600 text-sm font-bold tracking-widest uppercase px-4 py-2 bg-yellow-100 rounded-full mb-4">Nos Programmes</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6" style="font-family: 'Montserrat', sans-serif;">
            Programmes d'études
          </h2>
          <div class="flex justify-center mb-6">
            <div class="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre offre de formation complète adaptée à vos ambitions professionnelles
          </p>
        </div>

        <!-- Programs Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- CAP Électricité d'Équipement -->
          <div class="card-modern relative p-8 rounded-2xl bg-white border-2 border-blue-100 hover:border-blue-400 group animate-fade-in-up transition-all shadow-lg hover:shadow-2xl overflow-hidden" style="animation-delay: 0.1s;">
            <!-- Gradient bar top -->
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
            <!-- Badge -->
            <div class="absolute top-4 right-4 px-3 py-1 bg-blue-100 rounded-full text-xs font-bold text-blue-700">Niveau 1</div>
            
            <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <!-- Icône Électricité: éclair -->
                <path d="M13 10V3L4 14h6l-1 7 9-11h-6z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Électricité d’Équipement</h3>
            <p class="text-gray-600 mb-6 leading-relaxed text-sm">
              Maîtrisez les techniques essentielles de l'électricité et devenez un professionnel reconnu dans le domaine des équipements électriques.
            </p>
            <div class="space-y-2 mb-6 pb-6 border-b-2 border-blue-100">
              <div class="flex items-center gap-2 text-gray-700 text-sm">
                <span class="text-blue-500 font-bold">⏱</span>
                <span>Durée: 3 ans</span>
              </div>
              <div class="flex items-center gap-2 text-gray-700 text-sm">
                <span class="text-blue-500 font-bold">📊</span>
                <span>Diplôme d'État</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Formations pratiques intensives</span>
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Matériel moderne et équipé</span>
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Stages professionnels inclus</span>
              </li>
            </ul>
            <router-link to="/cap-electricite" class="w-full block text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all group-hover:scale-105">
              Découvrir le programme
            </router-link>
          </div>

          <!-- BT Électrotechnique -->
          <div class="card-modern relative p-8 rounded-2xl bg-white border-2 border-yellow-100 hover:border-yellow-400 group animate-fade-in-up transition-all shadow-lg hover:shadow-2xl overflow-hidden" style="animation-delay: 0.2s;">
            <!-- Gradient bar top -->
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-400"></div>
            <!-- Badge -->
            <div class="absolute top-4 right-4 px-3 py-1 bg-yellow-100 rounded-full text-xs font-bold text-yellow-700">Niveau 2</div>
            
            <div class="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <!-- Icône Efficacité: histogramme -->
                <path d="M2 11h4v7H2v-7zm6-4h4v11H8V7zm6-6h4v17h-4V1z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">BT Électrotechnique</h3>
            <p class="text-gray-600 mb-6 leading-relaxed text-sm">
              Accédez à une formation de haut niveau en électrotechnique avec approche théorique et pratique pour les futurs techniciens supérieurs.
            </p>
            <div class="space-y-2 mb-6 pb-6 border-b-2 border-yellow-100">
              <div class="flex items-center gap-2 text-gray-700 text-sm">
                <span class="text-yellow-500 font-bold">⏱</span>
                <span>Durée: 2-3 ans</span>
              </div>
              <div class="flex items-center gap-2 text-gray-700 text-sm">
                <span class="text-yellow-500 font-bold">📊</span>
                <span>Diplôme d'État</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Enseignement avancé</span>
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Projets de fin d'études</span>
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Reconnaissance nationale</span>
              </li>
            </ul>
            <router-link to="/bt-electrotechnique" class="w-full block text-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all group-hover:scale-105">
              Découvrir le programme
            </router-link>
          </div>

          <!-- Formation Modulaire -->
          <div class="card-modern relative p-8 rounded-2xl bg-white border-2 border-green-100 hover:border-green-400 group animate-fade-in-up transition-all shadow-lg hover:shadow-2xl overflow-hidden" style="animation-delay: 0.3s;">
            <!-- Gradient bar top -->
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-teal-400"></div>
            <!-- Badge -->
            <div class="absolute top-4 right-4 px-3 py-1 bg-green-100 rounded-full text-xs font-bold text-green-700">Flexible</div>
            <div class="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" stroke-width="1.8">
                <!-- Icône Modulaire/Solaire: soleil stylisé -->
                <circle cx="12" cy="12" r="3" stroke="currentColor" fill="currentColor" />
                <g stroke="currentColor">
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="M4.2 4.2l1.4 1.4" />
                  <path d="M18.4 18.4l1.4 1.4" />
                  <path d="M4.2 19.8l1.4-1.4" />
                  <path d="M18.4 5.6l1.4-1.4" />
                </g>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Formation Modulaire</h3>
            <p class="text-gray-600 mb-6 leading-relaxed text-sm">
              Flexibilité totale pour les professionnels en activité. Acquérez des compétences spécifiques à votre rythme.
            </p>
            <div class="space-y-2 mb-6 pb-6 border-b-2 border-green-100">
              <div class="flex items-center gap-2 text-gray-700 text-sm">
                <span class="text-green-500 font-bold">⏱</span>
                <span>Durée: 6-12 mois</span>
              </div>
              <div class="flex items-center gap-2 text-gray-700 text-sm">
                <span class="text-green-500 font-bold">📊</span>
                <span>Certificat & Attestation</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Horaires flexibles</span>
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Modules personnalisés</span>
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Certifications reconnues</span>
              </li>
            </ul>
            <router-link to="/formation-modulaire" class="w-full block text-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all group-hover:scale-105">
              Découvrir les modules
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose CREFER Section -->
    <section class="section-spacing bg-gradient-to-b from-yellow-50 to-amber-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-start">
          <!-- Left Content -->
          <div class="animate-slide-in-left">
            <div class="inline-block mb-4 px-4 py-2 bg-yellow-100 rounded-full">
              <span class="text-sm font-bold text-yellow-600 uppercase tracking-wide">Pourquoi choisir CREFER?</span>
            </div>
            <h2 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight" style="font-family: 'Montserrat', sans-serif; letter-spacing: -1.5px;">
              Choisir le Leader<br/>de la Formation
            </h2>
            <p class="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              CREFER se consacre à offrir une formation de premier ordre en énergie solaire et en électricité. Nos programmes sont conçus pour doter les étudiants des connaissances et des compétences nécessaires pour exceller dans un secteur de l'énergie en constante évolution.
            </p>
            <router-link
              to="/about"
              class="btn-modern inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg hover:shadow-xl"
            >
              En savoir plus
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
          </div>

          <!-- Right Cards Grid -->
          <div class="grid md:grid-cols-2 gap-6 animate-slide-in-right">
            <!-- Card 1 -->
            <div class="card-modern p-8 group border-l-4 border-yellow-400" v-scroll-animate>
              <div class="mb-6 icon-wrapper bg-gradient-to-br from-yellow-100 to-yellow-50 group-hover:from-yellow-200 group-hover:to-yellow-100">
                <svg class="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Programme Innovant</h3>
              <p class="text-gray-600 text-sm leading-relaxed">Constamment mis à jour pour refléter les dernières avancées technologiques du secteur énergétique.</p>
            </div>

            <!-- Card 2 -->
            <div class="card-modern p-8 group border-l-4 border-blue-400" v-scroll-animate>
              <div class="mb-6 icon-wrapper bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100">
                <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Experts Reconnus</h3>
              <p class="text-gray-600 text-sm leading-relaxed">Apprenez des meilleurs spécialistes du secteur, passionnés par l'excellence éducative.</p>
            </div>

            <!-- Card 3 -->
            <div class="card-modern p-8 group border-l-4 border-green-400" v-scroll-animate>
              <div class="mb-6 icon-wrapper bg-gradient-to-br from-green-100 to-green-50 group-hover:from-green-200 group-hover:to-green-100">
                <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Recherche Active</h3>
              <p class="text-gray-600 text-sm leading-relaxed">Participez à des projets innovants répondant à des défis énergétiques concrets.</p>
            </div>

            <!-- Card 4 -->
            <div class="card-modern p-8 group border-l-4 border-purple-400" v-scroll-animate>
              <div class="mb-6 icon-wrapper bg-gradient-to-br from-purple-100 to-purple-50 group-hover:from-purple-200 group-hover:to-purple-100">
                <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H19a2 2 0 002-2v-2a2 2 0 00-2-2h-2.5a2 2 0 01-1-3.8A6 6 0 006 9" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Impact Global</h3>
              <p class="text-gray-600 text-sm leading-relaxed">Contribuez à la transition énergétique mondiale et façonnez un avenir durable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ils Nous Font Confiance Section -->
    <section class="section-spacing bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-fade-in-up">
          <div class="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full">
            <span class="text-sm font-bold text-green-600 uppercase tracking-wide">Partenariats</span>
          </div>
          <h2 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: -1.5px;">
            Ils nous font<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Confiance</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Partenaires prestigieux qui reconnaissent notre excellence dans la formation aux énergies renouvelables.
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <!-- Logo 1 -->
          <div class="card-modern rounded-2xl h-32 flex items-center justify-center animate-fade-in-up hover:shadow-lg" style="animation-delay: 0.1s;">
            <img :src="partnerLogo1" alt="Partner 1" class="max-w-40 h-16 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <!-- Logo 2 -->
          <div class="card-modern rounded-2xl h-32 flex items-center justify-center animate-fade-in-up hover:shadow-lg" style="animation-delay: 0.15s;">
            <img :src="partnerLogo2" alt="Partner 2" class="max-w-40 h-16 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <!-- Logo 3 -->
          <div class="card-modern rounded-2xl h-32 flex items-center justify-center animate-fade-in-up hover:shadow-lg" style="animation-delay: 0.2s;">
            <img :src="partnerLogo3" alt="Partner 3" class="max-w-40 h-16 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <!-- Logo 4 -->
          <div class="card-modern rounded-2xl h-32 flex items-center justify-center animate-fade-in-up hover:shadow-lg" style="animation-delay: 0.25s;">
            <img :src="partnerLogo4" alt="Partner 4" class="max-w-40 h-16 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <!-- Logo 5 -->
          <!-- <div class="card-modern rounded-2xl h-32 flex items-center justify-center animate-fade-in-up hover:shadow-lg" style="animation-delay: 0.3s;">
            <img src="https://via.placeholder.com/120x50?text=Partner5" alt="Partner 5" class="max-w-32 h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div> -->
          <!-- Logo 6 -->
          <!-- <div class="card-modern rounded-2xl h-32 flex items-center justify-center animate-fade-in-up hover:shadow-lg" style="animation-delay: 0.35s;">
            <img src="https://via.placeholder.com/120x50?text=Partner6" alt="Partner 6" class="max-w-32 h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div> -->
          <!-- Logo 7 -->
          <!-- <div class="card-modern rounded-2xl h-32 flex items-center justify-center animate-fade-in-up hover:shadow-lg" style="animation-delay: 0.4s;">
            <img src="https://via.placeholder.com/120x50?text=Partner7" alt="Partner 7" class="max-w-32 h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div> -->
          <!-- Logo 8 -->
          <!-- <div class="card-modern rounded-2xl h-32 flex items-center justify-center animate-fade-in-up hover:shadow-lg" style="animation-delay: 0.45s;">
            <img src="https://via.placeholder.com/120x50?text=Partner8" alt="Partner 8" class="max-w-32 h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div> -->
        </div>
      </div>
    </section>

    <!-- Section Image Solaire -->
    <!-- <section class="py-0 px-0 bg-white">
      <div class="w-full overflow-hidden">
        <img 
          src="/src/assets/solar-panels.jpg" 
          alt="Champs de panneaux solaires" 
          class="w-full h-[340px] object-cover object-center" 
          style="max-height:340px;">
      </div>
    </section> -->

    <!-- Section Actualités -->
    <section class="section-spacing bg-gradient-to-br from-yellow-50 via-rose-50 to-yellow-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
          <div class="animate-fade-in-up">
            <div class="inline-block mb-4 px-4 py-2 bg-yellow-100 rounded-full">
              <span class="text-sm font-bold text-yellow-600 uppercase tracking-wide">Dernières actualités</span>
            </div>
            <h2 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -1.5px;">
              Nos<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Actualités</span>
            </h2>
          </div>
          <router-link to="/articles" class="btn-modern px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-2xl font-bold text-lg inline-flex items-center gap-3 hover:shadow-lg transition-all">
            Voir plus
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </router-link>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Actualité 1 -->
          <div v-if="newsArticles[0]" class="card-modern rounded-3xl overflow-hidden animate-fade-in-up" style="animation-delay: 0.1s;">
            <div class="relative h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 overflow-hidden">
              <img :src="getArticleImage(newsArticles[0])" :alt="newsArticles[0].fullTitle" class="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2" style="font-family: 'Montserrat', sans-serif;">
                {{ newsArticles[0].fullTitle }}
              </h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                {{ newsArticles[0].description }}
              </p>
              <router-link :to="`/articles/${newsArticles[0].id}`" class="text-yellow-600 font-bold text-sm hover:text-yellow-700 flex items-center gap-2">
                Lire l'article »
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
              </router-link>
            </div>
          </div>
          <!-- Actualité 2 -->
          <div v-if="newsArticles[1]" class="card-modern rounded-3xl overflow-hidden animate-fade-in-up" style="animation-delay: 0.2s;">
            <div class="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
              <img :src="getArticleImage(newsArticles[1])" :alt="newsArticles[1].fullTitle" class="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2" style="font-family: 'Montserrat', sans-serif;">
                {{ newsArticles[1].fullTitle }}
              </h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                {{ newsArticles[1].description }}
              </p>
              <router-link :to="`/articles/${newsArticles[1].id}`" class="text-blue-600 font-bold text-sm hover:text-blue-700 flex items-center gap-2">
                Lire l'article »
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
              </router-link>
            </div>
          </div>
          <!-- Actualité 3 -->
          <div v-if="newsArticles[2]" class="card-modern rounded-3xl overflow-hidden animate-fade-in-up" style="animation-delay: 0.3s;">
            <div class="relative h-48 bg-gradient-to-br from-green-400 to-green-600 overflow-hidden">
              <img :src="getArticleImage(newsArticles[2])" :alt="newsArticles[2].fullTitle" class="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2" style="font-family: 'Montserrat', sans-serif;">
                {{ newsArticles[2].fullTitle }}
              </h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                {{ newsArticles[2].description }}
              </p>
              <router-link :to="`/articles/${newsArticles[2].id}`" class="text-green-600 font-bold text-sm hover:text-green-700 flex items-center gap-2">
                Lire l'article »
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Section Témoignages -->
    <section class="section-spacing bg-gradient-to-b from-amber-50 to-yellow-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-fade-in-up">
          <div class="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span class="text-sm font-bold text-blue-600 uppercase tracking-wide">Ils nous font confiance</span>
          </div>
          <h2 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: -1.5px;">
            Témoignages de nos<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">Anciens Étudiants</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Découvrez les success stories de nos étudiants qui ont transformé leur carrière chez CREFER.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Témoignage 1 -->
          <div class="card-modern rounded-2xl p-8 flex flex-col animate-fade-in-up" style="animation-delay: 0.1s;">
            <div class="flex gap-4 items-start mb-6">
              <img :src="testimonial1Image" alt="Profil" class="w-16 h-16 rounded-full object-cover ring-2 ring-yellow-400 cursor-pointer hover:ring-yellow-600 transition-all" @click="openTestimonialLightbox(testimonial1Image)" />
              <div class="flex-1">
                <h3 class="text-lg font-bold text-gray-900">MELA D'Kigma Solmba</h3>
                <p class="text-sm text-yellow-600 font-semibold">Alumni promotion 12</p>
              </div>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
              "C’est pas du fake, CREFER c’est du vrai et du lourd. Je suis étudiant en formation modulaire, filière SPV et nous sommes en phase de stage actuellement. *Quand bien même que je n'ai pas encore terminé ma formation, j'ai déjà gagné des chantiers pour moi même."
            </p>
            <div class="flex gap-1 text-yellow-400">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
          </div>
          <!-- Témoignage 2 -->
          <div class="card-modern rounded-2xl p-8 flex flex-col animate-fade-in-up" style="animation-delay: 0.2s;">
            <div class="flex gap-4 items-start mb-6">
              <img :src="testimonial2Image" alt="Profil" class="w-16 h-16 rounded-full object-cover ring-2 ring-blue-400 cursor-pointer hover:ring-blue-600 transition-all" @click="openTestimonialLightbox(testimonial2Image)" />
              <div class="flex-1">
                <h3 class="text-lg font-bold text-gray-900">YAO Amivi Emefa</h3>
                <p class="text-sm text-blue-600 font-semibold">Alumni promotion 8/Social Specialist centrale solaire Blitta</p>
              </div>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
              "{{ showFullTestimonial2 ? testimonial2FullText : testimonial2Preview }}"
            </p>
            <button @click="showFullTestimonial2 = !showFullTestimonial2" class="text-blue-600 hover:text-blue-800 font-semibold text-sm mb-4 transition-colors">
              {{ showFullTestimonial2 ? 'Voir moins' : 'Voir plus' }}
            </button>
            <div class="flex gap-1 text-yellow-400">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
          </div>
          <!-- Témoignage 3 -->
          <div class="card-modern rounded-2xl p-8 flex flex-col animate-fade-in-up" style="animation-delay: 0.3s;">
            <div class="flex gap-4 items-start mb-6">
              <img :src="testimonial3Image" alt="Profil" class="w-16 h-16 rounded-full object-cover ring-2 ring-green-400 cursor-pointer hover:ring-green-600 transition-all" @click="openTestimonialLightbox(testimonial3Image)" />
              <div class="flex-1">
                <h3 class="text-lg font-bold text-gray-900">SOW Kerfala</h3>
                <p class="text-sm text-green-600 font-semibold">Étudiant Promotion 13</p>
              </div>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
              "{{ showFullTestimonial3 ? testimonial3FullText : testimonial3Preview }}"
            </p>
            <button @click="showFullTestimonial3 = !showFullTestimonial3" class="text-blue-600 hover:text-blue-800 font-semibold text-sm mb-4 transition-colors">
              {{ showFullTestimonial3 ? 'Voir moins' : 'Voir plus' }}
            </button>
            <div class="flex gap-1 text-yellow-400">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal pour les photos des témoins -->
    <transition name="fade">
      <div v-if="lightboxOpen" class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" @click="closeTestimonialLightbox">
        <!-- Close Button -->
        <button
          @click="closeTestimonialLightbox"
          class="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors z-60"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Image Container -->
        <div class="relative max-w-2xl w-full h-auto flex flex-col justify-center items-center" @click.stop>
          <img :src="lightboxImage" alt="Témoignage" class="w-full h-auto rounded-lg object-contain" />
          <p class="text-white text-center mt-4 text-sm">Appuyez sur ESC pour fermer</p>
        </div>
      </div>
    </transition>

    <!-- Section Prêt à nous rejoindre ? -->
    <section class="section-spacing bg-gradient-to-r from-yellow-600 to-white relative overflow-hidden" v-scroll-animate>
      <!-- Background decorative elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div class="max-w-6xl mx-auto relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Left: Content -->
          <div class="animate-slide-in-left">
            <div class="inline-block mb-6 px-4 py-2 bg-black/15 backdrop-blur-sm rounded-full border border-black/25">
              <span class="text-sm font-bold text-gray-900 uppercase tracking-wide">Ton Avenir Démarre Ici</span>
            </div>
            <h2 class="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 drop-shadow-lg" style="font-family: 'Montserrat', sans-serif; letter-spacing: -1.5px;">
              Prêt à nous<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-700">Rejoindre ?</span>
            </h2>
            <p class="text-xl text-gray-800 mb-10 leading-relaxed font-light drop-shadow-md">
              Transforme ta carrière avec CREFER. Rejoins une communauté de plus de 5000 experts en énergies renouvelables qui façonnent l'avenir durable.
            </p>
            <div class="flex flex-col sm:flex-row gap-6 items-start">
              <router-link
                to="/admissions"
                class="btn-modern px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-bold text-lg rounded-2xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-3 drop-shadow-lg"
              >
                Postuler Maintenant
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </router-link>
              <router-link
                to="/contact"
                class="px-10 py-4 border-2 border-gray-900 text-gray-900 font-bold text-lg rounded-2xl hover:bg-gray-900/10 transition-all inline-flex items-center gap-3 bg-white/70 drop-shadow-md"
              >
                Plus d'Infos
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </router-link>
            </div>
          </div>
          <!-- Right: Image -->
          <div class="animate-slide-in-right relative">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                :src="joinUsImage"
                alt="Étudiants CREFER devant panneau"
                class="w-full h-70 object-cover object-[center_50%]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <!-- Floating stats over image -->
              <div class="absolute bottom-6 left-6 card-modern p-4 max-w-xs">
                <p class="text-black/80 text-sm font-light mb-1">Taux de réussite</p>
                <p class="text-black/80 text-3xl font-bold">95%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section-spacing bg-gradient-to-b from-slate-100 to-gray-50" v-scroll-animate>
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 animate-fade-in-up">
          <div class="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
            <span class="text-sm font-bold text-purple-600 uppercase tracking-wide">À propos de CREFER</span>
          </div>
          <h2 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: -1.5px;">
            Leader en Formation<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Énergies Durables</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Bientôt 10 ans, CREFER forme les experts de demain dans les énergies renouvelables avec des programmes innovants et reconnus internationalement.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <!-- Card 1 -->
          <div class="card-modern rounded-2xl p-8 border-l-4 border-blue-500 animate-fade-in-up hover:shadow-2xl transition-shadow" style="animation-delay: 0.1s;">
            <div class="icon-wrapper w-20 h-20 mb-6 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 rounded-3xl flex items-center justify-center drop-shadow-lg">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3" style="font-family: 'Montserrat', sans-serif;">Formation Qualifiante</h3>
            <p class="text-gray-600 leading-relaxed">
              Programmes CAP, BT et modules spécialisés reconnus par l'État et les entreprises du secteur énergétique.
            </p>
          </div>
          <!-- Card 2 -->
          <div class="card-modern rounded-2xl p-8 border-l-4 border-yellow-500 animate-fade-in-up hover:shadow-2xl transition-shadow" style="animation-delay: 0.2s;">
            <div class="icon-wrapper w-20 h-20 mb-6 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 rounded-3xl flex items-center justify-center drop-shadow-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3" style="font-family: 'Montserrat', sans-serif;">Expertise Reconnue</h3>
            <p class="text-gray-600 leading-relaxed">
              Formateurs experts du secteur avec une expérience combinée de plus de 200 ans dans l'industrie énergétique.
            </p>
          </div>
          <!-- Card 3 -->
          <div class="card-modern rounded-2xl p-8 border-l-4 border-green-500 animate-fade-in-up hover:shadow-2xl transition-shadow" style="animation-delay: 0.3s;">
            <div class="icon-wrapper w-20 h-20 mb-6 bg-gradient-to-br from-green-400 via-green-500 to-green-700 rounded-3xl flex items-center justify-center drop-shadow-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3" style="font-family: 'Montserrat', sans-serif;">Placement Assuré</h3>
            <p class="text-gray-600 leading-relaxed">
              95% de nos diplômés trouvent un emploi dans les 3 mois suivant leur graduation, avec un salaire compétitif.
            </p>
          </div>
        </div>

        <!-- Statistics Grid -->
        <div class="grid md:grid-cols-4 gap-6 mb-16">
          <div class="card-modern rounded-2xl p-8 text-center">
            <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 mb-2">
              +1500
            </div>
            <p class="text-gray-600 font-semibold">Jeunes Formés</p>
          </div>
          <div class="card-modern rounded-2xl p-8 text-center">
            <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 mb-2">
              +1200
            </div>
            <p class="text-gray-600 font-semibold">En Emploi</p>
          </div>
          <div class="card-modern rounded-2xl p-8 text-center">
            <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 mb-2">
              50
            </div>
            <p class="text-gray-600 font-semibold">Entreprises Partenaires</p>
          </div>
          <div class="card-modern rounded-2xl p-8 text-center">
            <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-600 mb-2">
              6
            </div>
            <p class="text-gray-600 font-semibold">Programmes Certifiants</p>
          </div>
        </div>
      </div>
    </section>

   

    <!-- Call to Action -->
    <section class="section-spacing bg-gradient-to-r from-yellow-600 to-white relative overflow-hidden" v-scroll-animate>
      <!-- Decorative background -->
      <div class="absolute top-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -ml-48 -mt-48"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -mr-48 -mb-48"></div>
      
      <div class="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
        <h2 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg" style="font-family: 'Montserrat', sans-serif; letter-spacing: -1.5px;">
          Commence Ton Voyage<br/>Vers <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-700">l'excellence</span>
        </h2>
        <p class="text-xl text-gray-800 mb-12 font-light drop-shadow-md">
          Les places pour les sessions 2025-2026 sont limitées. Inscris-toi maintenant et rejoins la révolution des énergies durables.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <router-link
            to="/admissions"
            class="btn-modern px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-bold text-lg rounded-2xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-3 drop-shadow-lg"
          >
            Candidater Maintenant
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </router-link>
          <a
            href="tel:+22822XXXXXX"
            class="px-10 py-4 border-2 border-gray-900 text-gray-900 font-bold text-lg rounded-2xl hover:bg-gray-900/10 transition-all inline-flex items-center gap-3 bg-white/70 drop-shadow-md"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.26 1.043 1.1 2.863 2.513 4.276s3.233 2.253 4.276 2.513l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57c-8.835 0-16-7.165-16-16V3z" />
            </svg>
            Appelle-Nous
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useArticles } from '../services/articlesService'

export default {
  name: 'Home',
  setup() {
    // Load articles from service
    const { articles } = useArticles()

    // Get first 3 articles for the Actualités section
    const newsArticles = computed(() => articles.value.slice(0, 3))

    // Video URL - importée comme les images
    const videoUrl = ref(new URL('../assets/videos/video1.mp4', import.meta.url).href)
    // Image pour la section "Prêt à nous rejoindre ?"
    const joinUsImage = ref(new URL('../assets/images/_DSC4676-1200.jpg', import.meta.url).href)
    // Utilise des images locales placées dans `src/assets/images/`.
    // Remplacez les fichiers si nécessaire. Vite résout les chemins via `new URL(..., import.meta.url)`.
    const backgroundImageUrl = ref(new URL('../assets/images/_DSC4860-1200.jpg', import.meta.url).href)
    const storyImageUrl = ref(new URL('../assets/images/histoire.jpg', import.meta.url).href)
    // Images pour les 3 cards "Programmes d'étude"
    const capImageUrl = ref(new URL('../assets/images/_DSC4674.jpg', import.meta.url).href)
    const efficaciteImageUrl = ref(new URL('../assets/images/_DSC4676.jpg', import.meta.url).href)
    const solaireImageUrl = ref(new URL('../assets/images/_DSC4677.jpg', import.meta.url).href)
    // Logos partenaires (placeholders SVG créés localement)
    // Vous pouvez remplacer ces fichiers par vos images fournies ultérieurement.
    // Utiliser les fichiers JPG fournis — placez vos fichiers dans `src/assets/images/` avec ces noms :
    // partner-cerme.jpg, partner-ucrm.jpg, partner-compassion.jpg, partner-egent.jpg
    const partnerLogo1 = ref(new URL('../assets/images/egent-logo.0384ff91.jpg', import.meta.url).href)
    const partnerLogo2 = ref(new URL('../assets/images/part2.e6602420.png', import.meta.url).href)
    const partnerLogo3 = ref(new URL('../assets/images/part3.fe0f87cf.jpg', import.meta.url).href)
    const partnerLogo4 = ref(new URL('../assets/images/télécharger.jpg', import.meta.url).href)
    
    // Compteurs animés
    const formesCount = ref(1500)
    const emploiCount = ref(1200)
    const partnersCount = ref(50)
    const certifiesCount = ref(6)
    
    // Lightbox pour les photos des témoins
    const lightboxOpen = ref(false)
    const lightboxImage = ref('')
    
    const openTestimonialLightbox = (imageUrl) => {
      lightboxImage.value = imageUrl
      lightboxOpen.value = true
      document.body.style.overflow = 'hidden'
    }
    
    const closeTestimonialLightbox = () => {
      lightboxOpen.value = false
      document.body.style.overflow = 'auto'
    }
    
    const handleKeydown = (e) => {
      if (e.key === 'Escape' && lightboxOpen.value) {
        closeTestimonialLightbox()
      }
    }
    
    onMounted(() => {
      // Ajouter le listener pour la touche Escape
      window.addEventListener('keydown', handleKeydown)
      
      // Réinitialiser à 0 pour commencer l'animation
      formesCount.value = 0
      emploiCount.value = 0
      partnersCount.value = 0
      certifiesCount.value = 0
      
      // Animation des compteurs simultanément avec durée augmentée
      const startTime = Date.now()
      const duration = 5000
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        formesCount.value = Math.floor(1500 * progress)
        emploiCount.value = Math.floor(1200 * progress)
        partnersCount.value = Math.floor(50 * progress)
        certifiesCount.value = Math.floor(6 * progress)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          formesCount.value = 1500
          emploiCount.value = 1200
          partnersCount.value = 50
          certifiesCount.value = 6
        }
      }
      
      requestAnimationFrame(animate)
    })

    onUnmounted(() => {
      // Nettoyer le listener du clavier et la lightbox
      window.removeEventListener('keydown', handleKeydown)
      closeTestimonialLightbox()
    })

    onUnmounted(() => {
      // Reset counters when leaving the page
      formesCount.value = 1500
      emploiCount.value = 1200
      partnersCount.value = 50
      certifiesCount.value = 6
    })
    
    // Images pour les cartes de témoignage
    const testimonial1Image = ref(new URL('../assets/images/temois1.jpg', import.meta.url).href)
    const testimonial2Image = ref(new URL('../assets/images/temoins02.jpg', import.meta.url).href)
    const testimonial3Image = ref(new URL('../assets/images/temoins3.jpg', import.meta.url).href)
    
    // État pour le "voir plus" du témoignage 2
    const showFullTestimonial2 = ref(false)
    const testimonial2FullText = "Je suis YAO Amivi Emefa, ancienne étudiante de la Promotion 8 de CREFER. Je travaille actuellement à la centrale solaire de Blitta. Je voudrais lancer un appel à toutes les jeunes filles : inscrivez-vous à CREFER, surtout en cette période où beaucoup se demandent « Que vais-je faire ? Où m'inscrire ? » Si j'ai pu trouver ma voie grâce à CREFER, vous le pouvez aussi. Je vous encourage vivement à rejoindre le programme Énergies Renouvelables et Électricité, une formation qui ouvre de réelles opportunités."
    const testimonial2Preview = "Je suis YAO Amivi Emefa, ancienne étudiante de la Promotion 8 de CREFER. Je travaille actuellement à la centrale solaire de Blitta..."
    
    // État pour le "voir plus" du témoignage 3
    const showFullTestimonial3 = ref(false)
    const testimonial3FullText = "Je suis Guinéen, au départ, j'étais venu simplement pour suivre les cours en énergie renouvelable et me former dans ce domaine. Mais ce que j'ai réussi à accomplir aujourd'hui me donne une véritable perception de mon potentiel. Ce que j'apprends ici ne se limite plus seulement au énergie renouvelable: je veux suivre l'exemple de mes encadreurs, m'inspirer de leurs parcours et élargir mes compétences."
    const testimonial3Preview = "Je suis Guinéen, au départ, j'étais venu simplement pour suivre les cours en énergie renouvelable..."

    // Helper to get article preview image
    const getArticleImage = (article) => {
      if (article.images && article.images.length > 0) {
        const firstImage = article.images[0]
        // Check if it's a valid data URI or URL (not corrupted/empty)
        if (firstImage && (firstImage.startsWith('data:') || firstImage.startsWith('http') || firstImage.startsWith('blob:'))) {
          return firstImage
        }
      }
      // Fallback to default images based on article ID
      const fallbackImages = {
        '1': new URL('../assets/images/soutenance-1200.jpg', import.meta.url).href,
        '2': new URL('../assets/images/image1article2.jpg', import.meta.url).href,
        '3': new URL('../assets/images/articlesolaire1.jpg', import.meta.url).href,
        '4': new URL('../assets/images/install1article.jpg', import.meta.url).href,
        '5': new URL('../assets/images/exam1article.jpg', import.meta.url).href,
      }
      return fallbackImages[article.id] || backgroundImageUrl.value
    }

    return { 
      articles,
      newsArticles,
      getArticleImage,
      videoUrl,
      backgroundImageUrl,
      storyImageUrl,
      capImageUrl,
      efficaciteImageUrl,
      solaireImageUrl,
      partnerLogo1,
      partnerLogo2,
      partnerLogo3,
      partnerLogo4,
      formesCount,
      emploiCount,
      partnersCount,
      certifiesCount,
      joinUsImage,
      testimonial1Image,
      testimonial2Image,
      testimonial3Image,
      showFullTestimonial2,
      testimonial2FullText,
      testimonial2Preview,
      showFullTestimonial3,
      testimonial3FullText,
      testimonial3Preview,
      lightboxOpen,
      lightboxImage,
      openTestimonialLightbox,
      closeTestimonialLightbox
    }
  }
}
</script>
