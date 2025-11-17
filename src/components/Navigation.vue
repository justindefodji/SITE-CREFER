<template>
  <nav class="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-500 text-white fixed top-9 left-0 right-0 z-50 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-24">
        <!-- Logo CREFER (Left) -->
        <router-link
          to="/"
          class="flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          <div class="flex items-center space-x-2">
            <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span class="text-blue-900 font-bold text-2xl">⚡</span>
            </div>
            <div>
              <div class="font-bold text-xl text-white">CREFER</div>
              <div class="text-xs text-blue-100 leading-tight">Centre d'Excellence pour la Formation<br/>en Énergies Renouvelables</div>
            </div>
          </div>
        </router-link>

        <!-- Desktop Navigation Links (Center) -->
        <div class="hidden lg:flex items-center space-x-1">
          <router-link
            to="/"
            class="px-4 py-2 rounded-t-lg transition-colors font-medium border-b-4"
            :class="$route.path === '/' ? 'border-orange-400 bg-blue-800/50' : 'border-transparent hover:bg-blue-800/30'"
          >
            Accueil
          </router-link>
          <router-link
            to="/admissions"
            class="px-4 py-2 rounded-t-lg transition-colors font-medium border-b-4"
            :class="$route.path === '/admissions' ? 'border-orange-400 bg-blue-800/50' : 'border-transparent hover:bg-blue-800/30'"
          >
            Admissions
          </router-link>
          <router-link
            to="/about"
            class="px-4 py-2 rounded-t-lg transition-colors font-medium border-b-4"
            :class="$route.path === '/about' ? 'border-orange-400 bg-blue-800/50' : 'border-transparent hover:bg-blue-800/30'"
          >
            À propos
          </router-link>
          <router-link
            to="/gallery"
            class="px-4 py-2 rounded-t-lg transition-colors font-medium border-b-4"
            :class="$route.path === '/gallery' ? 'border-orange-400 bg-blue-800/50' : 'border-transparent hover:bg-blue-800/30'"
          >
            Galerie
          </router-link>
          <router-link
            to="/contact"
            class="px-4 py-2 rounded-t-lg transition-colors font-medium border-b-4"
            :class="$route.path === '/contact' ? 'border-orange-400 bg-blue-800/50' : 'border-transparent hover:bg-blue-800/30'"
          >
            Contact
          </router-link>
          <router-link
            to="/articles"
            class="px-4 py-2 rounded-t-lg transition-colors font-medium border-b-4"
            :class="$route.path === '/articles' ? 'border-orange-400 bg-blue-800/50' : 'border-transparent hover:bg-blue-800/30'"
          >
            Actualités
          </router-link>
        </div>

        <!-- CTA Button (Right) -->
        <div class="hidden lg:block">
          <button class="px-8 py-3 bg-orange-400 text-blue-900 rounded-lg hover:bg-orange-300 transition-colors font-bold text-lg shadow-lg">
            Inscrivez-vous
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isOpen = !isOpen"
          class="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800/50 focus:outline-none transition-colors"
        >
          <svg
            v-if="!isOpen"
            class="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="lg:hidden pb-4 space-y-2">
        <router-link
          to="/"
          class="block px-3 py-2 rounded-md hover:bg-blue-800/50 transition-colors font-medium"
          @click="isOpen = false"
        >
          Accueil
        </router-link>
        <router-link
          to="/admissions"
          class="block px-3 py-2 rounded-md hover:bg-blue-800/50 transition-colors font-medium"
          @click="isOpen = false"
        >
          Admissions
        </router-link>
        <router-link
          to="/about"
          class="block px-3 py-2 rounded-md hover:bg-blue-800/50 transition-colors font-medium"
          @click="isOpen = false"
        >
          À propos
        </router-link>
        <router-link
          to="/gallery"
          class="block px-3 py-2 rounded-md hover:bg-blue-800/50 transition-colors font-medium"
          @click="isOpen = false"
        >
          Galerie
        </router-link>
        <router-link
          to="/contact"
          class="block px-3 py-2 rounded-md hover:bg-blue-800/50 transition-colors font-medium"
          @click="isOpen = false"
        >
          Contact
        </router-link>
        <router-link
          to="/articles"
          class="block px-3 py-2 rounded-md hover:bg-blue-800/50 transition-colors font-medium"
          @click="isOpen = false"
        >
          Actualités
        </router-link>
        <button class="w-full mt-4 px-6 py-2 bg-orange-400 text-blue-900 rounded-lg hover:bg-orange-300 transition-colors font-bold">
          Inscrivez-vous
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Navigation',
  setup() {
    const isOpen = ref(false)

    return {
      isOpen
    }
  }
}
</script>
