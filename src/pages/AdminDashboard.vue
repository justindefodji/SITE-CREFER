<template>
  <div class="min-h-screen bg-gray-50 flex">
    <AdminSidebar />

    <!-- Main Content -->
    <div class="ml-64 flex-1 flex flex-col min-h-screen">

      <!-- Top Bar -->
      <header class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-30">
        <div>
          <h1 class="text-xl font-bold text-gray-900">Tableau de bord</h1>
          <p class="text-xs text-gray-500 mt-0.5">{{ currentDate }}</p>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span class="text-xs text-gray-500 font-medium">Système opérationnel</span>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 px-8 py-8">

        <!-- Welcome Banner -->
        <div class="relative bg-gray-900 rounded-2xl overflow-hidden mb-8 p-8">
          <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
          <div class="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
          <div class="absolute bottom-0 left-32 w-32 h-32 bg-yellow-400/5 rounded-full translate-y-1/2"></div>
          <div class="relative z-10 flex items-center justify-between">
            <div>
              <p class="text-yellow-400 text-sm font-semibold mb-2">Bienvenue</p>
              <h2 class="text-3xl font-bold text-white mb-2">Administration CREFER</h2>
              <p class="text-gray-400 text-sm max-w-md">Gérez le contenu de votre site — articles, vidéos, galerie et admissions depuis ce panneau centralisé.</p>
            </div>
            <div class="hidden lg:flex items-center gap-4">
              <div class="text-center">
                <div class="text-4xl font-black text-yellow-400">{{ totalContent }}</div>
                <div class="text-gray-400 text-xs mt-1">Contenus total</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          <!-- Pages -->
          <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between mb-3">
              <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
            <div class="text-2xl font-black text-gray-900">{{ pageStats.total }}</div>
            <div class="text-xs text-gray-500 mt-1 font-medium">Pages</div>
          </div>

          <!-- Articles -->
          <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between mb-3">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
            </div>
            <div class="text-2xl font-black text-gray-900">{{ articleStats.total }}</div>
            <div class="text-xs text-gray-500 mt-1 font-medium">Articles</div>
          </div>

          <!-- Videos -->
          <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between mb-3">
              <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div class="text-2xl font-black text-gray-900">{{ videoStats.total }}</div>
            <div class="text-xs text-gray-500 mt-1 font-medium">Vidéos</div>
          </div>

          <!-- Gallery -->
          <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between mb-3">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
            <div class="text-2xl font-black text-gray-900">{{ galleryStats.total }}</div>
            <div class="text-xs text-gray-500 mt-1 font-medium">Photos</div>
          </div>

          <!-- Admission Images -->
          <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between mb-3">
              <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.869v6.262a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                </svg>
              </div>
            </div>
            <div class="text-2xl font-black text-gray-900">{{ admissionsStats.totalImages }}</div>
            <div class="text-xs text-gray-500 mt-1 font-medium">Img. admis.</div>
          </div>

          <!-- Documents -->
          <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between mb-3">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
            <div class="text-2xl font-black text-gray-900">{{ admissionsStats.totalDocuments }}</div>
            <div class="text-xs text-gray-500 mt-1 font-medium">Documents PDF</div>
          </div>
        </div>

        <!-- Two Column Layout -->
        <div class="grid lg:grid-cols-2 gap-6">

          <!-- Quick Actions -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100">
              <h3 class="font-bold text-gray-900 text-sm">Actions rapides</h3>
              <p class="text-xs text-gray-500 mt-0.5">Accéder directement aux sections</p>
            </div>
            <div class="p-4 grid grid-cols-2 gap-3">
              <router-link
                to="/admin/articles"
                class="group flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-all"
              >
                <div class="w-10 h-10 bg-blue-100 group-hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                  <svg class="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-900">Article</p>
                  <p class="text-xs text-gray-500">Créer</p>
                </div>
              </router-link>

              <router-link
                to="/admin/videos"
                class="group flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-red-50 border border-transparent hover:border-red-200 transition-all"
              >
                <div class="w-10 h-10 bg-red-100 group-hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                  <svg class="w-5 h-5 text-red-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-900">Vidéo</p>
                  <p class="text-xs text-gray-500">Ajouter</p>
                </div>
              </router-link>

              <router-link
                to="/admin/gallery"
                class="group flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-green-50 border border-transparent hover:border-green-200 transition-all"
              >
                <div class="w-10 h-10 bg-green-100 group-hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                  <svg class="w-5 h-5 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-900">Photo</p>
                  <p class="text-xs text-gray-500">Galerie</p>
                </div>
              </router-link>

              <router-link
                to="/admin/admissions"
                class="group flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 border border-transparent hover:border-orange-200 transition-all"
              >
                <div class="w-10 h-10 bg-orange-100 group-hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                  <svg class="w-5 h-5 text-orange-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-900">Document</p>
                  <p class="text-xs text-gray-500">Admissions</p>
                </div>
              </router-link>
            </div>
          </div>

          <!-- Content Overview -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100">
              <h3 class="font-bold text-gray-900 text-sm">Vue d'ensemble du contenu</h3>
              <p class="text-xs text-gray-500 mt-0.5">Répartition par section</p>
            </div>
            <div class="p-4 space-y-3">
              <!-- Articles bar -->
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs font-semibold text-gray-700">Articles</span>
                  <span class="text-xs text-gray-500">{{ articleStats.total }}</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-2">
                  <div
                    class="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                    :style="{ width: totalContent > 0 ? (articleStats.total / totalContent * 100) + '%' : '0%' }"
                  ></div>
                </div>
              </div>

              <!-- Videos bar -->
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs font-semibold text-gray-700">Vidéos</span>
                  <span class="text-xs text-gray-500">{{ videoStats.total }}</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-2">
                  <div
                    class="bg-red-500 h-2 rounded-full transition-all duration-1000"
                    :style="{ width: totalContent > 0 ? (videoStats.total / totalContent * 100) + '%' : '0%' }"
                  ></div>
                </div>
              </div>

              <!-- Gallery bar -->
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs font-semibold text-gray-700">Galerie</span>
                  <span class="text-xs text-gray-500">{{ galleryStats.total }}</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-2">
                  <div
                    class="bg-green-500 h-2 rounded-full transition-all duration-1000"
                    :style="{ width: totalContent > 0 ? (galleryStats.total / totalContent * 100) + '%' : '0%' }"
                  ></div>
                </div>
              </div>

              <!-- Admissions bar -->
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs font-semibold text-gray-700">Admissions (images + docs)</span>
                  <span class="text-xs text-gray-500">{{ admissionsStats.totalImages + admissionsStats.totalDocuments }}</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-2">
                  <div
                    class="bg-orange-500 h-2 rounded-full transition-all duration-1000"
                    :style="{ width: totalContent > 0 ? ((admissionsStats.totalImages + admissionsStats.totalDocuments) / totalContent * 100) + '%' : '0%' }"
                  ></div>
                </div>
              </div>

              <!-- Loading skeleton -->
              <div v-if="loading" class="absolute inset-0 bg-white/80 flex items-center justify-center rounded-xl">
                <div class="w-6 h-6 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          </div>

          <!-- Pages rapides -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden lg:col-span-2">
            <div class="px-6 py-4 border-b border-gray-100">
              <h3 class="font-bold text-gray-900 text-sm">Éditeur de pages</h3>
              <p class="text-xs text-gray-500 mt-0.5">Modifier directement le contenu des pages du site</p>
            </div>
            <div v-if="loading" class="p-6 flex items-center justify-center">
              <div class="w-6 h-6 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div v-else class="p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <router-link
                v-for="page in pages"
                :key="page.id"
                :to="`/admin/pages/${page.id}`"
                class="group flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-yellow-50 border border-transparent hover:border-yellow-300 transition-all"
              >
                <div class="w-9 h-9 bg-yellow-100 group-hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                  <svg class="w-4 h-4 text-yellow-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                </div>
                <div class="min-w-0">
                  <p class="text-sm font-semibold text-gray-900 truncate">{{ page.title }}</p>
                  <p class="text-xs text-gray-500">{{ Object.keys(page.sections || {}).length }} section(s)</p>
                </div>
              </router-link>
            </div>
          </div>

        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import AdminSidebar from '../components/AdminSidebar.vue';
