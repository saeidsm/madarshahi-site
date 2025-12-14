
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Globe, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Video, 
  Menu, 
  X, 
  Printer,
  BookOpen,
  Briefcase,
  Lightbulb,
  Building,
  GraduationCap,
  HeartHandshake,
  Users,
  Presentation,
  Moon,
  Sun,
  Rocket,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Dumbbell
} from 'lucide-react';
import { CONTENT } from './constants';
import { Language, ProjectItem, TeachingItem } from './types';

// Wrapper component to provide Router context
const AppWrapper: React.FC = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};

// Component to handle Aparat Embeds with click-to-load support
const AparatEmbed = ({ html, poster }: { html: string; poster?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;
    
    // Extract ID and SRC from the provided HTML string
    // Example: <div id="34489607539"><script type="text/JavaScript" src="..."></script></div>
    const divMatch = html.match(/id="([^"]+)"/);
    const srcMatch = html.match(/src="([^"]+)"/);

    if (divMatch && divMatch[1] && srcMatch && srcMatch[1]) {
        const id = divMatch[1];
        const src = srcMatch[1];

        // Clear previous content
        containerRef.current.innerHTML = '';

        // Create the inner div with the specific ID required by Aparat script
        const innerDiv = document.createElement('div');
        innerDiv.id = id;
        containerRef.current.appendChild(innerDiv);

        // Create and append the script
        const script = document.createElement('script');
        script.type = 'text/JavaScript';
        script.src = src;
        script.async = true;
        containerRef.current.appendChild(script);
    }
  }, [html, isLoaded]);

  if (!isLoaded && poster) {
    return (
      <div 
        className="relative w-full aspect-video cursor-pointer group bg-slate-200 dark:bg-slate-800" 
        onClick={() => setIsLoaded(true)}
      >
        <img src={poster} alt="Video Thumbnail" className="w-full h-full object-cover transition-opacity" loading="lazy" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
            <div className="bg-white/90 text-red-600 rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-transform flex items-center justify-center">
                <Video size={32} fill="currentColor" />
            </div>
        </div>
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
           Click to Load Video
        </span>
      </div>
    );
  }

  // If loaded or no poster, render container
  return <div ref={containerRef} className={`w-full overflow-hidden ${!isLoaded ? 'bg-slate-200 animate-pulse aspect-video' : ''}`} />;
};

