import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Star, Zap } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Dubai Luxury',
    country: 'UAE',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    price: 'AED 999',
    tag: 'Popular'
  },
  {
    id: 2,
    name: 'Maldives Escape',
    country: 'Maldives',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
    rating: 5.0,
    price: 'AED 2,899',
    tag: 'Luxury'
  },
  {
    id: 3,
    name: 'Turkey Cultural',
    country: 'Istanbul',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    price: 'AED 1,999',
    tag: 'Culture'
  },
  {
    id: 4,
    name: 'Europe Holiday',
    country: 'Paris / Rome',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    price: 'AED 4,499',
    tag: 'Grand Tour'
  }
];

export default function FuturisticDestinations() {
  return (
    <section id="destinations" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-secondary font-display font-bold uppercase tracking-[0.3em] mb-4"
            >
              <Zap className="w-4 h-4" /> Trending Nodes
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              POPULAR <br />
              <span className="text-gradient">DESTINATIONS.</span>
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 max-w-sm text-lg font-light italic"
          >
            "The world is evolving. Explore the most advanced hubs across the globe and beyond."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="glass-card rounded-[2.5rem] overflow-hidden p-4 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-80 rounded-[2rem] overflow-hidden mb-6">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full flex items-center gap-2">
                    <Star className="w-3 h-3 text-secondary fill-secondary" />
                    <span className="text-[10px] font-bold">{dest.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">{dest.tag}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-2 flex-1">
                  <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2">
                    <MapPin className="w-3 h-3" /> {dest.country}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-secondary transition-colors">{dest.name}</h3>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Starting from</p>
                      <p className="text-xl font-display font-bold text-secondary">{dest.price}</p>
                    </div>
                    <button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute -inset-2 bg-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
