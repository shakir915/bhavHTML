import { formatCurrency } from '../utils/format';

interface SummaryItemProps {
  label: string;
  value: number | null | undefined;
  useFullFormat: boolean;
  isExpense?: boolean;
}

export const SummaryItem = ({ label, value, useFullFormat, isExpense }: SummaryItemProps) => {
  const formattedValue = formatCurrency(value, useFullFormat);

  if (formattedValue === '-') {
    return null;
  }

  const valueClass = isExpense
    ? 'text-red-400 font-bold'
    : (value as number) >= 0
      ? 'text-green-400 font-bold'
      : 'text-red-400 font-bold';

  return (
    <div className="flex flex-col items-end min-w-[80px]">
      <span className="opacity-80 text-xs md:text-sm">{label}</span>
      <span className={`font-bold text-lg md:text-xl ${valueClass}`}>
        {formattedValue}
      </span>
    </div>
  );
};
