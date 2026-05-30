'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/useCart';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const subtotal = getCartTotal();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#2C1810]/40 backdrop-blur-sm cursor-pointer"
          />

          {/* The Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md h-full bg-[#FDFBF7] shadow-[[-20px_0_40px_rgba(44,24,16,0.1)]] flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#8C5E3C]/20">
              <h2 className="text-2xl font-serif font-black text-[#2C1810]">Your Order</h2>
              <button 
                onClick={onClose}
                className="p-2 text-[#8C5E3C] hover:text-[#2C1810] hover:bg-[#FAF6F0] rounded-full transition-colors"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Cart Items (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                  <ShoppingBag size={48} className="text-[#8C5E3C] mb-4" strokeWidth={1} />
                  <p className="text-lg font-serif text-[#2C1810]">Your cart is empty</p>
                  <p className="text-sm text-[#8C5E3C] mt-2">Discover your perfect roast.</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div layout key={item.id} className="flex gap-4 bg-white p-4 rounded-2xl border border-[#8C5E3C]/10 shadow-[0_8px_20px_rgba(140,94,60,0.05)]">
                    
                    {/* Item Image */}
                    <div className="relative w-20 h-24 bg-[#FAF6F0] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                       <Image src={item.image || '/images/custom.png'} alt={item.name} fill className="object-contain p-2" />
                    </div>

                    {/* Item Details */}
                    <div className="flex flex-col flex-1 justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif font-bold text-[#2C1810] leading-tight">{item.name}</h3>
                          <p className="text-xs text-[#8C5E3C] font-mono tracking-widest uppercase mt-1">{item.variant}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-[#8C5E3C]/50 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>

                      {/* Quantity & Price Controls */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3 bg-[#FAF6F0] rounded-full px-3 py-1 border border-[#8C5E3C]/20">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-[#8C5E3C] hover:text-[#2C1810]">
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold text-[#2C1810] w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-[#8C5E3C] hover:text-[#2C1810]">
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-serif font-black text-[#2C1810]">₹{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Sticky Footer CTA */}
            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-[#8C5E3C]/20 shadow-[0_-10px_30px_rgba(44,24,16,0.05)]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[#8C5E3C] font-mono text-xs uppercase tracking-widest">Subtotal</span>
                  <span className="text-2xl font-serif font-black text-[#2C1810]">₹{subtotal.toFixed(2)}</span>
                </div>
                <Link href="/checkout" onClick={onClose} className="block w-full">
                  <button className="w-full py-4 bg-[#2C1810] text-[#FDFBF7] font-mono text-xs uppercase tracking-widest hover:bg-[#8C5E3C] transition-colors shadow-lg rounded-full">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}