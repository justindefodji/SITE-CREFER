<template>
  <div class="min-h-screen bg-gray-50 flex">
    <AdminSidebar />

    <div class="ml-64 flex-1 flex flex-col min-h-screen">
      <!-- Top Bar -->
      <header class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-30">
        <div>
          <h1 class="text-xl font-bold text-gray-900">Vidéos YouTube</h1>
          <p class="text-xs text-gray-500 mt-0.5">Section "Écho du CREFER"</p>
        </div>
        <button
          @click="showFormModal = true"
          class="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 font-semibold rounded-xl transition-all text-sm shadow-sm"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
          </svg>
          Ajouter une vidéo
        </button>
      </header>

      <main class="flex-1 px-8 py-8">
        <!-- Error -->
        <div v-if="error" class="mb-6 flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          {{ error }}
        </div>

        <!-- Loading -->
        <div v-if="loading" class="grid gap-5 md:grid-cols-2">
          <div v-for="i in 4" :key="i" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
            <div class="w-full h-48 bg-gray-200"></div>
            <div class="p-5 space-y-3">
              <div class="h-4 bg-gray-200 rounded w-3/4"></div>
              <div class="h-3 bg-gray-100 rounded w-1/3"></div>
              <div class="h-3 bg-gray-100 rounded"></div>
              <div class="flex gap-2 pt-2">
                <div class="flex-1 h-9 bg-gray-200 rounded-lg"></div>
                <div class="flex-1 h-9 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Videos Grid -->
        <div v-else-if="videos.length > 0" class="grid gap-5 md:grid-cols-2">
          <div
            v-for="video in videos"
            :key="video.id"
            class="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all flex flex-col"
          >
            <!-- Thumbnail -->
            <div class="relative w-full h-48 bg-black overflow-hidden flex-shrink-0">
              <img :src="video.thumbnail" :alt="video.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"/>
              <!-- Play overlay -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <!-- Category badge -->
              <span class="absolute top-3 left-3 inline-block px-2.5 py-1 bg-red-600 text-white rounded-full text-xs font-bold">
                {{ video.category }}
              </span>
            </div>

            <!-- Content -->
            <div class="p-5 flex flex-col flex-1">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs text-gray-400">{{ video.date }}</span>
                <span class="text-gray-300">•</span>
                <span class="text-xs text-gray-400 font-mono">ID: {{ video.youtubeId }}</span>
              </div>
              <h3 class="text-sm font-bold text-gray-900 mb-2 line-clamp-2 flex-1">{{ video.title }}</h3>
              <p class="text-xs text-gray-500 line-clamp-2 mb-4">{{ video.description }}</p>

              <div class="flex gap-2 mt-auto">
                <button
                  @click="editVideoData(video)"
                  class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 font-semibold rounded-lg transition-all text-xs"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                  Modifier
                </button>
                <button
                  @click="deleteVideoConfirm(video.id)"
                  class="inline-flex items-center justify-center w-9 h-8 text-gray-400 hover:bg-red-50 hover:text-red-500 rounded-lg transition-all border border-gray-200 hover:border-red-200"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="flex flex-col items-center justify-center py-24 text-center">
          <div class="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-10 h-10 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Aucune vidéo</h3>
          <p class="text-gray-500 text-sm mb-6">Ajoutez votre première vidéo YouTube</p>
          <button
            @click="showFormModal = true"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-yellow-400 hover:text-gray-900 transition-all text-sm"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
            </svg>
            Ajouter une vidéo
          </button>
        </div>
      </main>
    </div>

    <!-- ========== MODAL FORMULAIRE ========== -->
    <Teleport to="body">
      <div v-if="showFormModal" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8 overflow-hidden">
          <div class="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50">
            <div>
              <h2 class="text-lg font-bold text-gray-900">{{ editingId ? 'Modifier la vidéo' : 'Nouvelle vidéo' }}</h2>
              <p class="text-xs text-gray-500 mt-0.5">Renseignez l'identifiant YouTube et les détails</p>
            </div>
            <button @click="closeModal" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <form @submit.prevent="saveVideo" class="p-6 space-y-5 max-h-[calc(100vh-220px)] overflow-y-auto">
            <div class="grid sm:grid-cols-2 gap-4">
              <!-- Titre -->
              <div class="sm:col-span-2">
                <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Titre *</label>
                <input v-model="formData.title" type="text" placeholder="Titre de la vidéo"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" required/>
              </div>

              <!-- YouTube ID -->
              <div class="sm:col-span-2">
                <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">ID YouTube *</label>
                <div class="relative">
                  <input v-model="formData.youtubeId" type="text" placeholder="ex: NWOT2EqrOHM"
                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm font-mono pr-32" required maxlength="11"/>
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">youtube.com/watch?v=<strong>ID</strong></span>
                </div>
              </div>

              <!-- Catégorie -->
              <div>
                <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Catégorie *</label>
                <select v-model="formData.category"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" required>
                  <option value="">Choisir...</option>
                  <option value="Présentation">Présentation</option>
                  <option value="Formation">Formation</option>
                  <option value="Événement">Événement</option>
                  <option value="Témoignage">Témoignage</option>
                  <option value="Tutoriel">Tutoriel</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <!-- Date -->
              <div>
                <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Date *</label>
                <input v-model="formData.date" type="text" placeholder="ex: 08 décembre 2025"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm" required/>
              </div>

              <!-- Description -->
              <div class="sm:col-span-2">
                <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Description *</label>
                <textarea v-model="formData.description" placeholder="Description de la vidéo" rows="3"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none" required></textarea>
              </div>
            </div>

            <!-- Aperçu vidéo -->
            <div v-if="formData.youtubeId && formData.youtubeId.length >= 6">
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Aperçu</label>
              <div class="rounded-xl overflow-hidden bg-black aspect-video">
                <iframe
                  :src="`https://www.youtube.com/embed/${formData.youtubeId}`"
                  title="Aperçu vidéo" class="w-full h-full" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                ></iframe>
              </div>
            </div>

            <div class="flex gap-3 pt-2 border-t border-gray-100">
              <button type="submit" :disabled="submitting"
                class="flex-1 px-5 py-3 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 font-bold rounded-xl transition-all text-sm disabled:opacity-50">
                {{ submitting ? 'Enregistrement...' : editingId ? 'Mettre à jour' : 'Ajouter la vidéo' }}
              </button>
              <button type="button" @click="closeModal" class="px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all text-sm">Annuler</button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>

    <!-- ========== MODAL SUPPRESSION ========== -->
    <Teleport to="body">
      <div v-if="showDeleteConfirm" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center">
          <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Supprimer cette vidéo ?</h3>
          <p class="text-gray-500 text-sm mb-6">Cette action est irréversible.</p>
          <div class="flex gap-3">
            <button @click="confirmDelete" :disabled="submitting" class="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all text-sm disabled:opacity-50">
              {{ submitting ? 'Suppression...' : 'Supprimer' }}
            </button>
            <button @click="showDeleteConfirm = false" class="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all text-sm">Annuler</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import AdminSidebar from '../components/AdminSidebar.vue'
