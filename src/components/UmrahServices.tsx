import { motion } from "motion/react";
import { Moon, Hotel, Bus, ShieldCheck, Check } from "lucide-react";

const umrahFeatures = [
  { icon: ShieldCheck, title: "Visa Processing", desc: "Hassle-free Umrah visa arrangements." },
  { icon: Hotel, title: "Hotel Booking", desc: "Premium accommodations near the Haram." },
  { icon: Bus, title: "Transportation", desc: "Comfortable transfers between cities." },
  { icon: Moon, title: "Guided Support", desc: "Expert assistance throughout your journey." },
];

const packages = [
  { name: "Economy Package", price: "Affordable", features: ["Comfortable Stay", "Standard Transport", "Visa Included"] },
  { name: "Standard Package", price: "Balanced", features: ["Closer Hotels", "Private Transport", "Visa Included"] },
  { name: "Premium Package", price: "Luxury", features: ["5-Star Hotels", "VIP Transport", "Full Guidance"] },
];

export default function UmrahServices() {
  return (
    <section id="umrah" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Umrah Packages</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-6">
              Spiritual Journeys <br />
              <span className="text-primary">With Comfort</span>
            </h2>
            <p className="text-lg text-gray-600">
              Our Umrah packages are carefully designed to provide comfort, convenience, and spiritual fulfillment. We handle every detail so you can focus on your prayers.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {umrahFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center group hover:border-primary/30 transition-all"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-all">
                <f.icon className="text-primary w-8 h-8 group-hover:text-white transition-all" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h4>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[3rem] shadow-xl relative overflow-hidden ${i === 1 ? 'bg-primary text-white scale-105 z-10' : 'bg-white text-gray-900'}`}
            >
              {i === 1 && <div className="absolute top-6 right-6 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Popular</div>}
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className={`text-sm mb-8 ${i === 1 ? 'text-blue-100' : 'text-gray-500'}`}>{p.price} & Comfortable</p>
              
              <ul className="space-y-4 mb-10">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${i === 1 ? 'text-secondary' : 'text-primary'}`} />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${i === 1 ? 'bg-white text-primary hover:bg-blue-50' : 'bg-primary text-white hover:bg-primary/90'}`}>
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
