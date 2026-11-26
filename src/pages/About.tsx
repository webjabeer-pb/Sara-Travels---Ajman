import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { motion } from "motion/react";
import { Target, Eye, Heart, CheckCircle2, Award, Globe, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <PageWrapper>
      <SEO
        title="About SARA TRAVELS | 10+ Years Travel Experts in Ajman, UAE"
        description="Discover SARA TRAVELS in Ajman, UAE. Over 10 years of trusted experience serving 15,000+ travelers across 50+ destinations with visas, flights & Umrah."
        keywords="About Sara Travels, Ajman travel agency, trusted travel partner UAE, Sara Travels LLC"
        path="/about"
        structuredData={{
          "@type": "AboutPage",
          "name": "About SARA TRAVELS",
          "description": "10+ years of trusted travel excellence in Ajman, UAE."
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24 bg-gradient-to-br from-[#0f3c68] via-primary to-[#155a96] overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-25"
        >
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80" alt="Scenic travel road landscape" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/40 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-sky-300/35 rounded-full blur-3xl pointer-events-none"
        />
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.12 }}
              className="inline-block px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm mb-5 uppercase tracking-widest"
            >
              The SARA Legacy
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Experience the World <br />
              <span className="text-secondary italic font-serif">with Confidence.</span>
            </h1>
            <p className="text-base sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              SARA TRAVELS is a trusted travel service provider in Ajman, UAE, offering comprehensive travel solutions for individuals, families, and businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&h=1000&q=80"
              alt="Our Story - A Journey Built on Trust"
              className="rounded-3xl sm:rounded-[3rem] shadow-2xl w-full h-[360px] sm:h-[480px] lg:h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 right-4 sm:-bottom-8 sm:-right-8 bg-gradient-to-br from-secondary to-amber-500 text-white p-5 sm:p-8 lg:p-10 rounded-3xl sm:rounded-[2.5rem] shadow-2xl border-4 border-white text-center"
            >
              <span className="block text-3xl sm:text-5xl font-bold mb-1">10+</span>
              <span className="text-[11px] sm:text-sm font-bold uppercase tracking-widest">Years of Trust</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-xs sm:text-sm">Our Story</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-6 sm:mb-8 leading-tight">
              A Journey Built on <br /> Trust and Excellence
            </h2>
            <div className="space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                Our journey began with a simple goal — to provide reliable and affordable travel services. Over time, we have built strong relationships with clients by delivering consistent and quality service.
              </p>
              <p>
                SARA TRAVELS has evolved into a cornerstone of the UAE's travel landscape. Our journey is paved with the trust of thousands who seek more than just a destination.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3.5 sm:gap-8 mt-8 sm:mt-12 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileTap={{ scale: 0.97 }}
                className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 shadow-sm"
              >
                <h4 className="text-2xl sm:text-3xl font-bold text-primary mb-1">15,000+</h4>
                <p className="text-gray-500 text-[11px] sm:text-sm font-bold uppercase tracking-wider">Happy Clients</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.08 }}
                whileTap={{ scale: 0.97 }}
                className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 shadow-sm"
              >
                <h4 className="text-2xl sm:text-3xl font-bold text-secondary mb-1">50+</h4>
                <p className="text-gray-500 text-[11px] sm:text-sm font-bold uppercase tracking-wider">Destinations</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To provide high-quality travel services that meet customer expectations and ensure satisfaction.",
                cardStyle: "bg-gradient-to-br from-blue-50/90 via-white to-sky-50/80 border-blue-100 hover:border-blue-300 hover:from-blue-100/80 hover:to-sky-100/60 hover:shadow-blue-200/60",
                iconStyle: "bg-blue-100/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
                titleStyle: "text-primary group-hover:text-blue-700"
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To become a leading travel agency recognized for excellence, reliability, and innovation.",
                cardStyle: "bg-gradient-to-br from-orange-50/90 via-white to-amber-50/80 border-orange-100 hover:border-orange-300 hover:from-orange-100/80 hover:to-amber-100/60 hover:shadow-orange-200/60",
                iconStyle: "bg-orange-100/80 text-secondary group-hover:bg-secondary group-hover:text-white",
                titleStyle: "text-primary group-hover:text-orange-700"
              },
              {
                icon: Heart,
                title: "Our Values",
                desc: "Integrity, Transparency, Customer Commitment, and Excellence in Service.",
                cardStyle: "bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/80 border-emerald-100 hover:border-emerald-300 hover:from-emerald-100/80 hover:to-teal-100/60 hover:shadow-emerald-200/60",
                iconStyle: "bg-emerald-100/80 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
                titleStyle: "text-primary group-hover:text-emerald-700"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group p-7 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[2.5rem] border shadow-xl shadow-gray-200/50 text-center transition-all duration-500 ${item.cardStyle}`}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm ${item.iconStyle}`}>
                  <item.icon size={34} />
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors duration-300 ${item.titleStyle}`}>{item.title}</h3>
                <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base">"{item.desc}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-b from-white via-blue-50/40 to-orange-50/30 relative overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
          >
            <span className="inline-block px-5 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-secondary font-bold uppercase tracking-widest text-xs mb-4">
              Our Edge
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-2 mb-4 leading-tight">
              Why We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-emerald-500 bg-[length:200%_auto] animate-gradient-x">
                Stand Out
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Award,
                title: "Personalized Solutions",
                desc: "Travel plans tailored to your specific goals and budget.",
                cardBg: "from-blue-50 to-sky-100/70 border-blue-200/70 hover:shadow-blue-200/60",
                iconBg: "from-blue-600 to-cyan-500 shadow-blue-500/30",
                accentBar: "from-blue-600 to-cyan-400",
                titleColor: "text-blue-900"
              },
              {
                icon: Globe,
                title: "Fast Processing",
                desc: "Quick and efficient visa and ticket confirmations.",
                cardBg: "from-orange-50 to-amber-100/70 border-orange-200/70 hover:shadow-orange-200/60",
                iconBg: "from-orange-500 to-amber-500 shadow-orange-500/30",
                accentBar: "from-orange-500 to-amber-400",
                titleColor: "text-orange-950"
              },
              {
                icon: ShieldCheck,
                title: "Strong Relationships",
                desc: "Built on trust and consistent quality service.",
                cardBg: "from-emerald-50 to-teal-100/70 border-emerald-200/70 hover:shadow-emerald-200/60",
                iconBg: "from-emerald-500 to-teal-500 shadow-emerald-500/30",
                accentBar: "from-emerald-500 to-teal-400",
                titleColor: "text-emerald-950"
              },
              {
                icon: CheckCircle2,
                title: "Competitive Pricing",
                desc: "Best value for your money with no hidden costs.",
                cardBg: "from-violet-50 to-fuchsia-100/70 border-violet-200/70 hover:shadow-violet-200/60",
                iconBg: "from-violet-600 to-fuchsia-500 shadow-violet-500/30",
                accentBar: "from-violet-600 to-fuchsia-400",
                titleColor: "text-violet-950"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
                whileHover={{ y: -10, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative overflow-hidden bg-gradient-to-br ${item.cardBg} p-7 sm:p-9 rounded-3xl border shadow-lg hover:shadow-2xl transition-all duration-500 text-center sm:text-left`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accentBar} transform origin-left sm:scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center mx-auto sm:mx-0 mb-5 sm:mb-6 text-white shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}
                >
                  <item.icon size={28} />
                </motion.div>
                <h4 className={`text-lg sm:text-xl font-bold ${item.titleColor} mb-3`}>{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
