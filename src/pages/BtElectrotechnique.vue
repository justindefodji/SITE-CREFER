<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation Top Padding -->
    <div class="h-16 sm:h-20"></div>

    <!-- Hero Banner with Image -->
    <div class="relative h-96 sm:h-[500px] w-full overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=500&fit=crop" 
        alt="BT Électrotechnique" 
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
            BT Électrotechnique
          </h1>
          <p class="text-lg sm:text-xl text-gray-100 max-w-2xl">
            Diplôme d'état pour devenir technicien supérieur en électrotechnique
          </p>
        </div>
      </div>
    </div>

    <!-- Main Article Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Table of Contents -->
      <div class="bg-yellow-50 rounded-xl p-8 mb-12 border-l-4 border-yellow-600">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Sommaire</h2>
        <ul class="space-y-2 text-yellow-700">
          <li><a href="#qualification" class="hover:text-yellow-900 flex items-center gap-2"><span>➜</span> Niveau de Qualification</a></li>
          <li><a href="#duree" class="hover:text-yellow-900 flex items-center gap-2"><span>➜</span> Durée de la Formation</a></li>
          <li><a href="#objectifs" class="hover:text-yellow-900 flex items-center gap-2"><span>➜</span> Objectifs de la Formation</a></li>
          <li><a href="#debouches" class="hover:text-yellow-900 flex items-center gap-2"><span>➜</span> Débouchés Professionnels</a></li>
        </ul>
      </div>

      <!-- Section 1: Niveau de Qualification with Image -->
      <article class="mb-16 scroll-mt-20" id="qualification">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Niveau de Qualification</h2>
            </div>
            <p class="text-gray-700 text-lg leading-relaxed mb-4">
              Le BT est un <strong>diplôme d'état équivalent au baccalauréat professionnel</strong>, attestant d'une qualification technique approfondie. Il reconnaît vos compétences comme technicien supérieur dans le domaine de l'électrotechnique.
            </p>
            <div class="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <p class="text-gray-800 font-semibold">
                ⭐ Le BT vous prépare à assumer des responsabilités techniques et à gérer des projets électrotechniques complexes.
              </p>
            </div>
          </div>
          <div class="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
              alt="Certification BT diplôme" 
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
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" 
              alt="Durée de formation 2-3 ans" 
              class="w-full h-64 object-cover"
            />
          </div>
          <div class="order-1 md:order-2">
            <div class="flex items-center gap-3 mb-4">
              <div class="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Durée de la Formation</h2>
            </div>
            <div class="space-y-4">
              <div class="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
                <p class="text-3xl font-bold text-amber-600 mb-2">2 à 3 ans</p>
                <p class="text-gray-700">Formation complète avec alternance théorie et pratique avancée</p>
              </div>
              <div>
                <p class="text-gray-700 text-lg leading-relaxed">
                  La formation dure <strong>deux à trois ans</strong> avec un <strong>niveau d'entrée minimum de BEPC ou un CAP en électricité d'équipement</strong>.
                </p>
              </div>
              <div class="grid grid-cols-2 gap-4 mt-6">
                <div class="text-center p-4 bg-yellow-50 rounded-lg">
                  <p class="font-bold text-yellow-600 mb-1">Année 1</p>
                  <p class="text-xs text-gray-600">Technologie avancée</p>
                </div>
                <div class="text-center p-4 bg-yellow-50 rounded-lg">
                  <p class="font-bold text-yellow-600 mb-1">Année 2-3</p>
                  <p class="text-xs text-gray-600">Spécialisation & Projets</p>
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
              <div class="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Objectifs de la Formation</h2>
            </div>
            <p class="text-gray-700 text-lg leading-relaxed mb-6">
              Former des <strong>techniciens capables de concevoir, installer, gérer et maintenir des systèmes électrotechniques complexes</strong>, incluant la production, le transport, la distribution et l'utilisation de l'énergie électrique.
            </p>
            <div class="space-y-3">
              <div class="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                <span class="text-orange-600 font-bold mt-1">✓</span>
                <p class="text-gray-700">Concevoir des systèmes électrotechniques</p>
              </div>
              <div class="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                <span class="text-orange-600 font-bold mt-1">✓</span>
                <p class="text-gray-700">Gérer et optimiser des installations électriques</p>
              </div>
              <div class="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                <span class="text-orange-600 font-bold mt-1">✓</span>
                <p class="text-gray-700">Assurer la maintenance des systèmes complexes</p>
              </div>
              <div class="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                <span class="text-orange-600 font-bold mt-1">✓</span>
                <p class="text-gray-700">Piloter des équipes techniques</p>
              </div>
            </div>
          </div>
          <div class="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" 
              alt="Systèmes électrotechniques" 
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
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop" 
              alt="Débouchés professionnels technicien" 
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
                <p class="font-bold text-gray-900 mb-1">Technicien en Électrotechnique</p>
                <p class="text-gray-700 text-sm">Concevoir, installer et maintenir des systèmes électrotechniques</p>
              </div>
              <div class="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
                <p class="font-bold text-gray-900 mb-1">Chef de Chantier Électrique</p>
                <p class="text-gray-700 text-sm">Superviser des installations électriques complexes et coordonner les équipes</p>
              </div>
              <div class="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
                <p class="font-bold text-gray-900 mb-1">Responsable Technique</p>
                <p class="text-gray-700 text-sm">Gérer la maintenance et l'optimisation des installations</p>
              </div>
              <div class="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
                <p class="font-bold text-gray-900 mb-1">Poursuite d'études supérieures</p>
                <p class="text-gray-700 text-sm">Accès au BTS, Licence en électrotechnique et formations spécialisées</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- Divider -->
      <div class="border-t-2 border-gray-200 my-16"></div>

      <!-- Formation Modulaire Info Section -->
      <section class="mb-16 bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-3">Complément: Formations Modulaires</h2>
            <p class="text-gray-700 text-lg leading-relaxed">
              Nos formations modulaires (6 ou 12 mois) offrent une grande flexibilité et permettent aux apprenants de développer des compétences spécifiques de manière progressive et adaptée à leurs besoins. La formation est sanctionnée par un certificat et une attestation de stage.
            </p>
            <router-link to="/formation-modulaire" class="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 mt-4">
              Découvrir les formations modulaires
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <div class="bg-gradient-to-r from-yellow-600 to-amber-700 rounded-2xl shadow-xl p-12 text-white text-center">
        <h2 class="text-3xl font-bold mb-4">Prêt à poursuivre vos études?</h2>
        <p class="text-lg text-yellow-100 mb-8 max-w-2xl mx-auto">
          Rejoignez notre formation BT Électrotechnique et devenez un technicien supérieur reconnu.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-yellow-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all">
            Demander une admission
          </router-link>
          <router-link to="/" class="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-yellow-700 transition-all">
            Retour à l'accueil
          </router-link>
        </div>
      </div>

      <!-- Related Programs -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Autres formations disponibles</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div class="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
              <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">CAP Électricité d'Équipement</h3>
              <p class="text-gray-700 mb-4">
                Diplôme d'état pour maîtriser l'installation et la maintenance des équipements électriques en 3 ans.
              </p>
              <router-link to="/cap-electricite" class="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2">
                En savoir plus
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </router-link>
            </div>
          </div>

          <div class="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div class="h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a4 4 0 118 0m-8 0a4 4 0 100-8m0 8a4 4 0 110-8m0 8a4 4 0 100-8m0 8a4 4 0 110-8" />
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Formations Modulaires</h3>
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
  name: 'BtElectrotechnique',
  head() {
    return {
      title: 'BT Électrotechnique | CREFER',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Formation BT Électrotechnique à CREFER - Formation de technicien supérieur en électrotechnique'
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

article {
  scroll-behavior: smooth;
}

a[href^="#"] {
  scroll-behavior: smooth;
}
</style>
