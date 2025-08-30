import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '../components/ProjectCard.jsx';
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const sections = [heroRef.current, projectsRef.current];
    
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

  const filters = ['All', 'Commercial', 'Residential', 'Industrial', 'Renovation'];

  const projects = [
    {
      title: 'Modern Office Complex',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1667604579449-14298726118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTYxMTYyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Downtown District'
    },
    {
      title: 'Luxury Residential Villa',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1703014172880-a9ad043097c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzU2MjA5MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Hillside Heights'
    },
    {
      title: 'Industrial Warehouse',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1730627283145-8deb413fd426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc1NjE1NjY2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Industrial Park'
    },
    {
      title: 'Shopping Mall Renovation',
      category: 'Renovation',
      image: 'https://images.unsplash.com/photo-1634231647709-06609f7dd3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU2MjAzNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'City Center'
    },
    {
      title: 'Corporate Headquarters',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1667604579449-14298726118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTYxMTYyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Business District'
    },
    {
      title: 'Family Home',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1703014172880-a9ad043097c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzU2MjA5MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Suburban Area'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Our Projects | STONEWISE Construction</title>
        <meta name="description" content="Explore our portfolio of successful construction projects that showcase our expertise and commitment to quality craftsmanship." />
      </Helmet>
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-r from-[#563D40] to-[#896267] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our portfolio of successful construction projects that showcase 
              our expertise and commitment to quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-12 md:py-16 bg-[#563D40] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="p-4 md:p-6 bg-white/5 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">370+</div>
              <div className="text-sm md:text-base text-amber-100/90">Projects</div>
            </div>
            <div className="p-4 md:p-6 bg-white/5 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">25+</div>
              <div className="text-sm md:text-base text-amber-100/90">Years Experience</div>
            </div>
            <div className="p-4 md:p-6 bg-white/5 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">50+</div>
              <div className="text-sm md:text-base text-amber-100/90">Expert Workers</div>
            </div>
            <div className="p-4 md:p-6 bg-white/5 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">98%</div>
              <div className="text-sm md:text-base text-amber-100/90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Browse through our diverse portfolio of construction projects across 
              different sectors and see the quality of our work.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-[#896267] text-white'
                      : 'bg-white text-gray-700 hover:bg-[#896267]/10 hover:text-[#896267]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss your construction needs and create something amazing together. 
            Contact us today for a free consultation and quote.
          </p>
          <button className="bg-[#896267] hover:bg-[#563D40] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
            Get Your Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}