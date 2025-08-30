import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { ArrowRight, Building, Hammer, PaintBucket, Home as HomeIcon } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { Link } from 'react-router-dom';
import SlideInSection from '../components/SlideInSection.jsx';
import FAQ from '../components/FAQ.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import { services } from '../data/services';
import TestimonialCarousel from '../components/TestimonialCarousel.jsx';
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const sections = [aboutRef.current, servicesRef.current, projectsRef.current];

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

  const featuredProjects = [
    {
      title: 'Modern Office Complex',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1667604579449-14298726118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTYxMTYyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Downtown District'
    },
    {
      title: 'Luxury Residential Villa',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1703014172880-a9ad043097c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU2MjA5MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Hillside Heights'
    },
    {
      title: 'Industrial Warehouse',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1730627283145-8deb413fd426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc1NjE1NjY2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Industrial Park'
    }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Home | STONEWISE Construction</title>
        <meta name="description" content="Welcome to STONEWISE Construction - Your Partner in Building & Civil Construction." />
      </Helmet>
      <Hero />

      {/* About Preview */}
      <SlideInSection direction="x" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading Way In Building & Civil <span className="text-[#896267]">Construction</span>
              </h2>
              <p className="text-gray-600 mb-6">
                With over 25 years of experience in the construction industry, STONEWISE Construction
                has established itself as a trusted partner for projects of all sizes. We combine
                traditional craftsmanship with modern technology to deliver exceptional results.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Materials</h4>
                  <p className="text-sm text-gray-600">We use only the highest quality materials and proven construction methods.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
                  <p className="text-sm text-gray-600">Our experienced professionals ensure every project meets the highest standards.</p>
                </div>
              </div>
              <Link to="/about">
                <button className="bg-[#896267] cursor-pointer hover:bg-[#563D40] text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors duration-200">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1634231647709-06609f7dd3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU2MjAzNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction team"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#896267] text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">25</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </SlideInSection>

      {/* Why Choose Us Section */}
      <SlideInSection direction="x" distance={-50} duration={1}>
        <WhyChooseUs />
      </SlideInSection>

      {/* Testimonials Section */}
      <SlideInSection>
        <TestimonialCarousel />
      </SlideInSection>

      {/* Services Preview */}
      <SlideInSection direction="x" distance={-50} duration={1} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive construction services to meet all your building needs,
              from initial planning to final completion.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <button className="bg-[#896267] cursor-pointer hover:bg-[#563D40] text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors duration-200">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </SlideInSection>

      {/* Featured Projects */}
      <SlideInSection>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of our recent successful projects that showcase our expertise
              and commitment to quality construction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects">
              <button className="bg-[#896267] cursor-pointer hover:bg-[#563D40] text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors duration-200">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </SlideInSection>

      {/* FAQ Section */}
      <SlideInSection>
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our construction services, process, and more.
              </p>
            </div>
            <FAQ showAll={false} maxItems={3} showTitle={false} showViewAll={true} />
          </div> 
        </div>
      </SlideInSection>
    </div>
  );
}