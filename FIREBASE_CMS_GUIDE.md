# 🚀 Système de Gestion de Contenu Firebase

## Vue d'ensemble

Le site CREFER utilise maintenant **Firebase** pour gérer l'ensemble du contenu des pages admin. Ce système permet à l'administrateur d'éditer chaque page section par section avec un éditeur JSON générique.

## Architecture

```
Firebase Project: sitecrefer
├─ Authentication (Email/Password)
├─ Firestore Database
│  └─ Collection: pages
│     ├─ Document: home
│     │  └─ Collection: sections
│     │     ├─ hero (content: {...})
│     │     ├─ features (content: {...})
│     │     └─ cta (content: {...})
│     ├─ Document: about
│     │  └─ Collection: sections
│     │     └─ ... (sections spécifiques à about)
│     └─ ... (autres pages)
└─ Cloud Storage (pour les images/vidéos)
```

## 📝 Structure de données

Chaque page contient des **sections**, et chaque section a un objet **content** (JSON):

```json
{
  "pages": {
    "home": {
      "title": "Accueil",
      "description": "Page d'accueil du site",
      "createdAt": "2026-03-13T...",
      "updatedAt": "2026-03-13T...",
      "sections": {
        "hero": {
          "id": "hero",
          "name": "Section Héro",
          "content": {
            "title": "Bienvenue à CREFER",
            "subtitle": "Excellence en Formation Professionnelle",
            "buttonText": "En savoir plus",
            "image": "url/to/image"
          },
          "updatedAt": "2026-03-13T..."
        }
      }
    }
  }
}
```

## 🔧 Initialiser le système

1. **Aller au tableau de bord admin**
   ```
   http://localhost:5173/admin/login
   ```

2. **Se connecter**
   - Email: *à créer dans Firebase Console*
   - Mot de passe: *à créer*

3. **Initialiser les pages par défaut**
   - Cliquer sur "Initialiser Firebase" au dashboard
   - Cela crée les pages: home, about, articles, blog, gallery, contact
   - Chaque page a une section "default" vide

## 🎯 Utiliser l'éditeur

### Accéder à "Pages & Sections"

1. Depuis le dashboard, cliquer sur "📄 Pages & Sections"
2. Voir la liste de toutes les pages
3. Cliquer sur une page pour l'éditer

### Éditer une page

```
Interface d'édition:
┌─────────────────────────────────────────────┐
│ Sections (Colonne gauche)  │  JSON Editor   │
├─────────────────────────────────────────────┤
│ • hero                     │  {             │
│ • features                 │    "title":... │
│ • cta                      │    ...         │
│                            │  }             │
│ + Ajouter une section      │  [Sauvegarder] │
└─────────────────────────────────────────────┘
```

### Ajouter une nouvelle section

1. Au bas de la liste des sections, entrez le nom
2. Cliquez sur "+" 
3. Une nouvelle section vide est créée
4. Elle apparaît dans la liste

### Modifier le contenu JSON

1. Sélectionner une section
2. Le contenu JSON apparaît dans l'éditeur
3. Modifier le JSON selon vos besoins
4. Le JSON est validé en temps réel
5. Cliquer "Sauvegarder" pour enregistrer

## 📋 Exemples de structure de contenu

### Section Hero
```json
{
  "title": "Bienvenue à CREFER",
  "subtitle": "Excellence en Formation Professionnelle",
  "description": "Formations professionnelles de qualité...",
  "buttonText": "Découvrir nos formations",
  "buttonUrl": "/formations",
  "backgroundImage": "url-to-image",
  "heroHeight": "500px"
}
```

### Section Features / Avantages
```json
{
  "title": "Nos avantages",
  "features": [
    {
      "icon": "🎓",
      "title": "Formateurs expérimentés",
      "description": "Équipe de professionnels du métier..."
    },
    {
      "icon": "🏆",
      "title": "Certifications reconnues",
      "description": "Diplômes et certificats officiels..."
    },
    {
      "icon": "💼",
      "title": "Placement professionnel",
      "description": "Aide à la recherche d'emploi..."
    }
  ]
}
```

