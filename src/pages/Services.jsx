import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function Services() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const heroContent = useRef(null);
  const floatingShapes = useRef([]);
  const addToFloatingShapes = (el) => {
    if (el) floatingShapes.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroRef.current, {
        backgroundPosition: '50% 60%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      gsap.from(heroContent.current.children, { 
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
      });

      floatingShapes.current.forEach((shape, i) => {
        const duration = 15 + Math.random() * 10;
        
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        
        tl.to(shape, {
          y: '+=40',
          x: i % 2 === 0 ? '+=30' : '-=30',
          rotation: 180,
          duration: duration * 0.4,
          ease: 'sine.inOut',
          opacity: 0.9,
          scale: 1.1
        })
        .to(shape, {
          y: '-=20',
          x: i % 2 === 0 ? '-=20' : '+=20',
          rotation: 360,
          duration: duration * 0.3,
          ease: 'sine.inOut',
          opacity: 0.7,
          scale: 0.9
        })
        .to(shape, {
          y: '+=30',
          x: i % 2 === 0 ? '+=10' : '-=10',
          rotation: 540,
          duration: duration * 0.3,
          ease: 'sine.inOut',
          opacity: 0.8,
          scale: 1
        });
      });
    }, heroRef);

    const sections = [servicesRef.current];
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

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-20 overflow-x-hidden">
      <Helmet>
        <title>Services | STONEWISE Construction</title>
        <meta name="description" content="Explore our range of construction services, from residential to commercial projects, and learn how we can help you bring your vision to life." />
      </Helmet>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-32 text-white overflow-hidden min-h-[70vh] flex items-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/services_hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Glassmorphic overlay - should be first */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-[2px]"></div>

        {/* Floating shapes - after overlay but before content */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            ref={addToFloatingShapes}
            className={`absolute rounded-full ${i === 1
                ? 'top-1/4 left-1/4 w-8 h-8 bg-amber-400/20'
                : i === 2
                  ? 'top-1/3 right-1/4 w-12 h-12 bg-white/10'
                  : 'bottom-1/4 left-1/3 w-10 h-10 bg-amber-300/15'
              } backdrop-blur-sm`}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <div ref={heroContent} className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl border border-white/10 transform transition-all duration-500 hover:bg-white/10 hover:backdrop-blur-sm">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">Our Services</h1>
              <div className="w-24 h-1 bg-[#896267] mx-auto my-6 transform transition-all duration-500 group-hover:w-32"></div>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md mb-6 max-w-2xl mx-auto">
                Comprehensive construction services tailored to meet your unique needs.
                From concept to completion, we deliver excellence in every project.
              </p>
              <Link to="/contact" className="px-8 py-3 bg-[#896267] hover:bg-[#563D40] text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-amber-300/50">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive range of construction services covers everything from initial
              planning and design to final construction and project management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                id={service.id} 
                index={index} 
                {...service} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your project is completed successfully,
              on time, and within budget.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#896267] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">Initial meeting to understand your vision, requirements, and budget.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#896267] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600">Detailed project planning, design development, and permit acquisition.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#896267] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Construction</h3>
              <p className="text-gray-600">Professional construction with regular updates and quality control.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#896267] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Completion</h3>
              <p className="text-gray-600">Final inspection, handover, and ongoing support and warranty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#896267] mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-[#896267] mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-44 h-44 rounded-full bg-[#896267] mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're planning a new construction, renovation, or need expert consultation, 
              our team is here to bring your vision to life with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="/contact" 
                className="px-10 py-4 bg-[#896267] hover:bg-[#563D40] text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
              >
                Book a Free Consultation
              </a>
              <a 
                href="tel:+1234567890" 
                className="px-10 py-4 bg-transparent border-2 border-white/30 hover:border-[#896267] text-white font-medium rounded-full transition-all duration-300 hover:bg-white/5 text-lg flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
            </div>
            <p className="text-gray-300 mt-8 text-sm">
              Or email us at <a href="mailto:stonewiseconstruction@gmail.com" className="text-[#896267] hover:underline">stonewiseconstruction@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}