import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback.jsx';

export default function ServiceCard({ id, icon: Icon, title, description, image }) {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.03,
        y: -5,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      if (contentRef.current) {
        gsap.to(contentRef.current.querySelector('h3'), {
          color: '#896267', 
          duration: 0.3
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      if (contentRef.current) {
        gsap.to(contentRef.current.querySelector('h3'), {
          color: '#111827', 
          duration: 0.3
        });
      }
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Link to={`/services/${id}`} className="group block h-full">
      <div ref={cardRef} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden h-48">
          <ImageWithFallback 
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#896267] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white font-medium">Learn more →</span>
          </div>
        </div>
        <div ref={contentRef} className="p-6 flex-1 flex flex-col">
          {Icon && (
            <div className="w-12 h-12 bg-[#896267]/10 rounded-lg flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-[#896267]" />
            </div>
          )}
          <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 flex-1">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}