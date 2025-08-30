import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from '../assets/stonewise_logo.jpg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Animate navbar on page load
    gsap.fromTo(
      ".navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  const companyLinks = [
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/testimonials", label: "Testimonials" },
  ];

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/faq", label: "FAQ" },
  ];

  const infoLinks = [
    { path: "/terms-of-service", label: "Terms of Service" },
    { path: "/privacy-policy", label: "Privacy Policy" },
    { path: "/cookie-policy", label: "Cookie Policy" },
  ];

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#E1E2E5] shadow-lg py-2" : "bg-[#E1E2E5] py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Stonewise Logo" className="w-12 h-12" />            
            <div>
              <h1 className="logo-title font-bold text-xl text-gray-900">STONEWISE</h1>
              <p className="logo-subtitle text-xs text-[#896267] uppercase tracking-wider">
                Construction
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 hover:text-[#896267] ${
                  location.pathname === link.path
                    ? "text-[#896267] border-b-2 border-[#896267] pb-1"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-gray-900" 
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              {/* Company Dropdown Button */}
              <button
                className={`cursor-pointer flex items-center font-medium transition-colors duration-200 hover:text-[#896267] py-2 ${
                  companyLinks.some((l) => location.pathname === l.path)
                    ? "text-[#896267] border-b-2 border-[#896267] pb-1"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-gray-900"
                }`}
                type="button"
                tabIndex={0}
                onClick={() => setIsCompanyOpen((open) => !open)}
              >
                Company <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isCompanyOpen && (
                <div className="absolute left-0 top-full w-40 bg-white rounded-lg shadow-lg z-10">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-2 font-medium transition-colors duration-200 hover:text-[#896267] hover:bg-gray-50 ${
                        location.pathname === link.path
                          ? "text-[#896267] bg-[#F5F5DC]"
                          : "text-gray-700"
                      }`}
                      onClick={() => setIsCompanyOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Info Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsInfoOpen(true)}
              onMouseLeave={() => setIsInfoOpen(false)}
            >
              {/* Info Dropdown Button */}
              <button
                className={`cursor-pointer flex items-center font-medium transition-colors duration-200 hover:text-[#896267] py-2 ${
                  infoLinks.some((l) => location.pathname === l.path)
                    ? "text-[#896267] border-b-2 border-[#896267] pb-1"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-gray-900"
                }`}
                type="button"
                tabIndex={0}
                onClick={() => setIsInfoOpen((open) => !open)}
              >
                More Info <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isInfoOpen && (
                <div className="absolute left-0 top-full w-40 bg-white rounded-lg shadow-lg z-10">
                  {infoLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-2 font-medium transition-colors duration-200 hover:text-[#896267] hover:bg-gray-50 ${
                        location.pathname === link.path
                          ? "text-[#896267] bg-[#F5F5DC]"
                          : "text-gray-700"
                      }`}
                      onClick={() => setIsInfoOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="bg-[#896267] hover:bg-[#6B360F] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <Link
              to="/"
              className={`block px-4 py-2 font-medium transition-colors duration-200 hover:text-[#896267] hover:bg-gray-50 ${
                location.pathname === "/"
                  ? "text-[#896267] bg-[#F5F5DC]"
                  : "text-gray-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`block px-4 py-2 font-medium transition-colors duration-200 hover:text-[#896267] hover:bg-gray-50 ${
                location.pathname === "/services"
                  ? "text-[#896267] bg-[#F5F5DC]"
                  : "text-gray-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            {/* Company Dropdown for Mobile */}
            <details className="px-4 py-2">
              <summary className="font-medium cursor-pointer flex items-center">
                Company <ChevronDown className="ml-1 w-4 h-4" />
              </summary>
              <div className="mt-2">
                {companyLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2 font-medium transition-colors duration-200 hover:text-[#896267] hover:bg-gray-50 ${
                      location.pathname === link.path
                        ? "text-[#896267] bg-[#F5F5DC]"
                        : "text-gray-700"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link
              to="/contact"
              className={`block px-4 py-2 font-medium transition-colors duration-200 hover:text-[#896267] hover:bg-gray-50 ${
                location.pathname === "/contact"
                  ? "text-[#896267] bg-[#F5F5DC]"
                  : "text-gray-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            {/* Info Dropdown for Mobile */}
            <details className="px-4 py-2">
              <summary className="font-medium cursor-pointer flex items-center">
                More Info <ChevronDown className="ml-1 w-4 h-4" />
              </summary>
              <div className="mt-2">
                {infoLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2 font-medium transition-colors duration-200 hover:text-[#896267] hover:bg-gray-50 ${
                      location.pathname === link.path
                        ? "text-[#896267] bg-[#F5F5DC]"
                        : "text-gray-700"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
            <div className="px-4 pt-2">
              <Link
                to="/contact"
                className="block bg-[#896267] hover:bg-[#6B360F] text-white px-6 py-2 rounded-lg font-medium text-center transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
