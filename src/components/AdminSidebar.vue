<template>
  <aside class="fixed left-0 top-0 h-screen w-64 bg-gray-950 flex flex-col z-40 shadow-2xl">
    <!-- Brand -->
    <div class="flex items-center gap-3 px-5 py-5 border-b border-gray-800">
      <div class="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
        <span class="text-gray-900 font-black text-sm tracking-tight">CR</span>
      </div>
      <div>
        <h1 class="text-white font-bold text-base leading-none">CREFER</h1>
        <p class="text-gray-500 text-xs mt-0.5">Panneau d'administration</p>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
      <!-- Dashboard -->
      <router-link to="/admin/dashboard" custom v-slot="{ navigate, isActive }">
        <button @click="navigate" :class="['flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all duration-150 font-medium text-sm', isActive ? 'bg-yellow-400 text-gray-900 shadow-md' : 'text-gray-400 hover:bg-gray-800 hover:text-white']">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span>Tableau de bord</span>
        </button>
      </router-link>

      <!-- Section: Contenu -->
      <div class="px-3 pt-5 pb-2">
        <span class="text-xs font-bold text-gray-600 uppercase tracking-widest">Contenu</span>
      </div>

      <router-link to="/admin/articles" custom v-slot="{ navigate, isActive }">
        <button @click="navigate" :class="['flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all duration-150 font-medium text-sm', isActive ? 'bg-yellow-400 text-gray-900 shadow-md' : 'text-gray-400 hover:bg-gray-800 hover:text-white']">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <span>Articles</span>
        </button>
      </router-link>

      <router-link to="/admin/videos" custom v-slot="{ navigate, isActive }">
        <button @click="navigate" :class="['flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all duration-150 font-medium text-sm', isActive ? 'bg-yellow-400 text-gray-900 shadow-md' : 'text-gray-400 hover:bg-gray-800 hover:text-white']">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>Vidéos YouTube</span>
        </button>
      </router-link>

      <router-link to="/admin/gallery" custom v-slot="{ navigate, isActive }">
        <button @click="navigate" :class="['flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all duration-150 font-medium text-sm', isActive ? 'bg-yellow-400 text-gray-900 shadow-md' : 'text-gray-400 hover:bg-gray-800 hover:text-white']">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          <span>Galerie Photos</span>
        </button>
      </router-link>

      <router-link to="/admin/admissions" custom v-slot="{ navigate, isActive }">
        <button @click="navigate" :class="['flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all duration-150 font-medium text-sm', isActive ? 'bg-yellow-400 text-gray-900 shadow-md' : 'text-gray-400 hover:bg-gray-800 hover:text-white']">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <span>Admissions</span>
        </button>
      </router-link>

      <!-- Section: Éditeur -->
      <div class="px-3 pt-5 pb-2">
        <span class="text-xs font-bold text-gray-600 uppercase tracking-widest">Éditeur du site</span>
      </div>

      <router-link to="/admin/site-editor" custom v-slot="{ navigate, isActive }">
        <button @click="navigate" :class="['flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all duration-150 font-medium text-sm', isActive ? 'bg-yellow-400 text-gray-900 shadow-md' : 'text-gray-400 hover:bg-gray-800 hover:text-white']">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
          </svg>
          <span>Contenus des pages</span>
        </button>
      </router-link>

      <!-- Section: Pages du site -->
      <div class="px-3 pt-5 pb-2">
        <span class="text-xs font-bold text-gray-600 uppercase tracking-widest">Pages du site</span>
      </div>

      <!-- Pages Loading -->
      <div v-if="loading" class="space-y-1 px-1">
        <div v-for="i in 4" :key="i" class="flex items-center gap-2 px-3 py-2">
          <div class="w-4 h-4 rounded bg-gray-800 animate-pulse flex-shrink-0"></div>
          <div class="h-3 bg-gray-800 rounded animate-pulse flex-1"></div>
        </div>
      </div>

      <!-- Pages List -->
      <template v-else>
        <router-link
          v-for="page in pages"
          :key="page.id"
          :to="`/admin/pages/${page.id}`"
          custom
          v-slot="{ navigate, isActive }"
        >
          <button
            @click="navigate"
            :class="['flex items-center gap-2.5 w-full px-3 py-2 rounded-lg transition-all duration-150 text-sm ml-1', isActive ? 'bg-yellow-400/15 text-yellow-400 border-l-2 border-yellow-400' : 'text-gray-500 hover:bg-gray-800 hover:text-gray-300']"
          >
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            <span class="truncate">{{ page.title }}</span>
          </button>
        </router-link>
      </template>
    </nav>

    <!-- View Site Link -->
    <div class="px-3 pb-2">
      <a
        href="/"
        target="_blank"
        class="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-800 hover:text-gray-300 transition-all text-xs font-medium"
      >
        <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
        Voir le site public
      </a>
    </div>

    <!-- User / Logout -->
    <div class="border-t border-gray-800 p-4 space-y-3">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
          <span class="text-gray-900 font-black text-xs">{{ userInitial }}</span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-white text-xs font-semibold truncate">{{ currentUser?.email || 'Admin' }}</p>
          <p class="text-gray-500 text-xs">Administrateur</p>
        </div>
      </div>
      <button
        @click="handleLogout"
        class="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white rounded-lg transition-all duration-200 text-xs font-semibold"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
        </svg>
        Déconnexion
      </button>
    </div>
  </aside>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { currentUser, logout } from '../services/authService';
import { getAllPages } from '../services/contentService';

export default {
  name: 'AdminSidebar',
  setup() {
    const router = useRouter();
    const pages = ref([]);
    const loading = ref(true);

    const userInitial = computed(() => {
      const email = currentUser.value?.email || '';
      return email.charAt(0).toUpperCase() || 'A';
    });

    const loadPages = async () => {
      try {
        loading.value = true;
        pages.value = await getAllPages();
      } catch (error) {
        console.error('Error loading pages:', error);
      } finally {
        loading.value = false;
      }
    };

    const handleLogout = async () => {
      try {
        await logout();
        router.push('/admin/login');
      } catch (error) {
        console.error('Logout error:', error);
      }
    };

    onMounted(() => {
      loadPages();
    });

    return {
      currentUser,
      pages,
      loading,
      userInitial,
      handleLogout,
    };
  },
};
</script>
