import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
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
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tight">Contact Us</h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              We are here to help you plan your next journey. Contact us today for a personalized quote or any travel-related queries.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] border border-white rounded-full"></div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Info Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-12"
            >
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary leading-tight tracking-tight">Let's Plan Your <br /> Next Journey</h2>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                Our team of travel consultants is ready to assist you 24/7. Whether you're looking for a quick visa change or a luxury holiday, we are your one-stop destination for all travel needs.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, title: "Call Us", info: ["+971 56 771 7978"] },
                  { icon: Mail, title: "Email Us", info: ["info@saratravels.com"] },
                  { icon: MapPin, title: "Visit Us", info: ["SARA TRAVELS LLC, Ajman, UAE"], href: "https://maps.app.goo.gl/uGQMnjdtXVWGrQYT9" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="bg-primary/5 p-4 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">{item.title}</h4>
                      {item.info.map((line, j) => (
                        item.href ? (
                          <a key={j} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary font-light text-sm block">{line}</a>
                        ) : (
                          <p key={j} className="text-gray-500 font-light text-sm">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8">
                <a 
                  href="https://wa.me/971567717978" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-lg font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-[#25D366]/30 transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>
            
            {/* Form Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="bg-gray-50 p-12 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-display font-extrabold text-primary mb-10 tracking-tight">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="Muhammad"
                        className="w-full px-6 py-4 rounded-lg bg-white border border-gray-200 focus:border-primary outline-none transition-all text-sm font-light"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+971 56 771 7978"
                        className="w-full px-6 py-4 rounded-lg bg-white border border-gray-200 focus:border-primary outline-none transition-all text-sm font-light"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 rounded-lg bg-white border border-gray-200 focus:border-primary outline-none transition-all text-sm font-light"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Select Service</label>
                    <select className="w-full px-6 py-4 rounded-lg bg-white border border-gray-200 focus:border-primary outline-none transition-all appearance-none text-sm font-light">
                      <option>Flight Booking</option>
                      <option>UAE Visa Services</option>
                      <option>Umrah Package</option>
                      <option>Holiday Package</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Your Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your travel plans..."
                      className="w-full px-6 py-4 rounded-lg bg-white border border-gray-200 focus:border-primary outline-none transition-all resize-none text-sm font-light"
                    ></textarea>
                  </div>
                  
                  <button className="w-full bg-primary text-white py-5 rounded-lg font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-3">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
          
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 h-[500px] rounded-xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <iframe
              title="SARA TRAVELS LLC Ajman Location"
              src="https://maps.google.com/maps?q=25.4033779,55.4425381&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
