/**
 * Script de migration pour importer les images de la galerie actuelle vers Firebase Firestore
 * À exécuter une seule fois pour initialiser la galerie
 */

// Données des images à importer depuis Gallery.vue
const galleryData = [
  { 
    id: 1, 
    title: 'Atelier Électronique 1', 
    description: 'Travaux pratiques en électronique', 
    category: 'Travaux pratiques',
    imagePath: 'src/assets/images/_DSC0294.jpg'
  },
  { 
    id: 2, 
    title: 'Atelier Électronique 2', 
    description: 'Manipulation de circuits électroniques', 
    category: 'Travaux pratiques',
    imagePath: 'src/assets/images/_DSC0332.jpg'
  },
  { 
    id: 3, 
    title: 'Atelier Électricité', 
    description: 'Travaux pratiques en électricité', 
    category: 'Travaux pratiques',
    imagePath: 'src/assets/images/_DSC0335.jpg'
  },
  { 
    id: 4, 
    title: 'en chantier solaire', 
    description: 'Session de cours théorique en classe', 
    category: 'Stage',
    imagePath: 'src/assets/images/CHANTIER.jpg'
  },
  { 
    id: 5, 
    title: 'montage des panneaux solaire', 
    description: 'une installation solaire', 
    category: 'Stage',
    imagePath: 'src/assets/images/CHANTIER2.jpg'
  },
  { 
    id: 6, 
    title: 'Projet de Stage', 
    description: 'projet réalisé en stage', 
    category: 'Stage',
    imagePath: 'src/assets/images/CHANTIER3.jpg'
  },
  { 
    id: 7, 
    title: 'Atelier de montage solaire', 
    description: 'Apprentissage sur un chantier solaire', 
    category: 'Stage',
    imagePath: 'src/assets/images/CHANTIER4.jpg'
  },
  { 
    id: 8, 
    title: 'théorie à CREFER', 
    description: 'en cours théorique', 
    category: 'Théorie',
    imagePath: 'src/assets/images/theorie1.jpg'
  },
  { 
    id: 9, 
    title: 'Cours Théorique Avancé', 
    description: 'Session avancée de cours théorique', 
    category: 'Théorie',
    imagePath: 'src/assets/images/theorie2.jpg'
  },
  { 
    id: 10, 
    title: 'en plein cours théorique', 
    description: 'Théorie', 
    category: 'Théorie',
    imagePath: 'src/assets/images/theorie3.jpg'
  },
  { 
    id: 11, 
    title: 'Activité Extra-scolaire', 
    description: 'Activité en dehors des cours', 
    category: 'Autres',
    imagePath: 'src/assets/images/autres.jpg'
  },
  { 
    id: 12, 
    title: 'Événement Spécial', 
    description: 'Participation à un événement spécial', 
    category: 'Autres',
    imagePath: 'src/assets/images/autres1.jpg'
  },
  { 
    id: 13, 
    title: 'Visite Pédagogique 1', 
    description: 'Sortie pédagogique au site solaire', 
    category: 'Sortie pédagogique',
    imagePath: 'src/assets/images/sortie1.jpg'
  },
  { 
    id: 14, 
    title: 'Visite Pédagogique 2', 
    description: 'Découverte des installations solaires', 
    category: 'Sortie pédagogique',
    imagePath: 'src/assets/images/sortie2.jpg'
  },
  { 
    id: 15, 
    title: 'Excursion Étudiante 1', 
    description: 'Sortie éducative avec les étudiants', 
    category: 'Sortie pédagogique',
    imagePath: 'src/assets/images/sortie3.jpg'
  },
  { 
    id: 16, 
    title: 'Excursion Étudiante 2', 
    description: 'Exploration des technologies renouvelables', 
    category: 'Sortie pédagogique',
    imagePath: 'src/assets/images/sortie4.jpg'
  },
  { 
    id: 17, 
    title: 'Visite de Site 1', 
    description: 'Observation des installations en fonctionnement', 
    category: 'Sortie pédagogique',
    imagePath: 'src/assets/images/sortie5.jpg'
  },
  { 
    id: 18, 
    title: 'Visite de Site 2', 
    description: 'Apprentissage sur le terrain', 
    category: 'Sortie pédagogique',
    imagePath: 'src/assets/images/sortie6.jpg'
  },
  { 
    id: 19, 
    title: 'Sortie Technique 1', 
    description: 'Analyse des systèmes énergétiques sur site', 
    category: 'Sortie pédagogique',
    imagePath: 'src/assets/images/sortie7.jpg'
  },
  { 
    id: 20, 
    title: 'Sortie Technique 2', 
    description: 'Étude des performances des installations', 
    category: 'Sortie pédagogique',
    imagePath: 'src/assets/images/sortie8.jpg'
  },
  { 
    id: 21, 
    title: 'Journée d\'Étude 1', 
    description: 'Journée dédiée à l\'étude des énergies renouvelables', 
    category: 'Sortie pédagogique',
    imagePath: 'src/assets/images/sortie9.jpg'
  },
  { 
    id: 22, 
    title: 'Journée d\'Étude 2', 
    description: 'Immersion dans les technologies vertes', 
    category: 'Sortie pédagogique',
    imagePath: 'src/assets/images/sortie10.jpg'
  }
]

export { galleryData }

/**
 * INSTRUCTIONS D'UTILISATION :
 * 
 * 1. Dans AdminGallery.vue ou une page de migration, importer ce fichier :
 *    import { galleryData } from '@/scripts/migrationGalleryData.js'
 * 
 * 2. Créer une fonction pour charger les images et les envoyer à Firestore :
 * 
 *    import { createGalleryImage } from '@/services/galleryService'
 * 
 *    const migrateGallery = async () => {
 *      const failedImages = []
 *      
 *      for (const imageData of galleryData) {
 *        try {
 *          // Charger l'image depuis le système de fichiers
 *          const response = await fetch(new URL(imageData.imagePath, import.meta.url).href)
 *          const blob = await response.blob()
 *          const reader = new FileReader()
 *          
 *          reader.onload = async (e) => {
 *            const imageBase64 = e.target.result
 *            
 *            // Créer l'objet à envoyer
 *            const galleryItem = {
 *              title: imageData.title,
 *              description: imageData.description,
 *              category: imageData.category,
 *              image: imageBase64
 *            }
 *            
 *            // Envoyer à Firestore
 *            await createGalleryImage(galleryItem)
 *            console.log(`Image migrée: ${imageData.title}`)
 *          }
 *          
 *          reader.readAsDataURL(blob)
 *        } catch (error) {
 *          console.error(`Erreur migration ${imageData.title}:`, error)
 *          failedImages.push(imageData.title)
 *        }
 *      }
 *      
 *      if (failedImages.length > 0) {
 *        console.warn(`${failedImages.length} images non migrées:`, failedImages)
 *      } else {
 *        console.log('Migration complète!')
 *      }
 *    }
 */
