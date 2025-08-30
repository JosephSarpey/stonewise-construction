import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { FloatingContactButton } from './components/FloatingContactButton.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';
import Gallery from './pages/Gallery.jsx';
import FAQ from './pages/FAQ.jsx';


gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Initialize GSAP
    gsap.set("body", { overflow: "visible" });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            {/* Handle preview_page.html specifically */}
            <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
            {/* Catch-all route for any unmatched paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <FloatingContactButton />
        </main>
        <Footer />
      </div>
    </Router>
  );
}