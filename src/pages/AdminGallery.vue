<template>
  <div class="min-h-screen bg-gray-50 flex">
    <AdminSidebar />

    <div class="ml-64 flex-1 flex flex-col min-h-screen">
      <!-- Top Bar -->
      <header class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-30">
        <div>
          <h1 class="text-xl font-bold text-gray-900">Galerie Photos</h1>
          <p class="text-xs text-gray-500 mt-0.5">Gérer la galerie d'images du site</p>
        </div>
        <div class="flex items-center gap-3">
          <button
            v-if="images.length === 0"
            @click="showMigrationConfirm = true"
            class="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all text-sm"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Importer les photos
          </button>
          <button
            @click="showFormModal = true"
            class="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 font-semibold rounded-xl transition-all text-sm shadow-sm"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
            </svg>
            Ajouter une image
          </button>
        </div>
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
        <div v-if="loading" class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div v-for="i in 8" :key="i" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
            <div class="w-full h-44 bg-gray-200"></div>
            <div class="p-4 space-y-2">
              <div class="h-3 bg-gray-200 rounded w-3/4"></div>
              <div class="h-3 bg-gray-100 rounded w-1/2"></div>
            </div>
          </div>
        </div>

        <!-- Gallery Grid -->
        <div v-else-if="images.length > 0" class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div
            v-for="image in images"
            :key="image.id"
            class="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all"
          >
            <!-- Image -->
            <div class="relative w-full h-44 bg-gray-100 overflow-hidden">
              <img
                v-if="image.image"
                :src="image.image"
                :alt="image.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div v-else class="w-full h-full flex items-center justify-center">
                <svg class="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <!-- Overlay actions -->
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  @click="editImageData(image)"
                  class="w-9 h-9 bg-yellow-400 rounded-lg flex items-center justify-center hover:bg-yellow-300 transition-colors"
                  title="Modifier"
                >
                  <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                </button>
                <button
                  @click="deleteImageConfirm(image.id)"
                  class="w-9 h-9 bg-red-500 rounded-lg flex items-center justify-center hover:bg-red-400 transition-colors"
                  title="Supprimer"
                >
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </div>

            <div class="p-3">
              <p class="text-xs font-semibold text-gray-900 truncate">{{ image.title }}</p>
              <span class="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                {{ image.category }}
              </span>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="flex flex-col items-center justify-center py-24 text-center">
          <div class="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-10 h-10 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Galerie vide</h3>
          <p class="text-gray-500 text-sm mb-6">Ajoutez des photos ou importez les photos existantes</p>
          <div class="flex gap-3">
            <button
              @click="showMigrationConfirm = true"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Importer les photos
            </button>
            <button
              @click="showFormModal = true"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-yellow-400 hover:text-gray-900 transition-all text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
              </svg>
              Ajouter
            </button>
          </div>
        </div>
      </main>
    </div>

    <!-- ========== MODAL FORMULAIRE ========== -->
    <Teleport to="body">
      <div v-if="showFormModal" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg my-8 overflow-hidden">
          <div class="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50">
            <h2 class="text-lg font-bold text-gray-900">{{ editingId ? 'Modifier l\'image' : 'Ajouter une image' }}</h2>
            <button @click="closeModal" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <form @submit.prevent="saveImage" class="p-6 space-y-5 max-h-[calc(100vh-220px)] overflow-y-auto">
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Titre *</label>
              <input v-model="formData.title" type="text" placeholder="Titre de l'image"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm" required/>
            </div>

            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Catégorie *</label>
              <select v-model="formData.category"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm" required>
                <option value="">Choisir...</option>
                <option value="Tous">Tous</option>
                <option value="Théorie">Théorie</option>
                <option value="Travaux pratiques">Travaux pratiques</option>
                <option value="Stage">Stage</option>
                <option value="Sortie pédagogique">Sortie pédagogique</option>
                <option value="Autres">Autres</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Description *</label>
              <textarea v-model="formData.description" placeholder="Description" rows="2"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm resize-none" required></textarea>
            </div>

            <!-- Image upload -->
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Image *</label>
              <div
                @dragover.prevent="dragOver = true"
                @dragleave.prevent="dragOver = false"
                @drop.prevent="handleImageDrop"
                :class="['border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all', dragOver ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300']"
                @click="imageInput.click()"
              >
                <input ref="imageInput" type="file" accept="image/*" class="hidden" @change="handleImageSelect"/>
                <div v-if="!formData.image" class="space-y-2">
                  <svg class="w-8 h-8 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <p class="text-sm text-gray-500">Glissez ou cliquez pour importer</p>
                </div>
                <div v-else class="space-y-2" @click.stop>
                  <img :src="formData.image" alt="Preview" class="h-28 object-cover mx-auto rounded-lg"/>
                  <p class="text-xs text-gray-500">{{ imageName }}</p>
                  <button type="button" @click="removeImage" class="text-xs text-red-500 hover:text-red-700 font-semibold">Retirer</button>
                </div>
              </div>
            </div>

            <div class="flex gap-3 pt-2 border-t border-gray-100">
              <button type="submit" :disabled="submitting"
                class="flex-1 px-5 py-3 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 font-bold rounded-xl transition-all text-sm disabled:opacity-50">
                {{ submitting ? 'Enregistrement...' : editingId ? 'Mettre à jour' : 'Ajouter' }}
              </button>
              <button type="button" @click="closeModal" class="px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm">Annuler</button>
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
          <h3 class="text-lg font-bold text-gray-900 mb-2">Supprimer cette image ?</h3>
          <p class="text-gray-500 text-sm mb-6">Cette action est irréversible.</p>
          <div class="flex gap-3">
            <button @click="confirmDelete" :disabled="submitting" class="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all text-sm disabled:opacity-50">
              {{ submitting ? 'Suppression...' : 'Supprimer' }}
            </button>
            <button @click="showDeleteConfirm = false" class="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm">Annuler</button>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- ========== MODAL MIGRATION ========== -->
    <Teleport to="body">
      <div v-if="showMigrationConfirm" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
          <div class="px-6 py-5 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
            <h3 class="text-lg font-bold text-gray-900">Importer les photos</h3>
            <button v-if="!migrationInProgress" @click="showMigrationConfirm = false" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-200 rounded-lg transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="p-6">
            <div v-if="!migrationInProgress" class="space-y-4">
              <p class="text-sm text-gray-600">Cela va importer 22 photos de la galerie actuelle vers Firebase Firestore.</p>
              <p class="text-xs text-gray-400">Cette opération peut prendre quelques minutes.</p>
              <div class="flex gap-3">
                <button @click="startMigration" class="flex-1 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all text-sm">Commencer l'importation</button>
                <button @click="showMigrationConfirm = false" class="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm">Annuler</button>
              </div>
            </div>
            <div v-else class="space-y-4">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin flex-shrink-0"></div>
                <p class="text-sm font-semibold text-gray-900">Migration en cours...</p>
              </div>
              <div class="w-full bg-gray-100 rounded-full h-2.5">
                <div class="bg-purple-600 h-2.5 rounded-full transition-all duration-500" :style="{ width: `${migrationProgress}%` }"></div>
              </div>
              <p class="text-xs text-gray-500">{{ migrationStatus }}</p>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import AdminSidebar from '../components/AdminSidebar.vue'