// Component for Image Slider
const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-xl">
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
             src={img} 
             alt={`Slide ${index}`} 
             className="w-full h-full object-cover"
             onError={(e) => { e.currentTarget.src = "https://picsum.photos/400/300"; }}
             loading="lazy"
          />
        </div>
      ))}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`} 
          />
        ))}
      </div>
    </div>
  );
};

// Homepage Gallery Component
const HomeGallery = ({ title }: { title: string }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate image paths from 800.jpg to 811.jpg
  const images = Array.from({ length: 12 }, (_, i) => `pic/${800 + i}.jpg`);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds delay

    // Cleanup interval on unmount or when currentIndex changes (to reset timer on manual interaction)
    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto print:hidden">
      <h3 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100">{title}</h3>
      
      <div 
        className="relative group rounded-2xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Adjusted aspect ratio to better fit 4:3 images without aggressive cropping */}
        <div className="aspect-[4/3] md:aspect-[16/10] relative w-full bg-black">
            <img 
              src={images[currentIndex]} 
              alt={`Saeid Madarshahi Gallery Image ${currentIndex + 1}`} 
              className="w-full h-full object-contain md:object-cover transition-opacity duration-500"
              onError={(e) => { e.currentTarget.src = "https://picsum.photos/800/600"; }}
            />
            
            {/* Overlay for Lightbox trigger */}
            <div 
               className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors cursor-zoom-in flex items-center justify-center group/overlay"
               onClick={() => setSelectedImage(images[currentIndex])}
            >
               <Maximize2 className="text-white opacity-0 group-hover/overlay:opacity-100 transition-opacity drop-shadow-md transform scale-75 group-hover/overlay:scale-100 duration-200" size={48} />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                  className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-md transition-all transform hover:scale-110 shadow-lg border border-white/20"
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={24} className="rotate-180" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                  className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-md transition-all transform hover:scale-110 shadow-lg border border-white/20"
                  aria-label="Next Image"
                >
                  <ChevronRight size={24} className="rotate-180" />
                </button>
            </div>
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 flex-wrap px-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`transition-all duration-300 rounded-full shadow-sm ${
                  idx === currentIndex 
                    ? 'bg-white w-8 h-2' 
                    : 'bg-white/50 w-2 h-2 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-down"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-[70]"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};


const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fa');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrintMode, setIsPrintMode] = useState(false);

  const content = CONTENT[lang];
  const isRTL = lang === 'fa';
  const fontFamily = isRTL ? 'font-persian' : 'font-sans';
  const dir = isRTL ? 'rtl' : 'ltr';
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    
    // Dynamic SEO Metadata
    const title = `${content.hero.name} | ${content.hero.role}`;
    document.title = title;
    
    const descText = lang === 'fa' 
        ? "مروری بر سوابق و عملکرد سعید مادرشاهی، مهندس نما و فعال حوزه ساختمان و صنعت" 
        : "A review of the background and performance of Saeid Madarshahi, Facade Engineer and industry activist";

    // Update standard meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", descText);

    // Update Open Graph description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", descText);

    // Update Twitter description
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", descText);

  }, [lang, dir, content]);

  // Schema.org JSON-LD Injection
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Saeid Sadat Madarshahi",
      "alternateName": "Saeid Madarshahi",
      "url": "https://madarshahi.com",
      "image": "https://madarshahi.com/pic/1001.jpg",
      "jobTitle": "CEO & Facade Engineering Expert",
      "worksFor": {
        "@type": "Organization",
        "name": "Ziggurat Sustainable Solutions"
      },
      "alumniOf": [
        {
            "@type": "CollegeOrUniversity",
            "name": "Sprott School of Business - Carleton University"
        },
        {
            "@type": "CollegeOrUniversity",
            "name": "Azad University of Mashhad"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/in/madarshahi",
        "https://www.aparat.com/facadeengineering",
        "mailto:saeedsm@Gmail.com"
      ],
      "description": "Experienced Civil Engineer and Business Administrator specializing in Facade Engineering and Business Development."
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'fa' : 'en');
  };

  const handlePrint = () => {
    setIsPrintMode(true);
    setTimeout(() => {
      window.print();
      setIsPrintMode(false);
    }, 100);
  };

  // If in print mode, render the unified print view
  if (isPrintMode) {
    return (
      <div className={`min-h-screen bg-white text-black p-8 ${fontFamily} ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
        <div className="max-w-[21cm] mx-auto space-y-12">
          {/* Print Header */}
          <div className="flex items-center justify-between border-b-2 border-black pb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{content.hero.name}</h1>
              <p className="text-xl text-gray-700">{content.hero.role}</p>
            </div>
            <div className="text-sm space-y-1 text-right">
              <p>madarshahi.com</p>
              <p>saeedsm@Gmail.com</p>
            </div>
          </div>

          {/* About */}
          <section className="print-break-inside-avoid">
            <h2 className="text-2xl font-bold border-b border-gray-300 mb-4 pb-2">{content.about.title}</h2>
            {content.about.text.map((paragraph, index) => (
               <p key={index} className="text-justify leading-relaxed mb-4">{paragraph}</p>
            ))}
          </section>

          {/* Experience */}
          <section className="print-break-inside-avoid">
             <h2 className="text-2xl font-bold border-b border-gray-300 mb-4 pb-2">{content.experience.title}</h2>
             <div className="space-y-6">
               {content.experience.items.map((job, idx) => (
                 <div key={idx} className="print-break-inside-avoid">
                   <div className="flex justify-between items-baseline mb-1">
                     <h3 className="font-bold text-lg">{job.role} - {job.company}</h3>
                     <span className="text-sm font-semibold text-gray-600">{job.period}</span>
                   </div>
                   <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
                     {job.description.map((desc, i) => (
                       <li key={i}>{desc}</li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
          </section>
          
           {/* Teaching */}
           <section className="print-break-inside-avoid">
            <h2 className="text-2xl font-bold border-b border-gray-300 mb-4 pb-2">{content.teaching.title}</h2>
            <div className="grid grid-cols-1 gap-4">
              {content.teaching.items.map((item, idx) => (
                <div key={idx} className="print-break-inside-avoid mb-2">
                  <div className="flex justify-between font-bold">
                    <span>{item.title}</span>
                    <span className="text-sm">{item.year}</span>
                  </div>
                   <div className="text-sm italic text-gray-700">{item.role} | {item.type} | {item.location}</div>
                  <p className="text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="print-break-inside-avoid">
             <h2 className="text-2xl font-bold border-b border-gray-300 mb-4 pb-2">{content.education.title}</h2>
             <div className="space-y-4">
                {content.education.items.map((edu, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold">{edu.degree}</h3>
                    <p className="text-sm">{edu.institution}, {edu.year}</p>
                  </div>
                ))}
             </div>
          </section>

          {/* Projects (Compact) */}
          <section className="print-break-inside-avoid">
            <h2 className="text-2xl font-bold border-b border-gray-300 mb-4 pb-2">{content.projects.title}</h2>
            <div className="grid grid-cols-2 gap-6">
              {content.projects.items.map((proj, idx) => (
                <div key={idx} className="print-break-inside-avoid flex gap-4 items-start border border-gray-200 p-2 rounded">
                   <img src={proj.image} className="w-24 h-24 object-cover rounded bg-gray-100" alt="" />
                   <div>
                     <h4 className="font-bold text-sm">{proj.title}</h4>
                     <span className="text-xs font-mono bg-gray-100 px-1">{proj.year}</span>
                     <p className="text-xs mt-1">{proj.description}</p>
                   </div>
                </div>
              ))}
            </div>
          </section>

          {/* Startups (Compact) */}
          <section className="print-break-inside-avoid">
            <h2 className="text-2xl font-bold border-b border-gray-300 mb-4 pb-2">{content.startups.title}</h2>
            <div className="grid grid-cols-2 gap-6">
              {content.startups.items.map((proj, idx) => (
                <div key={idx} className="print-break-inside-avoid flex gap-4 items-start border border-gray-200 p-2 rounded">
                   <img src={proj.image} className="w-24 h-24 object-cover rounded bg-gray-100" alt="" />
                   <div>
                     <h4 className="font-bold text-sm">{proj.title}</h4>
                     <span className="text-xs font-mono bg-gray-100 px-1">{proj.year}</span>
                     <p className="text-xs mt-1">{proj.description}</p>
                   </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Inventions (Compact) */}
          <section className="print-break-inside-avoid">
            <h2 className="text-2xl font-bold border-b border-gray-300 mb-4 pb-2">{content.inventions.title}</h2>
            <div className="space-y-4">
              {content.inventions.items.map((item, idx) => (
                <div key={idx} className="print-break-inside-avoid">
                   <h4 className="font-bold">{item.title} <span className="text-xs font-normal text-gray-600">({item.year})</span></h4>
                   <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    );
  }

  const NavLink = ({ to, label, icon: Icon }: { to: string, label: string, icon?: React.ElementType }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 
          ${isActive 
            ? 'text-accent font-bold bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400' 
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
      >
        {Icon && <Icon size={16} />}
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <div className={`min-h-screen ${fontFamily} ${dir === 'rtl' ? 'text-right' : 'text-left'} bg-slate-50 dark:bg-darkbg text-slate-900 dark:text-slate-100 transition-colors`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-darkbg/90 backdrop-blur-md z-50 shadow-sm border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-700 transition-colors">
                SM
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white hidden sm:block">Saeid Madarshahi</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center space-x-1 rtl:space-x-reverse">
              <NavLink to="/about" label={content.nav.about} />
              <NavLink to="/experience" label={content.nav.experience} />
              <NavLink to="/projects" label={content.nav.projects} />
              <NavLink to="/startups" label={content.nav.startups} />
              <NavLink to="/inventions" label={content.nav.inventions} />
              <NavLink to="/teaching" label={content.nav.teaching} />
              <NavLink to="/publications" label={content.nav.publications} />
              <NavLink to="/civil" label={content.nav.civil} />
              <NavLink to="/sports" label={content.nav.sports} />
              
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
              
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Toggle Theme"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 hover:border-accent dark:hover:border-blue-400 hover:text-accent dark:hover:text-blue-400 transition-colors text-sm font-medium"
              >
                <Globe size={14} />
                {lang === 'en' ? 'فارسی' : 'English'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-2">
               <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 dark:text-slate-300 hover:text-accent">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-16 w-full bg-white dark:bg-darkcard border-b border-slate-100 dark:border-slate-800 shadow-lg animate-fade-in-down h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 pt-2 pb-8 space-y-1">
              <button 
                onClick={toggleLanguage}
                className="w-full text-left rtl:text-right px-4 py-3 flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium bg-slate-50 dark:bg-slate-800 rounded-lg mb-2"
              >
                <Globe size={16} />
                {lang === 'en' ? 'تغییر به فارسی' : 'Switch to English'}
              </button>
              <div className="border-t border-slate-100 dark:border-slate-700 my-2"></div>
              <NavLink to="/about" label={content.nav.about} />
              <NavLink to="/experience" label={content.nav.experience} />
              <NavLink to="/projects" label={content.nav.projects} />
              <NavLink to="/startups" label={content.nav.startups} />
              <NavLink to="/inventions" label={content.nav.inventions} />
              <NavLink to="/teaching" label={content.nav.teaching} />
              <NavLink to="/publications" label={content.nav.publications} />
              <NavLink to="/civil" label={content.nav.civil} />
              <NavLink to="/sports" label={content.nav.sports} />
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="pt-24 pb-12 min-h-[80vh] animate-fade-in-up">
        <Routes>
          <Route path="/" element={
            <>
             <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 py-10 md:py-20">
             <div className="flex-1 order-2 md:order-1 space-y-6">
               <div className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-accent dark:text-blue-400 rounded-full text-sm font-semibold tracking-wide">
                 {content.hero.role}
               </div>
               <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                 {content.hero.name}
               </h1>
               <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                 {content.hero.tagline}
               </p>
               
               <div className="flex flex-wrap gap-4 pt-4">
                 <button 
                    onClick={handlePrint}
                    className="px-6 py-3 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 text-white rounded-lg font-medium transition-transform transform hover:-translate-y-0.5 flex items-center gap-2 shadow-lg shadow-slate-200 dark:shadow-none"
                  >
                    <Printer size={18} />
                    <span>{content.hero.printCv}</span>
                  </button>
                  <a 
                   href="mailto:saeedsm@Gmail.com"
                   className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-accent hover:text-accent rounded-lg font-medium transition-colors flex items-center gap-2"
                 >
                   <Mail size={18} />
                   <span>{content.contact.title}</span>
                 </a>
               </div>
             </div>
             <div className="flex-1 order-1 md:order-2 flex justify-center relative">
               <div className="w-64 h-64 md:w-80 md:h-80 relative">
                 <div className="absolute inset-0 bg-accent/10 dark:bg-blue-500/10 rounded-full blur-2xl transform translate-x-4 translate-y-4"></div>
                 <img 
                   src="pic/1001.jpg" 
                   alt="Saeid Sadat Madarshahi - Facade Engineering Expert" 
                   className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl relative z-10"
                 />
               </div>
             </div>
           </section>
           
           <HomeGallery title={lang === 'fa' ? "حبسِ خاطرات" : "Gallery"} />
           </>
          } />

          <Route path="/about" element={
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              {/* Added Image Section - Hidden in Print */}
              <div className="flex justify-center mb-8 print:hidden">
                <div className="w-48 h-48 md:w-64 md:h-64 relative">
                   <div className="absolute inset-0 bg-accent/10 dark:bg-blue-500/10 rounded-full blur-2xl transform translate-x-4 translate-y-4"></div>
                   <img 
                     src="pic/1001.jpg" 
                     alt="Saeid Madarshahi" 
                     className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl relative z-10"
                   />
                </div>
              </div>

              <SectionHeader icon={Briefcase} title={content.about.title} />
              <article className="bg-white dark:bg-darkcard p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                {content.about.text.map((paragraph, index) => (
                  <p key={index} className="text-lg text-slate-600 dark:text-slate-300 leading-8 text-justify mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </article>
              
              <h3 className="text-2xl font-bold text-center mt-12 dark:text-white">{content.education.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {content.education.items.map((edu, idx) => (
                  <div key={idx} className="p-6 bg-white dark:bg-darkcard rounded-xl border border-slate-100 dark:border-slate-800 hover:border-accent/30 transition-colors shadow-sm">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="text-accent dark:text-blue-400 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-slate-100">{edu.degree}</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{edu.institution}</p>
                        <p className="text-slate-400 dark:text-slate-500 text-xs mt-2">{edu.year}</p>
                        {edu.link && (
                          <a href={edu.link} target="_blank" rel="noreferrer" className="text-accent dark:text-blue-400 text-xs mt-2 flex items-center gap-1 hover:underline">
                            Link <ExternalLink size={10} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          } />

          <Route path="/experience" element={
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader icon={Building} title={content.experience.title} />
              <div className="mt-12 space-y-8">
                {content.experience.items.map((job, idx) => (
                  <article key={idx} className="bg-white dark:bg-darkcard p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 dark:bg-slate-700 group-hover:bg-accent dark:group-hover:bg-blue-500 transition-colors"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                        <h4 className="text-accent dark:text-blue-400 font-medium">{job.company}</h4>
                      </div>
                      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {job.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          } />

          <Route path="/projects" element={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader icon={Building} title={content.projects.title} />
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.projects.items.map((project, idx) => (
                  <ProjectCard key={idx} item={project} />
                ))}
              </div>
            </div>
          } />

          <Route path="/startups" element={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader icon={Rocket} title={content.startups.title} />
              <div className="mt-12 space-y-8">
                {/* Highlighted Startup */}
                {content.startups.items.filter(i => i.isHighlight).map((project, idx) => (
                   <article key={`highlight-${idx}`} className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-darkcard border-2 border-accent dark:border-blue-500 rounded-3xl p-8 md:p-12 shadow-xl transform hover:scale-[1.01] transition-transform" itemScope itemType="https://schema.org/Organization">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                         <div className="w-full md:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = "https://picsum.photos/600/400"} itemProp="image" loading="lazy" />
                            </div>
                         </div>
                         <div className="w-full md:w-1/2 space-y-4">
                             <div className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-md animate-pulse">
                               {project.year}
                             </div>
                             <h3 className="text-3xl font-bold text-slate-900 dark:text-white" itemProp="name">{project.title}</h3>
                             <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed" itemProp="description">{project.description}</p>
                             {project.link && (
                               <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-accent hover:bg-blue-700 text-white rounded-lg font-bold transition-colors shadow-md mt-4" itemProp="url">
                                 {lang === 'en' ? 'Visit Website' : 'مشاهده وب‌سایت'} <ExternalLink size={20} className="mx-2" />
                               </a>
                             )}
                         </div>
                      </div>
                   </article>
                ))}
                
                {/* Other Startups */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                  {content.startups.items.filter(i => !i.isHighlight).map((project, idx) => (
                    <ProjectCard key={idx} item={project} />
                  ))}
                </div>
              </div>
            </div>
          } />

          <Route path="/inventions" element={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <SectionHeader icon={Lightbulb} title={content.inventions.title} />
              
              <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {content.inventions.items.map((item, idx) => (
                  <article key={idx} className="flex flex-col bg-slate-800 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl" itemScope itemType="https://schema.org/CreativeWork">
                     <div className="w-full relative">
                        {item.videoEmbed ? (
                            <AparatEmbed html={item.videoEmbed} poster={item.images?.[0] || item.image} />
                        ) : item.images && item.images.length > 0 ? (
                           <ImageSlider images={item.images} />
                        ) : (
                          <div className="h-64">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover" 
                              onError={(e) => { e.currentTarget.src = "https://picsum.photos/400/300"; }}
                              loading="lazy"
                              itemProp="image"
                            />
                          </div>
                        )}
                     </div>
                     <div className="p-6 flex flex-col justify-center text-white">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">{item.year}</span>
                        <h3 className="text-xl font-bold mb-3" itemProp="name">{item.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4" itemProp="description">{item.description}</p>
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-white hover:text-blue-400 transition-colors" itemProp="url">
                            {lang === 'en' ? 'View Details' : 'مشاهده جزئیات'} <ExternalLink size={14} className="mx-1" />
                          </a>
                        )}
                     </div>
                  </article>
                ))}
              </div>
            </div>
          } />

          <Route path="/teaching" element={
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader icon={Presentation} title={content.teaching.title} />
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {content.teaching.items.map((item, idx) => (
                   <TeachingCard key={idx} item={item} />
                 ))}
              </div>
            </div>
          } />

          <Route path="/publications" element={
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader icon={BookOpen} title={content.publications.title} />
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.publications.items.map((pub, idx) => (
                  <article key={idx} className="group" itemScope itemType="https://schema.org/ScholarlyArticle">
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex flex-col h-full bg-white dark:bg-darkcard rounded-xl border border-slate-200 dark:border-slate-800 hover:border-accent dark:hover:border-blue-500 hover:shadow-lg transition-all overflow-hidden"
                    itemProp="url"
                  >
                    <div className="h-48 w-full bg-slate-100 dark:bg-slate-800 relative">
                      {pub.image ? (
                        <img src={pub.image} alt={pub.title} className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = "https://picsum.photos/400/200"} loading="lazy" itemProp="image" />
                      ) : (
                         <div className="flex items-center justify-center h-full text-slate-400"><BookOpen size={48} /></div>
                      )}
                      <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 dark:bg-black/70 rounded text-xs font-bold uppercase">
                        {pub.type}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                       <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2 line-clamp-2" itemProp="headline">{pub.title}</h3>
                       {pub.authors && <p className="text-sm text-slate-500 dark:text-slate-400 mb-2" itemProp="author">{pub.authors}</p>}
                       <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-4 flex-1" itemProp="abstract">{pub.description}</p>
                       <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                          <span itemProp="publisher">{pub.publisher}</span>
                          <span itemProp="datePublished">{pub.year}</span>
                       </div>
                    </div>
                  </a>
                  </article>
                ))}
              </div>
            </div>
          } />

          <Route path="/civil" element={
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader icon={HeartHandshake} title={content.civil.title} />
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.civil.items.map((item, idx) => (
                  <article key={idx} className="bg-slate-50 dark:bg-darkcard p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center md:items-start hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800">
                    <div className="w-full md:w-1/3 flex-shrink-0">
                       <div className="aspect-square rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-700">
                          <img src={item.image} className="w-full h-full object-cover" onError={(e) => {e.currentTarget.src = "https://picsum.photos/300/300"}} alt={item.title} loading="lazy" />
                       </div>
                    </div>
                    <div className="flex-1 text-center md:text-right rtl:md:text-right">
                       <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-2">{item.title}</h3>
                       <span className="inline-block px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400 text-xs rounded-full mb-3">{item.year}</span>
                       <p className="text-slate-600 dark:text-slate-400 mb-4">{item.description}</p>
                       {item.link && (
                        <a href={item.link} className="text-accent dark:text-blue-400 text-sm font-medium hover:underline flex items-center justify-center md:justify-start gap-1">
                          {lang === 'en' ? 'Visit Website' : 'مشاهده سایت'} <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          } />

          <Route path="/sports" element={
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
              <SectionHeader icon={Dumbbell} title={content.sports.title} />
              <div className="mt-8 max-w-2xl">
                <img 
                  src={content.sports.image} 
                  alt="Sleeping instead of sports" 
                  className="w-full rounded-2xl shadow-lg mb-6"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&q=80"; }} // Fallback to a sleeping image
                  loading="lazy"
                />
                <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {content.sports.description}
                </p>
              </div>
            </div>
          } />

        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="text-center md:text-left rtl:md:text-right">
                <h3 className="text-white font-bold text-lg mb-2">{content.hero.name}</h3>
                <p className="text-slate-500 text-sm">{content.hero.role}</p>
                <a href="mailto:saeedsm@Gmail.com" className="text-accent hover:text-white transition-colors mt-2 block font-mono">saeedsm@Gmail.com</a>
             </div>
             
             <div className="flex gap-8">
                <a href="mailto:saeedsm@Gmail.com" className="hover:text-white transition-colors flex flex-col items-center gap-2 group">
                  <div className="p-3 bg-slate-800 rounded-full group-hover:bg-accent transition-colors"><Mail size={24} /></div>
                  <span className="text-xs">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/madarshahi" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex flex-col items-center gap-2 group">
                  <div className="p-3 bg-slate-800 rounded-full group-hover:bg-[#0077b5] transition-colors"><Linkedin size={24} /></div>
                  <span className="text-xs">LinkedIn</span>
                </a>
                <a href="https://www.aparat.com/facadeengineering" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex flex-col items-center gap-2 group">
                  <div className="p-3 bg-slate-800 rounded-full group-hover:bg-[#ea1d5d] transition-colors"><Video size={24} /></div>
                  <span className="text-xs">Aparat</span>
                </a>
             </div>
          </div>
          <div className="border-t border-slate-800 mt-10 pt-8 text-center text-xs text-slate-600">
               © {new Date().getFullYear()} Saeid Sadat Madarshahi. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

// Sub-components
const SectionHeader: React.FC<{ icon: React.ElementType, title: string }> = ({ icon: Icon, title }) => (
  <div className="flex flex-col items-center text-center">
    <span className="inline-flex items-center justify-center p-3 bg-accent/10 dark:bg-blue-500/20 rounded-xl mb-4 text-accent dark:text-blue-400">
      <Icon size={24} />
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{title}</h2>
    <div className="h-1 w-20 bg-accent dark:bg-blue-500 mt-4 rounded-full"></div>
  </div>
);

const ProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => (
  <article className="group bg-white dark:bg-darkcard rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-col h-full" itemScope itemType="https://schema.org/CreativeWork">
    <div className="relative">
      {item.videoEmbed ? (
          <AparatEmbed html={item.videoEmbed} poster={item.image} />
      ) : (
        // Changed fixed height h-48 to aspect-video to better accommodate different image types (especially buildings)
        <div className="aspect-video w-full overflow-hidden relative">
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors z-10"></div>
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
            onError={(e) => { e.currentTarget.src = "https://picsum.photos/400/300"; }}
            loading="lazy"
            itemProp="image"
          />
        </div>
      )}
      <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
        {item.year}
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-accent dark:group-hover:text-blue-400 transition-colors" itemProp="name">{item.title}</h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 mb-4 flex-1" itemProp="description">{item.description}</p>
      {item.link && (
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-accent dark:text-blue-400 hover:text-accent/80 transition-colors mt-auto"
          itemProp="url"
        >
          {item.link.includes('alumglass') ? 'View Course' : 'View Project'} <ExternalLink size={14} className="mx-1" />
        </a>
      )}
    </div>
  </article>
);

const TeachingCard: React.FC<{ item: TeachingItem }> = ({ item }) => (
  <article className="bg-white dark:bg-darkcard p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-accent/50 dark:hover:border-blue-500/50 transition-colors flex flex-col h-full" itemScope itemType="https://schema.org/Event">
    {item.videoEmbed ? (
       <div className="-mx-6 -mt-6 mb-4 rounded-t-2xl overflow-hidden">
          <AparatEmbed html={item.videoEmbed} poster={item.image} />
       </div>
    ) : item.image && (
       <div className="-mx-6 -mt-6 mb-4 h-48 overflow-hidden rounded-t-2xl relative group">
          <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => e.currentTarget.src="https://picsum.photos/400/300"} alt={item.title} loading="lazy" itemProp="image" />
       </div>
    )}
    
    <div className="flex justify-between items-start mb-4 mt-2">
      <div className={`p-2 rounded-lg ${item.type === 'seminar' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' : 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400'}`}>
        {item.type === 'seminar' ? <Users size={20} /> : <Presentation size={20} />}
      </div>
      <span className="text-sm font-bold text-slate-400 dark:text-slate-500" itemProp="startDate">{item.year}</span>
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2" itemProp="name">{item.title}</h3>
    <div className="flex flex-wrap gap-2 mb-4 text-xs">
       <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">{item.role}</span>
       {item.location && <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded" itemProp="location">{item.location}</span>}
       {item.attendees && <span className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-2 py-1 rounded font-medium">{item.attendees}</span>}
    </div>
    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-1" itemProp="description">
      {item.description}
    </p>
    {item.link && (
      <a href={item.link} target="_blank" rel="noreferrer" className="text-accent dark:text-blue-400 font-bold text-sm hover:underline mt-auto flex items-center gap-1" itemProp="url">
        اطلاعات بیشتر <ExternalLink size={14} />
      </a>
    )}
  </article>
);

export default AppWrapper;
