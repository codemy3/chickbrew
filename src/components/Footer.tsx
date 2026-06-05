'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      ),
      href: 'https://www.instagram.com/chikbrew?igsh=MTRlYXBqemRrbTlnMw==',
      label: 'Instagram',
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      href: 'tel:6362194698',
      label: 'Message',
    },
  ];

  // Animation Variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <footer className="bg-[#2C1810] text-[#FDFBF7] overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Column */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/images/logo.png" alt="chikbrew" width={44} height={44} className="rounded-full" />
              <div>
                <h3 className="text-xl font-serif font-bold text-[#D4AF37] leading-none">chikbrew</h3>
                <p className="text-[10px] font-mono tracking-widest uppercase text-[#8C5E3C] mt-1">Premium Coffee</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#D4B895]/80 font-light">
              Premium coffee sourced directly from farms. Crafted with passion, delivered with excellence. Every cup tells a story.
            </p>
          </motion.div>

          {/* Links Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-6 text-[#D4AF37]">Quick Links</h4>
            <nav className="space-y-4">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm hover:text-[#D4AF37] transition-colors text-[#D4B895]/80 font-light w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-6 text-[#D4AF37]">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:chikbrew.in@gmail.com" className="flex items-center gap-3 text-sm hover:text-[#D4AF37] transition-colors text-[#D4B895]/80 font-light group w-fit">
                <Mail className="w-4 h-4 text-[#8C5E3C] group-hover:text-[#D4AF37] transition-colors" />
                chikbrew.in@gmail.com
              </a>
              <a href="tel:6362194698" className="flex items-center gap-3 text-sm hover:text-[#D4AF37] transition-colors text-[#D4B895]/80 font-light group w-fit">
                <Phone className="w-4 h-4 text-[#8C5E3C] group-hover:text-[#D4AF37] transition-colors" />
                6362194698
              </a>
            </div>
          </motion.div>

        </div>

        {/* Animated Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="h-px bg-[#8C5E3C]/30 my-8 origin-left"
        />

        {/* Bottom Section */}
        <motion.div variants={itemVariants} className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#8C5E3C] font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} chikbrew.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -3, backgroundColor: 'rgba(140,94,60,0.2)' }}
                className="p-3 rounded-full text-[#8C5E3C] hover:text-[#D4AF37] transition-colors"
              >
                {icon}
              </motion.a>
            ))}
          </div>

          <div className="flex gap-6 text-xs text-[#8C5E3C] font-mono uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}