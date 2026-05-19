<template>
  <div class="min-h-screen">
    <!-- Hero Section with configurable background image -->
    <section
      class="relative min-h-screen text-white flex items-center overflow-hidden bg-cover bg-center transition-all duration-1000"
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
              {{ heroData.titleMain }}<br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">{{ heroData.titleHighlight }}</span>
            </h1>

            <p class="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-lg animate-fade-in-up delay-300" style="font-weight: 400; letter-spacing: 0.5px;">
              {{ heroData.subtitle }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-400">
              <router-link
                to="/admissions"
                class="btn-modern px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-full hover:shadow-2xl font-bold text-lg text-center"
              >
                {{ heroData.cta1 }}
              </router-link>
              <router-link
                to="/Programmes"
                class="btn-modern px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 backdrop-blur font-bold text-lg text-center transition-all"
              >
                {{ heroData.cta2 }}
              </router-link>
            </div>

            <!-- Info Pills -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm animate-fade-in-up delay-500">
              <div class="flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-3 rounded-full">
                <svg class="w-5 h-5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-white font-medium">{{ heroData.badge1 }}</span>
              </div>
              <div class="flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-3 rounded-full">
                <svg class="w-5 h-5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-white font-medium">{{ heroData.badge2 }}</span>
              </div>
              <div class="flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-3 rounded-full">
                <svg class="w-5 h-5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-white font-medium">{{ heroData.badge3 }}</span>
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
            <iframe
              v-if="isYoutubeUrl"
              :src="youtubeEmbedUrl"
              class="w-full h-96"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <video
              v-else
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
              {{ infoBoxData.title }}
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
                  <p class="text-2xl font-bold text-gray-900">{{ infoBoxData.duration }}</p>
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
                  <p class="text-2xl font-bold text-gray-900">{{ infoBoxData.startDate }}</p>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-r from-yellow-50 to-blue-50 rounded-2xl p-6 mb-8 border border-yellow-200/50">
              <p class="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-2">Reconnaissance</p>
              <p class="text-xl font-bold text-blue-900">{{ infoBoxData.recognition }}</p>
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
              {{ storyData.title }}
            </h2>
            
            <p class="text-2xl lg:text-3xl font-bold text-yellow-600 mb-6 leading-tight">
              "{{ storyData.quote }}"
            </p>

            <div class="space-y-6 mb-8">
              <p class="text-lg text-gray-700 leading-relaxed font-light">
                {{ storyData.text1 }}
              </p>
              <div class="pl-6 border-l-4 border-yellow-400">
                <p class="text-lg text-gray-700 leading-relaxed font-light">
                  {{ storyData.text2 }}
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
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ programsData.p1.title }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed text-sm">

              {{ programsData.p1.desc }}</p>
            <div class="space-y-2 mb-6 pb-6 border-b-2 border-blue-100">
              <div class="flex items-center gap-2 text-gray-700 text-sm">
                <span class="text-blue-500 font-bold">⏱</span>
                <span>Durée: {{ programsData.p1.duration }}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-700 text-sm">
                <span class="text-blue-500 font-bold">📊</span>
                <span>{{ programsData.p1.diploma }}</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ programsData.p1.feat1 }}</span>
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ programsData.p1.feat2 }}</span>
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ programsData.p1.feat3 }}</span>
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
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ programsData.p2.title }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed text-sm">

              {{ programsData.p2.desc }}</p>
            <div class="space-y-2 mb-6 pb-6 border-b-2 border-yellow-100">
              <div class="flex items-center gap-2 text-gray-700 text-sm">
                <span class="text-yellow-500 font-bold">⏱</span>
                <span>Durée: {{ programsData.p2.duration }}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-700 text-sm">
                <span class="text-yellow-500 font-bold">📊</span>
                <span>{{ programsData.p2.diploma }}</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ programsData.p2.feat1 }}</span>
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ programsData.p2.feat2 }}</span>
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ programsData.p2.feat3 }}</span>
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
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ programsData.p3.title }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed text-sm">

              {{ programsData.p3.desc }}</p>
            <div class="space-y-2 mb-6 pb-6 border-b-2 border-green-100">
              <div class="flex items-center gap-2 text-gray-700 text-sm">
                <span class="text-green-500 font-bold">⏱</span>
                <span>Durée: {{ programsData.p3.duration }}</span>
              </div>
              <div class="flex items-center gap-2 text-gray-700 text-sm">
                <span class="text-green-500 font-bold">📊</span>
                <span>{{ programsData.p3.diploma }}</span>
              </div>
            </div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ programsData.p3.feat1 }}</span>
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ programsData.p3.feat2 }}</span>
              </li>
              <li class="flex items-start gap-2 text-gray-700 text-sm">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ programsData.p3.feat3 }}</span>
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
              {{ whyUsData.heading }}
            </h2>
            <p class="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              {{ whyUsData.description }}
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
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ whyUsData.feat1Title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ whyUsData.feat1Text }}</p>
            </div>

            <!-- Card 2 -->
            <div class="card-modern p-8 group border-l-4 border-blue-400" v-scroll-animate>
              <div class="mb-6 icon-wrapper bg-gradient-to-br from-blue-100 to-blue-50 group-hover:from-blue-200 group-hover:to-blue-100">
                <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ whyUsData.feat2Title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ whyUsData.feat2Text }}</p>
            </div>

            <!-- Card 3 -->
            <div class="card-modern p-8 group border-l-4 border-green-400" v-scroll-animate>
              <div class="mb-6 icon-wrapper bg-gradient-to-br from-green-100 to-green-50 group-hover:from-green-200 group-hover:to-green-100">
                <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ whyUsData.feat3Title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ whyUsData.feat3Text }}</p>
            </div>

            <!-- Card 4 -->
            <div class="card-modern p-8 group border-l-4 border-purple-400" v-scroll-animate>
              <div class="mb-6 icon-wrapper bg-gradient-to-br from-purple-100 to-purple-50 group-hover:from-purple-200 group-hover:to-purple-100">
                <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H19a2 2 0 002-2v-2a2 2 0 00-2-2h-2.5a2 2 0 01-1-3.8A6 6 0 006 9" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ whyUsData.feat4Title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ whyUsData.feat4Text }}</p>
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

    <!-- Section Portes Ouvertes 2026 -->
    <section class="section-spacing bg-gradient-to-br from-yellow-50 via-white to-yellow-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Contenu Texte -->
          <div class="animate-fade-in-up order-2 lg:order-1">
