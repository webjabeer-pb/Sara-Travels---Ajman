import { motion } from "motion/react";
import { MapPin, Star, Clock, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

const packages = [
  {
    id: 1,
    title: "Dubai Luxury Experience",
    location: "Dubai, UAE",
    tag: "Iconic Tour",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    duration: "3 Days / 2 Nights",
    desc: "Explore iconic landmarks, luxury shopping, and world-class attractions."
  },
  {
    id: 2,
    title: "Maldives Beach Escape",
    location: "Maldives",
    tag: "All-Inclusive",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    rating: 5.0,
    duration: "4 Days / 3 Nights",
    desc: "Enjoy crystal-clear waters, luxury resorts, and unforgettable experiences."
  },
  {
    id: 3,
    title: "Turkey Cultural Tour",
    location: "Istanbul, Turkey",
    tag: "Guided Heritage",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    duration: "6 Days / 5 Nights",
    desc: "Discover rich history, culture, and stunning landscapes."
  },
  {
    id: 4,
    title: "Europe Holiday Packages",
    location: "Paris / Rome / Swiss",
    tag: "Custom Itinerary",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    duration: "10 Days / 9 Nights",
    desc: "Visit top European destinations with guided tours and premium services."
  },
];

export default function FeaturedPackages() {
  return (
    <section id="packages" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Curated Journeys</span>
            <h2 className="text-5xl md:text-7xl font-display font-black text-primary leading-tight">
              Iconic <span className="serif italic font-light text-secondary">Destinations</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="group flex items-center gap-4 text-primary font-black uppercase tracking-widest text-xs border-b-2 border-primary/10 pb-2 hover:border-primary transition-all">
              Explore All Collections <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 cursor-pointer",
                i === 0 ? "lg:col-span-2" : ""
              )}
            >
              <div className={cn(
                "relative overflow-hidden",
                i === 0 ? "h-[600px]" : "h-[450px]"
              )}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.5 }}
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                
                <div className="absolute top-10 left-10 right-10 flex justify-between items-start">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full flex items-center gap-3"
                  >
                    <Star className="w-4 h-4 text-secondary fill-secondary" />
                    <span className="text-xs font-black text-white uppercase tracking-widest">{p.rating}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="bg-secondary px-6 py-2 rounded-full shadow-xl"
                  >
                    <span className="text-primary font-black text-xs uppercase tracking-widest">{p.tag}</span>
                  </motion.div>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-3 text-white/60 text-xs font-black uppercase tracking-[0.3em] mb-4">
                    <MapPin className="w-4 h-4 text-secondary" /> {p.location}
                  </div>
                  <h3 className={cn(
                    "font-display font-black text-white mb-6 leading-tight",
                    i === 0 ? "text-5xl md:text-7xl" : "text-3xl"
                  )}>
                    {p.title}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3 text-white/60 text-xs font-black uppercase tracking-widest">
                      <Clock className="w-4 h-4" /> {p.duration}
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.1, x: 5 }}
                      className="flex items-center gap-3 text-secondary font-black text-xs uppercase tracking-widest transition-colors"
                    >
                      View Journey <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
