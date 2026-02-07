'use client';

import { holidays2026 } from '@/data/holidays';

const DAYS_TR = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

export default function HolidayList() {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' });
  };

  const getDayName = (dateStr: string) => {
    const date = new Date(dateStr);
    return DAYS_TR[date.getDay()];
  };

  // Tatilleri grupla
  const groupedHolidays: { [key: string]: typeof holidays2026 } = {};

  for (const holiday of holidays2026) {
    const baseName = holiday.name.replace(/ Arifesi$/, '').replace(/ \d\. Gün$/, '');
    if (!groupedHolidays[baseName]) {
      groupedHolidays[baseName] = [];
    }
    groupedHolidays[baseName].push(holiday);
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">2026 Resmi Tatiller</h2>

      <div className="space-y-4">
        {Object.entries(groupedHolidays).map(([name, days]) => {
          const totalDuration = days.reduce((sum, d) => sum + d.duration, 0);
          const firstDay = days[0];
          const lastDay = days[days.length - 1];
          const isMultiDay = days.length > 1;

          return (
            <div
              key={name}
              className={`p-4 rounded-lg border-l-4 ${
                firstDay.type === 'dini'
                  ? 'bg-purple-50 border-purple-500'
                  : 'bg-red-50 border-red-500'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {isMultiDay ? (
                      <>
                        {formatDate(firstDay.date)} - {formatDate(lastDay.date)}
                        <span className="text-gray-400 ml-2">
                          ({getDayName(firstDay.date)} - {getDayName(lastDay.date)})
                        </span>
                      </>
                    ) : (
                      <>
                        {formatDate(firstDay.date)}
                        <span className="text-gray-400 ml-2">
                          ({getDayName(firstDay.date)})
                        </span>
                      </>
                    )}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  firstDay.type === 'dini'
                    ? 'bg-purple-200 text-purple-800'
                    : 'bg-red-200 text-red-800'
                }`}>
                  {totalDuration} gün
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-700">Toplam Resmi Tatil</span>
          <span className="text-2xl font-bold text-gray-800">
            {holidays2026.reduce((sum, h) => sum + h.duration, 0)} gün
          </span>
        </div>
      </div>
    </div>
  );
}
