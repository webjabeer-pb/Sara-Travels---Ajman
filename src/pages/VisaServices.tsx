import { Globe, FileText, CheckCircle, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function VisaServices() {
  return (
    <div className="animate-fade-in pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Visa Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Fast, reliable, and transparent visa processing for UAE and beyond.
          </p>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Expert Visa Assistance</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Navigating visa requirements can be complex. At SARA TRAVELS, we simplify the process for you. Whether you're looking for a UAE visit visa, a visa change, or assistance with international visas, our expert team is here to help.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed">
                We handle all the documentation and follow-ups, ensuring a high success rate and fast processing times. Our transparent approach means you're always kept in the loop.
              </p>
              
              <div className="space-y-4">
                {[
                  "UAE Visit Visa (30, 60, 90 Days)",
                  "UAE Visa Change (A2A / B2B)",
                  "International Tourist Visas",
                  "Business Visa Assistance",
                  "Visa Documentation Support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-secondary w-5 h-5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-8">General Requirements</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-primary/5 p-3 rounded-md h-fit">
                    <FileText className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Valid Passport</h4>
                    <p className="text-gray-500 text-sm">Minimum 6 months validity from the date of travel.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-primary/5 p-3 rounded-md h-fit">
                    <Globe className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Photograph</h4>
                    <p className="text-gray-500 text-sm">Recent passport-size photo with white background.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-primary/5 p-3 rounded-md h-fit">
                    <ShieldCheck className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Supporting Documents</h4>
                    <p className="text-gray-500 text-sm">Depending on the visa type and nationality.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processing Time Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Fast & Efficient Processing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-xl bg-white/5">
              <Clock className="text-secondary w-12 h-12 mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-3">UAE Visit Visa</h4>
              <p className="text-gray-400 text-sm">24 - 48 Hours Processing Time</p>
            </div>
            <div className="p-8 border border-white/10 rounded-xl bg-white/5">
              <RefreshCw className="text-secondary w-12 h-12 mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-3">Visa Change</h4>
              <p className="text-gray-400 text-sm">Same Day / Next Day Processing</p>
            </div>
            <div className="p-8 border border-white/10 rounded-xl bg-white/5">
              <Globe className="text-secondary w-12 h-12 mx-auto mb-6" />
              <h4 className="text-xl font-bold mb-3">International Visas</h4>
              <p className="text-gray-400 text-sm">Varies by Country (3 - 15 Days)</p>
            </div>
          </div>
          
          <div className="mt-16">
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { RefreshCw } from "lucide-react";
