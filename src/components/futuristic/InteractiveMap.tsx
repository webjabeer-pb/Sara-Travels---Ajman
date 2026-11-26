import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, Globe, Zap, Info, ArrowUpRight } from 'lucide-react';

const hotspots = [
  { id: 1, x: '25%', y: '35%', name: 'London Hub', status: 'Active', load: '88%' },
  { id: 2, x: '65%', y: '45%', name: 'Dubai HQ', status: 'Optimal', load: '42%' },
  { id: 3, x: '45%', y: '65%', name: 'Istanbul Node', status: 'Busy', load: '95%' },
  { id: 4, x: '80%', y: '25%', name: 'Tokyo Link', status: 'Standby', load: '12%' },
];

export default function FuturisticMap() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <section id="experiences" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-6"
          >
            <Globe className="w-4 h-4 text-secondary" />
            <span className="text-[10px] font-display font-bold uppercase tracking-widest text-secondary">Global Connectivity Matrix</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            INTERACTIVE <br />
            <span className="text-gradient">NETWORK.</span>
          </h2>
          <p className="text-white/40 text-lg font-light">
            Real-time visualization of our global travel nodes. Monitor traffic, weather, and availability across the network.
          </p>
        </div>

        <div className="relative aspect-video md:aspect-[21/9] glass-card rounded-[3rem] overflow-hidden group">
          {/* Map Background (Abstract Grid) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          {/* World Map Silhouette (Abstract) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <Globe className="w-[80%] h-[80%] text-white" />
          </div>

          {/* Hotspots */}
          {hotspots.map((spot) => (
            <div 
              key={spot.id}
              className="absolute"
              style={{ left: spot.x, top: spot.y }}
            >
              <button
                onMouseEnter={() => setActiveHotspot(spot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
                className="relative group/pin"
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-500 ${activeHotspot === spot.id ? 'bg-secondary scale-150 shadow-[0_0_20px_rgba(59,130,246,0.8)]' : 'bg-secondary/40'}`} />
                <div className="absolute -inset-4 border border-secondary/20 rounded-full animate-ping" />
                
                <AnimatePresence>
                  {activeHotspot === spot.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 z-50"
                    >
                      <div className="glass-panel rounded-2xl p-6 min-w-[240px] shadow-2xl border-secondary/30">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-display font-bold text-lg">{spot.name}</h4>
                          <Zap className="w-4 h-4 text-secondary" />
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Status</span>
                            <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">{spot.status}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Network Load</span>
                            <span className="text-[10px] font-bold text-white uppercase tracking-widest">{spot.load}</span>
                          </div>
                          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: spot.load }}
                              className="h-full bg-secondary"
                            />
                          </div>
                        </div>
                        <button className="w-full mt-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors">
                          View Node Details <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white/10" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          ))}

          {/* Map Overlay HUD */}
          <div className="absolute top-8 left-8 glass-panel rounded-2xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
              <Navigation className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Active Nodes</p>
              <p className="text-xl font-display font-bold">1,284 <span className="text-xs text-green-400 font-normal">+12</span></p>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 glass-panel rounded-2xl p-4 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Optimal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Busy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Maintenance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
