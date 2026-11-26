import { motion } from "motion/react";
import { ShieldCheck, DollarSign, Zap, Headset } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const stats = [
  { icon: ShieldCheck, label: "Trusted & Reliable", value: 100, suffix: "%", desc: "Dependable travel services with a strong reputation." },
  { icon: DollarSign, label: "Affordable Pricing", value: 500, suffix: "+", desc: "Competitive rates without compromising quality." },
  { icon: Zap, label: "Fast Processing", value: 24, suffix: "hr", desc: "Quick visa approvals and ticket bookings." },
  { icon: Headset, label: "24/7 Support", value: 24, suffix: "/7", desc: "Always available to assist you at every step." },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl font-display font-extrabold text-white">
      {count}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-secondary font-sans text-[11px] font-medium uppercase tracking-[0.5em]">The SARA Advantage</span>
              <div className="h-px w-12 bg-secondary/30" />
            </div>
            
            <h2 className="text-7xl md:text-[8rem] font-serif text-white leading-[0.9] mb-16 tracking-tight">
              Excellence <br />
              <span className="italic font-light text-secondary">Defined.</span>
            </h2>
            <p className="text-2xl text-white/60 leading-relaxed font-light font-serif italic max-w-2xl">
              "We redefine the travel experience through meticulous planning, unwavering integrity, and a passion for extraordinary service."
            </p>
          </motion.div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-700 group"
              >
                <div className="mb-8 group-hover:scale-110 transition-transform duration-500">
                  <s.icon className="text-secondary w-8 h-8 font-light" />
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">{s.label}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px] group"
        >
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
            alt="World map background"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-2000 opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/40 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <h3 className="text-4xl font-serif text-white mb-6 tracking-tight">Global Reach, Local Expertise</h3>
              <p className="text-xl text-white/70 font-light font-serif italic leading-relaxed">"Our network spans the globe, but our heart remains in Ajman. We combine international standards with local insights to create truly unique travel experiences."</p>
            </div>
            <button className="btn-luxury bg-secondary text-white border-none hover:bg-secondary/90 px-12">
              Our Legacy
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
