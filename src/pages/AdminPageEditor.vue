<template>
  <div class="min-h-screen bg-gray-50 flex">
    <AdminSidebar />

    <div class="ml-64 flex-1 flex flex-col min-h-screen">

      <!-- Top Bar -->
      <header class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-30">
        <div class="flex items-center gap-3">
          <button
            @click="goBack"
            class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-all"
            title="Retour aux pages"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
          </button>
          <div class="flex items-center gap-2 text-sm">
            <span class="text-gray-400">Pages</span>
            <svg class="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
            <span class="font-semibold text-gray-900">{{ page?.title || 'Chargement...' }}</span>
          </div>
        </div>

        <div v-if="selectedSection" class="flex items-center gap-3">
          <span
            :class="['inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full', jsonError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700']"
          >
            <span :class="['w-1.5 h-1.5 rounded-full', jsonError ? 'bg-red-500' : 'bg-green-500']"></span>
            {{ jsonError ? 'JSON invalide' : 'JSON valide' }}
          </span>
          <button
            @click="saveSection"
            :disabled="saving || !!jsonError"
            class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 font-semibold rounded-xl transition-all text-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg v-if="!saving" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
            </svg>
            <span v-if="saving" class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
            {{ saving ? 'Sauvegarde...' : 'Sauvegarder' }}
          </button>
        </div>
      </header>

      <!-- Loading State -->
      <div v-if="loading" class="flex-1 flex items-center justify-center">
        <div class="text-center">
          <div class="w-10 h-10 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p class="text-gray-500 text-sm">Chargement de la page...</p>
        </div>
      </div>

      <!-- Editor Content -->
      <main v-else class="flex-1 flex overflow-hidden">

        <!-- Left Panel: Sections -->
        <div class="w-72 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col h-[calc(100vh-65px)] sticky top-[65px]">
          <div class="px-5 py-4 border-b border-gray-100">
            <h2 class="text-sm font-bold text-gray-900">Sections</h2>
            <p class="text-xs text-gray-500 mt-0.5">{{ sections.length }} section(s) dans cette page</p>
          </div>

          <!-- Sections List -->
          <div class="flex-1 overflow-y-auto p-3 space-y-1">
            <div v-if="sections.length === 0" class="flex flex-col items-center justify-center py-8 text-center px-4">
              <svg class="w-10 h-10 text-gray-200 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7"/>
              </svg>
              <p class="text-xs text-gray-400">Aucune section. Créez-en une ci-dessous.</p>
            </div>

            <button
              v-for="section in sections"
              :key="section.id"
              @click="selectSection(section)"
              :class="['w-full text-left px-3 py-3 rounded-xl transition-all group', selectedSection?.id === section.id ? 'bg-yellow-400 shadow-sm' : 'hover:bg-gray-50 border border-transparent hover:border-gray-200']"
            >
              <div class="flex items-center gap-2.5">
                <div :class="['w-2 h-2 rounded-full flex-shrink-0', selectedSection?.id === section.id ? 'bg-gray-900' : 'bg-gray-300 group-hover:bg-yellow-400']"></div>
                <div class="min-w-0 flex-1">
                  <p :class="['text-sm font-semibold truncate', selectedSection?.id === section.id ? 'text-gray-900' : 'text-gray-700']">{{ section.name || section.id }}</p>
                  <p :class="['text-xs mt-0.5 truncate', selectedSection?.id === section.id ? 'text-gray-700' : 'text-gray-400']">{{ formatDate(section.updatedAt) }}</p>
                </div>
              </div>
            </button>
          </div>

          <!-- Add New Section -->
          <div class="border-t border-gray-100 p-4">
            <p class="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">Nouvelle section</p>
            <div class="flex gap-2">
              <input
                v-model="newSectionName"
                type="text"
                placeholder="Nom de la section"
                class="flex-1 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all"
                @keyup.enter="addNewSection"
              />
              <button
                @click="addNewSection"
                :disabled="!newSectionName.trim()"
                class="w-10 h-10 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 rounded-lg flex items-center justify-center transition-all flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
                title="Créer la section"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Right Panel: JSON Editor -->
        <div class="flex-1 flex flex-col overflow-hidden">
          <!-- Section selected -->
          <div v-if="selectedSection" class="flex-1 flex flex-col p-6 overflow-auto">
            <!-- Section header -->
            <div class="flex items-center justify-between mb-5">
              <div>
                <h3 class="text-base font-bold text-gray-900">{{ selectedSection.name || selectedSection.id }}</h3>
                <p class="text-xs text-gray-500 mt-0.5">Identifiant: <span class="font-mono text-gray-700">{{ selectedSection.id }}</span></p>
              </div>
              <button
                @click="deleteSection_"
                class="inline-flex items-center gap-2 px-3 py-2 text-red-500 hover:bg-red-50 hover:text-red-700 border border-red-200 hover:border-red-300 rounded-lg transition-all text-xs font-semibold"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
                Supprimer la section
              </button>
            </div>

            <!-- Two-column: editor + preview -->
            <div class="grid lg:grid-cols-2 gap-5 flex-1">
              <!-- JSON Editor -->
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-2">
                  <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Éditeur JSON</label>
                  <button
                    @click="formatJson"
                    class="text-xs text-gray-500 hover:text-gray-700 font-medium px-2 py-1 hover:bg-gray-100 rounded transition-all"
                    title="Formater le JSON"
                  >
                    Formater
                  </button>
                </div>
                <div class="relative flex-1">
                  <textarea
                    v-model="jsonContent"
                    :class="['w-full h-full min-h-96 bg-gray-950 px-5 py-4 rounded-xl font-mono text-sm focus:outline-none resize-none transition-all border', jsonError ? 'text-red-400 border-red-500/50 focus:ring-2 focus:ring-red-500/30' : 'text-green-300 border-gray-800 focus:ring-2 focus:ring-yellow-400/30']"
                    placeholder='{&#10;  "key": "value"&#10;}'
                    spellcheck="false"
                  ></textarea>
                  <!-- Line numbers effect -->
                  <div class="absolute top-4 left-0 w-6 h-full pointer-events-none"></div>
                </div>
                <p v-if="jsonError" class="mt-2 text-xs text-red-500 flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ jsonError }}
                </p>
                <p v-else class="mt-2 text-xs text-green-600 flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  JSON valide
                </p>
              </div>

              <!-- JSON Preview -->
              <div class="flex flex-col">
                <div class="flex items-center justify-between mb-2">
                  <label class="text-xs font-bold text-gray-700 uppercase tracking-wider">Aperçu structuré</label>
                  <span class="text-xs text-gray-400">{{ Object.keys(parsedJson || {}).length }} clé(s)</span>
                </div>
                <div class="flex-1 bg-gray-950 rounded-xl border border-gray-800 overflow-auto min-h-96">
                  <div v-if="parsedJson" class="p-5">
                    <div v-for="(value, key) in parsedJson" :key="key" class="mb-4 last:mb-0">
                      <div class="flex items-start gap-2">
                        <span class="text-purple-400 font-mono text-xs font-semibold flex-shrink-0 mt-0.5">"{{ key }}":</span>
                        <div class="min-w-0 flex-1">
                          <!-- String -->
                          <span v-if="typeof value === 'string'" class="text-yellow-300 font-mono text-xs break-words">"{{ value }}"</span>
                          <!-- Number / Boolean -->
                          <span v-else-if="typeof value === 'number' || typeof value === 'boolean'" class="text-blue-400 font-mono text-xs">{{ value }}</span>
                          <!-- Array -->
                          <div v-else-if="Array.isArray(value)" class="mt-1">
                            <span class="text-gray-500 font-mono text-xs">[{{ value.length }} éléments]</span>
                            <div class="ml-3 mt-1 space-y-1">
                              <div v-for="(item, idx) in value.slice(0, 3)" :key="idx" class="text-green-400 font-mono text-xs truncate">
                                {{ idx }}: {{ JSON.stringify(item).substring(0, 60) }}{{ JSON.stringify(item).length > 60 ? '...' : '' }}
                              </div>
                              <div v-if="value.length > 3" class="text-gray-600 font-mono text-xs">... et {{ value.length - 3 }} de plus</div>
                            </div>
                          </div>
                          <!-- Object -->
                          <div v-else-if="typeof value === 'object' && value !== null" class="mt-1">
                            <span class="text-gray-500 font-mono text-xs">&#123;{{ Object.keys(value).length }} propriétés&#125;</span>
                            <div class="ml-3 mt-1 space-y-1">
                              <div v-for="(subVal, subKey) in Object.entries(value).slice(0, 3)" :key="subKey" class="flex gap-2">
                                <span class="text-purple-400/70 font-mono text-xs flex-shrink-0">"{{ subVal[0] }}":</span>
                                <span class="text-gray-400 font-mono text-xs truncate">{{ JSON.stringify(subVal[1]).substring(0, 40) }}{{ JSON.stringify(subVal[1]).length > 40 ? '...' : '' }}</span>
                              </div>
                              <div v-if="Object.keys(value).length > 3" class="text-gray-600 font-mono text-xs">... et {{ Object.keys(value).length - 3 }} de plus</div>
                            </div>
                          </div>
                          <!-- Null -->
                          <span v-else class="text-gray-600 font-mono text-xs">null</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else class="flex items-center justify-center h-full p-8 text-center">
                    <div>
                      <svg class="w-8 h-8 text-gray-700 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <p class="text-gray-600 text-xs">JSON invalide — corrigez les erreurs pour voir l'aperçu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom save bar (mobile/sticky) -->
            <div class="mt-5 flex items-center justify-end gap-3 pt-5 border-t border-gray-100">
              <p v-if="savedAt" class="text-xs text-gray-400 mr-auto flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                Sauvegardé à {{ savedAt }}
              </p>
              <button
                @click="deleteSection_"
                class="inline-flex items-center gap-2 px-4 py-2.5 text-red-500 hover:bg-red-50 border border-red-200 rounded-xl transition-all text-sm font-semibold"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
                Supprimer
              </button>
              <button
                @click="saveSection"
                :disabled="saving || !!jsonError"
                class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 font-bold rounded-xl transition-all text-sm disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
              >
                <span v-if="saving" class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
                </svg>
                {{ saving ? 'Sauvegarde...' : 'Sauvegarder la section' }}
              </button>
            </div>
          </div>

          <!-- No section selected -->
          <div v-else class="flex-1 flex items-center justify-center p-8">
            <div class="text-center max-w-sm">
              <div class="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7"/>
                </svg>
              </div>
              <h3 class="text-base font-bold text-gray-900 mb-2">Sélectionnez une section</h3>
              <p class="text-gray-500 text-sm">Choisissez une section dans le panneau gauche pour commencer à éditer son contenu JSON.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { onMounted } from 'vue';
