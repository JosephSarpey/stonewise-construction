import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const heroRef = useRef(null);
  const videosRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const sections = [heroRef.current, videosRef.current];

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

  const categories = ['All', 'Company', 'Projects', 'Construction Process', 'Client Stories'];

  const videos = [
    {
      id: 1,
      title: 'STONEWISE Construction - Company Overview',
      category: 'Company',
      duration: '3:45',
      thumbnail: 'https://images.unsplash.com/photo-1634231647709-06609f7dd3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU2MjAzNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Learn about our company history, values, and commitment to excellence in construction.'
    },
    {
      id: 2,
      title: 'Modern Office Complex Construction',
      category: 'Projects',
      duration: '5:20',
      thumbnail: 'https://images.unsplash.com/photo-1667604579449-14298726118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTYxMTYyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Time-lapse construction of our award-winning downtown office complex project.'
    },
    {
      id: 3,
      title: 'Our Construction Process Explained',
      category: 'Construction Process',
      duration: '7:15',
      thumbnail: 'https://images.unsplash.com/photo-1730627283145-8deb413fd426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc1NjE1NjY2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Step-by-step walkthrough of our proven construction methodology and quality control.'
    },
    {
      id: 4,
      title: 'Luxury Villa Construction Journey',
      category: 'Projects',
      duration: '4:30',
      thumbnail: 'https://images.unsplash.com/photo-1703014172880-a9ad043097c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzU2MjA5MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'From foundation to finishing touches - building a dream home in the hills.'
    },
    {
      id: 5,
      title: 'Client Testimonial - The Johnson Family',
      category: 'Client Stories',
      duration: '2:45',
      thumbnail: 'https://images.unsplash.com/photo-1634231647709-06609f7dd3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU2MjAzNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Hear from satisfied clients about their experience working with STONEWISE.'
    },
    {
      id: 6,
      title: 'Safety First - Our Commitment to Worker Safety',
      category: 'Company',
      duration: '3:10',
      thumbnail: 'https://images.unsplash.com/photo-1667604579449-14298726118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTYxMTYyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Learn about our comprehensive safety protocols and training programs.'
    }
  ];

  const filteredVideos = activeCategory === 'All'
    ? videos
    : videos.filter(video => video.category === activeCategory);

  const openVideo = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  const nextVideo = () => {
    const currentIndex = filteredVideos.findIndex(v => v.id === selectedVideo.id);
    const nextIndex = (currentIndex + 1) % filteredVideos.length;
    setSelectedVideo(filteredVideos[nextIndex]);
  };

  const prevVideo = () => {
    const currentIndex = filteredVideos.findIndex(v => v.id === selectedVideo.id);
    const prevIndex = (currentIndex - 1 + filteredVideos.length) % filteredVideos.length;
    setSelectedVideo(filteredVideos[prevIndex]);
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>Video Gallery | STONEWISE Construction</title>
        <meta name="description" content="Explore our comprehensive video library featuring project showcases, construction processes, and client testimonials." />
      </Helmet>
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-r from-[#563D40] to-[#896267] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Video Gallery</h1>
            <p className="text-xl text-amber-100 leading-relaxed">
              Watch our construction projects come to life, learn about our processes,
              and hear from satisfied clients who trusted us with their vision.
            </p>
          </div>
        </div>
      </section>

      {/* Video Stats */}
      <section className="py-12 md:py-16 bg-[#563D40] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="p-4 md:p-6 bg-white/5 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">25+</div>
              <div className="text-sm md:text-base text-amber-100/90">Project Videos</div>
            </div>
            <div className="p-4 md:p-6 bg-white/5 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">50+</div>
              <div className="text-sm md:text-base text-amber-100/90">Client Stories</div>
            </div>
            <div className="p-4 md:p-6 bg-white/5 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">100K+</div>
              <div className="text-sm md:text-base text-amber-100/90">Total Views</div>
            </div>
            <div className="p-4 md:p-6 bg-white/5 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold mb-1 md:mb-2">4.9</div>
              <div className="text-sm md:text-base text-amber-100/90">Avg. Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section ref={videosRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Video Collection</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Explore our comprehensive video library featuring project showcases,
              construction processes, and client testimonials.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${activeCategory === category
                      ? 'bg-[#896267] text-white'
                      : 'bg-white text-gray-700 hover:bg-[#896267]/10 hover:text-[#896267]'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow duration-300"
                onClick={() => openVideo(video)}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-[#896267]/90 transition-all duration-300 flex items-end p-6"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#896267] p-4 rounded-full group-hover:scale-110 transition-transform duration-200">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-4 left-4 bg-[#896267] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {video.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#896267] transition-colors duration-200">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedVideo.title}</h3>
                <p className="text-[#896267] font-medium">{selectedVideo.category}</p>
              </div>
              <button
                onClick={closeVideo}
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="aspect-video">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-6 border-t">
              <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevVideo}
                    className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors duration-200"
                    disabled={filteredVideos.length <= 1}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-gray-600">
                    {filteredVideos.findIndex(v => v.id === selectedVideo.id) + 1} of {filteredVideos.length}
                  </span>
                  <button
                    onClick={nextVideo}
                    className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors duration-200"
                    disabled={filteredVideos.length <= 1}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-orange-500 font-medium">{selectedVideo.duration}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}