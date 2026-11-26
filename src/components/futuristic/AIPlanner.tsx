import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Brain, Zap, Send, MessageSquare, Bot, Cpu } from 'lucide-react';

export default function FuturisticAI() {
  return (
    <section id="ai-planner" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent mb-8"
            >
              <Cpu className="w-4 h-4" />
              <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em]">Neural Engine v4.0</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              AI-POWERED <br />
              <span className="text-gradient">CONCIERGE.</span>
            </h2>
            
            <p className="text-xl text-white/60 font-light leading-relaxed mb-12 max-w-lg">
              Our proprietary AI analyzes millions of data points—from weather patterns to local cultural shifts—to curate a journey that matches your unique digital footprint.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Brain, title: 'Predictive Itineraries', desc: 'Anticipate your needs before you even realize them.' },
                { icon: Zap, title: 'Real-time Adaptation', desc: 'Your plan evolves as the world around you changes.' },
                { icon: Bot, title: '24/7 Digital Assistant', desc: 'A dedicated AI companion for every step of your journey.' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive UI Mockup */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, rotateY: 20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1 }}
              className="glass-panel rounded-[2rem] p-8 shadow-2xl relative z-20 perspective-1000"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-tr from-secondary to-accent p-[2px]">
                    <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display font-bold">SARA AI</h4>
                    <p className="text-[10px] text-accent uppercase tracking-widest font-bold">Online & Processing</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-accent/40" />
                  <div className="w-2 h-2 rounded-full bg-accent/20" />
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="glass px-6 py-4 rounded-2xl rounded-tl-none max-w-[80%]">
                  <p className="text-sm text-white/80">Hello! I've analyzed your preferences for "Spiritual Journeys" and "Luxury Stays". Would you like to see our Premium Umrah packages for next month?</p>
                </div>
                <div className="bg-secondary/20 px-6 py-4 rounded-2xl rounded-tr-none max-w-[80%] ml-auto border border-secondary/30">
                  <p className="text-sm text-white/80">Yes, please. Also, can you check the requirements for a 60-day UAE visit visa?</p>
                </div>
                <div className="glass px-6 py-4 rounded-2xl rounded-tl-none max-w-[80%]">
                  <p className="text-sm text-white/80">Processing... For the 60-day visa, you'll need a passport copy and a white-background photo. I've also found 2 VIP Umrah slots near the Haram.</p>
                </div>
              </div>

              <div className="relative h-14">
                <input 
                  type="text" 
                  placeholder="Ask SARA anything..." 
                  className="w-full h-full bg-white/5 border border-white/10 rounded-xl px-6 pr-14 outline-none focus:border-accent/50 transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 glass px-6 py-4 rounded-2xl shadow-xl z-30 border-accent/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-bold uppercase tracking-widest">Match: 98.4%</span>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-10 glass px-6 py-4 rounded-2xl shadow-xl z-30 border-secondary/20"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-secondary" />
                <span className="text-xs font-bold uppercase tracking-widest">3 New Suggestions</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
