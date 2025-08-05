import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class StaticContentGenerator {
  constructor() {
    this.contentDir = path.join(__dirname, '../src/content');
    this.outputDir = path.join(__dirname, '../src/data');
  }

  async generateProducts() {
    const productsDir = path.join(this.contentDir, 'products');
    const products = [];

    if (!fs.existsSync(productsDir)) {
      console.log('Products directory not found, creating sample data...');
      return this.createSampleProducts();
    }

    const files = fs.readdirSync(productsDir);
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(productsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        
        products.push({
          ...data,
          id: path.basename(file, '.md'),
          slug: path.basename(file, '.md')
        });
      }
    }

    return products;
  }

  async generateCategories() {
    const categoriesDir = path.join(this.contentDir, 'categories');
    const categories = [];

    if (!fs.existsSync(categoriesDir)) {
      console.log('Categories directory not found, creating sample data...');
      return this.createSampleCategories();
    }

    const files = fs.readdirSync(categoriesDir);
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(categoriesDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        
        categories.push({
          ...data,
          slug: path.basename(file, '.md')
        });
      }
    }

    return categories;
  }

  async generateSiteSettings() {
    const settingsFile = path.join(this.contentDir, 'settings/general.md');
    
    if (!fs.existsSync(settingsFile)) {
      console.log('Settings file not found, creating default settings...');
      return this.createDefaultSettings();
    }

    const fileContent = fs.readFileSync(settingsFile, 'utf8');
    const { data } = matter(fileContent);
    
    return data;
  }

  createSampleProducts() {
    return [
      {
        id: 'royal-oud-collection',
        name: 'Royal Oud Collection',
        price: 25000,
        image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'arabian',
        description: 'Premium Arabian oud perfume with rich, woody notes and exotic spices.',
        featured: true,
        inStock: true,
        brand: 'Zubees Premium',
        size: '50ml',
        tags: ['oud', 'woody', 'luxury'],
        slug: 'royal-oud-collection'
      }
    ];
  }

  createSampleCategories() {
    return [
      {
        id: 'arabian',
        name: 'Arabian Perfumes',
        description: 'Rich, exotic fragrances with traditional Middle Eastern notes',
        image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured: true,
        slug: 'arabian'
      }
    ];
  }

  createDefaultSettings() {
    return {
      title: 'Zubees Collectibles',
      description: 'Premium perfumes and fragrances collection',
      whatsapp: '+2348038507754',
      email: 'info@zubeescollectibles.com',
      address: 'Lagos, Nigeria',
      social: {}
    };
  }

  async generate() {
    console.log('Generating static content...');

    // Ensure output directory exists
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }

    try {
      const products = await this.generateProducts();
      const categories = await this.generateCategories();
      const settings = await this.generateSiteSettings();

      // Write static JSON files
      fs.writeFileSync(
        path.join(this.outputDir, 'staticProducts.json'),
        JSON.stringify(products, null, 2)
      );

      fs.writeFileSync(
        path.join(this.outputDir, 'staticCategories.json'),
        JSON.stringify(categories, null, 2)
      );

      fs.writeFileSync(
        path.join(this.outputDir, 'staticSettings.json'),
        JSON.stringify(settings, null, 2)
      );

      console.log('✅ Static content generated successfully!');
      console.log(`📦 Generated ${products.length} products`);
      console.log(`📂 Generated ${categories.length} categories`);
      console.log('⚙️ Generated site settings');

    } catch (error) {
      console.error('❌ Error generating static content:', error);
      process.exit(1);
    }
  }
}

// Run the generator
const generator = new StaticContentGenerator();
generator.generate();