<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section with configurable background image (maquette) -->
    <section
      class="relative min-h-screen text-white flex items-center overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    >
      <!-- Dark overlay for contrast -->
      <div class="absolute inset-0 bg-black/55 z-10"></div>
      <!-- Bottom gradient to match maquette darker base -->
      <div class="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 to-transparent z-15"></div>

      <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-20 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left content: aligned left with roomy padding -->
          <div class="flex flex-col justify-center animate-fade-in-up">
            <div class="max-w-3xl">
              <div class="text-left mb-6 animate-fade-in-up delay-100">
                <div class="text-yellow-500 text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in-up delay-200" style="font-family: 'Montserrat', sans-serif;">Admission 2025</div>
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up delay-300" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">RENTRÉE ACADÉMIQUE 2025-2026</h1>

                <div class="space-y-3 mb-8 animate-fade-in-up delay-400">
                  <p class="text-lg md:text-xl lg:text-2xl font-bold tracking-tight leading-tight text-blue-100" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.3px;">CAP & BT : <span class="text-yellow-500">15 SEPTEMBRE 2025</span></p>
                  <p class="text-lg md:text-xl lg:text-2xl font-bold tracking-tight leading-tight text-blue-100" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.3px;">MODULAIRE : <span class="text-yellow-500">13 AVRIL 2026</span></p>
                </div>

                <router-link
                  to="/contact"
                  class="inline-block px-10 md:px-12 py-4 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold text-lg animate-fade-in-up delay-500 hover:shadow-lg transform hover:-translate-y-1" style="font-family: 'Montserrat', sans-serif;"
                >
                  Nous contacter
                </router-link>
              </div>
            </div>
          </div>

          <!-- Right column left empty so background image shows the crew on the right (responsive) -->
          <div class="hidden lg:block"></div>
        </div>
      </div>
    </section>

    <!-- Fiches et Documents Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-cyan-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">Fiches d'Inscription & Documentation</h2>

        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Left Column: Image Gallery -->
          <div class="flex flex-col justify-start items-center order-2 lg:order-1 w-full">
            <!-- Loading -->
            <div v-if="loadingImages" class="w-full text-center py-12">
              <div class="inline-block w-8 h-8 border-4 border-blue-400 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
            
            <!-- Images Stack - Full Width -->
            <div v-else-if="documentsGallery.length > 0" class="w-full space-y-6">
              <img 
                v-for="(image, index) in documentsGallery"
                :key="index"
                :src="image"
                :alt="'Image admission ' + (index + 1)"
                class="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            
            <!-- No Data -->
            <div v-else class="w-full text-center py-12 text-gray-500">
              <p>Aucune image disponible</p>
            </div>
          </div>

          <!-- Right Column: Download Buttons -->
          <div class="space-y-4 order-1 lg:order-2">
            <!-- Loading State -->
            <div v-if="loadingDocuments" class="flex justify-center items-center py-12">
              <div class="flex flex-col items-center gap-4">
                <div class="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <p class="text-gray-600">Chargement des documents...</p>
              </div>
            </div>

            <!-- Documents List -->
            <template v-else-if="documentsWithState.length > 0">
              <div
                v-for="(doc, index) in documentsWithState"
                :key="doc.id"
                class="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white p-6 rounded-lg shadow hover:shadow-xl transition-all duration-300 transform hover:scale-102 group animate-fade-in-up gap-4"
                :style="{ animationDelay: `${index * 100}ms` }"
              >
                <div class="flex items-center gap-4">
                  <div class="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h3 class="text-lg font-semibold text-gray-900">{{ doc.title }}</h3>
                    <p v-if="doc.description" class="text-sm text-gray-600 mt-1">{{ doc.description }}</p>
                  </div>
                </div>
                <button
                  @click="downloadFile(doc)"
                  :disabled="doc.isDownloading"
                  class="w-full sm:w-auto px-6 py-3 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-1 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-yellow-400"
                >
                  <span v-if="!doc.isDownloading">Télécharger</span>
                  <span v-else>Téléchargement...</span>
                  <svg v-if="!doc.isDownloading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  <svg v-else class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                </button>
              </div>
            </template>

            <!-- No Documents -->
            <div v-else class="text-center py-12">
              <p class="text-gray-600">Aucun document disponible pour le moment.</p>
            </div>
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
        <!-- Conditions d'Admission Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 to-amber-50" v-scroll-animate>
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-12" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">Conditions d'Admission</h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- CAP & BT -->
          <div class="bg-blue-50 p-8 rounded-lg animate-fade-in-up transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            <div class="flex items-center gap-3 mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
              <h3 class="text-2xl font-bold text-blue-900" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.3px;">CAP & BT</h3>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Être titulaire d'un diplôme BAC ou équivalent</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Avoir une excellente motivation</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Bonnes connaissances scientifiques</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Entretien d'admission requis</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Frais de scolarité applicables</span>
              </li>
            </ul>
            <div class="mt-6 pt-6 border-t border-blue-200">
              <!-- <p class="text-sm text-blue-900 font-semibold">
                 Rentrée : <span class="text-yellow-400">15 SEPTEMBRE 2025</span>
              </p> -->
            </div>
          </div>

          <!-- Formation Modulaire -->
          <div class="bg-green-50 p-8 rounded-lg animate-fade-in-up delay-100 transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
            <div class="flex items-center gap-3 mb-6">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <h3 class="text-2xl font-bold text-green-900" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.3px;">Formation Modulaire</h3>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Modules à la carte</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Flexible et adaptatif</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Pour professionnels en activité</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Certifications partielles possibles</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-400 font-bold mr-3">✓</span>
                <span class="text-gray-700">Tarifs réduits</span>
              </li>
            </ul>
            <div class="mt-6 pt-6 border-t border-green-200">
              <!-- <p class="text-sm text-green-900 font-semibold">
                 Rentrée : <span class="text-yellow-400">13 AVRIL 2026</span>
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section v-scroll-animate class="relative bg-gradient-to-r from-yellow-600 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="animate-fade-in-up">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-slide-in-left drop-shadow-lg" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
              PRÊT À NOUS REJOINDRE ?
            </h2>
            <p class="text-lg text-gray-800 mb-8 animate-fade-in-up delay-200 drop-shadow-md">
              Faites un pas de plus vers votre carrière dans l'énergie solaire et l'électricité ! Découvrez nos programmes et postulez dès aujourd'hui.
            </p>
            <router-link
              to="/contact"
              class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg transform hover:-translate-y-1 animate-fade-in-up delay-300 hover:scale-105 drop-shadow-lg"
            >
              <span>Inscrivez-vous</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </router-link>
          </div>

          <!-- Right Image Placeholder -->
          <div class="hidden lg:flex justify-center animate-float">
            <img 
              :src="ctaImageUrl"
              alt="Inscrivez-vous à CREFER"
              class="w-full max-w-md h-96 rounded-lg shadow-2xl object-cover hover:shadow-3xl transition-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useSEO } from '@/composables/useSEO'
