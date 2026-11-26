import { motion } from "motion/react";
import { Plane, FileText, RefreshCw, Moon, Palmtree, Hotel, Briefcase, Ticket, Plus } from "lucide-react";
import { cn } from "../lib/utils";

const services = [
  { icon: Plane, title: "Flight Ticket Booking", desc: "We offer worldwide flight booking services with competitive prices and flexible options. Whether for business or leisure, we ensure smooth travel arrangements.", color: "bg-blue-500" },
  { icon: FileText, title: "UAE Visit Visa", desc: "Get your UAE visit visa processed quickly with minimal documentation. We offer short-term and long-term visa options.", color: "bg-amber-500" },
  { icon: RefreshCw, title: "UAE Visa Change", desc: "We provide fast and reliable visa change services within the UAE, ensuring convenience without unnecessary delays.", color: "bg-emerald-500" },
  { icon: Moon, title: "Umrah Packages", desc: "Our Umrah packages are carefully designed to provide comfort, convenience, and spiritual fulfillment including visa, hotels and transport.", color: "bg-indigo-500" },
  { icon: Palmtree, title: "Tour Packages", desc: "Discover amazing destinations with our curated tour packages for families, couples, and groups.", color: "bg-orange-500" },
  { icon: Hotel, title: "Hotel Booking", desc: "We provide hotel bookings worldwide with the best rates and options tailored to your needs.", color: "bg-rose-500" },
  { icon: Briefcase, title: "Holiday Packages", desc: "Customized domestic and international holiday packages to suit every budget.", color: "bg-cyan-500" },
  { icon: Ticket, title: "Dummy Booking Services", desc: "Instant dummy hotel and ticket bookings for visa applications.", color: "bg-purple-500" },
  { icon: Plus, title: "And Many More", desc: "Travel insurance, car rentals, and more travel related services.", color: "bg-gray-500" },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0A1F44 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Expertise</span>
            <h2 className="text-6xl md:text-8xl font-display font-black text-primary leading-tight">
              Bespoke <span className="serif italic font-light text-secondary">Travel</span> Solutions
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              From global expeditions to spiritual pilgrimages, we orchestrate every detail with precision and grace.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "bento-item group p-8 flex flex-col justify-between",
                i === 0 ? "md:col-span-2 md:row-span-2" : "",
                i === 3 ? "md:row-span-2" : "",
                i === 4 ? "md:col-span-2" : ""
              )}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-secondary">
                  <s.icon className="text-primary w-7 h-7 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-black text-primary mb-4 group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-white/70 transition-colors line-clamp-3">
                  {s.desc}
                </p>
              </div>
              
              <div className="relative z-10 mt-6 pt-6 border-t border-gray-100 group-hover:border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary group-hover:text-secondary transition-colors">Details</span>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/10 transition-all"
                >
                  <Plus className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </motion.div>
              </div>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.23,1,0.32,1]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
