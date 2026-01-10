<template>
  <section class="py-16 bg-gradient-to-b from-white to-blue-50" v-scroll-animate>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          {{ title }}
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="bg-white rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow"
        >
          <!-- Question Button -->
          <button
            @click="toggleItem(index)"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-50/30 transition-colors"
            :aria-expanded="activeIndex === index"
            :aria-controls="`faq-answer-${index}`"
          >
            <h3 class="text-lg font-semibold text-gray-800 pr-4">
              {{ item.question }}
            </h3>
            <svg
              class="w-5 h-5 text-blue-600 flex-shrink-0 transition-transform"
              :class="{ 'transform rotate-180': activeIndex === index }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          <!-- Answer -->
          <transition
            enter-active-class="transition-all duration-300 ease-in"
            leave-active-class="transition-all duration-200 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div
              v-show="activeIndex === index"
              :id="`faq-answer-${index}`"
              class="px-6 pb-4 border-t border-blue-100"
            >
              <div class="text-gray-700 leading-relaxed whitespace-pre-line">
                {{ item.answer }}
              </div>
              <!-- Additional Resource Link if available -->
              <div v-if="item.link" class="mt-4">
                <router-link
                  :to="item.link"
                  class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  En savoir plus
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </router-link>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- CTA Section -->
      <div v-if="showCTA" class="mt-12 text-center p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
        <p class="text-gray-700 mb-4">Vous n'avez pas trouvé votre réponse ?</p>
        <router-link
          to="/contact"
          class="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:shadow-lg transition-shadow font-semibold"
        >
          Contactez-nous
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FAQSection',
  props: {
    title: {
      type: String,
      default: 'Questions Fréquemment Posées'
    },
    subtitle: {
      type: String,
      default: 'Trouvez les réponses aux questions les plus courantes sur nos formations'
    },
    faqItems: {
      type: Array,
      required: true,
      validator: (items) => {
        return items.every(item => 
          item.question && item.answer && typeof item.question === 'string' && typeof item.answer === 'string'
        )
      }
    },
    showCTA: {
      type: Boolean,
      default: true
    },
    defaultOpen: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const activeIndex = ref(props.defaultOpen)

    const toggleItem = (index) => {
      activeIndex.value = activeIndex.value === index ? -1 : index
    }

    return {
      activeIndex,
      toggleItem
    }
  },
  emits: ['faq-item-opened'],
  watch: {
    activeIndex(newIndex) {
      if (newIndex !== -1) {
        this.$emit('faq-item-opened', {
          index: newIndex,
          question: this.faqItems[newIndex].question
        })
      }
    }
  }
}
</script>

<style scoped>
/* Accessibility improvements */
button:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* Smooth animations */
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

div[aria-expanded="true"] {
  background-color: rgba(59, 130, 246, 0.05);
}
</style>
