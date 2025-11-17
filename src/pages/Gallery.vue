<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative h-96 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white flex items-center overflow-hidden">
      <!-- Background Overlay -->
      <div class="absolute inset-0 bg-black/40 z-10"></div>
      
      <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-20">
        <div>
          <h2 class="text-5xl lg:text-6xl font-bold mb-4">
            <span class="text-orange-400">GALERIE/</span>
          </h2>
          <p class="text-xl lg:text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Grid Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <!-- Filter Tabs -->
        <div class="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-full font-semibold transition-colors',
              selectedCategory === category
                ? 'bg-orange-400 text-white'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-400'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <!-- Image -->
            <div class="w-full h-64 bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
              {{ item.icon }}
            </div>

            <!-- Overlay on Hover -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
              <div class="w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 class="font-bold text-lg">{{ item.title }}</h3>
                <p class="text-sm opacity-90">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredItems.length === 0" class="text-center py-12">
          <p class="text-gray-500 text-lg">Aucune image dans cette catégorie</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Galerie Complète</h2>
        <p class="text-lg text-gray-600 mb-8">
          Découvrez nos installations, nos formations et nos étudiants en action
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="px-8 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors font-bold">
            Charger plus de photos
          </button>
          <router-link
            to="/contact"
            class="px-8 py-3 border-2 border-orange-400 text-orange-400 rounded-lg hover:bg-orange-400 hover:text-white transition-colors font-bold"
          >
            Demander une visite
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'Gallery',
  setup() {
    const selectedCategory = ref('Tous')
    const categories = ['Tous', 'Formation', 'Étudiants', 'Installations', 'Pratique', 'Projets']
    
    const galleryItems = [
      { 
        id: 1, 
        title: 'Travaux Pratiques', 
        description: 'Électricité en atelier',
        category: 'Pratique', 
        icon: '🔧' 
      },
      { 
        id: 2, 
        title: 'Formation', 
        description: 'Cours avec instructeurs',
        category: 'Formation', 
        icon: '👨‍🏫' 
      },
      { 
        id: 3, 
        title: 'Étudiants', 
        description: 'Groupe de formation',
        category: 'Étudiants', 
        icon: '👥' 
      },
      { 
        id: 4, 
        title: 'Électricité', 
        description: 'Travaux pratiques',
        category: 'Pratique', 
        icon: '⚡' 
      },
      { 
        id: 5, 
        title: 'Experts', 
        description: 'Formateurs qualifiés',
        category: 'Formation', 
        icon: '👨‍💼' 
      },
      { 
        id: 6, 
        title: 'Projet Solaire', 
        description: 'Installation panneaux',
        category: 'Installations', 
        icon: '☀️' 
      },
      { 
        id: 7, 
        title: 'Équipe', 
        description: 'Sur chantier',
        category: 'Étudiants', 
        icon: '👷' 
      },
      { 
        id: 8, 
        title: 'Installation', 
        description: 'Système photovoltaïque',
        category: 'Installations', 
        icon: '🔩' 
      },
      { 
        id: 9, 
        title: 'Projet', 
        description: 'Travail en équipe',
        category: 'Projets', 
        icon: '🛠️' 
      },
    ]

    const filteredItems = computed(() => {
      if (selectedCategory.value === 'Tous') {
        return galleryItems
      }
      return galleryItems.filter(item => item.category === selectedCategory.value)
    })

    return {
      selectedCategory,
      categories,
      filteredItems
    }
  }
}
</script>
