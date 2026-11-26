import { motion } from "motion/react";
import { Moon, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const umrahPackages = [
  {
    id: 1,
    title: "Standard Umrah",
    price: "AED 1,299",
    duration: "10 Days / 9 Nights",
    hotels: "3 Star Hotels (Close to Haram)",
    features: [
      "Umrah Visa Processing",
      "Return Flight Ticket",
      "Hotel Accommodation",
      "Ziyarat in Makkah & Madinah",
      "Transportation in Saudi Arabia"
    ]
  },
  {
    id: 2,
    title: "Premium Umrah",
    price: "AED 2,499",
    duration: "10 Days / 9 Nights",
    hotels: "4 Star Hotels (Walking Distance)",
    features: [
      "Umrah Visa Processing",
      "Direct Flight Ticket",
      "Premium Hotel Accommodation",
      "Ziyarat in Makkah & Madinah",
      "Private Transportation",
      "Daily Breakfast"
    ]
  },
  {
    id: 3,
    title: "Luxury Umrah",
    price: "AED 4,999",
    duration: "10 Days / 9 Nights",
    hotels: "5 Star Hotels (Haram View)",
    features: [
      "Umrah Visa Processing",
      "Business Class Flight",
      "Luxury Hotel Accommodation",
      "Private VIP Ziyarat",
      "VIP Transportation",
      "Daily Breakfast & Dinner"
    ]
  }
];

export default function UmrahPage() {
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
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Spiritual Journey</span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tight">Umrah Packages</h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Complete your spiritual journey with SARA TRAVELS. We provide specially curated Umrah packages with premium hotel stays and expert guidance.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] border border-white rounded-full"></div>
        </div>
      </section>

      {/* Umrah Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80" 
                alt="Makkah" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-10"
            >
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary leading-tight tracking-tight">Spiritual Excellence <br /> in Every Journey</h2>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                At SARA TRAVELS, we understand the spiritual significance of Umrah. Our team is dedicated to providing a peaceful and hassle-free experience for all pilgrims.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                From visa processing to hotel accommodations and transportation, we handle every detail so you can focus on your spiritual journey.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                {[
                  "Hassle-free Visa Processing",
                  "Premium Hotel Stays",
                  "Expert Guidance",
                  "24/7 Support in KSA"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-primary/5 p-2 rounded-lg">
                      <CheckCircle2 className="text-gold w-5 h-5" />
                    </div>
                    <span className="font-bold text-primary text-sm uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Packages</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6 tracking-tight">Our Umrah Packages</h2>
            <p className="text-lg text-gray-500 font-light">Choose the package that best suits your needs and budget.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {umrahPackages.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-12 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group duration-500"
              >
                <div className="text-center mb-10">
                  <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">{p.title}</h3>
                  <p className="text-gold font-bold text-4xl mb-4 tracking-tight">{p.price}</p>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{p.duration}</p>
                </div>
                
                <div className="flex-grow space-y-5 mb-12">
                  <p className="font-bold text-primary text-[10px] uppercase tracking-widest border-b border-gray-50 pb-4">What's Included:</p>
                  {p.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <Star className="text-gold w-3 h-3 shrink-0 fill-gold" />
                      <span className="text-gray-500 text-xs font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/contact" className="w-full bg-primary text-white py-5 rounded-lg font-bold text-xs uppercase tracking-widest text-center hover:bg-primary/90 transition-all flex items-center justify-center gap-3">
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
