'use client';

import { holidays2026, isHoliday, isWeekend } from '@/data/holidays';

interface BridgeCalculatorProps {
  selectedDates: Set<string>;
  onClearAll: () => void;
}

interface VacationPeriod {
  startDate: string;
  endDate: string;
  totalDays: number;
  bridgeDays: number;
  holidayDays: number;
  weekendDays: number;
}

export default function BridgeCalculator({ selectedDates, onClearAll }: BridgeCalculatorProps) {
  const totalHolidayDays = holidays2026.reduce((sum, h) => sum + h.duration, 0);
  const bridgeDaysCount = selectedDates.size;

  // Tatil dönemlerini hesapla
  const calculateVacationPeriods = (): VacationPeriod[] => {
    if (selectedDates.size === 0) return [];

    const allDates = new Set<string>();

    // Tüm önemli günleri ekle (tatiller, hafta sonları, köprü izinleri)
    const year = 2026;
    for (let month = 0; month < 12; month++) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        if (isHoliday(date) || isWeekend(date) || selectedDates.has(dateStr)) {
          allDates.add(dateStr);
        }
      }
    }

    // Ardışık günleri grupla
    const sortedDates = Array.from(allDates).sort();
    const periods: VacationPeriod[] = [];
    let currentPeriod: string[] = [];

    for (const dateStr of sortedDates) {
      if (currentPeriod.length === 0) {
        currentPeriod.push(dateStr);
      } else {
        const lastDate = new Date(currentPeriod[currentPeriod.length - 1]);
        const currentDate = new Date(dateStr);
        const diffDays = (currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24);

        if (diffDays === 1) {
          currentPeriod.push(dateStr);
        } else {
          if (currentPeriod.some(d => selectedDates.has(d))) {
            periods.push(createPeriod(currentPeriod));
          }
          currentPeriod = [dateStr];
        }
      }
    }

    if (currentPeriod.length > 0 && currentPeriod.some(d => selectedDates.has(d))) {
      periods.push(createPeriod(currentPeriod));
    }

    return periods;
  };

  const createPeriod = (dates: string[]): VacationPeriod => {
    let holidayDays = 0;
    let weekendDays = 0;
    let bridgeDays = 0;

    for (const dateStr of dates) {
      const date = new Date(dateStr);
      const holiday = isHoliday(date);

      if (holiday) {
        holidayDays += holiday.duration;
      } else if (isWeekend(date)) {
        weekendDays++;
      } else if (selectedDates.has(dateStr)) {
        bridgeDays++;
      }
    }

    return {
      startDate: dates[0],
      endDate: dates[dates.length - 1],
      totalDays: dates.length,
      bridgeDays,
      holidayDays,
      weekendDays
    };
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' });
  };

  const periods = calculateVacationPeriods();
  const totalVacationDays = periods.reduce((sum, p) => sum + p.totalDays, 0);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">İzin Hesaplayıcı</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-red-600">{totalHolidayDays}</div>
          <div className="text-sm text-red-700">Resmi Tatil Günü</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-600">{bridgeDaysCount}</div>
          <div className="text-sm text-blue-700">Köprü İzni</div>
        </div>
      </div>

      {bridgeDaysCount > 0 && (
        <>
          <div className="bg-green-50 rounded-lg p-4 text-center mb-6">
            <div className="text-4xl font-bold text-green-600">{totalVacationDays}</div>
            <div className="text-sm text-green-700">Toplam Tatil Günü</div>
            <div className="text-xs text-green-600 mt-1">
              ({bridgeDaysCount} gün izin ile)
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-700">Tatil Dönemleri</h3>
              <button
                onClick={onClearAll}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Temizle
              </button>
            </div>
            <div className="space-y-3">
              {periods.map((period, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="font-medium text-gray-800">
                    {formatDate(period.startDate)} - {formatDate(period.endDate)}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    <span className="text-green-600 font-medium">{period.totalDays} gün</span>
                    {' '}({period.bridgeDays} izin + {period.holidayDays} tatil + {period.weekendDays} h.sonu)
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {bridgeDaysCount === 0 && (
        <div className="text-center text-gray-500 py-4">
          <p>Takvimden köprü izni günlerini seçin</p>
          <p className="text-sm mt-1">Tatillerin yanındaki iş günlerine tıklayarak uzun tatiller oluşturun</p>
        </div>
      )}
    </div>
  );
}
