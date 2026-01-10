# Configuration Finale & Déploiement - CREFER

## 1️⃣ Configuration Google Analytics 4

### Étape 1 : Créer un compte GA4
1. Aller à https://analytics.google.com
2. Cliquer sur "Créer un compte"
3. Remplir les informations :
   - Nom du compte : "CREFER"
   - Nom de la propriété : "crefer.tech"
4. Créer une nouvelle propriété
5. Sélectionner "Web" comme plate-forme
6. Entrer votre URL : `https://crefer.tech`

### Étape 2 : Obtenir le MEASUREMENT_ID
1. Dans Google Analytics, aller à **Admin** > **Propriétés** > **Flux de données**
2. Cliquer sur votre flux web
3. Copier le **MEASUREMENT_ID** (format : G-XXXXXXXXXX)

### Étape 3 : Ajouter à votre projet
```bash
# Ouvrir le fichier
nano src/composables/useGoogleAnalytics.js

# Ligne 10 : Remplacer
const MEASUREMENT_ID = 'G-XXXXXXXXXXXXX'

# Par votre ID réel
const MEASUREMENT_ID = 'G-ABC123XYZ789'
```

### Étape 4 : Vérifier l'intégration
1. Lancer le site : `npm run dev`
2. Ouvrir le site dans navigateur
3. Ouvrir DevTools (F12) > Console
4. Vérifier qu'il n'y a pas d'erreurs GA
5. Aller dans Google Analytics et voir "Real-time" > "1 user"

---

## 2️⃣ Optimisation Finale des Images

### Exécuter les scripts

```bash
# 1. Compresser les images
npm run optimize:images

# 2. Générer les versions WebP
npm run generate:webp

# 3. Vérifier la taille des fichiers
ls -lh src/assets/images/ | head -20
```

### Résultats attendus
- Images originales : réduction 30-50%
- Fichiers WebP créés : ~25% plus petits que JPG

---

## 3️⃣ Soumettre aux Moteurs de Recherche

### Google Search Console

1. **Ajouter la propriété :**
   - Aller à https://search.google.com/search-console
   - Cliquer "Ajouter une propriété"
   - Entrer : `https://crefer.tech`
   - Vérifier le domaine (suivre les instructions)

2. **Soumettre le sitemap :**
   - Dans Search Console > Sitemaps
   - Ajouter : `https://crefer.tech/sitemap.xml`
   - Cliquer "Soumettre"

3. **Vérifier l'indexation :**
   - Dans Search Console > Inspection d'URL
   - Entrer : `https://crefer.tech`
   - Cliquer "Demander l'indexation"

### Bing Webmaster Tools

1. Aller à https://www.bing.com/webmasters
2. Ajouter votre site
3. Soumettre le sitemap

---

## 4️⃣ Configuration Metadata par Page

### Pages principales à optimiser

#### Home Page
```javascript
// src/pages/Home.vue
seo.setSEO({
  title: 'CREFER - Formation Professionnelle Électrotechnique & Énergies Renouvelables Togo',
  description: 'École CREFER : formations CAP électricité, BT électrotechnique, modules solaires. +3000 étudiants formés. 95% taux réussite. Stages en entreprise inclus.',
  keywords: 'formation électricité, CAP électricité, BT électrotechnique, école énergie, solaire Togo, formation renouvelables',
  canonical: 'https://crefer.tech/'
})
```

#### About Page
```javascript
seo.setSEO({
  title: 'À Propos CREFER - Histoire et Mission',
  description: 'Découvrez CREFER depuis 2019. Première académie régionale en énergies. Mission : former experts solaires et électrotechnique.',
  keywords: 'CREFER histoire, mission formation, académie énergie Togo',
  canonical: 'https://crefer.tech/about'
})
```

#### Contact Page
```javascript
seo.setSEO({
  title: 'Contact CREFER - Nous Écrire',
  description: 'Contactez CREFER. Tél: +228 91 20 43 73. Email: contact@crefer.tech. Siège à Lomé-Togo.',
  keywords: 'contact CREFER, téléphone, email, adresse',
  canonical: 'https://crefer.tech/contact'
})
```

---

## 5️⃣ Tests Performance

### Google PageSpeed Insights

1. Aller à https://pagespeed.web.dev
2. Entrer : `https://crefer.tech`
3. Analyser

**Cibles :**
- Performance : > 80
- Accessibilité : > 90
- Bonnes pratiques : > 90
- SEO : > 90

### Outils supplémentaires

```bash
# Test local avec Lighthouse CLI
npm install -g lighthouse

# Analyser le site
lighthouse https://crefer.tech --view

# Analyser une page locale
npm run build
npm run preview
# Dans une autre terminal:
lighthouse http://localhost:5173 --view
```

