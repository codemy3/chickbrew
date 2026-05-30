'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="relative bg-[#2C1810] text-[#FDFBF7] pt-24 pb-12 overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Chick Brew" width={48} height={48} className="rounded-full" />
              <h3 className="font-serif text-2xl font-black text-[#D4AF37]">Chick Brew</h3>
            </div>
            <p className="text-sm font-light text-[#D4B895]/80 leading-relaxed">
              Sourcing the finest beans from sustainable farms, bringing the art of the harvest directly to your cup.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-8">Navigation</h4>
            <nav className="space-y-4">
              {['Home', 'Shop', 'Story', 'Journey', 'Contact'].map((item) => (
                <Link key={item} href={`/#${item.toLowerCase()}`} className="block text-sm hover:text-[#D4AF37] transition-colors text-[#FDFBF7]/70">
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-8">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:gowdapartha61@gmail.com" className="flex items-center gap-3 text-sm hover:text-[#D4AF37] transition-colors text-[#FDFBF7]/70">
                <Mail size={16} /> gowdapartha61@gmail.com
              </a>
              <a href="tel:6362194698" className="flex items-center gap-3 text-sm hover:text-[#D4AF37] transition-colors text-[#FDFBF7]/70">
                <Phone size={16} /> 6362194698
              </a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-8">Newsletter</h4>
            <p className="text-sm text-[#FDFBF7]/70 mb-4 font-light">Join the archives for exclusive roast drops.</p>
            <div className="relative border-b border-[#8C5E3C] focus-within:border-[#D4AF37] transition-colors">
              <input type="email" placeholder="Your email..." className="w-full bg-transparent py-2 text-sm focus:outline-none placeholder-[#8C5E3C]" />
              <button className="absolute right-0 top-2 text-[#D4AF37] hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="border-t border-[#8C5E3C]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C5E3C]">
          <p>© {new Date().getFullYear()} Chick Brew. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-[#D4AF37]">Privacy</Link>
            <Link href="/terms" className="hover:text-[#D4AF37]">Terms</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}