import { getAllPages } from '../services/contentService';
import { useArticles } from '../services/articlesService';
import { useVideosCRUD } from '../services/videosServiceCRUD';
import { useGallery } from '../services/galleryService';
import { useAdmissionImages } from '../services/admissionsImagesService';
import { useAdmissionDocuments } from '../services/admissionsDocumentsService';

export default {
  name: 'AdminDashboard',
  components: { AdminSidebar },
  setup() {
    const pages = ref([]);
    const loading = ref(true);

    const { articles, fetchArticles } = useArticles();
    const { videos, fetchVideos } = useVideosCRUD();
    const { images, fetchGalleryImages } = useGallery();
    const { images: admissionImages, fetchAdmissionImages } = useAdmissionImages();
    const { documents: admissionDocuments, fetchAdmissionDocuments } = useAdmissionDocuments();

    const currentDate = computed(() => {
      return new Intl.DateTimeFormat('fr-FR', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      }).format(new Date());
    });

    const pageStats = computed(() => ({
      total: pages.value.length,
      sections: pages.value.reduce((acc, p) => acc + Object.keys(p.sections || {}).length, 0),
    }));

    const articleStats = computed(() => ({ total: articles.value.length }));
    const videoStats = computed(() => ({ total: videos.value.length }));
    const galleryStats = computed(() => ({ total: images.value.length }));
    const admissionsStats = computed(() => ({
      totalImages: admissionImages.value.length,
      totalDocuments: admissionDocuments.value.length,
    }));

    const totalContent = computed(() =>
      articleStats.value.total +
      videoStats.value.total +
      galleryStats.value.total +
      admissionsStats.value.totalImages +
      admissionsStats.value.totalDocuments
    );

    onMounted(async () => {
      try {
        await Promise.all([
          getAllPages().then(p => { pages.value = p; }),
          fetchArticles(),
          fetchVideos(),
          fetchGalleryImages(),
          fetchAdmissionImages(),
          fetchAdmissionDocuments(),
        ]);
      } catch (error) {
        console.error('Dashboard load error:', error);
      } finally {
        loading.value = false;
      }
    });

    return {
      pages,
      loading,
      currentDate,
      pageStats,
      articleStats,
      videoStats,
      galleryStats,
      admissionsStats,
      totalContent,
    };
  },
};
</script>
