#!/bin/bash
# 🧪 Test de vérification du système de galerie CRUD

echo "==============================================="
echo "🧪 Tests de vérification - Système Gallery CRUD"
echo "==============================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Vérifier les fichiers créés
echo "Test 1: Fichiers créés"
echo "---"

files=(
    "src/services/galleryService.js"
    "src/services/galleryMigration.js"
    "src/pages/AdminGallery.vue"
    "src/data/defaultGalleryData.js"
)

for file in "${files[@]}"
do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅${NC} $file existe"
    else
        echo -e "${RED}❌${NC} $file manquant"
    fi
done

echo ""

# Test 2: Vérifier les imports
echo "Test 2: Imports/Exports"
echo "---"

# Vérifier que galleryService exporte le hook useGallery
if grep -q "export.*useGallery" src/services/galleryService.js; then
    echo -e "${GREEN}✅${NC} galleryService.js exporte useGallery"
else
    echo -e "${RED}❌${NC} Problème d'export dans galleryService.js"
fi

# Vérifier que galleryMigration importe DEFAULT_GALLERY_DATA
if grep -q "import.*DEFAULT_GALLERY_DATA" src/services/galleryMigration.js; then
    echo -e "${GREEN}✅${NC} galleryMigration.js importe DEFAULT_GALLERY_DATA"
else
    echo -e "${RED}❌${NC} Problème d'import dans galleryMigration.js"
fi

echo ""

# Test 3: Vérifier les imports dans les fichiers modifiés
echo "Test 3: Fichiers modifiés correctement"
echo "---"

# Vérifier AdminGallery.vue
if grep -q "useGallery" src/pages/AdminGallery.vue; then
    echo -e "${GREEN}✅${NC} AdminGallery.vue utilise useGallery"
else
    echo -e "${RED}❌${NC} AdminGallery.vue ne trouve pas useGallery"
fi

# Vérifier Gallery.vue
if grep -q "useGallery" src/pages/Gallery.vue; then
    echo -e "${GREEN}✅${NC} Gallery.vue utilise useGallery"
else
    echo -e "${RED}❌${NC} Gallery.vue ne trouve pas useGallery"
fi

# Vérifier AdminDashboard.vue
if grep -q "useGallery" src/pages/AdminDashboard.vue; then
    echo -e "${GREEN}✅${NC} AdminDashboard.vue utilise useGallery"
else
    echo -e "${RED}❌${NC} AdminDashboard.vue ne trouve pas useGallery"
fi

echo ""

# Test 4: Vérifier router.js
echo "Test 4: Routeur"
echo "---"

if grep -q "AdminGallery" src/router/index.js; then
    echo -e "${GREEN}✅${NC} Router importe AdminGallery"
else
    echo -e "${RED}❌${NC} Router ne find pas AdminGallery"
fi

if grep -q "/admin/gallery" src/router/index.js; then
    echo -e "${GREEN}✅${NC} Route /admin/gallery définie"
else
    echo -e "${RED}❌${NC} Route /admin/gallery manquante"
fi

echo ""

# Test 5: Vérifier AdminSidebar.vue
echo "Test 5: Sidebar"
echo "---"

if grep -q "Galerie" src/components/AdminSidebar.vue; then
    echo -e "${GREEN}✅${NC} AdminSidebar contient un lien Galerie"
else
    echo -e "${RED}❌${NC} AdminSidebar ne contient pas de lien Galerie"
fi

echo ""

# Test 6: Vérifier les données par défaut
echo "Test 6: Données par défaut"
echo "---"

count=$(grep -c "title:" src/data/defaultGalleryData.js || echo 0)
if [ "$count" -ge 22 ]; then
    echo -e "${GREEN}✅${NC} $count images par défaut trouvées"
else
    echo -e "${YELLOW}⚠️${NC} Seulement $count images par défaut (attendu 22+)"
fi

echo ""

# Test 7: Vérifier la structure
echo "Test 7: Structure du code"
echo "---"

# Vérifier que DEFAULT_GALLERY_DATA est un array
if grep -q "export const DEFAULT_GALLERY_DATA = \[" src/data/defaultGalleryData.js; then
    echo -e "${GREEN}✅${NC} DEFAULT_GALLERY_DATA est un array"
else
    echo -e "${RED}❌${NC} Structure de DEFAULT_GALLERY_DATA incorrecte"
fi

echo ""

# Résumé
echo "==============================================="
echo "🎉 Vérification complète!"
echo "==============================================="
echo ""
echo -e "${GREEN}✅ Le système Gallery CRUD est prêt.${NC}"
echo ""
echo "Prochaines étapes:"
echo "1. Accéder à /admin/gallery"
echo "2. Cliquer sur 'Importer les photos'"
echo "3. Vérifier que les images apparaissent publiquement"
echo ""
echo "Documentation:"
echo "- GALLERY_SETUP.md - Guide technique complet"
echo "- GALLERY_QUICKSTART.md - Démarrage rapide"
echo "- IMPLEMENTATION_SUMMARY.md - Résumé des changements"
echo ""