### Section CTA (Call To Action)
```json
{
  "title": "Prêt à rejoindre CREFER?",
  "subtitle": "Commencez votre parcours professionnel aujourd'hui",
  "buttonText": "S'inscrire maintenant",
  "buttonUrl": "/admissions",
  "backgroundColor": "#dc2626"
}
```

## 🔐 Sécurité Firebase

### Configuration Firestore Rules

Allez dans Firebase Console > Firestore Database > Rules et appliquez:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Autoriser la lecture publique de pages/sections
    match /pages/{pageId} {
      allow read: if true;
      match /sections/{sectionId} {
        allow read: if true;
      }
    }
    
    // Autoriser l'écriture pour utilisateurs authentifiés
    match /pages/{pageId} {
      allow write: if request.auth != null;
      match /sections/{sectionId} {
        allow write: if request.auth != null;
      }
    }
  }
}
```

### Créer un utilisateur admin

1. Firebase Console > Authentication > Users
2. "Add user"
3. Email: votre.email@domain.com
4. Password: mot-de-passe-securise
5. Cliquer "Create"

## 📡 Services disponibles

### authService.js
- `loginWithEmail(email, password)` - Connexion
- `createAdminUser(email, password)` - Créer un compte
- `logout()` - Déconnexion
- `currentUser` (ref) - Utilisateur actuel
- `isAuthenticated` (computed) - État authentification
- `initializeAuth()` - Initialiser Firebase Auth

### contentService.js
- `getAllPages()` - Lister toutes les pages
- `getPageWithSections(pageId)` - Charger une page avec ses sections
- `getSection(pageId, sectionId)` - Charger une section
- `saveSection(pageId, sectionId, data)` - Sauvegarder une section
- `updateSection(pageId, sectionId, data)` - Mettre à jour partiellement
- `deleteSection(pageId, sectionId)` - Supprimer une section
- `createPage(pageId, data)` - Créer une page
- `updatePage(pageId, data)` - Mettre à jour une page
- `deletePage(pageId)` - Supprimer une page
- `initializeDefaultPages()` - Créer la structure par défaut

## 🛠️ Variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec:

```env
VITE_FIREBASE_API_KEY=AIzaSyBEsxtnCTGWm8AqhDCrE9isyW1PS0DSpIE
VITE_FIREBASE_AUTH_DOMAIN=sitecrefer.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=sitecrefer
VITE_FIREBASE_STORAGE_BUCKET=sitecrefer.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=457114712643
VITE_FIREBASE_APP_ID=1:457114712643:web:7894ea16950ccd6f4b72f6
```

## 🚀 Démarrer le serveur

```bash
npm install
npm run dev
```

Puis accédez à `http://localhost:5173/admin/login`

## 📚 Routes admin

- `/admin/login` - Page de connexion
- `/admin/dashboard` - Tableau de bord
- `/admin/pages` - Lister et gérer les pages
- `/admin/pages/:pageId` - Éditer une page spécifique
- `/admin/media` - Gestionnaire de médias (à implémenter)
- `/admin/settings` - Paramètres (à implémenter)

## ⚠️ Notes importantes

1. **Firestore Rules**: Ne pas oublier de configurer les règles de sécurité
2. **Cache**: Le cache du navigateur peut afficher des anciennes données
3. **Timestamps**: Tous les timestamps sont en UTC
4. **Validation JSON**: Le JSON doit être valide pour être sauvegardé
5. **Historique**: Firestore ne conserve pas l'historique par défaut

## 🔄 Afficher le contenu sur le site public

Pour utiliser le contenu stocké dans Firebase sur les pages publiques, modifiez vos composants Vue:

```vue
<script setup>
import { ref, onMounted } from 'vue'
import { getPageWithSections } from '@/services/contentService'

const pageData = ref(null)

onMounted(async () => {
  try {
    pageData.value = await getPageWithSections('home')
  } catch (error) {
    console.error('Error loading page:', error)
  }
})
</script>

<template>
  <div v-if="pageData">
    <!-- Hero Section -->
    <section class="...">
      <h1>{{ pageData.sections.hero.content.title }}</h1>
      <p>{{ pageData.sections.hero.content.subtitle }}</p>
    </section>
  </div>
</template>
```

## 📞 Support

Pour plus d'informations sur Firebase:
- [Documentation Firebase](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
