import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin, Calendar,
  Star, ShieldCheck,
  ArrowRight, Plane, Globe, ChevronRight, Compass, Quote, Palmtree
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const floatingClouds = [
  { size: 120, top: '8%', left: '6%', color: 'bg-sky-300/35', duration: 9 },
  { size: 170, top: '18%', left: '72%', color: 'bg-orange-300/25', duration: 11 },
  { size: 140, top: '52%', left: '14%', color: 'bg-cyan-300/30', duration: 12 },
  { size: 190, top: '68%', left: '62%', color: 'bg-blue-300/30', duration: 10 },
  { size: 130, top: '36%', left: '44%', color: 'bg-amber-200/30', duration: 13 },
];

const travelerMonograms = [
  { initials: 'SH', bg: 'from-blue-600 to-cyan-500' },
  { initials: 'SK', bg: 'from-orange-500 to-amber-500' },
  { initials: 'MV', bg: 'from-emerald-500 to-teal-500' },
  { initials: 'AZ', bg: 'from-violet-600 to-fuchsia-500' },
];

const destinationCardAccents = [
  'from-blue-50/90 via-white to-sky-50/80 border-blue-100',
  'from-orange-50/90 via-white to-amber-50/80 border-orange-100',
  'from-emerald-50/90 via-white to-teal-50/80 border-emerald-100',
];

const packageCardThemes = [
  'bg-gradient-to-br from-blue-50/60 via-white to-sky-50/50 border-blue-100',
  'bg-gradient-to-br from-orange-50/60 via-white to-amber-50/50 border-orange-100',
  'bg-gradient-to-br from-teal-50/60 via-white to-emerald-50/50 border-teal-100',
];

const testimonialThemes = [
  'bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/60 border-blue-100',
  'bg-gradient-to-br from-orange-50/80 via-white to-amber-50/60 border-orange-100',
  'bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 border-emerald-100',
];

