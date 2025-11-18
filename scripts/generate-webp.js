const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '..', 'src', 'assets', 'images');
const widths = [480, 800, 1200];

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') return;

  const name = path.basename(file, ext);
  const inputPath = path.join(imagesDir, file);

  try {
    for (const w of widths) {
      const outName = `${name}-${w}.webp`;
      const outPath = path.join(imagesDir, outName);
      await sharp(inputPath).resize({ width: w }).webp({ quality: 80 }).toFile(outPath);
      console.log('Created', outName);
    }
  } catch (err) {
    console.error('Error processing', file, err);
  }
}

async function run() {
  if (!fs.existsSync(imagesDir)) {
    console.error('Images directory not found:', imagesDir);
    process.exit(1);
  }

  const files = fs.readdirSync(imagesDir);
  for (const file of files) {
    await processImage(file);
  }
  console.log('WebP generation complete');
}

run();
