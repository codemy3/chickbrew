'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatItem {
  number: string;
  label: string;
  icon: string;
}

const stats: StatItem[] = [
  { number: '50+', label: 'Coffee Farms', icon: '🌱' },
  { number: '10K+', label: 'Happy Customers', icon: '😊' },
  { number: '100+', label: 'Coffee Varieties', icon: '☕' },
  { number: '5+', label: 'Years of Expertise', icon: '🏆' },
];

function AnimatedCounter({ from = 0, to = 100, duration = 2.5 }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const increment = (to - from) / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [from, to, duration]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1A0F0A]/50 to-[#0A0A0A] z-0" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#D4A574]/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#8B4513]/5 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            By The Numbers
          </h2>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto rounded-full" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={
                isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative z-10 text-center p-8 rounded-2xl bg-gradient-to-br from-[#1A0F0A] to-[#110A08] border border-[#8B4513]/20 hover:border-[#D4A574]/40 transition-all duration-500 backdrop-blur-sm">
                {/* Icon with rotation animation on hover */}
                <motion.div
                  className="text-6xl mb-4 inline-block"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Animated number */}
                <div className="text-5xl md:text-6xl font-serif font-bold text-[#D4A574] mb-2">
                  {isInView && <AnimatedCounter to={parseInt(stat.number)} duration={2.5} />}
                  {stat.number.replace(/\d+/g, '')}
                </div>

                {/* Label */}
                <p className="text-[#D4B895] text-sm md:text-base font-light tracking-wide uppercase">
                  {stat.label}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4A574]/0 to-[#8B4513]/0 group-hover:from-[#D4A574]/10 group-hover:to-[#8B4513]/5 transition-all duration-500 z-0" />
              </div>

              {/* Background shine effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
