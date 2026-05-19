<template>
  <div class="min-h-screen bg-gray-50 flex">
    <AdminSidebar />

    <div class="ml-64 flex-1 flex flex-col min-h-screen">
      <!-- Top Bar -->
      <header class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-30">
        <div>
          <h1 class="text-xl font-bold text-gray-900">Pages du site</h1>
          <p class="text-xs text-gray-500 mt-0.5">Sélectionnez une page pour modifier son contenu</p>
        </div>
        <div class="flex items-center gap-2 text-xs text-gray-500">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
          <span>{{ pages.length }} page(s)</span>
        </div>
      </header>

      <main class="flex-1 px-8 py-8">
        <!-- Loading -->
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="i in 6" :key="i" class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-pulse">
            <div class="flex items-start justify-between mb-4">
              <div class="flex-1">
                <div class="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div class="h-3 bg-gray-100 rounded w-1/2"></div>
              </div>
              <div class="w-10 h-10 bg-gray-200 rounded-lg ml-3"></div>
            </div>
            <div class="h-3 bg-gray-100 rounded w-1/3 mb-4"></div>
            <div class="flex gap-2">
              <div class="flex-1 h-9 bg-gray-200 rounded-lg"></div>
              <div class="w-9 h-9 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>

        <!-- Pages Grid -->
        <div v-else-if="pages.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="page in pages"
            :key="page.id"
            class="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-yellow-300 transition-all cursor-pointer"
            @click="goToEditPage(page.id)"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="flex-1 min-w-0">
                <h3 class="text-base font-bold text-gray-900 truncate">{{ page.title }}</h3>
                <p class="text-sm text-gray-500 mt-1 line-clamp-2">{{ page.description || 'Page du site CREFER' }}</p>
              </div>
              <div class="w-10 h-10 bg-yellow-100 group-hover:bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 ml-3 transition-colors">
                <svg class="w-5 h-5 text-yellow-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>

            <!-- Sections count -->
            <div class="flex items-center gap-2 mb-5">
              <span class="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7"/>
                </svg>
                {{ Object.keys(page.sections || {}).length }} section(s)
              </span>
            </div>

            <!-- Actions -->
            <div class="flex gap-2">
              <button
                class="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all"
                @click.stop="goToEditPage(page.id)"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
                Éditer
              </button>
              <button
                class="w-10 h-10 inline-flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 rounded-lg transition-all border border-gray-200 hover:border-red-200"
                @click.stop="deletePage(page.id)"
                title="Supprimer la page"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="flex flex-col items-center justify-center py-24 text-center">
          <div class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Aucune page trouvée</h3>
          <p class="text-gray-500 text-sm">Les pages du site apparaîtront ici une fois initialisées.</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AdminSidebar from '../components/AdminSidebar.vue';
import { getAllPages, deletePage } from '../services/contentService';

export default {
  name: 'AdminPages',
  components: { AdminSidebar },
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

    const goToEditPage = (pageId) => {
      router.push(`/admin/pages/${pageId}`);
    };

    const deletePage_ = async (pageId) => {
      if (!confirm('Êtes-vous sûr de vouloir supprimer cette page ?')) return;
      try {
        await deletePage(pageId);
        pages.value = pages.value.filter(p => p.id !== pageId);
      } catch (error) {
        console.error('Error deleting page:', error);
        alert('Erreur lors de la suppression de la page');
      }
    };

    onMounted(() => {
      loadPages();
    });

    return {
      pages,
      loading,
      goToEditPage,
      deletePage: deletePage_,
    };
  },
};
</script>
