'use client';

import { useState } from 'react';
import { Product } from '@/lib/products';
import { useCart } from '@/context/useCart';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const priceLabel = product.priceLabel ?? `₹${product.price.toFixed(2)}`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || '☕',
    }, quantity);

    setQuantity(1);

    toast.success(`${product.name} added to cart`, {
      style: {
        background: '#2A1F10',
        color: '#F9F6F1',
        border: '1px solid rgba(140, 94, 60, 0.3)',
        borderRadius: '8px',
      },
      iconTheme: {
        primary: '#D4AF37',
        secondary: '#2A1F10',
      },
    });
  };

  const handleChangeQuantity = (delta: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setQuantity((currentQuantity) => Math.max(1, currentQuantity + delta));
  };

  return (
    <Link href={`/product/${product.id}`} className="group block w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col"
      >
        {/* Huge Image Container */}
        <div className="relative w-full aspect-4/5 bg-[#110A08] overflow-hidden rounded-4xl border border-white/5 group-hover:border-[#8C5E3C]/30 transition-colors duration-500 shadow-2xl">
          
          {/* Subtle vignette/gradient for depth */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent z-10 opacity-90" />
          
          <motion.div
            className="w-full h-full flex items-center justify-center bg-[#1A120E]"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* NOTE: Replace this div with an actual <img src={product.image} /> of a transparent coffee bag */}
            <span className="text-8xl opacity-20 font-serif text-[#D4B895]">CB.</span>
          </motion.div>

          {/* Premium Badge */}
          {false && (
            <div className="absolute top-5 left-5 z-20">
              <span className="bg-[#D4B895] text-[#110A08] px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full">
                Featured
              </span>
            </div>
          )}

          <div className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl border border-white/10 bg-[#231912]/90 p-4 backdrop-blur-sm opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#110A08] px-3 py-2">
                <motion.button
                  type="button"
                  onClick={(event) => handleChangeQuantity(-1, event)}
                  whileTap={{ scale: 0.95 }}
                  className="grid h-7 w-7 place-items-center rounded-full text-[#D4AF37] hover:bg-white/5"
                  aria-label={`Decrease quantity for ${product.name}`}
                >
                  <Minus size={14} />
                </motion.button>
                <span className="min-w-6 text-center text-sm font-semibold text-white">
                  {quantity}
                </span>
                <motion.button
                  type="button"
                  onClick={(event) => handleChangeQuantity(1, event)}
                  whileTap={{ scale: 0.95 }}
                  className="grid h-7 w-7 place-items-center rounded-full text-[#D4AF37] hover:bg-white/5"
                  aria-label={`Increase quantity for ${product.name}`}
                >
                  <Plus size={14} />
                </motion.button>
              </div>

              <motion.button
                onClick={handleAddToCart}
                whileHover={{ backgroundColor: '#D4AF37', color: '#2A1F10' }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#8C5E3C] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300"
              >
                <ShoppingCart size={14} strokeWidth={2} />
                <span>Add to Cart</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Minimal Content Section */}
        <div className="pt-6 pb-2 px-2 flex flex-col gap-3">
          <div className="flex justify-between items-start gap-4">
            {/* Title - Pure white for absolute contrast */}
            <h3 className="font-serif text-2xl text-white line-clamp-2 leading-tight">
              {product.name}
            </h3>
            {/* Price */}
            <p className="text-xl font-light text-[#D4B895] shrink-0 mt-1">
              {priceLabel}
            </p>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] border border-[#8A7A6B]/30 text-[#8A7A6B] px-2.5 py-1 rounded-sm uppercase tracking-[0.15em]">
              {product.category}
            </span>
            <span className="text-[10px] border border-[#8A7A6B]/30 text-[#8A7A6B] px-2.5 py-1 rounded-sm uppercase tracking-[0.15em]">
              {product.roastLevel}
            </span>
            <span className="text-[10px] text-[#5A4A3B] uppercase tracking-widest ml-auto font-light">
              {product.weight}g
            </span>
          </div>

          {/* Taste Notes */}
          <p className="text-sm text-[#5A4A3B] mt-1 line-clamp-1 font-light tracking-wide">
            {product.tasteNotes.join(' • ')}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}