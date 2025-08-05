import serverless from 'serverless-http';
import express from 'express';

// Create a simple express app for testing
const app = express();
app.use(express.json());

// Add a simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!', timestamp: new Date().toISOString() });
});

// Add the products route directly here for testing
app.get('/api/products', (req, res) => {
  const testProducts = [
    {
      id: 1,
      name: 'Royal Oud Collection',
      price: '25000',
      image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'arabian',
      description: 'Premium Arabian oud perfume with rich, woody notes and exotic spices.',
      featured: true
    },
    {
      id: 2,
      name: 'English Rose Garden',
      price: '18000',
      image: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'english',
      description: 'Elegant English perfume with fresh rose petals, bergamot, and subtle vanilla.',
      featured: false
    }
  ];
  
  console.log('Products API called');
  res.json(testProducts);
});

// Add error handling
app.use((err: any, req: any, res: any, next: any) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message });
});

export const handler = serverless(app);
