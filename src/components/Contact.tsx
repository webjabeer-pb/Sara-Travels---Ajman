import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-8 leading-tight">
              Ready to Start Your <br />
              <span className="text-primary">Next Adventure?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Have questions about our packages or need a custom travel plan? Our team of experts is here to help you 24/7.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Call Us</h4>
                  <a href="tel:+971567717978" className="text-gray-600 hover:text-primary transition-colors">+971 56 771 7978</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">info@saratravels.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-2xl">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Visit Us</h4>
                  <a href="https://maps.app.goo.gl/uGQMnjdtXVWGrQYT9" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                    SARA TRAVELS LLC, Ajman, UAE
                  </a>
                  <div className="mt-2 text-sm text-gray-500">
                    <p className="font-bold text-gray-700">Business Hours:</p>
                    <p>Monday – Saturday: 9 AM – 9 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-linear-to-br from-primary to-accent rounded-[2rem] text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MessageCircle className="w-6 h-6" /> Chat with us
              </h4>
              <p className="mb-6 text-blue-100">Get instant answers to your travel queries on WhatsApp.</p>
              <a href="https://wa.me/971567717978" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all inline-flex items-center gap-2">
                Open WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Muhammad"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+971 56 771 7978"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Select Service</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
                    <option>Flight Booking</option>
                    <option>UAE Visa Services</option>
                    <option>Umrah Package</option>
                    <option>Holiday Package</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your travel plans..."
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                
                <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
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
  );
}
