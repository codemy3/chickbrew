'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Leaf, Droplets, Sun, X } from 'lucide-react';

const COFFEE_BOTANICALS = [
  {
    id: '01',
    name: 'Arabica',
    botanicalName: 'Coffea arabica var. Typica',
    description: 'A delicate, complex profile yielding a crisp acidity and a smooth, aromatic finish.',
    taste: 'Floral • Citrus • Honey',
    roast: 'Light Roast',
    origin: 'Ethiopian Highlands',
    caffeine: 'Moderate',
    bestFor: 'Pour-over, Filter',
    priceRange: '250g: ₹240\n500g: ₹450',
    image: '/images/arabica.png', 
    accentColor: '#8C5E3C',
    BackgroundIcon: Leaf,
    details: [
      'Cultivated at high altitudes (1,200m+)',
      'Accounts for 60-70% of global production',
      'Requires delicate, climate-controlled roasting',
      'Yields a highly nuanced, non-bitter cup'
    ]
  },
  {
    id: '02',
    name: 'Custom Roast',
    botanicalName: 'Roast profile on request',
    description: 'A tailored roast built around the customer\'s preference, with blend, roast, and batch size adjusted per requirement.',
    taste: 'Varies by requirement',
    roast: 'Custom Roast',
    origin: 'Made to Order',
    caffeine: 'Varies',
    bestFor: 'Customer specified',
    priceRange: 'Depends on customer requirement',
    image: '/images/custom.png', 
    accentColor: '#6F4E37',
    BackgroundIcon: Droplets,
    details: [
      'Roast profile and blend tuned to the brief',
      'Batch size aligned to the customer requirement',
      'Ideal for bespoke taste, strength, and finish',
      'Quoted after confirming the order spec'
    ]
  },
  {
    id: '03',
    name: 'Robusta',
    botanicalName: 'Coffea canephora',
    description: 'An unapologetically bold and earthy profile with double the caffeine and a thick, rich crema.',
    taste: 'Earthy • Roasted Spice • Wood',
    roast: 'Dark Roast',
    origin: 'Vietnam Lowlands',
    caffeine: 'Very High',
    bestFor: 'Espresso, Iced Coffee',
    priceRange: '250g: ₹220\n500g: ₹400',
    image: '/images/robusta.png', 
    accentColor: '#2C1810',
    BackgroundIcon: Sun,
    details: [
      'Grown in resilient, lower altitude climates',
      'Contains 2x the caffeine of standard Arabica',
      'Naturally disease-resistant and hardy',
      'Delivers an intense, punchy flavor profile'
    ]
  },
];

