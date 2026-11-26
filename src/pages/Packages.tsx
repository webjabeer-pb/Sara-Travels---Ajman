import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { motion } from "motion/react";
import { MapPin, Star, ArrowRight, Check, Plane, Hotel, Utensils, Camera, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    id: 1,
    title: "Dubai Experience Package",
    location: "Dubai, UAE",
    includes: "City Tour & Safari",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&h=600&q=80",
    rating: 4.9,
    duration: "Full Day",
    desc: "Explore luxury shopping, modern attractions, and iconic landmarks.",
    highlights: ["Burj Khalifa Visit", "Desert Safari", "Dhow Cruise", "Luxury Shopping"]
  },
  {
    id: 2,
    title: "Maldives Luxury Package",
    location: "Maldives",
    includes: "All-Inclusive Resort",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&h=600&q=80",
    rating: 5.0,
    duration: "4 Days / 3 Nights",
    desc: "Relax in world-class resorts with breathtaking ocean views.",
    highlights: ["Overwater Villa", "Snorkeling", "Sunset Cruise", "All Meals Included"]
  },
  {
    id: 3,
    title: "Turkey Cultural Tour",
    location: "Istanbul, Turkey",
    includes: "Flights & Hotels",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&h=600&q=80",
    rating: 4.8,
    duration: "6 Days / 5 Nights",
    desc: "Experience rich history, vibrant culture, and scenic beauty.",
    highlights: ["Hagia Sophia Tour", "Bosphorus Cruise", "Cappadocia Balloon", "Local Cuisine"]
  },
  {
    id: 4,
    title: "Umrah Package",
    location: "Saudi Arabia",
    includes: "Visa & VIP Stay",
    image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&h=600&q=80",
    rating: 5.0,
    duration: "Flexible",
    desc: "Complete arrangements for a smooth spiritual journey.",
    highlights: ["Visa Processing", "Near Haram Hotels", "VIP Transport", "Guided Support"]
  },
  {
    id: 5,
    title: "Europe Tour Package",
    location: "Paris / Rome / Swiss",
    includes: "Multi-City Guided",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&h=600&q=80",
    rating: 4.9,
    duration: "10 Days / 9 Nights",
    desc: "Discover famous cities, landmarks, and cultural experiences.",
    highlights: ["Eiffel Tower", "Colosseum", "Swiss Alps", "Guided City Tours"]
  },
  {
    id: 6,
    title: "Family Holiday Packages",
    location: "Global Destinations",
    includes: "Tailored Itinerary",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&h=600&q=80",
    rating: 4.8,
    duration: "Flexible",
    desc: "Perfectly planned vacations for families with kids.",
    highlights: ["Kid Friendly", "Spacious Stays", "Activity Centers", "Safety First"]
  },
  {
    id: 7,
    title: "Honeymoon Packages",
    location: "Romantic Destinations",
    includes: "Private Luxury",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&h=600&q=80",
    rating: 5.0,
    duration: "Flexible",
    desc: "Romantic destinations designed for couples.",
    highlights: ["Private Candlelight", "Couple Spas", "Luxury Suites", "Special Decor"]
  },
  {
    id: 8,
    title: "Group Travel Packages",
    location: "Global Hubs",
    includes: "Group Specials",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&h=600&q=80",
    rating: 4.7,
    duration: "Flexible",
    desc: "Affordable packages for group travel and events.",
    highlights: ["Group Discounts", "Shared Transport", "Event Planning", "Team Support"]
  },
];

