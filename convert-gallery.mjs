import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const inputDir = 'd:/zentroid-web/public/images/gallery';
const files = readdirSync(inputDir);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg'].includes(ext)) continue;

  const inputPath = join(inputDir, file);
  const outputName = basename(file, extname(file)) + '.webp';
  const outputPath = join(inputDir, outputName);

  if (existsSync(outputPath)) {
    console.log(`Skipping (exists): ${outputName}`);
    continue;
  }

  await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);
  console.log(`Converted: ${file} → ${outputName}`);
}

console.log('Done!');
