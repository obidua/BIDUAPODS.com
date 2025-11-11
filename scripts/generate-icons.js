import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Read the SVG file
const svgPath = join(__dirname, '../public/logo.svg');
const svgBuffer = readFileSync(svgPath);

console.log('🎨 Generating PWA icons from logo.svg...\n');

// Generate icons for each size
const promises = sizes.map(async (size) => {
  const outputPath = join(__dirname, `../public/icons/icon-${size}x${size}.png`);
  
  try {
    await sharp(svgBuffer)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(outputPath);
    
    console.log(`✅ Generated icon-${size}x${size}.png`);
  } catch (error) {
    console.error(`❌ Failed to generate icon-${size}x${size}.png:`, error.message);
  }
});

await Promise.all(promises);

console.log('\n🎉 All PWA icons generated successfully!');
