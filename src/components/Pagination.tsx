import React from 'react';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isRTL?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
  isRTL,
}) => {
  // Calculate page numbers to show (max 5)
  let start = Math.max(1, page - 2);
  let end = Math.min(totalPages, start + 4);
  if (end - start < 4) start = Math.max(1, end - 4);
  const pageNumbers = [];
  for (let i = start; i <= end; i++) pageNumbers.push(i);

  return (
    <div
      className={`flex items-center justify-center gap-2 mt-8 ${isRTL ? 'flex-row-reverse' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="px-3 py-2 rounded bg-[#303842] text-[#f0f0f0] disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={isRTL ? 'السابق' : 'Previous page'}
      >
        {isRTL ? 'السابق' : 'Previous'}
      </button>
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`px-3 py-2 rounded font-bold transition-colors duration-200 ${num === page ? 'bg-[#bfa36f] text-[#0f1115]' : 'bg-[#303842] text-[#f0f0f0] hover:bg-[#597b9c]'}`}
          aria-current={num === page ? 'page' : undefined}
        >
          {isRTL ? num.toLocaleString('ar-EG') : num}
        </button>
      ))}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="px-3 py-2 rounded bg-[#303842] text-[#f0f0f0] disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={isRTL ? 'التالي' : 'Next page'}
      >
        {isRTL ? 'التالي' : 'Next'}
      </button>
    </div>
  );
};

export default Pagination;
