<template>
  <div class="min-h-screen bg-gray-50 flex">
    <AdminSidebar />

    <div class="ml-64 flex-1 flex flex-col min-h-screen">
      <!-- Top Bar -->
      <header class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-30">
        <div>
          <h1 class="text-xl font-bold text-gray-900">Articles</h1>
          <p class="text-xs text-gray-500 mt-0.5">Gérer les articles du blog CREFER</p>
        </div>
        <button
          @click="showFormModal = true"
          class="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 font-semibold rounded-xl transition-all text-sm shadow-sm"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
          </svg>
          Nouvel article
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
        <div v-if="loading" class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="i in 6" :key="i" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
            <div class="w-full h-44 bg-gray-200"></div>
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

        <!-- Articles Grid -->
        <div v-else-if="articles.length > 0" class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="article in articles"
            :key="article.id"
            class="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all flex flex-col"
          >
            <!-- Image -->
            <div class="w-full h-44 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex-shrink-0">
              <img
                v-if="article.mainImage"
                :src="article.mainImage"
                :alt="article.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div v-else class="w-full h-full flex items-center justify-center">
                <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
            </div>

            <!-- Content -->
            <div class="p-5 flex flex-col flex-1">
              <div class="flex items-center gap-2 mb-2">
                <span class="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  {{ article.category }}
                </span>
                <span class="text-xs text-gray-400">{{ formatDate(article.date) }}</span>
              </div>
              <h3 class="text-sm font-bold text-gray-900 mb-2 line-clamp-2 flex-1">{{ article.title }}</h3>
              <p class="text-xs text-gray-500 line-clamp-2 mb-4">{{ article.description }}</p>

              <div class="flex gap-2 mt-auto">
                <button
                  @click="editArticleData(article)"
                  class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 font-semibold rounded-lg transition-all text-xs"
                >
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                  Modifier
                </button>
                <button
                  @click="deleteArticleConfirm(article.id)"
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
          <div class="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-10 h-10 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Aucun article</h3>
          <p class="text-gray-500 text-sm mb-6">Commencez par créer votre premier article</p>
          <button
            @click="showFormModal = true"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-yellow-400 hover:text-gray-900 transition-all text-sm"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
            </svg>
            Créer un article
          </button>
        </div>
      </main>
    </div>

    <!-- ========== MODAL FORMULAIRE ========== -->
    <Teleport to="body">
      <div v-if="showFormModal" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8 overflow-hidden">
          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50">
            <div>
              <h2 class="text-lg font-bold text-gray-900">
                {{ editingId ? 'Modifier l\'article' : 'Nouvel article' }}
              </h2>
              <p class="text-xs text-gray-500 mt-0.5">Remplissez les informations ci-dessous</p>
            </div>
            <button
              @click="closeModal"
              class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-all"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Form -->
          <form @submit.prevent="saveArticle" class="p-6 space-y-5 max-h-[calc(100vh-220px)] overflow-y-auto">
            <div class="grid sm:grid-cols-2 gap-4">
              <!-- Titre -->
              <div class="sm:col-span-2">
                <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Titre *</label>
                <input
                  v-model="formData.title"
                  type="text"
                  placeholder="Titre de l'article"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm transition-all"
                  required
                />
              </div>

              <!-- Catégorie -->
              <div>
                <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Catégorie *</label>
                <select
                  v-model="formData.category"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm transition-all"
                  required
                >
                  <option value="">Choisir...</option>
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
                <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Date *</label>
                <input
                  v-model="formData.date"
                  type="date"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm transition-all"
                  required
                />
              </div>
            </div>

            <!-- Description courte -->
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Description courte *</label>
              <textarea
                v-model="formData.description"
                placeholder="Résumé pour les aperçus de carte"
                rows="2"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none transition-all"
                required
              ></textarea>
            </div>

            <!-- Contenu complet -->
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Contenu complet *</label>
              <textarea
                v-model="formData.fullContent"
                placeholder="Contenu détaillé de l'article"
                rows="5"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm resize-none transition-all"
                required
              ></textarea>
            </div>

            <!-- Image principale -->
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Image principale</label>
              <div
                @dragover.prevent="dragOver = true"
                @dragleave.prevent="dragOver = false"
                @drop.prevent="handleImageDrop"
                :class="['border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all', dragOver ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300']"
                @click="imageInput.click()"
              >
                <input ref="imageInput" type="file" accept="image/*" class="hidden" @change="handleImageSelect"/>
                <div v-if="!formData.mainImage" class="space-y-2">
                  <svg class="w-8 h-8 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <p class="text-sm text-gray-500">Glissez ou cliquez pour importer</p>
                  <p class="text-xs text-gray-400">JPG, PNG, WebP — max 5MB</p>
                </div>
                <div v-else class="space-y-2" @click.stop>
                  <img :src="formData.mainImage" alt="Preview" class="h-28 object-cover mx-auto rounded-lg"/>
                  <p class="text-xs text-gray-500">{{ imageName }}</p>
                  <button type="button" @click="removeImage" class="text-xs text-red-500 hover:text-red-700 font-semibold">Retirer l'image</button>
                </div>
              </div>
            </div>

            <!-- Images galerie -->
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Images galerie</label>
              <div
                @dragover.prevent="dragOverGallery = true"
                @dragleave.prevent="dragOverGallery = false"
                @drop.prevent="handleGalleryImageDrop"
                :class="['border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all mb-3', dragOverGallery ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-gray-50 hover:border-gray-300']"
                @click="galleryImageInput.click()"
              >
                <input ref="galleryImageInput" type="file" accept="image/*" multiple class="hidden" @change="handleGalleryImageSelect"/>
                <svg class="w-8 h-8 mx-auto text-gray-300 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <p class="text-sm text-gray-500">Ajouter des images supplémentaires</p>
              </div>
              <div v-if="formData.images.length > 0" class="grid grid-cols-4 gap-2">
                <div v-for="(img, idx) in formData.images" :key="idx" class="relative group rounded-lg overflow-hidden aspect-square bg-gray-100">
                  <img :src="img" class="w-full h-full object-cover"/>
                  <button type="button" @click="removeGalleryImage(idx)" class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Boutons -->
            <div class="flex gap-3 pt-2 border-t border-gray-100">
              <button
                type="submit"
                :disabled="submitting"
                class="flex-1 px-5 py-3 bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 font-bold rounded-xl transition-all text-sm disabled:opacity-50"
              >
                {{ submitting ? 'Enregistrement...' : editingId ? 'Mettre à jour' : 'Créer l\'article' }}
              </button>
              <button type="button" @click="closeModal" class="px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all text-sm">
                Annuler
              </button>
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
          <h3 class="text-lg font-bold text-gray-900 mb-2">Supprimer cet article ?</h3>
          <p class="text-gray-500 text-sm mb-6">Cette action est irréversible. L'article sera définitivement supprimé.</p>
          <div class="flex gap-3">
            <button @click="confirmDelete" :disabled="submitting" class="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all text-sm disabled:opacity-50">
              {{ submitting ? 'Suppression...' : 'Supprimer' }}
            </button>
            <button @click="showDeleteConfirm = false" class="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all text-sm">
              Annuler
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import AdminSidebar from '../components/AdminSidebar.vue'
import { useArticles } from '../services/articlesService'

