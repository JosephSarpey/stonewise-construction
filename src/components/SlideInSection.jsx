import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SlideInSection({ children, direction = 'y', distance = 100, duration = 1, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { [direction]: distance, opacity: 5 },
        {
          [direction]: 0,
          opacity: 1,
          duration,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, [direction, distance, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}