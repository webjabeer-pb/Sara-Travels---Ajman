import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Award, Users } from "lucide-react";

export default function AboutPage() {
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
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tight">About SARA TRAVELS</h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Your premier travel partner in Ajman, UAE, dedicated to providing world-class travel solutions with a focus on trust and excellence.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] border border-white rounded-full"></div>
        </div>
      </section>

      {/* Company Intro */}
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
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80" 
                  alt="Travel team" 
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -right-8 bg-gold p-10 rounded-xl shadow-2xl hidden md:block">
                  <p className="text-4xl font-bold text-primary">10+</p>
                  <p className="text-[10px] text-primary/60 font-bold uppercase tracking-widest">Years Experience</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-10"
            >
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary leading-tight tracking-tight">A Legacy of Trust <br /> and Excellence</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                SARA TRAVELS is a leading travel management company based in Ajman, UAE. We specialize in providing comprehensive travel services, including flight bookings, visa assistance, hotel reservations, and customized holiday packages.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Our mission is to simplify travel for our clients by offering personalized services that cater to their unique needs. With a team of experienced travel consultants, we ensure that every journey is smooth, comfortable, and memorable.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                {[
                  "10+ Years Experience",
                  "24/7 Customer Support",
                  "Best Price Guarantee",
                  "Trusted by Thousands"
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

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6 tracking-tight">Why Choose SARA TRAVELS?</h2>
            <p className="text-lg text-gray-500 font-light">We are committed to delivering the highest standards of service in the travel industry.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Reliability", desc: "We provide secure and dependable travel solutions that you can trust for all your journeys." },
              { icon: Award, title: "Excellence", desc: "Our attention to detail and commitment to quality ensures an exceptional travel experience every time." },
              { icon: Users, title: "Customer Focus", desc: "Your satisfaction is our top priority. We go above and beyond to meet and exceed your expectations." }
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center space-y-8 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-lg flex items-center justify-center text-primary mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <v.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary uppercase tracking-wide">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
