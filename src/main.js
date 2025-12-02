import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import './assets/animations.css'

// Traiter la redirection du 404.html
if (sessionStorage.githubPagesRedirectPath) {
  var redirectPath = sessionStorage.githubPagesRedirectPath;
  delete sessionStorage.githubPagesRedirectPath;
  
  // Extraire le chemin relatif après le base
  var baseUrl = import.meta.env.BASE_URL;
  var pathToRestore = redirectPath;
  
  // Nettoyer le chemin
  if (pathToRestore.startsWith(baseUrl)) {
    pathToRestore = pathToRestore.slice(baseUrl.length);
  }
  
  // Supprimer index.html s'il est présent
  pathToRestore = pathToRestore.replace('index.html', '');
  
  // Utiliser replaceState pour restaurer l'URL sans créer une entrée d'historique
  if (pathToRestore && pathToRestore !== '/') {
    window.history.replaceState(null, null, baseUrl + pathToRestore);
  }
}

const app = createApp(App)

// Directive personnalisée pour les animations au scroll
app.directive('scroll-animate', (el, binding) => {
  // Configuration par défaut
  const config = {
    threshold: 0.2,
    delay: binding.value?.delay || 0,
    ...binding.value
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Ajouter un délai avant d'appliquer l'animation
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up')
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }, config.delay + (index * 100))
        } else {
          // Réinitialiser quand on sort de la vue
          entry.target.classList.remove('animate-fade-in-up')
          entry.target.style.opacity = '0'
          entry.target.style.transform = 'translateY(40px)'
        }
      })
    },
    {
      threshold: config.threshold,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  observer.observe(el)

  // Cleanup
  el._scrollObserver = observer
})

app.use(router).mount('#app')

