import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { motion } from "motion/react";
import { CheckCircle2, FileText, Shield, AlertCircle, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const visaOptions = [
  {
    title: "30 Days Visa",
    desc: "Perfect for short visits and business trips.",
    price: "Best Value",
    validity: "30 Days",
    idealFor: "Short visits",
    cardTint: "from-blue-50/90 via-white to-sky-50/80 border-blue-100"
  },
  {
    title: "60 Days Visa",
    desc: "Ideal for longer vacations and family visits.",
    price: "Recommended",
    validity: "60 Days",
    idealFor: "Family visits",
    cardTint: "from-orange-50/90 via-white to-amber-50/80 border-orange-100"
  },
  {
    title: "Multiple Entry Visa",
    desc: "Best for frequent travelers to the UAE.",
    price: "Premium",
    validity: "Long Term",
    idealFor: "Business trips",
    cardTint: "from-emerald-50/90 via-white to-teal-50/80 border-emerald-100"
  },
  {
    title: "Visa Change Service",
    desc: "Extend your stay without leaving the country.",
    price: "Fast Service",
    validity: "Flexible",
    idealFor: "Stay extensions",
    cardTint: "from-violet-50/90 via-white to-fuchsia-50/80 border-violet-100"
  },
];

const requirements = [
  { icon: FileText, title: "Passport Copy", desc: "Clear color scan of the passport first and last page (valid for 6 months)." },
  { icon: Users, title: "Photograph", desc: "Recent passport-sized color photo with a white background." },
  { icon: Globe, title: "National ID", desc: "Copy of your national ID card (for specific nationalities)." },
  { icon: Shield, title: "Insurance", desc: "Travel insurance included seamlessly with our visa packages." },
];

export default function VisaPage() {
  return (
    <PageWrapper>
      <SEO
        title="UAE Visit Visa & Visa Change Services | SARA TRAVELS Ajman"
        description="Fast 30-day & 60-day UAE visit visas, multiple entry visas, A2A and in-country visa change in 24-48 hours with SARA TRAVELS Ajman."
        keywords="UAE visit visa, 30 days Dubai visa, 60 days UAE visa, visa change UAE, A2A visa change Ajman"
        path="/visa"
        structuredData={{
          "@type": "Service",
          "serviceType": "UAE Visit Visa & Visa Change Services",
          "provider": { "@type": "TravelAgency", "name": "SARA TRAVELS" },
          "areaServed": { "@type": "Country", "name": "United Arab Emirates" }
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24 bg-gradient-to-br from-[#0d3b66] via-primary to-[#135a9a] overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-25"
        >
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80" alt="Dubai UAE skyline" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/45 to-transparent" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="hidden sm:block absolute -right-24 -top-24 text-white/10 pointer-events-none"
        >
          <Globe size={360} />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -left-24 w-72 sm:w-80 h-72 sm:h-80 bg-secondary/35 rounded-full blur-3xl pointer-events-none"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm mb-5 uppercase tracking-widest">
              <Globe size={14} className="text-secondary" />
              Global Mobility
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              UAE <br />
              <span className="text-secondary italic font-serif">Visa Services.</span>
            </h1>
            <p className="text-base sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              Fast, reliable, and hassle-free UAE visit visa processing and visa change services for all nationalities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">Visa Options</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-4 leading-tight">
              Choose Your Access
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {visaOptions.map((visa, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className={`group p-7 sm:p-9 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br ${visa.cardTint} border hover:shadow-2xl transition-all duration-500 flex flex-col justify-between text-center sm:text-left`}
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">{visa.title}</h3>
                  <p className="text-secondary font-bold text-sm mb-6">{visa.price}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center py-2.5 border-b border-gray-200/70">
                      <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Processing</span>
                      <span className="text-primary text-xs font-bold">24-48 Hours</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 border-b border-gray-200/70">
                      <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Validity</span>
                      <span className="text-primary text-xs font-bold">{visa.validity}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-7 leading-relaxed italic">"{visa.desc}"</p>
                </div>

                <Link to="/contact" className="btn-primary w-full min-h-[46px] py-3.5 text-xs active:scale-95">
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">Documentation</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-8 sm:mb-12 leading-tight">
              Required Documents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
              {requirements.map((req, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: i * 0.08 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 sm:gap-5 bg-white sm:bg-transparent p-5 sm:p-0 rounded-2xl border border-gray-100 sm:border-0 shadow-sm sm:shadow-none"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <req.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1.5 text-primary">{req.title}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{req.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="bg-white p-6 sm:p-12 rounded-3xl sm:rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 mb-7 sm:mb-10">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary">Essential Notes</h3>
            </div>
            <ul className="space-y-4 sm:space-y-6">
              {[
                "Visa approval is subject to immigration authorities.",
                "Processing time may vary based on nationality.",
                "Visa fees are non-refundable once applied.",
                "Ensure all documents are clear and readable.",
                "Overstaying your visa will result in heavy fines."
              ].map((note, i) => (
                <li key={i} className="flex items-start gap-3.5 text-gray-600 text-sm sm:text-base">
                  <CheckCircle2 size={20} className="text-secondary mt-0.5 shrink-0" />
                  <p className="font-medium">{note}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Visa Change */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#0e3f6e] via-primary to-[#155a96] rounded-3xl sm:rounded-[3rem] p-6 sm:p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
              <div className="text-center lg:text-left">
                <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6 block">Status Transition</span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 sm:mb-8 leading-tight">
                  Visa <br />
                  <span className="text-secondary italic font-serif">Change.</span>
                </h2>
                <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  The most convenient visa change services in the UAE, handled with speed and accuracy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 text-center sm:text-left">
                  <div className="bg-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-white/15">
                    <h4 className="text-lg sm:text-xl font-bold mb-2.5 text-secondary">A2A Change</h4>
                    <p className="text-white/75 text-sm leading-relaxed">Fly to a nearby destination and return on a new visa the same day.</p>
                  </div>
                  <div className="bg-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-white/15">
                    <h4 className="text-lg sm:text-xl font-bold mb-2.5 text-secondary">In-Country</h4>
                    <p className="text-white/75 text-sm leading-relaxed">Change your visa status without leaving the UAE. Fast and hassle-free.</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&h=800&q=80"
                  alt="Visa Change Dubai"
                  className="rounded-3xl sm:rounded-[3rem] shadow-2xl w-full h-[300px] sm:h-[420px] lg:h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="bg-white p-8 sm:p-12 md:p-20 rounded-3xl sm:rounded-[3rem] text-center shadow-2xl border border-gray-100 relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-6 relative z-10">
              Ready to <br />
              <span className="text-secondary italic font-serif">Apply?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-8 sm:mb-12 relative z-10">
              Experience fast, reliable UAE visa processing. Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center relative z-10">
              <Link to="/contact" className="btn-primary px-10 py-4 sm:px-12 sm:py-5">Apply Now</Link>
              <a href="https://wa.me/971567717978" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full font-semibold px-10 py-4 sm:px-12 sm:py-5 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