const Home = () => {
  const slides = [
    {
      id: 1,
      tagline: "Sara Travels Ajman",
      title: "Explore The Magic Of Travel!",
      description: "Your journey begins here. Discover breathtaking destinations and create memories that last a lifetime with our premium travel services.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      accent: "Magic"
    },
    {
      id: 2,
      tagline: "Premium Journeys",
      title: "Discover Your Dream Destination",
      description: "From the serene beaches of Maldives to the historic streets of Europe, we bring the world closer to you with curated luxury tours.",
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1200&q=80",
      accent: "Dream"
    },
    {
      id: 3,
      tagline: "Exclusive Escapes",
      title: "Experience Luxury Like Never Before",
      description: "Indulge in world-class hospitality and exclusive experiences designed for the discerning traveler. Your luxury escape awaits.",
      image: "https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?auto=format&fit=crop&w=1200&q=80",
      accent: "Luxury"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const destinations = [
    { name: 'Italy', subtitle: 'Venice & Rome Heritage', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=600&h=450&q=80', tours: '12+ Tours' },
    { name: 'France', subtitle: 'Parisian Elegance', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&h=450&q=80', tours: '8+ Tours' },
    { name: 'Maldives', subtitle: 'Tropical Island Bliss', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&h=450&q=80', tours: '15+ Tours' },
    { name: 'Switzerland', subtitle: 'Alpine Peaks', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&h=450&q=80', tours: '10+ Tours' },
  ];

  const packages = [
    {
      title: 'Majestic Dubai Experience',
      location: 'Dubai, UAE',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&h=400&q=80',
      duration: '5 Days'
    },
    {
      title: 'Paris Romantic Escape',
      location: 'Paris, France',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&h=400&q=80',
      duration: '4 Days'
    },
    {
      title: 'Tropical Maldives Paradise',
      location: 'Maldives',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&h=400&q=80',
      duration: '7 Days'
    }
  ];

  const partners = [
    { name: 'Airbnb', color: 'hover:text-rose-500' },
    { name: 'Booking.com', color: 'hover:text-blue-600' },
    { name: 'Trivago', color: 'hover:text-orange-500' },
    { name: 'Expedia', color: 'hover:text-indigo-600' },
  ];

  return (
    <div className="overflow-hidden bg-white">
      <SEO
        title="SARA TRAVELS – Flights, Visas, Holidays & Umrah in Ajman, UAE"
        description="Trusted travel agency in Ajman, UAE for 10+ years. Book worldwide flights, UAE visit visas, visa changes, Umrah packages & custom holidays with SARA TRAVELS."
        keywords="SARA TRAVELS, Sara Travels Ajman, UAE visit visa, Umrah packages UAE, Dubai tour packages, holiday packages Ajman"
        path="/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-8 sm:pt-28 md:pt-36 lg:pb-20 overflow-hidden bg-white">
        <div className="container-custom">
          <div className="relative bg-gradient-to-br from-[#dff0ff] via-[#f4f8ff] to-[#fff1e6] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(30,115,190,0.2)] border border-white/70 w-full min-h-[auto] lg:min-h-[780px] flex items-center">
            {/* Colorful Animated Ambient Blobs */}
            <motion.div
              animate={{
                scale: [1, 1.35, 1],
                rotate: [0, 45, 0],
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -left-20 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] bg-cyan-300/40 rounded-full blur-[90px] sm:blur-[120px] z-0"
            />
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                x: [0, 60, 0],
                opacity: [0.3, 0.55, 0.3],
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 right-0 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] bg-orange-300/35 rounded-full blur-[100px] sm:blur-[140px] z-0"
            />

            {/* Plane Flying Animation */}
            <motion.div
              initial={{ x: "-60%", y: "10%", rotate: 5 }}
              animate={{
                x: "260%",
                y: ["10%", "4%", "14%", "10%"],
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute z-10 pointer-events-none opacity-20"
            >
              <Plane size={180} className="text-primary/45 fill-current filter drop-shadow-2xl" />
            </motion.div>

            {/* Deterministic Colorful Floating Orbs */}
            {floatingClouds.map((cloud, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 16, 0],
                  opacity: [0.2, 0.45, 0.2]
                }}
                transition={{
                  duration: cloud.duration,
                  repeat: Infinity,
                  delay: i * 1.1,
                  ease: "easeInOut"
                }}
                className={`absolute ${cloud.color} rounded-full blur-2xl z-0 pointer-events-none`}
                style={{
                  width: `${cloud.size}px`,
                  height: `${cloud.size}px`,
                  top: cloud.top,
                  left: cloud.left,
                }}
              />
            ))}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-20 w-full px-5 py-9 sm:p-10 md:p-14 lg:p-20 flex items-center"
              >
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 w-full">
                  {/* Left Content - Centered on Mobile, Left on Desktop */}
                  <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.12,
                            delayChildren: 0.15
                          }
                        }
                      }}
                    >
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: -12 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8"
                      >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-primary/25 animate-float shrink-0">
                          <Globe className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <div className="flex flex-col items-center sm:items-start">
                          <span className="text-primary font-black text-[11px] sm:text-xs uppercase tracking-[0.28em] sm:tracking-[0.38em] mb-1.5">
                            {slides[currentSlide].tagline}
                          </span>
                          <span className="h-1 w-14 bg-gradient-to-r from-secondary to-amber-400 rounded-full" />
                        </div>
                      </motion.div>

                      <motion.h1
                        variants={{
                          hidden: { opacity: 0, y: 24 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.15] mb-5 sm:mb-6 tracking-tight"
                      >
                        {slides[currentSlide].title.split(slides[currentSlide].accent)[0]}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-500 to-secondary bg-[length:200%_auto] animate-gradient-x drop-shadow-sm">
                          {slides[currentSlide].accent}
                        </span>
                        {slides[currentSlide].title.split(slides[currentSlide].accent)[1]}
                        <br />
                        <span className="text-secondary italic font-serif relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                          Sara Travels
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "105%" }}
                            transition={{ delay: 0.8, duration: 0.9, ease: "circOut" }}
                            className="absolute -bottom-1 -left-1 h-2 bg-secondary/20 -z-10 rounded-full"
                          />
                        </span>
                      </motion.h1>

                      <motion.p
                        variants={{
                          hidden: { opacity: 0, y: 16 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="text-primary/75 text-sm sm:text-base md:text-lg lg:text-xl mb-7 sm:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
                      >
                        {slides[currentSlide].description}
                      </motion.p>

                      {/* Travel Services Quick Bar */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 24 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="bg-white/95 backdrop-blur-2xl p-3 sm:p-3.5 md:p-4 rounded-3xl md:rounded-[2.5rem] shadow-2xl shadow-blue-200/40 border border-white flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3 mb-7 sm:mb-10 text-left"
                      >
                        <Link
                          to="/visa"
                          className="flex-1 flex items-center gap-3.5 px-3.5 py-3 md:px-5 md:py-3.5 border-b md:border-b-0 md:border-r border-gray-100 group rounded-2xl hover:bg-sky-50/70 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                            <ShieldCheck size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Visa Assistance</span>
                            <span className="text-primary font-bold text-sm md:text-base group-hover:text-secondary transition-colors">UAE &amp; Global Visas</span>
                          </div>
                        </Link>
                        <Link
                          to="/umrah"
                          className="flex-1 flex items-center gap-3.5 px-3.5 py-3 md:px-5 md:py-3.5 border-b md:border-b-0 md:border-r border-gray-100 group rounded-2xl hover:bg-emerald-50/70 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                            <Compass size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Travel Solutions</span>
                            <span className="text-primary font-bold text-sm md:text-base group-hover:text-secondary transition-colors">Flights, Tours &amp; Umrah</span>
                          </div>
                        </Link>
                        <Link
                          to="/contact"
                          className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-2xl md:rounded-[1.75rem] hover:brightness-110 transition-all duration-300 shadow-xl shadow-primary/25 group flex items-center justify-center gap-2 font-bold text-sm whitespace-nowrap active:scale-95"
                        >
                          <span>Plan Trip</span>
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>

                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 16 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-5 md:gap-10"
                      >
                        <Link to="/packages" className="flex items-center gap-3.5 md:gap-5 group cursor-pointer text-left">
                          <div className="relative">
                            <div className="absolute inset-0 bg-secondary/30 rounded-full animate-ping" />
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500 text-white">
                              <Plane className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-primary font-black text-sm sm:text-base md:text-lg leading-none mb-1">Explore Packages</span>
                            <span className="text-secondary text-[11px] md:text-xs font-bold uppercase tracking-widest">50+ Destinations</span>
                          </div>
                        </Link>

                        <div className="h-10 w-px bg-primary/10 hidden sm:block" />

                        <div className="flex items-center gap-3.5 md:gap-5 text-left">
                          <div className="flex -space-x-3 sm:-space-x-4">
                            {travelerMonograms.map((t, i) => (
                              <motion.div
                                key={i}
                                whileHover={{ y: -5, scale: 1.1 }}
                                className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 sm:border-[3px] border-white bg-gradient-to-br ${t.bg} text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-lg`}
                              >
                                {t.initials}
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex flex-col">
                            <p className="text-primary font-black text-sm sm:text-base md:text-xl leading-none mb-1">15k+ Travelers</p>
                            <p className="text-primary/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">Joined us</p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Right Content - Responsive Visual Showcase */}
                  <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
                    className="relative flex items-center justify-center pt-2 lg:pt-0 lg:min-h-[520px]"
                  >
                    <div className="relative z-10 w-full max-w-xl aspect-[4/3]">
                      <motion.div
                        animate={{ y: [0, -14, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full h-full"
                      >
                        <div className="w-full h-full rounded-[1.75rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-[0_35px_70px_-15px_rgba(15,60,104,0.3)] border-4 sm:border-8 border-white/60 backdrop-blur-sm">
                          <img
                            src={slides[currentSlide].image}
                            alt="Travel Destination"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Glass Cards Floating Safely Inside Image Corners on Mobile */}
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                          className="absolute top-3 right-3 sm:-top-5 sm:-right-5 bg-white/95 backdrop-blur-xl px-3.5 py-2 sm:p-4 lg:p-5 rounded-2xl lg:rounded-[2rem] shadow-2xl border border-white flex items-center gap-2.5 sm:gap-3 z-20"
                        >
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-secondary to-amber-500 flex items-center justify-center text-white shadow-md">
                            <Star fill="currentColor" size={16} />
                          </div>
                          <div>
                            <p className="text-primary font-black text-sm sm:text-base leading-none">4.9/5</p>
                            <p className="text-primary/60 text-[10px] font-bold uppercase tracking-wider">Top Rated</p>
                          </div>
                        </motion.div>

                        <motion.div
                          animate={{ y: [0, 10, 0] }}
                          transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
                          className="absolute bottom-3 left-3 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-xl px-3.5 py-2 sm:p-4 lg:p-5 rounded-2xl lg:rounded-[2rem] shadow-2xl border border-white flex items-center gap-2.5 sm:gap-3 z-20"
                        >
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-white shadow-md">
                            <MapPin size={16} />
                          </div>
                          <div>
                            <p className="text-primary font-black text-sm sm:text-base leading-none">50+</p>
                            <p className="text-primary/60 text-[10px] font-bold uppercase tracking-wider">Destinations</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="flex absolute bottom-3 sm:bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-20 gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show slide ${i + 1}`}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-10 sm:w-12 bg-gradient-to-r from-primary to-secondary' : 'w-3 sm:w-4 bg-primary/20 hover:bg-primary/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Colorful Executive Quick Highlights Grid (Symmetric 2x2) */}
      <section className="py-5 bg-white lg:hidden">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Holiday Packages', sub: '50+ Destinations', to: '/packages', icon: Palmtree, card: 'from-blue-50 to-sky-50 border-blue-100', iconBg: 'from-blue-600 to-cyan-500' },
              { label: 'UAE Visit Visas', sub: '30 & 60 Days', to: '/visa', icon: ShieldCheck, card: 'from-orange-50 to-amber-50 border-orange-100', iconBg: 'from-orange-500 to-amber-500' },
              { label: 'Umrah Trips', sub: 'Guided Care', to: '/umrah', icon: Compass, card: 'from-emerald-50 to-teal-50 border-emerald-100', iconBg: 'from-emerald-500 to-teal-500' },
              { label: 'Flight Tickets', sub: 'Global Airlines', to: '/services', icon: Plane, card: 'from-violet-50 to-indigo-50 border-violet-100', iconBg: 'from-violet-600 to-indigo-500' },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.06, type: 'spring', stiffness: 260, damping: 22 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to={item.to}
                  className={`flex items-center gap-2.5 p-3 min-h-[60px] rounded-2xl bg-gradient-to-br ${item.card} border shadow-sm hover:shadow-md transition-all`}
                >
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.iconBg} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                    <item.icon size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-primary font-bold text-xs leading-tight truncate">{item.label}</p>
                    <p className="text-gray-500 text-[10px] font-medium truncate mt-0.5">{item.sub}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-10 sm:py-14 bg-white border-b border-gray-50 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col items-center gap-6 sm:gap-10">
            <p className="text-primary/40 font-black text-[11px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.5em] text-center">
              Trusted By Industry Leaders
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-between gap-7 sm:gap-14 w-full text-center">
              {partners.map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.08 }}
                  className="opacity-65 hover:opacity-100 transition-all duration-300 cursor-pointer"
                >
                  <span className={`text-xl sm:text-2xl lg:text-3xl font-black text-gray-500 ${partner.color} transition-colors duration-300`}>
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. DESTINATION SECTION */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-10 sm:mb-16 gap-6 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">Popular Destinations</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 leading-tight">
                Unleash Your Wanderlust <br className="hidden sm:block" /> With SARA TRAVELS
              </h2>
            </div>
            <div className="flex justify-center md:justify-end gap-3 sm:gap-4">
              <Link
                to="/packages"
                aria-label="View packages"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all group"
              >
                <ChevronRight size={22} className="rotate-180 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                to="/packages"
                aria-label="Explore all destinations"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center hover:opacity-90 transition-all group shadow-lg shadow-primary/20"
              >
                <ChevronRight size={22} className="group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.14 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
          >
            {destinations.slice(0, 3).map((dest, i) => (
              <motion.div
                key={dest.name}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className={`group cursor-pointer p-4 sm:p-5 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br ${destinationCardAccents[i]} border shadow-lg shadow-gray-200/50 transition-all duration-300`}
              >
                <Link to="/packages" className="block">
                  <div className="relative mb-5 sm:mb-6 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] aspect-[4/3] shadow-lg">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-transparent to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 sm:translate-y-4 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="block text-center w-full py-2.5 bg-white/95 backdrop-blur-md rounded-xl text-primary font-bold text-xs sm:text-sm shadow-md">
                        Explore Destination
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-1 sm:px-2">
                    <div>
                      <h3 className="font-bold text-xl sm:text-2xl text-primary group-hover:text-secondary transition-colors">{dest.name}</h3>
                      <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mt-1">
                        <MapPin size={14} className="text-secondary" />
                        <span>{dest.subtitle}</span>
                      </div>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. ABOUT / EXPERIENCE SECTION */}
      <section className="section-padding bg-gradient-to-b from-bg-light via-sky-50/40 to-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3.5 sm:gap-6">
              <div className="pt-6 sm:pt-12">
                <motion.img
                  whileHover={{ scale: 1.04, rotate: -2 }}
                  src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=400&h=600&q=80"
                  alt="Scenic mountain lake travel destination"
                  className="rounded-3xl sm:rounded-[3rem] shadow-2xl w-full h-[240px] sm:h-[340px] lg:h-[450px] object-cover border-4 sm:border-8 border-white"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col gap-3.5 sm:gap-6">
                <motion.img
                  whileHover={{ scale: 1.04, rotate: 2 }}
                  src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Scenic mountain peaks expedition"
                  className="rounded-3xl sm:rounded-[2.5rem] shadow-2xl w-full h-[150px] sm:h-[210px] lg:h-[280px] object-cover border-4 sm:border-8 border-white"
                  referrerPolicy="no-referrer"
                />
                <motion.img
                  whileHover={{ scale: 1.04, rotate: -2 }}
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&h=300&q=80"
                  alt="Beautiful tropical beach"
                  className="rounded-3xl sm:rounded-[2.5rem] shadow-2xl w-full h-[150px] sm:h-[210px] lg:h-[280px] object-cover border-4 sm:border-8 border-white"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Experience Badge */}
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-secondary to-amber-500 text-white p-5 sm:p-8 lg:p-10 rounded-full shadow-2xl border-[6px] sm:border-[10px] border-white text-center"
            >
              <span className="block text-2xl sm:text-4xl lg:text-5xl font-bold leading-none">10+</span>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] sm:tracking-[0.3em] block mt-1">Years Trust</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Centered on Mobile, Left on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">Journey To The Skies Made Simple!</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-3 sm:mt-4 mb-5 sm:mb-8 leading-tight">
              Unleash <br />
              Wanderlust With <br />
              <span className="text-secondary italic font-serif">Sara Travels</span>
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Travelling is a wonderful way to explore new places, learn about different cultures, and gain unique experiences. SARA TRAVELS is your gateway to the world.
            </p>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-8 mb-8 sm:mb-12">
              {[
                { label: 'Years Exp.', value: '10+', color: 'text-primary', bg: 'from-blue-50/70 to-white border-blue-100' },
                { label: 'Happy Clients', value: '12K', color: 'text-secondary', bg: 'from-orange-50/70 to-white border-orange-100' },
                { label: 'Rating', value: '4.8', color: 'text-emerald-600', bg: 'from-emerald-50/70 to-white border-emerald-100' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex flex-col items-center justify-center lg:items-start text-center lg:text-left p-3 sm:p-0 rounded-2xl bg-gradient-to-br ${stat.bg} sm:bg-none shadow-sm sm:shadow-none border sm:border-0`}
                >
                  <p className={`text-2xl sm:text-4xl font-bold ${stat.color} mb-0.5 sm:mb-1`}>{stat.value}</p>
                  <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link to="/about" className="btn-primary !px-10 sm:!px-12 group">
                <span>Learn About Us</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. FEATURED PACKAGES */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-20">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">Discover The World From Above</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-4 sm:mb-6">
              Our Exclusive Packages
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.14 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
          >
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileTap={{ scale: 0.98 }}
                className={`card-modern group !rounded-[2rem] sm:!rounded-[3rem] ${packageCardThemes[i]}`}
              >
                <div className="relative h-56 sm:h-72 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>
                <div className="p-6 sm:p-9">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
                      <MapPin size={14} className="text-secondary" />
                      {pkg.location}
                    </div>
                    <div className="flex items-center gap-1 text-secondary font-bold">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm">{pkg.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-5 sm:mb-6 group-hover:text-secondary transition-colors leading-tight">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center justify-between pt-5 sm:pt-6 border-t border-gray-200/70">
                    <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                      <Calendar size={18} className="text-primary/60" />
                      {pkg.duration}
                    </div>
                    <Link to="/contact" className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center group-hover:scale-105 transition-all shadow-md">
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="section-padding bg-gradient-to-b from-bg-light via-orange-50/20 to-bg-light">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-20">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">Loved By Over Thousand Travelers</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-4 sm:mb-6">
              Customer Experiences
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {[
              { name: 'Shameer', role: 'Influencer', text: 'SARA TRAVELS made my international travel completely effortless. Every flight, transfer, and stay was curated to perfection.' },
              { name: 'Shaheed Kottakkal', role: 'Musician', text: 'The best travel agency in Ajman! From fast visa processing to smooth tour arrangements, their service hits every right note.' },
              { name: 'Murshid Venniyur', role: 'Traveller', text: 'I always trust SARA TRAVELS for my journeys and Umrah trips. Everything from documentation to hotel stays is handled with utmost care.' },
            ].map((testi, i) => (
              <motion.div
                key={testi.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${testimonialThemes[i]} border p-7 sm:p-10 rounded-[2rem] sm:rounded-[3rem] relative shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-between text-center sm:text-left`}
              >
                <div>
                  <div className="flex items-center justify-center sm:justify-between mb-6 sm:mb-8 gap-3">
                    <div className="flex gap-1 text-secondary">
                      {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                    </div>
                    <Quote size={26} className="hidden sm:block text-primary/20" />
                  </div>
                  <p className="text-gray-600 italic mb-7 leading-relaxed text-base sm:text-lg">"{testi.text}"</p>
                </div>
                <div className="pt-5 border-t border-gray-200/70">
                  <h5 className="font-bold text-primary text-lg">{testi.name}</h5>
                  <p className="text-secondary text-xs uppercase font-bold tracking-widest mt-1">{testi.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0e3f6e] via-primary to-[#155a96] rounded-[2.25rem] sm:rounded-[4rem] p-8 sm:p-12 md:p-20 text-center text-white relative overflow-hidden shadow-[0_35px_80px_-20px_rgba(30,115,190,0.35)]"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/15 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-secondary font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-sm mb-5 sm:mb-8 block">
                Explore The Skies With Confidence
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 sm:mb-8 leading-[1.15]">
                Let’s Make Your Travel <br className="hidden sm:block" /> Dreams Come True
              </h2>
              <p className="text-white/80 text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                Our experts are ready to help you plan the perfect trip. Get a free quote today and start your journey.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <Link to="/contact" className="btn-secondary !px-10 !py-4 sm:!px-12 sm:!py-5 text-base sm:text-lg group">
                  <span>Get Free Quote</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/packages" className="px-10 py-4 sm:px-12 sm:py-5 rounded-full font-bold border-2 border-white/25 hover:bg-white hover:text-primary transition-all duration-300 text-base sm:text-lg">
                  View Packages
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
