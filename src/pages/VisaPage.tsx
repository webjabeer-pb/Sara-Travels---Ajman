import { motion } from "motion/react";
import { Clock, CheckCircle2, ArrowRight, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function VisaPage() {
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
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 block">UAE Entry</span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tight">Visa Services</h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Expert assistance for UAE visit visas and visa change services. We ensure a smooth and fast processing experience for all our clients.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] border border-white rounded-full"></div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary leading-tight tracking-tight">UAE Visit Visa <br /> Services</h2>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                Whether you're visiting family, exploring the wonders of the UAE, or looking for business opportunities, we provide the right visa solutions for you.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "30 Days Visit Visa", desc: "Ideal for short trips and tourism. Fast processing within 24-48 hours." },
                  { icon: Clock, title: "60 Days Visit Visa", desc: "Perfect for longer stays and exploring the UAE in depth." },
                  { icon: RefreshCw, title: "Visa Change Services", desc: "Hassle-free visa status change for those already inside the UAE." }
                ].map((v, i) => (
                  <div key={i} className="flex items-start gap-6 p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                    <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <v.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2 uppercase tracking-wide">{v.title}</h3>
                      <p className="text-gray-500 text-xs font-light leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary p-12 rounded-xl text-white shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Requirements</span>
                <h3 className="text-3xl font-display font-extrabold mb-10 tracking-tight">What You Need</h3>
                <ul className="space-y-6">
                  {[
                    "Clear Passport Copy (Front & Back)",
                    "Passport Size Photograph (White Background)",
                    "Guarantor's Passport & Visa Copy (If applicable)",
                    "Guarantor's Emirates ID Copy (If applicable)",
                    "Confirmed Flight Ticket (Optional but recommended)"
                  ].map((req, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="bg-white/10 p-1 rounded-full">
                        <CheckCircle2 className="text-gold w-4 h-4 shrink-0" />
                      </div>
                      <span className="text-white/70 font-light text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 pt-12 border-t border-white/10">
                  <p className="text-gold font-bold text-[10px] uppercase tracking-widest mb-4">Processing Time</p>
                  <p className="text-3xl font-display font-bold tracking-tight">24 - 48 Working Hours</p>
                </div>
                
                <Link to="/contact" className="mt-12 w-full bg-gold text-primary py-5 rounded-lg font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-gold/90 transition-all flex items-center justify-center gap-3">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* Decorative circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
