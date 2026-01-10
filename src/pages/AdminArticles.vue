<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2" style="font-family: 'Montserrat', sans-serif;">Admin Articles</h1>
        <p class="text-gray-600">Gérez vos articles et actualités</p>
      </div>

      <!-- Add New Article Button -->
      <button
        @click="newArticle"
        class="mb-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
      >
        + Nouvel Article
      </button>

      <!-- Articles List -->
      <div class="grid gap-6">
        <div
          v-for="article in articles"
          :key="article.id"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
        >
          <div class="flex justify-between items-start mb-4">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ article.title }}</h3>
              <p class="text-gray-600 text-sm mb-2 line-clamp-2">{{ article.description }}</p>
              <div class="flex gap-4 text-xs text-gray-500">
                <span>📅 {{ formatDate(article.date) }}</span>
                <span>🏷️ {{ article.category }}</span>
              </div>
            </div>
            <div class="flex gap-2 ml-4">
              <button
                @click="editArticle(article)"
                class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors duration-200"
              >
                Éditer
              </button>
              <button
                @click="deleteArticle(article.id)"
                class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-colors duration-200"
              >
                Supprimer
              </button>
            </div>
          </div>

          <!-- Preview Images -->
          <div v-if="article.images && article.images.length > 0" class="flex gap-2 overflow-x-auto">
            <img
              v-for="(image, index) in article.images.slice(0, 3)"
              :key="index"
              :src="image"
              :alt="`Preview ${index}`"
              class="h-20 w-20 object-cover rounded"
            />
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="articles.length === 0" class="text-center py-12">
          <p class="text-gray-500 text-lg">Aucun article. Créez-en un pour commencer.</p>
        </div>
      </div>

      <!-- Edit Modal -->
      <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
          <!-- Modal Header -->
          <div class="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 text-white p-6 flex justify-between items-center border-b">
            <h2 class="text-2xl font-bold">{{ editingArticle.id ? 'Éditer Article' : 'Nouvel Article' }}</h2>
            <button @click="closeModal" class="text-2xl hover:opacity-80">×</button>
          </div>

          <!-- Modal Body -->
          <div class="p-6 space-y-6">
            <!-- Title -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Titre</label>
              <input
                v-model="editingArticle.title"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="Titre de l'article"
              />
            </div>

            <!-- Description -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                v-model="editingArticle.description"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent h-24"
                placeholder="Description courte"
              ></textarea>
            </div>

            <!-- Content -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Contenu</label>
              <textarea
                v-model="editingArticle.content"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent h-40"
                placeholder="Contenu de l'article"
              ></textarea>
            </div>

            <!-- Category -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Catégorie</label>
              <input
                v-model="editingArticle.category"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="ex: Actualités, Projets"
              />
            </div>

            <!-- Image Upload -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Images</label>
              <input
                type="file"
                multiple
                accept="image/*"
                @change="handleImageUpload"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              <p class="text-xs text-gray-500 mt-1">Sélectionnez une ou plusieurs images</p>

              <!-- Preview Existing Images -->
              <div v-if="editingArticle.images && editingArticle.images.length > 0" class="mt-4">
                <p class="text-sm font-semibold text-gray-700 mb-2">Aperçu des images</p>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div v-for="(image, index) in editingArticle.images" :key="index" class="relative group">
                    <img
                      :src="image"
                      :alt="`Image ${index}`"
                      class="w-full h-24 object-cover rounded"
                    />
                    <button
                      @click="removeImage(index)"
                      class="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-sm font-bold"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Save Button -->
            <div class="flex gap-4 pt-6 border-t">
              <button
                @click="saveArticle"
                class="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Sauvegarder
              </button>
              <button
                @click="closeModal"
                class="flex-1 px-4 py-3 bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold rounded-lg transition-colors duration-200"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useArticles, mergeArticleImages } from '../services/articlesService'
import { useSEO } from '@/composables/useSEO'

export default {
  name: 'AdminArticles',
  setup() {
    const seo = useSEO()
    const { articles, saveArticles, getArticleById } = useArticles()
    const showModal = ref(false)
    const editingArticle = ref(null)

    onMounted(() => {
      // Configurer le SEO
      seo.setSEO({
        title: 'Admin Articles - Gestion du Contenu - CREFER',
        description: 'Panel d\'administration pour gérer les articles et actualités de CREFER. Créez, éditez et publiez du contenu facilement.',
        keywords: 'admin articles, gestion contenu, actualités CREFER, panel administration',
        canonical: 'https://crefer.tech/admin/articles'
      })
    })

    const newArticle = () => {
      editingArticle.value = {
        id: Date.now().toString(),
        title: '',
        description: '',
        content: '',
        category: '',
        date: new Date().toISOString().split('T')[0],
        images: []
      }
      showModal.value = true
    }

    const editArticle = (article) => {
      const original = getArticleById(article.id)
      editingArticle.value = {
        ...original,
        images: original.images ? [...original.images] : []
      }
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
      editingArticle.value = null
    }

    const handleImageUpload = (event) => {
      const files = event.target.files
      if (!files) return

      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (!editingArticle.value.images) {
            editingArticle.value.images = []
          }
          editingArticle.value.images.push(e.target.result)
        }
        reader.readAsDataURL(file)
      })
    }

    const removeImage = (index) => {
      editingArticle.value.images.splice(index, 1)
    }

    const saveArticle = () => {
      if (!editingArticle.value.title.trim()) {
        alert('Veuillez entrer un titre')
        return
      }

      const existingArticle = getArticleById(editingArticle.value.id)
      let articleToSave = { ...editingArticle.value }

      // Preserve images when editing
      if (existingArticle && existingArticle.images && existingArticle.images.length > 0) {
        articleToSave = mergeArticleImages(existingArticle, editingArticle.value)
      }

      const index = articles.value.findIndex(a => a.id === articleToSave.id)
      if (index >= 0) {
        articles.value[index] = articleToSave
      } else {
        articles.value.push(articleToSave)
      }

      saveArticles(articles.value)
      closeModal()
    }

    const deleteArticle = (id) => {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
        const index = articles.value.findIndex(a => a.id === id)
        if (index >= 0) {
          articles.value.splice(index, 1)
          saveArticles(articles.value)
        }
      }
    }

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    return {
      articles,
      showModal,
      editingArticle,
      newArticle,
      editArticle,
      closeModal,
      handleImageUpload,
      removeImage,
      saveArticle,
      deleteArticle,
      formatDate
    }
  }
}
</script>

<style scoped>
/* Custom scrollbar for modal */
div::-webkit-scrollbar {
  width: 8px;
}

div::-webkit-scrollbar-track {
  background: #f1f1f1;
}

div::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

div::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
