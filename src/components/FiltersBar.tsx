import React from 'react';
import { translationsType } from '../hooks/useTranslation.ts';

const FiltersBar: React.FC<{
  filters: Record<string, any>;
  setFilters: (f: Record<string, any>) => void;
  isRTL: boolean;
  t: (key: translationsType) => string;
}> = ({ filters, setFilters, isRTL, t }) => {
  return (
    <div
      className={`flex flex-wrap gap-2 items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}
    >
      <input
        type="text"
        placeholder={t('search') || 'بحث'}
        value={filters.search || ''}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        className="px-3 py-2 rounded bg-[#303842] text-[#f0f0f0] placeholder-[#bfa36f] focus:outline-none focus:ring-2 focus:ring-[#bfa36f]"
        aria-label={t('search') || 'بحث'}
      />
      <select
        value={filters.genre || ''}
        onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
        className="px-3 py-2 rounded bg-[#303842] text-[#f0f0f0]"
        aria-label={t('genre') || 'النوع'}
      >
        <option value="">{t('genre') || 'النوع'}</option>
        <option value="دراما">دراما</option>
        <option value="كوميديا">كوميديا</option>
        <option value="تراجيديا">تراجيديا</option>
      </select>
      <input
        type="number"
        min="1900"
        max="2100"
        value={filters.year || ''}
        onChange={(e) => setFilters({ ...filters, year: e.target.value })}
        placeholder={t('year') || 'السنة'}
        className="px-3 py-2 rounded bg-[#303842] text-[#f0f0f0] w-24"
        aria-label={t('year') || 'السنة'}
      />
      <select
        value={filters.sort || ''}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        className="px-3 py-2 rounded bg-[#303842] text-[#f0f0f0]"
        aria-label={t('sort') || 'ترتيب'}
      >
        <option value="">{t('sort') || 'ترتيب'}</option>
        <option value="year-desc">{t('newest') || 'الأحدث'}</option>
        <option value="year-asc">{t('oldest') || 'الأقدم'}</option>
      </select>
      <button
        onClick={() => setFilters({})}
        className="ml-2 px-3 py-2 rounded bg-[#bfa36f] text-[#0f1115] font-semibold hover:bg-[#e6b46a] transition-colors duration-200"
      >
        {t('clearFilters') || 'مسح الفلاتر'}
      </button>
    </div>
  );
};

export default FiltersBar;
