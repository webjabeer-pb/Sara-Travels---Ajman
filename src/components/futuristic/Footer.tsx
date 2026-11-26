import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, Zap, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FuturisticFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="inline-block group">
              <div className="w-44 h-20 overflow-hidden flex items-center justify-start">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-26_at_2.02_c5a43ed9.png"
                  alt="SARA TRAVELS"
                  className="w-[172px] h-[172px] max-w-none shrink-0 translate-y-[2.7%] -translate-x-[10%] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <p className="text-white/40 font-light text-sm leading-relaxed italic">
              "Travel Far, Travel Wide and Travel Often"
            </p>
            <div className="space-y-4">
              <a href="https://maps.app.goo.gl/uGQMnjdtXVWGrQYT9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/40 hover:text-secondary transition-colors">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="font-light">Ajman, UAE</span>
              </a>
              <a href="tel:+971567717978" className="flex items-center gap-3 text-white/40 hover:text-secondary transition-colors">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="font-light">+971 56 771 7978</span>
              </a>
              <div className="flex items-center gap-3 text-white/40">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="font-light">info@saratravels.com</span>
              </div>
            </div>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "https://www.instagram.com/saratravelsuae?utm_source=ig_web_button_share_sheet&bqrl=ZDNlZDc0MzIxNw==" },
                { Icon: Linkedin, href: "#" },
                { Icon: Github, href: "#" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center hover:bg-secondary hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest">Services</h4>
            <ul className="space-y-4">
              {['Flight Booking', 'UAE Visa', 'Umrah Packages', 'Tour Packages', 'Hotel Booking'].map((link) => (
                <li key={link}>
                  <Link to="/services" className="text-white/40 hover:text-secondary transition-colors font-light">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Services', 'Travel Packages', 'Visa & Umrah', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-white/40 hover:text-secondary transition-colors font-light">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest">Stay Updated</h4>
            <p className="text-white/40 mb-6 font-light text-sm">Subscribe to our newsletter for the latest travel deals and packages.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-6 pr-14 outline-none focus:border-secondary/50 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Zap className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
            © 2026 SARA TRAVELS. ALL SYSTEMS OPERATIONAL.
          </p>
          
          <div className="flex gap-8 text-white/20 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/40 hover:text-secondary transition-colors"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Return to Top</span>
            <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
