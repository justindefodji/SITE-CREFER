# 🏗️ Architecture du système Firebase CMS

## Vue d'ensemble système

```
┌─────────────────────────────────────────────────────────────┐
│                    CREFER Admin System                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Frontend Vue 3                    Backend Firebase          │
│  ┌──────────────────┐              ┌────────────────────┐  │
│  │ AdminLogin.vue   │──────────→   │ Authentication     │  │
│  │ ├─ Email input   │              │ Email/Password     │  │
│  │ └─ Password      │              └────────────────────┘  │
│  │                  │                                       │
│  │ AdminDashboard   │              ┌────────────────────┐  │
│  │ ├─ Stats        │──────────→   │ Firestore DB       │  │
│  │ ├─ Navigation   │              │ pages/sections     │  │
│  │ └─ Quick Start  │              │ content (JSON)     │  │
│  │                  │              └────────────────────┘  │
│  │ AdminPages       │                                       │
│  │ ├─ List pages   │              ┌────────────────────┐  │
│  │ └─ Actions      │──────────→   │ Cloud Storage      │  │
│  │                  │              │ images/videos      │  │
│  │ AdminPageEditor  │              └────────────────────┘  │
│  │ ├─ Sections     │                                       │
│  │ └─ JSON editor  │                                       │
│  └──────────────────┘                                       │
│         ↑                                                    │
│         │ Router + Auth Guard                              │
│         │                                                    │
│   public pages (home, about, etc.)                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Flux de données

### Créer/Éditer une page

```
1. Utilisateur → AdminPageEditor.vue
2. Sélectionner section
3. Modifier JSON
4. Cliquer "Sauvegarder"
5. contentService.saveSection()
6. Firebase Firestore → Stockage
7. UI mise à jour
```

### Afficher sur site public

```
1. Home.vue (ou autre page)
2. onMounted() → contentService.getPageWithSections('home')
3. Firebase Firestore ← Récupère data
4. Template rendu avec données
5. Utilisateur voit contenu dynamique
```

## Structure des fichiers créés

### Services (src/services/)

#### **firebase.js** - Initialisation Firebase
```javascript
- Initialise app, auth, db, storage
- Exporte les instances Firebase
- Gère les erreurs d'initialisation
```

#### **authService.js** - Gestion authentification
```javascript
Exports:
- currentUser (ref)
- loading (ref)
- isAuthenticated (computed)
- firebaseReady (ref)

Functions:
- initializeAuth() → Promise
- loginWithEmail(email, password)
- createAdminUser(email, password)
- logout()
```

#### **contentService.js** - Opérations Firestore
```javascript
Pages:
- getAllPages() ← Array<Page>
- getPageWithSections(pageId)
- createPage(pageId, data)
- updatePage(pageId, data)
- deletePage(pageId)

Sections:
- getPageSections(pageId)
- getSection(pageId, sectionId)
- saveSection(pageId, sectionId, data)
- updateSection(pageId, sectionId, data)
- deleteSection(pageId, sectionId)

Admin:
- initializeDefaultPages()
```

### Pages Admin (src/pages/)

#### **AdminLogin.vue**
- Form email/password
- Gestion erreurs login
- Redirection vers dashboard
- Styling: gradient red/slate

#### **AdminDashboard.vue**
- Stats cards (pages, sections, users)
- Navigation menu
- Quick start guide
- Initialize button
- Page statistics

#### **AdminPages.vue**
- List toutes les pages
- Grid cards avec infos
- Actions: Edit, Delete
- Counter sections par page
- Loading state

#### **AdminPageEditor.vue**
- Sidebar sections list
- JSON editor textarea
- JSON validation en temps réel
- Section preview
- Save/Delete buttons
- Add new section form

### Router (src/router/)

#### **index.js** - Routes
```javascript
Imports:
- Tous les composants admin
- authService → initializeAuth()
- adminAuthGuard

Routes ajoutées:
- /admin/login → AdminLogin
- /admin/dashboard → AdminDashboard
- /admin/pages → AdminPages
- /admin/pages/:pageId → AdminPageEditor
- /admin/articles (existant)

