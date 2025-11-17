<template>
  <div class="min-h-screen">
    <!-- Infos Bar -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-semibold text-gray-700">
          <div>ACADEMIQUE <span class="text-orange-500">2025-2026</span></div>
          <div class="hidden md:block">RENTRÉE ACADEMIQUE <span class="text-orange-500">2025-2026</span></div>
          <div class="hidden md:block">CAP & BT : <span class="text-orange-500">15 SEPTEMBRE 2025</span></div>
          <div class="hidden md:block text-right">MODULAIRE : <span class="text-orange-500">13 OCTOBRE</span></div>
        </div>
      </div>
    </div>

    <!-- Hero Section with Blue Background -->
    <section class="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-500 min-h-screen flex items-center">
      <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
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

          <!-- Right Image (Placeholder) -->
          <div class="hidden lg:flex items-center justify-center">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-30 rounded-2xl"></div>
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
export default {
  name: 'Home'
}
</script>
