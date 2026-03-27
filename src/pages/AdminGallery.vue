<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 class="text-4xl font-bold mb-2">Gestion de la Galerie</h1>
          <p class="text-blue-100">Créer, modifier et supprimer des images de galerie</p>
        </div>
        <button
          @click="goToDashboard"
          class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-colors"
          title="Retour au tableau de bord"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour
        </button>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Buttons -->
      <div class="mb-8 flex gap-4">
        <button
          @click="showFormModal = true"
          class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Ajouter une image
        </button>
        
        <button
          @click="showMigrationConfirm = true"
          v-if="images.length === 0"
          class="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Importer les photos
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
        {{ error }}
      </div>

      <!-- Images Grid -->
      <div v-if="!loading && images.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="image in images"
          :key="image.id"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
        >
          <!-- Image Preview -->
          <div v-if="image.image" class="w-full h-48 bg-gray-200 overflow-hidden">
            <img
              :src="image.image"
              :alt="image.title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Image Content -->
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {{ image.title }}
            </h3>

            <div class="flex items-center gap-2 mb-3 text-sm text-gray-600">
              <span class="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                {{ image.category }}
              </span>
            </div>

            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              {{ image.description }}
            </p>

            <!-- Actions -->
            <div class="flex gap-2">
              <button
                @click="editImageData(image)"
                class="flex-1 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded transition-colors text-sm"
              >
                Modifier
              </button>
              <button
                @click="deleteImageConfirm(image.id)"
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
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Aucune image</h3>
        <p class="text-gray-600 mb-6">Commencez par ajouter votre première image à la galerie</p>
        <button
          @click="showFormModal = true"
          class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Ajouter une image
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
            {{ editingId ? 'Modifier l\'image' : 'Ajouter une image' }}
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
        <form @submit.prevent="saveImage" class="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          <!-- Titre -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Titre *</label>
            <input
              v-model="formData.title"
              type="text"
              placeholder="Titre de l'image"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <!-- Catégorie -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Catégorie *</label>
            <select
              v-model="formData.category"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Sélectionner une catégorie</option>
              <option value="Tous">Tous</option>
              <option value="Théorie">Théorie</option>
              <option value="Travaux pratiques">Travaux pratiques</option>
              <option value="Stage">Stage</option>
              <option value="Sortie pédagogique">Sortie pédagogique</option>
              <option value="Autres">Autres</option>
            </select>
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Description *</label>
            <textarea
              v-model="formData.description"
              placeholder="Description de l'image"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <!-- Image Upload -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Image *</label>
            
            <!-- Drag & Drop Zone -->
            <div
              @dragover.prevent="dragOver = true"
              @dragleave.prevent="dragOver = false"
              @drop.prevent="handleImageDrop"
              :class="['relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors', 
                dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:border-gray-400']"
            >
              <input
                ref="imageInput"
                type="file"
                accept="image/*"
                class="hidden"
                @change="handleImageSelect"
              />
              
              <div v-if="!formData.image" class="space-y-2">
                <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="text-sm font-semibold text-gray-900">Glissez l'image ici</p>
                  <p class="text-xs text-gray-500">ou</p>
                  <button
                    type="button"
                    @click="imageInput.click()"
                    class="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    cliquez pour importer
                  </button>
                </div>
              </div>

              <!-- Image Preview -->
              <div v-else class="space-y-3">
                <img
                  :src="formData.image"
                  alt="Preview"
                  class="h-32 object-cover mx-auto rounded"
                />
                <p class="text-xs text-gray-600">{{ imageName }}</p>
                <button
                  type="button"
                  @click="removeImage"
                  class="text-red-600 hover:text-red-700 font-semibold text-sm"
                >
                  ✕ Retirer
                </button>
              </div>
            </div>
          </div>

          <!-- Boutons -->
          <div class="flex gap-3 pt-4 border-t">
            <button
              type="submit"
              :disabled="submitting"
              class="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors"
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
          <h3 class="text-xl font-bold text-gray-900 mb-2">Supprimer l'image ?</h3>
          <p class="text-gray-600 mb-6">Cette action est irréversible.</p>
          <div class="flex gap-3">
            <button
              @click="confirmDelete"
              :disabled="submitting"
              class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold rounded-lg transition-colors"
            >
              {{ submitting ? 'Suppression...' : 'Supprimer' }}
            </button>
            <button
              @click="showDeleteConfirm = false"
              class="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Migration Modal -->
    <div
      v-if="showMigrationConfirm"
      class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Importer les photos</h3>
          
          <div v-if="!migrationInProgress" class="space-y-4">
            <p class="text-gray-600">
              Cela va importer 22 photos de la galerie actuelle vers Firebase Firestore.
            </p>
            <p class="text-sm text-gray-500">
              Cette opération peut prendre quelques minutes. Ne fermez pas cette fenêtre.
            </p>
            
            <div class="flex gap-3">
              <button
                @click="startMigration"
                class="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Commencer l'importation
              </button>
              <button
                @click="showMigrationConfirm = false"
                class="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Annuler
              </button>
            </div>
          </div>
          
          <div v-else class="space-y-4">
            <div class="space-y-2">
              <p class="text-sm font-semibold text-gray-700">Progression</p>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div 
                  class="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  :style="{ width: `${migrationProgress}%` }"
                ></div>
              </div>
              <p class="text-sm text-gray-600">{{ migrationStatus }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGallery } from '../services/galleryService'
