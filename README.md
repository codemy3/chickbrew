# Chick Brew - Premium Coffee E-Commerce Website

A stunning, award-level full-stack coffee e-commerce website with 3D animations, premium design, and a complete admin panel.

## 🌟 Features

- **Premium 3D Animations**: Beautiful coffee bean animations and interactive 3D scenes using React Three Fiber and Drei
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Product Catalog**: Advanced filtering by category, roast level, and price
- **Shopping Cart**: Smooth cart management with Zustand state management
- **Admin Dashboard**: Manage products and inventory
- **Modern UI**: Earthy color palette with premium coffee-inspired design
- **Fast Performance**: Optimized Next.js with server-side rendering
- **SEO Optimized**: Proper metadata and structured data

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Next.js 14** - Full-stack framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Useful helpers for React Three Fiber

### Backend
- **Next.js API Routes** - Serverless backend
- **Node.js** - Runtime environment
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

### State Management
- **Zustand** - Lightweight state management for cart

## 📁 Project Structure

```
chikbrew/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx            # Home page with animations
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
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer
│   │   ├── ProductCard.tsx     # Product card component
│   │   ├── CoffeeBeanAnimation.tsx    # 3D coffee bean animation
│   │   └── BackgroundAnimation.tsx    # Background animation
│   ├── lib/                    # Utility functions
│   │   ├── db.ts               # MongoDB connection
│   │   └── store.ts            # Zustand cart store
│   ├── models/                 # Database models
│   │   ├── Product.ts          # Product schema
│   │   └── Order.ts            # Order schema
│   └── hooks/                  # Custom React hooks
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
└── .eslintrc.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- MongoDB database (local or cloud)

### Installation

1. **Clone and Setup**
```bash
cd chikbrew
npm install
```

2. **Environment Variables**
Create `.env.local` file:
```
MONGODB_URI=your_mongodb_connection_string
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

3. **Run Development Server**
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 📖 Pages

### Public Pages
- **Home** (`/`) - Welcome page with featured products and 3D animations
- **Shop** (`/shop`) - Product catalog with filtering
- **Product Detail** (`/product/[id]`) - Detailed product information
- **About** (`/about`) - Company story and values
- **Contact** (`/contact`) - Contact form and information
- **Cart** (`/cart`) - Shopping cart and checkout

### Admin Pages
- **Dashboard** (`/admin`) - Product management and inventory

## 🎨 Design System

### Color Palette
- **Primary**: Coffee browns (#5a4829, #6b5635, #8b6f47)
- **Background**: Cream (#f9f6f1)
- **Accent**: Gold (#d4af37)
- **Dark**: Deep brown (#2a1f10)

### Typography
- **Serif**: Playfair Display (headings)
- **Sans**: Inter (body text)

## ✨ Key Features Explained

### 3D Animations
The website features stunning 3D coffee bean animations using React Three Fiber. The animations are smooth and performant, creating an award-level aesthetic.

### Product Filtering
Users can filter products by:
- Coffee type (Arabica, Robusta, Blends)
- Roast level (Light, Medium, Dark)
- Price range

### Shopping Experience
- Add products to cart with instant feedback
- Manage cart quantities
- View order summary with tax calculations
- Smooth transitions and animations

### Admin Panel
- View all products with stock levels
- Add new products
- Delete products
- Monitor inventory levels

## 🔧 API Routes

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create new product

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create new order

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Future Enhancements

- [ ] User authentication and accounts
- [ ] Stripe payment integration
- [ ] Order tracking
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Newsletter subscription
- [ ] Blog section
- [ ] Live inventory sync
- [ ] Email notifications

## 📦 Build and Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

For support, email: hello@chickbrew.com

---

Built with ☕ and 💻 by Chick Brew Team
