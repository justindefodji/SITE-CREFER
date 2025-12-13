<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="inline-block mb-4 px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
          Formation Professionnelle
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          {{ article.title }}
        </h1>
        <div class="flex flex-wrap gap-4 text-sm text-blue-100">
          <span>{{ article.author }}</span>
          <span>•</span>
          <span>{{ formatDate(article.date) }}</span>
          <span>•</span>
          <span>{{ article.readTime }} min de lecture</span>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Featured Image -->
      <img 
        :src="article.image" 
        :alt="article.title"
        class="w-full h-96 object-cover rounded-lg mb-12 shadow-lg"
        loading="lazy"
      />

      <!-- Content -->
      <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
        <!-- Introduction -->
        <div class="text-xl text-gray-600 italic font-semibold mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          {{ article.introduction }}
        </div>

        <!-- Article Content -->
        <div v-html="article.content"></div>
      </div>

      <!-- Key Takeaways -->
      <div class="mt-16 p-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">À Retenir</h3>
        <ul class="space-y-3">
          <li v-for="(point, index) in article.keyPoints" :key="index" class="flex items-start">
            <svg class="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700">{{ point }}</span>
          </li>
        </ul>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center p-12 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg">
        <h3 class="text-2xl font-bold mb-4">Prêt à commencer votre formation?</h3>
        <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
          Rejoignez les {{ stats.students }}+ étudiants qui ont transformé leur carrière
        </p>
        <router-link
          to="/admissions"
          class="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-lg transition-shadow"
        >
          Postuler Maintenant
        </router-link>
      </div>

      <!-- Related Articles -->
      <div v-if="article.relatedArticles && article.relatedArticles.length > 0" class="mt-16">
        <h3 class="text-3xl font-bold text-gray-800 mb-8">Articles Connexes</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div 
            v-for="related in article.relatedArticles" 
            :key="related.id"
            class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h4 class="text-xl font-semibold text-gray-800 mb-2">{{ related.title }}</h4>
            <p class="text-gray-600">{{ related.description }}</p>
            <router-link
              :to="`/blog/${related.id}`"
              class="text-blue-600 font-semibold hover:text-blue-700 mt-4 inline-block"
            >
              Lire l'article →
            </router-link>
          </div>
        </div>
      </div>
    </article>

    <!-- Share Section -->
    <section class="border-t border-gray-200 py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-gray-700 font-semibold mb-4">Partager cet article:</p>
        <div class="flex gap-4">
          <a href="#" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span class="ml-2">Facebook</span>
          </a>
          <a href="#" class="inline-flex items-center px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            <span class="ml-2">Twitter</span>
          </a>
          <a href="#" class="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.833 0-9.749h3.554v1.381c.43-.664 1.199-1.608 2.918-1.608 2.135 0 3.735 1.39 3.735 4.375v5.601zM5.337 5.433c-1.144 0-1.915-.759-1.915-1.71 0-.956.768-1.71 1.958-1.71 1.188 0 1.915.757 1.932 1.71 0 .951-.744 1.71-1.975 1.71zm1.582 14.019H3.656V9.703h3.263v9.749zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            <span class="ml-2">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useSEO } from '@/composables/useSEO'
import { trackPageView } from '@/composables/useGoogleAnalytics'

