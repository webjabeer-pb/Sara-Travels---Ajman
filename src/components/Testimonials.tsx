import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Mansoori",
    role: "Business Traveler",
    text: "Excellent service and quick visa processing. Highly recommended for anyone looking for hassle-free travel solutions in Ajman!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ahmed"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Tourist",
    text: "Best travel agency in Ajman. Very professional team. They handled my Europe tour perfectly from start to finish.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 3,
    name: "Mohammad Khan",
    role: "Pilgrim",
    text: "Our Umrah journey was very peaceful thanks to SARA TRAVELS. The hotels were close to the Haram and the guidance was excellent.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=mohammad"
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-paper relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0A1F44 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-secondary font-sans text-[11px] font-medium uppercase tracking-[0.5em]">Voices of Experience</span>
              <div className="h-px w-12 bg-secondary/30" />
            </div>
            <h2 className="text-7xl md:text-[10rem] font-serif text-primary leading-[0.9] mb-12 tracking-tight">
              Guest <br />
              <span className="italic font-light text-secondary">Reflections.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex transition-transform duration-1000 ease-[0.23,1,0.32,1]" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((t) => (
              <div key={t.id} className="min-w-full px-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-12 md:p-24 rounded-[3rem] shadow-sm relative overflow-hidden border border-primary/5 group"
                >
                  <Quote className="absolute -top-16 -left-16 w-96 h-96 text-primary/5 -z-0 group-hover:text-secondary/5 transition-colors duration-1000" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="w-32 h-32 rounded-full overflow-hidden border-[8px] border-paper mb-10 shadow-xl cursor-pointer"
                    >
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </motion.div>
                    
                    <div className="flex gap-2 mb-10">
                      {[...Array(t.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <Star className="w-4 h-4 text-secondary fill-secondary" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <p className="text-2xl md:text-4xl text-primary font-serif italic leading-relaxed mb-12 max-w-4xl font-light">
                      "{t.text}"
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-2xl font-serif text-primary tracking-tight">{t.name}</h4>
                      <p className="text-secondary font-sans text-[9px] font-medium uppercase tracking-[0.4em] opacity-60">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-8 mt-20">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="group relative py-4"
              >
                <div className={`h-0.5 transition-all duration-700 ${activeIndex === i ? "w-16 bg-primary" : "w-8 bg-primary/10 group-hover:bg-primary/30"}`} />
                <span className={`absolute -top-4 left-0 text-[9px] font-medium transition-all duration-700 ${activeIndex === i ? "opacity-100 text-primary -translate-y-1" : "opacity-0 translate-y-0"}`}>0{i + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
