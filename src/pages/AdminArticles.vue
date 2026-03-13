<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <!-- Header -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-bold mb-2">Gestion des Articles</h1>
        <p class="text-blue-100">Créer, modifier et supprimer des articles</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Button Ajouter Article -->
      <div class="mb-8">
        <button
          @click="showFormModal = true"
          class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Nouvel Article
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

      <!-- Articles Grid -->
      <div v-if="!loading && articles.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="article in articles"
          :key="article.id"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
        >
          <!-- Article Image -->
          <div v-if="article.mainImage" class="w-full h-48 bg-gray-200 overflow-hidden">
            <img
              :src="article.mainImage"
              :alt="article.title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Article Content -->
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {{ article.title }}
            </h3>

            <div class="flex items-center gap-2 mb-3 text-sm text-gray-600">
              <span class="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                {{ article.category }}
              </span>
              <span class="text-gray-500">{{ formatDate(article.date) }}</span>
            </div>

            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              {{ article.description }}
            </p>

            <!-- Actions -->
            <div class="flex gap-2">
              <button
                @click="editArticleData(article)"
                class="flex-1 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded transition-colors text-sm"
              >
                Modifier
              </button>
              <button
                @click="deleteArticleConfirm(article.id)"
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
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v4m6 0a2 2 0 01-2 2h-2.5a2 2 0 01-2-2m0-4a2 2 0 012-2h2.5a2 2 0 012 2m0 4v4a2 2 0 01-2 2h-.5a2 2 0 01-2-2m0-4V6a2 2 0 012-2h.5a2 2 0 012 2" />
        </svg>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Aucun article</h3>
        <p class="text-gray-600 mb-6">Commencez par créer votre premier article</p>
        <button
          @click="showFormModal = true"
          class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Créer un article
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
            {{ editingId ? 'Modifier l\'article' : 'Nouvel article' }}
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
        <form @submit.prevent="saveArticle" class="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          <!-- Titre -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Titre *</label>
            <input
              v-model="formData.title"
              type="text"
              placeholder="Titre de l'article"
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
              <option value="Événement">Événement</option>
              <option value="Formation">Formation</option>
              <option value="Réussite">Réussite</option>
              <option value="Stage">Stage</option>
              <option value="Examen">Examen</option>
              <option value="Actualités">Actualités</option>
            </select>
          </div>

          <!-- Date -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Date *</label>
            <input
              v-model="formData.date"
              type="date"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <!-- Description courte -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Description courte *</label>
            <textarea
              v-model="formData.description"
              placeholder="Courte description pour la carte"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <!-- Contenu complet -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Contenu complet *</label>
            <textarea
              v-model="formData.fullContent"
              placeholder="Contenu détaillé de l'article"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <!-- Image principale URL -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-2">Image principale</label>
            
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
              
              <div v-if="!formData.mainImage" class="space-y-2">
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
                  :src="formData.mainImage"
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
              {{ submitting ? 'Sauvegarde...' : editingId ? 'Mettre à jour' : 'Créer' }}
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
          <h3 class="text-xl font-bold text-gray-900 mb-2">Supprimer l'article ?</h3>
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
import { useArticles } from '../services/articlesService'

export default {
  name: 'AdminArticles',
  setup() {
    const { articles, loading, error, fetchArticles, addArticle, editArticle, removeArticle } = useArticles()

    const showFormModal = ref(false)
    const showDeleteConfirm = ref(false)
    const submitting = ref(false)
    const editingId = ref(null)
    const deleteConfirmId = ref(null)
    const dragOver = ref(false)
    const imageInput = ref(null)
    const imageName = ref('')

    const formData = ref({
      title: '',
      category: '',
      date: '',
      description: '',
      fullContent: '',
      mainImage: ''
    })

    onMounted(() => {
      fetchArticles()
    })

    const resetForm = () => {
      formData.value = {
        title: '',
        category: '',
        date: '',
        description: '',
        fullContent: '',
        mainImage: ''
      }
      imageName.value = ''
      editingId.value = null
    }

    const closeModal = () => {
      showFormModal.value = false
      resetForm()
    }

    const editArticleData = (article) => {
      editingId.value = article.id
      formData.value = {
        title: article.title,
        category: article.category,
        date: article.date,
        description: article.description,
        fullContent: article.fullContent,
        mainImage: article.mainImage || ''
      }
      showFormModal.value = true
    }

    const saveArticle = async () => {
      submitting.value = true
      try {
        if (editingId.value) {
          await editArticle(editingId.value, formData.value)
        } else {
          await addArticle(formData.value)
        }
        closeModal()
      } catch (err) {
        console.error('Erreur:', err)
      } finally {
        submitting.value = false
      }
    }

    const deleteArticleConfirm = (id) => {
      deleteConfirmId.value = id
      showDeleteConfirm.value = true
    }

    const confirmDelete = async () => {
      submitting.value = true
      try {
        await removeArticle(deleteConfirmId.value)
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
      // Vérifier que c'est une image
      if (!file.type.startsWith('image/')) {
        alert('Veuillez sélectionner une image')
        return
      }

      // Vérifier la taille (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('L\'image ne doit pas dépasser 5MB')
        return
      }

      // Lire le fichier en base64
      const reader = new FileReader()
      reader.onload = (e) => {
        formData.value.mainImage = e.target.result
        imageName.value = file.name
      }
      reader.readAsDataURL(file)
    }

    const removeImage = () => {
      formData.value.mainImage = ''
      imageName.value = ''
      if (imageInput.value) {
        imageInput.value.value = ''
      }
    }

    const formatDate = (dateString) => {
      if (!dateString) return ''
      try {
        const date = new Date(dateString)
        return date.toLocaleDateString('fr-FR')
      } catch {
        return dateString
      }
    }

    return {
      articles,
      loading,
      error,
      showFormModal,
      showDeleteConfirm,
      submitting,
      formData,
      editingId,
      dragOver,
      imageInput,
      imageName,
      resetForm,
      closeModal,
      editArticleData,
      saveArticle,
      deleteArticleConfirm,
      confirmDelete,
      handleImageDrop,
      handleImageSelect,
      removeImage,
      formatDate
    }
  }
}
</script>
