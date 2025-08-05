import { useState, useEffect } from 'react';
import { Product } from '../../shared/schema';
import { CMSCategory, CMSSiteSettings } from '../utils/contentLoader';

// Import the static data generated at build time
let staticProductsData: { products: Product[]; lastGenerated: string; count: number } | null = null;
let staticCategoriesData: CMSCategory[] | null = null;
let staticSettingsData: CMSSiteSettings | null = null;

// Dynamically import static data with fallback
async function initializeStaticData() {
  try {
    const productData = await import('../data/staticProducts.json');
    if (Array.isArray(productData.default)) {
      staticProductsData = {
        products: productData.default,
        lastGenerated: new Date().toISOString(),
        count: productData.default.length
      };
    } else {
      staticProductsData = productData.default;
    }
  } catch (error) {
    console.warn('Static products data not found, will use fallback');
  }

  try {
    const categoryData = await import('../data/staticCategories.json');
    staticCategoriesData = categoryData.default;
  } catch (error) {
    console.warn('Static categories data not found, will use fallback');
  }

  try {
    const settingsData = await import('../data/staticSettings.json');
    staticSettingsData = settingsData.default;
  } catch (error) {
    console.warn('Static settings data not found, will use fallback');
  }
}

export function useCMSProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchProducts() {
    try {
      setLoading(true);
      
      // Initialize static data if not already done
      if (!staticProductsData) {
        await initializeStaticData();
      }
      
      if (staticProductsData?.products) {
        // Load from static JSON generated at build time
        const products = staticProductsData.products as Product[];
        setProducts(products);
        setError(null);
        console.log(`📦 Loaded ${products.length} products from static data`);
      } else {
        // Fallback: Load from content files directly (development mode)
        const { loadCMSProducts } = await import('../utils/contentLoader');
        const products = await loadCMSProducts();
        setProducts(products);
        setError(null);
        console.log(`📁 Loaded ${products.length} products from content files`);
      }
    } catch (err) {
      console.error('Error loading products:', err);
      setError('Failed to load products');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { 
    products, 
    loading, 
    error, 
    refetch: fetchProducts,
    lastGenerated: staticProductsData?.lastGenerated
  };
}

export function useCMSCategories() {
  const [categories, setCategories] = useState<CMSCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchCategories() {
    try {
      setLoading(true);
      
      // Initialize static data if not already done
      if (!staticCategoriesData) {
        await initializeStaticData();
      }
      
      if (staticCategoriesData) {
        setCategories(staticCategoriesData);
        setError(null);
        console.log(`📂 Loaded ${staticCategoriesData.length} categories from static data`);
      } else {
        // Fallback: Load from content files directly
        const { loadCMSCategories } = await import('../utils/contentLoader');
        const categories = await loadCMSCategories();
        setCategories(categories);
        setError(null);
        console.log(`📁 Loaded ${categories.length} categories from content files`);
      }
    } catch (err) {
      console.error('Error loading categories:', err);
      setError('Failed to load categories');
      setCategories([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, loading, error, refetch: fetchCategories };
}

export function useCMSSettings() {
  const [settings, setSettings] = useState<CMSSiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchSettings() {
    try {
      setLoading(true);
      
      // Initialize static data if not already done
      if (!staticSettingsData) {
        await initializeStaticData();
      }
      
      if (staticSettingsData) {
        setSettings(staticSettingsData);
        setError(null);
        console.log('⚙️ Loaded site settings from static data');
      } else {
        // Fallback: Load from content files directly
        const { loadCMSSettings } = await import('../utils/contentLoader');
        const settings = await loadCMSSettings();
        setSettings(settings);
        setError(null);
        console.log('📁 Loaded site settings from content files');
      }
    } catch (err) {
      console.error('Error loading site settings:', err);
      setError('Failed to load site settings');
      setSettings(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  return { settings, loading, error, refetch: fetchSettings };
}

// Hook for loading individual product
export function useCMSProduct(productId: string) {
  const { products, loading, error } = useCMSProducts();
  const product = products.find(p => p.id.toString() === productId);
  
  return {
    product,
    loading,
    error,
    notFound: !loading && !error && !product
  };
}

// Hook for filtered products
export function useFilteredProducts(category?: string, featured?: boolean, newArrival?: boolean) {
  const { products, loading, error } = useCMSProducts();
  
  const filteredProducts = products.filter(product => {
    if (category && product.category !== category) return false;
    if (featured && !product.featured) return false;
    if (newArrival && !product.newArrival) return false;
    return true;
  });

  return {
    products: filteredProducts,
    loading,
    error
  };
}

// Hook for product search
export function useSearchProducts(query: string) {
  const { products, loading, error } = useCMSProducts();
  
  const searchResults = query.trim() 
    ? products.filter(product => {
        const searchTerm = query.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
        );
      })
    : products;

  return {
    products: searchResults,
    loading,
    error,
    hasQuery: query.trim().length > 0
  };
}

export default useCMSProducts;