import { useAdmissionImages } from '@/services/admissionsImagesService'
import { useAdmissionDocuments } from '@/services/admissionsDocumentsService'

export default {
  name: 'Admissions',
  setup() {
    const seo = useSEO()
    
    // URL d'arrière-plan par défaut
    const backgroundImageUrl = ref(new URL('../assets/images/_DSC4826.jpg', import.meta.url).href)
    const ctaImageUrl = ref(new URL('../assets/images/distinction1-1200.jpg', import.meta.url).href)
    
    // Composables Firestore
    const { images: admissionImages, fetchAdmissionImages } = useAdmissionImages()
    const { documents: admissionDocuments, fetchAdmissionDocuments, downloadDocument } = useAdmissionDocuments()
    
    // État de chargement et téléchargement
    const loadingImages = ref(false)
    const loadingDocuments = ref(false)
    const downloadingFiles = ref({})

    // Galerie d'images depuis Firestore
    const documentsGallery = computed(() => {
      return admissionImages.value.map(img => img.image).slice(0, 4)
    })

    // Documents avec état de téléchargement
    const documentsWithState = computed(() => {
      return admissionDocuments.value.map(doc => ({
        ...doc,
        isDownloading: downloadingFiles.value[doc.id] || false
      }))
    })

    const downloadFile = async (document) => {
      if (downloadingFiles.value[document.id]) return
      
      downloadingFiles.value[document.id] = true
      try {
        await downloadDocument(document)
      } catch (error) {
        console.error('Erreur téléchargement:', error)
        alert('Erreur lors du téléchargement du fichier')
      } finally {
        downloadingFiles.value[document.id] = false
      }
    }

    onMounted(async () => {
      // Configurer le SEO
      seo.setSEO({
        title: 'Admissions CREFER 2025-2026 - Formations CAP, BT & Modulaires',
        description: 'Découvrez les conditions d\'admission et les périodes de rentrée pour CAP, BT et formations modulaires. Téléchargez les fiches d\'inscription et rejoignez CREFER.',
        keywords: 'admissions CREFER, inscription CAP, inscription BT, formation modulaire, rentrée 2025, conditions admission',
        canonical: 'https://crefer.tech/admissions'
      })

      // Charger les données depuis Firestore
      loadingImages.value = true
      loadingDocuments.value = true
      
      try {
        await Promise.all([
          fetchAdmissionImages(),
          fetchAdmissionDocuments()
        ])
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error)
      } finally {
        loadingImages.value = false
        loadingDocuments.value = false
      }
    })

    return {
      backgroundImageUrl,
      ctaImageUrl,
      documentsGallery,
      documentsWithState,
      downloadingFiles,
      downloadFile,
      loadingImages,
      loadingDocuments,
      admissionImages,
      admissionDocuments
    }
  }
}
</script>
