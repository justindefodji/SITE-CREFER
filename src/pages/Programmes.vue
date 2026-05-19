<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section
      class="relative min-h-[500px] text-white flex items-center overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    >
      <!-- Dark overlay for contrast -->
      <div class="absolute inset-0 bg-black/55 z-10"></div>
      <!-- Bottom gradient -->
      <div class="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 to-transparent z-15"></div>

      <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-20 py-20">
        <div>
          <div class="mb-6">
            <div class="text-yellow-300 text-sm font-semibold tracking-widest uppercase mb-4" style="font-family: 'Montserrat', sans-serif;">{{ heroData.badge }}</div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">{{ heroData.title }}</h1>
            <p class="text-lg md:text-xl text-blue-100 max-w-2xl">
              {{ heroData.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white scroll-reveal">
      <div class="max-w-7xl mx-auto">
        <div class="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-yellow-400">
          <h2 class="text-2xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif;">{{ introData.heading }}</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            {{ introData.text }}
          </p>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-cyan-50 scroll-reveal">
      <div class="max-w-7xl mx-auto">
        <!-- CAP Électricité Section -->
        <div class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div class="section-title">
              <h2 class="text-3xl font-bold text-gray-900" style="font-family: 'Montserrat', sans-serif;">{{ capData.heading }}</h2>
              <p class="text-gray-600">{{ capData.subtitle }}</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <!-- Hero Image -->
            <div class="rounded-xl overflow-hidden shadow-lg h-96">
              <img 
                :src="capImage"
                alt="CAP Électricité"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Description -->
            <div class="flex flex-col justify-center space-y-4">
              <div>
                <h4 class="font-bold text-gray-900 mb-2">Niveau de Qualification</h4>
                <p class="text-gray-700 text-base leading-relaxed">{{ capData.qualifText }}</p>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-2">Durée de la Formation</h4>
                <p class="text-gray-700 text-base leading-relaxed">{{ capData.dureeText }}</p>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-2">Objectifs</h4>
                <p class="text-gray-700 text-base leading-relaxed">{{ capData.objectifsText }}</p>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-2">Débouchés Professionnels</h4>
                <p class="text-gray-700 text-base leading-relaxed">{{ capData.debouchesText }}</p>
              </div>
              <div class="space-y-3">
                <div class="flex items-start">
                  <span class="text-yellow-400 font-bold mr-3 text-xl">✓</span>
                  <div>
                    <p class="font-bold text-gray-900">{{ capData.entreeLabel }}</p>
                    <p class="text-gray-600 text-sm">{{ capData.entreeSub }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-yellow-400 font-bold mr-3 text-xl">✓</span>
                  <div>
                    <p class="font-bold text-gray-900">{{ capData.dureeLabel }}</p>
                    <p class="text-gray-600 text-sm">{{ capData.dureeSub }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Program Details -->
          <div class="grid md:grid-cols-4 gap-6">
            <!-- Théorie -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Théorie</h3>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-blue-500">→</span> Électricité générale
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-500">→</span> Installation bâtiment
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-500">→</span> Normes de sécurité
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-500">→</span> Dépannage industriel
                </li>
              </ul>
            </div>

            <!-- Travaux Pratiques -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 4l6 6v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h8z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Travaux Pratiques</h3>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-purple-500">→</span> Installations réelles
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-purple-500">→</span> Équipements modernes
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-purple-500">→</span> Soudure et câblage
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-purple-500">→</span> Mise en situation
                </li>
              </ul>
            </div>

            <!-- Stages en Entreprise -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Stages en Entreprise</h3>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-green-500">→</span> Expérience réelle
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">→</span> Partenaires qualifiés
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">→</span> Encadrement professionnel
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">→</span> Réseautage secteur
                </li>
              </ul>
            </div>

            <!-- Accompagnement -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Accompagnement</h3>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-yellow-500">→</span> Leadership
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-yellow-500">→</span> Entrepreneuriat
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-yellow-500">→</span> Projets personnels
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-yellow-500">→</span> Insertion pro
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- BT Électrotechnique Section -->
        <div class="mb-16">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-bold text-gray-900" style="font-family: 'Montserrat', sans-serif;">{{ btData.heading }}</h2>
              <p class="text-gray-600">{{ btData.subtitle }}</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <!-- Hero Image -->
            <div class="rounded-xl overflow-hidden shadow-lg h-96">
              <img 
                :src="btHeroImage"
                alt="BT Électrotechnique"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Description -->
            <div class="flex flex-col justify-center space-y-4">
              <div>
                <h4 class="font-bold text-gray-900 mb-2">Niveau de Qualification</h4>
                <p class="text-gray-700 text-base leading-relaxed">{{ btData.qualifText }}</p>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-2">Durée de la Formation</h4>
                <p class="text-gray-700 text-base leading-relaxed">{{ btData.dureeText }}</p>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-2">Objectifs</h4>
                <p class="text-gray-700 text-base leading-relaxed">{{ btData.objectifsText }}</p>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-2">Débouchés Professionnels</h4>
                <p class="text-gray-700 text-base leading-relaxed">{{ btData.debouchesText }}</p>
              </div>
              <div class="space-y-3">
                <div class="flex items-start">
                  <span class="text-yellow-400 font-bold mr-3 text-xl">✓</span>
                  <div>
                    <p class="font-bold text-gray-900">{{ btData.entreeLabel }}</p>
                    <p class="text-gray-600 text-sm">{{ btData.entreeSub }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-yellow-400 font-bold mr-3 text-xl">✓</span>
                  <div>
                    <p class="font-bold text-gray-900">{{ btData.dureeLabel }}</p>
                    <p class="text-gray-600 text-sm">{{ btData.dureeSub }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Program Details -->
          <div class="grid md:grid-cols-4 gap-6">
            <!-- Théorie -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Théorie Avancée</h3>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-blue-500">→</span> Systèmes complexes
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-500">→</span> Automatisation
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-500">→</span> Gestion de projets
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-500">→</span> Innovation technique
                </li>
              </ul>
            </div>

            <!-- Travaux Pratiques -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 4l6 6v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h8z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Projets Pratiques</h3>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-purple-500">→</span> Projets intégrateurs
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-purple-500">→</span> Technologies avancées
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-purple-500">→</span> Prototypage
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-purple-500">→</span> Cas d'étude réels
                </li>
              </ul>
            </div>

            <!-- Stages en Entreprise -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Stages Qualifiants</h3>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-green-500">→</span> Entreprises de haut niveau
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">→</span> Responsabilités élevées
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">→</span> Mentorat expert
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">→</span> Opportunités d'emploi
                </li>
              </ul>
            </div>

            <!-- Accompagnement -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Entrepreneuriat+</h3>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-yellow-500">→</span> Leadership avancé
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-yellow-500">→</span> Business plan
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-yellow-500">→</span> Financement projets
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-yellow-500">→</span> Réseautage B2B
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Formations Modulaires Section -->
        <div>
          <div class="flex items-center gap-4 mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-bold text-gray-900" style="font-family: 'Montserrat', sans-serif;">{{ modulaireData.heading }}</h2>
              <p class="text-gray-600">{{ modulaireData.subtitle }}</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <!-- Hero Image -->
            <div class="rounded-xl overflow-hidden shadow-lg h-96">
              <img 
                :src="modulaireImage"
                alt="Formations Modulaires"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

                        <!-- Description -->
            <div class="flex flex-col justify-center space-y-4">
              <div>
                <h4 class="font-bold text-gray-900 mb-2">Vue d'ensemble</h4>
                <p class="text-gray-700 text-base leading-relaxed">{{ modulaireData.overviewText }}</p>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-2">Conditions d'Admissions</h4>
                <p class="text-gray-700 text-base leading-relaxed">{{ modulaireData.conditionsText }}</p>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-2">{{ modulaireData.niveau1Title }}</h4>
                <p class="text-gray-700 text-base leading-relaxed">{{ modulaireData.niveau1Label }}</p>
                <p class="text-gray-700 text-sm leading-relaxed mt-1">{{ modulaireData.niveau1Text }}</p>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-2">{{ modulaireData.niveau2Title }}</h4>
                <p class="text-gray-700 text-base leading-relaxed">{{ modulaireData.niveau2Label }}</p>
                <p class="text-gray-700 text-sm leading-relaxed mt-1">{{ modulaireData.niveau2Text }}</p>
              </div>
              <div class="space-y-3 pt-2">
                <div class="flex items-start">
                  <span class="text-yellow-400 font-bold mr-3 text-xl">✓</span>
                  
                  <div>
                    <p class="font-bold text-gray-900">{{ modulaireData.entreeLabel }}</p>
                    <p class="text-gray-600 text-sm">{{ modulaireData.entreeSub }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="text-yellow-400 font-bold mr-3 text-xl">✓</span>
                  <div>
                    <p class="font-bold text-gray-900">{{ modulaireData.dureeLabel }}</p>
                    <p class="text-gray-600 text-sm">{{ modulaireData.dureeSub }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Program Details -->
          <div class="grid md:grid-cols-4 gap-6 mb-12">
            <!-- Théorie -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Modules Théorie</h3>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-blue-500">→</span> SPV (6 modules)
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-500">→</span> SST (3 modules)
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-500">→</span> Courte durée
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-500">→</span> Certifications
                </li>
              </ul>
            </div>

            <!-- Travaux Pratiques -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 4l6 6v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h8z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">TP Modulaires</h3>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-purple-500">→</span> À la carte
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-purple-500">→</span> Courtes sessions
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-purple-500">→</span> Pauses possibles
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-purple-500">→</span> Reprises faciles
                </li>
              </ul>
            </div>

            <!-- Stages Optionnels -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Stages Optionnels</h3>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-green-500">→</span> Sur demande
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">→</span> Adaptés profils
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">→</span> Durée variable
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-500">→</span> Finançables
                </li>
              </ul>
            </div>

            <!-- Accompagnement -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
              <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Conseils Modulaires</h3>
              <ul class="space-y-2 text-gray-600 text-sm">
                <li class="flex items-center gap-2">
                  <span class="text-yellow-500">→</span> Conseils formation
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-yellow-500">→</span> Financement
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-yellow-500">→</span> Parcours perso
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-yellow-500">→</span> Suivi adapté
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6" style="font-family: 'Montserrat', sans-serif;">{{ ctaData.heading }}</h2>
        <p class="text-lg text-yellow-100 mb-8 max-w-2xl mx-auto">
          {{ ctaData.text }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/admissions"
            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-yellow-600 rounded-lg hover:shadow-lg transition-all font-bold transform hover:-translate-y-1 hover:scale-105"
          >
            {{ ctaData.btn1Text }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </router-link>
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-yellow-600 transition-all font-bold transform hover:-translate-y-1 hover:scale-105"
          >
            {{ ctaData.btn2Text }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, onBeforeUnmount } from 'vue'
import { useSEO } from '@/composables/useSEO'
import { usePageContent } from '@/composables/usePageContent'

const _localBg        = new URL('../assets/images/pratique-1200.jpg', import.meta.url).href
const _localCapImg    = new URL('../assets/images/théorie-1200.jpg', import.meta.url).href
const _localBtImg     = new URL('../assets/images/_DSC4864.jpg', import.meta.url).href
const _localModImg    = new URL('../assets/images/théorie-1200.jpg', import.meta.url).href

export default {
  name: 'Programmes',
  setup() {
    const seo = useSEO()
    const { get: getContent } = usePageContent('programmes')

    onMounted(() => {
      seo.setSEO({
        title: 'Tous nos Programmes de Formation - CREFER',
        description: 'Découvrez tous les programmes de formation CREFER : CAP Électricité, BT Électrotechnique et Formations Modulaires avec théorie, travaux pratiques, stages.',
        keywords: 'programmes formation, CAP, BT, formations modulaires, électricité, CREFER, école technique',
        canonical: 'https://crefer.tech/programmes'
      })
      handleScroll()
      window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) el.classList.add('revealed')
      })
    }

    // ── Hero ─────────────────────────────────────────────────────────────────
    const backgroundImageUrl = computed(() => getContent('hero', 'backgroundImage', '') || _localBg)
    const heroData = computed(() => ({
      badge:       getContent('hero', 'badge',       'Nos Formations'),
      title:       getContent('hero', 'title',       'NOS PROGRAMMES DE FORMATIONS'),
      description: getContent('hero', 'description', ''),
    }))

    // ── Intro ─────────────────────────────────────────────────────────────────
    const introData = computed(() => ({
      heading: getContent('intro', 'heading', 'Notre Approche Pédagogique'),
      text:    getContent('intro', 'text',    ''),
    }))

    // ── CAP ───────────────────────────────────────────────────────────────────
    const capImage = computed(() => getContent('cap', 'image', '') || _localCapImg)
    const capData = computed(() => ({
      heading:      getContent('cap', 'heading',      "CAP Électricité d'Équipement"),
      subtitle:     getContent('cap', 'subtitle',     'Formation complète de 3 ans'),
      qualifText:   getContent('cap', 'qualifText',   ''),
      dureeText:    getContent('cap', 'dureeText',    ''),
      objectifsText:getContent('cap', 'objectifsText',''),
      debouchesText:getContent('cap', 'debouchesText',''),
      entreeLabel:  getContent('cap', 'entreeLabel',  'Entrée : Minimun la classe de quatrième (4ème)'),
      entreeSub:    getContent('cap', 'entreeSub',    'Avec excellente motivation et connaissances scientifiques'),
      dureeLabel:   getContent('cap', 'dureeLabel',   'Durée : 3 ans'),
      dureeSub:     getContent('cap', 'dureeSub',     'Rentrée : 15 Septembre 2025'),
    }))

    // ── BT ────────────────────────────────────────────────────────────────────
    const btImage = computed(() => getContent('bt', 'image', '') || _localBtImg)
    const btData = computed(() => ({
      heading:      getContent('bt', 'heading',      'BT Électrotechnique'),
      subtitle:     getContent('bt', 'subtitle',     'Formation de technicien supérieur'),
      qualifText:   getContent('bt', 'qualifText',   ''),
      dureeText:    getContent('bt', 'dureeText',    ''),
      objectifsText:getContent('bt', 'objectifsText',''),
      debouchesText:getContent('bt', 'debouchesText',''),
      entreeLabel:  getContent('bt', 'entreeLabel',  "Entrée : BEPC ou un CAP en électricité d'équipement"),
      entreeSub:    getContent('bt', 'entreeSub',    'Avec excellente motivation et connaissances scientifiques'),
      dureeLabel:   getContent('bt', 'dureeLabel',   'Durée : 3 ans'),
      dureeSub:     getContent('bt', 'dureeSub',     'Rentrée : 15 Septembre 2025'),
    }))

    // ── Modulaire ─────────────────────────────────────────────────────────────
    const modulaireImage = computed(() => getContent('modulaire', 'image', '') || _localModImg)
    const modulaireData = computed(() => ({
      heading:       getContent('modulaire', 'heading',       'Formations Modulaires'),
      subtitle:      getContent('modulaire', 'subtitle',      '2 filières à la carte flexibles'),
      overviewText:  getContent('modulaire', 'overviewText',  ''),
      conditionsText:getContent('modulaire', 'conditionsText',''),
      niveau1Title:  getContent('modulaire', 'niveau1Title',  'Option Niveau 1 : 06 mois'),
      niveau1Label:  getContent('modulaire', 'niveau1Label',  "Électricité d'Équipement & Énergie Solaire"),
      niveau1Text:   getContent('modulaire', 'niveau1Text',   ''),
      niveau2Title:  getContent('modulaire', 'niveau2Title',  'Option Niveau 2 : 12 mois'),
      niveau2Label:  getContent('modulaire', 'niveau2Label',  "Électricité d'Équipement & Énergie Solaire"),
      niveau2Text:   getContent('modulaire', 'niveau2Text',   ''),
      entreeLabel:   getContent('modulaire', 'entreeLabel',   'Entrée : BEPC ou équivalent'),
      entreeSub:     getContent('modulaire', 'entreeSub',     'Flexible selon votre profil et vos objectifs'),
      dureeLabel:    getContent('modulaire', 'dureeLabel',    'Durée : 6 ou 12 mois'),
      dureeSub:      getContent('modulaire', 'dureeSub',      'Rentrée : 13 Avril 2026'),
    }))

    // ── CTA ───────────────────────────────────────────────────────────────────
    const ctaData = computed(() => ({
      heading:  getContent('cta', 'heading',  'Trouvez le programme qui vous convient'),
      text:     getContent('cta', 'text',     ''),
      btn1Text: getContent('cta', 'btn1Text', "S'inscrire"),
      btn2Text: getContent('cta', 'btn2Text', "Plus d'infos"),
    }))

    return {
      backgroundImageUrl,
      heroData, introData,
      capImage, capData,
      btImage, btData,
      modulaireImage, modulaireData,
      ctaData,
      handleScroll,
    }
  },
}
</script>

<style scoped>
.scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-400 {
  animation-delay: 0.4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(-10deg);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(251, 191, 36, 0);
  }
}

/* Styles avec animations */
.hero-title {
  animation: slideInDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hero-subtitle {
  animation: slideInDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
}

.section-title {
  animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.program-icon {
  animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.program-icon:hover {
  transform: scale(1.15) rotate(5deg);
}

.program-image {
  animation: zoomIn 0.8s ease-out;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.program-image:hover {
  transform: scale(1.1);
}

.description-text {
  animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
}

.detail-card {
  animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.detail-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.detail-card:nth-child(1) { animation-delay: 0s; }
.detail-card:nth-child(2) { animation-delay: 0.1s; }
.detail-card:nth-child(3) { animation-delay: 0.2s; }
.detail-card:nth-child(4) { animation-delay: 0.3s; }

.list-item {
  animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.list-item:nth-child(1) { animation-delay: 0.05s; }
.list-item:nth-child(2) { animation-delay: 0.1s; }
.list-item:nth-child(3) { animation-delay: 0.15s; }
.list-item:nth-child(4) { animation-delay: 0.2s; }

.cta-button {
  animation: pulse 2s infinite;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cta-button:hover {
  transform: translateY(-4px) scale(1.05);
  animation: none;
}

a, button, [role="button"] {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>
