import { motion } from "motion/react";
import { MapPin, Star, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    id: 1,
    title: "Magical Maldives",
    location: "Maldives",
    badge: "All-Inclusive",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    duration: "4 Days / 3 Nights",
    desc: "Experience the crystal clear waters and luxury overwater villas."
  },
  {
    id: 2,
    title: "Historical Turkey",
    location: "Istanbul, Turkey",
    badge: "Guided Tour",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    duration: "5 Days / 4 Nights",
    desc: "Explore the rich heritage and stunning architecture of Istanbul."
  },
  {
    id: 3,
    title: "Spiritual Umrah",
    location: "Makkah, Saudi Arabia",
    badge: "Visa & VIP Stay",
    image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80",
    rating: 5.0,
    duration: "10 Days / 9 Nights",
    desc: "Complete your spiritual journey with our premium Umrah packages."
  },
  {
    id: 4,
    title: "Dubai City Tour",
    location: "Dubai, UAE",
    badge: "City Highlights",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    duration: "Full Day",
    desc: "Discover the modern wonders and traditional charms of Dubai."
  },
  {
    id: 5,
    title: "European Escape",
    location: "Paris, France",
    badge: "Flights & Hotels",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    duration: "7 Days / 6 Nights",
    desc: "A romantic and cultural journey through the heart of Europe."
  },
  {
    id: 6,
    title: "Asian Adventure",
    location: "Bali, Indonesia",
    badge: "Tailored Plan",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    duration: "6 Days / 5 Nights",
    desc: "Relax and rejuvenate in the tropical paradise of Bali."
  },
];

export default function PackagesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Page Header */}
      <section className="bg-primary py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Explore the World</span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tight">Travel Packages</h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Handpicked travel experiences designed to provide the best value and unforgettable memories. Explore our popular destinations worldwide.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] border border-white rounded-full"></div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-xl overflow-hidden border border-gray-50 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 text-gold fill-gold" />
                    <span className="text-[10px] font-bold text-primary">{p.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-primary px-4 py-1 rounded-lg shadow-lg">
                    <span className="text-white font-bold text-xs">{p.badge}</span>
                  </div>
                </div>
                
                <div className="p-10">
                  <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <MapPin className="w-3 h-3 text-gold" /> {p.location}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-gold transition-colors uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed font-light">
                    {p.desc}
                  </p>
                  <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                    <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                      <Clock className="w-3 h-3" /> {p.duration}
                    </div>
                    <Link to="/contact" className="text-primary font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                      Book Now <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