export default {
  name: 'BlogArticle1',
  setup() {
    const seo = useSEO()

    onMounted(() => {
      seo.setSEO({
        title: 'Comment devenir électricien professionnel: Guide complet 2025',
        description: 'Guide complet pour devenir électricien au Togo. Découvrez les étapes, formations requises, salaires et débouchés professionnels.',
        keywords: 'devenir électricien, formation électricien, CAP électricité, métier électricien',
        canonical: 'https://crefer.tech/blog/devenir-electricien'
      })
      
      seo.setStructuredData({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Comment devenir électricien professionnel: Guide complet 2025',
        description: 'Guide complet pour devenir électricien au Togo',
        image: require('@/assets/images/blog-electricien.jpg'),
        author: {
          '@type': 'Organization',
          name: 'CREFER'
        },
        datePublished: '2025-12-13',
        articleBody: 'Contenu de l\'article...'
      })

      trackPageView('blog_article_1_view')
    })

    const article = {
      title: 'Comment devenir électricien professionnel: Guide complet 2025',
      author: 'Équipe CREFER',
      date: new Date('2025-12-13'),
      readTime: 12,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
      introduction: 'La profession d\'électricien offre des opportunités carrière exceptionnelles au Togo et en Afrique de l\'Ouest. Avec la croissance des énergies renouvelables, la demande pour les électriciens qualifiés explose. Découvrez comment accéder à ce métier rémunérateur et en demande.',
      content: `
        <h2>Pourquoi devenir électricien en 2025?</h2>
        <p>Le secteur électrique connaît une révolution grâce aux énergies renouvelables. Les panneaux solaires, les installations électriques modernes et la maintenance des réseaux créent des milliers de postes chaque année.</p>
        <p><strong>Les avantages du métier d'électricien:</strong></p>
        <ul>
          <li>Salaire compétitif et progression rapide</li>
          <li>Forte demande (pénurie de personnel qualifié)</li>
          <li>Flexibilité: indépendant ou salarié</li>
          <li>Travail varié et enrichissant</li>
          <li>Débouchés internationaux</li>
        </ul>

        <h2>Les étapes pour devenir électricien</h2>
        <h3>1. Éducation de base (Obligatoire)</h3>
        <p>Avoir le BEPC ou équivalent est essentiel. C'est le fondement pour accéder à une formation professionnelle.</p>

        <h3>2. Formation professionnelle (CAP)</h3>
        <p>Le Certificat d'Aptitude Professionnelle (CAP) en électricité dure 2-3 ans. C'est la qualification minimale requise pour travailler comme électricien. À CREFER, nous offrons:</p>
        <ul>
          <li>Formation théorique solide</li>
          <li>Pratique intensive sur matériel réel</li>
          <li>Stages en entreprise</li>
          <li>Certification reconnue par l'État</li>
        </ul>

        <h3>3. Spécialisation (BT Électrotechnique)</h3>
        <p>Après le CAP, poursuivre avec un BT électrotechnique offre des responsabilités supérieures et des salaires plus élevés.</p>

        <h2>Formation CAP Électricité à CREFER</h2>
        <p><strong>Durée:</strong> 2 ans</p>
        <p><strong>Coût:</strong> Tarif compétitif avec options de financement</p>
        <p><strong>Contenu du programme:</strong></p>
        <ul>
          <li>Circuits électriques et schémas</li>
          <li>Installation et entretien</li>
          <li>Sécurité électrique</li>
          <li>Énergie solaire (introduction)</li>
          <li>Projets pratiques réels</li>
        </ul>

        <h2>Débouchés et salaires</h2>
        <p>Un électricien qualifié au Togo gagne:</p>
        <ul>
          <li><strong>Débutant (CAP):</strong> 80 000 - 150 000 FCFA/mois</li>
          <li><strong>Confirmé (3-5 ans):</strong> 150 000 - 250 000 FCFA/mois</li>
          <li><strong>Expert/Indépendant:</strong> 250 000+ FCFA/mois</li>
        </ul>
        <p>Ces chiffres varient selon l'entreprise, la région et votre spécialisation.</p>

        <h2>Qualités essentielles d'un bon électricien</h2>
        <ul>
          <li>Rigueur et attention aux détails</li>
          <li>Sécurité en priorité absolue</li>
          <li>Résolution de problèmes</li>
          <li>Communication avec les clients</li>
          <li>Apprentissage continu (nouvelle technologie)</li>
        </ul>

        <h2>Prochaines étapes chez CREFER</h2>
        <p>Prêt à démarrer votre carrière électrique? CREFER propose des sessions d'admission régulières avec:</p>
        <ul>
          <li>Entretien personnalisé</li>
          <li>Visite des installations</li>
          <li>Présentation des débouchés</li>
          <li>Information sur les financement/bourses</li>
        </ul>
      `,
      keyPoints: [
        'Le métier d\'électricien est très demandé au Togo avec des salaires attrayants',
        'Le CAP électricité est la qualification minimale requise (2-3 ans)',
        'La spécialisation en énergies renouvelables augmente les opportunités',
        'CREFER offre une formation reconnue avec 95% de taux de placement',
        'Les débouchés incluent l\'emploi salarié ou l\'entrepreneuriat'
      ],
      relatedArticles: [
        {
          id: 'article-2',
          title: 'Formation modulaire en solaire: Flexibilité et efficacité',
          description: 'Explorez les avantages de la formation modulaire en énergies renouvelables'
        },
        {
          id: 'article-3',
          title: 'CAP vs BT Électrotechnique: Quelle formation choisir?',
          description: 'Comparaison détaillée pour faire le bon choix'
        }
      ]
    }

    const stats = {
      students: 3000,
      employed: 2850,
      partners: 45
    }

    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric', locale: 'fr-FR' }
      return new Date(date).toLocaleDateString('fr-FR', options)
    }

    return {
      article,
      stats,
      formatDate
    }
  }
}
</script>

<style scoped>
.prose {
  color: #4b5563;
}

.prose h2 {
  @apply text-3xl font-bold text-gray-800 mt-10 mb-6 pt-6 border-t-2 border-blue-200;
}

.prose h3 {
  @apply text-2xl font-bold text-gray-800 mt-8 mb-4;
}

.prose p {
  @apply mb-4 leading-relaxed;
}

.prose ul, .prose ol {
  @apply ml-6 mb-4 space-y-2;
}

.prose li {
  @apply text-gray-700;
}

.prose li::marker {
  @apply text-blue-600 font-bold;
}
</style>
