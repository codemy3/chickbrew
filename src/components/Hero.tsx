'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowRight, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SLIDES = [
  { 
    src: '/hero/arabica.png', 
    bgColor: '#FAF6F0', 
    textColor: '#2C1810', 
    outlineColor: 'rgba(44, 24, 16, 0.08)' 
  },
  { 
    src: '/hero/robusta.png', 
    bgColor: '#1A1A1A', 
    textColor: '#FFFFFF', 
    outlineColor: 'rgba(255, 255, 255, 0.08)'
  },
  { 
    src: '/hero/custom.png', 
    bgColor: '#E6D5C3', 
    textColor: '#2C1810',
    outlineColor: 'rgba(44, 24, 16, 0.08)'
  }
];

const N = SLIDES.length;

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // FIX 1: useLayoutEffect is critical for GSAP in React to prevent initial flash
  useLayoutEffect(() => {
    const container = containerRef.current;
    const bgElement = bgRef.current;
    if (!container || !bgElement) return;

    // FIX 2: gsap.context() guarantees perfect cleanup in React 18
    let ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const scrollDistance = (N - 1) * (isMobile ? 800 : 1200);

      // Initial setup
      gsap.set(".slide-item", { opacity: 0, scale: 0.8, y: 150, rotationZ: -5 });
      gsap.set(".slide-item-0", { opacity: 1, scale: 1, y: 0, rotationZ: 0 });
      
      bgElement.style.setProperty('--theme-bg', SLIDES[0].bgColor);
      bgElement.style.setProperty('--theme-text', SLIDES[0].textColor);
      bgElement.style.setProperty('--theme-outline', SLIDES[0].outlineColor);

      ScrollTrigger.create({
        trigger: container,
        start: `top top`, 
        end: `+=${scrollDistance}`,
        pin: true,
        pinSpacing: true,
        scrub: 1, // Increased scrub slightly for more "weight" and premium feel
        onUpdate: (self) => {
          const progress = self.progress * (N - 1);
          
          // Determine which slide is mathematically "active" based on scroll position
          const newIndex = Math.min(Math.round(progress), N - 1);
          if (newIndex !== activeIndex) {
             setActiveIndex(newIndex); // Update React state for standard elements if needed
          }

          // FIX 3: Buttery smooth color transitioning tied to exact scroll progress
          gsap.to(bgElement, {
            '--theme-bg': SLIDES[newIndex].bgColor,
            '--theme-text': SLIDES[newIndex].textColor,
            '--theme-outline': SLIDES[newIndex].outlineColor,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto"
          });

          // 3D Parallax Scrolling for the Coffee Bags
          SLIDES.forEach((_, i) => {
            const slideEl = container.querySelector(`.slide-item-${i}`);
            if (!slideEl) return;

            const diff = i - progress;
            let y = 0, opacity = 0, scale = 1, rotate = 0;

            if (diff < 0) {
              // Scrolling past: Item goes UP and fades
              y = diff * (isMobile ? 150 : 250); 
              opacity = 1 - Math.abs(diff) * 2;
              scale = 1 + Math.abs(diff) * 0.05;
              rotate = diff * 5;
            } else {
              // Scrolling toward: Item comes from BOTTOM
              opacity = 1 - Math.abs(diff);
              scale = 1 - Math.abs(diff) * 0.1;
              y = diff * (isMobile ? 150 : 250);
              rotate = diff * -5;
            }

            // Apply the calculated values instantly based on scroll position
            gsap.set(slideEl, {
              y, 
              scale,
              rotationZ: rotate,
              opacity: Math.max(opacity, 0),
            });
          });
        }
      });
    }, containerRef); // Scope GSAP to this specific component

    return () => ctx.revert(); // Flawless cleanup
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="hero-container w-full pb-[5vh] font-sans">
      <section 
        ref={bgRef} 
        className="hero-viewport w-full h-[100svh] overflow-hidden flex items-center relative rounded-b-[2rem] lg:rounded-b-[4rem] shadow-[0_20px_50px_rgba(44,24,16,0.1)] transition-colors duration-700"
        style={{ backgroundColor: 'var(--theme-bg)' }}
      >
        
        {/* === BACKGROUND ART === */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <svg className="absolute top-[10%] left-[5%] w-40 md:w-64 h-auto opacity-10 theme-svg transition-colors duration-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
             <path d="M50 90 C 20 90, 10 50, 50 10 C 90 50, 80 90, 50 90 Z" />
             <path d="M50 10 L 50 90" />
          </svg>
          <svg className="absolute bottom-[20%] right-[5%] w-60 md:w-80 h-auto opacity-10 theme-svg rotate-45 transition-colors duration-700" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
             <path d="M50 90 C 20 90, 10 50, 50 10 C 90 50, 80 90, 50 90 Z" />
             <path d="M50 10 L 50 90" />
          </svg>
          {/* Soft vignette gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.15)_100%)] mix-blend-overlay" />
        </div>

        {/* === REAL FLOATING COFFEE BEANS === */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <Image src="/images/real-bean-1.png" alt="" width={80} height={80} className="absolute top-[15%] left-[20%] blur-[3px] animate-float-slow opacity-80 w-12 md:w-20" />
          <Image src="/images/real-bean-2.png" alt="" width={60} height={60} className="absolute top-[70%] left-[10%] blur-[5px] animate-float-medium opacity-60 w-10 md:w-16" />
          <Image src="/images/real-bean-3.png" alt="" width={120} height={120} className="absolute top-[30%] right-[15%] animate-float-slow drop-shadow-2xl w-20 md:w-32" />
          <Image src="/images/real-bean-1.png" alt="" width={90} height={90} className="absolute top-[65%] right-[25%] animate-float-fast drop-shadow-xl w-16 md:w-24" />
        </div>

        {/* === MASSIVE OUTLINED BACKGROUND TEXT === */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-black whitespace-nowrap z-10 pointer-events-none transition-all duration-700"
          style={{ 
            fontSize: 'clamp(80px, 20vw, 350px)', // Safely scaled for mobile
            color: 'transparent',
            WebkitTextStroke: '2px var(--theme-outline)'
          }}
        >
          CHICK BREW
        </div>
        
        {/* === CENTERED TYPOGRAPHY === */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
          <h1 
            className="font-serif font-black text-center leading-[0.9] uppercase tracking-tighter transition-colors duration-700 w-full px-4"
            style={{ 
              fontSize: 'clamp(45px, 10vw, 130px)', // Perfect mobile scaling
              color: 'var(--theme-text)' 
            }}
          >
            PURE <br />
            <span className="italic font-light opacity-90 block my-2 md:my-0">ROASTED</span> 
            PERFECTION.
          </h1>
        </div>

        {/* === ZOOMED CENTER PRODUCT === */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <div className="relative w-full h-full perspective-[2000px] flex items-center justify-center md:pt-0">
            {SLIDES.map((s, i) => (
              <div key={i} className={`slide-item slide-item-${i} absolute flex items-center justify-center w-full max-w-[85vw] md:max-w-none`} style={{ zIndex: N - i }}>
                <div className="relative group">
                  <Image 
                    src={s.src} 
                    alt={`Coffee Pouch ${i + 1}`} 
                    width={800} 
                    height={1000} 
                    priority={i === 0} // Only prioritize the first image for LCP
                    className="w-auto h-[clamp(350px,65vh,800px)] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.3)]" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === ANCHORED CTA === */}
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-8">
          
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest mb-4 transition-colors duration-700 opacity-80" style={{ color: 'var(--theme-text)' }}>
              100% Natural from Garden
            </p>
            <Link href="/#products" className="group relative inline-flex items-center gap-4 px-8 py-5 bg-[#8C5E3C] text-white rounded-full font-mono text-xs uppercase tracking-widest font-bold overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(140,94,60,0.3)] hover:shadow-[0_15px_40px_rgba(140,94,60,0.4)] hover:bg-[#2C1810]">
              <span className="relative z-10 flex items-center gap-3">
                SHOP NOW <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

        </div>

        {/* === MOBILE CTA LAYOUT === */}
        <div className="absolute bottom-[5%] left-0 w-full z-40 md:hidden flex flex-col items-center gap-5">
          <Link href="/#products" className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#8C5E3C] text-white rounded-full font-mono text-xs font-bold tracking-widest shadow-xl">
            SHOP NOW <ArrowRight size={16} />
          </Link>
        </div>

      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .theme-svg { color: var(--theme-text); }
        @keyframes floatSlow { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-30px) rotate(15deg); } }
        @keyframes floatMedium { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-50px) rotate(-20deg); } }
        @keyframes floatFast { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(10deg); } }
        .animate-float-slow { animation: floatSlow 7s ease-in-out infinite; }
        .animate-float-medium { animation: floatMedium 5s ease-in-out infinite; }
        .animate-float-fast { animation: floatFast 4s ease-in-out infinite; }
      `}} />
    </div>
  );
}