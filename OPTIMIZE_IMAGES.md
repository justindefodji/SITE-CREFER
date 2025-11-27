# Script d'Optimisation des Images

Ce script optimise automatiquement les images du projet pour améliorer les performances du site.

## Fonctionnalités

- ✅ Compression JPG avec qualité optimisée (75%)
- ✅ Génération WebP haute performance (70%)
- ✅ Création de variantes multi-résolution (480px, 800px, 1200px)
- ✅ Progressive JPEG pour les images JPG
- ✅ Rapport détaillé de compression

## Installation

Les dépendances sont déjà installées. Assurez-vous que `sharp` est installé :

```bash
npm install
```

## Utilisation

### Optimiser toutes les images

```bash
npm run optimize:images
```

Le script va :

1. Trouver toutes les images JPG/PNG du dossier `src/assets/images/`
2. Créer 3 variantes redimensionnées pour chaque image (480px, 800px, 1200px)
3. Générer les versions WebP pour chaque variante
4. Compresser l'original avec une qualité optimale
5. Afficher un rapport détaillé des réductions de taille

### Exemple de sortie

```text
🖼️  Optimisation de 50 images...
══════════════════════════════════════════════════

📷 _DSC4853.jpg
   Taille originale: 2.45 MB
   ✅ Optimisé: 0.65 MB (-73.5%)
   Variantes créées: -480.jpg, -480.webp, -800.jpg, -800.webp, -1200.jpg, -1200.webp

...

══════════════════════════════════════════════════
✨ Optimisation terminée!
   Taille originale totale: 122.50 MB
   Taille optimisée totale: 32.15 MB
   Réduction totale: 73.8%
```

## Configuration

Vous pouvez modifier les paramètres dans `scripts/optimize-images.js` :

- `SIZES`: Tableau de largeurs cibles (par défaut: [480, 800, 1200])
- `QUALITY`: Qualité JPG (par défaut: 75, échelle 0-100)
- `WEBP_QUALITY`: Qualité WebP (par défaut: 70, échelle 0-100)

## Impact sur les performances

- **Réduction de taille**: 70-80% de réduction typiquement
- **Chargement plus rapide**: Pages plus légères et plus rapides
- **Support WebP**: Images modernes pour navigateurs compatibles
- **Responsive**: Variantes optimisées pour mobile/desktop

## Notes

- Les fichiers originaux sont remplacés par les versions compressées
- Les variantes multi-résolution sont créées à côté des originaux
- Le script traite uniquement les images avec underscore (_DSC*.jpg) et les images de contenu spécifiques

## Aide

Pour plus d'informations sur Sharp: [Documentation Sharp](https://sharp.pixelplumbing.com/)
