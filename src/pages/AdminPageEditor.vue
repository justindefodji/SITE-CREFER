<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Sidebar Navigation -->
    <AdminSidebar />

    <!-- Main Content -->
    <div class="ml-64 p-8">
      <div v-if="!loading" class="max-w-6xl">
        <!-- Header with Back Button -->
        <div class="mb-8">
          <button
            @click="goBack"
            class="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors font-medium"
          >
            <span>←</span> Retour à la liste
          </button>
          <h1 class="text-4xl font-bold text-white">{{ page?.title }}</h1>
          <p class="text-slate-400 mt-1">{{ page?.description }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <!-- Sections List Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-slate-800 rounded-lg p-6 border border-slate-700 sticky top-8">
              <h2 class="text-lg font-bold text-white mb-4">Sections</h2>

              <div class="space-y-2 max-h-96 overflow-y-auto">
                <button
                  v-for="section in sections"
                  :key="section.id"
                  @click="selectSection(section)"
                  class="w-full text-left px-4 py-3 rounded-lg transition-all text-sm"
                  :class="
                    selectedSection?.id === section.id
                      ? 'bg-red-600 text-white font-medium'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                  "
                >
                  <div class="font-medium truncate">{{ section.name || section.id }}</div>
                  <div class="text-xs opacity-75 mt-1">
                    {{ formatDate(section.updatedAt) }}
                  </div>
                </button>
              </div>

              <!-- Add New Section -->
              <div class="mt-6 pt-6 border-t border-slate-700">
                <div class="flex gap-2">
                  <input
                    v-model="newSectionName"
                    type="text"
                    placeholder="Nouveau nom"
                    class="flex-1 bg-slate-700 text-white px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    @keyup.enter="addNewSection"
                  />
                  <button
                    @click="addNewSection"
                    class="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- JSON Editor -->
          <div class="lg:col-span-3">
            <div v-if="selectedSection" class="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-lg font-bold text-white">{{ selectedSection.name || selectedSection.id }}</h2>
                <span v-if="jsonError" class="text-xs bg-red-900 text-red-300 px-3 py-1 rounded">
                  JSON invalide
                </span>
                <span v-else-if="jsonContent" class="text-xs bg-green-900 text-green-300 px-3 py-1 rounded">
                  JSON valide
                </span>
              </div>

              <!-- JSON Input -->
              <div class="mb-6">
                <label class="block text-sm font-medium text-slate-300 mb-2">Contenu JSON</label>
                <textarea
                  v-model="jsonContent"
                  class="w-full h-96 bg-slate-900 text-slate-300 px-4 py-3 rounded-lg border border-slate-600 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                  placeholder="{&#10;  &#34;key&#34;: &#34;value&#34;&#10;}"
                ></textarea>
                <p v-if="jsonError" class="text-red-500 text-sm mt-2">{{ jsonError }}</p>
                <p class="text-slate-400 text-xs mt-2">📝 Entrez un JSON valide pour éditer le contenu</p>
              </div>

              <!-- JSON Preview -->
              <div v-if="parsedJson" class="mb-6">
                <h3 class="text-sm font-medium text-slate-300 mb-2">📋 Aperçu</h3>
                <div class="bg-slate-900 p-4 rounded-lg border border-slate-700 max-h-48 overflow-auto">
                  <pre class="text-slate-300 text-xs whitespace-pre-wrap break-words">{{ JSON.stringify(parsedJson, null, 2) }}</pre>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex gap-3">
                <button
                  @click="saveSection"
                  class="flex-1 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                  :disabled="saving || jsonError"
                >
                  {{ saving ? '⏳ Sauvegarde...' : '💾 Sauvegarder' }}
                </button>
                <button
                  @click="deleteSection_"
                  class="flex-1 bg-slate-700 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  🗑️ Supprimer
                </button>
              </div>
            </div>

            <!-- Empty State -->
            <div v-else class="bg-slate-800 rounded-lg p-12 border border-slate-700 text-center">
              <p class="text-slate-400 text-lg">👈 Sélectionnez une section pour l'éditer</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else class="flex items-center justify-center h-64">
        <div class="text-center">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          <p class="text-slate-400 mt-4">Chargement...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import AdminSidebar from '../components/AdminSidebar.vue';
import { getPageWithSections, saveSection, deleteSection } from '../services/contentService';

export default {
  name: 'AdminPageEditor',
  components: {
    AdminSidebar,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const pageId = route.params.pageId;

    const page = ref(null);
    const sections = ref([]);
    const selectedSection = ref(null);
    const loading = ref(true);
    const saving = ref(false);
    const jsonContent = ref('{}');
    const newSectionName = ref('');

    const jsonError = computed(() => {
      try {
        JSON.parse(jsonContent.value);
        return null;
      } catch (error) {
        return error.message;
      }
    });

    const parsedJson = computed(() => {
      if (jsonError.value) return null;
      try {
        return JSON.parse(jsonContent.value);
      } catch {
        return null;
      }
    });

    const loadPage = async () => {
      try {
        loading.value = true;
        const pageData = await getPageWithSections(pageId);
        page.value = pageData;

        // Convert sections object to array
        sections.value = Object.values(pageData.sections || {}).sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );

        // Select first section
        if (sections.value.length > 0) {
          selectSection(sections.value[0]);
        }
      } catch (error) {
        console.error('Error loading page:', error);
        alert('Erreur lors du chargement de la page');
      } finally {
        loading.value = false;
      }
    };

    const selectSection = (section) => {
      selectedSection.value = section;
      jsonContent.value = JSON.stringify(section.content || {}, null, 2);
    };

    const saveSection_ = async () => {
      if (!selectedSection.value || jsonError.value) {
        alert('Veuillez corriger les erreurs JSON');
        return;
      }

      try {
        saving.value = true;
        await saveSection(pageId, selectedSection.value.id, {
          content: parsedJson.value,
          name: selectedSection.value.name,
        });
        alert('Section sauvegardée avec succès');
      } catch (error) {
        console.error('Error saving section:', error);
        alert('Erreur lors de la sauvegarde de la section');
      } finally {
        saving.value = false;
      }
    };

    const deleteSection_ = async () => {
      if (!selectedSection.value || !confirm('Êtes-vous sûr?')) return;

      try {
        await deleteSection(pageId, selectedSection.value.id);
        sections.value = sections.value.filter((s) => s.id !== selectedSection.value.id);
        selectedSection.value = sections.value[0] || null;
        alert('Section supprimée avec succès');
      } catch (error) {
        console.error('Error deleting section:', error);
        alert('Erreur lors de la suppression');
      }
    };

    const addNewSection = async () => {
      if (!newSectionName.value.trim()) return;

      const newSectionId = newSectionName.value.toLowerCase().replace(/\s+/g, '-');

      try {
        await saveSection(pageId, newSectionId, {
          name: newSectionName.value,
          content: {},
        });

        // Reload sections
        await loadPage();
        newSectionName.value = '';
        alert('Section créée avec succès');
      } catch (error) {
        console.error('Error creating section:', error);
        alert('Erreur lors de la création de la section');
      }
    };

    const formatDate = (date) => {
      if (!date) return 'jamais';
      const d = date instanceof Date ? date : new Date(date);
      return d.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    };

    const goBack = () => {
      router.push('/admin/pages');
    };

    onMounted(() => {
      loadPage();
    });

    return {
      page,
      sections,
      selectedSection,
      loading,
      saving,
      jsonContent,
      jsonError,
      parsedJson,
      newSectionName,
      selectSection,
      saveSection: saveSection_,
      deleteSection: deleteSection_,
      addNewSection,
      formatDate,
      goBack,
    };
  },
};
</script>