import AdminSidebar from '../components/AdminSidebar.vue';
import { getPageWithSections, saveSection, deleteSection } from '../services/contentService';

export default {
  name: 'AdminPageEditor',
  components: { AdminSidebar },
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
    const savedAt = ref('');

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

    const formatJson = () => {
      if (!jsonError.value) {
        jsonContent.value = JSON.stringify(JSON.parse(jsonContent.value), null, 2);
      }
    };

    const loadPage = async () => {
      try {
        loading.value = true;
        const pageData = await getPageWithSections(pageId);
        page.value = pageData;
        sections.value = Object.values(pageData.sections || {}).sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        if (sections.value.length > 0) selectSection(sections.value[0]);
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
      savedAt.value = '';
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
        savedAt.value = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
      } catch (error) {
        console.error('Error saving section:', error);
        alert('Erreur lors de la sauvegarde');
      } finally {
        saving.value = false;
      }
    };

    const deleteSection_ = async () => {
      if (!selectedSection.value || !confirm('Supprimer cette section ? Cette action est irréversible.')) return;
      try {
        await deleteSection(pageId, selectedSection.value.id);
        sections.value = sections.value.filter(s => s.id !== selectedSection.value.id);
        selectedSection.value = sections.value[0] || null;
        if (selectedSection.value) {
          jsonContent.value = JSON.stringify(selectedSection.value.content || {}, null, 2);
        }
      } catch (error) {
        console.error('Error deleting section:', error);
        alert('Erreur lors de la suppression');
      }
    };

    const addNewSection = async () => {
      if (!newSectionName.value.trim()) return;
      const newSectionId = newSectionName.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      try {
        await saveSection(pageId, newSectionId, { name: newSectionName.value, content: {} });
        await loadPage();
        newSectionName.value = '';
      } catch (error) {
        console.error('Error creating section:', error);
        alert('Erreur lors de la création');
      }
    };

    const formatDate = (date) => {
      if (!date) return 'jamais';
      const d = date instanceof Date ? date : new Date(date);
      return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    };

    const goBack = () => { router.push('/admin/pages'); };

    onMounted(() => { loadPage(); });

    return {
      page, sections, selectedSection, loading, saving, jsonContent, jsonError, parsedJson,
      newSectionName, savedAt,
      selectSection, saveSection: saveSection_, deleteSection: deleteSection_,
      addNewSection, formatDate, formatJson, goBack,
    };
  },
};
</script>
