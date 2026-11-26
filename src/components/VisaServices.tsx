import { motion } from "motion/react";
import { CheckCircle, FileText, Clock, Shield } from "lucide-react";

const visaOptions = [
  { title: "30 Days Visa", desc: "Perfect for short visits and business trips." },
  { title: "60 Days Visa", desc: "Ideal for longer stays and family visits." },
  { title: "Multiple Entry Visa", desc: "Convenient for frequent travelers to UAE." },
];

const requirements = [
  "Passport copy (valid for at least 6 months)",
  "Passport size photograph (white background)",
  "Basic personal details",
];

export default function VisaServices() {
  return (
    <section id="visa" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Visa Services</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-8 leading-tight">
              UAE Visit Visa <br />
              <span className="text-primary">Made Easy</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Get your UAE visit visa processed quickly with minimal documentation. We offer a high approval success rate and professional assistance at every step.
            </p>

            <div className="space-y-4 mb-10">
              {visaOptions.map((opt, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="bg-primary text-white p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{opt.title}</h4>
                    <p className="text-sm text-gray-500">{opt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Clock className="text-primary w-6 h-6" />
                <span className="font-bold text-gray-700">Fast Processing</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-primary w-6 h-6" />
                <span className="font-bold text-gray-700">High Success Rate</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl border-primary/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileText className="text-primary" /> Required Documents
              </h3>
              <ul className="space-y-4 mb-8">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {req}
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-sm text-primary font-bold mb-2 uppercase tracking-wider">Processing Time</p>
                <p className="text-gray-700">Fast and efficient service with express options available for urgent requirements.</p>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold mt-8 shadow-lg hover:shadow-primary/30 transition-all">
                Apply for Visa Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
