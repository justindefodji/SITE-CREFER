<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Blog de Formation Professionnelle
          </h1>
          <p class="text-xl text-blue-100 max-w-2xl mx-auto">
            Guides, conseils et tendances du secteur électrique et énergies renouvelables
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Search & Filter -->
      <div class="mb-12">
        <div class="flex flex-col md:flex-row gap-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher un article..."
            class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            v-model="selectedCategory"
            class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Toutes les catégories</option>
            <option value="formation">Formation</option>
            <option value="carriere">Carrière</option>
            <option value="solaire">Énergie Solaire</option>
            <option value="guide">Guide Pratique</option>
          </select>
        </div>
      </div>

      <!-- Articles Grid -->
      <div v-if="filteredArticles.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="article in filteredArticles"
          :key="article.id"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden bg-gray-200">
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div class="absolute top-4 right-4">
              <span class="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                {{ article.category }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Meta -->
            <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <span>{{ formatDate(article.date) }}</span>
              <span>•</span>
              <span>{{ article.readTime }} min</span>
            </div>

            <!-- Title -->
            <h2 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
              {{ article.title }}
            </h2>

            <!-- Description -->
            <p class="text-gray-600 text-sm mb-4">
              {{ article.description }}
            </p>

            <!-- Author -->
            <div class="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <div class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                {{ article.author[0] }}
              </div>
              <span>{{ article.author }}</span>
            </div>

            <!-- Read More Link -->
            <router-link
              :to="`/blog/${article.id}`"
              class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Lire l'article
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </article>
      </div>

      <!-- No Results -->
      <div v-else class="text-center py-12">
        <p class="text-xl text-gray-600">Aucun article ne correspond à votre recherche.</p>
        <button
          @click="resetFilters"
          class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Réinitialiser les filtres
        </button>
      </div>

      <!-- Newsletter Signup -->
      <section class="mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg">
        <div class="max-w-2xl mx-auto text-center">
          <h3 class="text-2xl font-bold mb-2">Restez Informé</h3>
          <p class="text-blue-100 mb-6">
            Recevez nos nouveaux articles, guides et offres directement dans votre email
          </p>
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-3">
            <input
              v-model="newsletterEmail"
              type="email"
              placeholder="Votre email"
              required
              class="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              class="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useSEO } from '@/composables/useSEO'
import { trackPageView } from '@/composables/useGoogleAnalytics'