export default function PackagesPage() {
  const [customSent, setCustomSent] = useState(false);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomSent(true);
  };

  return (
    <PageWrapper>
      <SEO
        title="Holiday & Tour Packages from UAE | SARA TRAVELS Ajman"
        description="Explore Dubai, Maldives, Turkey, Europe, Umrah, family & honeymoon holiday packages curated by SARA TRAVELS Ajman with flights, hotels & tours."
        keywords="Holiday packages UAE, Dubai tour package, Maldives package UAE, Turkey tour Ajman, honeymoon packages UAE"
        path="/packages"
        structuredData={{
          "@type": "ItemList",
          "name": "SARA TRAVELS Tour & Holiday Packages",
          "itemListElement": packages.map((pkg, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "item": {
              "@type": "TouristTrip",
              "name": pkg.title,
              "description": pkg.desc,
              "touristType": pkg.includes
            }
          }))
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24 bg-gradient-to-br from-[#0e4d82] via-primary to-[#1d6aa8] overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.07, 1], x: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-30"
        >
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80" alt="Tropical Beach Vacation" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/50 to-secondary/35" />
        <motion.div
          animate={{ y: [0, -25, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 right-12 w-64 sm:w-72 h-64 sm:h-72 bg-secondary/35 rounded-full blur-3xl pointer-events-none"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm mb-5 uppercase tracking-widest">
              <Sparkles size={14} className="text-secondary" />
              Curated Collections
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Holiday <br />
              <span className="text-secondary italic font-serif">Packages.</span>
            </h1>
            <p className="text-base sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              Handpicked travel experiences designed to provide the ultimate harmony of luxury and discovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileTap={{ scale: 0.98 }}
                className="group card-modern !rounded-3xl sm:!rounded-[2.5rem] bg-gradient-to-b from-white to-sky-50/40"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Star size={14} className="text-secondary fill-secondary" />
                    <span className="text-xs font-bold text-primary">{p.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-primary/85 backdrop-blur-sm px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                    {p.duration}
                  </div>
                </div>
                <div className="p-6 sm:p-8 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-secondary text-[10px] font-bold uppercase tracking-widest mb-2.5">
                    <MapPin size={14} /> {p.location}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-5 line-clamp-2">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-6 sm:mb-8">
                    {p.highlights.slice(0, 3).map((h, j) => (
                      <span key={j} className="bg-bg-light px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-gray-500 border border-gray-100">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 pt-5 border-t border-gray-100">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
                      <Check size={16} className="text-secondary shrink-0" />
                      <span>{p.includes}</span>
                    </div>
                    <Link to="/contact" className="btn-primary w-full sm:w-auto min-h-[44px] !py-2.5 !px-5 text-xs inline-flex items-center justify-center gap-1.5 shrink-0 active:scale-95">
                      <span>Inquire Now</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Inclusions */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">The Standard</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-4 leading-tight">
              Premium Inclusions
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">Every journey we curate includes these essential pillars of excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {[
              { icon: Plane, title: "Return Flights", desc: "Economy or Business class travel", tint: "from-blue-50 to-sky-50 border-blue-100", iconCol: "text-blue-600 bg-blue-100/70" },
              { icon: Hotel, title: "Accommodation", desc: "Handpicked 4 & 5 star luxury hotels", tint: "from-orange-50 to-amber-50 border-orange-100", iconCol: "text-orange-600 bg-orange-100/70" },
              { icon: Utensils, title: "Daily Breakfast", desc: "Curated local & global gastronomy", tint: "from-emerald-50 to-teal-50 border-emerald-100", iconCol: "text-emerald-600 bg-emerald-100/70" },
              { icon: Camera, title: "Sightseeing", desc: "Private guided tours & priority entry", tint: "from-violet-50 to-fuchsia-50 border-violet-100", iconCol: "text-violet-600 bg-violet-100/70" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className={`bg-gradient-to-br ${item.tint} border p-7 sm:p-9 rounded-3xl sm:rounded-[2.5rem] text-center shadow-lg shadow-gray-200/40 group transition-shadow hover:shadow-xl`}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.iconCol} flex items-center justify-center mx-auto mb-5 sm:mb-7 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}>
                  <item.icon size={28} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Trip Request */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#0e3f6e] via-primary to-[#155a96] rounded-3xl sm:rounded-[3rem] p-6 sm:p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
              <div className="text-center lg:text-left">
                <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6 block">Bespoke Travel</span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 sm:mb-8 leading-tight">
                  Dream <br />
                  <span className="text-secondary italic font-serif">Itinerary.</span>
                </h2>
                <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Tell us where your heart desires to go, and our travel architects will craft a journey unique to you.
                </p>
                <div className="space-y-5 sm:space-y-8 max-w-sm mx-auto lg:mx-0 text-left">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl">Any Destination</h4>
                      <p className="text-white/60 text-xs sm:text-sm">We cover over 50+ popular destinations worldwide.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <Star size={22} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl">Any Budget</h4>
                      <p className="text-white/60 text-xs sm:text-sm">From essential comfort to ultra-luxury.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 sm:mb-8 text-center lg:text-left">Request Custom Itinerary</h3>
                <form onSubmit={handleCustomSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Destination</label>
                      <input required type="text" placeholder="Where to?" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 text-base sm:text-sm outline-none focus:border-primary transition-colors text-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Travelers</label>
                      <input required type="text" placeholder="How many?" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 text-base sm:text-sm outline-none focus:border-primary transition-colors text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Preferred Dates</label>
                    <input type="text" placeholder="When?" className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 text-base sm:text-sm outline-none focus:border-primary transition-colors text-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your Vision</label>
                    <textarea placeholder="Tell us about your dream trip..." rows={3} className="w-full bg-bg-light border border-gray-200 rounded-xl px-4 py-3 text-base sm:text-sm outline-none focus:border-primary transition-colors text-primary resize-none"></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full min-h-[48px] py-4 active:scale-[0.98]">
                    Send Request
                  </button>
                  {customSent && (
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      Thank you! Our team will contact you shortly or reach us on WhatsApp (+971 56 771 7978).
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
