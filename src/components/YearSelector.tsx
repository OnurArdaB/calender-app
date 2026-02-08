'use client';

import { availableYears } from '@/data/holidays';

interface YearSelectorProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export default function YearSelector({ selectedYear, onYearChange }: YearSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-600 font-medium">Yıl:</span>
      <div className="flex rounded-lg overflow-hidden border border-gray-300">
        {availableYears.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(year)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedYear === year
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}
