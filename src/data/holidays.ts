export interface Holiday {
  date: string; // YYYY-MM-DD format
  name: string;
  type: 'resmi' | 'dini' | 'yarim-gun';
  duration: number; // 1 = tam gün, 0.5 = yarım gün
}

// 2025 Türkiye Resmi Tatilleri
const holidays2025: Holiday[] = [
  { date: '2025-01-01', name: 'Yılbaşı', type: 'resmi', duration: 1 },

  // Ramazan Bayramı (30 Mart - 1 Nisan 2025)
  { date: '2025-03-29', name: 'Ramazan Bayramı Arifesi', type: 'yarim-gun', duration: 0.5 },
  { date: '2025-03-30', name: 'Ramazan Bayramı 1. Gün', type: 'dini', duration: 1 },
  { date: '2025-03-31', name: 'Ramazan Bayramı 2. Gün', type: 'dini', duration: 1 },
  { date: '2025-04-01', name: 'Ramazan Bayramı 3. Gün', type: 'dini', duration: 1 },

  { date: '2025-04-23', name: 'Ulusal Egemenlik ve Çocuk Bayramı', type: 'resmi', duration: 1 },
  { date: '2025-05-01', name: 'Emek ve Dayanışma Günü', type: 'resmi', duration: 1 },
  { date: '2025-05-19', name: 'Atatürk\'ü Anma, Gençlik ve Spor Bayramı', type: 'resmi', duration: 1 },

  // Kurban Bayramı (6-9 Haziran 2025)
  { date: '2025-06-05', name: 'Kurban Bayramı Arifesi', type: 'yarim-gun', duration: 0.5 },
  { date: '2025-06-06', name: 'Kurban Bayramı 1. Gün', type: 'dini', duration: 1 },
  { date: '2025-06-07', name: 'Kurban Bayramı 2. Gün', type: 'dini', duration: 1 },
  { date: '2025-06-08', name: 'Kurban Bayramı 3. Gün', type: 'dini', duration: 1 },
  { date: '2025-06-09', name: 'Kurban Bayramı 4. Gün', type: 'dini', duration: 1 },

  { date: '2025-07-15', name: 'Demokrasi ve Milli Birlik Günü', type: 'resmi', duration: 1 },
  { date: '2025-08-30', name: 'Zafer Bayramı', type: 'resmi', duration: 1 },
  { date: '2025-10-28', name: 'Cumhuriyet Bayramı Arifesi', type: 'yarim-gun', duration: 0.5 },
  { date: '2025-10-29', name: 'Cumhuriyet Bayramı', type: 'resmi', duration: 1 },
];

// 2026 Türkiye Resmi Tatilleri
const holidays2026: Holiday[] = [
  { date: '2026-01-01', name: 'Yılbaşı', type: 'resmi', duration: 1 },

  // Ramazan Bayramı (19-22 Mart 2026)
  { date: '2026-03-19', name: 'Ramazan Bayramı Arifesi', type: 'yarim-gun', duration: 0.5 },
  { date: '2026-03-20', name: 'Ramazan Bayramı 1. Gün', type: 'dini', duration: 1 },
  { date: '2026-03-21', name: 'Ramazan Bayramı 2. Gün', type: 'dini', duration: 1 },
  { date: '2026-03-22', name: 'Ramazan Bayramı 3. Gün', type: 'dini', duration: 1 },

  { date: '2026-04-23', name: 'Ulusal Egemenlik ve Çocuk Bayramı', type: 'resmi', duration: 1 },
  { date: '2026-05-01', name: 'Emek ve Dayanışma Günü', type: 'resmi', duration: 1 },
  { date: '2026-05-19', name: 'Atatürk\'ü Anma, Gençlik ve Spor Bayramı', type: 'resmi', duration: 1 },

  // Kurban Bayramı (26-30 Mayıs 2026)
  { date: '2026-05-26', name: 'Kurban Bayramı Arifesi', type: 'yarim-gun', duration: 0.5 },
  { date: '2026-05-27', name: 'Kurban Bayramı 1. Gün', type: 'dini', duration: 1 },
  { date: '2026-05-28', name: 'Kurban Bayramı 2. Gün', type: 'dini', duration: 1 },
  { date: '2026-05-29', name: 'Kurban Bayramı 3. Gün', type: 'dini', duration: 1 },
  { date: '2026-05-30', name: 'Kurban Bayramı 4. Gün', type: 'dini', duration: 1 },

  { date: '2026-07-15', name: 'Demokrasi ve Milli Birlik Günü', type: 'resmi', duration: 1 },
  { date: '2026-08-30', name: 'Zafer Bayramı', type: 'resmi', duration: 1 },
  { date: '2026-10-28', name: 'Cumhuriyet Bayramı Arifesi', type: 'yarim-gun', duration: 0.5 },
  { date: '2026-10-29', name: 'Cumhuriyet Bayramı', type: 'resmi', duration: 1 },
];

