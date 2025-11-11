import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('📸 Generating PWA screenshot placeholders...\n');

// Desktop screenshot (1280x720)
await sharp({
  create: {
    width: 1280,
    height: 720,
    channels: 4,
    background: { r: 6, g: 182, b: 212, alpha: 1 }
  }
})
  .composite([{
    input: Buffer.from(`
      <svg width="1280" height="720">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
            <stop offset="45%" style="stop-color:#8b5cf6;stop-opacity:1" />
            <stop offset="80%" style="stop-color:#3b82f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#16a34a;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1280" height="720" fill="white"/>
        <text x="640" y="320" font-family="Arial, sans-serif" font-size="72" font-weight="bold" text-anchor="middle" fill="url(#gradient)">BIDUA Pods</text>
        <text x="640" y="400" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#333">Premium Capsule Beds &amp; Sleeping Pods</text>
      </svg>
    `),
    top: 0,
    left: 0
  }])
  .png()
  .toFile(join(__dirname, '../public/screenshots/desktop-1.png'));

console.log('✅ Generated desktop-1.png (1280x720)');

// Mobile screenshot (540x720)
await sharp({
  create: {
    width: 540,
    height: 720,
    channels: 4,
    background: { r: 6, g: 182, b: 212, alpha: 1 }
  }
})
  .composite([{
    input: Buffer.from(`
      <svg width="540" height="720">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
            <stop offset="45%" style="stop-color:#8b5cf6;stop-opacity:1" />
            <stop offset="80%" style="stop-color:#3b82f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#16a34a;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="540" height="720" fill="white"/>
        <text x="270" y="320" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="url(#gradient)">BIDUA</text>
        <text x="270" y="380" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="url(#gradient)">Pods</text>
        <text x="270" y="440" font-family="Arial, sans-serif" font-size="20" text-anchor="middle" fill="#333">Premium Capsule Beds</text>
      </svg>
    `),
    top: 0,
    left: 0
  }])
  .png()
  .toFile(join(__dirname, '../public/screenshots/mobile-1.png'));

console.log('✅ Generated mobile-1.png (540x720)');

console.log('\n🎉 All screenshots generated successfully!');
