<template>
  <nav class="fixed top-12 left-0 right-0 z-50 backdrop-blur-2xl bg-gradient-to-b from-black/70 via-black/50 to-transparent shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo CREFER (Left) -->
        <router-link
          to="/"
          class="flex-shrink-0 group transition-all duration-300"
        >
          <div class="flex items-center space-x-2">
            <img 
              :src="logoUrl" 
              alt="CREFER Logo" 
              class="h-10 w-auto group-hover:scale-110 transition-all duration-300"
            />
          </div>
        </router-link>

        <!-- Desktop Navigation Links (Center) -->
        <div class="hidden lg:flex items-center space-x-8">
          <router-link
            to="/"
            class="relative text-yellow-400 font-medium text-sm transition-all duration-300 hover:text-yellow-300 group px-3 py-1 rounded-lg bg-black/20"
            :class="$route.path === '/' ? 'text-white bg-yellow-500 font-semibold' : 'hover:bg-black/40'"
          >
            Accueil
            <span class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"
                  :class="$route.path === '/' ? 'w-0' : ''"></span>
          </router-link>
          <router-link
            to="/admissions"
            class="relative text-yellow-400 font-medium text-sm transition-all duration-300 hover:text-yellow-300 group px-3 py-1 rounded-lg bg-black/20"
            :class="$route.path === '/admissions' ? 'text-white bg-yellow-500 font-semibold' : 'hover:bg-black/40'"
          >
            Admissions
            <span class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"
                  :class="$route.path === '/admissions' ? 'w-0' : ''"></span>
          </router-link>
          <router-link
            to="/about"
            class="relative text-yellow-400 font-medium text-sm transition-all duration-300 hover:text-yellow-300 group px-3 py-1 rounded-lg bg-black/20"
            :class="$route.path === '/about' ? 'text-white bg-yellow-500 font-semibold' : 'hover:bg-black/40'"
          >
            À propos
            <span class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"
                  :class="$route.path === '/about' ? 'w-0' : ''"></span>
          </router-link>
          <router-link
            to="/gallery"
            class="relative text-yellow-400 font-medium text-sm transition-all duration-300 hover:text-yellow-300 group px-3 py-1 rounded-lg bg-black/20"
            :class="$route.path === '/gallery' ? 'text-white bg-yellow-500 font-semibold' : 'hover:bg-black/40'"
          >
            Galerie
            <span class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"
                  :class="$route.path === '/gallery' ? 'w-0' : ''"></span>
          </router-link>
          <router-link
            to="/contact"
            class="relative text-yellow-400 font-medium text-sm transition-all duration-300 hover:text-yellow-300 group px-3 py-1 rounded-lg bg-black/20"
            :class="$route.path === '/contact' ? 'text-white bg-yellow-500 font-semibold' : 'hover:bg-black/40'"
          >
            Contact
            <span class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"
                  :class="$route.path === '/contact' ? 'w-0' : ''"></span>
          </router-link>
          <router-link
            to="/articles"
            class="relative text-yellow-400 font-medium text-sm transition-all duration-300 hover:text-yellow-300 group px-3 py-1 rounded-lg bg-black/20"
            :class="$route.path === '/articles' ? 'text-white bg-yellow-500 font-semibold' : 'hover:bg-black/40'"
          >
            Actualités
            <span class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"
                  :class="$route.path === '/articles' ? 'w-0' : ''"></span>
          </router-link>
        </div>

        <!-- CTA Button (Right) -->
        <div class="hidden lg:block">
          <router-link
            to="/admissions"
            class="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-sm"
          >
            Candidater
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isOpen = !isOpen"
          class="lg:hidden inline-flex items-center justify-center p-2.5 rounded-lg hover:bg-white/20 focus:outline-none transition-colors duration-300"
        >
          <svg
            v-if="!isOpen"
            class="h-6 w-6 text-white"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="h-6 w-6 text-white"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="menu">
        <div v-if="isOpen" class="lg:hidden pb-4 space-y-1">
          <router-link
            to="/"
            class="block px-4 py-3 rounded-lg hover:bg-yellow-50 text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium text-sm"
            :class="$route.path === '/' ? 'bg-yellow-50 text-yellow-500' : ''"
            @click="isOpen = false"
          >
            Accueil
          </router-link>
          <router-link
            to="/admissions"
            class="block px-4 py-3 rounded-lg hover:bg-yellow-50 text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium text-sm"
            :class="$route.path === '/admissions' ? 'bg-yellow-50 text-yellow-500' : ''"
            @click="isOpen = false"
          >
            Admissions
          </router-link>
          <router-link
            to="/about"
            class="block px-4 py-3 rounded-lg hover:bg-yellow-50 text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium text-sm"
            :class="$route.path === '/about' ? 'bg-yellow-50 text-yellow-500' : ''"
            @click="isOpen = false"
          >
            À propos
          </router-link>
          <router-link
            to="/gallery"
            class="block px-4 py-3 rounded-lg hover:bg-yellow-50 text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium text-sm"
            :class="$route.path === '/gallery' ? 'bg-yellow-50 text-yellow-500' : ''"
            @click="isOpen = false"
          >
            Galerie
          </router-link>
          <router-link
            to="/contact"
            class="block px-4 py-3 rounded-lg hover:bg-yellow-50 text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium text-sm"
            :class="$route.path === '/contact' ? 'bg-yellow-50 text-yellow-500' : ''"
            @click="isOpen = false"
          >
            Contact
          </router-link>
          <router-link
            to="/articles"
            class="block px-4 py-3 rounded-lg hover:bg-yellow-50 text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium text-sm"
            :class="$route.path === '/articles' ? 'bg-yellow-50 text-yellow-500' : ''"
            @click="isOpen = false"
          >
            Actualités
          </router-link>
          <router-link
            to="/admissions"
            class="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm"
            @click="isOpen = false"
          >
            Candidater
          </router-link>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Navigation',
  setup() {
    const isOpen = ref(false)
    const logoUrl = new URL('../assets/images/crefer Logo2.png', import.meta.url).href

    return {
      isOpen,
      logoUrl
    }
  }
}
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}

.menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
