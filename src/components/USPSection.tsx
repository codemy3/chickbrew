'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhyChooseUs() {
  const features = [
    {
      image: "/images/sustainable.png", 
      title: "Sustainably Sourced",
      description: "We partner exclusively with farmers who utilize ethical, generation-spanning sustainable practices."
    },
    {
      image: "/images/roasted.png", 
      title: "Artisanal Roasting",
      description: "Each botanical profile is roasted in precision small batches to ensure absolute maximum flavor integrity."
    },
    {
      image: "/images/crafted.png", 
      title: "Expertly Crafted",
      description: "Every blend is a curated equilibrium designed to highlight the purest natural qualities of the bean."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#FDFBF7] overflow-hidden">
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#8C5E3C] mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#2C1810] mb-6">
            The chikbrew <span className="italic font-light">Standard</span>
          </h2>
          <div className="w-16 h-px bg-[#2C1810] mx-auto" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="group h-full">
              
              {/* Apothecary Card Styling (Matches Coffee Types) */}
              <div className="p-2 border border-[#8C5E3C]/20 bg-[#FDFBF7] h-full transition-colors duration-500 group-hover:border-[#8C5E3C]/40">
                <div className="relative border border-[#8C5E3C]/10 h-full p-8 md:p-12 flex flex-col items-center text-center bg-white/50">
                  
                  {/* Floating Icon Animation */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-20 h-20 relative mb-8"
                  >
                    <Image src={feature.image} alt={feature.title} fill className="object-contain drop-shadow-md" />
                  </motion.div>

                  <div className="w-12 h-px border-t border-dashed border-[#8C5E3C]/40 mb-6" />

                  <h3 className="text-2xl font-serif font-black text-[#2C1810] mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#6F4E37] leading-relaxed">
                    {feature.description}
                  </p>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}