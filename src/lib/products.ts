export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  priceLabel?: string;
  category: 'Arabica' | 'Robusta' | 'Blend';
  roastLevel: 'Light' | 'Medium' | 'Dark';
  tasteNotes: string[];
  origin: string;
  image?: string;
  weight?: number;
  stock?: number;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Arabica Gold',
    description: 'A smooth, elegant Arabica with golden caramel notes and a clean finish.',
    price: 240,
    priceLabel: '250g - ₹240',
    category: 'Arabica',
    roastLevel: 'Medium',
    tasteNotes: ['Caramel', 'Honey', 'Citrus'],
    origin: 'Highlands, Ethiopia',
    image: '/hero/arabica.png',
    weight: 250,
    stock: 50,
    featured: true,
  },
  {
    id: '2',
    name: 'Robusta Dark',
    price: 220,
    priceLabel: '250g - ₹220',
    description: 'Bold, rich, and full-bodied with a deep roasted profile built for strong coffee lovers.',
    category: 'Robusta',
    roastLevel: 'Dark',
    tasteNotes: ['Cocoa', 'Earthy', 'Smoky'],
    origin: 'Southeast Asia',
    image: '/hero/robusta.png',
    weight: 250,
    stock: 75,
    featured: true,
  },
  {
    id: '3',
    name: 'Custom Roast',
    description: 'Our signature balanced roast with a softer body and a warm, crowd-pleasing finish.',
    price: 0,
    priceLabel: 'Price on request',
    category: 'Blend',
    roastLevel: 'Light',
    tasteNotes: ['Toffee', 'Nutty', 'Soft Spice'],
    origin: 'Chick Brew House Blend',
    image: '/hero/custom.png',
    weight: 250,
    stock: 45,
    featured: false,
  },
];

// Keep MOCK_PRODUCTS for backward compatibility
export const MOCK_PRODUCTS = products;
