import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Admissions from '../pages/Admissions.vue'
import Gallery from '../pages/Gallery.vue'
import Articles from '../pages/Articles.vue'
import CapElectricite from '../pages/CapElectricite.vue'
import FormationModulaire from '../pages/FormationModulaire.vue'
import BtElectrotechnique from '../pages/BtElectrotechnique.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/admissions',
    name: 'Admissions',
    component: Admissions
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/cap-electricite',
    name: 'CapElectricite',
    component: CapElectricite
  },
  {
    path: '/formation-modulaire',
    name: 'FormationModulaire',
    component: FormationModulaire
  },
  {
    path: '/bt-electrotechnique',
    name: 'BtElectrotechnique',
    component: BtElectrotechnique
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Remonte toujours en haut de la page
    return { top: 0 }
  }
})

router.afterEach((to) => {
  // Remonte en haut de la page
  window.scrollTo(0, 0)
  
  // Met à jour le titre de la page
  const pageNames = {
    Home: 'Accueil',
    About: 'À Propos',
    Admissions: 'Admissions',
    Gallery: 'Galerie',
    Articles: 'Actualités',
    Contact: 'Contact',
    NotFound: 'Page non trouvée'
  }
  
  const pageName = pageNames[to.name] || to.name
  document.title = `CREFER - ${pageName}`
})

export default router
