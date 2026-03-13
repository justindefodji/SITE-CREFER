# ⚡ Démarrage rapide - Firebase Admin

## 5 étapes pour commencer

### 1️⃣ Vérifier les variables d'environnement

Assurez-vous que `.env.local` existe à la racine du projet avec:

```env
VITE_FIREBASE_API_KEY=AIzaSyBEsxtnCTGWm8AqhDCrE9isyW1PS0DSpIE
VITE_FIREBASE_AUTH_DOMAIN=sitecrefer.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=sitecrefer
VITE_FIREBASE_STORAGE_BUCKET=sitecrefer.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=457114712643
VITE_FIREBASE_APP_ID=1:457114712643:web:7894ea16950ccd6f4b72f6
```

### 2️⃣ Créer un utilisateur admin dans Firebase

1. Allez à [Firebase Console](https://console.firebase.google.com)
2. Sélectionnez le projet "sitecrefer"
3. Authentication > Users > "Add user"
4. Entrez:
   - **Email**: votre.email@domain.com
   - **Password**: un mot de passe sécurisé
5. Cliquez "Create user"

### 3️⃣ Configurer les règles Firestore

1. Console Firebase > Firestore Database > Rules
2. Remplacez les règles par:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /pages/{pageId} {
      allow read: if true;
      allow write: if request.auth != null;
      match /sections/{sectionId} {
        allow read: if true;
        allow write: if request.auth != null;
      }
    }
  }
}
```

3. Cliquez "Publish"

### 4️⃣ Démarrer le serveur

```bash
npm install
npm run dev
```

Le serveur démarre sur `http://localhost:5173`

### 5️⃣ Accéder à l'admin

1. Ouvrez `http://localhost:5173/admin/login`
2. Connectez-vous avec vos identifiants Firebase
3. Cliquez "Initialiser Firebase" au dashboard
4. Allez à "Pages & Sections"
5. Commencez à éditer!

## 🎨 Interface d'édition

### Écran d'édition
```
┌──────────────────────────────────────────────┐
│ ← Retour                                     │
│ Page Title                                   │
├────────────┬──────────────────────────────────┤
│ Sections   │ Éditeur JSON                     │
│ ✓ hero     │ {                                │
│ • features │   "title": "...",                │
│ • cta      │   "subtitle": "...",             │
│            │   ...                            │
│ + Ajouter  │ }                                │
│            │ [Sauvegarder] [Supprimer]       │
└────────────┴──────────────────────────────────┘
```

## 📝 Format JSON recommandé

Pour une section "hero":
```json
{
  "title": "Titre principal",
  "subtitle": "Sous-titre",
  "description": "Description complète",
  "buttonText": "Texte du bouton",
  "buttonUrl": "/path",
  "image": "url-to-image"
}
```

## 🛑 Erreurs courantes

### ✗ "invalid-api-key"
**Solution**: Vérifier les règles Firestore (étape 3)

### ✗ "Permission denied"
**Solution**: Vous n'êtes pas authentifié. Se reconnecter.

### ✗ "JSON invalide"
**Solution**: Vérifier la syntaxe JSON (double guillemets, pas de virgule finale)

## 📂 Fichiers importants

```
src/
├─ services/
│  ├─ firebase.js          # Initialisation Firebase
│  ├─ authService.js       # Gestion auth
│  └─ contentService.js    # CRUD du contenu
├─ pages/
│  ├─ AdminLogin.vue       # Page connexion
│  ├─ AdminDashboard.vue   # Dashboard
│  ├─ AdminPages.vue       # Liste pages
│  └─ AdminPageEditor.vue  # Éditeur
└─ router/
   ├─ index.js             # Routes
   └─ adminAuthGuard.js    # Protection routes
```

## ✅ Checklist avant de démarrer

- [ ] Compte Firebase créé
- [ ] Projets Firebase configurés
- [ ] `.env.local` créé avec les credentials
- [ ] Utilisateur admin créé dans Firebase Auth
- [ ] Règles Firestore configurées et publiées
- [ ] `npm install` exécuté
- [ ] `npm run dev` lancé sans erreurs

## 🚀 Prochaines étapes

1. ✅ Pages de base initialisées
2. ⏳ Adapter les pages publiques pour charger depuis Firestore
3. ⏳ Implémenter le gestionnaire de médias
4. ⏳ Ajouter des templates prédéfinis
5. ⏳ Configurer la sauvegarde automatique

## 📞 Aide

```
http://localhost:5173/admin/login      → Page de connexion
http://localhost:5173/admin/dashboard  → Tableau de bord après login
http://localhost:5173/admin/pages      → Gestion des pages
```

**Connectez-vous avec:**
- Email: *votre email Firebase*
- Password: *le mot de passe que vous avez créé*
