import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { ArrowRight, Play } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback.jsx';

gsap.registerPlugin(ScrollTrigger); 

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const videoCardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo(buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(statsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.2'
    );

    // Slide-in animation when video card scrolls into view
    gsap.fromTo(
      videoCardRef.current,
      { x: 100, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: videoCardRef.current,
          start: 'top 80%', 
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const handleWatchVideo = () => {
    navigate('/gallery');
  };

  return (
    <section ref={heroRef} className="relative overflow-x-hidden min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="/hero_image.jpeg"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 ref={titleRef} className="text-5xl lg:text-7xl font-bold mb-6">
              We Prepare<br />
              For The <span className="text-[#896267]">Future</span>
            </h1>
            
            <p ref={subtitleRef} className="text-xl mb-8 text-gray-200 max-w-lg">
              Building tomorrow's infrastructure today with innovative construction solutions 
              and unmatched expertise in every project we undertake.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/get-started">
                <button
                  className="
                    bg-[#896267]
                    hover:bg-[#563D40]
                    text-white
                    px-6 py-3
                    sm:px-8 sm:py-4
                    rounded-lg
                    font-semibold
                    flex items-center justify-center gap-2
                    transition-all duration-200
                    hover:scale-105
                    w-full sm:w-auto
                    text-[#896267] sm:text-lg
                    shadow-md
                  "
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button 
                onClick={handleWatchVideo}
                className="border-2 cursor-pointer border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 w-full sm:w-auto text-base sm:text-lg"
              >
                <Play className="w-5 h-5" />
                Watch Video
              </button> 
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#896267]">25+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#896267]">370+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#896267]">50+</div>
                <div className="text-sm text-gray-300">Expert Workers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video Introduction */}
          <div
            ref={videoCardRef}
            className="
              p-8 rounded-2xl shadow-2xl flex flex-col items-center
              border border-white/30
              bg-white/10
              backdrop-blur-xl
              transition-all
            "
            style={{ opacity: 0 }} 
          >
            <h3 className="text-2xl font-bold text-white mb-4">Meet Stonewise Construction</h3>
            <p className="text-gray-200 mb-6 text-center">
              Discover our story, values, and commitment to building the future. Watch our short introduction video!
            </p>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1"
                title="Stonewise Construction Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}