#!/usr/bin/env python3
"""
Script pour convertir les fichiers PDF en images JPG
Utilise fitz (pymupdf) pour convertir les PDF en images
"""

import os
import sys
from pathlib import Path
import subprocess

# Installez fitz (pymupdf) si nécessaire
try:
    import fitz
except ImportError:
    print("Installation de PyMuPDF...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "PyMuPDF", "-q"])
    import fitz

# Chemins
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR.parent
PDF_DIR = PROJECT_DIR / "public" / "pdfs"
OUTPUT_DIR = PROJECT_DIR / "public" / "pdfs"

# Liste des fichiers PDF à convertir
pdf_files = [
    "fiche-inscription-modulaire.pdf",
    "fiche-inscription-bt-cap.pdf",
    "liste-outils-tp.pdf",
    "fiche-renseignement-modulaire.pdf",
    "fiche-renseignement-cap.pdf",
    "fiche-renseignement-bt.pdf"
]

def convert_pdf_to_jpg(pdf_file):
    """Convertir un fichier PDF en image JPG"""
    pdf_path = PDF_DIR / pdf_file
    jpg_name = pdf_file.replace(".pdf", ".jpg")
    jpg_path = OUTPUT_DIR / jpg_name
    
    if not pdf_path.exists():
        print(f"❌ Fichier non trouvé: {pdf_path}")
        return False
    
    try:
        print(f"🔄 Conversion de {pdf_file}...")
        
        # Ouvrir le PDF
        doc = fitz.open(str(pdf_path))
        
        # Extraire la première page
        if len(doc) > 0:
            page = doc[0]
            # Rendu en image avec bonne résolution
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # 2x zoom for better quality
            pix.save(str(jpg_path), "jpeg")
            doc.close()
            
            print(f"✅ Créé: {jpg_name}")
            return True
        else:
            print(f"❌ Le PDF est vide: {pdf_file}")
            return False
            
    except Exception as e:
        print(f"❌ Erreur lors de la conversion de {pdf_file}: {e}")
        return False

def main():
    """Convertir tous les fichiers PDF"""
    if not PDF_DIR.exists():
        print(f"❌ Le dossier {PDF_DIR} n'existe pas!")
        return
    
    print(f"📁 Conversion des fichiers PDF du dossier: {PDF_DIR}")
    print(f"💾 Les images JPG seront sauvegardées dans: {OUTPUT_DIR}\n")
    
    success_count = 0
    for pdf_file in pdf_files:
        if convert_pdf_to_jpg(pdf_file):
            success_count += 1
    
    print(f"\n✨ Conversion terminée: {success_count}/{len(pdf_files)} fichiers convertis")

if __name__ == "__main__":
    main()

