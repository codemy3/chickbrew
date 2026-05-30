'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useCart } from '@/context/useCart';
import { useRouter } from 'next/navigation';

// --- TYPES ---
interface Variant {
  weight: string;
  price: string;
}

interface Product {
  id: number;
  name: string;
  category?: 'Arabica' | 'Robusta' | 'Blend';
  variants: Variant[];
  image: string;
}

// --- DATA ---
const PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: 'Arabica Gold', 
    category: 'Arabica',
    variants: [
      { weight: '250g', price: '₹240' },
      { weight: '500g', price: '₹450' }
    ],
    image: '/hero/arabica.png' 
  },
  { 
    id: 2, 
    name: 'Robusta Dark', 
    category: 'Robusta',
    variants: [
      { weight: '250g', price: '₹220' },
      { weight: '500g', price: '₹400' }
    ],
    image: '/hero/robusta.png' 
  },
  { 
    id: 3, 
    name: 'Custom Roast', 
    category: 'Blend',
    variants: [
      { weight: 'Tailored', price: 'On Request' }
    ],
    image: '/hero/custom.png' 
  },
];

// --- INDIVIDUAL INTERACTIVE CARD COMPONENT ---
// Extracted so each card can manage its own "Selected Variant" state
function InteractiveProductCard({ product, index }: { product: Product; index: number }) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);

  const selectedVariant = product.variants[selectedVariantIdx];

  const handleBuyNow = () => {
    // Parse numeric price from string (e.g., '₹240' -> 240)
    const raw = String(selectedVariant.price || '');
    const digits = raw.replace(/[^0-9\.]/g, '');
    const numericPrice = digits === '' ? 0 : parseFloat(digits);

    const cartId = `${product.id}-${selectedVariant.weight.replace(/\s+/g, '-')}`;

    addToCart({
      id: cartId,
      name: `${product.name} (${selectedVariant.weight})`,
      price: isNaN(numericPrice) ? 0 : numericPrice,
      image: product.image,
      variant: selectedVariant.weight,
    }, 1);

    router.push('/checkout');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[340px] group mt-24 md:mt-0"
    >
      {/* THE IMAGE: Floating Animation */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
        className="absolute -top-[160px] inset-x-0 flex justify-center z-30 pointer-events-none"
      >
        <div className="relative w-[180px] h-[250px] md:w-[220px] md:h-[300px]">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            className="object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.3)] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700"
          />
        </div>
      </motion.div>

      {/* THE VINTAGE CARD */}
      <div className="bg-[#FDFBF7] rounded-[2rem] pt-[130px] pb-10 px-8 flex flex-col items-center border border-[#8C5E3C]/20 shadow-[0_20px_50px_rgba(44,24,16,0.15)] relative z-10 w-full transition-colors duration-500 hover:border-[#8C5E3C]/40">
        
        {/* Product Name */}
        <div className="text-center w-full mb-6">
          <h3 className="text-3xl md:text-4xl font-serif font-black text-[#2C1810] leading-tight">
            {product.name}
          </h3>
        </div>

        {/* Vintage Variant Selector (Segmented Control) */}
        {product.variants.length > 1 ? (
          <div className="flex w-full bg-[#FAF6F0] p-1 rounded-full border border-[#8C5E3C]/20 mb-6 relative">
            {product.variants.map((variant, i) => (
              <button
                key={i}
                onClick={() => setSelectedVariantIdx(i)}
                className={`flex-1 py-2 text-[10px] font-mono uppercase tracking-widest rounded-full transition-all duration-300 z-10 ${
                  selectedVariantIdx === i 
                    ? 'text-[#FDFBF7] shadow-md' 
                    : 'text-[#8C5E3C] hover:text-[#2C1810]'
                }`}
              >
                {variant.weight}
              </button>
            ))}
            {/* Sliding Active Background */}
            <div 
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#2C1810] rounded-full transition-transform duration-300 ease-out z-0"
              style={{ transform: `translateX(${selectedVariantIdx === 0 ? '0' : '100%'})` }}
            />
          </div>
        ) : (
          // Fallback if there is only one variant (like Custom Roast)
          <div className="w-full text-center py-2 mb-6 border-b border-[#8C5E3C]/20">
             <span className="text-[#8C5E3C] text-[10px] font-mono uppercase tracking-widest">
               {selectedVariant.weight}
             </span>
          </div>
        )}

        {/* Dynamic Price Display */}
        <div className="h-12 flex items-center justify-center mb-8">
          <span className="text-[#2C1810] font-black text-3xl font-serif">
            {selectedVariant.price}
          </span>
        </div>

        {/* Buy Now Button */}
          <div className="w-full">
            <button
              onClick={handleBuyNow}
              className="w-full bg-[#2C1810] text-[#FAF6F0] px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#8C5E3C] transition-colors shadow-lg"
            >
              Buy Now
            </button>
          </div>

      </div>
    </motion.div>
  );
}

// --- MAIN SECTION EXPORT ---
export default function ProductCarousel() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full bg-[#A0826D] pt-32 md:pt-48 pb-32 overflow-x-hidden shrink-0 z-10">
      
      {/* Vintage Paper Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none mix-blend-multiply z-0" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Subtle Background SVG Wave */}
      <div className="absolute top-1/4 left-0 w-full -translate-y-1/2 opacity-10 z-0 pointer-events-none mix-blend-overlay">
        <svg viewBox="0 0 1440 320" className="w-[200%] md:w-full h-auto text-[#2C1810]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M0,160 C320,300 420,0 740,160 C1060,320 1120,0 1440,160" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Animated Header */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left mb-32 md:mb-48"
        >
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#2C1810] mb-4 block opacity-80">
            The Current Harvest
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-[#FDFBF7] leading-tight">
            Explore Our <br /> <span className="italic font-light opacity-90">Delicious Taste</span>
          </h2>
        </motion.div>

        {/* Products Row */}
        <div className="flex flex-wrap justify-center lg:justify-between gap-x-8 gap-y-24">
          {PRODUCTS.map((product, index) => (
            <InteractiveProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}