<div class="inline-block mb-4 px-4 py-2 bg-yellow-100 rounded-full mb-6">
            <span class="text-sm font-bold text-yellow-700 uppercase tracking-wide">📅 {{ portesOuvertesData.dateBadge }}</span>
          </div>
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8" style="font-family: 'Montserrat', sans-serif; letter-spacing: -1.5px;">
              Portes Ouvertes<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">CREFER 2026</span>
            </h2>
            
            <p class="text-lg text-gray-700 mb-8 leading-relaxed">
              Vous souhaitez maîtriser les métiers d'avenir à CREFER ? Profitez de la deuxième fixée au <span class="font-bold text-yellow-600">13 avril 2026</span>.
            </p>

            <!-- Filières Section -->
            <div class="mb-10">
              <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg class="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0010 2v5H4a2 2 0 00-2 2v5a2 2 0 002 2h5v5a1 1 0 001.823.567l2.94-7.86a1 1 0 00-.99-1.373H13V2a1 1 0 00-1.7-.954l-1 1.318z" />
                </svg>
                Filières disponibles
              </h3>
              
              <div class="space-y-5">
                <!-- SPV -->
                <div class="bg-white/70 backdrop-blur rounded-xl p-6 border-l-4 border-yellow-400 hover:shadow-lg transition-all">
                  <h4 class="font-bold text-lg text-gray-900 mb-3">{{ portesOuvertesData.spvTitle }}</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in spvTagsArray" :key="tag" class="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">{{ tag }}</span>
                  </div>
                </div>

                <!-- SST -->
                <div class="bg-white/70 backdrop-blur rounded-xl p-6 border-l-4 border-yellow-600 hover:shadow-lg transition-all">
                  <h4 class="font-bold text-lg text-gray-900 mb-3">{{ portesOuvertesData.sstTitle }}</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in sstTagsArray" :key="tag" class="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">{{ tag }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Infos Pratiques -->
            <div class="space-y-4 mb-8">
              <div class="flex gap-4 items-start">
                <svg class="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p class="font-bold text-gray-900">Lieu</p>
                  <p class="text-gray-700">{{ portesOuvertesData.location }}</p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <svg class="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00-.293.707l-.707.707a1 1 0 101.414 1.414L9 9.414V6z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p class="font-bold text-gray-900">Horaires</p>
                  <p class="text-gray-700">{{ portesOuvertesData.hours }}</p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <svg class="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <div>
                  <p class="font-bold text-gray-900">Durée</p>
                  <p class="text-gray-700">{{ portesOuvertesData.duration }}</p>
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <router-link to="/admissions" class="btn-modern inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-full font-bold text-lg hover:shadow-xl transition-all">
              S'inscrire maintenant
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
          </div>

          <!-- Image Gallery -->
          <div class="grid grid-cols-2 gap-4 animate-fade-in-up order-1 lg:order-2">
            <!-- Image Principale A4 -->
            <div class="col-span-2 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer" @click="openPortesOuvertesLightbox(portesOuvertesImagePrin)">
              <img :src="portesOuvertesImagePrin" alt="Portes ouvertes CREFER" class="w-full object-cover hover:scale-110 transition-transform duration-500" style="aspect-ratio: 1 / 1.414;" />
            </div>
            <!-- Images Secondaires -->
            <!-- <div class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer" @click="openPortesOuvertesLightbox(portesOuvertesImage01)">
              <img :src="portesOuvertesImage01" alt="Formation SPV" class="w-full h-40 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer" @click="openPortesOuvertesLightbox(portesOuvertesImage02)">
              <img :src="portesOuvertesImage02" alt="Formation SST" class="w-full h-40 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div class="col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer" @click="openPortesOuvertesLightbox(portesOuvertesImage03)">
              <img :src="portesOuvertesImage03" alt="Campus CREFER" class="w-full h-40 object-cover hover:scale-110 transition-transform duration-500" />
            </div> -->
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
              <h3 class="text-lg font-bold text-gray-900">{{ testimonialsData.t1.name }}</h3>
              <p class="text-sm text-yellow-600 font-semibold">{{ testimonialsData.t1.role }}</p>
              </div>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
              "{{ testimonialsData.t1.quote }}"
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
              <h3 class="text-lg font-bold text-gray-900">{{ testimonialsData.t2.name }}</h3>
              <p class="text-sm text-blue-600 font-semibold">{{ testimonialsData.t2.role }}</p>
              </div>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
              "{{ testimonialsData.t2.quote }}"
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
              <h3 class="text-lg font-bold text-gray-900">{{ testimonialsData.t3.name }}</h3>
              <p class="text-sm text-green-600 font-semibold">{{ testimonialsData.t3.role }}</p>
              </div>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
              "{{ testimonialsData.t3.quote }}"
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

    <!-- Lightbox Modal pour les Portes Ouvertes -->
    <transition name="fade">
      <div v-if="portesOuvertesLightboxOpen" class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" @click="closePortesOuvertesLightbox">
        <!-- Close Button -->
        <button
          @click="closePortesOuvertesLightbox"
          class="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors z-60"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Image Container -->
        <div class="relative max-w-4xl w-full h-auto flex flex-col justify-center items-center" @click.stop>
          <img :src="portesOuvertesLightboxImage" alt="Portes Ouvertes" class="w-full h-auto rounded-lg object-contain" />
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
              {{ joinCtaData.heading }}
            </h2>
            <p class="text-xl text-gray-800 mb-10 leading-relaxed font-light drop-shadow-md">
              {{ joinCtaData.description }}
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
                <p class="text-black/80 text-sm font-light mb-1">{{ joinCtaData.successLabel }}</p>
                <p class="text-black/80 text-3xl font-bold">{{ joinCtaData.successRate }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section-spacing bg-gradient-to-b from-white via-slate-50 to-gray-100 relative overflow-hidden" v-scroll-animate>
      <!-- Decorative elements -->
      <div class="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Header -->
        <div class="text-center mb-20 animate-fade-in-up">
          <div class="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full border border-purple-200">
            <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="text-sm font-bold text-purple-600 uppercase tracking-wide">À propos de CREFER</span>
          </div>
          <h2 class="text-5xl lg:text-7xl font-bold text-gray-900 mb-6" style="font-family: 'Montserrat', sans-serif; letter-spacing: -1.5px;">
            {{ aboutSectionData.heading }}
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            {{ aboutSectionData.description }}
          </p>
        </div>
        
        <!-- Features Grid -->
        <div class="grid md:grid-cols-3 gap-8 mb-20">
          <!-- Card 1 - Formation Qualifiante -->
          <div class="group relative animate-fade-in-up hover:-translate-y-2 transition-all duration-500" style="animation-delay: 0.1s;">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative card-modern rounded-3xl p-10 border border-blue-100/50 bg-gradient-to-br from-white to-blue-50/30 hover:shadow-2xl transition-all duration-500 h-full">
              <!-- Icon -->
              <div class="w-20 h-20 mb-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-6.002-4.5-10.747-10-10.747z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif;">{{ aboutSectionData.feat1Title }}</h3>
              <p class="text-gray-700 leading-relaxed mb-6">
                {{ aboutSectionData.feat1Text }}
              </p>
              <div class="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all duration-300">
                <span>En savoir plus</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Card 2 - Expertise Reconnue -->
          <div class="group relative animate-fade-in-up hover:-translate-y-2 transition-all duration-500" style="animation-delay: 0.2s;">
            <div class="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative card-modern rounded-3xl p-10 border border-yellow-100/50 bg-gradient-to-br from-white to-yellow-50/30 hover:shadow-2xl transition-all duration-500 h-full">
              <!-- Icon -->
              <div class="w-20 h-20 mb-8 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl flex items-center justify-center drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif;">{{ aboutSectionData.feat2Title }}</h3>
              <p class="text-gray-700 leading-relaxed mb-6">
                {{ aboutSectionData.feat2Text }}
              </p>
              <div class="flex items-center gap-2 text-yellow-600 font-semibold group-hover:gap-4 transition-all duration-300">
                <span>En savoir plus</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Card 3 - Placement Assuré -->
          <div class="group relative animate-fade-in-up hover:-translate-y-2 transition-all duration-500" style="animation-delay: 0.3s;">
            <div class="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative card-modern rounded-3xl p-10 border border-green-100/50 bg-gradient-to-br from-white to-green-50/30 hover:shadow-2xl transition-all duration-500 h-full">
              <!-- Icon -->
              <div class="w-20 h-20 mb-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif;">{{ aboutSectionData.feat3Title }}</h3>
              <p class="text-gray-700 leading-relaxed mb-6">
                {{ aboutSectionData.feat3Text }}
              </p>
              <div class="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-4 transition-all duration-300">
                <span>En savoir plus</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Statistics Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Stat 1 -->
          <div class="group relative animate-fade-in-up" style="animation-delay: 0.4s;">
            <div class="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative card-modern rounded-2xl p-8 text-center bg-gradient-to-br from-white to-yellow-50/40 border border-yellow-100/50 hover:shadow-xl transition-all duration-500 group-hover:scale-105">
              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 mx-auto mb-4">
                <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 7H7v6h6V7z" />
                </svg>
              </div>
              <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 mb-3">
                +1500
              </div>
              <p class="text-gray-700 font-semibold">Jeunes Formés</p>
            </div>
          </div>

          <!-- Stat 2 -->
          <div class="group relative animate-fade-in-up" style="animation-delay: 0.5s;">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative card-modern rounded-2xl p-8 text-center bg-gradient-to-br from-white to-blue-50/40 border border-blue-100/50 hover:shadow-xl transition-all duration-500 group-hover:scale-105">
              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mx-auto mb-4">
                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v2h8v-2zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-2a4 4 0 00-4-4h-2.5a4 4 0 00-4 4v2h10.5z" />
                </svg>
              </div>
              <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 mb-3">
                +1200
              </div>
              <p class="text-gray-700 font-semibold">En Emploi</p>
            </div>
          </div>

          <!-- Stat 3 -->
          <div class="group relative animate-fade-in-up" style="animation-delay: 0.6s;">
            <div class="absolute inset-0 bg-gradient-to-r from-green-500/30 to-teal-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative card-modern rounded-2xl p-8 text-center bg-gradient-to-br from-white to-green-50/40 border border-green-100/50 hover:shadow-xl transition-all duration-500 group-hover:scale-105">
              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mx-auto mb-4">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM9 6a3 3 0 11-6 0 3 3 0 016 0zM9 12a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
              </div>
              <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 mb-3">
                50
              </div>
              <p class="text-gray-700 font-semibold">Entreprises Partenaires</p>
            </div>
          </div>

          <!-- Stat 4 -->
          <div class="group relative animate-fade-in-up" style="animation-delay: 0.7s;">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-indigo-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative card-modern rounded-2xl p-8 text-center bg-gradient-to-br from-white to-purple-50/40 border border-purple-100/50 hover:shadow-xl transition-all duration-500 group-hover:scale-105">
              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mx-auto mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V6.5m-10-5v5m5-5v5m-5 0h5" />
                </svg>
              </div>
              <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 mb-3">
                6
              </div>
              <p class="text-gray-700 font-semibold">Programmes Certifiants</p>
            </div>
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
          {{ ctaFinalData.heading }}
        </h2>
        <p class="text-xl text-gray-800 mb-12 font-light drop-shadow-md">
          {{ ctaFinalData.description }}
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
            :href="ctaFinalData.phone"
            class="px-10 py-4 border-2 border-gray-900 text-gray-900 font-bold text-lg rounded-2xl hover:bg-gray-900/10 transition-all inline-flex items-center gap-3 bg-white/70 drop-shadow-md"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.26 1.043 1.1 2.863 2.513 4.276s3.233 2.253 4.276 2.513l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57c-8.835 0-16-7.165-16-16V3z" />
            </svg>
            {{ ctaFinalData.phoneLinkText }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useArticles } from '../services/articlesService'
import { useSEO } from '@/composables/useSEO'
import { usePageContent } from '../composables/usePageContent'

export default {
  name: 'Home',
  setup() {
    const seo = useSEO()

    // Load articles from service
    const { articles } = useArticles()

    // Get first 3 articles for the Actualités section
    const newsArticles = computed(() => articles.value.slice(0, 3))

    // Dynamic site content from Firebase
    const { get: getContent, loading: contentLoading } = usePageContent('home')

    const heroData = computed(() => ({
      titleMain: getContent('hero', 'titleMain', "L'ÉCOLE RÉGIONALE AXÉE SUR"),
      titleHighlight: getContent('hero', 'titleHighlight', "LES MÉTIERS DE L'ÉNERGIE"),
      subtitle: getContent('hero', 'subtitle', "Rejoignez la révolution des énergies renouvelables et devenez un leader reconnu."),
      badge1: getContent('hero', 'badge1', 'Accrédité'),
      badge2: getContent('hero', 'badge2', 'Experts'),
      badge3: getContent('hero', 'badge3', 'Modernes'),
      cta1: getContent('hero', 'cta1', 'Admission'),
      cta2: getContent('hero', 'cta2', 'Découvrir nos formations'),
    }))

    const infoBoxData = computed(() => ({
      title: getContent('info_box', 'title', 'FORMATIONS MODULAIRES'),
      startDate: getContent('info_box', 'startDate', '13 AVRIL 2026'),
      duration: getContent('info_box', 'duration', '6 à 12 mois'),
      recognition: getContent('info_box', 'recognition', 'Meilleur acteur de formation en énergie renouvelable'),
    }))

    const storyData = computed(() => ({
      title: getContent('story', 'title', "Une Vision pour l'Afrique"),
      quote: getContent('story', 'quote', "Depuis 2019, formant les experts énergétiques africains."),
      text1: getContent('story', 'text1', "CREFER est née en 2019 d'une vision claire, former des jeunes Africains aux métiers des énergies renouvelables. Fondée par EGENT TOGO, leader en solutions solaires, notre académie répond au besoin urgent de techniciens qualifiés."),
      text2: getContent('story', 'text2', "Le manque de spécialistes en photovoltaïque a motivé notre création. Aujourd'hui, nous sommes la référence régionale, formant des leaders de l'énergie solaire et de l'électricité."),
    }))

    const programsData = computed(() => ({
      p1: {
        title: getContent('programs', 'p1Title', "Électricité d'Équipement"),
        desc: getContent('programs', 'p1Desc', ''),
        duration: getContent('programs', 'p1Duration', '3 ans'),
        diploma: getContent('programs', 'p1Diploma', "Diplôme d'État"),
        badge: getContent('programs', 'p1Badge', 'Niveau 1'),
        feat1: getContent('programs', 'p1Feat1', 'Formations pratiques intensives'),
        feat2: getContent('programs', 'p1Feat2', 'Matériel moderne et équipé'),
        feat3: getContent('programs', 'p1Feat3', 'Stages professionnels inclus'),
      },
      p2: {
        title: getContent('programs', 'p2Title', 'BT Électrotechnique'),
        desc: getContent('programs', 'p2Desc', ''),
        duration: getContent('programs', 'p2Duration', '2-3 ans'),
        diploma: getContent('programs', 'p2Diploma', "Diplôme d'État"),
        badge: getContent('programs', 'p2Badge', 'Niveau 2'),
        feat1: getContent('programs', 'p2Feat1', 'Enseignement avancé'),
        feat2: getContent('programs', 'p2Feat2', "Projets de fin d'études"),
        feat3: getContent('programs', 'p2Feat3', 'Reconnaissance nationale'),
      },
      p3: {
        title: getContent('programs', 'p3Title', 'Formation Modulaire'),
        desc: getContent('programs', 'p3Desc', ''),
        duration: getContent('programs', 'p3Duration', '6-12 mois'),
        diploma: getContent('programs', 'p3Diploma', 'Certificat & Attestation'),
        badge: getContent('programs', 'p3Badge', 'Flexible'),
        feat1: getContent('programs', 'p3Feat1', 'Horaires flexibles'),
        feat2: getContent('programs', 'p3Feat2', 'Modules personnalisés'),
        feat3: getContent('programs', 'p3Feat3', 'Certifications reconnues'),
      },
    }))

    const whyUsData = computed(() => ({
      heading: getContent('why_us', 'heading', 'Choisir le Leader de la Formation'),
      description: getContent('why_us', 'description', "CREFER se consacre à offrir une formation de premier ordre en énergie solaire et en électricité."),
      feat1Title: getContent('why_us', 'feat1Title', 'Programme Innovant'),
      feat1Text: getContent('why_us', 'feat1Text', "Constamment mis à jour pour refléter les dernières avancées technologiques du secteur énergétique."),
      feat2Title: getContent('why_us', 'feat2Title', 'Experts Reconnus'),
      feat2Text: getContent('why_us', 'feat2Text', "Apprenez des meilleurs spécialistes du secteur, passionnés par l'excellence éducative."),
      feat3Title: getContent('why_us', 'feat3Title', 'Recherche Active'),
      feat3Text: getContent('why_us', 'feat3Text', "Participez à des projets innovants répondant à des défis énergétiques concrets."),
      feat4Title: getContent('why_us', 'feat4Title', 'Impact Global'),
      feat4Text: getContent('why_us', 'feat4Text', "Contribuez à la transition énergétique mondiale et façonnez un avenir durable."),
    }))

    const portesOuvertesData = computed(() => ({
      dateBadge: getContent('portes_ouvertes', 'dateBadge', '13 Avril 2026'),
      location: getContent('portes_ouvertes', 'location', "L'annexe, situé au bord des pavés de Totsi non loin de l'agence Yas"),
      hours: getContent('portes_ouvertes', 'hours', 'Cours du jour et du soir disponibles'),
      duration: getContent('portes_ouvertes', 'duration', '06 ou 12 mois'),
      spvTitle: getContent('portes_ouvertes', 'spvTitle', 'SPV (Système Photovoltaïque)'),
      spvTags: getContent('portes_ouvertes', 'spvTags', 'Électricité,Énergie solaire,Biogaz,Plomberie*,Froid climatisation*'),
      sstTitle: getContent('portes_ouvertes', 'sstTitle', 'SST (Système de Sécurité & Télécom)'),
      sstTags: getContent('portes_ouvertes', 'sstTags', 'Réseau,Alarmes,Caméras surveillance,Antennes paraboliques'),
    }))
    const spvTagsArray = computed(() => String(portesOuvertesData.value.spvTags || '').split(',').map(t => t.trim()).filter(Boolean))
    const sstTagsArray = computed(() => String(portesOuvertesData.value.sstTags || '').split(',').map(t => t.trim()).filter(Boolean))

    const testimonialsData = computed(() => ({
      t1: { name: getContent('testimonials', 't1Name', "MELA D'Kigma Solmba"), role: getContent('testimonials', 't1Role', 'Alumni promotion 12'), quote: getContent('testimonials', 't1Quote', ''), photo: getContent('testimonials', 't1Photo', '') },
      t2: { name: getContent('testimonials', 't2Name', 'YAO Amivi Emefa'), role: getContent('testimonials', 't2Role', 'Alumni promotion 8'), quote: getContent('testimonials', 't2Quote', ''), photo: getContent('testimonials', 't2Photo', '') },
      t3: { name: getContent('testimonials', 't3Name', 'SOW Kerfala'), role: getContent('testimonials', 't3Role', 'Étudiant Promotion 13'), quote: getContent('testimonials', 't3Quote', ''), photo: getContent('testimonials', 't3Photo', '') },
    }))

    const joinCtaData = computed(() => ({
      heading: getContent('join_cta', 'heading', 'Prêt à nous Rejoindre ?'),
      description: getContent('join_cta', 'description', 'Transforme ta carrière avec CREFER. Rejoins une communauté de plus de 5000 experts formés et propulse ton avenir dans les énergies renouvelables.'),
      successRate: getContent('join_cta', 'successRate', '95%'),
      successLabel: getContent('join_cta', 'successLabel', 'Taux de réussite'),
    }))

    const aboutSectionData = computed(() => ({
      heading: getContent('about_section', 'heading', 'Leader en Formation Énergies Durables'),
      description: getContent('about_section', 'description', "Depuis bientôt 10 ans, CREFER forme les experts en énergies renouvelables qui façonnent l'avenir de l'Afrique."),
      feat1Title: getContent('about_section', 'feat1Title', 'Formation Qualifiante'),
      feat1Text: getContent('about_section', 'feat1Text', "Programmes CAP, BT et modules spécialisés reconnus par l'État et les professionnels du secteur."),
      feat2Title: getContent('about_section', 'feat2Title', 'Expertise Reconnue'),
      feat2Text: getContent('about_section', 'feat2Text', "Formateurs experts du secteur avec une expérience combinée de plus de 200 ans dans l'électricité et les énergies renouvelables."),
      feat3Title: getContent('about_section', 'feat3Title', 'Placement Assuré'),
      feat3Text: getContent('about_section', 'feat3Text', "95% de nos diplômés trouvent un emploi dans les 3 mois suivant leur formation grâce à notre réseau de partenaires."),
    }))

    const ctaFinalData = computed(() => ({
      heading: getContent('cta_final', 'heading', "Commence Ton Voyage Vers l'excellence"),
      description: getContent('cta_final', 'description', "Les places pour les sessions 2025-2026 sont limitées. Inscris-toi maintenant et rejoins la révolution des énergies durables."),
      phone: getContent('cta_final', 'phone', 'tel:+22822XXXXXX'),
      phoneLinkText: getContent('cta_final', 'phoneLinkText', 'Appelle-Nous'),
    }))

    onMounted(() => {
      // Configurer le SEO
      seo.setSEO({
        title: 'CREFER - Académie d\'Énergies Renouvelables et Électricité au Togo',
        description: 'CREFER est la première académie régionale axée sur les métiers d\'énergies renouvelables. Formations CAP, BT et modulaires en électricité et énergie solaire à Lomé-Togo.',
        keywords: 'formation électricité, énergie solaire, CAP, BT, école technique, Togo, énergies renouvelables, CREFER',
        canonical: 'https://crefer.tech'
      })
      
      // Lancer le diaporama - change l'image toutes les 5 secondes
      const slideshowInterval = setInterval(() => {
        currentSlideIndex.value = (currentSlideIndex.value + 1) % slideshowImages.value.length
      }, 5000)
      
      // Sauvegarder l'intervalle pour le nettoyer plus tard
      window.slideshowInterval = slideshowInterval
    })

    // Video URL — Firebase ou fallback local
    const _localVideoUrl = new URL('../assets/videos/video1.mp4', import.meta.url).href
    const videoUrl = computed(() => getContent('hero_media', 'videoUrl', '') || _localVideoUrl)
    const isYoutubeUrl = computed(() => {
      const url = videoUrl.value
      return url.includes('youtube.com') || url.includes('youtu.be')
    })
    const youtubeEmbedUrl = computed(() => {
      const url = videoUrl.value
      const shortMatch = url.match(/youtu\.be\/([^?&]+)/)
      if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`
      const longMatch = url.match(/[?&]v=([^&]+)/)
      if (longMatch) return `https://www.youtube.com/embed/${longMatch[1]}`
      if (url.includes('/embed/')) return url
      return ''
    })
    // Image section Rejoindre — Firebase ou fallback local
    const _localJoinUsImage = new URL('../assets/images/_DSC4676-1200.jpg', import.meta.url).href
    const joinUsImage = computed(() => getContent('story_media', 'joinUsImageUrl', '') || _localJoinUsImage)
    
    // Diaporama — Firebase ou fallback local
    const _localSlides = [
      new URL('../assets/images/_DSC4881-1200.webp', import.meta.url).href,
      new URL('../assets/images/hero1.jpg', import.meta.url).href,
      new URL('../assets/images/exam4article.jpg', import.meta.url).href,
    ]
    const currentSlideIndex = ref(0)
    const slideshowImages = computed(() => {
      const s1 = getContent('hero_media', 'slideshowImage1', '')
      const s2 = getContent('hero_media', 'slideshowImage2', '')
      const s3 = getContent('hero_media', 'slideshowImage3', '')
      const fb = [s1, s2, s3].filter(Boolean)
      return fb.length === 3 ? fb : _localSlides
    })
    const backgroundImageUrl = computed(() => slideshowImages.value[currentSlideIndex.value])
    const _localStoryImage = new URL('../assets/images/histoire.jpg', import.meta.url).href
    const storyImageUrl = computed(() => getContent('story_media', 'storyImageUrl', '') || _localStoryImage)
    // Images locales programmes
    const capImageUrl = ref(new URL('../assets/images/_DSC4674.jpg', import.meta.url).href)
    const efficaciteImageUrl = ref(new URL('../assets/images/_DSC4676.jpg', import.meta.url).href)
    const solaireImageUrl = ref(new URL('../assets/images/_DSC4677.jpg', import.meta.url).href)
    // Logos partenaires — Firebase ou fallback local
    const _localLogos = [
      new URL('../assets/images/egent-logo.0384ff91.jpg', import.meta.url).href,
      new URL('../assets/images/part2.e6602420.png', import.meta.url).href,
      new URL('../assets/images/part3.fe0f87cf.jpg', import.meta.url).href,
      new URL('../assets/images/télécharger.jpg', import.meta.url).href,
    ]
    const partnerLogo1 = computed(() => getContent('partners', 'logo1', '') || _localLogos[0])
    const partnerLogo2 = computed(() => getContent('partners', 'logo2', '') || _localLogos[1])
    const partnerLogo3 = computed(() => getContent('partners', 'logo3', '') || _localLogos[2])
    const partnerLogo4 = computed(() => getContent('partners', 'logo4', '') || _localLogos[3])
    
    // Portes Ouvertes images — Firebase ou fallback local
    const _localPortesMain = new URL('../assets/images/imageprin01.jpeg', import.meta.url).href
    const portesOuvertesImagePrin = computed(() => getContent('portes_ouvertes', 'mainImage', '') || _localPortesMain)
    const portesOuvertesImage01 = ref(new URL('../assets/images/image01.jpeg', import.meta.url).href)
    const portesOuvertesImage02 = ref(new URL('../assets/images/image02.jpeg', import.meta.url).href)
    const portesOuvertesImage03 = ref(new URL('../assets/images/image03.jpeg', import.meta.url).href)
    
    // Compteurs animés (cibles dynamiques depuis Firebase)
    const formesCount = ref(0)
    const emploiCount = ref(0)
    const partnersCount = ref(0)
    const certifiesCount = ref(0)

    const animateCounters = (targets) => {
      formesCount.value = 0
      emploiCount.value = 0
      partnersCount.value = 0
      certifiesCount.value = 0
      const startTime = Date.now()
      const duration = 5000
      const tick = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        formesCount.value = Math.floor(targets.formes * progress)
        emploiCount.value = Math.floor(targets.emploi * progress)
        partnersCount.value = Math.floor(targets.partners * progress)
        certifiesCount.value = Math.floor(targets.certifies * progress)
        if (progress < 1) {
          requestAnimationFrame(tick)
        } else {
          formesCount.value = targets.formes
          emploiCount.value = targets.emploi
          partnersCount.value = targets.partners
          certifiesCount.value = targets.certifies
        }
      }
      requestAnimationFrame(tick)
    }

    // When Firebase content loads, animate to actual values
    watch(contentLoading, (isLoading) => {
      if (!isLoading) {
        animateCounters({
          formes: Number(getContent('stats', 'formes', 1500)),
          emploi: Number(getContent('stats', 'emploi', 1200)),
          partners: Number(getContent('stats', 'partners', 50)),
          certifies: Number(getContent('stats', 'certifies', 6)),
        })
      }
    })
    
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

    // Lightbox pour la section Portes Ouvertes
    const portesOuvertesLightboxOpen = ref(false)
    const portesOuvertesLightboxImage = ref('')

    const openPortesOuvertesLightbox = (imageUrl) => {
      portesOuvertesLightboxImage.value = imageUrl
      portesOuvertesLightboxOpen.value = true
      document.body.style.overflow = 'hidden'
    }

    const closePortesOuvertesLightbox = () => {
      portesOuvertesLightboxOpen.value = false
      document.body.style.overflow = 'auto'
    }
    
    const handleKeydown = (e) => {
      if (e.key === 'Escape' && lightboxOpen.value) {
        closeTestimonialLightbox()
      }
      if (e.key === 'Escape' && portesOuvertesLightboxOpen.value) {
        closePortesOuvertesLightbox()
      }
    }
    
    onMounted(() => {
      window.addEventListener('keydown', handleKeydown)
    })

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeydown)
      if (window.slideshowInterval) {
        clearInterval(window.slideshowInterval)
      }
      closeTestimonialLightbox()
    })
    
    // Images pour les cartes de témoignage
    const _localT1 = new URL('../assets/images/temois1.jpg', import.meta.url).href
    const _localT2 = new URL('../assets/images/temoins02.jpg', import.meta.url).href
    const _localT3 = new URL('../assets/images/temoins3.jpg', import.meta.url).href
    const testimonial1Image = computed(() => getContent('testimonials', 't1Photo', '') || _localT1)
    const testimonial2Image = computed(() => getContent('testimonials', 't2Photo', '') || _localT2)
    const testimonial3Image = computed(() => getContent('testimonials', 't3Photo', '') || _localT3)
    
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
      heroData,
      infoBoxData,
      storyData,
      programsData,
      whyUsData,
      portesOuvertesData,
      spvTagsArray,
      sstTagsArray,
      testimonialsData,
      joinCtaData,
      aboutSectionData,
      ctaFinalData,
      articles,
      newsArticles,
      getArticleImage,
      videoUrl,
      isYoutubeUrl,
      youtubeEmbedUrl,
      backgroundImageUrl,
      slideshowImages,
      currentSlideIndex,
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
      closeTestimonialLightbox,
      portesOuvertesLightboxOpen,
      portesOuvertesLightboxImage,
      openPortesOuvertesLightbox,
      closePortesOuvertesLightbox,
      portesOuvertesImagePrin,
      portesOuvertesImage01,
      portesOuvertesImage02,
      portesOuvertesImage03
    }
  }
}
</script>
