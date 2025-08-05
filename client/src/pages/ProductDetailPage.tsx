import { useParams } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@shared/schema';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ['/api/products', id],
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-xl">Loading product...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-xl text-red-600">Product not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            ₦{Number(product.price).toLocaleString()}
          </p>
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {product.category}
            </span>
            {product.featured && (
              <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                Featured
              </span>
            )}
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            data-testid="button-order-now"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}