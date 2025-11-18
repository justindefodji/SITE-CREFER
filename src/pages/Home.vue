<template>
  <div class="min-h-screen">
    <!-- Hero Section with configurable background image -->
    <section
      class="relative min-h-screen text-white flex items-center overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    >
      <div class="absolute inset-0 bg-black/55 z-10"></div>

      <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-0 relative z-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="text-white">
            <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
              FORMER AUJOURD'HUI<br />LES EXPERTS EN<br /><span class="text-orange-400">ÉNERGIE DE DEMAIN</span>
            </h1>

            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <router-link
                to="/admissions"
                class="px-8 py-4 bg-orange-400 text-blue-900 rounded-full hover:bg-orange-300 transition-colors font-bold text-lg text-center"
              >
                Admission
              </router-link>
              <router-link
                to="/articles"
                class="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-900 transition-colors font-bold text-lg text-center"
              >
                Articles
              </router-link>
            </div>

            <!-- Additional Info -->
            <div class="space-y-2 text-sm text-blue-100">
              <p>✓ Formations reconnues et accréditées</p>
              <p>✓ Experts du secteur énergétique</p>
              <p>✓ Infrastructures modernes</p>
            </div>
          </div>

          <!-- Right Image (kept as decorative on top of background) -->
          <div class="hidden lg:flex items-center justify-center">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-20 rounded-2xl"></div>
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23E5E7EB' width='400' height='500'/%3E%3Ctext x='200' y='250' font-size='24' fill='%236B7280' text-anchor='middle' font-family='Arial'%3EImage des experts%3C/text%3E%3C/svg%3E"
                alt="Experts en énergie"
                class="w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics & Gallery Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <!-- Statistics -->
        <div class="grid md:grid-cols-4 gap-8 mb-16">
          <div class="text-center">
            <div class="text-5xl lg:text-6xl font-bold text-blue-900 mb-2">560</div>
            <p class="text-gray-600 font-semibold">Jeunes Formés</p>
          </div>
          <div class="text-center">
            <div class="text-5xl lg:text-6xl font-bold text-blue-900 mb-2">+20</div>
            <p class="text-gray-600 font-semibold">Start-up créées par<br/>les Anciens</p>
          </div>
          <div class="text-center">
            <div class="text-5xl lg:text-6xl font-bold text-blue-900 mb-2">280</div>
            <p class="text-gray-600 font-semibold">Jeunes Formés en<br/>emploi</p>
          </div>
          <div class="text-center">
            <div class="text-5xl lg:text-6xl font-bold text-blue-900 mb-2">10</div>
            <p class="text-gray-600 font-semibold">Projets de<br/>recherche financés</p>
          </div>
        </div>

        <!-- Gallery & Video Section -->
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Video Section -->
          <div class="relative bg-white rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect fill='%23E5E7EB' width='600' height='400'/%3E%3C/svg%3E"
              alt="Galerie CREFER"
              class="w-full h-96 object-cover"
            />
            <div class="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40 transition-colors cursor-pointer">
              <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                <svg class="w-10 h-10 text-blue-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
            <div class="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-lg">
              <p class="text-sm font-semibold text-blue-900">Rentrée académique<br/>2024-2025</p>
            </div>
          </div>

          <!-- Info Box -->
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              FORMATION MODULAIRE
            </h3>
            <div class="space-y-4 mb-8">
              <div>
                <p class="text-sm text-gray-500 font-semibold uppercase">Durée</p>
                <p class="text-xl text-gray-900 font-semibold">6 ou 12 mois</p>
              </div>
              <div>
                <p class="text-sm text-gray-500 font-semibold uppercase">Date de démarrage</p>
                <p class="text-xl text-gray-900 font-semibold">14 OCTOBRE</p>
              </div>
            </div>
            <div class="bg-blue-50 rounded-lg p-6 mb-8">
              <p class="text-gray-700 font-semibold mb-3">CREFER honoré en tant que</p>
              <p class="text-2xl font-bold text-blue-900">MEILLEUR ACTEUR DE DÉVELOPPEMENT</p>
            </div>
            <router-link
              to="/admissions"
              class="block text-center px-8 py-4 bg-orange-400 text-blue-900 rounded-lg hover:bg-orange-300 transition-colors font-bold text-lg"
            >
              En savoir plus
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Image -->
          <div class="order-2 lg:order-1">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 600'%3E%3Crect fill='%23E5E7EB' width='500' height='600'/%3E%3C/svg%3E"
              alt="Notre Histoire CREFER"
              class="w-4/5 rounded-2xl shadow-2xl"
            />
          </div>

          <!-- Right Content -->
          <div class="order-1 lg:order-2">
            <h2 class="text-4xl lg:text-5xl font-bold text-orange-500 mb-8">
              NOTRE HISTOIRE
            </h2>
            
            <p class="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 leading-tight">
              "DEPUIS 2019, NOUS FORMONS DES JEUNES PRÊTS À RELEVER LES DÉFIS ÉNERGÉTIQUES DE L'AFRIQUE."
            </p>

            <div class="space-y-6">
              <p class="text-lg text-gray-700 leading-relaxed">
                Créé en 2019, CREFER doit son existence à EGENT TOGO, entreprise solaire expert près des cours et tribunaux du TOGO œuvrant dans la fourniture et la pose du système photovoltaïque et dans l'électricité générale. Le manque des techniciens qualifiés spécialistes en système photovoltaïque est au centre de l'ouverture dudit centre.
              </p>
            </div>

            <router-link
              to="/about"
              class="inline-block mt-8 px-8 py-4 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors font-bold text-lg"
            >
              En savoir plus
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose CREFER Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Left Content -->
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold text-orange-500 mb-8">
              POURQUOI CHOISIR<br/>CREFER ?
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              CREFER se consacre à offrir une formation de premier ordre en énergie solaire et en électricité. Nos programmes sont conçus pour doter les étudiants des connaissances et des compétences nécessaires pour exceller dans un secteur de l'énergie en constante évolution.
            </p>
          </div>

          <!-- Right Cards Grid -->
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Card 1 - Programme d'études de pointe -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-orange-400">
              <div class="mb-4">
                <svg class="w-12 h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Programme d'études de pointe</h3>
              <p class="text-gray-600">Notre programme est constamment mis à jour pour refléter les dernières avancées en matière de technologie solaire.</p>
            </div>

            <!-- Card 2 - Experts pédagogiques -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-blue-400">
              <div class="mb-4">
                <svg class="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Experts pédagogiques</h3>
              <p class="text-gray-600">Apprenez auprès d'experts reconnus dans le domaine, passionnés par l'enseignement et l'encadrement des étudiants.</p>
            </div>

            <!-- Card 3 - Recherche Innovante -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-blue-400">
              <div class="mb-4">
                <svg class="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Recherche Innovante</h3>
              <p class="text-gray-600">Participez à des projets de recherche innovants qui répondent à des défis concrets.</p>
            </div>

            <!-- Card 4 - Impact Mondial -->
            <div class="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-orange-400">
              <div class="mb-4">
                <svg class="w-12 h-12 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Impact Mondial</h3>
              <p class="text-gray-600">Rejoignez une communauté qui contribue à la transition mondiale vers les énergies renouvelables.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programmes d'études Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl lg:text-5xl font-bold text-orange-500 mb-12 text-center">
          PROGRAMMES D'ÉTUDES
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect fill='%23E5E7EB' width='600' height='400'/%3E%3C/svg%3E" 
              alt="Formation en électricité bâtiment" 
              class="w-full h-56 object-cover">
            <div class="p-6">
              <p class="text-sm text-orange-500 font-semibold uppercase mb-2">FORMATION MODULAIRE</p>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Devenez expert en électricité bâtiment</h3>
              <p class="text-gray-600">Installation, maintenance et sécurisation des réseaux électriques pour les habitations, les commerces et les sites industriels.</p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect fill='%23E5E7EB' width='600' height='400'/%3E%3C/svg%3E" 
              alt="Formation en efficacité énergétique" 
              class="w-full h-56 object-cover">
            <div class="p-6">
              <p class="text-sm text-orange-500 font-semibold uppercase mb-2">FORMATION MODULAIRE</p>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Efficacité énergétique</h3>
              <p class="text-gray-600">Optimisation de la consommation d'énergie afin de réduire les coûts et l'empreinte carbone, grâce à des équipements performants et une meilleure gestion des usages.</p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect fill='%23E5E7EB' width='600' height='400'/%3E%3C/svg%3E" 
              alt="Formation en énergie solaire" 
              class="w-full h-56 object-cover">
            <div class="p-6">
              <p class="text-sm text-orange-500 font-semibold uppercase mb-2">FORMATION MODULAIRE</p>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Devenez expert solaire</h3>
              <p class="text-gray-600">Production d'électricité à partir de la lumière du soleil via des panneaux solaires, pour des solutions autonomes ou connectées au réseau.</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <router-link
            to="/admissions"
            class="inline-block px-8 py-4 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors font-bold text-lg"
          >
            Voir plus
          </router-link>
        </div>
      </div>
    </section>

    <!-- Ils Nous Font Confiance Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-orange-500 mb-8">
          ILS NOUS FONT CONFIANCE
        </h2>
        <p class="text-lg text-gray-700 mb-12">
          Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <!-- Logo 1 -->
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23E5E7EB' width='200' height='200'/%3E%3C/svg%3E" 
            alt="EGENT TOGO" 
            class="mx-auto h-24">

          <!-- Logo 2 -->
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23E5E7EB' width='200' height='200'/%3E%3C/svg%3E" 
            alt="CERME" 
            class="mx-auto h-24">

          <!-- Logo 3 -->
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23E5E7EB' width='200' height='200'/%3E%3C/svg%3E" 
            alt="UCRM TOGO" 
            class="mx-auto h-24">

          <!-- Logo 4 -->
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23E5E7EB' width='200' height='200'/%3E%3C/svg%3E" 
            alt="Compassion" 
            class="mx-auto h-24">
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
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 class="text-4xl lg:text-5xl font-bold text-orange-500 mb-6 md:mb-0">
            NOTRE ACTUALITÉS
          </h2>
          <div class="text-right">
            <button class="px-10 py-4 border-2 border-orange-400 text-orange-400 rounded-xl font-bold text-2xl hover:bg-orange-50 transition-colors flex items-center gap-4">
              Voir plus
              <span class="text-2xl">→</span>
            </button>
          </div>
        </div>
        <p class="text-lg text-gray-800 max-w-2xl mx-auto mb-12 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.
        </p>
        <div class="space-y-12">
          <!-- Actu 1 -->
          <div class="flex flex-col md:flex-row md:items-center gap-8">
            <!-- <img src="/src/assets/actu1.jpg" alt="Actualité 1" class="w-full max-w-xs rounded-xl shadow-lg object-cover" style="min-width:260px; min-height:170px;"> -->
            <div class="flex-1">
              <div class="text-gray-400 text-2xl font-bold mb-2">26 SET 2025</div>
              <h3 class="text-3xl font-bold text-gray-900 mb-2">Électricité bâtiment et industrielle</h3>
              <p class="text-lg text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.</p>
            </div>
            <div class="flex-shrink-0">
              <button class="px-8 py-4 bg-orange-400 text-white rounded-xl font-bold text-lg hover:bg-orange-500 transition-colors flex items-center gap-2">
                Lire plus <span class="text-2xl">→</span>
              </button>
            </div>
          </div>
          <!-- Actu 2 -->
          <div class="flex flex-col md:flex-row md:items-center gap-8">
            <!-- <img src="/src/assets/actu2.jpg" alt="Actualité 2" class="w-full max-w-xs rounded-xl shadow-lg object-cover" style="min-width:260px; min-height:170px;"> -->
            <div class="flex-1">
              <div class="text-gray-400 text-2xl font-bold mb-2">26 SET 2025</div>
              <h3 class="text-3xl font-bold text-gray-900 mb-2">Électricité bâtiment et industrielle</h3>
              <p class="text-lg text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.</p>
            </div>
            <div class="flex-shrink-0">
              <button class="px-8 py-4 bg-orange-400 text-white rounded-xl font-bold text-lg hover:bg-orange-500 transition-colors flex items-center gap-2">
                Lire plus <span class="text-2xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Section Témoignages -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl lg:text-5xl font-bold text-orange-500 mb-8 text-center">TÉMOIGNAGES</h2>
        <p class="text-lg text-gray-800 max-w-3xl mx-auto mb-12 text-center">
          Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.
        </p>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Témoignage 1 -->
          <div class="bg-gray-50 rounded-2xl p-8 flex flex-col items-start shadow">
            <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Profil" class="w-24 h-24 rounded-full mb-4 object-cover" />
            <h3 class="text-2xl font-bold text-gray-900 mb-1">ANA Stéphanie</h3>
            <p class="text-orange-400 font-semibold mb-2">Ancienne étudiante en énergie solaire</p>
            <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.</p>
          </div>
          <!-- Témoignage 2 -->
          <div class="bg-gray-50 rounded-2xl p-8 flex flex-col items-start shadow">
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Profil" class="w-24 h-24 rounded-full mb-4 object-cover" />
            <h3 class="text-2xl font-bold text-gray-900 mb-1">ANA Stéphanie</h3>
            <p class="text-orange-400 font-semibold mb-2">Ancienne étudiante en énergie solaire</p>
            <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.</p>
          </div>
          <!-- Témoignage 3 -->
          <div class="bg-gray-50 rounded-2xl p-8 flex flex-col items-start shadow">
            <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Profil" class="w-24 h-24 rounded-full mb-4 object-cover" />
            <h3 class="text-2xl font-bold text-gray-900 mb-1">ANA Stéphanie</h3>
            <p class="text-orange-400 font-semibold mb-2">Ancienne étudiante en énergie solaire</p>
            <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.</p>
          </div>
          <!-- Témoignage 4 -->
          <div class="bg-gray-50 rounded-2xl p-8 flex flex-col items-start shadow">
            <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="Profil" class="w-24 h-24 rounded-full mb-4 object-cover" />
            <h3 class="text-2xl font-bold text-gray-900 mb-1">ANA Stéphanie</h3>
            <p class="text-orange-400 font-semibold mb-2">Ancienne étudiante en énergie solaire</p>
            <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.</p>
          </div>
          <!-- Témoignage 5 -->
          <div class="bg-gray-50 rounded-2xl p-8 flex flex-col items-start shadow">
            <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="Profil" class="w-24 h-24 rounded-full mb-4 object-cover" />
            <h3 class="text-2xl font-bold text-gray-900 mb-1">ANA Stéphanie</h3>
            <p class="text-orange-400 font-semibold mb-2">Ancienne étudiante en énergie solaire</p>
            <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.</p>
          </div>
          <!-- Témoignage 6 -->
          <div class="bg-gray-50 rounded-2xl p-8 flex flex-col items-start shadow">
            <img src="https://randomuser.me/api/portraits/women/6.jpg" alt="Profil" class="w-24 h-24 rounded-full mb-4 object-cover" />
            <h3 class="text-2xl font-bold text-gray-900 mb-1">ANA Stéphanie</h3>
            <p class="text-orange-400 font-semibold mb-2">Ancienne étudiante en énergie solaire</p>
            <p class="text-gray-700">Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Prêt à nous rejoindre ? -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-orange-50">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">
        <!-- Colonne gauche : texte et bouton -->
        <div class="flex flex-col justify-center p-10 md:p-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">PRÊT À NOUS<br />REJOINDRE&nbsp;?</h2>
          <p class="text-lg text-gray-800 mb-10">Faites un pas de plus vers votre carrière dans l'énergie solaire et l'électricité ! Découvrez nos programmes et postulez dès aujourd'hui.</p>
          <router-link
            to="/admissions"
            class="inline-block px-12 py-5 bg-orange-400 text-white text-2xl font-bold rounded-xl shadow hover:bg-orange-500 transition-colors text-center"
          >
            Inscrivez-vous
          </router-link>
        </div>
        <!-- Colonne droite : image -->
        <div class="h-[350px] md:h-auto w-full">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Installation panneau solaire"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          À propos de CREFER
        </h2>
        <p class="text-lg text-gray-600 mb-8">
          CREFER est une institution de formation leader dans le domaine des énergies renouvelables. 
          Nous formons les experts de demain à travers des programmes innovants et reconnus internationalement.
        </p>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 bg-blue-50 rounded-lg">
            <div class="text-4xl mb-4">🎓</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Formation Qualifiante</h3>
            <p class="text-gray-600">Programmes CAP, BT et modules spécialisés</p>
          </div>
          <div class="p-6 bg-blue-50 rounded-lg">
            <div class="text-4xl mb-4">💡</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Expertise Reconnue</h3>
            <p class="text-gray-600">Formateurs experts du secteur énergétique</p>
          </div>
          <div class="p-6 bg-blue-50 rounded-lg">
            <div class="text-4xl mb-4">🏆</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Placement Assuré</h3>
            <p class="text-gray-600">90% de nos diplômés trouvent un emploi</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Prêt à rejoindre CREFER ?</h2>
        <p class="text-lg mb-8 text-blue-100">
          Inscrivez-vous maintenant pour les sessions 2025-2026
        </p>
        <router-link
          to="/contact"
          class="inline-block px-8 py-4 bg-orange-400 text-blue-900 rounded-full hover:bg-orange-300 transition-colors font-bold text-lg"
        >
          Nous contacter
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    const backgroundImageUrl = ref('https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1600&q=80')
    return { backgroundImageUrl }
  }
}
</script>
