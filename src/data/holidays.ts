export interface Holiday {
  date: string; // YYYY-MM-DD format
  name: string;
  type: 'resmi' | 'dini' | 'yarim-gun';
  duration: number; // 1 = tam gün, 0.5 = yarım gün
}

// 2026 Türkiye Resmi Tatilleri (Özel Sektör)
export const holidays2026: Holiday[] = [
  // Yılbaşı
  { date: '2026-01-01', name: 'Yılbaşı', type: 'resmi', duration: 1 },

  // Ramazan Bayramı (19-22 Mart 2026 - arife öğleden sonra dahil)
  { date: '2026-03-19', name: 'Ramazan Bayramı Arifesi', type: 'yarim-gun', duration: 0.5 },
  { date: '2026-03-20', name: 'Ramazan Bayramı 1. Gün', type: 'dini', duration: 1 },
  { date: '2026-03-21', name: 'Ramazan Bayramı 2. Gün', type: 'dini', duration: 1 },
  { date: '2026-03-22', name: 'Ramazan Bayramı 3. Gün', type: 'dini', duration: 1 },

  // Ulusal Egemenlik ve Çocuk Bayramı
  { date: '2026-04-23', name: 'Ulusal Egemenlik ve Çocuk Bayramı', type: 'resmi', duration: 1 },

  // Emek ve Dayanışma Günü
  { date: '2026-05-01', name: 'Emek ve Dayanışma Günü', type: 'resmi', duration: 1 },

  // Atatürk'ü Anma, Gençlik ve Spor Bayramı
  { date: '2026-05-19', name: 'Atatürk\'ü Anma, Gençlik ve Spor Bayramı', type: 'resmi', duration: 1 },

  // Kurban Bayramı (26-30 Mayıs 2026 - arife öğleden sonra dahil)
  { date: '2026-05-26', name: 'Kurban Bayramı Arifesi', type: 'yarim-gun', duration: 0.5 },
  { date: '2026-05-27', name: 'Kurban Bayramı 1. Gün', type: 'dini', duration: 1 },
  { date: '2026-05-28', name: 'Kurban Bayramı 2. Gün', type: 'dini', duration: 1 },
  { date: '2026-05-29', name: 'Kurban Bayramı 3. Gün', type: 'dini', duration: 1 },
  { date: '2026-05-30', name: 'Kurban Bayramı 4. Gün', type: 'dini', duration: 1 },

  // Demokrasi ve Milli Birlik Günü
  { date: '2026-07-15', name: 'Demokrasi ve Milli Birlik Günü', type: 'resmi', duration: 1 },

  // Zafer Bayramı
  { date: '2026-08-30', name: 'Zafer Bayramı', type: 'resmi', duration: 1 },

  // Cumhuriyet Bayramı (28 Ekim öğleden sonra + 29 Ekim)
  { date: '2026-10-28', name: 'Cumhuriyet Bayramı Arifesi', type: 'yarim-gun', duration: 0.5 },
  { date: '2026-10-29', name: 'Cumhuriyet Bayramı', type: 'resmi', duration: 1 },
];

export function isHoliday(date: Date): Holiday | undefined {
  const dateStr = date.toISOString().split('T')[0];
  return holidays2026.find(h => h.date === dateStr);
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6; // Pazar veya Cumartesi
}

export function getTotalHolidayDays(): number {
  return holidays2026.reduce((sum, h) => sum + h.duration, 0);
}
