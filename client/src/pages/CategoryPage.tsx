import { useParams } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@shared/schema';
import ProductGrid from '../components/ProductGrid';

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ['api', 'products', 'category', category],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-xl">Loading {category} products...</div>
      </div>
    );
  }

  const categoryTitle = category ? 
    category.charAt(0).toUpperCase() + category.slice(1) + ' Perfumes' : 
    'Category';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{categoryTitle}</h1>
      <ProductGrid 
        products={products}
        searchQuery=""
        selectedCategory={category || 'all'}
      />
    </div>
  );
}