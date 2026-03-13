<template>
  <div class="min-h-screen bg-white">
    <!-- Sidebar Navigation -->
    <AdminSidebar />

    <!-- Main Content -->
    <div class="ml-64 p-8">
      <div class="max-w-6xl">
        <!-- Welcome Section -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-black mb-2">Bienvenue au Dashboard</h1>
          <p class="text-gray-600">Gérez votre contenu CREFER facilement</p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div class="bg-white rounded-lg p-6 border-2 border-yellow-400 hover:shadow-lg transition-all">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-600 text-sm font-semibold">Pages</p>
                <p class="text-3xl font-bold text-black mt-2">{{ pageStats.total }}</p>
              </div>
              <span class="text-4xl">📄</span>
            </div>
          </div>

          <div class="bg-white rounded-lg p-6 border-2 border-yellow-400 hover:shadow-lg transition-all">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-600 text-sm font-semibold">Articles</p>
                <p class="text-3xl font-bold text-black mt-2">{{ articleStats.total }}</p>
              </div>
              <span class="text-4xl">📰</span>
            </div>
          </div>

          <div class="bg-white rounded-lg p-6 border-2 border-yellow-400 hover:shadow-lg transition-all">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-600 text-sm font-semibold">Vidéos</p>
                <p class="text-3xl font-bold text-black mt-2">{{ videoStats.total }}</p>
              </div>
              <span class="text-4xl">🎥</span>
            </div>
          </div>

          <div class="bg-white rounded-lg p-6 border-2 border-yellow-400 hover:shadow-lg transition-all">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-600 text-sm font-semibold">Statut</p>
                <p class="text-xl font-bold text-green-600 mt-2">✓ Actif</p>
              </div>
              <span class="text-4xl">✅</span>
            </div>
          </div>
        </div>

        <!-- Quick Start Guide -->
        <div class="bg-white rounded-lg p-6 border-2 border-yellow-400 mb-8">
          <h2 class="text-2xl font-bold text-black mb-4">🚀 Démarrage rapide</h2>

          <div class="space-y-4">
            <div class="flex gap-4 pb-4 border-b-2 border-yellow-200">
              <div class="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 text-black font-bold text-sm">
                1
              </div>
              <div>
                <p class="font-medium text-black">Gérer les articles</p>
                <p class="text-sm text-gray-600 mt-1">Créez, modifiez et supprimez des articles dans la section Articles</p>
              </div>
            </div>

            <div class="flex gap-4 pb-4 border-b-2 border-yellow-200">
              <div class="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 text-black font-bold text-sm">
                2
              </div>
              <div>
                <p class="font-medium text-black">Gérer les vidéos YouTube</p>
                <p class="text-sm text-gray-600 mt-1">Ajoutez et gérez les vidéos dans la section "Echo du CREFER"</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 text-black font-bold text-sm">
                3
              </div>
              <div>
                <p class="font-medium text-black">Éditer les pages</p>
                <p class="text-sm text-gray-600 mt-1">Modifiez le contenu des pages sélectionnées</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Initialize Firebase Section -->
        <div class="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-lg p-6 text-black border-2 border-black">
          <h3 class="text-xl font-bold mb-2">Initialiser les pages par défaut</h3>
          <p class="text-gray-800 mb-4">
            Cliquez ci-dessous pour créer la structure de base des pages (home, about, articles, etc.)
          </p>
          <button
            @click="initializeFirebase"
            :disabled="initializing"
            class="bg-black text-yellow-400 hover:bg-gray-800 disabled:opacity-50 px-6 py-3 rounded-lg font-bold transition-colors"
          >
            {{ initializing ? '⏳ Initialisation en cours...' : '🚀 Initialiser Firebase' }}
          </button>
        </div>

        <!-- Import Articles Section -->
        <div class="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-lg p-6 text-black border-2 border-black mt-8">
          <h3 class="text-xl font-bold mb-2">Importer les articles par défaut</h3>
          <p class="text-gray-800 mb-4">
            Importez les 5 articles historiques (Soutenance, Promotion, Étudiants, Stage, Examen) dans Firebase
          </p>
          <button
            @click="importArticles"
            :disabled="importingArticles"
            class="bg-black text-yellow-400 hover:bg-gray-800 disabled:opacity-50 px-6 py-3 rounded-lg font-bold transition-colors"
          >
            {{ importingArticles ? '⏳ Import en cours...' : '📰 Importer les articles' }}
          </button>
        </div>

        <!-- Import Videos Section -->
        <div class="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-lg p-6 text-black border-2 border-black mt-8">
          <h3 class="text-xl font-bold mb-2">Importer les vidéos par défaut</h3>
          <p class="text-gray-800 mb-4">
            Importez les 2 vidéos YouTube (Excellence et Formation) dans Firebase
          </p>
          <button
            @click="importVideos"
            :disabled="importingVideos"
            class="bg-black text-yellow-400 hover:bg-gray-800 disabled:opacity-50 px-6 py-3 rounded-lg font-bold transition-colors"
          >
            {{ importingVideos ? '⏳ Import en cours...' : '🎥 Importer les vidéos' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import AdminSidebar from '../components/AdminSidebar.vue';
import { getAllPages, initializeDefaultPages } from '../services/contentService';
import { importDefaultArticles, useArticles } from '../services/articlesService';
import { useVideosCRUD, importDefaultVideos } from '../services/videosServiceCRUD';

export default {
  name: 'AdminDashboard',
  components: {
    AdminSidebar,
  },
  setup() {
    const pages = ref([]);
    const loading = ref(true);
    const initializing = ref(false);
    const importingArticles = ref(false);
    const importingVideos = ref(false);

    const { articles, fetchArticles } = useArticles();
    const { videos, fetchVideos } = useVideosCRUD();

    const pageStats = computed(() => {
      let totalSections = 0;
      pages.value.forEach((page) => {
        totalSections += Object.keys(page.sections || {}).length;
      });

      return {
        total: pages.value.length,
        sections: totalSections,
      };
    });

    const articleStats = computed(() => {
      return {
        total: articles.value.length,
      };
    });

    const videoStats = computed(() => {
      return {
        total: videos.value.length,
      };
    });

    const loadPages = async () => {
      try {
        pages.value = await getAllPages();
      } catch (error) {
        console.error('Error loading pages:', error);
      }
    };

    const loadArticles = async () => {
      try {
        await fetchArticles();
      } catch (error) {
        console.error('Error loading articles:', error);
      }
    };

    const loadVideos = async () => {
      try {
        await fetchVideos();
      } catch (error) {
        console.error('Error loading videos:', error);
      }
    };

    const initializeFirebase = async () => {
      if (!confirm('Êtes-vous sûr? Cela créera les pages par défaut')) return;

      try {
        initializing.value = true;
        await initializeDefaultPages();
        await loadPages();
        alert('Firebase initialisé avec succès!');
      } catch (error) {
        console.error('Initialization error:', error);
        alert('Erreur lors de l\'initialisation');
      } finally {
        initializing.value = false;
      }
    };

    const importArticles = async () => {
      if (!confirm('Êtes-vous sûr? Cela importera 5 articles par défaut dans Firebase')) return;

      try {
        importingArticles.value = true;
        const imported = await importDefaultArticles();
        alert(`✅ ${imported.length} articles importés avec succès!`);
        await loadArticles();
      } catch (error) {
        console.error('Import error:', error);
        alert('Erreur lors de l\'importation des articles');
      } finally {
        importingArticles.value = false;
      }
    };

    const importVideos = async () => {
      if (!confirm('Êtes-vous sûr? Cela importera 2 vidéos par défaut dans Firebase')) return;

      try {
        importingVideos.value = true;
        const imported = await importDefaultVideos();
        alert(`✅ ${imported.length} vidéos importées avec succès!`);
        await loadVideos();
      } catch (error) {
        console.error('Import error:', error);
        alert('Erreur lors de l\'importation des vidéos');
      } finally {
        importingVideos.value = false;
      }
    };

    onMounted(async () => {
      await loadPages();
      await loadArticles();
      await loadVideos();
      loading.value = false;
    });

    return {
      pageStats,
      articleStats,
      videoStats,
      loading,
      initializing,
      importingArticles,
      importingVideos,
      initializeFirebase,
      importArticles,
      importVideos,
    };
  },
};
</script>
