import { motion } from "motion/react";
import { Plane, FileText, RefreshCw, Moon, Palmtree, Hotel, Briefcase, Ticket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Plane, title: "Flight Ticket Booking", desc: "Worldwide flight reservations with all major airlines at the best available rates." },
  { icon: FileText, title: "UAE Visit Visa", desc: "Fast and reliable UAE visit visa processing for 30, 60, and 90 days." },
  { icon: RefreshCw, title: "UAE Visa Change", desc: "Hassle-free visa status change and extension services for UAE residents." },
  { icon: Moon, title: "Umrah Packages", desc: "Specially curated spiritual Umrah journeys with premium hotel stays and guidance." },
  { icon: Palmtree, title: "Tour Packages", desc: "Exciting local and international tour packages for individuals and groups." },
  { icon: Hotel, title: "Hotel Booking", desc: "Luxury and budget accommodations worldwide with exclusive discounts." },
  { icon: Briefcase, title: "Holiday Packages", desc: "Customized domestic and international holiday tours for families and corporate groups." },
  { icon: Ticket, title: "Dummy Hotel Booking", desc: "Confirmed dummy hotel bookings for visa application purposes." },
];

export default function ServicesPage() {
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
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tight">Our Services</h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Comprehensive travel management solutions tailored to your needs. From flight bookings to visa assistance, we handle it all with precision.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] border border-white rounded-full"></div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-12 rounded-xl border border-gray-50 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-lg flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <s.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-10 font-light text-sm">{s.desc}</p>
                <Link 
                  to="/contact" 
                  className="flex items-center gap-3 text-gold font-bold hover:gap-5 transition-all text-xs uppercase tracking-widest"
                >
                  Enquiry Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl mx-auto">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Get in Touch</span>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-primary mb-8 tracking-tight">Need a Custom Travel Solution?</h2>
          <p className="text-gray-500 text-lg mb-12 font-light leading-relaxed">
            Our travel consultants are ready to help you plan your next journey. Contact us today for a personalized quote.
          </p>
          <Link to="/contact" className="btn-primary px-16 py-6 text-sm uppercase tracking-widest">
            Contact Now
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
