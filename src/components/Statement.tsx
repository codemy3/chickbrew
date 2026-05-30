'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function StatementSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  // The brand statement split into words
  const statement = "We believe in capturing the essence of the farm in every roast. Our coffee is crafted with passion and the finest high-altitude beans.";
  const words = statement.split(" ");

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // gsap.context() guarantees flawless cleanup in React and prevents jitter
    let ctx = gsap.context(() => {
      
      // 1. CINEMATIC TEXT REVEAL
      // Words slide up from out-of-bounds, unblurring and snapping into place
      gsap.fromTo(".word-inner", 
        { 
          y: "120%", 
          rotateX: -40, 
          opacity: 0, 
          filter: "blur(10px)" 
        },
        {
          y: "0%",
          rotateX: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.05, // Rapid fire reveal
          ease: "power4.out",
          scrollTrigger: {
            trigger: container,
            start: "top 65%", // Triggers when section is 35% visible
            toggleActions: "play none none reverse"
          }
        }
      );

      // 2. PARALLAX BEAN SCROLLING
      // Beans move at different speeds based on scroll, creating massive 3D depth
      const beans = gsap.utils.toArray('.parallax-bean');
      beans.forEach((bean: any) => {
        const speed = parseFloat(bean.getAttribute('data-speed') || '1');
        gsap.to(bean, {
          y: -150 * speed, // Moves UP as you scroll DOWN
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1, // Smoothly ties the movement to the scroll wheel
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100svh] w-full bg-[#FDFBF7] flex flex-col items-center justify-center py-32 px-6 overflow-hidden z-0 shrink-0"
    >
      {/* === VINTAGE PAPER TEXTURE === */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply z-0" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* === PARALLAX FLOATING BEANS === */}
      {/* data-speed determines how fast they move when the user scrolls */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Image src="/images/real-bean-1.png" alt="" width={60} height={60} data-speed="1.5" className="parallax-bean absolute top-[15%] left-[10%] md:left-[15%] blur-[2px] animate-float-slow opacity-70" />
        <Image src="/images/real-bean-2.png" alt="" width={40} height={40} data-speed="0.8" className="parallax-bean absolute bottom-[25%] left-[5%] md:left-[10%] blur-[4px] animate-float-medium opacity-50" />
        <Image src="/images/real-bean-3.png" alt="" width={90} height={90} data-speed="2.2" className="parallax-bean absolute top-[25%] right-[5%] md:right-[12%] animate-float-slow drop-shadow-xl opacity-90" />
        <Image src="/images/real-bean-1.png" alt="" width={50} height={50} data-speed="1.1" className="parallax-bean absolute bottom-[15%] right-[15%] md:right-[20%] blur-[1px] animate-float-fast opacity-60" />
      </div>

      {/* === MAIN TYPOGRAPHY STATEMENT === */}
      <div className="relative z-20 max-w-[1200px] mx-auto text-center px-4">
        {/* Subtle decorative pre-header */}
        <div className="overflow-hidden mb-8">
          <p className="word-inner text-xs md:text-sm font-mono font-bold text-[#8C5E3C] uppercase tracking-[0.4em]">
            The Botanical Archive
          </p>
        </div>

        <h2 
          ref={textRef} 
          className="font-serif font-black text-[#2C1810] leading-[1.1] md:leading-[1.1] tracking-tight perspective-[1000px] flex flex-wrap justify-center gap-x-3 md:gap-x-5 gap-y-2 md:gap-y-4"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)' }} // Scales perfectly on all devices
        >
          {words.map((word, index) => (
            // Outer span acts as the invisible "Mask" or "Window"
            <span key={index} className="inline-block overflow-hidden pb-2 px-1">
              {/* Inner span is the word that physically animates UP into the window */}
              <span className="word-inner inline-block origin-bottom will-change-transform">
                {word}
              </span>
            </span>
          ))}
        </h2>
      </div>

      {/* === ORGANIC WAVY BOTTOM BORDER === */}
      <div className="absolute bottom-[-2px] left-0 w-full z-30 overflow-hidden leading-none pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[200%] md:w-full h-[60px] md:h-[120px]"
          fill="#A0826D" // FIX: Perfectly matches the background color of your ProductCarousel!
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.82,192.75,108.41Z" />
        </svg>
      </div>

      {/* Internal Styles for background floating */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatSlow { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-30px) rotate(15deg); } }
        @keyframes floatMedium { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-50px) rotate(-20deg); } }
        @keyframes floatFast { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(10deg); } }
        
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-float-medium { animation: floatMedium 6s ease-in-out infinite; }
        .animate-float-fast { animation: floatFast 4s ease-in-out infinite; }
      `}} />
    </section>
  );
}