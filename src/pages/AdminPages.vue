<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Sidebar Navigation -->
    <AdminSidebar />

    <!-- Main Content -->
    <div class="ml-64 p-8">
      <div class="max-w-6xl">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-white mb-2">Pages & Sections</h1>
          <p class="text-slate-400">Gestion du contenu des pages</p>
        </div>

        <!-- Pages Grid -->
        <div v-if="!loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="page in pages"
            :key="page.id"
            class="group bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all cursor-pointer border border-slate-700 hover:border-red-500 hover:shadow-lg hover:shadow-red-600/20"
            @click="goToEditPage(page.id)"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-white">{{ page.title }}</h3>
                <p class="text-sm text-slate-400 mt-1">{{ page.description }}</p>
              </div>
              <span class="text-3xl group-hover:scale-110 transition-transform">📄</span>
            </div>

            <!-- Sections Count -->
            <div class="flex items-center gap-2 text-sm text-slate-300 mb-4">
              <span class="bg-slate-700 px-3 py-1 rounded-full">
                {{ Object.keys(page.sections || {}).length }} sections
              </span>
            </div>

            <!-- Actions -->
            <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                class="flex-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                @click.stop="goToEditPage(page.id)"
              >
                Éditer
              </button>
              <button
                class="flex-1 bg-slate-700 hover:bg-red-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                @click.stop="deletePage(page.id)"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>

        <!-- Loading State -->
        <div v-else class="flex items-center justify-center h-64">
          <div class="text-center">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            <p class="text-slate-400 mt-4">Chargement des pages...</p>
          </div>
        </div>
      </div>
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
  components: {
    AdminSidebar,
  },
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
        alert('Erreur lors du chargement des pages');
      } finally {
        loading.value = false;
      }
    };

    const goToEditPage = (pageId) => {
      router.push(`/admin/pages/${pageId}`);
    };

    const deletePage_ = async (pageId) => {
      if (!confirm('Êtes-vous sûr de vouloir supprimer cette page?')) return;

      try {
        await deletePage(pageId);
        pages.value = pages.value.filter((p) => p.id !== pageId);
        alert('Page supprimée avec succès');
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
