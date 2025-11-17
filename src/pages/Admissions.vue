<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section with Background -->
    <section class="relative h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white flex items-center overflow-hidden">
      <!-- Background Overlay -->
      <div class="absolute inset-0 bg-black/50 z-10"></div>
      
      <!-- Background Image Effect -->
      <div class="absolute inset-0 opacity-30 z-0">
        <div class="w-full h-full bg-gradient-to-br from-blue-900 to-gray-900"></div>
      </div>

      <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div>
            <h2 class="text-5xl lg:text-6xl font-bold mb-6">
              <span class="text-orange-400">ADMISSION/</span>
            </h2>
            <p class="text-2xl lg:text-3xl font-semibold mb-8">
              RENTRÉE ACADÉMIQUE 2025-2026
            </p>
            <p class="text-3xl lg:text-4xl font-bold mb-6">
              CAP & BT : <span class="text-orange-400">15 SEPTEMBRE 2025</span>
            </p>
            <p class="text-3xl lg:text-4xl font-bold mb-8">
              MODULAIRE : <span class="text-orange-400">13 OCTOBRE 2025</span>
            </p>
            <router-link
              to="/contact"
              class="inline-block px-8 py-4 bg-orange-400 text-gray-900 rounded-lg hover:bg-orange-300 transition-colors font-bold text-lg"
            >
              Nous Contacter
            </router-link>
          </div>

          <!-- Right Image Placeholder -->
          <div class="hidden lg:flex justify-center">
            <div class="w-full max-w-md h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-2xl flex items-center justify-center">
              <div class="text-center text-white">
                <div class="text-7xl mb-4">👷</div>
                <p class="text-2xl font-bold">Expert en Énergie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fiches et Documents Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Fiches d'Inscription & Documentation</h2>

        <div class="space-y-4">
          <!-- Fiche d'inscription modulaire -->
          <div class="flex justify-between items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Fiche d'inscription modulaire</h3>
            </div>
            <button
              @click="downloadFile('fiche-inscription-modulaire.pdf')"
              class="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors font-bold flex items-center gap-2"
            >
              <span>Télécharger</span>
              <span>↓</span>
            </button>
          </div>

          <!-- Fiche d'inscription BT & CAP -->
          <div class="flex justify-between items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Fiche d'inscription BT & CAP</h3>
            </div>
            <button
              @click="downloadFile('fiche-inscription-bt-cap.pdf')"
              class="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors font-bold flex items-center gap-2"
            >
              <span>Télécharger</span>
              <span>↓</span>
            </button>
          </div>

          <!-- Liste des outils TP et stage -->
          <div class="flex justify-between items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Liste des outils de TP et pour le stage</h3>
            </div>
            <button
              @click="downloadFile('liste-outils-tp-stage.pdf')"
              class="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors font-bold flex items-center gap-2"
            >
              <span>Télécharger</span>
              <span>↓</span>
            </button>
          </div>

          <!-- Fiche de renseignement modulaire -->
          <div class="flex justify-between items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Fiche de renseignement modulaire</h3>
            </div>
            <button
              @click="downloadFile('fiche-renseignement-modulaire.pdf')"
              class="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors font-bold flex items-center gap-2"
            >
              <span>Télécharger</span>
              <span>↓</span>
            </button>
          </div>

          <!-- Fiche de renseignement CAP -->
          <div class="flex justify-between items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Fiche de renseignement CAP</h3>
            </div>
            <button
              @click="downloadFile('fiche-renseignement-cap.pdf')"
              class="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors font-bold flex items-center gap-2"
            >
              <span>Télécharger</span>
              <span>↓</span>
            </button>
          </div>

          <!-- Fiche de renseignement BT -->
          <div class="flex justify-between items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Fiche de renseignement BT</h3>
            </div>
            <button
              @click="downloadFile('fiche-renseignement-bt.pdf')"
              class="px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors font-bold flex items-center gap-2"
            >
              <span>Télécharger</span>
              <span>↓</span>
            </button>
          </div>
        </div>

        <!-- Info Text -->
        <div class="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <p class="text-gray-700 text-center">
            <strong>Important :</strong> La fiche d'inscription peut être imprimée, remplie et déposée au secrétariat de CREFER.
            <br />(Fiches d'inscription à télécharger ci-dessus)
          </p>
        </div>
      </div>
    </section>

    <!-- Conditions & Requirements Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-12">Conditions d'Admission</h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- CAP & BT -->
          <div class="bg-blue-50 p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-blue-900 mb-6">CAP & BT</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Être titulaire d'un diplôme BAC ou équivalent</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Avoir une excellente motivation</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Bonnes connaissances scientifiques</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Entretien d'admission requis</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Frais de scolarité applicables</span>
              </li>
            </ul>
            <div class="mt-6 pt-6 border-t border-blue-200">
              <p class="text-sm text-blue-900 font-semibold">
                📅 Rentrée : <span class="text-orange-400">15 SEPTEMBRE 2025</span>
              </p>
            </div>
          </div>

          <!-- Formation Modulaire -->
          <div class="bg-green-50 p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-green-900 mb-6">Formation Modulaire</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Modules à la carte</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Flexible et adaptatif</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Pour professionnels en activité</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Certifications partielles possibles</span>
              </li>
              <li class="flex items-start">
                <span class="text-orange-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Tarifs réduits</span>
              </li>
            </ul>
            <div class="mt-6 pt-6 border-t border-green-200">
              <p class="text-sm text-green-900 font-semibold">
                📅 Rentrée : <span class="text-orange-400">13 OCTOBRE 2025</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative bg-gradient-to-r from-blue-100 to-orange-50 py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              PRÊT À NOUS REJOINDRE ?
            </h2>
            <p class="text-lg text-gray-700 mb-8">
              Faites un pas de plus vers votre carrière dans l'énergie solaire et l'électricité ! Découvrez nos programmes et postulez dès aujourd'hui.
            </p>
            <router-link
              to="/contact"
              class="inline-block px-8 py-4 bg-orange-400 text-gray-900 rounded-lg hover:bg-orange-500 transition-colors font-bold text-lg"
            >
              Inscrivez-vous
            </router-link>
          </div>

          <!-- Right Image Placeholder -->
          <div class="hidden lg:flex justify-center">
            <div class="w-full max-w-md h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl flex items-center justify-center">
              <div class="text-center text-white">
                <div class="text-7xl mb-4">☀️</div>
                <p class="text-2xl font-bold">Experts Formés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Admissions',
  setup() {
    const downloadFile = (filename) => {
      console.log(`Téléchargement de: ${filename}`)
      // Simulation du téléchargement
      const element = document.createElement('a')
      element.setAttribute('href', '#')
      element.setAttribute('download', filename)
      element.style.display = 'none'
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    }

    return {
      downloadFile
    }
  }
}
</script>
