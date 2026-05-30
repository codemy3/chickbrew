'use client';

import Image from 'next/image';
import { useCart } from '@/context/useCart';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CartDrawer from './CartDrawer'; // IMPORT YOUR NEW DRAWER

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Controls the drawer
  const { getItemCount, getCartTotal } = useCart();
  
  const itemCount = getItemCount();
  const subtotal = getCartTotal();

  const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'Shop', href: '/#products' },
    { label: 'Story', href: '/#story' },
    { label: 'Journey', href: '/#journey' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-lg border-b border-[#8C5E3C]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <motion.div whileHover={{ rotate: 10 }}>
                <Image src="/images/logo.png" alt="Chick Brew" width={44} height={44} className="rounded-full" />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-serif font-black text-[#2C1810] leading-none">Chick Brew</h1>
                <p className="text-[10px] font-mono tracking-widest uppercase text-[#8C5E3C]">Premium Coffee</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-mono tracking-widest uppercase text-[#2C1810] hover:text-[#8C5E3C] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Cart & Mobile Menu Toggle */}
            <div className="flex gap-4 items-center">
              
              {/* Trigger the Drawer Instead of a page navigation */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-full hover:bg-[#8C5E3C]/10 transition-colors group"
              >
                <ShoppingBag size={22} className="text-[#2C1810] group-hover:text-[#8C5E3C] transition-colors" strokeWidth={1.5} />
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#2C1810] text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-sm"
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-[#2C1810]" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* The Slide-Out Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-20 left-0 w-full bg-[#FDFBF7] border-b border-[#8C5E3C]/20 shadow-xl z-40 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl text-[#2C1810] py-2 border-b border-[#8C5E3C]/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE STICKY BUY BAR (Only shows on phones if cart has items) */}
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="md:hidden fixed bottom-4 left-4 right-4 z-40"
          >
            <button 
              onClick={() => setIsCartOpen(true)}
              className="w-full bg-[#2C1810] text-[#FDFBF7] p-4 rounded-full shadow-2xl flex items-center justify-between border border-white/10"
            >
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37]">{itemCount} items in cart</span>
                <span className="font-serif font-black text-lg">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
                Checkout <ArrowRight size={14} />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}