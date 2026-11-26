import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun, User, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FuturisticNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
    { name: 'Visa', href: '/visa' },
    { name: 'Umrah', href: '/umrah' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-2xl md:rounded-full px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'shadow-2xl border-white/20' : 'border-white/5'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-28 h-12 overflow-hidden flex items-center justify-center">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-26_at_2.02_c5a43ed9.png"
                alt="SARA TRAVELS"
                className="w-[112px] h-[112px] max-w-none shrink-0 translate-y-[2.7%] object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-sm font-display font-bold uppercase tracking-widest text-white/60 hover:text-secondary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-secondary" /> : <Moon className="w-4 h-4 text-secondary" />}
            </button>
            <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors">
              <User className="w-4 h-4 text-white/60" />
            </button>
            <button className="btn-futuristic !py-3 !px-6 flex items-center gap-2">
              Connect <Zap className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-6 mt-4 lg:hidden"
          >
            <div className="glass rounded-3xl p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-2xl font-display font-bold uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10" />
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center"><Moon className="w-5 h-5" /></button>
                  <button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center"><User className="w-5 h-5" /></button>
                </div>
                <button className="btn-futuristic">Connect</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
