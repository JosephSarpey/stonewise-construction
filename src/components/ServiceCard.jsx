/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ImageWithFallback } from './figma/ImageWithFallback.jsx';

export default function ServiceCard({ icon: Icon, title, description, image }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        y: -10,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
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
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        <div className="absolute top-4 left-4 bg-[#896267] p-3 rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center text-[#896267] font-semibold group-hover:gap-2 transition-all duration-200">
          <span>Learn More</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </div>
      </div>
    </div>
  );
}