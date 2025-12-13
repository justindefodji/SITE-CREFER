<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl w-full">
      <div class="bg-white rounded-lg shadow-2xl p-8 sm:p-12 text-center">
        <!-- Error Code -->
        <div class="mb-8">
          <h1 class="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <div class="text-6xl mb-6">❌</div>
        </div>

        <!-- Error Message -->
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Page non trouvée
        </h2>
        <p class="text-lg text-gray-600 mb-8">
          Désolé, la page que vous cherchez n'existe pas ou a été déplacée. 
          Veuillez vérifier l'adresse URL ou retourner à l'accueil.
        </p>

        <!-- Additional Info -->
        <div class="bg-blue-50 rounded-lg p-6 mb-8">
          <p class="text-sm text-gray-600">
            <strong>Code d'erreur :</strong> HTTP 404<br />
            <strong>Date :</strong> {{ currentDate }}
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <router-link
            to="/"
            class="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-bold text-lg transform hover:-translate-y-1 hover:scale-105"
          >
            Retour à l'accueil
          </router-link>
          <router-link
            to="/contact"
            class="px-8 py-3 border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition-colors font-bold text-lg transform hover:-translate-y-1"
          >
            Nous contacter
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div class="border-t border-gray-200 pt-8">
          <p class="text-sm text-gray-600 mb-4">Ou explorez ces pages utiles :</p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link
              to="/"
              class="text-yellow-400 hover:text-yellow-500 font-semibold text-sm"
            >
              Accueil
            </router-link>
            <span class="text-gray-400">•</span>
            <router-link
              to="/admissions"
              class="text-yellow-400 hover:text-yellow-500 font-semibold text-sm"
            >
              Admissions
            </router-link>
            <span class="text-gray-400">•</span>
            <router-link
              to="/about"
              class="text-yellow-400 hover:text-yellow-500 font-semibold text-sm"
            >
              À propos
            </router-link>
            <span class="text-gray-400">•</span>
            <router-link
              to="/gallery"
              class="text-yellow-400 hover:text-yellow-500 font-semibold text-sm"
            >
              Galerie
            </router-link>
          </div>
        </div>
      </div>

      <!-- Footer Info -->
      <div class="text-center mt-8">
        <p class="text-gray-600">
          Si le problème persiste, 
          <router-link
            to="/contact"
            class="text-yellow-400 hover:text-yellow-500 font-semibold"
          >
            contactez-nous
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useSEO } from '@/composables/useSEO'

export default {
  name: 'NotFound',
  setup() {
    const seo = useSEO()
    const currentDate = ref(new Date().toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }))
    
    onMounted(() => {
      // Configurer le SEO pour la page 404
      seo.setSEO({
        title: 'Page non trouvée (404) - CREFER',
        description: 'Page non trouvée. La page que vous cherchez n\'existe pas ou a été déplacée. Retournez à l\'accueil ou explorez nos formations.',
        keywords: '404, page non trouvée, erreur',
        canonical: 'https://crefer.tech/404'
      })
    })

    return {
      currentDate,
      seo
    }
  }
}
</script>
