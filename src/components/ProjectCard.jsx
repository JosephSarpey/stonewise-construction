import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback.jsx';

export default function ProjectCard({ title, category, image, location }) {
  const cardRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    if (!card || !overlay) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.03,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group h-80"
    >
      <ImageWithFallback 
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      
      {/* Category Badge */}
      <div className="absolute top-4 left-4 bg-[#896267] text-white px-3 py-1 rounded-full text-sm font-semibold">
        {category}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-gray-300">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="text-sm">{location}</span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-[#563D40]/90 opacity-0 flex items-center justify-center"
      >
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="mb-4">{category} Project</p>
          <button className="bg-white text-[#896267] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}