export default {
  name: 'AdminArticles',
  components: { AdminSidebar },
  setup() {
    const { articles, loading, error, fetchArticles, addArticle, editArticle, removeArticle } = useArticles()

    const showFormModal = ref(false)
    const showDeleteConfirm = ref(false)
    const submitting = ref(false)
    const editingId = ref(null)
    const deleteConfirmId = ref(null)
    const dragOver = ref(false)
    const dragOverGallery = ref(false)
    const imageInput = ref(null)
    const imageName = ref('')
    const galleryImageInput = ref(null)

    const formData = ref({
      title: '', category: '', date: '', description: '', fullContent: '', mainImage: '', images: []
    })

    onMounted(() => { fetchArticles() })

    const resetForm = () => {
      formData.value = { title: '', category: '', date: '', description: '', fullContent: '', mainImage: '', images: [] }
      imageName.value = ''
      editingId.value = null
    }

    const closeModal = () => { showFormModal.value = false; resetForm() }

    const editArticleData = (article) => {
      editingId.value = article.id
      formData.value = {
        title: article.title, category: article.category, date: article.date,
        description: article.description, fullContent: article.fullContent,
        mainImage: article.mainImage || '', images: article.images || []
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

    const deleteArticleConfirm = (id) => { deleteConfirmId.value = id; showDeleteConfirm.value = true }

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
          const MAX_WIDTH = 1200
          if (width > MAX_WIDTH) { height = (height * MAX_WIDTH) / width; width = MAX_WIDTH }
          canvas.width = width; canvas.height = height
          canvas.getContext('2d').drawImage(img, 0, 0, width, height)
          let compressed = canvas.toDataURL('image/jpeg', 0.7)
          if (compressed.length > 900000) compressed = canvas.toDataURL('image/jpeg', 0.5)
          if (compressed.length > 900000) compressed = canvas.toDataURL('image/jpeg', 0.3)
          formData.value.mainImage = compressed
          imageName.value = file.name
        }
        img.src = e.target.result
      }
      reader.readAsDataURL(file)
    }

    const removeImage = () => {
      formData.value.mainImage = ''
      imageName.value = ''
      if (imageInput.value) imageInput.value.value = ''
    }

    const handleGalleryImageDrop = (e) => {
      dragOverGallery.value = false
      if (e.dataTransfer.files.length > 0) processGalleryImages(e.dataTransfer.files)
    }

    const handleGalleryImageSelect = (e) => {
      if (e.target.files.length > 0) processGalleryImages(e.target.files)
    }

    const processGalleryImages = (files) => {
      for (let file of files) {
        if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) continue
        compressGalleryImage(file)
      }
    }

    const compressGalleryImage = (file) => {
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
          if (!formData.value.images.includes(compressed)) formData.value.images.push(compressed)
        }
        img.src = e.target.result
      }
      reader.readAsDataURL(file)
    }

    const removeGalleryImage = (index) => { formData.value.images.splice(index, 1) }

    const formatDate = (dateString) => {
      if (!dateString) return ''
      try { return new Date(dateString).toLocaleDateString('fr-FR') } catch { return dateString }
    }

    return {
      articles, loading, error, showFormModal, showDeleteConfirm, submitting, formData, editingId,
      dragOver, dragOverGallery, imageInput, galleryImageInput, imageName,
      closeModal, editArticleData, saveArticle, deleteArticleConfirm, confirmDelete,
      handleImageDrop, handleImageSelect, removeImage,
      handleGalleryImageDrop, handleGalleryImageSelect, removeGalleryImage, formatDate
    }
  }
}
</script>
