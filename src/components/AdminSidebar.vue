<template>
  <div class="fixed left-0 top-0 h-screen w-64 bg-black border-r-2 border-yellow-400 flex flex-col">
    <!-- Logo/Branding -->
    <div class="p-6 border-b-2 border-yellow-400">
      <h1 class="text-2xl font-bold text-yellow-400">CREFER</h1>
      <p class="text-xs text-gray-400 mt-1">Admin Panel</p>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 overflow-y-auto p-4 space-y-2">
      <!-- Dashboard -->
      <router-link
        to="/admin/dashboard"
        class="block px-4 py-3 rounded-lg transition-all"
        :class="
          $route.path === '/admin/dashboard'
            ? 'bg-yellow-400 text-black shadow-lg font-bold'
            : 'text-gray-300 hover:bg-gray-800 hover:text-yellow-400'
        "
      >
        <div class="flex items-center gap-3">
          <span class="text-lg">📊</span>
          <span class="font-medium">Dashboard</span>
        </div>
      </router-link>

      <!-- Pages Section -->
      <div class="pt-4">
        <div class="px-4 py-2 text-xs font-bold text-yellow-400 uppercase tracking-wider border-b-2 border-yellow-400 mb-2">Pages</div>

        <!-- Pages List -->
        <div v-if="loading" class="px-4 py-2 text-sm text-gray-400">Chargement...</div>
        <div v-else class="space-y-1">
          <router-link
            v-for="page in pages"
            :key="page.id"
            :to="`/admin/pages/${page.id}`"
            class="block px-4 py-2 rounded ml-2 text-sm transition-all"
            :class="
              $route.params.pageId === page.id
                ? 'bg-yellow-400 text-black font-bold'
                : 'text-gray-300 hover:bg-gray-800 hover:text-yellow-400'
            "
          >
            <div class="flex items-center gap-2">
              <span>📄</span>
              <span class="truncate">{{ page.title }}</span>
              <span class="text-xs bg-gray-700 px-2 py-1 rounded ml-auto">
                {{ (page.sections || {}) | length }}
              </span>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Articles Section -->
      <div class="pt-4 space-y-2 border-t-2 border-yellow-400 mt-4">
        <router-link
          to="/admin/articles"
          class="block px-4 py-3 rounded-lg transition-all"
          :class="
            $route.path === '/admin/articles'
              ? 'bg-yellow-400 text-black shadow-lg font-bold'
              : 'text-gray-300 hover:bg-gray-800 hover:text-yellow-400'
          "
        >
          <div class="flex items-center gap-3">
            <span class="text-lg">📰</span>
            <span class="font-medium">Articles</span>
          </div>
        </router-link>

        <router-link
          to="/admin/videos"
          class="block px-4 py-3 rounded-lg transition-all"
          :class="
            $route.path === '/admin/videos'
              ? 'bg-yellow-400 text-black shadow-lg font-bold'
              : 'text-gray-300 hover:bg-gray-800 hover:text-yellow-400'
          "
        >
          <div class="flex items-center gap-3">
            <span class="text-lg">🎥</span>
            <span class="font-medium">Vidéos YouTube</span>
          </div>
        </router-link>
      </div>

      <!-- Other Sections -->
      <div class="pt-4 space-y-1 border-t-2 border-yellow-400 mt-4">
        <router-link
          to="/admin/media"
          class="block px-4 py-3 rounded-lg transition-all text-gray-300 hover:bg-gray-800 hover:text-yellow-400"
        >
          <div class="flex items-center gap-3">
            <span class="text-lg">🖼️</span>
            <span class="font-medium">Médias</span>
          </div>
        </router-link>

        <router-link
          to="/admin/settings"
          class="block px-4 py-3 rounded-lg transition-all text-gray-300 hover:bg-gray-800 hover:text-yellow-400"
        >
          <div class="flex items-center gap-3">
            <span class="text-lg">⚙️</span>
            <span class="font-medium">Paramètres</span>
          </div>
        </router-link>
      </div>
    </nav>

    <!-- User Info & Logout -->
    <div class="border-t-2 border-yellow-400 p-4 space-y-3">
      <div class="text-sm">
        <p class="text-gray-400">Connecté en tant que:</p>
        <p class="text-yellow-400 font-medium truncate">{{ currentUser?.email || 'Admin' }}</p>
      </div>

      <button
        @click="handleLogout"
        class="w-full bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-lg font-bold transition-colors text-sm"
      >
        Déconnexion
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { currentUser, logout } from '../services/authService';
import { getAllPages } from '../services/contentService';

export default {
  name: 'AdminSidebar',
  setup() {
    const router = useRouter();
    const pages = ref([]);
    const loading = ref(true);

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
      handleLogout,
    };
  },
};
</script>
