import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const Hero: React.FC = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-theme-bg-primary via-theme-bg-primary to-theme-bg-secondary flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-4"
          >
            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-bold text-theme-text-primary ${isRTL ? 'font-arabic' : 'font-latin'} leading-tight`}
            >
              {t('projectName')}
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-gradient-to-r from-theme-accent-primary to-theme-accent-secondary mx-auto max-w-md"
            />
          </motion.div>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className={`text-xl md:text-2xl lg:text-3xl text-theme-accent-secondary ${isRTL ? 'font-arabic' : 'font-latin'} font-medium`}
          >
            {t('slogan')}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className={`text-lg md:text-xl text-theme-text-secondary max-w-3xl mx-auto leading-relaxed ${isRTL ? 'font-arabic' : 'font-latin'}`}
          >
            {t('heroDescription')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'sm:space-x-reverse sm:space-x-6' : 'sm:space-x-6'} mt-12`}
          >
            {/*<motion.button*/}
            {/*    whileHover={{scale: 1.05, y: -2}}*/}
            {/*    whileTap={{scale: 0.95}}*/}
            {/*    className={`group flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''} px-8 py-4 bg-theme-accent-primary hover:bg-theme-accent-primary/80 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl ${isRTL ? 'font-arabic' : 'font-latin'}`}*/}
            {/*>*/}
            {/*    <Feather className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"/>*/}
            {/*    <span>{t('submitScript')}</span>*/}
            {/*</motion.button>*/}

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''} px-8 py-4 border-2 border-theme-accent-secondary text-theme-accent-secondary hover:bg-theme-accent-secondary hover:text-theme-bg-primary rounded-lg font-medium transition-all duration-300 ${isRTL ? 'font-arabic' : 'font-latin'}`}
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>{t('learnMore')}</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col items-center space-y-2 text-theme-text-muted"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-stage-text/60"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-current rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
