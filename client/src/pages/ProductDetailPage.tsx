import { useParams } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { MessageCircle } from 'lucide-react';
import { Product } from '@shared/schema';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ['api', 'products', id],
    enabled: !!id,
  });

  const formatPrice = (price: string) => {
    const numPrice = parseFloat(price);
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(numPrice);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'arabian': return 'bg-burgundy-100 text-burgundy-800';
      case 'english': return 'bg-green-100 text-green-800';
      case 'oil': return 'bg-amber-100 text-amber-800';
      case 'luxury': return 'bg-gold-100 text-gold-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'arabian': return 'Arabian';
      case 'english': return 'English';
      case 'oil': return 'Oil Perfume';
      case 'luxury': return 'Luxury';
      default: return category;
    }
  };

  const handleWhatsAppOrder = () => {
    if (product) {
      const message = `Hi! I'm interested in ${product.name} (${formatPrice(product.price)}). Could you provide more details and help me place an order?`;
      const whatsappUrl = `https://wa.me/2348038507754?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

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
          <p className="text-2xl font-semibold text-burgundy-600 mb-4">
            {formatPrice(product.price)}
          </p>
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(product.category)}`}>
              {getCategoryName(product.category)}
            </span>
            {product.featured && (
              <span className="inline-block bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                Featured
              </span>
            )}
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button 
            onClick={handleWhatsAppOrder}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
            data-testid="button-order-whatsapp"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Order via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}