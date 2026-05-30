'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const STEPS = [
  { id: 1, title: 'Plant & Grow', image: '/images/01.png', side: 'left' },
  { id: 2, title: 'Harvest', image: '/images/02.png', side: 'right' },
  { id: 3, title: 'Processing', image: '/images/03.png', side: 'left' },
  { id: 4, title: 'Drying', image: '/images/04.png', side: 'right' },
  { id: 5, title: 'Milling', image: '/images/05.png', side: 'left' },
  { id: 6, title: 'Roasting', image: '/images/06.png', side: 'right' },
];

export default function CoffeeJourneySection() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FAF7F2] py-24 px-4 md:px-8 overflow-hidden font-serif"
    >
      {/* ==========================================
          === 🌟 CREATIVE AMBIENT BACKGROUND LAYER === 
          ========================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 1. Subtle Paper/Canvas Noise */}
        <div 
          className="absolute inset-0 opacity-[0.04] mix-blend-multiply z-10"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }}
        />

        {/* 2. Organic Morphing Liquid Blobs (Latte Art Vibes) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["40% 60% 70% 30%", "60% 40% 30% 70%", "40% 60% 70% 30%"]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#E8D8C8] to-[#DBC2A4] blur-[100px] opacity-60" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            rotate: [360, 270, 180, 90, 0],
            x: [0, 100, 0],
            borderRadius: ["60% 40% 30% 70%", "40% 60% 70% 30%", "60% 40% 30% 70%"]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[-15%] w-[700px] h-[700px] bg-gradient-to-tr from-[#D4B5A0] to-[#E8D8C8] blur-[120px] opacity-40" 
        />
        <motion.div 
          animate={{ y: [0, -50, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-[#C9A584] rounded-full blur-[140px]" 
        />

        {/* 3. Rising Steam / Light Rays */}
        <motion.div 
          animate={{ y: ['100%', '-100%'], opacity: [0, 0.3, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute left-[30%] w-[100px] h-[800px] bg-gradient-to-t from-transparent via-[#FFF9F2] to-transparent blur-3xl transform rotate-12"
        />
        <motion.div 
          animate={{ y: ['100%', '-100%'], opacity: [0, 0.2, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-[25%] w-[150px] h-[1000px] bg-gradient-to-t from-transparent via-[#FFF9F2] to-transparent blur-3xl transform -rotate-12"
        />
        
        {/* 4. Ambiance Beans - Added more line art beans around */}
        <motion.div 
          animate={{ y: [10, -10, 10], rotate: [0, 20, 0], scale: [1, 1.1, 1]}}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut"}}
          className="absolute top-[10%] left-[15%] w-16 h-16 pointer-events-none opacity-[0.03]"
        >
          <Image src="/images/line-art-bean.png" alt="Bean Decoration" fill className="object-contain" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [-15, 15, -15], rotate: [0, -15, 0]}}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1}}
          className="absolute top-[60%] right-[10%] w-24 h-24 pointer-events-none opacity-[0.02]"
        >
          <Image src="/images/line-art-bean.png" alt="Bean Decoration" fill className="object-contain" />
        </motion.div>
        
        <motion.div 
          animate={{ x: [10, -10, 10], rotate: [0, 10, 0]}}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2}}
          className="absolute bottom-[20%] right-[20%] w-20 h-20 pointer-events-none opacity-[0.03]"
        >
          <Image src="/images/line-art-bean.png" alt="Bean Decoration" fill className="object-contain" />
        </motion.div>

      </div>

      {/* ==========================================
          === YOUR 3 CUSTOM UPLOADED IMAGES ======== 
          ========================================== */}
      
      {/* 1. Floating Cup (Top Right) - MADE BIGGER */}
      <motion.div 
        animate={{ y: [-15, 15, -15], rotate: [-4, 4, -4] }}
        transition={{ duration: 6, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[8%] right-[5%] w-40 h-40 md:w-56 md:h-56 pointer-events-none z-10 opacity-60"
      >
        <Image src="/images/cup.png" alt="Floating Coffee Cup" fill className="object-contain" />
      </motion.div>

      {/* 2. Floating Single Bean (Middle Left) */}
      <motion.div 
        animate={{ y: [-15, 15, -15], rotate: [10, -10, 10] }}
        transition={{ duration: 8, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[45%] left-[8%] w-20 h-20 pointer-events-none z-10 opacity-70"
      >
        <Image src="/images/line-art-bean.png" alt="Coffee Bean" fill className="object-contain" />
      </motion.div>

      {/* 3. Bunch of Beans (Bottom Left) - MADE BIGGER, UPDATED TO .jpg */}
      <motion.div 
        animate={{ y: [12, -12, 12], rotate: [-3, 3, -3] }}
        transition={{ duration: 7, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[5%] left-[2%] w-72 h-72 md:w-96 md:h-96 pointer-events-none z-10 opacity-70 mix-blend-multiply"
      >
        <Image src="/images/bunch-bean.png" alt="Bunch of Beans" fill className="object-contain" />
      </motion.div>
      {/* ========================================== */}

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* === HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-32 relative"
        >
          {/* Top Cup removed from here */}
          
          <h1 className="text-5xl md:text-7xl font-black text-[#3A2618] leading-tight mb-2 tracking-tight">
            COFFEE BEAN
          </h1>
          <h2 className="text-5xl md:text-7xl font-black text-[#3A2618] leading-tight tracking-tight">
            JOURNEY
          </h2>
        </motion.div>

        {/* === VERTICAL TIMELINE === */}
        <div className="relative w-full flex flex-col items-center">
          {STEPS.map((step, index) => {
            const isLast = index === STEPS.length - 1;
            const curvesRight = index % 2 === 0;
            
            const floatDuration = 4 + (index % 3); 
            const floatDelay = index * 0.5;

            return (
              <div 
                key={step.id} 
                className="relative flex items-center w-full min-h-[220px] md:min-h-[280px]"
              >
                
                {/* === FIXED LOOPING ARROW CONNECTOR === */}
                {!isLast && (
                  <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[220px] md:w-[350px] h-[150px] md:h-[200px] pointer-events-none z-0">
                    <svg
                      viewBox="0 0 400 200"
                      className="w-full h-full overflow-visible opacity-50 drop-shadow-sm"
                    >
                      <defs>
                        <marker id={`arrowhead-${index}`} markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
                          <path d="M 1 1 L 6 4 L 1 7" fill="none" stroke="#A37E65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </marker>
                      </defs>

                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true, margin: "-10%" }}
                        d={
                          curvesRight
                            ? "M 50 0 C 250 0, 300 80, 200 120 C 100 160, 100 40, 200 60 C 300 80, 300 150, 350 200"
                            : "M 350 0 C 150 0, 100 80, 200 120 C 300 160, 300 40, 200 60 C 100 80, 100 150, 50 200"
                        }
                        fill="none"
                        stroke="#A37E65"
                        strokeWidth="3.5"
                        strokeDasharray="8 12" 
                        strokeLinecap="round"
                        markerEnd={`url(#arrowhead-${index})`}
                      />
                    </svg>
                  </div>
                )}

                {/* LEFT SIDE - Image */}
                <div className="w-5/12 flex justify-center md:justify-end pr-4 md:pr-16 z-10">
                  {step.side === 'left' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-10%" }}
                    >
                      <motion.div
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative w-32 h-32 md:w-64 md:h-64 hover:scale-110 hover:rotate-3 transition-all duration-700 cursor-pointer"
                      >
                        <Image src={step.image} alt={step.title} fill className="object-contain drop-shadow-2xl"/>
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* CENTER - Text Node */}
                <div className="w-2/12 flex justify-center z-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="bg-[#FAF7F2]/90 backdrop-blur-xl px-6 py-4 md:px-8 md:py-5 rounded-full border border-[#D4B5A0]/60 shadow-[0_8px_32px_rgb(140,94,60,0.1)] relative group cursor-default"
                  >
                    <div className="absolute inset-0 bg-[#D4B5A0]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h3 className="text-sm md:text-xl font-bold text-[#4A3222] text-center uppercase tracking-[0.25em] whitespace-nowrap relative z-10">
                      {step.title}
                    </h3>
                  </motion.div>
                </div>

                {/* RIGHT SIDE - Image */}
                <div className="w-5/12 flex justify-center md:justify-start pl-4 md:pl-16 z-10">
                  {step.side === 'right' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-10%" }}
                    >
                      <motion.div
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative w-32 h-32 md:w-64 md:h-64 hover:scale-110 hover:-rotate-3 transition-all duration-700 cursor-pointer"
                      >
                        <Image src={step.image} alt={step.title} fill className="object-contain drop-shadow-2xl"/>
                      </motion.div>
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* === FOOTER === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center pt-24 border-t border-[#D4B5A0]/40 relative"
        >
          <p className="text-xs md:text-sm font-semibold text-[#8C5E3C] mb-8 tracking-[0.4em] uppercase">
            Silk Road Coffee Co.
          </p>
          <Link href="/#products" className="relative group inline-block px-12 py-5 bg-transparent overflow-hidden rounded-full border border-[#3A2618]">
            <div className="absolute inset-0 w-full h-full bg-[#3A2618] transition-transform duration-500 ease-[0.16,1,0.3,1] origin-bottom scale-y-100 group-hover:scale-y-0"></div>
            <span className="relative z-10 text-[#FAF7F2] group-hover:text-[#3A2618] text-xs uppercase tracking-[0.3em] font-bold transition-colors duration-500">
              Shop The Collection
            </span>
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}