import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../src/assets/images')
const outputDir = imagesDir

// Configuration d'optimisation
const SIZES = [480, 800, 1200]
const QUALITY = 75
const WEBP_QUALITY = 70

async function optimizeImages() {
  try {
    const files = fs.readdirSync(imagesDir)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file))

    console.log(`🖼️  Optimisation de ${imageFiles.length} images...`)
    console.log('━'.repeat(50))

    let totalOriginalSize = 0
    let totalOptimizedSize = 0

    for (const file of imageFiles) {
      const filePath = path.join(imagesDir, file)
      const fileName = path.parse(file).name
      const ext = path.parse(file).ext.toLowerCase()

      // Vérifier si le fichier commence par un underscore (ex: _DSC4853.jpg)
      const shouldProcess = fileName.startsWith('_') || ['soutenance', 'batiment1', 'batiment2', 'distinction1', 'distinction2', 'distinction3', 'pratique', 'stage', 'théorie', 'vision1', 'vision2', 'mission1', 'entreprenariat', 'expert-solaire'].includes(fileName)

      if (!shouldProcess) continue

      const stats = fs.statSync(filePath)
      const originalSize = stats.size
      totalOriginalSize += originalSize

      console.log(`\n📷 ${file}`)
      console.log(`   Taille originale: ${(originalSize / 1024 / 1024).toFixed(2)} MB`)

      try {
        // Créer les variantes d'images
        const image = sharp(filePath)

        // Générer les versions JPG optimisées
        for (const size of SIZES) {
          const outputFileName = `${fileName}-${size}.jpg`
          const outputPath = path.join(outputDir, outputFileName)

          await image
            .resize(size, size * 2, { fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: QUALITY, progressive: true })
            .toFile(outputPath)
        }

        // Générer les versions WebP optimisées
        for (const size of SIZES) {
          const outputFileName = `${fileName}-${size}.webp`
          const outputPath = path.join(outputDir, outputFileName)

          await image
            .resize(size, size * 2, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: WEBP_QUALITY })
            .toFile(outputPath)
        }

        // Compresser l'original
        const compressedPath = path.join(outputDir, file)
        await image
          .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
          .toFile(`${compressedPath}.tmp`)

        fs.renameSync(`${compressedPath}.tmp`, compressedPath)

        // Calculer la taille optimisée
        const optimizedStats = fs.statSync(compressedPath)
        const optimizedSize = optimizedStats.size
        totalOptimizedSize += optimizedSize

        const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1)
        console.log(`   ✅ Optimisé: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB (-${reduction}%)`)
        console.log(`   Variantes créées: -480.jpg, -480.webp, -800.jpg, -800.webp, -1200.jpg, -1200.webp`)
      } catch (error) {
        console.error(`   ❌ Erreur: ${error.message}`)
      }
    }

    console.log('\n' + '━'.repeat(50))
    console.log(`✨ Optimisation terminée!`)
    console.log(`   Taille originale totale: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`)
    console.log(`   Taille optimisée totale: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`)
    console.log(`   Réduction totale: ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%`)
  } catch (error) {
    console.error('❌ Erreur lors de l\'optimisation:', error)
    process.exit(1)
  }
}

optimizeImages()
