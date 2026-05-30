'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Generate deterministic pseudo-random positions based on index
// This ensures server and client render identically
function getPosition(index: number, max: number = 100): number {
  const seed = 12345 + index * 789;
  const x = Math.sin(seed) * 10000;
  return (x - Math.floor(x)) * max;
}

export default function CoffeeBeanAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const beans = containerRef.current.querySelectorAll('.bean');

    beans.forEach((bean, index) => {
      gsap.to(bean, {
        duration: 3 + index * 0.5,
        y: -20,
        opacity: 0.3,
        repeat: -1,
        yoyo: true,
        delay: index * 0.2,
        ease: 'sine.inOut',
      });

      gsap.to(bean, {
        duration: 4 + index * 0.3,
        rotation: 360,
        repeat: -1,
        ease: 'none',
        delay: index * 0.15,
      });
    });

    return () => {
      gsap.killTweensOf(beans);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="bean absolute"
          style={{
            left: `${getPosition(i, 100)}%`,
            top: `${getPosition(i + 100, 100)}%`,
            width: '60px',
            height: '40px',
            background: `hsl(${20 + i * 5}, 50%, 40%)`,
            borderRadius: '50%',
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
}
