/**
 * Convert raster images in public/images to WebP.
 * Usage: node scripts/convert-images-to-webp.mjs [--remove-originals]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '../public/images');
const removeOriginals = process.argv.includes('--remove-originals');
const quality = 85;

const files = fs.readdirSync(imagesDir).filter((f) => /\.(png|jpe?g)$/i.test(f));

if (files.length === 0) {
  console.log('No PNG/JPG files to convert.');
  process.exit(0);
}

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const inputPath = path.join(imagesDir, file);
  const outputPath = path.join(imagesDir, file.replace(/\.(png|jpe?g)$/i, '.webp'));
  const before = fs.statSync(inputPath).size;

  await sharp(inputPath).webp({ quality, effort: 4 }).toFile(outputPath);

  const after = fs.statSync(outputPath).size;
  totalBefore += before;
  totalAfter += after;

  if (removeOriginals) fs.unlinkSync(inputPath);
}

const pct = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
console.log(`Converted ${files.length} images (${pct}% smaller).`);
if (removeOriginals) console.log('Original files removed.');
