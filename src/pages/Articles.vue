<template>
  <div class="min-h-screen bg-white">
    <!-- Header Section -->
    <section
      class="relative py-12 px-4 sm:px-6 lg:px-8 border-b overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    >
      <!-- Dark overlay for contrast -->
      <div class="absolute inset-0 bg-black/55 z-10"></div>
      <!-- Gradient noir de bas vers le haut -->
      <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent z-15"></div>
      
      <div class="max-w-7xl mx-auto relative z-20 pt-24">
        <h1 class="text-3xl lg:text-5xl font-bold text-white mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">NOS ACTUALITÉS</h1>
        <p class="text-lg lg:text-xl text-blue-100">Découvrez les dernières actualités et projets de CREFER</p>
      </div>
    </section>

    <!-- Articles Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 to-amber-50">
      <div class="max-w-7xl mx-auto">
        <div class="space-y-12">
          <!-- Article 1 - Soutenance Mémoire -->
          <article class="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <!-- Image Left -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="rounded-lg overflow-hidden shadow-lg w-full aspect-square">
                <img 
                  :src="soutenanceImageUrl" 
                  alt="Soutenance Mémoire" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <!-- Content Right -->
            <div class="w-full lg:w-3/5">
              <p class="text-yellow-500 font-semibold mb-2">31 OCTOBRE 2025</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                Soutenance de Mémoire - Promotion 12 SPV
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Ce vendredi 31 octobre, 12 étudiants de la filière SPV (Solaire Photovoltaïque) soutiendront leur mémoire de fin de formation. Une étape décisive qui marque l'aboutissement de plusieurs mois d'efforts, de rigueur et de passion pour l'électricité et l'énergie solaire.
              </p>
              <div class="flex items-center gap-2 text-gray-600 mb-4">
                <span>📍</span>
                <span>Annexe CREFER, au bord des pavés de Totsi</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600 mb-6">
                <span>🕐</span>
                <span>08h00 - 12h00</span>
              </div>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors gap-2"
              >
                <span>En savoir plus</span>
                <span>→</span>
              </a>
            </div>
          </article>

          <!-- Divider -->
          <div class="my-8 border-t border-gray-200"></div>

          <!-- Article 2 - 14ème Promotion Modulaire -->
          <article class="flex flex-col lg:flex-row-reverse gap-8 items-start lg:items-center">
            <!-- Image Right -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="rounded-lg overflow-hidden shadow-lg w-full aspect-square">
                <img 
                  :src="promotionImageUrl" 
                  alt="14ème Promotion Modulaire" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <!-- Content Left -->
            <div class="w-full lg:w-3/5">
              <p class="text-yellow-500 font-semibold mb-2">14 OCTOBRE 2025</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                Lancement de la 14ème Promotion des Formations Modulaires
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Ce lundi 14 octobre marque le lancement de la 14ème promotion des formations modulaires de 06 et 12 mois en électricité, plomberie, énergie solaire et froid-climatisation. À travers cette nouvelle promotion, CREFER confirme son engagement à former des techniciens compétents, polyvalents et opérationnels, capables de répondre efficacement aux besoins croissants du marché Togolais et régional.
              </p>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Avec un encadrement de qualité et une approche résolument pratique de l'apprentissage, CREFER s'impose aujourd'hui comme une véritable référence de la formation technique et professionnelle au Togo.
              </p>
              <div class="text-yellow-500 font-bold mb-6">
                👏 Bienvenue aux nouveaux apprenants !
              </div>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors gap-2"
              >
                <span>En savoir plus</span>
                <span>→</span>
              </a>
            </div>
          </article>

          <!-- Divider -->
          <div class="my-8 border-t border-gray-200"></div>

          <!-- Article 3 - À venir -->
          <article class="flex flex-col lg:flex-row gap-8 items-start lg:items-center opacity-50">
            <!-- Image Left -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden shadow-lg h-72 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="text-6xl mb-2">📰</div>
                  <p class="font-semibold">Prochaine actualité</p>
                </div>
              </div>
            </div>

            <!-- Content Right -->
            <div class="w-full lg:w-3/5">
              <p class="text-gray-500 font-semibold mb-2">À VENIR</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                Prochaine actualité
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Restez à l'écoute pour découvrir les prochaines actualités et événements de CREFER.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors gap-2"
              >
                <span>En savoir plus</span>
                <span>→</span>
              </a>
            </div>
          </article>

          <!-- Divider -->
          <div class="my-8 border-t border-gray-200"></div>

          <!-- Article 4 - À venir -->
          <article class="flex flex-col lg:flex-row-reverse gap-8 items-start lg:items-center opacity-50">
            <!-- Image Right -->
            <div class="w-full lg:w-2/5 flex-shrink-0">
              <div class="bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden shadow-lg h-72 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="text-6xl mb-2">📰</div>
                  <p class="font-semibold">Prochaine actualité</p>
                </div>
              </div>
            </div>

            <!-- Content Left -->
            <div class="w-full lg:w-3/5">
              <p class="text-gray-500 font-semibold mb-2">À VENIR</p>
              <h2 class="text-3xl font-bold text-gray-900 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">
                Prochaine actualité
              </h2>
              <p class="text-gray-700 mb-6 leading-relaxed">
                Restez à l'écoute pour découvrir les prochaines actualités et événements de CREFER.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors gap-2"
              >
                <span>En savoir plus</span>
                <span>→</span>
              </a>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <!-- <div class="flex justify-center mt-16">
          <button class="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-white transition-colors hover:shadow-lg transform hover:-translate-y-1">
            Charger plus d'articles
          </button>
        </div> -->
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-gradient-to-r from-gray-900 to-yellow-500 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: -0.5px;">Restez Informé</h2>
        <p class="text-lg text-yellow-100 mb-8">
          Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
        </p>
        <form @submit.prevent="subscribeNewsletter" class="flex gap-3 flex-col sm:flex-row max-w-md mx-auto">
          <input
            v-model="email"
            type="email"
            placeholder="Votre email"
            required
            class="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 outline-none"
          />
          <button
            type="submit"
            class="px-8 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:shadow-lg transition-colors font-bold whitespace-nowrap hover:scale-105 transform"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Articles',
  setup() {
    const backgroundImageUrl = ref(new URL('../assets/images/_DSC4895-1200.jpg', import.meta.url).href)
    const soutenanceImageUrl = ref(new URL('../assets/images/soutenance-1200.jpg', import.meta.url).href)
    const promotionImageUrl = ref(new URL('../assets/images/_DSC4888-1200.jpg', import.meta.url).href)
    const email = ref('')
    
    // Social features - Compteurs à 0 pour démarrage frais
    const likes = ref({ 1: false, 2: false, 3: false, 4: false })
    const likeCounts = ref({ 1: 0, 2: 0, 3: 0, 4: 0 })
    const commentCounts = ref({ 1: 0, 2: 0, 3: 0, 4: 0 })
    const shareCounts = ref({ 1: 0, 2: 0, 3: 0, 4: 0 })
    const newComments = ref({ 1: '', 2: '', 3: '', 4: '' })
    const showCommentForm = ref(null)

    const toggleLike = (articleId) => {
      likes.value[articleId] = !likes.value[articleId]
      if (likes.value[articleId]) {
        likeCounts.value[articleId]++
      } else {
        likeCounts.value[articleId]--
      }
    }

    const addComment = (articleId) => {
      if (newComments.value[articleId].trim()) {
        commentCounts.value[articleId]++
        newComments.value[articleId] = ''
        showCommentForm.value = null // Fermer le formulaire après l'ajout
        // Feedback visuel optionnel
        console.log(`Commentaire ajouté à l'article ${articleId}`)
      }
    }

    const shareArticle = (title, articleId) => {
      shareCounts.value[articleId]++
      
      if (navigator.share) {
        navigator.share({
          title: 'CREFER - Actualité',
          text: title,
          url: window.location.href
        }).catch(err => console.log('Erreur de partage:', err))
      } else {
        // Fallback for browsers that don't support native share
        const text = `${title} - Découvrez plus sur CREFER: ${window.location.href}`
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text)
          alert('✅ Lien copié dans le presse-papiers!')
        } else {
          alert(`Partagez ceci: ${text}`)
        }
      }
    }

    const subscribeNewsletter = () => {
      console.log('Inscription newsletter:', email.value)
      email.value = ''
      alert('Merci! Vérifiez votre email.')
    }

    return {
      email,
      subscribeNewsletter,
      backgroundImageUrl,
      soutenanceImageUrl,
      promotionImageUrl,
      likes,
      likeCounts,
      commentCounts,
      shareCounts,
      newComments,
      showCommentForm,
      toggleLike,
      addComment,
      shareArticle
    }
  }
}
</script>

<style scoped>
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceHeart {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out;
}

.animate-bounce-heart {
  animation: bounceHeart 0.6s ease-in-out;
}
</style>
