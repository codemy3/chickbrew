'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function FloatingActionButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-4">
      
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/6362194698" 
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-transparent flex items-center justify-center p-0"
      >
        <Image src="/images/whatsapp.png" alt="WhatsApp" width={64} height={64} className="object-contain" />
      </motion.a>

      {/* Cart/Checkout Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href="/checkout" className="w-14 h-14 bg-[#2C1810] rounded-full flex items-center justify-center shadow-lg shadow-[#2C1810]/30 text-[#D4AF37]">
          <ShoppingBag size={24} />
        </Link>
      </motion.div>
    </div>
  );
}