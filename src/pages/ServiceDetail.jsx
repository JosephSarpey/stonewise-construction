import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesById } from '../data/services';
import { Helmet } from 'react-helmet';
import { Building, Hammer, Paintbrush, PaintBucket } from 'lucide-react';

const iconComponents = {
  Building,
  Hammer,
  Paintbrush,
  PaintBucket
};

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const contentRef = useRef(null);
  const service = servicesById[serviceId];

  useEffect(() => {
    if (!service) return;

    gsap.from(contentRef.current?.children || [], {
      y: 20,
      opacity: 10,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.3
    });
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or has been removed.</p>
          <Link to="/services" className="inline-block bg-[#896267] text-white px-6 py-3 rounded-lg hover:bg-[#563D40] transition-colors">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconComponents[service.icon?.name] || Building;

  return (
    <div className="relative min-h-screen bg-stone-50">
      <Helmet>
        <title>{service.title} - Stonewise Construction</title>
        <meta name="description" content={service.metaDescription || service.description} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${service.image})`,
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <div className="inline-flex items-center justify-center p-4 mb-6 bg-white/10 rounded-full">
              <IconComponent className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">{service.title}</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" ref={contentRef}>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our {service.title} Services</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              {service.details ? (
                <div className="whitespace-pre-line">{service.details}</div>
              ) : (
                <>
                  <p>
                    Our expert team is dedicated to delivering exceptional {service.title.toLowerCase()} services 
                    tailored to your specific needs. With years of experience and attention to detail, 
                    we ensure the highest quality results for every project.
                  </p>
                  <p>
                    Whether you're looking for residential or commercial {service.title.toLowerCase()} solutions, 
                    we have the expertise to bring your vision to life. Contact us today to discuss 
                    your project requirements and get a free consultation.
                  </p>
                </>
              )}
              
              {service.features && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Our {service.title} Services Include:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-6 w-6 text-[#896267] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="mt-10">
              <Link 
                to="/contact" 
                className="inline-block bg-[#896267] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#563D40] transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us for {service.title}?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#896267] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-900">Experienced Professionals</h4>
                      <p className="text-gray-600">Our team brings years of expertise to every project.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#896267] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-900">Timely Completion</h4>
                      <p className="text-gray-600">We respect your time and deliver projects on schedule.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-[#896267] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-900">Quality Craftsmanship</h4>
                      <p className="text-gray-600">We take pride in delivering exceptional quality in every detail.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#f9f5f5] rounded-xl p-6 border border-[#896267]/20">
              <h3 className="text-xl font-semibold mb-4 text-[#563D40]">Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help you with any questions about our {service.title.toLowerCase()} services.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center w-full bg-white text-[#896267] border-2 border-[#896267] px-6 py-3 rounded-lg font-medium hover:bg-[#896267] hover:text-white transition-colors"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
