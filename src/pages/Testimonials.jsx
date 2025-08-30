import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TestimonialCarousel from '../components/TestimonialCarousel.jsx';
import { Star } from 'lucide-react';
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const heroRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const sections = [heroRef.current, testimonialsRef.current];
    
    sections.forEach((section) => {
      if (section) {
        gsap.fromTo(section,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });
  }, []);

  return (
    <div className="pt-20">
      <Helmet>
              <title>Client Testimonials | STONEWISE Construction</title>
              <meta name="description" content="Hear what our satisfied clients have to say about their experience working with STONEWISE Construction." />
            </Helmet>
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-r from-[#563D40] to-[#896267] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-amber-100 leading-relaxed">
              Don't just take our word for it. Hear what our satisfied clients have to say 
              about their experience working with STONEWISE Construction.
            </p>
          </div>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600 mb-8">Based on 150+ client reviews</div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#896267] mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#896267] mb-2">95%</div>
                <div className="text-gray-600">On-Time Completion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#896267] mb-2">92%</div>
                <div className="text-gray-600">Repeat Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section ref={testimonialsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#563D40] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-8">
            Experience the same level of quality and service that has made our clients 
            so happy. Let's start your construction project today.
          </p>
          <button className="bg-white text-[#896267] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}