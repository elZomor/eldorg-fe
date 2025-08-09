import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { ScriptItem } from '../models/ScriptItem.ts';

const ScriptCard: React.FC<{ script: ScriptItem }> = ({ script }) => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, boxShadow: '0 8px 32px 0 rgba(89,123,156,0.15)' }}
      transition={{ duration: 0.3 }}
      className="group relative bg-[#0f1115] border-2 border-transparent rounded-xl overflow-hidden shadow-md transition-all duration-200 flex flex-col h-full hover:border-[#597b9c] focus-within:border-[#bfa36f]"
      aria-label={script.title}
      style={{ cursor: 'default' }} // النص قابل للتحديد؛ المؤشر مش pointer
    >
      {/* الغلاف قابل للضغط */}
      <Link
        to={`/scripts/${script.id}`}
        className="relative block w-full aspect-[3/4] bg-[#303842] focus:outline-none focus:ring-2 focus:ring-[#bfa36f]"
        aria-label={script.title}
      >
        {script.cover ? (
          <img
            src={script.cover}
            alt={script.title}
            className="object-cover w-full h-full select-none"
            loading="lazy"
            draggable={false}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[url('/images/paper-texture-placeholder.png')] bg-cover bg-center select-none">
            <span
              className={`text-xl font-bold text-[#bfa36f] bg-black/60 px-2 py-1 rounded ${
                isRTL ? 'font-arabic' : 'font-latin'
              }`}
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textAlign: 'center',
                maxWidth: '90%',
                pointerEvents: 'none',
              }}
            >
              {script.title}
            </span>
          </div>
        )}
      </Link>

      {/* محتوى قابل للتحديد */}
      <div className="flex-1 flex flex-col p-4 gap-2 select-text">
        {/* العنوان قابل للضغط كنص/رابط */}
        <h3
          className={`text-lg font-bold text-[#f0f0f0] leading-tight ${
            isRTL ? 'font-arabic' : 'font-latin'
          }`}
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            userSelect: 'text',
          }}
        >
          <Link
            to={`/scripts/${script.id}`}
            className="focus:outline-none focus:ring-2 focus:ring-[#bfa36f]"
            style={{ cursor: 'pointer' }}
          >
            {script.title}
          </Link>
        </h3>

        <div className="flex items-center gap-2 text-[#bfa36f] text-sm">
          <span className="hover:cursor-text">{script.author}</span>
          <span className="mx-1">•</span>
          <span className="hover:cursor-text">{script.year}</span>
        </div>

        <p
          className="text-[#e6b46a] text-sm mt-1 hover:cursor-text"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            userSelect: 'text',
          }}
        >
          {script.synopsis}
        </p>

        <div className="mt-auto pt-2">
          {/* CTA: زر تحميل الملف مباشرة */}
          <a
            href={script.file}
            download
            role="button"
            className="inline-flex items-center justify-center px-4 py-2 bg-[#597b9c] hover:bg-[#e6b46a] text-[#0f1115] font-semibold rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#bfa36f]"
            aria-label={t('readScript') || 'اقرأ'}
            style={{ cursor: 'pointer' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('readScript') || 'اقرأ'}
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ScriptCard;
