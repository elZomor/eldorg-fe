import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translationsType, useTranslation } from '../hooks/useTranslation';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, isRTL } = useLanguage();
  const { t } = useTranslation();

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'scripts', href: '/scripts' },
    // { key: 'submit', href: '#submit' },
    // { key: 'contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-theme-bg-primary/95 backdrop-blur-sm border-b border-theme-border-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <span
              className={`text-xl font-bold text-theme-text-primary ${isRTL ? 'font-arabic' : 'font-latin'}`}
            >
              {t('projectName')}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div
              className={`flex items-center space-x-6 ${isRTL ? 'space-x-reverse' : ''}`}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`text-theme-text-primary hover:text-theme-accent-secondary transition-colors duration-200 ${isRTL ? 'font-arabic' : 'font-latin'}`}
                >
                  {t(item.key as translationsType)}
                </motion.a>
              ))}

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Language Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-theme-text-primary hover:text-theme-accent-secondary transition-colors duration-200"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">
                  {language.toUpperCase()}
                </span>
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="text-theme-text-primary hover:text-theme-accent-secondary transition-colors duration-200"
            >
              <Globe size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-theme-text-primary hover:text-theme-accent-secondary transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-theme-bg-primary/98 backdrop-blur-sm border-t border-theme-border-light"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  whileHover={{ x: isRTL ? -8 : 8 }}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-theme-text-primary hover:text-theme-accent-secondary transition-colors duration-200 ${isRTL ? 'font-arabic text-right' : 'font-latin'}`}
                >
                  {t(item.key as translationsType)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
