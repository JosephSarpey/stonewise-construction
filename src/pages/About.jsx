/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Building2, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    // Animate sections on scroll
    const sections = [heroRef.current, storyRef.current, valuesRef.current, teamRef.current];
    
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

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We never compromise on quality, using premium materials and proven construction methods.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Our experienced team works together to deliver exceptional results on every project.'
    },
    {
      icon: Building2,
      title: 'Innovation',
      description: 'We embrace new technologies and methods to build more efficiently and sustainably.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect deadlines and work diligently to complete projects on time and within budget.'
    }
  ];

   const team = [
    {
      name: 'John Mitchell',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1634231647709-06609f7dd3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU2MjAzNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      experience: '25+ Years'
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1667604579449-14298726118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTYxMTYyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      experience: '15+ Years'
    },
    {
      name: 'Michael Davis',
      role: 'Lead Architect',
      image: 'https://images.unsplash.com/photo-1703014172880-a9ad043097c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzU2MjA5MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      experience: '18+ Years'
    }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>About Us | STONEWISE Construction</title>
        <meta name="description" content="Discover the story behind STONEWISE Construction, our commitment to quality, and the values that guide our work." />
      </Helmet>
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-r from-[#563D40] to-[#896267] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About STONEWISE Construction</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              For over 25 years, we've been building more than just structures – we've been building 
              relationships, communities, and a legacy of excellence in construction.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 1998 by John Mitchell, STONEWISE Construction began as a small 
                  residential building company with a simple mission: to deliver quality construction 
                  with integrity and craftsmanship.
                </p>
                <p>
                  Over the years, we've grown from a small team to a full-service construction 
                  company, expanding our capabilities to include commercial projects, renovations, 
                  and specialized construction services.
                </p>
                <p>
                  Today, we're proud to have completed over 370 projects, ranging from custom homes 
                  to large commercial developments, all while maintaining our commitment to quality, 
                  safety, and customer satisfaction.
                </p>
              </div>
              
              {/* Timeline */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-[#896267] rounded-full"></div>
                  <div>
                    <span className="font-semibold text-[#896267]">1998</span>
                    <span className="text-gray-600 ml-2">Company Founded</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-[#896267] rounded-full"></div>
                  <div>
                    <span className="font-semibold text-[#896267]">2005</span>
                    <span className="text-gray-600 ml-2">Expanded to Commercial Construction</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-[#896267] rounded-full"></div>
                  <div>
                    <span className="font-semibold text-[#896267]">2015</span>
                    <span className="text-gray-600 ml-2">Reached 250 Completed Projects</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-[#896267] rounded-full"></div>
                  <div>
                    <span className="font-semibold text-[#896267]">2025</span>
                    <span className="text-gray-600 ml-2">370+ Projects & Growing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1634231647709-06609f7dd3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU2MjAzNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction team working"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and ensure we deliver 
              exceptional results on every project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-[#896267] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Promise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At STONEWISE Construction, we promise to deliver every project with integrity, transparency, and a relentless commitment to quality. 
              Your satisfaction is our highest priority, and we stand by our work from start to finish.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow text-center">
              <h3 className="text-xl font-bold text-[#896267] mb-3">Transparent Communication</h3>
              <p className="text-gray-600">
                We keep you informed at every stage, ensuring you’re always in the loop and confident in our process.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow text-center">
              <h3 className="text-xl font-bold text-[#896267] mb-3">Lasting Relationships</h3>
              <p className="text-gray-600">
                We build more than structures—we build trust and long-term partnerships with every client.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}