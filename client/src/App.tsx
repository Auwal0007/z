import { useState } from 'react';
import { Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import AdminPanel from './components/AdminPanel';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
        <Header 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        <main>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/category/:category" component={CategoryPage} />
            <Route path="/product/:id" component={ProductDetailPage} />
            <Route>
              <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                <p className="text-lg">The page you're looking for doesn't exist.</p>
              </div>
            </Route>
          </Switch>
        </main>
        
        <Footer />
        <WhatsAppFloat />
        <AdminPanel />
      </div>
    </QueryClientProvider>
  );
}

export default App;