Hooks:
- beforeEach() - Check auth pour /admin/*
- afterEach() - Update SEO metadata
```

#### **adminAuthGuard.js** - Middleware auth
```javascript
Logic:
- Attend Firebase initialization
- Vérifie currentUser.value
- Redirige non-authentifiés vers /admin/login
- Évite les redirect loops avec lastRedirectPath
- Permet /admin/login sans auth
```

### Documentation

#### **FIREBASE_QUICKSTART.md**
- 5 étapes de démarrage
- Variables d'environnement
- Créer utilisateur Firebase
- Configurer Firestore rules
- Erreurs courantes
- Checklist avant de démarrer

#### **FIREBASE_CMS_GUIDE.md**
- Vue d'ensemble système
- Architecture Firestore
- Structure de données
- Guide utilisation
- Exemples JSON
- Services documentation
- Routes admin
- Tips intégration pages publiques

## État de la base de données

### Après initializeDefaultPages()

```
Firestore:
└─ pages/
   ├─ home/
   │  └─ sections/
   │     └─ default/ {name: "Default Section", content: {}}
   ├─ about/
   │  └─ sections/
   │     └─ default/
   ├─ articles/
   │  └─ sections/
   │     └─ default/
   ├─ blog/
   │  └─ sections/
   │     └─ default/
   ├─ gallery/
   │  └─ sections/
   │     └─ default/
   └─ contact/
      └─ sections/
         └─ default/
```

## Sécurité

### Firebase Rules obligatoires

```
- Public read pour pages/sections
- Auth required pour write
- Pas d'accès listDatabases
- Pas d'accès credentials
```

### Authentification

```
- Email/Password only
- No sign-up (admin créé manuellement)
- Auth guard sur toutes routes /admin/*
- Logout détruit session
```

## Performance

### Optimisations

```
✓ Lazy loading des composants admin
✓ Auth guard prévient chargement inutile
✓ Timestamps pour cache invalidation
✓ JSON preview en temps réel (pas delay)
✓ Sections chargées on-demand
```

### Considérations

```
⚠ Gros objects JSON → considérer pagination
⚠ Images → utiliser Cloud Storage + URL
⚠ Firestore read limit → 1M reads/day free
⚠ Chunking pour très gros documents
```

## Intégration avec pages publiques

### Pattern recommandé

```vue
<script setup>
import { ref, onMounted } from 'vue'
import { getPageWithSections } from '@/services/contentService'

const page = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    page.value = await getPageWithSections('home')
  } catch (error) {
    console.error('Error:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div v-if="!loading && page">
    <!-- Hero Section -->
    <section v-if="page.sections.hero">
      <h1>{{ page.sections.hero.content.title }}</h1>
      <p>{{ page.sections.hero.content.subtitle }}</p>
    </section>
    
    <!-- Features Section -->
    <section v-if="page.sections.features">
      <div v-for="feature in page.sections.features.content.features">
        <h3>{{ feature.title }}</h3>
      </div>
    </section>
  </div>
</template>
```

## Roadmap futur

```
Phase 1 (DONE):
✅ Auth Firebase
✅ CRUD pages/sections
✅ JSON editor
✅ Pages admin

Phase 2 (TODO):
⏳ Media manager (upload images)
⏳ Settings page
⏳ User management
⏳ Backup/Restore

Phase 3 (TODO):
⏳ History/Versioning
⏳ Templates prédéfinis
⏳ Scheduled publishing
⏳ Auto-save
```

## Monitoring

### Firebase Console metrics

```
- Active users
- Authentication usage
- Firestore read/write ops
- Storage bandwidth
- Real-time database stats
```

### Debug en local

```
// Activer debug logging
export const enableDebug = () => {
  connectFirestoreEmulator(db, 'localhost', 8080)
  connectAuthEmulator(auth, 'http://localhost:9099')
}
```

## Support & Troubleshooting

### Problèmes courants

| Erreur | Cause | Solution |
|--------|-------|----------|
| `invalid-api-key` | Mauvaises Firestore rules | Update rules (Publish) |
| `Permission denied` | Non authentifié | Login d'abord |
| Cannot read property 'content' | Section n'existe pas | Check Firestore structure |
| JSON parse error | JSON invalide | Vérifier syntax valid |
| Redirect loop | Auth guard bug | Check localStorage auth |

### Logs utiles

```javascript
// Services Firebase
console.log('Firebase initialized')
console.log('Auth state changed:', user)
console.log('Saving section:', data)
console.error('Firestore error:', error)
```
