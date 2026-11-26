import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { motion } from "motion/react";
import { Moon, Hotel, Bus, ShieldCheck, Check, MapPin, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const umrahFeatures = [
  { icon: ShieldCheck, title: "Visa Processing", desc: "Hassle-free Umrah visa arrangements for all nationalities.", tint: "from-blue-50 to-sky-50 border-blue-100" },
  { icon: Hotel, title: "Hotel Booking", desc: "Premium accommodations within walking distance of the Haram.", tint: "from-emerald-50 to-teal-50 border-emerald-100" },
  { icon: Bus, title: "Transportation", desc: "Comfortable air-conditioned transfers between Makkah and Madinah.", tint: "from-orange-50 to-amber-50 border-orange-100" },
  { icon: Moon, title: "Guided Support", desc: "Expert assistance and guidance throughout your spiritual journey.", tint: "from-violet-50 to-indigo-50 border-violet-100" },
];

const packages = [
  {
    name: "Economy",
    price: "Essential Value",
    desc: "Budget-friendly packages with essential services.",
    hotel: "3 Star Hotels",
    distance: "600m from Haram",
    features: ["Standard Hotels", "Group Transport", "Visa Processing", "24/7 Support"]
  },
  {
    name: "Standard",
    price: "Recommended",
    desc: "Comfortable stays with better proximity to Haram.",
    hotel: "4 Star Hotels",
    distance: "300m from Haram",
    features: ["4-Star Hotels", "Private Transport", "Ziyarat Included", "Guided Support"]
  },
  {
    name: "Premium",
    price: "VIP Luxury",
    desc: "VIP experience with luxury hotels and services.",
    hotel: "5 Star Luxury",
    distance: "Haram Front",
    features: ["5-Star Hotels", "VIP Transport", "Personal Guide", "Premium Meals"]
  },
];

const ziyaratPlaces = [
  { name: "Jabal al-Noor", desc: "The mountain where the first revelation was received." },
  { name: "Mount Arafat", desc: "The site of the Prophet's (PBUH) final sermon." },
  { name: "Masjid Quba", desc: "The first mosque built in Islamic history." },
  { name: "Jannat al-Baqi", desc: "The historic cemetery of Madinah." },
];

export default function UmrahPage() {
  return (
    <PageWrapper>
      <SEO
        title="Umrah Packages from Ajman, UAE | SARA TRAVELS"
        description="Book Economy, Standard & VIP Umrah packages from Ajman & UAE with SARA TRAVELS. Includes Umrah visa, Haram-proximity hotels, AC transport & guided Ziyarat."
        keywords="Umrah packages UAE, Umrah from Ajman, Makkah Madinah Umrah package, VIP Umrah UAE"
        path="/umrah"
        structuredData={{
          "@type": "Service",
          "serviceType": "Umrah Pilgrimage Packages",
          "provider": { "@type": "TravelAgency", "name": "SARA TRAVELS" },
          "areaServed": { "@type": "Country", "name": "United Arab Emirates" }
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24 bg-gradient-to-br from-[#0e345a] via-primary to-[#155248] overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-30"
        >
          <img src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1920&q=80" alt="Umrah sacred architecture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/45 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-secondary/25 rounded-full blur-3xl pointer-events-none"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm mb-5 uppercase tracking-widest">
              <Moon size={14} className="text-secondary" />
              Sacred Journeys
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Umrah <br />
              <span className="text-secondary italic font-serif">Packages.</span>
            </h1>
            <p className="text-base sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              Complete Umrah travel solutions including visa, hotel, and transportation arrangements designed for your spiritual fulfillment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">Divine Excellence</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-4 leading-tight">
              Our Umrah Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {umrahFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className={`group p-7 sm:p-10 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br ${f.tint} border text-center hover:shadow-2xl transition-all duration-500`}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-6 sm:mb-8 text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <f.icon size={30} />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-primary mb-3">{f.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">Spiritual Tiers</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-4 leading-tight">
              Sacred Journeys
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "rounded-3xl sm:rounded-[3rem] p-7 sm:p-10 lg:p-12 border transition-all duration-500 flex flex-col relative overflow-hidden group",
                  i === 1 ? 'bg-gradient-to-br from-[#0e3f6e] via-primary to-[#155a96] text-white shadow-2xl md:scale-105 z-10 border-primary' : 'bg-white text-primary border-gray-100 shadow-lg'
                )}
              >
                {i === 1 && (
                  <div className="sm:absolute sm:top-6 sm:right-6 self-center sm:self-auto mb-4 sm:mb-0 bg-secondary text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    Most Chosen
                  </div>
                )}

                <div className="mb-7 sm:mb-8 text-center sm:text-left">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-lg font-bold mb-4 text-secondary">{pkg.price}</p>
                  <div className={cn("flex items-center justify-center sm:justify-start gap-2 text-xs font-bold uppercase tracking-widest", i === 1 ? 'text-white/70' : 'text-gray-400')}>
                    <Clock size={14} /> 10 Days Journey
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-9 flex-grow max-w-[240px] mx-auto sm:max-w-none w-full">
                  <div className={cn("flex items-center gap-3.5 sm:gap-4 text-sm font-bold pb-4 border-b", i === 1 ? 'border-white/15' : 'border-gray-100')}>
                    <Hotel size={18} className="text-secondary shrink-0" />
                    <span>{pkg.hotel}</span>
                  </div>
                  <div className={cn("flex items-center gap-3.5 sm:gap-4 text-sm font-bold pb-4 border-b", i === 1 ? 'border-white/15' : 'border-gray-100')}>
                    <MapPin size={18} className="text-secondary shrink-0" />
                    <span>{pkg.distance}</span>
                  </div>
                  <div className="space-y-3 pt-1">
                    {pkg.features.map((feat, j) => (
                      <div key={j} className="flex items-center gap-3 text-sm">
                        <Check size={16} className="text-secondary shrink-0" />
                        <span className={cn(i === 1 ? 'text-white/80' : 'text-gray-500')}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={cn(
                    "inline-flex items-center justify-center rounded-full font-semibold w-full min-h-[48px] py-3.5 transition-all active:scale-95",
                    i === 1
                      ? 'bg-white text-primary hover:bg-secondary hover:text-white shadow-lg'
                      : 'btn-primary'
                  )}
                >
                  Inquire Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ziyarat */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">Historical Tours</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-8 sm:mb-12 leading-tight">
              Guided Ziyarat
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-center sm:text-left">
              {ziyaratPlaces.map((place, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: i * 0.08 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-6 sm:p-8 rounded-3xl sm:rounded-[2rem] bg-bg-light border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-500"
                >
                  <h4 className="font-bold text-lg sm:text-xl mb-2 text-primary">{place.name}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed italic">"{place.desc}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&h=1000&q=80"
              alt="Guided Ziyarat Pilgrimage"
              className="rounded-3xl sm:rounded-[3rem] shadow-2xl w-full h-[340px] sm:h-[460px] lg:h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="hidden md:block absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <BookOpen size={24} />
                </div>
                <h4 className="text-xl font-bold text-primary">Expert Guides</h4>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                Knowledgeable guides providing historical context in multiple languages for a profound experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#0e3f6e] via-primary to-[#155a96] p-8 sm:p-12 md:p-20 rounded-3xl sm:rounded-[3rem] text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 relative z-10">
              Begin Your <br />
              <span className="text-secondary italic font-serif">Journey.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 sm:mb-12 relative z-10">
              Experience a spiritually fulfilling Umrah with our dedicated support and premium arrangements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center relative z-10">
              <Link to="/contact" className="btn-secondary px-10 py-4 sm:px-12 sm:py-5">Inquire Now</Link>
              <a href="https://wa.me/971567717978" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full font-semibold px-10 py-4 sm:px-12 sm:py-5 bg-white/10 border border-white/25 text-white hover:bg-white/20 transition-all">
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
