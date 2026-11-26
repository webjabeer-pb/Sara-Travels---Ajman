import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Tour Packages', to: '/packages' },
  { label: 'Visa Services', to: '/visa' },
  { label: 'Umrah Packages', to: '/umrah' },
  { label: 'Travel FAQs', to: '/faq' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer id="footer" className="bg-gray-900 text-white pt-14 md:pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16 text-center sm:text-left">
          {/* Brand Column */}
          <div className="flex flex-col items-center sm:items-start gap-5">
            <Link to="/" className="inline-block group">
              <div className="w-44 h-20 overflow-hidden flex items-center justify-center sm:justify-start">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-26_at_2.02_c5a43ed9.png"
                  alt="SARA TRAVELS"
                  className="w-[172px] h-[172px] max-w-none shrink-0 translate-y-[2.7%] sm:-translate-x-[10%] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-xs sm:max-w-none">
              Your trusted travel partner in Ajman, UAE. We specialize in creating unforgettable journeys with professional service and unbeatable value.
            </p>
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
              {[
                { Icon: Facebook, href: "https://www.instagram.com/saratravelsuae?utm_source=ig_web_button_share_sheet&bqrl=ZDNlZDc0MzIxNw==", label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/saratravelsuae?utm_source=ig_web_button_share_sheet&bqrl=ZDNlZDc0MzIxNw==", label: "Instagram" },
                { Icon: Twitter, href: "https://wa.me/971567717978", label: "Twitter" },
                { Icon: Youtube, href: "https://maps.app.goo.gl/uGQMnjdtXVWGrQYT9", label: "Location" }
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-all duration-300 group"
                >
                  <Icon size={18} className="text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-7 sm:mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-12 h-1 bg-secondary rounded-full" />
            </h4>
            <ul className="flex flex-col items-center sm:items-start gap-3.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-secondary flex items-center gap-2 transition-colors group text-sm sm:text-base"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-secondary/70" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-7 sm:mb-8 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-12 h-1 bg-secondary rounded-full" />
            </h4>
            <ul className="flex flex-col items-center sm:items-start gap-5 sm:gap-6">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Our Location</p>
                  <a
                    href="https://maps.app.goo.gl/uGQMnjdtXVWGrQYT9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-secondary transition-colors text-sm"
                  >
                    Ajman, United Arab Emirates
                  </a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Call &amp; WhatsApp</p>
                  <a href="tel:+971567717978" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                    +971 56 771 7978
                  </a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Email Us</p>
                  <a href="mailto:info@saratravels.com" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                    info@saratravels.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-7 sm:mb-8 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-12 h-1 bg-secondary rounded-full" />
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to get the latest travel updates and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3 max-w-xs mx-auto sm:max-w-none">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubscribed(false);
                }}
                placeholder="Your Email Address"
                className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-secondary outline-none transition-all text-sm text-white text-center sm:text-left"
              />
              <button type="submit" className="btn-secondary w-full !py-3">
                Subscribe Now
              </button>
              {subscribed && (
                <p className="text-emerald-400 text-xs flex items-center justify-center sm:justify-start gap-1.5 mt-1">
                  <CheckCircle2 size={14} /> Subscribed! Thank you for joining SARA TRAVELS.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} <span className="text-white font-semibold">SARA TRAVELS</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 text-sm">
            <Link to="/faq" className="hover:text-white transition-colors">Travel FAQs</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