import { useGallery } from '../services/galleryService'

export default {
  name: 'AdminGallery',
  components: { AdminSidebar },
  setup() {
    const { images, loading, error, fetchGalleryImages, addGalleryImage, editGalleryImage, removeGalleryImage } = useGallery()

    const showFormModal = ref(false)
    const showDeleteConfirm = ref(false)
    const showMigrationConfirm = ref(false)
    const submitting = ref(false)
    const editingId = ref(null)
    const deleteConfirmId = ref(null)
    const dragOver = ref(false)
    const imageInput = ref(null)
    const imageName = ref('')
    const migrationInProgress = ref(false)
    const migrationProgress = ref(0)
    const migrationStatus = ref('')

    const formData = ref({ title: '', category: '', description: '', image: '' })

    onMounted(() => { fetchGalleryImages() })

    const resetForm = () => {
      formData.value = { title: '', category: '', description: '', image: '' }
      imageName.value = ''
      editingId.value = null
    }

    const closeModal = () => { showFormModal.value = false; resetForm() }

    const editImageData = (image) => {
      editingId.value = image.id
      formData.value = { title: image.title, category: image.category, description: image.description, image: image.image || '' }
      showFormModal.value = true
    }

    const saveImage = async () => {
      submitting.value = true
      try {
        if (editingId.value) {
          await editGalleryImage(editingId.value, formData.value)
        } else {
          await addGalleryImage(formData.value)
        }
        closeModal()
      } catch (err) {
        console.error('Erreur:', err)
      } finally {
        submitting.value = false
      }
    }

    const deleteImageConfirm = (id) => { deleteConfirmId.value = id; showDeleteConfirm.value = true }

    const confirmDelete = async () => {
      submitting.value = true
      try {
        await removeGalleryImage(deleteConfirmId.value)
        showDeleteConfirm.value = false
        deleteConfirmId.value = null
      } catch (err) {
        console.error('Erreur:', err)
      } finally {
        submitting.value = false
      }
    }

    const handleImageDrop = (e) => {
      dragOver.value = false
      const files = e.dataTransfer.files
      if (files.length > 0) processImage(files[0])
    }

    const handleImageSelect = (e) => {
      const files = e.target.files
      if (files.length > 0) processImage(files[0])
    }

    const processImage = (file) => {
      if (!file.type.startsWith('image/')) { alert('Veuillez sélectionner une image'); return }
      if (file.size > 5 * 1024 * 1024) { alert('L\'image ne doit pas dépasser 5MB'); return }
      compressImage(file)
    }

    const compressImage = (file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          let width = img.width, height = img.height
          if (width > 1200) { height = (height * 1200) / width; width = 1200 }
          canvas.width = width; canvas.height = height
          canvas.getContext('2d').drawImage(img, 0, 0, width, height)
          let compressed = canvas.toDataURL('image/jpeg', 0.7)
          if (compressed.length > 900000) compressed = canvas.toDataURL('image/jpeg', 0.5)
          if (compressed.length > 900000) compressed = canvas.toDataURL('image/jpeg', 0.3)
          formData.value.image = compressed
          imageName.value = file.name
        }
        img.src = e.target.result
      }
      reader.readAsDataURL(file)
    }

    const removeImage = () => {
      formData.value.image = ''
      imageName.value = ''
      if (imageInput.value) imageInput.value.value = ''
    }

    const startMigration = async () => {
      migrationInProgress.value = true
      migrationProgress.value = 0
      migrationStatus.value = 'Préparation...'
      try {
        const { migrateGalleryToFirestore } = await import('../services/galleryMigration')
        const results = await migrateGalleryToFirestore((p) => {
          migrationProgress.value = p.progress
          migrationStatus.value = p.status
        })
        migrationProgress.value = 100
        migrationStatus.value = `✅ ${results.successful} importée(s)`
        await new Promise(r => setTimeout(r, 2000))
        await fetchGalleryImages()
        showMigrationConfirm.value = false
        migrationInProgress.value = false
      } catch (error) {
        migrationStatus.value = `❌ Erreur: ${error.message}`
        await fetchGalleryImages()
        await new Promise(r => setTimeout(r, 2000))
        showMigrationConfirm.value = false
        migrationInProgress.value = false
      }
    }

    return {
      images, loading, error, showFormModal, showDeleteConfirm, showMigrationConfirm,
      submitting, formData, editingId, dragOver, imageInput, imageName,
      migrationInProgress, migrationProgress, migrationStatus,
      closeModal, editImageData, saveImage, deleteImageConfirm, confirmDelete,
      handleImageDrop, handleImageSelect, removeImage, startMigration
    }
  }
}
</script>
