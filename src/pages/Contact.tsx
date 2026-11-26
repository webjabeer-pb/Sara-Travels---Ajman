import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, Send, Headphones, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <PageWrapper>
      <SEO
        title="Contact SARA TRAVELS Ajman | Call & WhatsApp +971 56 771 7978"
        description="Contact SARA TRAVELS LLC in Ajman, UAE. Call or WhatsApp +971 56 771 7978 for flight tickets, UAE visit visas, Umrah & customized tour quotes."
        keywords="Contact Sara Travels, Sara Travels Ajman phone, Sara Travels WhatsApp, travel agency Ajman location"
        path="/contact"
        structuredData={{
          "@type": "ContactPage",
          "name": "Contact SARA TRAVELS",
          "description": "Reach SARA TRAVELS LLC in Ajman by phone, WhatsApp, or office visit."
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24 bg-gradient-to-br from-[#0e3f6e] via-primary to-[#1a68b3] overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-25"
        >
          <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1920&q=80" alt="UAE Skyline" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/45 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-10 w-56 sm:w-64 h-56 sm:h-64 bg-secondary/35 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 right-10 w-64 sm:w-80 h-64 sm:h-80 bg-cyan-300/35 rounded-full blur-3xl pointer-events-none"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm mb-5 uppercase tracking-widest">
              <Headphones size={14} className="text-secondary" />
              Concierge Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Contact <br />
              <span className="text-secondary italic font-serif">Us.</span>
            </h1>
            <p className="text-base sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              We are here to help you with all your travel needs. Get in touch with us today for a free quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Info Side */}
            <div className="lg:col-span-5">
              <div className="text-center lg:text-left">
                <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">Contact Information</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-8 sm:mb-12 leading-tight">
                  Personal Assistance
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-8 mb-10 sm:mb-14">
                {[
                  { icon: Phone, title: "Phone & WhatsApp", detail: "+971 56 771 7978", sub: "Available 24/7", href: "tel:+971567717978" },
                  { icon: Mail, title: "Email", detail: "info@saratravels.com", sub: "Response within 12h", href: "mailto:info@saratravels.com" },
                  { icon: MapPin, title: "Office Location", detail: "SARA TRAVELS LLC, Ajman", sub: "View on Google Maps →", href: "https://maps.app.goo.gl/uGQMnjdtXVWGrQYT9", external: true },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ delay: i * 0.08 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3 sm:gap-6 group cursor-pointer p-5 sm:p-0 rounded-2xl bg-bg-light sm:bg-transparent border border-gray-100 sm:border-0 shadow-sm sm:shadow-none"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white sm:bg-bg-light flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shrink-0 shadow-sm sm:shadow-none">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{item.title}</h4>
                      <p className="text-base sm:text-xl font-bold text-primary group-hover:text-secondary transition-colors">{item.detail}</p>
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">{item.sub}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Support Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-7 sm:p-10 bg-gradient-to-br from-[#0e3f6e] via-primary to-[#155a96] rounded-3xl sm:rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden text-center lg:text-left"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto lg:mx-0 mb-5 text-secondary">
                    <Headphones size={24} />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-3">24/7 Customer Support</h4>
                  <p className="text-white/75 mb-7 leading-relaxed text-sm sm:text-base">
                    Need immediate assistance? Our support team is available around the clock to help you.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                    <a
                      href="tel:+971567717978"
                      className="inline-flex items-center justify-center gap-3 py-3.5 px-7 rounded-full font-semibold text-white bg-secondary hover:bg-white hover:text-primary border-2 border-secondary hover:border-white shadow-lg shadow-black/15 transition-all duration-300 hover:scale-105"
                    >
                      <Phone size={18} /> Call Now
                    </a>
                    <a
                      href="https://wa.me/971567717978"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 py-3.5 px-7 rounded-full font-semibold text-white bg-[#25D366] hover:bg-white hover:text-[#128C7E] border-2 border-[#25D366] hover:border-white shadow-lg shadow-black/15 transition-all duration-300 hover:scale-105"
                    >
                      <MessageCircle size={18} /> WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-bg-light via-sky-50/40 to-orange-50/30 p-6 sm:p-10 md:p-14 rounded-3xl sm:rounded-[3rem] border border-gray-100 shadow-lg"
              >
                <div className="text-center lg:text-left">
                  <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">Inquiry Form</span>
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mt-3 mb-8 sm:mb-10 leading-tight">
                    Plan <br />
                    <span className="text-secondary italic font-serif">Your Journey.</span>
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Muhammad"
                        className="w-full px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl sm:rounded-full bg-white border border-gray-200 focus:border-secondary outline-none transition-all text-base sm:text-sm text-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+971 56 771 7978"
                        className="w-full px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl sm:rounded-full bg-white border border-gray-200 focus:border-secondary outline-none transition-all text-base sm:text-sm text-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl sm:rounded-full bg-white border border-gray-200 focus:border-secondary outline-none transition-all text-base sm:text-sm text-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Your Vision</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your ideal journey..."
                      className="w-full px-5 sm:px-7 py-4 sm:py-5 rounded-2xl sm:rounded-[2rem] bg-white border border-gray-200 focus:border-secondary outline-none transition-all text-base sm:text-sm text-primary resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full min-h-[50px] py-4 sm:py-5 flex items-center justify-center gap-3 active:scale-[0.98]">
                    Send Inquiry <Send size={18} />
                  </button>

                  {formSent && (
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                      Inquiry received! Our Ajman team will reach out shortly, or message us anytime on WhatsApp.
                    </div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 sm:mb-8 text-center sm:text-left">
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-xs">Find Us</span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mt-1">SARA TRAVELS LLC — Ajman</h3>
            </div>
            <a
              href="https://maps.app.goo.gl/uGQMnjdtXVWGrQYT9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 self-center sm:self-auto"
            >
              <MapPin size={18} /> Open in Google Maps
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-[320px] sm:h-[420px] lg:h-[500px] rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white"
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
    </PageWrapper>
  );
}
