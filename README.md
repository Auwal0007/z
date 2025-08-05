# Zubees Collectibles - Comprehensive E-commerce Platform

## Overview
A modern, comprehensive e-commerce platform for premium perfumes and fragrances, built with React, TypeScript, and integrated with Netlify CMS for content management.

## Features

### 🛍️ E-commerce Functionality
- **Product Management**: Full CRUD operations with admin panel
- **Shopping Cart**: Persistent cart with localStorage
- **Search & Filter**: Advanced search with live results
- **Categories**: Organized product categories (Arabian, English, Oil, Luxury)
- **WhatsApp Integration**: Direct ordering via WhatsApp

### 📝 Content Management
- **Netlify CMS**: Git-based content management system
- **Dynamic Content**: Products, categories, and site settings
- **Media Management**: Image uploads and organization
- **SEO Optimization**: Meta tags and structured data

### 🎨 Design & UX
- **Responsive Design**: Mobile-first approach
- **Custom Color Palette**: Burgundy, gold, and cream theme
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: WCAG compliant design

### 🚀 Performance & SEO
- **Static Site Generation**: Pre-built content for fast loading
- **Image Optimization**: Responsive images with lazy loading
- **SEO Meta Tags**: Dynamic meta tags for better search visibility
- **PWA Ready**: Service worker and manifest support

## Technology Stack

### Frontend
- **React 18.3.1** with TypeScript
- **Vite** for fast development and building
- **Wouter** for client-side routing
- **Tailwind CSS** for styling
- **TanStack React Query** for data fetching
- **Lucide React** for icons

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database schema
- **Zod** for validation
- **In-memory storage** for development

### Content Management
- **Netlify CMS** for content management
- **Gray Matter** for parsing YAML front matter
- **JS-YAML** for configuration processing

### Deployment
- **Netlify** for hosting and CI/CD
- **Git-based workflow** for content management

## Project Structure

```
├── public/
│   ├── admin/                  # Netlify CMS admin interface
│   ├── images/                 # Static images
│   └── _redirects             # Netlify redirects
├── src/
│   ├── components/            # Reusable UI components
│   ├── pages/                 # Route-specific pages
│   ├── content/               # CMS content files
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Utility functions
│   └── data/                  # Static data files
├── scripts/                   # Build scripts
├── server/                    # Express.js backend
└── shared/                    # Shared types and schemas
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Access the site at `http://localhost:5000`

### Content Management
1. Access the CMS at `/admin/`
2. Login with Netlify Identity
3. Manage products, categories, and site settings

### Deployment to Netlify

1. **Connect to Git**: Push your code to GitHub/GitLab
2. **Deploy to Netlify**:
   ```bash
   npm run deploy
   ```
3. **Configure Netlify**:
   - Set build command: `npm run build`
   - Set publish directory: `dist/public`
   - Enable Netlify Identity for CMS access
   - Configure Git Gateway for CMS

### Environment Setup
1. **Netlify Identity**: Enable in Netlify dashboard
2. **Git Gateway**: Configure for CMS access
3. **Media Storage**: Configure media folder permissions

## CMS Configuration

### Products
- Name, price, description
- Category selection
- Image upload
- Featured status
- Stock status
- Tags and metadata

### Categories
- Name and description
- Featured image
- SEO metadata

### Site Settings
- Contact information
- Social media links
- WhatsApp number
- Brand settings

## Development

### Adding New Features
1. Create components in `src/components/`
2. Add pages in `src/pages/`
3. Update routing in `App.tsx`
4. Add CMS fields in `public/admin/config.yml`

### Content Updates
1. Use Netlify CMS at `/admin/`
2. Or edit markdown files in `src/content/`
3. Run `npm run generate-content` to update static files

### Styling
- Use Tailwind CSS classes
- Custom colors: burgundy, gold, cream
- Responsive design utilities
- Custom animations and transitions

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/category/:category` - Get products by category
- `GET /api/products/search?q=query` - Search products
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- WhatsApp: +2348038507754
- Email: info@zubeescollectibles.com

---

Built with ❤️ for fragrance lovers everywhere.