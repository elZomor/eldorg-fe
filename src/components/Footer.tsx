import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translationsType, useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
  const { language, toggleLanguage, isRTL } = useLanguage();
  const { t } = useTranslation();

  // const socialLinks = [
  //     {icon: Facebook, href: '#', label: 'Facebook'},
  //     {icon: Twitter, href: '#', label: 'Twitter'},
  //     {icon: Instagram, href: '#', label: 'Instagram'},
  //     {icon: Mail, href: '#', label: 'Email'},
  // ];

  const quickLinks = [
    { key: 'home', href: '/' },
    // { key: 'about', href: '/#about' },
    // { key: 'submit', href: '#submit' },
    // { key: 'contact', href: '#contact' },
  ];

  return (
    <footer className="bg-theme-bg-primary border-t border-theme-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3
              className={`text-2xl font-bold text-theme-text-primary ${isRTL ? 'font-arabic' : 'font-latin'}`}
            >
              {t('projectName')}
            </h3>
            <p
              className={`text-theme-text-muted leading-relaxed ${isRTL ? 'font-arabic' : 'font-latin'}`}
            >
              {t('slogan')}
            </p>
            <p
              className={`text-theme-text-muted text-sm leading-relaxed ${isRTL ? 'font-arabic' : 'font-latin'}`}
            >
              {isRTL
                ? 'منصة رقمية لدعم المواهب الشابة في الكتابة المسرحية'
                : 'A digital platform supporting young talents in theatrical writing'}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4
              className={`text-lg font-semibold text-theme-text-primary ${isRTL ? 'font-arabic' : 'font-latin'}`}
            >
              {t('quickLinks')}
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  className={`block text-theme-text-muted hover:text-theme-accent-secondary transition-colors duration-200 ${isRTL ? 'font-arabic' : 'font-latin'}`}
                >
                  {t(link.key as translationsType)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & Language */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/*<h4 className={`text-lg font-semibold text-theme-text-primary ${isRTL ? 'font-arabic' : 'font-latin'}`}>*/}
            {/*  {t('followUs')}*/}
            {/*</h4>*/}

            {/*/!* Social Links *!/*/}
            {/*<div className={`flex space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>*/}
            {/*  {socialLinks.map((social) => (*/}
            {/*    <motion.a*/}
            {/*      key={social.label}*/}
            {/*      href={social.href}*/}
            {/*      whileHover={{ scale: 1.2, y: -2 }}*/}
            {/*      whileTap={{ scale: 0.9 }}*/}
            {/*      className="text-theme-text-muted hover:text-theme-accent-secondary transition-colors duration-200"*/}
            {/*      aria-label={social.label}*/}
            {/*    >*/}
            {/*      <social.icon size={20} />*/}
            {/*    </motion.a>*/}
            {/*  ))}*/}
            {/*</div>*/}

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''} text-theme-text-muted hover:text-theme-accent-secondary transition-colors duration-200 mt-6`}
            >
              <Globe size={18} />
              <span
                className={`text-sm font-medium ${isRTL ? 'font-arabic' : 'font-latin'}`}
              >
                {language === 'ar' ? 'English' : 'العربية'}
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-stage-gray/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p
            className={`text-theme-text-muted text-sm ${isRTL ? 'font-arabic' : 'font-latin'}`}
          >
            © 2024 {t('projectName')}. {t('allRightsReserved')}.
          </p>

          {/*<div*/}
          {/*    className={`flex items-center space-x-6 ${isRTL ? 'space-x-reverse' : ''} text-theme-text-muted text-sm`}>*/}
          {/*    <motion.a*/}
          {/*        whileHover={{scale: 1.05}}*/}
          {/*        href="#"*/}
          {/*        className={`hover:text-theme-accent-secondary transition-colors duration-200 ${isRTL ? 'font-arabic' : 'font-latin'}`}*/}
          {/*    >*/}
          {/*        {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}*/}
          {/*    </motion.a>*/}
          {/*    <motion.a*/}
          {/*        whileHover={{scale: 1.05}}*/}
          {/*        href="#"*/}
          {/*        className={`hover:text-theme-accent-secondary transition-colors duration-200 ${isRTL ? 'font-arabic' : 'font-latin'}`}*/}
          {/*    >*/}
          {/*        {isRTL ? 'شروط الاستخدام' : 'Terms of Service'}*/}
          {/*    </motion.a>*/}
          {/*</div>*/}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
