import { holidays2026, isHoliday, isWeekend } from './holidays';

export interface BridgeSuggestion {
  id: string;
  name: string;
  bridgeDays: string[]; // İzin alınacak günler
  totalVacationDays: number; // Toplam tatil günü
  bridgeDaysCount: number; // Kaç gün izin kullanılacak
  efficiency: number; // Verimlilik oranı (toplam tatil / izin günü)
  startDate: string;
  endDate: string;
}

const year = 2026;

function formatDate(month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function isWorkday(dateStr: string): boolean {
  const date = new Date(dateStr);
  return !isHoliday(date) && !isWeekend(date);
}

function getConsecutiveDays(startDateStr: string, endDateStr: string): string[] {
  const days: string[] = [];
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    days.push(d.toISOString().split('T')[0]);
  }
  return days;
}

function countVacationDays(days: string[], bridgeDays: Set<string>): number {
  let count = 0;
  for (const day of days) {
    const date = new Date(day);
    if (isHoliday(date) || isWeekend(date) || bridgeDays.has(day)) {
      count++;
    }
  }
  return count;
}

// Köprü izni önerilerini hesapla
export function calculateBridgeSuggestions(): BridgeSuggestion[] {
  const suggestions: BridgeSuggestion[] = [];

  // 1. Yılbaşı (1 Ocak 2026 - Perşembe)
  // 2 Ocak Cuma izin al = 4 gün tatil (1-4 Ocak)
  suggestions.push({
    id: 'yilbasi',
    name: 'Yılbaşı Tatili',
    bridgeDays: ['2026-01-02'],
    totalVacationDays: 4,
    bridgeDaysCount: 1,
    efficiency: 4,
    startDate: '2026-01-01',
    endDate: '2026-01-04'
  });

  // 2. Ramazan Bayramı (19-22 Mart 2026, Perşembe-Pazar)
  // 23-27 Mart (Pzt-Cuma) izin al = 16 gün tatil (14 Mart Cmt - 29 Mart Pazar)
  suggestions.push({
    id: 'ramazan-uzun',
    name: 'Ramazan Bayramı (Uzun)',
    bridgeDays: ['2026-03-16', '2026-03-17', '2026-03-18', '2026-03-23', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-27'],
    totalVacationDays: 16,
    bridgeDaysCount: 8,
    efficiency: 2,
    startDate: '2026-03-14',
    endDate: '2026-03-29'
  });

  // Ramazan kısa versiyon - sadece sonrası
  suggestions.push({
    id: 'ramazan-kisa',
    name: 'Ramazan Bayramı (Kısa)',
    bridgeDays: ['2026-03-23', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-27'],
    totalVacationDays: 11,
    bridgeDaysCount: 5,
    efficiency: 2.2,
    startDate: '2026-03-19',
    endDate: '2026-03-29'
  });

  // 3. 23 Nisan (Perşembe)
  // 24 Nisan Cuma izin = 4 gün
  suggestions.push({
    id: '23nisan',
    name: '23 Nisan Tatili',
    bridgeDays: ['2026-04-24'],
    totalVacationDays: 4,
    bridgeDaysCount: 1,
    efficiency: 4,
    startDate: '2026-04-23',
    endDate: '2026-04-26'
  });

  // 4. 1 Mayıs (Cuma)
  // Zaten 3 gün tatil (Cum-Paz)
  suggestions.push({
    id: '1mayis',
    name: '1 Mayıs Tatili',
    bridgeDays: [],
    totalVacationDays: 3,
    bridgeDaysCount: 0,
    efficiency: Infinity,
    startDate: '2026-05-01',
    endDate: '2026-05-03'
  });

  // 5. 19 Mayıs (Salı)
  // 18 Mayıs Pazartesi izin = 4 gün
  suggestions.push({
    id: '19mayis',
    name: '19 Mayıs Tatili',
    bridgeDays: ['2026-05-18'],
    totalVacationDays: 4,
    bridgeDaysCount: 1,
    efficiency: 4,
    startDate: '2026-05-16',
    endDate: '2026-05-19'
  });

  // 6. Kurban Bayramı (26-30 Mayıs, Salı-Cumartesi)
  // 25 Mayıs Pazartesi izin = 9 gün (23 Mayıs Cmt - 31 Mayıs Paz)
  suggestions.push({
    id: 'kurban-kisa',
    name: 'Kurban Bayramı (Kısa)',
    bridgeDays: ['2026-05-25'],
    totalVacationDays: 9,
    bridgeDaysCount: 1,
    efficiency: 9,
    startDate: '2026-05-23',
    endDate: '2026-05-31'
  });

  // Kurban uzun - 19 Mayıs ile birleştir
  suggestions.push({
    id: 'kurban-uzun',
    name: 'Kurban + 19 Mayıs (Mega)',
    bridgeDays: ['2026-05-18', '2026-05-20', '2026-05-21', '2026-05-22', '2026-05-25'],
    totalVacationDays: 16,
    bridgeDaysCount: 5,
    efficiency: 3.2,
    startDate: '2026-05-16',
    endDate: '2026-05-31'
  });

  // 7. 15 Temmuz (Çarşamba)
  // 16-17 Temmuz izin = 5 gün
  suggestions.push({
    id: '15temmuz',
    name: '15 Temmuz Tatili',
    bridgeDays: ['2026-07-16', '2026-07-17'],
    totalVacationDays: 5,
    bridgeDaysCount: 2,
    efficiency: 2.5,
    startDate: '2026-07-15',
    endDate: '2026-07-19'
  });

  // 8. 30 Ağustos (Pazar) - zaten hafta sonu
  suggestions.push({
    id: '30agustos',
    name: '30 Ağustos Tatili',
    bridgeDays: ['2026-08-31'],
    totalVacationDays: 4,
    bridgeDaysCount: 1,
    efficiency: 4,
    startDate: '2026-08-29',
    endDate: '2026-09-01'
  });

  // 9. Cumhuriyet Bayramı (28-29 Ekim, Çarşamba-Perşembe)
  // 30 Ekim Cuma izin = 5 gün
  suggestions.push({
    id: 'cumhuriyet-kisa',
    name: 'Cumhuriyet Bayramı (Kısa)',
    bridgeDays: ['2026-10-30'],
    totalVacationDays: 5,
    bridgeDaysCount: 1,
    efficiency: 5,
    startDate: '2026-10-28',
    endDate: '2026-11-01'
  });

  // Cumhuriyet uzun
  suggestions.push({
    id: 'cumhuriyet-uzun',
    name: 'Cumhuriyet Bayramı (Uzun)',
    bridgeDays: ['2026-10-26', '2026-10-27', '2026-10-30'],
    totalVacationDays: 9,
    bridgeDaysCount: 3,
    efficiency: 3,
    startDate: '2026-10-24',
    endDate: '2026-11-01'
  });

  return suggestions.sort((a, b) => b.efficiency - a.efficiency);
}

export const bridgeSuggestions = calculateBridgeSuggestions();
