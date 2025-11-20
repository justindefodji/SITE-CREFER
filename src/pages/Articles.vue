<template>
  <div class="min-h-screen bg-white">
    <!-- Header Section -->
    <section
      class="relative py-12 px-4 sm:px-6 lg:px-8 border-b overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
      v-scroll-animate
    >
      <!-- Dark overlay for contrast -->
      <div class="absolute inset-0 bg-black/55 z-10"></div>
      <!-- Gradient noir de bas vers le haut -->
      <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent z-15"></div>
      
      <div class="max-w-7xl mx-auto relative z-20 pt-24">
        <h1 class="text-3xl lg:text-5xl font-bold text-white mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">NOS ACTUALITÉS</h1>
        <p class="text-lg lg:text-xl text-blue-100">Découvrez les dernières actualités et projets de CREFER</p>
      </div>
    </section>

    <!-- Articles Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-amber-50" v-scroll-animate>
      <div class="max-w-7xl mx-auto">
        <div class="space-y-12">
          <!-- Article 1 -->
          <article class="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <!-- Image Left -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg overflow-hidden shadow-lg h-72 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="text-6xl mb-2">👷</div>
                  <p class="font-semibold">Formation Électricité</p>
                </div>
              </div>
            </div>

            <!-- Content Right -->
            <div class="w-full lg:w-3/5">
              <p class="text-gray-500 font-semibold mb-2">26 SET 2025</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                Électricité bâtiment et industrielle
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-orange-400 text-white font-bold rounded-lg hover:bg-orange-500 transition-colors gap-2"
              >
                <span>Lire plus</span>
                <span>→</span>
              </a>
            </div>
          </article>

          <!-- Divider -->
          <div class="my-8 border-t border-gray-200"></div>

          <!-- Article 2 -->
          <article class="flex flex-col lg:flex-row-reverse gap-8 items-start lg:items-center">
            <!-- Image Right -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg overflow-hidden shadow-lg h-72 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="text-6xl mb-2">⚡</div>
                  <p class="font-semibold">Électricité BTP</p>
                </div>
              </div>
            </div>

            <!-- Content Left -->
            <div class="w-full lg:w-3/5">
              <p class="text-gray-500 font-semibold mb-2">26 SET 2025</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                Électricité bâtiment et industrielle
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-orange-400 text-white font-bold rounded-lg hover:bg-orange-500 transition-colors gap-2"
              >
                <span>Lire plus</span>
                <span>→</span>
              </a>
            </div>
          </article>

          <!-- Divider -->
          <div class="my-8 border-t border-gray-200"></div>

          <!-- Article 3 -->
          <article class="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <!-- Image Left -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="bg-gradient-to-br from-green-300 to-green-500 rounded-lg overflow-hidden shadow-lg h-72 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="text-6xl mb-2">☀️</div>
                  <p class="font-semibold">Énergie Solaire</p>
                </div>
              </div>
            </div>

            <!-- Content Right -->
            <div class="w-full lg:w-3/5">
              <p class="text-gray-500 font-semibold mb-2">20 SET 2025</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                Efficacité énergétique et énergie solaire
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-orange-400 text-white font-bold rounded-lg hover:bg-orange-500 transition-colors gap-2"
              >
                <span>Lire plus</span>
                <span>→</span>
              </a>
            </div>
          </article>

          <!-- Divider -->
          <div class="my-8 border-t border-gray-200"></div>

          <!-- Article 4 -->
          <article class="flex flex-col lg:flex-row-reverse gap-8 items-start lg:items-center">
            <!-- Image Right -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="bg-gradient-to-br from-purple-300 to-purple-500 rounded-lg overflow-hidden shadow-lg h-72 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="text-6xl mb-2">💡</div>
                  <p class="font-semibold">Innovation Énergétique</p>
                </div>
              </div>
            </div>

            <!-- Content Left -->
            <div class="w-full lg:w-3/5">
              <p class="text-gray-500 font-semibold mb-2">15 SET 2025</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                Les innovations en énergies renouvelables
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Pellentesque non vitae in nulla sit aliquam enim. Non volutpat tortor arcu tempus sem eget. Justo facilisi lorem gravida sed feugiat id.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-orange-400 text-white font-bold rounded-lg hover:bg-orange-500 transition-colors gap-2"
              >
                <span>Lire plus</span>
                <span>→</span>
              </a>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <div class="flex justify-center mt-16">
          <button class="px-8 py-3 border-2 border-orange-400 text-orange-400 font-bold rounded-lg hover:bg-orange-400 hover:text-white transition-colors hover:shadow-lg transform hover:-translate-y-1">
            Charger plus d'articles
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 px-4 sm:px-6 lg:px-8" v-scroll-animate>
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">Restez Informé</h2>
        <p class="text-lg text-indigo-100 mb-8">
          Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
        </p>
        <form @submit.prevent="subscribeNewsletter" class="flex gap-3 flex-col sm:flex-row max-w-md mx-auto">
          <input
            v-model="email"
            type="email"
            placeholder="Votre email"
            required
            class="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none"
          />
          <button
            type="submit"
            class="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-colors font-bold whitespace-nowrap hover:scale-105 transform"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Articles',
  setup() {
    const backgroundImageUrl = ref(new URL('../assets/images/_DSC4765-1200.webp', import.meta.url).href)
    const email = ref('')

    const subscribeNewsletter = () => {
      console.log('Inscription newsletter:', email.value)
      email.value = ''
      alert('Merci! Vérifiez votre email.')
    }

    return {
      email,
      subscribeNewsletter,
      backgroundImageUrl
    }
  }
}
</script>
