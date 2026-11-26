import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Search,
  Home as HomeIcon,
  Info,
  Briefcase,
  Palmtree,
  Globe,
  Moon,
  MessageCircle,
  ArrowRight,
  X,
  HelpCircle,
  MapPin,
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon,
    subtitle: 'Flights, Visas & Tours',
  },
  {
    name: 'About',
    href: '/about',
    icon: Info,
    subtitle: '10+ Years of Trust',
  },
  {
    name: 'Services',
    href: '/services',
    icon: Briefcase,
    subtitle: 'Complete Travel Care',
  },
  {
    name: 'Packages',
    href: '/packages',
    icon: Palmtree,
    subtitle: '50+ Dream Destinations',
  },
  {
    name: 'Visa',
    href: '/visa',
    icon: Globe,
    subtitle: '30/60 Days & Visa Change',
  },
  {
    name: 'Umrah',
    href: '/umrah',
    icon: Moon,
    subtitle: 'Makkah & Madinah',
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone,
    subtitle: 'Ajman Office & 24/7 Help',
  },
  {
    name: 'FAQ',
    href: '/faq',
    icon: HelpCircle,
    subtitle: 'Common Travel Answers',
  },
];

const quickRoutes = [
  { label: 'UAE Visit Visa', href: '/visa', tag: 'Visa' },
  { label: 'Umrah Packages', href: '/umrah', tag: 'Umrah' },
  { label: 'Dubai & Maldives Holidays', href: '/packages', tag: 'Packages' },
  { label: 'Flight Ticket Booking', href: '/services', tag: 'Flights' },
  { label: 'Visa Change (A2A / In-Country)', href: '/visa', tag: 'Visa' },
  { label: 'About SARA TRAVELS Ajman', href: '/about', tag: 'About' },
  { label: 'Contact & WhatsApp Support', href: '/contact', tag: 'Contact' },
  { label: 'Travel & Visa FAQs', href: '/faq', tag: 'FAQ' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const filteredRoutes = quickRoutes.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar (Desktop) */}
      <div className="hidden md:block bg-primary py-2 text-white/90 text-xs">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+971567717978" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} className="text-secondary" />
              <span>+971 56 771 7978</span>
            </a>
            <a href="mailto:info@saratravels.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={14} className="text-secondary" />
              <span>info@saratravels.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#footer" aria-label="Facebook" className="hover:text-secondary transition-colors"><Facebook size={14} /></a>
            <a
              href="https://www.instagram.com/saratravelsuae?utm_source=ig_web_button_share_sheet&bqrl=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-secondary transition-colors"
            >
              <Instagram size={14} />
            </a>
            <a href="#footer" aria-label="Twitter" className="hover:text-secondary transition-colors"><Twitter size={14} /></a>
            <div className="h-4 w-[1px] bg-white/20 mx-2" />
            <Link to="/faq" className="hover:text-secondary transition-colors font-medium">FAQ</Link>
            <Link to="/contact" className="hover:text-secondary transition-colors font-medium">Support</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        aria-label="Primary Navigation"
        className={`relative transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-slate-900/5'
            : 'bg-white/95 backdrop-blur-md border-b border-gray-100/80'
        }`}
      >
        {/* Subtle animated accent line */}
        <motion.div
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-cyan-500 bg-[length:200%_auto] opacity-80"
        />

        <div className="container-custom h-[70px] sm:h-[76px] lg:h-auto lg:py-3 flex items-center justify-between gap-3">
          {/* Transparent Golden-Orange & Teal Logo */}
          <Link to="/" className="flex items-center group shrink-0 py-1 ml-3 sm:ml-4 lg:ml-6 xl:ml-8">
            <img
              src="/assets/sara-logo-header.png"
              alt="SARA TRAVELS"
              className="h-12 sm:h-14 w-auto object-contain object-left group-hover:scale-[1.03] transition-transform duration-300"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.slice(0, 7).map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-semibold uppercase tracking-wider transition-all relative group whitespace-nowrap shrink-0 ${
                    isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-secondary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4 relative">
            <button
              type="button"
              aria-label="Quick search pages"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="p-2.5 rounded-full text-gray-500 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
            <Link to="/contact" className="btn-primary !py-2.5 !px-6 text-sm whitespace-nowrap shrink-0">
              Book Now
            </Link>

            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-14 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50"
                >
                  <input
                    type="text"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search visas, Umrah, packages..."
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm outline-none focus:border-primary text-primary mb-3"
                  />
                  <div className="max-h-56 overflow-y-auto space-y-1">
                    {filteredRoutes.map((route) => (
                      <button
                        key={route.label}
                        type="button"
                        onClick={() => {
                          navigate(route.href);
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="w-full text-left px-3 py-2 rounded-xl hover:bg-primary/5 flex items-center justify-between text-sm text-gray-700 hover:text-primary transition-colors"
                      >
                        <span className="font-medium">{route.label}</span>
                        <span className="text-[11px] font-bold text-secondary">{route.tag}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Clean Executive Controls */}
          <div className="flex lg:hidden items-center gap-2.5 shrink-0">
            <motion.a
              whileTap={{ scale: 0.94 }}
              href="tel:+971567717978"
              aria-label="Call SARA TRAVELS"
              className="min-h-[44px] px-3.5 rounded-full border border-slate-200/90 bg-slate-50/90 text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors inline-flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Phone size={15} className="text-secondary shrink-0" />
              <span className="text-xs font-bold tracking-wide">Call</span>
            </motion.a>

            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-[#155a96] text-white shadow-md shadow-primary/20 flex items-center justify-center"
            >
              <div className="w-5 h-3.5 flex flex-col justify-between items-end relative">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6, width: '20px' } : { rotate: 0, y: 0, width: '20px' }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  className="h-0.5 bg-white rounded-full block origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-3.5 h-0.5 bg-secondary rounded-full block"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6, width: '20px' } : { rotate: 0, y: 0, width: '20px' }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  className="h-0.5 bg-white rounded-full block origin-center"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Executive Slide-Over Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[70]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/45 backdrop-blur-sm"
            />

            {/* Slide-Over Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 310, damping: 32 }}
              className="fixed inset-y-0 right-0 w-[86vw] max-w-[360px] bg-white shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="px-5 h-[70px] border-b border-gray-100 flex items-center justify-between shrink-0">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
                  <img
                    src="/assets/sara-logo-header.png"
                    alt="SARA TRAVELS"
                    className="h-11 w-auto object-contain object-left"
                  />
                </Link>
                <button
                  type="button"
                  aria-label="Close navigation drawer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-11 h-11 rounded-full bg-slate-100 text-gray-600 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-1.5">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.035, type: 'spring', stiffness: 280, damping: 24 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`min-h-[54px] px-4 py-2.5 rounded-2xl flex items-center justify-between transition-all duration-200 ${
                          isActive
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'text-gray-800 hover:bg-slate-50 active:scale-[0.98]'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isActive
                                ? 'bg-white/15 text-secondary'
                                : 'bg-primary/5 text-primary'
                            }`}
                          >
                            <Icon size={18} />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-sm tracking-wide leading-tight">
                              {link.name}
                            </span>
                            <span
                              className={`text-[11px] font-medium ${
                                isActive ? 'text-white/75' : 'text-gray-400'
                              }`}
                            >
                              {link.subtitle}
                            </span>
                          </div>
                        </div>
                        <ArrowRight
                          size={16}
                          className={isActive ? 'text-secondary' : 'text-gray-300'}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer Footer Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="p-5 bg-slate-50 border-t border-gray-100 shrink-0 space-y-3"
              >
                <div className="flex items-center justify-between text-xs text-gray-500 px-1">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
                    <MapPin size={13} className="text-secondary" />
                    Ajman, UAE
                  </span>
                  <span className="font-medium">24/7 Support Desk</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="tel:+971567717978"
                    className="min-h-[44px] rounded-xl bg-white border border-gray-200 text-primary font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
                  >
                    <Phone size={15} className="text-secondary" /> Call Now
                  </a>
                  <a
                    href="https://wa.me/971567717978"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
                  >
                    <MessageCircle size={15} /> WhatsApp
                  </a>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="min-h-[46px] w-full rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform"
                >
                  <span>Plan Your Trip</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
