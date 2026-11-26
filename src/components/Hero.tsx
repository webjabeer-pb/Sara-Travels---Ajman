import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from "motion/react";
import { ArrowRight, Plane, Globe, ShieldCheck, MapPin, Navigation, Compass, Sparkles, MousePointer2 } from "lucide-react";
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";

const heroVideos = [
  "https://player.vimeo.com/external/494252666.hd.mp4?s=2f533465935967008697699d554a9355716e257e&profile_id=175&oauth2_token_id=57447761",
  "https://player.vimeo.com/external/370331493.hd.mp4?s=33076939922e336306c55674092f3928e752d58d&profile_id=170&oauth2_token_id=57447761",
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.15]);
  
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center overflow-hidden bg-primary perspective-2000"
    >
      {/* 3D Spline Scene - Embedded for stability */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <iframe 
          src="https://my.spline.design/6Wq1Q7YAnMphUuT2/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="w-full h-full opacity-40 grayscale brightness-50"
          onLoad={() => setIsSplineLoaded(true)}
        />
      </div>

      {/* Fallback/Layered Cinematic Background */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-linear-to-b from-primary/95 via-primary/40 to-primary/95 z-20" />
        <div className="absolute inset-0 bg-primary/40 z-20 backdrop-blur-[1px]" />
        
        {!isSplineLoaded && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVideo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
              className="absolute inset-0 w-full h-full"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover brightness-[0.6] contrast-[1.2]"
                src={heroVideos[currentVideo]}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>

      {/* Immersive HUD Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full border-[40px] border-primary/20 pointer-events-none" />
        <div className="absolute top-12 left-12 flex items-center gap-4">
          <div className="w-2 h-2 bg-secondary rounded-full animate-ping" />
          <span className="text-[10px] text-white/40 uppercase tracking-[0.5em] font-bold">System Online // Luxury Protocol</span>
        </div>
      </div>

      {/* Main Content with 3D Tilt */}
      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 2, ease: [0.23, 1, 0.32, 1] }}
            style={{ translateZ: 100 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="inline-flex items-center gap-6 px-8 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 mb-16"
            >
              <Sparkles className="text-secondary w-4 h-4" />
              <span className="text-secondary font-sans text-[10px] font-black uppercase tracking-[0.8em]">
                Excellence in Motion
              </span>
              <div className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="text-white/40 font-sans text-[10px] font-bold uppercase tracking-[0.4em]">
                Dubai • London • Paris
              </span>
            </motion.div>

            <h1 className="text-9xl md:text-[16rem] font-serif text-white leading-[0.75] mb-20 tracking-tighter">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.7, duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                  className="block"
                >
                  Transcending
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1, duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                  className="block text-secondary italic font-light"
                >
                  The Ordinary.
                </motion.span>
              </span>
            </h1>

            <div className="flex flex-col items-center gap-16">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="text-2xl md:text-4xl text-white/40 max-w-4xl leading-relaxed font-light font-serif italic"
                style={{ translateZ: 50 }}
              >
                "We don't just book trips; we curate timeless experiences that resonate across generations. Your legacy, orchestrated by experts."
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                className="flex flex-wrap justify-center gap-12"
                style={{ translateZ: 150 }}
              >
                <Link to="/packages" className="group relative px-20 py-8 bg-secondary text-white rounded-full overflow-hidden transition-all duration-700 hover:shadow-[0_0_60px_rgba(197,160,89,0.4)]">
                  <span className="relative z-10 font-sans font-black text-xs uppercase tracking-[0.3em]">Explore Collections</span>
                  <motion.div 
                    className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700"
                  />
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center text-primary font-black text-xs uppercase tracking-[0.3em] z-20">
                    Explore Collections
                  </span>
                </Link>
                <Link to="/contact" className="group px-20 py-8 border-2 border-white/10 text-white rounded-full hover:border-white transition-all duration-700 backdrop-blur-xl">
                  <span className="font-sans font-black text-xs uppercase tracking-[0.3em]">Private Consultation</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive 3D Floating Elements */}
      <div className="absolute bottom-20 right-20 z-40 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-40 h-40"
        >
          <div className="absolute inset-0 border border-white/10 rounded-full" />
          <div className="absolute inset-4 border border-secondary/20 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Compass className="text-secondary w-8 h-8 animate-pulse" />
          </div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary rounded-full blur-[2px]" />
        </motion.div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-6"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[1em] text-white/40 font-black">Scroll</span>
          <MousePointer2 className="w-4 h-4 text-secondary animate-bounce" />
        </div>
        <div className="w-[2px] h-24 bg-linear-to-b from-secondary via-secondary/20 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}
