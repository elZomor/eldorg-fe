import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ScriptCard from './ScriptCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import { useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';
import { ScriptItem } from '../models/ScriptItem.ts';
import { get_request } from '../utils/APIClient';

interface ScriptsGridProps {}

const fetchScripts = async (params: Record<string, any>) => {
  let url = 'scripts';
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      search.append(key, value);
    }
  });
  if (search.toString()) url += `?${search.toString()}`;
  return get_request(url);
};

const ScriptsGrid: React.FC<ScriptsGridProps> = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);

  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['scripts', filters, page],
    queryFn: () => fetchScripts({ ...filters, page }),
  });

  const scripts: ScriptItem[] = data && data.results ? data.results : [];
  const totalPages = data && data.total_pages ? data.total_pages : 1;

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
  };

  return (
    <section className="mt-16 w-full max-w-7xl mx-auto px-4 py-8">
      {/*<FiltersBar*/}
      {/*  filters={filters}*/}
      {/*  setFilters={setFilters}*/}
      {/*  isRTL={isRTL}*/}
      {/*  t={t}*/}
      {/*/>*/}
      {isLoading || isFetching ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-80 bg-[#303842] rounded-xl animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          ))}
        </div>
      ) : isError ? (
        <div className="flex flex-col items-center justify-center py-16">
          <span className="text-[#bfa36f] text-lg mb-4">
            {t('errorLoading') || 'حدث خطأ أثناء التحميل'}
          </span>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-[#bfa36f] text-[#0f1115] rounded font-semibold hover:bg-[#e6b46a] transition-colors duration-200"
          >
            {t('retry') || 'إعادة المحاولة'}
          </button>
        </div>
      ) : scripts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <span className="text-[#bfa36f] text-lg mb-4">
            {t('emptyState') || 'مافيش حاجة في الدُرج هنا'}
          </span>
          <button
            onClick={() => setFilters({})}
            className="px-4 py-2 bg-[#bfa36f] text-[#0f1115] rounded font-semibold hover:bg-[#e6b46a] transition-colors duration-200"
          >
            {t('clearFilters') || 'مسح الفلاتر'}
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {scripts.map((script) => (
                <ScriptCard key={script.id} script={script} />
              ))}
            </AnimatePresence>
          </div>
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            isRTL={isRTL}
          />
        </>
      )}
    </section>
  );
};

export default ScriptsGrid;
