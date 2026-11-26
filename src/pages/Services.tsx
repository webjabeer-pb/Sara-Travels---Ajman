import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { motion } from "motion/react";
import { Plane, FileText, RefreshCw, Moon, Palmtree, Hotel, Briefcase, Ticket, Check, ArrowRight, Search, CreditCard, Send } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Plane,
    title: "Flight Ticket Booking",
    desc: "We provide affordable flight tickets for all destinations worldwide. Our partnerships with leading airlines allow us to offer competitive prices.",
    features: ["Global Airlines", "Best Deals", "Flexible Options", "24/7 Support"],
    cardBg: "from-blue-50/80 via-white to-sky-50/70 border-blue-100",
    iconBg: "from-blue-600 to-cyan-500"
  },
  {
    icon: FileText,
    title: "UAE Visit Visa",
    desc: "We handle complete visa processing with quick approvals and minimal documentation requirements for 30 and 60 days.",
    features: ["30/60 Days", "Fast Processing", "Quick Approval", "Minimal Docs"],
    cardBg: "from-orange-50/80 via-white to-amber-50/70 border-orange-100",
    iconBg: "from-orange-500 to-amber-500"
  },
  {
    icon: RefreshCw,
    title: "UAE Visa Change",
    desc: "Our visa change services are fast and convenient, helping you extend your stay without stress via A2A or In-country.",
    features: ["Quick Extension", "In-country Change", "A2A Service", "Hassle-Free"],
    cardBg: "from-emerald-50/80 via-white to-teal-50/70 border-emerald-100",
    iconBg: "from-emerald-500 to-teal-500"
  },
  {
    icon: Moon,
    title: "Umrah Packages",
    desc: "We provide complete Umrah travel arrangements including visa, accommodation, and transportation for a peaceful journey.",
    features: ["Visa Included", "Haram Proximity", "Transportation", "Guided Support"],
    cardBg: "from-teal-50/80 via-white to-cyan-50/70 border-teal-100",
    iconBg: "from-teal-600 to-emerald-500"
  },
  {
    icon: Palmtree,
    title: "Tour Packages",
    desc: "Explore global destinations with our customized tour packages designed for comfort and enjoyment.",
    features: ["Customized Plans", "Local Experts", "Budget Friendly", "All-Inclusive"],
    cardBg: "from-violet-50/80 via-white to-fuchsia-50/70 border-violet-100",
    iconBg: "from-violet-600 to-fuchsia-500"
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    desc: "We offer a wide range of hotel options worldwide to suit your budget and preferences with instant confirmation.",
    features: ["Best Options", "Global Reach", "Affordable Rates", "Comfort Guaranteed"],
    cardBg: "from-rose-50/80 via-white to-pink-50/70 border-rose-100",
    iconBg: "from-rose-500 to-pink-500"
  },
  {
    icon: Briefcase,
    title: "Holiday Packages",
    desc: "We design personalized holiday packages that match your travel goals and budget for families and couples.",
    features: ["Tailored Plans", "Family Friendly", "Honeymoon Specials", "Group Tours"],
    cardBg: "from-indigo-50/80 via-white to-blue-50/70 border-indigo-100",
    iconBg: "from-indigo-600 to-blue-500"
  },
  {
    icon: Ticket,
    title: "Dummy Booking",
    desc: "Quick and reliable dummy bookings for visa application purposes, verifiable and delivered instantly.",
    features: ["Verifiable", "Instant Delivery", "Visa Support", "Reliable"],
    cardBg: "from-amber-50/80 via-white to-yellow-50/70 border-amber-100",
    iconBg: "from-amber-500 to-orange-500"
  },
];

