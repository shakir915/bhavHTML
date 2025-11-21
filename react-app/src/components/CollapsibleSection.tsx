import { useState, type ReactNode } from 'react';
import { formatCurrency, getPnLClass } from '../utils/format';

interface CollapsibleSectionProps {
  title: string;
  totalLabel: string;
  totalValue: number;
  useFullFormat: boolean;
  children: ReactNode;
}

export const CollapsibleSection = ({
  title,
  totalLabel,
  totalValue,
  useFullFormat,
  children
}: CollapsibleSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-4 border-2 border-gray-200 rounded-xl overflow-hidden transition-all hover:border-[#667eea] hover:shadow-lg">
      <div
        className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-5 cursor-pointer flex flex-wrap justify-between items-center gap-4 hover:from-[#5568d3] hover:to-[#653a8b] transition-all"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-xl font-bold">{title}</span>
        <div className="flex gap-4 text-sm ml-auto">
          <div className="flex flex-col items-end min-w-[80px]">
            <span className="opacity-80 text-xs">{totalLabel}</span>
            <span className={`font-bold text-lg ${getPnLClass(totalValue)}`}>
              {formatCurrency(totalValue, useFullFormat)}
            </span>
          </div>
        </div>
        <div className={`expand-icon w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-all hover:bg-white/35 hover:scale-110 flex-shrink-0 ${isExpanded ? 'active' : ''}`} />
      </div>

      <div className={`accordion-content bg-gray-50 ${isExpanded ? 'active' : ''}`}>
        {children}
      </div>
    </div>
  );
};
