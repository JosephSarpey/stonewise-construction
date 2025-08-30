import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, TextIcon } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/stonewise_logo.jpg';
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp} from 'react-icons/fa';
import { getExternalLinkProps } from '../utils/linkUtils';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Stonewise Logo" className="w-12 h-12 mb-4" />            
              <div>
                <h1 className="logo-title font-bold text-xl text-white">STONEWISE</h1>
                <p className="logo-subtitle mb-4 text-xs text-[#896267] uppercase tracking-wider">
                  Construction
                </p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building the future with innovative construction solutions, 
              quality craftsmanship, and unmatched expertise.
            </p>
            <div className="flex space-x-4">
              <button
                {...getExternalLinkProps('https://wa.me/+233557137072')}
                className="bg-[#896267] p-2 rounded-lg hover:bg-[#563D40] transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </button>
              <button
                {...getExternalLinkProps('https://www.instagram.com/stonewiseconstruction?igsh=MXM4Y2t4MjIxcjUxNA==')}
                className="bg-[#896267] p-2 rounded-lg hover:bg-[#563D40] transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-[#896267] transition-colors duration-200 block">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#896267] transition-colors duration-200 block">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#896267] transition-colors duration-200 block">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-[#896267] transition-colors duration-200 block">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#896267] transition-colors duration-200 block">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services#commercial" className="text-gray-300 hover:text-[#896267] transition-colors duration-200 block">Commercial Construction</Link></li>
              <li><Link to="/services#residential" className="text-gray-300 hover:text-[#896267] transition-colors duration-200 block">Residential Construction</Link></li>
              <li><Link to="/services#renovation" className="text-gray-300 hover:text-[#896267] transition-colors duration-200 block">Renovation & Remodeling</Link></li>
              <li><Link to="/services#interior" className="text-gray-300 hover:text-[#896267] transition-colors duration-200 block">Interior Design</Link></li>
              <li><Link to="/services#project" className="text-gray-300 hover:text-[#896267] transition-colors duration-200 block">Project Management</Link></li>
              <li><Link to="/services#consulting" className="text-gray-300 hover:text-[#896267] transition-colors duration-200 block">Consulting</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#896267] flex-shrink-0" />
                <span className="text-gray-300">(+233) 557 137 072</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#896267] flex-shrink-0" />
                <span className="text-gray-300">Stonewiseconstruction@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#896267] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Cassava Street J327<br />Adenta- Aviation<br />Ghana</span>
              </div>
            </div>

            <h5 className="font-semibold mb-3">Newsletter</h5>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white placeholder-gray-400 focus:border-[#896267] focus:ring-1 focus:ring-[#896267] outline-none"
                required
              />
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-[#896267] hover:bg-[#563D40] text-white font-medium rounded-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center text-gray-400 text-sm border-t border-stone-800 pt-6">
              &copy; 2025 STONEWISE Construction. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-[#896267] transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-[#896267] transition-colors duration-200">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-[#896267] transition-colors duration-200">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}