import { useVideosCRUD } from '../services/videosServiceCRUD'

export default {
  name: 'AdminVideos',
  components: { AdminSidebar },
  setup() {
    const { videos, loading, error, fetchVideos, addVideo, editVideo, removeVideo } = useVideosCRUD()

    const showFormModal = ref(false)
    const showDeleteConfirm = ref(false)
    const submitting = ref(false)
    const editingId = ref(null)
    const deleteConfirmId = ref(null)

    const formData = ref({ title: '', youtubeId: '', category: '', date: '', description: '' })

    onMounted(() => { fetchVideos() })

    const resetForm = () => {
      formData.value = { title: '', youtubeId: '', category: '', date: '', description: '' }
      editingId.value = null
    }

    const closeModal = () => { showFormModal.value = false; resetForm() }

    const editVideoData = (video) => {
      editingId.value = video.id
      formData.value = { title: video.title, youtubeId: video.youtubeId, category: video.category, date: video.date, description: video.description }
      showFormModal.value = true
    }

    const generateThumbnail = (youtubeId) => `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`

    const saveVideo = async () => {
      submitting.value = true
      try {
        const videoData = { ...formData.value, thumbnail: generateThumbnail(formData.value.youtubeId) }
        if (editingId.value) {
          await editVideo(editingId.value, videoData)
        } else {
          await addVideo(videoData)
        }
        closeModal()
      } catch (err) {
        console.error('Erreur:', err)
      } finally {
        submitting.value = false
      }
    }

    const deleteVideoConfirm = (id) => { deleteConfirmId.value = id; showDeleteConfirm.value = true }

    const confirmDelete = async () => {
      submitting.value = true
      try {
        await removeVideo(deleteConfirmId.value)
        showDeleteConfirm.value = false
        deleteConfirmId.value = null
      } catch (err) {
        console.error('Erreur:', err)
      } finally {
        submitting.value = false
      }
    }

    return {
      videos, loading, error, showFormModal, showDeleteConfirm, submitting, formData, editingId,
      closeModal, editVideoData, saveVideo, deleteVideoConfirm, confirmDelete
    }
  }
}
</script>
