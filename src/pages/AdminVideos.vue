<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header -->
    <section class="bg-gradient-to-r from-red-600 to-red-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold mb-2">Gestion des Vidéos YouTube</h1>
        <p class="text-red-100">Gestion de la section "Echo du CREFER"</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Button Ajouter Vidéo -->
      <div class="mb-8">
        <button
          @click="showFormModal = true"
          class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Nouvelle Vidéo
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
        {{ error }}
      </div>

      <!-- Videos Grid -->
      <div v-if="!loading && videos.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div
          v-for="video in videos"
          :key="video.id"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
        >
          <!-- Video Thumbnail -->
          <div class="w-full h-48 bg-black overflow-hidden">
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Video Content -->
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {{ video.title }}
            </h3>

            <div class="flex items-center gap-2 mb-3 text-sm text-gray-600">
              <span class="inline-block px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">
                {{ video.category }}
              </span>
              <span class="text-gray-500">{{ video.date }}</span>
            </div>

            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              {{ video.description }}
            </p>

            <!-- YouTube ID Display -->
            <div class="bg-gray-100 p-2 rounded mb-4 text-xs font-mono text-gray-700 break-all">
              ID: {{ video.youtubeId }}
            </div>

            <!-- Actions -->
            <div class="flex gap-2">
              <button
                @click="editVideoData(video)"
                class="flex-1 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded transition-colors text-sm"
              >
                Modifier
              </button>
              <button
                @click="deleteVideoConfirm(video.id)"
                class="flex-1 px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 font-semibold rounded transition-colors text-sm"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else-if="!loading" class="text-center py-12">
        <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Aucune vidéo</h3>
        <p class="text-gray-600 mb-6">Commencez par ajouter votre première vidéo YouTube</p>
        <button
          @click="showFormModal = true"
          class="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Ajouter une vidéo
        </button>
      </div>
    </div>

    <!-- Modal Formulaire -->
    <div
      v-if="showFormModal"
      class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl my-8">
        <!-- Header Modal -->
        <div class="flex items-center justify-between p-6 border-b">
          <h2 class="text-2xl font-bold text-gray-900">
            {{ editingId ? 'Modifier la vidéo' : 'Nouvelle vidéo' }}
          </h2>
          <button
            @click="closeModal"
            class="text-gray-500 hover:text-gray-700"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Form Content -->
        <form @submit.prevent="saveVideo" class="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          <!-- Titre -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Titre *</label>
            <input
              v-model="formData.title"
              type="text"
              placeholder="Titre de la vidéo"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <!-- ID YouTube -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">ID YouTube *</label>
            <input
              v-model="formData.youtubeId"
              type="text"
              placeholder="Ex: NWOT2EqrOHM"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
              maxlength="11"
            />
            <p class="text-xs text-gray-500 mt-1">Vous trouvez l'ID dans l'URL YouTube: youtube.com/watch?v=<strong>ID_ICI</strong></p>
          </div>

          <!-- Catégorie -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Catégorie *</label>
            <select
              v-model="formData.category"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Sélectionner une catégorie</option>
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
            <label class="block text-sm font-semibold text-gray-900 mb-2">Date *</label>
            <input
              v-model="formData.date"
              type="text"
              placeholder="Ex: 08 décembre 2025"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Description *</label>
            <textarea
              v-model="formData.description"
              placeholder="Description de la vidéo"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
          </div>

          <!-- Aperçu -->
          <div v-if="formData.youtubeId" class="border rounded-lg overflow-hidden">
            <div class="bg-black aspect-video">
              <iframe
                :src="`https://www.youtube.com/embed/${formData.youtubeId}`"
                title="Aperçu vidéo"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <!-- Boutons -->
          <div class="flex gap-3 pt-4 border-t">
            <button
              type="submit"
              :disabled="submitting"
              class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold rounded-lg transition-colors"
            >
              {{ submitting ? 'Sauvegarde...' : editingId ? 'Mettre à jour' : 'Ajouter' }}
            </button>
            <button
              type="button"
              @click="closeModal"
              class="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Confirmation Delete Modal -->
    <div
      v-if="showDeleteConfirm"
      class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Supprimer la vidéo ?</h3>
          <p class="text-gray-600 mb-6">Cette action est irréversible.</p>

          <div class="flex gap-3">
            <button
              @click="confirmDelete()"
              :disabled="submitting"
              class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold rounded-lg"
            >
              {{ submitting ? 'Suppression...' : 'Supprimer' }}
            </button>
            <button
              @click="showDeleteConfirm = false"
              class="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useVideosCRUD } from '../services/videosServiceCRUD'

export default {
  name: 'AdminVideos',
  setup() {
    const { videos, loading, error, fetchVideos, addVideo, editVideo, removeVideo } = useVideosCRUD()

    const showFormModal = ref(false)
    const showDeleteConfirm = ref(false)
    const submitting = ref(false)
    const editingId = ref(null)
    const deleteConfirmId = ref(null)

    const formData = ref({
      title: '',
      youtubeId: '',
      category: '',
      date: '',
      description: ''
    })

    onMounted(() => {
      fetchVideos()
    })

    const resetForm = () => {
      formData.value = {
        title: '',
        youtubeId: '',
        category: '',
        date: '',
        description: ''
      }
      editingId.value = null
    }

    const closeModal = () => {
      showFormModal.value = false
      resetForm()
    }

    const editVideoData = (video) => {
      editingId.value = video.id
      formData.value = {
        title: video.title,
        youtubeId: video.youtubeId,
        category: video.category,
        date: video.date,
        description: video.description
      }
      showFormModal.value = true
    }

    const generateThumbnail = (youtubeId) => {
      return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    }

    const saveVideo = async () => {
      submitting.value = true
      try {
        const videoData = {
          ...formData.value,
          thumbnail: generateThumbnail(formData.value.youtubeId)
        }

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

    const deleteVideoConfirm = (id) => {
      deleteConfirmId.value = id
      showDeleteConfirm.value = true
    }

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
      videos,
      loading,
      error,
      showFormModal,
      showDeleteConfirm,
      submitting,
      formData,
      editingId,
      resetForm,
      closeModal,
      editVideoData,
      saveVideo,
      deleteVideoConfirm,
      confirmDelete
    }
  }
}
</script>
