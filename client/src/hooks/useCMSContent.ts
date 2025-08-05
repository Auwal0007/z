import { useQuery } from '@tanstack/react-query';
import { Product } from '../../../shared/schema';

// Hook for managing CMS content
export const useCMSContent = () => {
  const { data: products = [], isLoading, error } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const { data: featuredProducts = [] } = useQuery<Product[]>({
    queryKey: ['/api/products/featured'],
  });

  const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };

  const searchProducts = (query: string) => {
    return products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
  };

  return {
    products,
    featuredProducts,
    isLoading,
    error,
    getProductsByCategory,
    searchProducts,
  };
};

export default useCMSContent;