### GTmetrix
- Aller à https://gtmetrix.com
- Analyser votre site
- Vérifier les scores (PageSpeed, YSlow)

---

## 6️⃣ Configuration Réseaux Sociaux

### Meta Tags pour Partage (déjà configurés)
```html
<!-- Dans index.html -->
<meta property="og:type" content="website">
<meta property="og:title" content="CREFER - Formation Énergies Renouvelables">
<meta property="og:description" content="...">
<meta property="og:url" content="https://crefer.tech">
<meta property="og:locale" content="fr_FR">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="CREFER - Formation Énergies Renouvelables">
```

### Configuration Facebook
1. Aller à https://developers.facebook.com
2. Créer une app
3. Ajouter le Facebook Pixel (optionnel)

### Configuration Twitter/X
1. Ajouter les meta tags Twitter (déjà fait)
2. Configurer l'accès au compte business

---

## 7️⃣ Monitoring Continu

### Créer un calendrier mensuel

**Semaine 1 :**
- Vérifier Google Analytics
- Consulter Search Console pour erreurs
- Analyser PageSpeed Insights

**Semaine 2 :**
- Vérifier ranking pour mots-clés principaux
- Analyser trafic par source (organique, direct, etc.)

**Semaine 3 :**
- Créer contenu optimisé SEO
- Vérifier Core Web Vitals

**Semaine 4 :**
- Rapport mensuel
- Planifier améliorations

---

## 8️⃣ Checklist Avant Production

### ✅ SEO
- [x] Meta tags optimisés
- [x] robots.txt créé
- [x] sitemap.xml créé
- [x] JSON-LD schemas ajoutés
- [x] Canonical URLs configurées
- [ ] GA4 ID ajouté et testé
- [ ] Pages testées avec Google Mobile Friendly

### ✅ Performance
- [ ] Images compressées et en WebP
- [ ] `loading="lazy"` utilisé
- [ ] Alt text ajouté à toutes les images
- [ ] PageSpeed Insights > 80
- [ ] LCP < 2.5s
- [ ] CLS < 0.1

### ✅ Accessibilité
- [ ] Contraste couleurs > 4.5:1
- [ ] Navigation au clavier possible
- [ ] ARIA labels ajoutés
- [ ] Liens avec text descriptif

### ✅ Sécurité
- [ ] HTTPS activé
- [ ] Pas de contenu mixte (http/https)
- [ ] Headers de sécurité configurés
- [ ] Formulaires CSRF protégés

### ✅ Mobile
- [ ] Design responsive testé
- [ ] Touch targets > 48px
- [ ] Viewport meta tag présent
- [ ] Pas de zoom disabled

---

## 9️⃣ Dépannage Courant

### GA4 ne track pas
```javascript
// Vérifier dans DevTools Console
window.gtag('event', 'page_view')

// Devrait voir : GA4 page_view event
```

### Images non optimisées
```bash
# Vérifier les fichiers
ls -lh src/assets/images/*.webp

# Régénérer
npm run generate:webp
```

### Sitemap non trouvé
- Vérifier : `https://crefer.tech/sitemap.xml`
- Doit retourner un XML valide
- Vérifier public/sitemap.xml existe

### Métadonnées non mises à jour
- Vérifier que le composable useSEO est importé
- Vérifier que setSEO() est appelé dans onMounted()
- Vérifier dans DevTools : `<head>` tags mis à jour

---

## 🔟 Après 1 Mois

### Analyser les résultats
1. **Google Analytics :**
   - Nombre de sessions
   - Taux de conversion
   - Pages populaires
   - Comportement des visiteurs

2. **Google Search Console :**
   - Clics organiques
   - Impressions
   - Positionnement moyen
   - Pages indexées

3. **PageSpeed Insights :**
   - Amélioration du score
   - Core Web Vitals

### Ajustements SEO
- Identifier les pages mal classées
- Améliorer le contenu
- Ajouter plus de backlinks
- Créer du contenu pour mots-clés manquants

---

## Ressources Utiles

| Outil | URL | Fréquence |
|------|-----|-----------|
| Google Analytics | https://analytics.google.com | Quotidien |
| Search Console | https://search.google.com/search-console | Hebdomadaire |
| PageSpeed Insights | https://pagespeed.web.dev | Mensuel |
| Mobile Friendly | https://search.google.com/test/mobile-friendly | Mensuel |
| Lighthouse CLI | (Local) | Avant déploiement |
| GTmetrix | https://gtmetrix.com | Mensuel |
| Screaming Frog | https://www.screamingfrog.co.uk | Trimestriel |

---

**Status** : ✅ Prêt pour production et soumission aux moteurs de recherche

**Prochaine action** : Ajouter votre GA4 ID et builder le site pour production
