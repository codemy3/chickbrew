# Chick Brew Website - Development Instructions

This is a complete full-stack coffee e-commerce website with award-level 3D animations and premium design.

## Project Stack
- **Frontend**: Next.js 14, React, Three.js, Framer Motion, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: MongoDB
- **3D/Animations**: Three.js, Framer Motion
- **Payment**: Stripe integration (ready for setup)
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: Zustand

## Tech Specifications
- Responsive design (mobile, tablet, desktop)
- 3D coffee bean animations and interactive elements
- Premium earthy color palette (browns, creams, golds)
- Fast loading with optimized Next.js
- SEO optimized with proper metadata
- Admin panel for product management
- Smooth page transitions with Framer Motion
- Advanced product filtering system

## Development Checklist

- [x] Project scaffolding complete
- [x] Dependencies installed
- [x] Core pages created (Home, Shop, Product, About, Contact)
- [x] 3D animations implemented
- [x] Product filtering system built
- [x] Cart/Checkout functionality
- [x] Admin panel functional
- [ ] Database connection configured (optional - uses mock data)
- [ ] Payment integration working (Stripe setup needed)
- [ ] Testing & optimization complete

## Project Structure
```
chikbrew/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx            # Home page with 3D animation
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles
│   │   ├── shop/               # Shop page with filtering
│   │   ├── product/[id]/       # Product detail page
│   │   ├── cart/               # Shopping cart page
│   │   ├── about/              # About us page
│   │   ├── contact/            # Contact page
│   │   ├── admin/              # Admin dashboard
│   │   └── api/                # API routes
│   │       ├── products/       # Products endpoints
│   │       └── orders/         # Orders endpoints
│   ├── components/             # Reusable components
│   │   ├── Header.tsx          # Navigation header with cart
│   │   ├── Footer.tsx          # Footer
│   │   ├── ProductCard.tsx     # Product card with add to cart
│   │   ├── CoffeeBeanAnimation.tsx    # 3D coffee bean
│   │   └── BackgroundAnimation.tsx    # Animated background
│   ├── lib/
│   │   ├── db.ts               # MongoDB connection
│   │   └── store.ts            # Zustand cart store
│   ├── models/
│   │   ├── Product.ts          # Product MongoDB schema
│   │   └── Order.ts            # Order MongoDB schema
│   └── hooks/                  # Custom React hooks
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
├── .eslintrc.json
└── .env.local                  # Environment variables
```

## Getting Started
1. Dependencies installed: `npm install` ✓
2. Set up environment variables in `.env.local` (see .env.local.example)
3. Optional: Connect to MongoDB
4. Run development server: `npm run dev`
5. Visit http://localhost:3000 (or 3001 if 3000 is in use)

## Key Features Implemented

### ✨ Home Page
- Hero section with premium styling
- 3D coffee bean animation (React Three Fiber)
- Featured product collections
- Brand value propositions
- Smooth animations with Framer Motion

### 🛍️ Shop Page
- Grid layout with product cards
- Real-time filtering by:
  - Coffee type (Arabica, Robusta, Blends)
  - Roast level (Light, Medium, Dark)
  - Price range slider
- Product cards with:
  - Product image placeholder
  - Price display
  - Roast level badge
  - Taste notes tags
  - Add to Cart button

### 📦 Product Detail Page
- Detailed product information
- Taste profile visualization
- Product specifications
- Brewing tips and recommendations
- Quantity selector
- Add to Cart with instant feedback

### 🛒 Shopping Cart
- Real-time cart management
- Quantity controls
- Remove item functionality
- Order summary with:
  - Subtotal
  - Shipping costs
  - Tax calculation
- Checkout button (ready for payment integration)

### ℹ️ About Page
- Company mission and story
- Core values display
- Company statistics
- Professional branding content

### 📞 Contact Page
- Contact information (address, phone, email)
- Business hours
- Contact form with validation
- Email and phone links

### 🔐 Admin Dashboard
- Product management table
- Add new products
- Delete products
- View inventory levels
- Dashboard statistics
- Stock level indicators

### 🎨 Design Elements
- Premium earthy color palette
- Custom Tailwind configuration
- Responsive grid layouts
- Smooth transitions and animations
- Custom typography (Playfair Display + Inter)
- Mobile-first responsive design

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
Runs on http://localhost:3001 (or 3000 if available)

### Production Build
```bash
npm run build
npm start
```

### Lint Check
```bash
npm run lint
```

## 📊 API Routes

### Products API
- `GET /api/products` - Fetch products with filtering
- `POST /api/products` - Create new product

### Orders API
- `GET /api/orders` - Fetch all orders
- `POST /api/orders` - Create new order

## 🎯 State Management
Cart state managed with Zustand:
- Add items to cart
- Remove items
- Update quantities
- Calculate totals
- Clear cart

## 🎨 Color System
- **Coffee Browns**: #5a4829, #6b5635, #8b6f47
- **Dark Brown**: #2a1f10
- **Cream**: #f9f6f1
- **Gold Accent**: #d4af37

## 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔄 What Works
✓ All pages load correctly
✓ Navigation between pages smooth
✓ Product filtering functional
✓ Add to cart working
✓ Cart updates in header
✓ Admin panel displaying correctly
✓ Responsive design on mobile/desktop
✓ 3D animations rendering
✓ Form validation on contact page

## 📝 Next Steps (Optional Enhancements)
1. Connect MongoDB for persistent data storage
2. Implement Stripe payment integration
3. Add user authentication
4. Create order tracking system
5. Set up email notifications
6. Add product reviews/ratings
7. Implement wishlist feature
8. Set up newsletter subscription
9. Add blog/resource section
10. Optimize images and performance

## 🔧 Environment Setup

Create `.env.local` file with:
```
MONGODB_URI=mongodb://your_database_url
STRIPE_PUBLIC_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

## 📚 Documentation
- See README.md for full project documentation
- See package.json for all dependencies
- See .github/copilot-instructions.md for development notes

## ✅ Build Status
- **Latest Build**: ✓ Successful
- **All Pages**: ✓ Functional
- **Components**: ✓ Working
- **Styling**: ✓ Applied
- **Animations**: ✓ Rendering

---

**Project Built With**: Next.js 14 | React 18 | Three.js | Framer Motion | Tailwind CSS | TypeScript | Zustand