import { migrateGalleryToFirestore } from '../services/galleryMigration'

export default {
  name: 'AdminGallery',
  setup() {
    const router = useRouter()
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

    const formData = ref({
      title: '',
      category: '',
      description: '',
      image: ''
    })

    onMounted(() => {
      fetchGalleryImages()
    })

    const resetForm = () => {
      formData.value = {
        title: '',
        category: '',
        description: '',
        image: ''
      }
      imageName.value = ''
      editingId.value = null
    }

    const closeModal = () => {
      showFormModal.value = false
      resetForm()
    }

    const editImageData = (image) => {
      editingId.value = image.id
      formData.value = {
        title: image.title,
        category: image.category,
        description: image.description,
        image: image.image || ''
      }
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

    const deleteImageConfirm = (id) => {
      deleteConfirmId.value = id
      showDeleteConfirm.value = true
    }

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

    // Gestion des images
    const handleImageDrop = (e) => {
      dragOver.value = false
      const files = e.dataTransfer.files
      if (files.length > 0) {
        processImage(files[0])
      }
    }

    const handleImageSelect = (e) => {
      const files = e.target.files
      if (files.length > 0) {
        processImage(files[0])
      }
    }

    const processImage = (file) => {
      if (!file.type.startsWith('image/')) {
        alert('Veuillez sélectionner une image')
        return
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('L\'image ne doit pas dépasser 5MB')
        return
      }

      compressImage(file)
    }

    const compressImage = (file) => {
      const reader = new FileReader()
      
      reader.onload = (e) => {
        const img = new Image()
        
        img.onload = () => {
          const canvas = document.createElement('canvas')
          let width = img.width
          let height = img.height
          
          const MAX_WIDTH = 1200
          if (width > MAX_WIDTH) {
            height = (height * MAX_WIDTH) / width
            width = MAX_WIDTH
          }
          
          canvas.width = width
          canvas.height = height
          
          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, width, height)
          
          let compressedImage = canvas.toDataURL('image/jpeg', 0.7)
          
          if (compressedImage.length > 900000) {
            compressedImage = canvas.toDataURL('image/jpeg', 0.5)
          }
          
          if (compressedImage.length > 900000) {
            compressedImage = canvas.toDataURL('image/jpeg', 0.3)
          }
          
          formData.value.image = compressedImage
          imageName.value = file.name
          
          const originalSizeKB = (file.size / 1024).toFixed(2)
          const compressedSizeKB = (compressedImage.length / 1024).toFixed(2)
          console.log(`Image comprimée: ${originalSizeKB}KB → ${compressedSizeKB}KB`)
        }
        
        img.onerror = () => {
          alert('Impossible de charger l\'image')
        }
        img.src = e.target.result
      }
      
      reader.onerror = () => {
        alert('Erreur de lecture du fichier')
      }
      reader.readAsDataURL(file)
    }

    const removeImage = () => {
      formData.value.image = ''
      imageName.value = ''
      if (imageInput.value) {
        imageInput.value.value = ''
      }
    }

    const goToDashboard = () => {
      router.push({ name: 'AdminDashboard' })
    }

    const startMigration = async () => {
      migrationInProgress.value = true
      migrationProgress.value = 0
      migrationStatus.value = 'Préparation de la migration...'
      
      try {
        // Importer les dépendances
        const { migrateGalleryToFirestore } = await import('../services/galleryMigration')
        
        // Callback pour mettre à jour la progression
        const handleProgress = (progressData) => {
          migrationProgress.value = progressData.progress
          migrationStatus.value = progressData.status
        }
        
        // Lancer la migration avec tracking
        const results = await migrateGalleryToFirestore(handleProgress)
        
        migrationProgress.value = 100
        const successMsg = `✅ ${results.successful} image${results.successful > 1 ? 's' : ''} importée${results.successful > 1 ? 's' : ''}`
        const failMsg = results.failed > 0 ? ` | ❌ ${results.failed} échouée${results.failed > 1 ? 's' : ''}` : ''
        migrationStatus.value = successMsg + failMsg
        
        // Recharger les images après 3 secondes
        await new Promise(resolve => setTimeout(resolve, 3000))
        
        try {
          await fetchGalleryImages()
        } catch (fetchError) {
          console.error('Erreur lors du rechargement:', fetchError)
        }
        
        // Fermer le modal
        showMigrationConfirm.value = false
        migrationInProgress.value = false
        migrationProgress.value = 0
        migrationStatus.value = ''
        
      } catch (error) {
        console.error('Erreur migration complète:', error)
        migrationStatus.value = `❌ Erreur: ${error.message || 'Erreur inconnue'}`
        
        // Recharger quand même les images existantes
        try {
          await fetchGalleryImages()
        } catch (fetchError) {
          console.error('Erreur rechargement:', fetchError)
        }
        
        await new Promise(resolve => setTimeout(resolve, 3000))
        showMigrationConfirm.value = false
        migrationInProgress.value = false
      }
    }

    return {
      images,
      loading,
      error,
      showFormModal,
      showDeleteConfirm,
      showMigrationConfirm,
      submitting,
      formData,
      editingId,
      dragOver,
      imageInput,
      imageName,
      migrationInProgress,
      migrationProgress,
      migrationStatus,
      resetForm,
      closeModal,
      editImageData,
      saveImage,
      deleteImageConfirm,
      confirmDelete,
      handleImageDrop,
      handleImageSelect,
      removeImage,
      goToDashboard,
      startMigration
    }
  }
}
</script>
