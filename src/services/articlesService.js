// Service pour gérer les articles de manière partagée avec localStorage
import { ref } from 'vue'

const STORAGE_KEY = 'crefer_articles'

// Articles par défaut
const defaultArticles = [
  {
    id: '1',
    title: 'Soutenance de Mémoire',
    fullTitle: 'Soutenance de Mémoire - Promotion 12 SPV',
    subtitle: 'Une étape décisive vers le succès',
    date: '31 OCT 2025',
    category: 'Événement important',
    description: 'Ce vendredi 31 octobre, 12 étudiants de la filière SPV (Solaire Photovoltaïque) soutiendront leur mémoire de fin de formation. Une étape décisive qui marque l\'aboutissement de plusieurs mois d\'efforts, de rigueur et de passion !',
    fullContent: 'Ces étudiants ont suivi une formation rigoureuse et complète dans le domaine des énergies renouvelables. La soutenance de mémoire est une excellente opportunité pour eux de démontrer leur compréhension approfondie et leurs compétences pratiques. Chaque soutenance est un moment crucial où les étudiants présentent leurs recherches et leurs conclusions devant un jury d\'experts.',
    images: ['src/assets/images/soutenance-1200.jpg']
  },
  {
    id: '2',
    title: 'Lancement de la 14ème Promotion',
    fullTitle: 'Lancement de la 14ème Promotion des Formations Modulaires',
    subtitle: 'Bienvenue aux nouveaux apprenants',
    date: '14 OCT 2025',
    category: 'Rentrée académique',
    description: 'Ce lundi 14 octobre marque le lancement de la 14ème promotion des formations modulaires de 06 et 12 mois. Bienvenue aux nouveaux apprenants !',
    fullContent: 'Les formations modulaires offrent une grande flexibilité et permettent aux apprenants de développer des compétences spécifiques de manière progressive.',
    images: ['src/assets/images/image1article2.jpg', 'src/assets/images/image2article2.jpg', 'src/assets/images/image3article2.jpg']
  },
  {
    id: '3',
    title: '1500+ Étudiants Formés',
    fullTitle: '1500+ Étudiants Formés et Transformés',
    subtitle: 'Nos success stories et réalisations',
    date: '2021 - NOS RÉALISATIONS',
    category: 'Success Stories',
    description: 'Depuis sa création, CREFER a déjà formé près de 1500 étudiants du Togo et d\'ailleurs.',
    fullContent: 'Nos anciens étudiants travaillent maintenant dans des entreprises majeures et contribuent au développement des énergies renouvelables en Afrique de l\'Ouest.',
    images: ['src/assets/images/articlesolaire1.jpg', 'src/assets/images/articlesolaire2.jpg']
  },
  {
    id: '4',
    title: 'Stage Concret',
    fullTitle: 'CREFER, la Garantie d\'un Stage Concret !',
    subtitle: 'Formation pratique et immersion professionnelle',
    date: 'NOVEMBRE 2025',
    category: 'Formation Pratique',
    description: 'Nos étudiants maîtrisent chaque étape : du dimensionnement à l\'installation.',
    fullContent: 'Pendant les stages, nos étudiants travaillent sur des projets réels : installation de systèmes solaires photovoltaïques.',
    images: ['src/assets/images/install1article.jpg', 'src/assets/images/install2article.jpg', 'src/assets/images/install3article.jpg', 'src/assets/images/install4article.jpg']
  },
  {
    id: '5',
    title: 'Examen Blanc BT',
    fullTitle: 'Examen Blanc – BT Électrotechnique',
    subtitle: 'Excellence académique et préparation à l\'examen',
    date: 'NOVEMBRE 2025',
    category: 'Évaluation & Excellence',
    description: 'Nos étudiants de troisième année BT Électrotechnique sont en examen blanc.',
    fullContent: 'L\'examen blanc permet aux étudiants d\'identifier leurs forces et faiblesses avant l\'examen national.',
    images: ['src/assets/images/exam1article.jpg', 'src/assets/images/exam2article.jpg', 'src/assets/images/exam3article.jpg', 'src/assets/images/exam4article.jpg']
  }
]

// Récupérer les articles du localStorage ou retourner les articles par défaut
export const getArticles = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.error('Erreur lors de la lecture du localStorage:', e)
  }
  return defaultArticles
}

// Sauvegarder les articles dans le localStorage
export const saveArticles = (articles) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles))
  } catch (e) {
    console.error('Erreur lors de la sauvegarde dans le localStorage:', e)
  }
}

// Obtenir un article spécifique par ID
export const getArticleById = (id) => {
  const articles = getArticles()
  return articles.find(a => String(a.id) === String(id))
}

// Fusionner les anciennes images avec les nouvelles
export const mergeArticleImages = (oldArticle, newArticle) => {
  if (!oldArticle || !oldArticle.images) {
    return newArticle
  }

  // Séparer les images Base64 (data:image) des images fichier (src/assets)
  const oldFileImages = oldArticle.images.filter(img => !img.startsWith('data:'))
  const newBase64Images = newArticle.images.filter(img => img.startsWith('data:'))

  // Fusionner : nouvelles images Base64 + anciennes images fichier
  newArticle.images = [...newBase64Images, ...oldFileImages]
  
  return newArticle
}

// Créer un ref réactif pour les articles
export const useArticles = () => {
  const articles = ref(getArticles())
  
  const updateArticles = (newArticles) => {
    articles.value = newArticles
    saveArticles(newArticles)
  }

  return {
    articles,
    updateArticles
  }
}
