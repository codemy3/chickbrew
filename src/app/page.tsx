'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import USPSection from '@/components/USPSection';
import ProcessSection from '@/components/ProcessSection';
import CoffeeTypesSection from '@/components/CoffeeTypesSection';
import Statement from '@/components/Statement';
import Footer from '@/components/Footer'; 
import { Mail, Phone, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

// Global Floating Elements for consistent brand atmosphere
function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[5%] opacity-[0.06] text-8xl"
        >🌿</motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[5%] opacity-[0.06] text-8xl"
        >☕</motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="home" className="overflow-x-hidden bg-[#FDFBF7]">
      <FloatingElements />

      <Hero />
      
      <section id="story" className="scroll-mt-28">
        <Statement />
      </section>

      <section id="products" className="scroll-mt-28">
        <Products />
      </section>

      <section className="scroll-mt-28">
        <USPSection />
      </section>

      <section id="journey" className="scroll-mt-28">
        <ProcessSection />
      </section>

      <section id="types" className="scroll-mt-28">
        <CoffeeTypesSection />
      </section>

      {/* Apothecary Contact & Checkout Section */}
      <section id="contact" className="relative scroll-mt-28 py-32 px-6 bg-[#FDFBF7] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-[#8C5E3C]/20 bg-white/40 p-10 md:p-16 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#8C5E3C] mb-6 block">Correspondence</span>
              <h2 className="text-4xl md:text-5xl font-serif font-black text-[#2C1810] mb-8 leading-tight">
                Send a note to <br/>chikbrew.
              </h2>
              <p className="text-[#6F4E37] leading-relaxed mb-10 font-light italic">
                Whether you seek a bespoke roast or require assistance with your order, our master roasters are at your service.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:chikbrew.in@gmail.com" className="flex items-center gap-4 text-[#2C1810] hover:text-[#8C5E3C] transition-colors border-b border-[#8C5E3C]/10 pb-4">
                <Mail size={20} className="text-[#8C5E3C]" />
                <span className="font-mono text-sm tracking-widest uppercase">chikbrew.in@gmail.com</span>
              </a>
              <a href="tel:6362194698" className="flex items-center gap-4 text-[#2C1810] hover:text-[#8C5E3C] transition-colors border-b border-[#8C5E3C]/10 pb-4">
                <Phone size={20} className="text-[#8C5E3C]" />
                <span className="font-mono text-sm tracking-widest uppercase">6362194698</span>
              </a>
              <div className="flex items-center gap-4 text-[#8C5E3C] pt-2">
                <Clock size={20} />
                <span className="text-sm font-light">Available: Mon-Sat, 9am - 6pm</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#2C1810] p-10 md:p-16 flex flex-col justify-center text-[#FDFBF7] shadow-[0_20px_50px_rgba(44,24,16,0.2)]"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-6 block">Order Manifest</span>
            <h3 className="text-3xl font-serif font-black mb-6">Ready to procure?</h3>
            <p className="text-[#D4B895]/80 leading-relaxed mb-10 font-light">
              Your selection awaits. Complete your order via our secure manifest and receive your beans freshly roasted.
            </p>
            
            <Link href="/checkout" className="bg-[#D4AF37] text-[#2C1810] py-5 px-8 font-black uppercase tracking-widest text-xs text-center hover:bg-[#FDFBF7] transition-colors">
              Proceed to Checkout
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}