export default function BotanicalCoffeeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  const [selectedCoffee, setSelectedCoffee] = useState<typeof COFFEE_BOTANICALS[0] | null>(null);

  useEffect(() => {
    if (selectedCoffee) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedCoffee]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-32 px-6 lg:px-12 bg-[#FDFBF7] text-[#2C1810] shrink-0 z-10"
    >
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#8C5E3C] mb-4 block">
            Vol. I — The Archives
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-[#2C1810] mb-6">
            Botanical <span className="italic font-light">Profiles</span>
          </h2>
          <div className="w-16 h-px bg-[#2C1810] mx-auto" />
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          {COFFEE_BOTANICALS.map((coffee, index) => (
            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group h-full"
            >
              <div className="p-2 border border-[#8C5E3C]/20 bg-[#FDFBF7] h-full transition-colors duration-500 group-hover:border-[#8C5E3C]/40">
                <div className="relative border border-[#8C5E3C]/10 h-full p-8 flex flex-col items-center text-center overflow-hidden bg-white/50">
                  
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.05] group-hover:scale-110 transition-all duration-1000 pointer-events-none z-0">
                    <coffee.BackgroundIcon size={320} strokeWidth={0.5} />
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 mb-10 relative z-10 w-full">
                    <span className="border border-[#8C5E3C]/40 rounded-[100%] px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-[#8C5E3C]">
                      {coffee.roast}
                    </span>
                    <span className="border border-[#8C5E3C]/40 rounded-[100%] px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-[#8C5E3C]">
                      {coffee.origin}
                    </span>
                  </div>

                  {/* FIX: Increased max-w to 280px and adjusted aspect ratio so the jars are much larger! */}
                  <motion.div 
                    className="relative w-full max-w-[220px] md:max-w-[280px] aspect-[4/5] mb-8 z-10"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image src={coffee.image} alt={coffee.name} fill className="object-contain drop-shadow-xl" />
                  </motion.div>

                  <div className="w-full h-px border-t border-dashed border-[#8C5E3C]/30 mb-8 relative z-10" />

                  <div className="relative z-10 flex flex-col flex-1 w-full items-center">
                    <span className="font-serif italic text-sm text-[#8C5E3C] mb-2">{coffee.botanicalName}</span>
                    <h3 className="text-3xl font-serif font-black text-[#2C1810] mb-4">{coffee.name}</h3>
                    
                    <p className="text-sm text-[#6F4E37] leading-relaxed mb-8 flex-1">
                      {coffee.description}
                    </p>

                    <button 
                      onClick={() => setSelectedCoffee(coffee)}
                      className="w-full py-4 border border-[#2C1810] text-[#2C1810] font-mono text-xs uppercase tracking-widest hover:bg-[#2C1810] hover:text-[#FDFBF7] transition-colors"
                    >
                      Examine Record
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === THE MODAL OVERLAY === */}
      <AnimatePresence>
        {selectedCoffee && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCoffee(null)}
              className="absolute inset-0 bg-[#1A0F0A]/60 backdrop-blur-sm cursor-pointer"
            />

            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-[#FDFBF7] border border-[#8C5E3C]/30 shadow-2xl p-2 z-10 overflow-hidden"
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="relative border border-[#8C5E3C]/10 bg-white/50 p-6 md:p-12 flex flex-col md:flex-row gap-10 max-h-[90vh] overflow-y-auto">
                
                <button 
                  onClick={() => setSelectedCoffee(null)}
                  className="absolute top-4 right-4 md:top-8 md:right-8 text-[#8C5E3C] hover:text-[#2C1810] transition-colors z-20"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>

                {/* Left Side: Image & Core Info */}
                <div className="w-full md:w-5/12 flex flex-col items-center text-center">
                  
                  {/* FIX: Increased modal image size to match the new larger card jars */}
                  <div className="relative w-full max-w-[280px] aspect-[4/5] mb-8">
                    <Image src={selectedCoffee.image} alt={selectedCoffee.name} fill className="object-contain drop-shadow-2xl" />
                  </div>
                  
                  <span className="font-serif italic text-[#8C5E3C] mb-2">{selectedCoffee.botanicalName}</span>
                  <h3 className="text-4xl font-serif font-black text-[#2C1810] mb-4">{selectedCoffee.name}</h3>
                  <div className="bg-[#FAF6F0] border border-[#8C5E3C]/10 py-2 px-4 w-full mb-6">
                    <p className="font-mono text-xs tracking-widest text-[#6F4E37] uppercase">{selectedCoffee.taste}</p>
                  </div>
                  <button className="w-full py-4 bg-[#2C1810] text-[#FDFBF7] font-mono text-xs uppercase tracking-widest hover:bg-[#8C5E3C] transition-colors shadow-lg">
                    Procure Batch
                  </button>
                </div>

                {/* Right Side: The Apothecary Ledger */}
                <div className="w-full md:w-7/12 flex flex-col justify-center">
                  <div className="w-12 h-px bg-[#8C5E3C]/30 mb-8" />
                  
                  <p className="text-base text-[#6F4E37] leading-relaxed mb-10">
                    {selectedCoffee.description}
                  </p>

                  <div className="grid grid-cols-2 gap-y-8 gap-x-6 mb-10">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#8C5E3C]/70 mb-2 border-b border-[#8C5E3C]/20 pb-1">Caffeine Level</p>
                      <p className="font-serif text-lg text-[#2C1810]">{selectedCoffee.caffeine}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#8C5E3C]/70 mb-2 border-b border-[#8C5E3C]/20 pb-1">Best Prepared As</p>
                      <p className="font-serif text-lg text-[#2C1810]">{selectedCoffee.bestFor}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#8C5E3C]/70 mb-2 border-b border-[#8C5E3C]/20 pb-1">Market Value Ledger</p>
                      <p className="font-serif text-lg text-[#2C1810] whitespace-pre-line">{selectedCoffee.priceRange}</p>
                    </div>
                  </div>

                  <div className="bg-[#FAF6F0] p-6 border border-[#8C5E3C]/10">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#8C5E3C] mb-4">Botanical Field Notes</p>
                    <ul className="space-y-3">
                      {selectedCoffee.details.map((detail, i) => (
                        <li key={i} className="text-sm text-[#6F4E37] flex items-start gap-3 leading-relaxed">
                          <span className="text-[#8C5E3C] mt-1 text-[10px]">◆</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}