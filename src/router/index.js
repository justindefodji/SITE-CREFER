import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Admissions from '../pages/Admissions.vue'
import Gallery from '../pages/Gallery.vue'
import Articles from '../pages/Articles.vue'
import ArticleDetail from '../pages/ArticleDetail.vue'
import AdminArticles from '../pages/AdminArticles.vue'
import AdminVideos from '../pages/AdminVideos.vue'
import AdminGallery from '../pages/AdminGallery.vue'
import AdminAdmissions from '../pages/AdminAdmissions.vue'
import CapElectricite from '../pages/CapElectricite.vue'
import FormationModulaire from '../pages/FormationModulaire.vue'
import BtElectrotechnique from '../pages/BtElectrotechnique.vue'
import Programmes from '../pages/Programmes.vue'
import Blog from '../pages/Blog.vue'
import BlogArticle1 from '../pages/BlogArticle1.vue'
import AdminLogin from '../pages/AdminLogin.vue'
import AdminDashboard from '../pages/AdminDashboard.vue'
import AdminPages from '../pages/AdminPages.vue'
import AdminPageEditor from '../pages/AdminPageEditor.vue'
import { useSEO } from '../composables/useSEO'
import { adminAuthGuard } from './adminAuthGuard'
import { initializeAuth } from '../services/authService'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'CREFER - Centre de Ressources pour la Formation et l\'Excellence Professionnelle',
      description: 'Formations professionnelles en électrotechnique, CAP électricité, BT électrotechnique et formations modulaires. Centre d\'excellence pour l\'apprentissage technique.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'À Propos de CREFER',
      description: 'Découvrez notre histoire, nos valeurs et notre engagement envers l\'excellence en formation professionnelle.'
    }
  },
  {
    path: '/admissions',
    name: 'Admissions',
    component: Admissions,
    meta: {
      title: 'Admissions - CREFER',
      description: 'Conditions d\'admission, procédure d\'inscription et informations sur nos programmes de formation.'
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      title: 'Galerie - CREFER',
      description: 'Découvrez la vie au CREFER à travers nos photos et vidéos.'
    }
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
    meta: {
      title: 'Actualités - CREFER',
      description: 'Consultez les dernières actualités, événements et annonces du CREFER.'
    }
  },
  {
    path: '/articles/:id',
    name: 'ArticleDetail',
    component: ArticleDetail,
    meta: {
      title: 'Article - CREFER',
      description: 'Lire l\'actualité complète du CREFER'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Blog CREFER - Formations, Carrière et Énergies Renouvelables',
      description: 'Découvrez nos guides complets sur la formation électricité, CAP, BT, énergies renouvelables et carrière au Togo.'
    }
  },
  {
    path: '/blog/:id',
    name: 'BlogArticle',
    component: BlogArticle1,
    meta: {
      title: 'Article Blog - CREFER',
      description: 'Guide complet sur la formation et les carrières en électricité'
    }
  },
  {
    path: '/admin',
    redirect: '/admin/login'
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin,
    meta: {
      title: 'Connexion Admin - CREFER',
      description: 'Page de connexion administrateur'
    }
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: {
      title: 'Tableau de bord Admin - CREFER',
      description: 'Tableau de bord administrateur CREFER'
    }
  },
  {
    path: '/admin/pages',
    name: 'AdminPages',
    component: AdminPages,
    meta: {
      title: 'Gestion des Pages - CREFER',
      description: 'Gestion des pages et sections'
    }
  },
  {
    path: '/admin/pages/:pageId',
    name: 'AdminPageEditor',
    component: AdminPageEditor,
    meta: {
      title: 'Édition de Page - CREFER',
      description: 'Éditeur de page'
    }
  },
  {
    path: '/admin/articles',
    name: 'AdminArticles',
    component: AdminArticles
  },
  {
    path: '/admin/videos',
    name: 'AdminVideos',
    component: AdminVideos
  },
  {
    path: '/admin/gallery',
    name: 'AdminGallery',
    component: AdminGallery
  },
  {
    path: '/admin/admissions',
    name: 'AdminAdmissions',
    component: AdminAdmissions
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact - CREFER',
      description: 'Contactez-nous pour toute question sur nos formations ou services.'
    }
  },
  {
    path: '/cap-electricite',
    name: 'CapElectricite',
    component: CapElectricite,
    meta: {
      title: 'CAP Électricité - CREFER',
      description: 'Formation CAP Électricité - Programme complet, objectifs et perspectives professionnelles.'
    }
  },
  {
    path: '/formation-modulaire',
    name: 'FormationModulaire',
    component: FormationModulaire,
    meta: {
      title: 'Formation Modulaire - CREFER',
      description: 'Formations modulaires flexibles adaptées à vos besoins et votre rythme.'
    }
  },
  {
    path: '/bt-electrotechnique',
    name: 'BtElectrotechnique',
    component: BtElectrotechnique,
    meta: {
      title: 'BT Électrotechnique - CREFER',
      description: 'Brevet Technique Électrotechnique - Formation avancée pour maîtres électriciens.'
    }
  },
  {
    path: '/programmes',
    name: 'Programmes',
    component: Programmes,
    meta: {
      title: 'Programmes - CREFER',
      description: 'Consultez tous nos programmes de formation et choisissez celui qui vous convient.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue'),
    meta: {
      title: 'Page non trouvée',
      description: 'La page que vous recherchez n\'existe pas.'
    }
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

// Initialize Firebase authentication and apply auth guard
initializeAuth().then(() => {
  // Apply auth guard after Firebase is ready
  router.beforeEach(adminAuthGuard)
}).catch(error => {
  console.error('Failed to initialize auth:', error)
  // Still apply the guard even if init fails
  router.beforeEach(adminAuthGuard)
})

router.afterEach((to) => {
  // Remonte en haut de la page
  window.scrollTo(0, 0)
  
  // Mettre à jour les métadonnées SEO via le composable
  const seo = useSEO()
  
  const title = to.meta.title || 'CREFER'
  const description = to.meta.description || 'Centre de Ressources pour la Formation et l\'Excellence Professionnelle'
  const canonical = `https://crefer.tech${to.path}`
  
  seo.setSEO({
    title,
    description,
    canonical
  })
})

export default router
