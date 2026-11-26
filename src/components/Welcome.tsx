import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Welcome() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section ref={containerRef} className="section-padding bg-paper overflow-hidden relative perspective-2000">
      {/* Background Decorative Element */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-6 mb-12">
              <span className="text-secondary font-sans text-[12px] font-black uppercase tracking-[0.6em]">The SARA Philosophy</span>
              <div className="h-[2px] w-20 bg-secondary/30" />
            </div>
            
            <h2 className="text-7xl md:text-[10rem] font-serif text-primary mb-16 leading-[0.85] tracking-tighter">
              The Art of <br />
              <span className="italic font-light text-secondary">Discovery.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-24">
              <div className="space-y-10">
                <p className="text-3xl text-primary font-serif italic leading-relaxed opacity-90 border-l-4 border-secondary/20 pl-8">
                  "Travel is the only thing you buy that makes you richer."
                </p>
                <p className="text-primary/60 leading-relaxed font-light text-xl font-serif italic">
                  Since 2010, we have been the silent architects behind Ajman's most prestigious journeys. Our approach is simple: we listen to your dreams and translate them into reality.
                </p>
              </div>
              <div className="space-y-10">
                <p className="text-primary/60 leading-relaxed font-light text-xl font-serif italic">
                  From the sacred paths of Umrah to the neon horizons of Tokyo, we provide more than just tickets. We provide access, expertise, and a commitment to excellence that is unmatched in the region.
                </p>
                <div className="pt-10">
                  <button className="group relative px-12 py-5 bg-primary text-white rounded-full overflow-hidden transition-all duration-500">
                    <span className="relative z-10 font-sans font-bold text-xs uppercase tracking-widest">Our Heritage</span>
                    <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              style={{ y: y2 }}
              className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)]"
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 3 }}
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury Travel" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/50 via-transparent to-transparent" />
            </motion.div>
            
            {/* Floating Stats Card - 3D Parallax */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              style={{ translateZ: 150 }}
              className="absolute -bottom-16 -left-16 glass p-16 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-white/30 backdrop-blur-3xl"
            >
              <div className="flex gap-20">
                <div className="text-center">
                  <div className="text-7xl font-serif text-primary tracking-tighter">15k</div>
                  <div className="text-[10px] uppercase tracking-[0.5em] text-secondary font-black mt-4">Voyagers</div>
                </div>
                <div className="w-[1px] h-20 bg-primary/10" />
                <div className="text-center">
                  <div className="text-7xl font-serif text-primary tracking-tighter">12</div>
                  <div className="text-[10px] uppercase tracking-[0.5em] text-secondary font-black mt-4">Years</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
