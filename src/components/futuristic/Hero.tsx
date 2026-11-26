import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Search, MapPin, Calendar, Users, ArrowRight, Sparkles, Globe, Zap } from 'lucide-react';

const heroVideos = [
  "https://player.vimeo.com/external/494252666.hd.mp4?s=2f533465935967008697699d554a9355716e257e&profile_id=175&oauth2_token_id=57447761",
  "https://player.vimeo.com/external/370331493.hd.mp4?s=33076939922e336306c55674092f3928e752d58d&profile_id=170&oauth2_token_id=57447761",
];

export default function FuturisticHero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src={heroVideos[currentVideo]}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-linear-to-b from-primary/80 via-transparent to-primary z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] z-10" />
      </motion.div>

      {/* Decorative Glow Orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-secondary/20 top-[-10%] left-[-10%]" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent/20 bottom-[10%] right-[-5%]" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10"
        >
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-xs font-display font-bold uppercase tracking-widest text-secondary">The Future of Exploration</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-[0.9] tracking-tighter"
        >
          TRAVEL FAR, <br />
          TRAVEL WIDE AND <br />
          <span className="text-gradient italic">TRAVEL OFTEN.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto mb-16 font-light leading-relaxed"
        >
          Discover the world with confidence through SARA TRAVELS — your reliable travel partner in Ajman, UAE. We provide complete travel solutions including flight bookings, visa services, Umrah packages, and customized holiday experiences.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <button className="btn-futuristic group flex items-center gap-3">
            Get Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="glass px-10 py-5 rounded-full text-white font-bold hover:bg-white/10 transition-all border border-white/10">
            Start Your Journey
          </button>
        </div>

        {/* Floating Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card p-2 md:p-4 rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-center gap-4 shadow-2xl">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                <MapPin className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Destination</p>
                  <input type="text" placeholder="Where to?" className="bg-transparent border-none outline-none text-white placeholder:text-white/20 w-full font-medium" />
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                <Calendar className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Timeline</p>
                  <input type="text" placeholder="Add dates" className="bg-transparent border-none outline-none text-white placeholder:text-white/20 w-full font-medium" />
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                <Users className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Travelers</p>
                  <input type="text" placeholder="Add guests" className="bg-transparent border-none outline-none text-white placeholder:text-white/20 w-full font-medium" />
                </div>
              </div>
            </div>
            <button className="w-full md:w-auto h-full px-10 py-6 bg-secondary text-white rounded-2xl font-display font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-600 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group">
              Search <Zap className="w-5 h-5 group-hover:animate-pulse" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">Initiate Descent</span>
        <div className="w-[1px] h-16 bg-linear-to-b from-secondary to-transparent" />
      </motion.div>
    </section>
  );
}
