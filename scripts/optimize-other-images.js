import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../src/assets/images')

const imagesToOptimize = [
  'batiment1.jpg',
  'batiment2.jpg',
  'distinction1.jpg',
  'distinction2.jpg',
  'distinction3.jpg',
  'mission1.jpg',
  'vision2.jpg',
  'théorie.jpg',
  'pratique.jpg',
  'stage.jpg',
  'entreprenariat.jpg',
  'soutenance.jpg'
]

async function optimizeImages() {
  try {
    console.log(`🖼️  Optimisation des images (versions 1200px)...`)
    console.log('━'.repeat(50))

    for (const file of imagesToOptimize) {
      const filePath = path.join(imagesDir, file)
      
      if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${file} - fichier non trouvé`)
        continue
      }

      const fileName = path.parse(file).name
      
      console.log(`\n📷 ${file}`)

      try {
        const image = sharp(filePath)

        // Créer la version JPG 1200px optimisée
        const jpgOutputPath = path.join(imagesDir, `${fileName}-1200.jpg`)
        await image
          .resize(1200, 2400, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 75, progressive: true, mozjpeg: true })
          .toFile(jpgOutputPath)

        // Créer la version WebP 1200px
        const webpOutputPath = path.join(imagesDir, `${fileName}-1200.webp`)
        await image
          .resize(1200, 2400, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 70 })
          .toFile(webpOutputPath)

        console.log(`   ✅ ${fileName}-1200.jpg créé`)
        console.log(`   ✅ ${fileName}-1200.webp créé`)
      } catch (error) {
        console.error(`   ❌ Erreur: ${error.message}`)
      }
    }

    console.log('\n' + '━'.repeat(50))
    console.log(`✨ Optimisation terminée!`)
  } catch (error) {
    console.error('❌ Erreur:', error)
    process.exit(1)
  }
}

optimizeImages()