export default {
  name: 'Blog',
  setup() {
    const seo = useSEO()
    const searchQuery = ref('')
    const selectedCategory = ref('')
    const newsletterEmail = ref('')

    onMounted(() => {
      seo.setSEO({
        title: 'Blog CREFER - Formations, Carrière et Énergies Renouvelables',
        description: 'Découvrez nos guides complets sur la formation électricité, CAP, BT, énergies renouvelables et carrière au Togo.',
        keywords: 'blog formation, guide électricité, carrière, formation solaire, CREFER blog',
        canonical: 'https://crefer.tech/blog'
      })

      trackPageView('blog_page_view')
    })

    const articles = [
      {
        id: 'article-1',
        title: 'Comment devenir électricien professionnel: Guide complet 2025',
        description: 'Guide complet pour devenir électricien au Togo. Découvrez les étapes, formations requises, salaires et débouchés professionnels.',
        category: 'Carrière',
        author: 'Équipe CREFER',
        date: new Date('2025-12-13'),
        readTime: 12,
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
        keywords: ['électricien', 'CAP', 'formation', 'carrière']
      },
      {
        id: 'article-2',
        title: 'Formation Solaire Modulaire: Maîtrisez les Énergies Renouvelables',
        description: 'Explorez la formation solaire modulaire flexible. Apprenez à votre rythme et obtenez une certification en énergies renouvelables.',
        category: 'Énergie Solaire',
        author: 'Équipe CREFER',
        date: new Date('2025-12-14'),
        readTime: 10,
        image: 'https://images.unsplash.com/photo-1509391366360-2e938m0900d?w=600&h=400&fit=crop',
        keywords: ['solaire', 'modulaire', 'formation', 'énergies renouvelables']
      },
      {
        id: 'article-3',
        title: 'CAP vs BT Électrotechnique: Comparaison Complète 2025',
        description: 'Comparaison détaillée entre le CAP et le BT électrotechnique. Salaires, contenus, débouchés et comment choisir.',
        category: 'Formation',
        author: 'Équipe CREFER',
        date: new Date('2025-12-15'),
        readTime: 9,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
        keywords: ['CAP', 'BT', 'électrotechnique', 'comparaison']
      },
      {
        id: 'article-4',
        title: 'Les 7 Métiers de l\'Électricité les Plus Demandés en Afrique',
        description: 'Découvrez les 7 métiers électriques les plus demandés en Afrique avec salaires, débouchés et tendances 2025.',
        category: 'Carrière',
        author: 'Équipe CREFER',
        date: new Date('2025-12-16'),
        readTime: 8,
        image: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=600&h=400&fit=crop',
        keywords: ['métiers', 'électricité', 'afrique', 'emploi']
      },
      {
        id: 'article-5',
        title: 'Guide Complet: Installation Panneaux Solaires Résidentiel',
        description: 'Guide étape-par-étape pour installer des panneaux solaires. Processus, coûts, ROI et devenir installateur certifié.',
        category: 'Guide Pratique',
        author: 'Expert Solaire CREFER',
        date: new Date('2025-12-17'),
        readTime: 10,
        image: 'https://images.unsplash.com/photo-1556694712202-b53c5008b6a7?w=600&h=400&fit=crop',
        keywords: ['solaire', 'installation', 'guide', 'panneaux']
      },
      {
        id: 'article-6',
        title: 'Comment Financer Votre Formation Électricité à CREFER: 5 Options',
        description: '5 options pour financer votre formation CAP ou BT. Bourses, prêts, paiement progressif et plus.',
        category: 'Formation',
        author: 'Service Admission CREFER',
        date: new Date('2025-12-18'),
        readTime: 6,
        image: 'https://images.unsplash.com/photo-1554224311-beee415c15c9?w=600&h=400&fit=crop',
        keywords: ['financement', 'bourse', 'formation', 'admission']
      },
      {
        id: 'article-7',
        title: 'Énergies Renouvelables en Afrique: Tendances et Carrières 2025-2030',
        description: 'Analyse du marché des énergies renouvelables en Afrique. Opportunités carrière, tendances et impact social.',
        category: 'Énergie Solaire',
        author: 'Consultant Énergies CREFER',
        date: new Date('2025-12-19'),
        readTime: 12,
        image: 'https://images.unsplash.com/photo-1497440717519-b2e0ffb4e1fc?w=600&h=400&fit=crop',
        keywords: ['énergies renouvelables', 'afrique', 'tendances', 'carrière']
      }
    ]

    const filteredArticles = computed(() => {
      return articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                             article.description.toLowerCase().includes(searchQuery.value.toLowerCase())
        const matchesCategory = !selectedCategory.value || 
                               article.category.toLowerCase().includes(selectedCategory.value.toLowerCase())
        return matchesSearch && matchesCategory
      })
    })

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    const resetFilters = () => {
      searchQuery.value = ''
      selectedCategory.value = ''
    }

    const subscribeNewsletter = () => {
      if (newsletterEmail.value) {
        trackPageView('newsletter_subscription', {
          email: newsletterEmail.value
        })
        alert('Merci de votre abonnement! Vérifiez votre email.')
        newsletterEmail.value = ''
      }
    }

    return {
      searchQuery,
      selectedCategory,
      newsletterEmail,
      filteredArticles,
      articles,
      formatDate,
      resetFilters,
      subscribeNewsletter
    }
  }
}
</script>

<style scoped>
/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

article {
  animation: fadeIn 0.6s ease-out;
}
</style>
