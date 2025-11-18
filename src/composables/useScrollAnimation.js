import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(threshold = 0.2) {
  let observer = null

  const animateOnScroll = () => {
    const observerOptions = {
      threshold: threshold,
      rootMargin: '0px 0px -50px 0px'
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ajouter la classe d'animation quand l'élément entre dans la vue
          entry.target.classList.add('animate-fade-in-up')
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          
          // Optionnel : arrêter d'observer une fois animé
          // observer.unobserve(entry.target)
        } else {
          // Réinitialiser l'animation quand l'élément sort de la vue
          entry.target.classList.remove('animate-fade-in-up')
          entry.target.style.opacity = '0'
          entry.target.style.transform = 'translateY(40px)'
        }
      })
    }, observerOptions)

    // Observer tous les éléments avec l'attribut data-scroll-animate
    const elementsToAnimate = document.querySelectorAll('[data-scroll-animate]')
    elementsToAnimate.forEach((element) => {
      observer.observe(element)
    })
  }

  onMounted(() => {
    // Délai pour s'assurer que le DOM est complètement prêt
    setTimeout(animateOnScroll, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    observer
  }
}
