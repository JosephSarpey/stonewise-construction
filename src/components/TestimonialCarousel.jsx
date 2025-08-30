import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback.jsx';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      name: 'John Anderson',
      role: 'Homeowner',
      company: 'Private Client',
      image: 'https://images.unsplash.com/photo-1634231647709-06609f7dd3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU2MjAzNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'STONEWISE Construction exceeded our expectations in every way. From the initial consultation to the final walkthrough, their team was professional, communicative, and delivered exceptional quality. Our new home is everything we dreamed of and more.',
      project: 'Custom Home Build'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Business Owner',
      company: 'Mitchell & Associates',
      image: 'https://images.unsplash.com/photo-1667604579449-14298726118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTYxMTYyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'The renovation of our office space was completed on time and within budget. The attention to detail and quality of workmanship was outstanding. Our employees love the new environment and it has positively impacted our productivity.',
      project: 'Office Renovation'
    },
    {
      name: 'Michael Chen',
      role: 'Property Developer',
      company: 'Chen Development Group',
      image: 'https://images.unsplash.com/photo-1703014172880-a9ad043097c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzU2MjA5MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'I\'ve worked with many construction companies over the years, but STONEWISE stands out for their professionalism and expertise. They handled complex challenges with ease and delivered a project that exceeded all expectations.',
      project: 'Commercial Complex'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Restaurant Owner',
      company: 'Rodriguez Bistro',
      image: 'https://images.unsplash.com/photo-1730627283145-8deb413fd426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc1NjE1NjY2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      text: 'The team at STONEWISE transformed our vision into reality. The restaurant renovation was completed perfectly, creating an amazing dining atmosphere that our customers love. Highly recommend their services!',
      project: 'Restaurant Renovation'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    if (carouselRef.current) {
      gsap.fromTo(carouselRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        <p className="text-gray-600">Real testimonials from real clients who trusted us with their projects</p>
      </div>

      <div ref={carouselRef} className="bg-white rounded-2xl shadow-2xl p-12 relative">
        {/* Quote */}
        <div className="text-6xl text-[#896267] opacity-20 absolute top-8 left-8">"</div>
        
        <div className="relative z-10">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            {current.text}
          </blockquote>

          {/* Client Info */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <ImageWithFallback 
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">{current.name}</div>
              <div className="text-[#896267] font-medium">{current.role}</div>
              <div className="text-gray-600 text-sm">{current.company}</div>
            </div>
          </div>

          {/* Project Badge */}
          <div className="mt-6 text-center">
            <span className="bg-[#896267]/10 text-[#896267] px-4 py-2 rounded-full text-sm font-medium">
              {current.project}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#896267] hover:bg-[#563D40] text-white p-2 rounded-full transition-colors duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#896267] hover:bg-[#563D40] text-white p-2 rounded-full transition-colors duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-[#896267]' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}