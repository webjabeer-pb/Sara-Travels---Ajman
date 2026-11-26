import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, Clock, CheckCircle, Moon, Hotel, Bus, Zap } from 'lucide-react';

export default function FuturisticVisaUmrah() {
  return (
    <section id="visa-umrah" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Visa Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[3rem] p-10 md:p-16 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[80px] rounded-full -mr-32 -mt-32 group-hover:bg-secondary/10 transition-colors" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-8"
            >
              <FileText className="w-4 h-4" />
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em]">UAE Visa Protocol</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              UAE VISIT <br />
              <span className="text-gradient">VISA SERVICES.</span>
            </h2>
            
            <div className="space-y-6 mb-12">
              {[
                { title: '30 Days Visa', desc: 'Perfect for short visits and business trips.' },
                { title: '60 Days Visa', desc: 'Ideal for longer stays and family visits.' },
                { title: 'Multiple Entry', desc: 'Convenient for frequent travelers to UAE.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass-panel rounded-2xl p-8 border-secondary/20">
              <h4 className="font-display font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="text-secondary w-5 h-5" /> Requirements
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Passport Copy', 'White BG Photo', 'Personal Details', 'Fast Approval'].map((req, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/60 text-sm">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Umrah Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[3rem] p-10 md:p-16 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full -mr-32 -mt-32 group-hover:bg-accent/10 transition-colors" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent mb-8"
            >
              <Moon className="w-4 h-4" />
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em]">Spiritual Matrix</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              PREMIUM <br />
              <span className="text-gradient">UMRAH PACKS.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { name: 'Economy', icon: Bus },
                { name: 'Standard', icon: Hotel },
                { name: 'Premium', icon: ShieldCheck }
              ].map((p, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl text-center hover:bg-accent/10 transition-colors cursor-pointer">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">{p.name}</p>
                  <p className="text-2xl font-display font-bold">VIP</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Hotel, title: 'Haram Proximity', desc: 'Premium accommodations near the Haram.' },
                { icon: Bus, title: 'VIP Transport', desc: 'Comfortable private transfers between cities.' },
                { icon: Zap, title: 'Guided Support', desc: 'Expert assistance throughout your journey.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
