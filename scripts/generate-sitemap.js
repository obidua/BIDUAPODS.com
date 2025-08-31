import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import product data (we'll need to adjust the import path)
const productsPath = path.join(__dirname, '../src/data/products.ts');
let products = [];

try {
  // Read the products file and extract product IDs
  const productsContent = fs.readFileSync(productsPath, 'utf8');
  
  // Extract product IDs from the products array
  const productMatches = productsContent.match(/id:\s*['"`]([^'"`]+)['"`]/g);
  if (productMatches) {
    products = productMatches.map(match => {
      const id = match.match(/['"`]([^'"`]+)['"`]/)[1];
      return { id };
    });
  }
} catch (error) {
  console.warn('Could not read products file, using fallback product list');
  // Fallback product list
  products = [
    { id: 'galaxy-single' },
    { id: 'galaxy-double' },
    { id: 'cosmos-vertical' },
    { id: 'wooden-single' },
    { id: 'esports-single' },
    { id: 'platinum-frp-fully-loaded' },
    { id: 'platinum-frp-mid-tier' },
    { id: 'platinum-frp-basic' }
  ];
}

const baseUrl = 'https://biduapods.com';

// Define all static routes
const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/products', priority: '0.9', changefreq: 'weekly' },
  { url: '/catalogue', priority: '0.9', changefreq: 'weekly' },
  { url: '/features', priority: '0.8', changefreq: 'monthly' },
  { url: '/gallery', priority: '0.7', changefreq: 'monthly' },
  { url: '/about', priority: '0.6', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/order-now', priority: '0.9', changefreq: 'weekly' }
];

// Generate product routes
const productRoutes = products.map(product => ({
  url: `/products/${product.id}`,
  priority: '0.8',
  changefreq: 'weekly'
}));

// Combine all routes
const allRoutes = [...staticRoutes, ...productRoutes];

// Generate sitemap XML
const generateSitemap = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  allRoutes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Write sitemap to public directory
const sitemapContent = generateSitemap();
const publicDir = path.join(__dirname, '../public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemapContent);

console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
console.log(`📊 Generated ${allRoutes.length} URLs (${staticRoutes.length} static + ${productRoutes.length} products)`);