'use client';

import { bridgeSuggestions, BridgeSuggestion } from '@/data/bridgeSuggestions';

interface BridgeSuggestionsProps {
  selectedDates: Set<string>;
  onApplySuggestion: (days: string[]) => void;
}

export default function BridgeSuggestions({ selectedDates, onApplySuggestion }: BridgeSuggestionsProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
  };

  const isApplied = (suggestion: BridgeSuggestion) => {
    return suggestion.bridgeDays.every(day => selectedDates.has(day));
  };

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 5) return 'bg-green-100 text-green-800';
    if (efficiency >= 3) return 'bg-blue-100 text-blue-800';
    if (efficiency >= 2) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getEfficiencyLabel = (efficiency: number) => {
    if (efficiency === Infinity) return 'Bonus';
    return `${efficiency.toFixed(1)}x`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Köprü İzni Önerileri</h2>
      <p className="text-sm text-gray-500 mb-4">
        En verimli köprü izinleri (verimlilik = toplam tatil / izin günü)
      </p>

      <div className="space-y-3">
        {bridgeSuggestions.map((suggestion) => {
          const applied = isApplied(suggestion);

          return (
            <div
              key={suggestion.id}
              className={`p-4 rounded-lg border-2 transition-all ${
                applied
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-gray-800">{suggestion.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getEfficiencyColor(suggestion.efficiency)}`}>
                      {getEfficiencyLabel(suggestion.efficiency)}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mt-1">
                    {formatDate(suggestion.startDate)} - {formatDate(suggestion.endDate)}
                  </p>

                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="text-green-600 font-medium">
                      {suggestion.totalVacationDays} gün tatil
                    </span>
                    {suggestion.bridgeDaysCount > 0 && (
                      <span className="text-blue-600">
                        {suggestion.bridgeDaysCount} gün izin
                      </span>
                    )}
                  </div>

                  {suggestion.bridgeDays.length > 0 && (
                    <p className="text-xs text-gray-400 mt-1">
                      İzin: {suggestion.bridgeDays.map(d => formatDate(d)).join(', ')}
                    </p>
                  )}
                </div>

                {suggestion.bridgeDays.length > 0 && (
                  <button
                    onClick={() => onApplySuggestion(suggestion.bridgeDays)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      applied
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    {applied ? '✓ Uygulandı' : 'Uygula'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-700 mb-2">Tüm Önerileri Uygula</h3>
        <p className="text-sm text-gray-500 mb-3">
          En verimli önerileri seçerek maksimum tatil yapın
        </p>
        <button
          onClick={() => {
            const topSuggestions = bridgeSuggestions
              .filter(s => s.efficiency >= 4 && s.bridgeDays.length > 0)
              .flatMap(s => s.bridgeDays);
            onApplySuggestion([...new Set(topSuggestions)]);
          }}
          className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
        >
          Yüksek Verimli Önerileri Uygula (4x+)
        </button>
      </div>
    </div>
  );
}
