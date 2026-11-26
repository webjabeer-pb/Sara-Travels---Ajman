import { motion } from "motion/react";
import { CheckCircle, Users, Award, ShieldCheck } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Trusted Agency", desc: "Years of experience in UAE travel market." },
  { icon: Users, title: "Happy Clients", desc: "Thousands of satisfied travelers worldwide." },
  { icon: Award, title: "Premium Service", desc: "Luxury and comfort in every journey." },
  { icon: CheckCircle, title: "Affordable Rates", desc: "Best prices for flights and packages." },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
                alt="Traveler exploring a city"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-primary p-3 rounded-xl">
                  <Award className="text-white w-8 h-8" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">10+</p>
                  <p className="text-sm text-gray-600 font-medium">Years Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">About SARA TRAVELS</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 leading-tight">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              SARA TRAVELS is a leading travel agency based in Ajman, UAE, committed to providing reliable and high-quality travel services. We specialize in flight bookings, visa services, Umrah packages, and customized holidays.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At SARA TRAVELS, we believe travel should be simple, affordable, and stress-free. With years of experience in the travel industry, we provide complete solutions for individuals, families, and businesses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Award className="text-primary w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-900">Our Mission</h4>
                </div>
                <p className="text-sm text-gray-500">To simplify travel by offering efficient, affordable, and customer-focused services.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Award className="text-primary w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-900">Our Vision</h4>
                </div>
                <p className="text-sm text-gray-500">To become one of the most trusted and preferred travel agencies in the UAE and beyond.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl mb-10">
              <h4 className="font-bold text-gray-900 mb-4">Our Values</h4>
              <div className="flex flex-wrap gap-4">
                {["Customer Satisfaction", "Integrity & Transparency", "Professionalism", "Reliability"].map((val) => (
                  <span key={val} className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-primary shadow-sm border border-gray-100">
                    {val}
                  </span>
                ))}
              </div>
            </div>

            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/30 transition-all hover:scale-105">
              Experience the World with Confidence
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
