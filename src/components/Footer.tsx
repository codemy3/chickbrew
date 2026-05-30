'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, Share2, Heart, MessageCircle, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Share2, href: '#', label: 'Share' },
    { icon: Heart, href: '#', label: 'Like' },
    { icon: MessageCircle, href: '#', label: 'Message' },
    { icon: Globe, href: '#', label: 'Website' },
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
              <Image src="/images/logo.png" alt="Chick Brew" width={44} height={44} className="rounded-full" />
              <div>
                <h3 className="text-xl font-serif font-bold text-[#D4AF37] leading-none">Chick Brew</h3>
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
              <a href="mailto:gowdapartha61@gmail.com" className="flex items-center gap-3 text-sm hover:text-[#D4AF37] transition-colors text-[#D4B895]/80 font-light group w-fit">
                <Mail className="w-4 h-4 text-[#8C5E3C] group-hover:text-[#D4AF37] transition-colors" />
                gowdapartha61@gmail.com
              </a>
              <a href="tel:6362194698" className="flex items-center gap-3 text-sm hover:text-[#D4AF37] transition-colors text-[#D4B895]/80 font-light group w-fit">
                <Phone className="w-4 h-4 text-[#8C5E3C] group-hover:text-[#D4AF37] transition-colors" />
                6362194698
              </a>
            </div>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div variants={itemVariants}>
            <h4 className="font-mono text-xs uppercase tracking-widest mb-6 text-[#D4AF37]">Newsletter</h4>
            <p className="text-sm mb-6 text-[#D4B895]/80 font-light">
              Subscribe for exclusive offers and botanical coffee notes.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3 relative">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-none border-b border-[#8C5E3C]/50 bg-transparent text-[#FDFBF7] placeholder-[#8C5E3C] focus:outline-none focus:border-[#D4AF37] text-sm font-light transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-[#2C1810] px-4 py-3 font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#FDFBF7] transition-colors mt-4"
              >
                {subscribed ? '✓ Subscribed' : 'Join the Archives'}
              </button>
            </form>
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
            © {new Date().getFullYear()} Chick Brew.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -3, backgroundColor: 'rgba(140,94,60,0.2)' }}
                className="p-3 rounded-full text-[#8C5E3C] hover:text-[#D4AF37] transition-colors"
              >
                <Icon className="w-4 h-4" />
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