// 2027 Türkiye Resmi Tatilleri
const holidays2027: Holiday[] = [
  { date: '2027-01-01', name: 'Yılbaşı', type: 'resmi', duration: 1 },

  // Ramazan Bayramı (9-11 Mart 2027)
  { date: '2027-03-08', name: 'Ramazan Bayramı Arifesi', type: 'yarim-gun', duration: 0.5 },
  { date: '2027-03-09', name: 'Ramazan Bayramı 1. Gün', type: 'dini', duration: 1 },
  { date: '2027-03-10', name: 'Ramazan Bayramı 2. Gün', type: 'dini', duration: 1 },
  { date: '2027-03-11', name: 'Ramazan Bayramı 3. Gün', type: 'dini', duration: 1 },

  { date: '2027-04-23', name: 'Ulusal Egemenlik ve Çocuk Bayramı', type: 'resmi', duration: 1 },
  { date: '2027-05-01', name: 'Emek ve Dayanışma Günü', type: 'resmi', duration: 1 },

  // Kurban Bayramı (16-19 Mayıs 2027) - 19 Mayıs hem Kurban 4. gün hem de Atatürk'ü Anma Günü
  { date: '2027-05-15', name: 'Kurban Bayramı Arifesi', type: 'yarim-gun', duration: 0.5 },
  { date: '2027-05-16', name: 'Kurban Bayramı 1. Gün', type: 'dini', duration: 1 },
  { date: '2027-05-17', name: 'Kurban Bayramı 2. Gün', type: 'dini', duration: 1 },
  { date: '2027-05-18', name: 'Kurban Bayramı 3. Gün', type: 'dini', duration: 1 },
  { date: '2027-05-19', name: 'Atatürk\'ü Anma, Gençlik ve Spor Bayramı (Kurban 4. Gün)', type: 'resmi', duration: 1 },

  { date: '2027-07-15', name: 'Demokrasi ve Milli Birlik Günü', type: 'resmi', duration: 1 },
  { date: '2027-08-30', name: 'Zafer Bayramı', type: 'resmi', duration: 1 },
  { date: '2027-10-28', name: 'Cumhuriyet Bayramı Arifesi', type: 'yarim-gun', duration: 0.5 },
  { date: '2027-10-29', name: 'Cumhuriyet Bayramı', type: 'resmi', duration: 1 },
];

// Tüm yılların tatilleri
export const holidaysByYear: Record<number, Holiday[]> = {
  2025: holidays2025,
  2026: holidays2026,
  2027: holidays2027,
};

export const availableYears = [2025, 2026, 2027];

export function getHolidaysForYear(year: number): Holiday[] {
  return holidaysByYear[year] || [];
}

export function isHoliday(date: Date, year: number): Holiday | undefined {
  // Local timezone kullan, UTC değil
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const dateStr = `${y}-${m}-${d}`;
  const holidays = getHolidaysForYear(year);
  return holidays.find(h => h.date === dateStr);
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export function getTotalHolidayDays(year: number): number {
  const holidays = getHolidaysForYear(year);
  return holidays.reduce((sum, h) => sum + h.duration, 0);
}
