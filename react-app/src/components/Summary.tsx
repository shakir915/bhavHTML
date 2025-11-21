import type { Summary as SummaryType } from '../types';
import { SummaryItem } from './SummaryItem';

interface SummaryProps {
  summary: SummaryType;
  useFullFormat: boolean;
}

export const Summary = ({ summary, useFullFormat }: SummaryProps) => {
  return (
    <div className="mb-4 border-2 border-gray-200 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-5 flex flex-wrap justify-between items-center gap-4">
        <span className="text-xl font-bold">Summary</span>
        <div className="flex gap-4 text-sm ml-auto">
          <SummaryItem label="Net Bill" value={summary.netBill} useFullFormat={useFullFormat} />
          <SummaryItem label="Total Expenses" value={summary.totalExpenses} useFullFormat={useFullFormat} isExpense />
          <SummaryItem label="Gross Bill" value={summary.grossBill} useFullFormat={useFullFormat} />
          <SummaryItem label="Trade P&L" value={summary.tradePnL} useFullFormat={useFullFormat} />
          <SummaryItem label="Net P&L" value={summary.netPnL} useFullFormat={useFullFormat} />
        </div>
        <div className="w-8 h-8 invisible" />
      </div>
    </div>
  );
};
