<template>
  <div class="min-h-screen bg-gray-900">
    <!-- Navigation Admin -->
    <nav class="bg-gray-800 border-b-4 border-orange-500 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <svg class="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V9.5M10.5 1.5v4.5h4.5M10.5 1.5l4.95 4.95" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <h1 class="text-2xl font-bold text-white">Admin CREFER</h1>
        </div>
        <button
          @click="logout"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
        >
          Déconnexion
        </button>
      </div>
    </nav>

    <!-- Admin Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Tabs Navigation -->
      <div class="flex gap-2 mb-8 flex-wrap">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          :class="[
            'px-6 py-3 rounded-lg font-semibold transition',
            activeTab === tab
              ? 'bg-orange-500 text-white shadow-lg'
              : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Home Section -->
      <div v-if="activeTab === 'Accueil'" class="space-y-8">
        <div class="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2 class="text-2xl font-bold text-white mb-6">Section Héro</h2>
          
          <div class="space-y-4">
            <div>
              <label class="block text-gray-300 font-semibold mb-2">Titre Principal</label>
              <textarea
                v-model="adminData.home.hero.title"
                @change="updateData('home.hero.title', adminData.home.hero.title)"
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                rows="3"
              />
            </div>

            <div>
              <label class="block text-gray-300 font-semibold mb-2">Sous-titre</label>
              <textarea
                v-model="adminData.home.hero.subtitle"
                @change="updateData('home.hero.subtitle', adminData.home.hero.subtitle)"
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                rows="2"
              />
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2 class="text-2xl font-bold text-white mb-6">Statistiques</h2>
          
          <div class="grid md:grid-cols-4 gap-6">
            <div>
              <label class="block text-gray-300 font-semibold mb-2">Jeunes Formés</label>
              <input
                v-model.number="adminData.home.stats.formed"
                @change="updateData('home.stats.formed', adminData.home.stats.formed)"
                type="number"
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label class="block text-gray-300 font-semibold mb-2">Start-ups Créées</label>
              <input
                v-model.number="adminData.home.stats.startups"
                @change="updateData('home.stats.startups', adminData.home.stats.startups)"
                type="number"
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label class="block text-gray-300 font-semibold mb-2">En Emploi</label>
              <input
                v-model.number="adminData.home.stats.employment"
                @change="updateData('home.stats.employment', adminData.home.stats.employment)"
                type="number"
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label class="block text-gray-300 font-semibold mb-2">Projets Financés</label>
              <input
                v-model.number="adminData.home.stats.projects"
                @change="updateData('home.stats.projects', adminData.home.stats.projects)"
                type="number"
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <!-- About Section -->
        <div class="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2 class="text-2xl font-bold text-white mb-6">Section À Propos</h2>
          
          <div class="space-y-4">
            <div>
              <label class="block text-gray-300 font-semibold mb-2">Description</label>
              <textarea
                v-model="adminData.home.about.description"
                @change="updateData('home.about.description', adminData.home.about.description)"
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                rows="4"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div v-if="activeTab === 'Contact'" class="bg-gray-800 rounded-lg p-8 border border-gray-700">
        <h2 class="text-2xl font-bold text-white mb-6">Page Contact</h2>
        
        <div class="space-y-4">
          <div>
            <label class="block text-gray-300 font-semibold mb-2">Titre</label>
            <input
              v-model="adminData.contact.title"
              @change="updateData('contact.title', adminData.contact.title)"
              type="text"
              class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-gray-300 font-semibold mb-2">Sous-titre</label>
            <textarea
              v-model="adminData.contact.subtitle"
              @change="updateData('contact.subtitle', adminData.contact.subtitle)"
              class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
              rows="2"
            />
          </div>
        </div>
      </div>

      <!-- Articles Section -->
      <div v-if="activeTab === 'Actualités'" class="bg-gray-800 rounded-lg p-8 border border-gray-700">
        <h2 class="text-2xl font-bold text-white mb-6">Page Actualités</h2>
        
        <div class="space-y-4">
          <div>
            <label class="block text-gray-300 font-semibold mb-2">Titre</label>
            <input
              v-model="adminData.articles.title"
              @change="updateData('articles.title', adminData.articles.title)"
              type="text"
              class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-gray-300 font-semibold mb-2">Sous-titre</label>
            <textarea
              v-model="adminData.articles.subtitle"
              @change="updateData('articles.subtitle', adminData.articles.subtitle)"
              class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
              rows="2"
            />
          </div>
        </div>
      </div>

      <!-- Admissions Section -->
      <div v-if="activeTab === 'Admissions'" class="bg-gray-800 rounded-lg p-8 border border-gray-700">
        <h2 class="text-2xl font-bold text-white mb-6">Page Admissions</h2>
        
        <div class="space-y-4">
          <div>
            <label class="block text-gray-300 font-semibold mb-2">Titre</label>
            <input
              v-model="adminData.admissions.title"
              @change="updateData('admissions.title', adminData.admissions.title)"
              type="text"
              class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-gray-300 font-semibold mb-2">Sous-titre</label>
            <textarea
              v-model="adminData.admissions.subtitle"
              @change="updateData('admissions.subtitle', adminData.admissions.subtitle)"
              class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
              rows="2"
            />
          </div>
        </div>
      </div>

      <!-- Reset Data -->
      <div class="mt-12 bg-gray-800 rounded-lg p-8 border border-red-700">
        <h2 class="text-2xl font-bold text-white mb-4">Options Avancées</h2>
        <p class="text-gray-400 mb-4">Réinitialiser les données à leurs valeurs par défaut.</p>
        <button
          @click="resetData"
          class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
        >
          Réinitialiser les Données
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAdminData, useAdminAuth } from '../composables/useAdminData'
import { useRouter } from 'vue-router'

export default {
  name: 'Admin',
  setup() {
    const router = useRouter()
    const { adminData, updateData, resetData } = useAdminData()
    const { logout: authLogout } = useAdminAuth()
    const activeTab = ref('Accueil')
    const tabs = ['Accueil', 'Contact', 'Actualités', 'Admissions']

    const logout = () => {
      authLogout()
      router.push('/')
    }

    return {
      adminData,
      updateData,
      resetData,
      activeTab,
      tabs,
      logout
    }
  }
}
</script>