const processSteps = [
  { icon: Search, title: "Consultation", desc: "Discuss your travel needs with our expert consultants." },
  { icon: FileText, title: "Documentation", desc: "Submit the required documents for visas or bookings." },
  { icon: CreditCard, title: "Secure Payment", desc: "Make payments through our secure and flexible channels." },
  { icon: Send, title: "Delivery", desc: "Receive your tickets, visas, or vouchers instantly." },
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <SEO
        title="Travel Services in Ajman, UAE | Flights, Hotels & Visas"
        description="Complete travel services by SARA TRAVELS: worldwide flight ticket bookings, UAE visit visas, visa change, hotel stays, Umrah & dummy tickets."
        keywords="Travel services Ajman, flight booking UAE, hotel booking Ajman, UAE visa change, dummy ticket UAE"
        path="/services"
        structuredData={{
          "@type": "Service",
          "serviceType": "Travel Agency Services",
          "provider": { "@type": "TravelAgency", "name": "SARA TRAVELS" },
          "areaServed": { "@type": "Country", "name": "United Arab Emirates" }
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24 bg-gradient-to-br from-[#0f355c] via-primary to-[#1e5fa8] overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-25"
        >
          <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1920&q=80" alt="Airport travel services" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/90" />
        <motion.div
          initial={{ x: "-20%", y: "20%" }}
          animate={{ x: "120%", y: "-10%" }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-0 text-white/15 pointer-events-none"
        >
          <Plane size={140} className="rotate-12" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 right-10 w-72 sm:w-80 h-72 sm:h-80 bg-secondary/35 rounded-full blur-3xl pointer-events-none"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm mb-5 uppercase tracking-widest">
              <Plane size={14} className="text-secondary" />
              Our Expertise
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Complete Travel <br />
              <span className="text-secondary italic font-serif">Solutions.</span>
            </h1>
            <p className="text-base sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              From global expeditions to spiritual pilgrimages, we handle every detail with professional care and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className={`group p-7 sm:p-8 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br ${s.cardBg} border hover:shadow-2xl transition-all duration-500 flex flex-col justify-between text-center sm:text-left`}
              >
                <div>
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${s.iconBg} flex items-center justify-center mx-auto sm:mx-0 mb-6 sm:mb-8 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <s.icon size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">{s.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{s.desc}</p>
                  <ul className="space-y-2.5 mb-7 inline-flex flex-col items-start mx-auto sm:mx-0">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        <Check size={14} className="text-secondary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="text-primary font-bold text-sm inline-flex items-center justify-center sm:justify-start gap-2 hover:text-secondary transition-colors min-h-[44px] px-5 sm:px-0 rounded-full sm:rounded-none bg-white/80 sm:bg-transparent border border-primary/10 sm:border-0 shadow-sm sm:shadow-none mx-auto sm:mx-0"
                >
                  Inquire Now <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">The Workflow</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-4 leading-tight">
              How It Works
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">Our simple 4-step process to get you ready for your next big adventure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-8 sm:p-10 rounded-3xl sm:rounded-[2.5rem] text-center shadow-lg shadow-gray-200/50 relative group border border-gray-100"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                  0{i + 1}
                </div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 sm:mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                  <step.icon size={34} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">The Difference</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-6 sm:mb-8 leading-tight">
              Why Choose SARA TRAVELS
            </h2>
            <div className="space-y-4 sm:space-y-6 max-w-md mx-auto lg:mx-0 text-left">
              {[
                "Direct partnerships with major airlines for best rates.",
                "Expert visa consultants with high success rates.",
                "24/7 customer support for all your travel emergencies.",
                "Transparent pricing with no hidden charges.",
                "Personalized attention to every booking."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-secondary" />
                  </div>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 sm:mt-12 flex justify-center lg:justify-start">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Get Started Today
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&h=800&q=80"
              alt="Service Excellence Dubai Skyline"
              className="rounded-3xl sm:rounded-[3rem] shadow-2xl w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 left-4 sm:-bottom-8 sm:-left-8 bg-white p-5 sm:p-8 lg:p-10 rounded-3xl sm:rounded-[2.5rem] shadow-2xl border border-gray-100 text-center"
            >
              <p className="text-secondary font-bold text-3xl sm:text-5xl mb-1 leading-none">99%</p>
              <p className="text-gray-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Satisfaction Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
