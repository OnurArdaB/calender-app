export interface BridgeSuggestion {
  id: string;
  name: string;
  bridgeDays: string[];
  totalVacationDays: number;
  bridgeDaysCount: number; // Yarım günler 0.5 olarak sayılır
  efficiency: number;
  startDate: string;
  endDate: string;
}

// 2025 Köprü İzni Önerileri - KESİNTİSİZ TATİL (Arifeler dahil)
const suggestions2025: BridgeSuggestion[] = [
  // Yılbaşı (1 Ocak 2025 - Çarşamba)
  // 27-28 Aralık (Cmt-Paz) + 29,30,31 Aralık (köprü) + 1 Ocak (tatil) + 2,3 Ocak (köprü) + 4-5 Ocak (Cmt-Paz)
  {
    id: 'yilbasi-2025',
    name: 'Yılbaşı Tatili',
    bridgeDays: ['2024-12-29', '2024-12-30', '2024-12-31', '2025-01-02', '2025-01-03'],
    totalVacationDays: 10,
    bridgeDaysCount: 5,
    efficiency: 2,
    startDate: '2024-12-27',
    endDate: '2025-01-05'
  },
  // Ramazan Bayramı (29 Mart arife, 30 Mart - 1 Nisan 2025)
  // 29 Mart Cmt (arife yarım gün - ama Cumartesi!) + 30 Mart-1 Nisan (tatil) + 2,3,4 Nisan (köprü) + 5-6 Nisan (Cmt-Paz)
  // Arife Cumartesi'ye denk geliyor, zaten hafta sonu!
  {
    id: 'ramazan-2025',
    name: 'Ramazan Bayramı',
    bridgeDays: ['2025-04-02', '2025-04-03', '2025-04-04'],
    totalVacationDays: 9,
    bridgeDaysCount: 3,
    efficiency: 3,
    startDate: '2025-03-29',
    endDate: '2025-04-06'
  },
  // 23 Nisan (Çarşamba)
  // 19-20 Nisan (Cmt-Paz) + 21,22 (köprü) + 23 (tatil) + 24,25 (köprü) + 26-27 (Cmt-Paz)
  {
    id: '23nisan-2025',
    name: '23 Nisan Tatili',
    bridgeDays: ['2025-04-21', '2025-04-22', '2025-04-24', '2025-04-25'],
    totalVacationDays: 9,
    bridgeDaysCount: 4,
    efficiency: 2.25,
    startDate: '2025-04-19',
    endDate: '2025-04-27'
  },
  // 1 Mayıs (Perşembe)
  {
    id: '1mayis-2025',
    name: '1 Mayıs Tatili',
    bridgeDays: ['2025-05-02'],
    totalVacationDays: 4,
    bridgeDaysCount: 1,
    efficiency: 4,
    startDate: '2025-05-01',
    endDate: '2025-05-04'
  },
  // 19 Mayıs (Pazartesi)
  // 17-18 Mayıs (Cmt-Paz) + 19 (tatil) + 20,21,22,23 (köprü) + 24-25 (Cmt-Paz)
  {
    id: '19mayis-2025',
    name: '19 Mayıs Tatili',
    bridgeDays: ['2025-05-20', '2025-05-21', '2025-05-22', '2025-05-23'],
    totalVacationDays: 9,
    bridgeDaysCount: 4,
    efficiency: 2.25,
    startDate: '2025-05-17',
    endDate: '2025-05-25'
  },
  // Kurban Bayramı (5 Haziran arife Perşembe, 6-9 Haziran 2025)
  // 5 Haziran arife yarım gün, tam izin için 5 Haziran'ı da köprü say (0.5)
  // 31 Mayıs - 1 Haziran (Cmt-Paz) + 2,3,4 (köprü) + 5 (arife köprü 0.5) + 6-9 (tatil) + 10,11,12,13 (köprü) + 14-15 (Cmt-Paz)
  {
    id: 'kurban-2025',
    name: 'Kurban Bayramı',
    bridgeDays: ['2025-06-02', '2025-06-03', '2025-06-04', '2025-06-05', '2025-06-10', '2025-06-11', '2025-06-12', '2025-06-13'],
    totalVacationDays: 16,
    bridgeDaysCount: 7.5,
    efficiency: 2.13,
    startDate: '2025-05-31',
    endDate: '2025-06-15'
  },
  // 15 Temmuz (Salı)
  {
    id: '15temmuz-2025',
    name: '15 Temmuz Tatili',
    bridgeDays: ['2025-07-14'],
    totalVacationDays: 4,
    bridgeDaysCount: 1,
    efficiency: 4,
    startDate: '2025-07-12',
    endDate: '2025-07-15'
  },
  // 30 Ağustos (Cumartesi)
  {
    id: '30agustos-2025',
    name: '30 Ağustos Tatili',
    bridgeDays: [],
    totalVacationDays: 2,
    bridgeDaysCount: 0,
    efficiency: Infinity,
    startDate: '2025-08-30',
    endDate: '2025-08-31'
  },
  // Cumhuriyet Bayramı (28 Ekim arife Salı, 29 Ekim Çarşamba)
  // 25-26 Ekim (Cmt-Paz) + 27 (köprü) + 28 (arife köprü 0.5) + 29 (tatil) + 30,31 (köprü) + 1-2 Kasım (Cmt-Paz)
  {
    id: 'cumhuriyet-2025',
    name: 'Cumhuriyet Bayramı',
    bridgeDays: ['2025-10-27', '2025-10-28', '2025-10-30', '2025-10-31'],
    totalVacationDays: 9,
    bridgeDaysCount: 3.5,
    efficiency: 2.57,
    startDate: '2025-10-25',
    endDate: '2025-11-02'
  },
];

// 2026 Köprü İzni Önerileri - KESİNTİSİZ TATİL (Arifeler dahil)
const suggestions2026: BridgeSuggestion[] = [
  // Yılbaşı (1 Ocak 2026 - Perşembe)
  {
    id: 'yilbasi-2026',
    name: 'Yılbaşı Tatili',
    bridgeDays: ['2026-01-02'],
    totalVacationDays: 4,
    bridgeDaysCount: 1,
    efficiency: 4,
    startDate: '2026-01-01',
    endDate: '2026-01-04'
  },
  // Ramazan Bayramı (19 Mart arife Perşembe, 20-22 Mart 2026)
  // 14-15 Mart (Cmt-Paz) + 16,17,18 (köprü) + 19 (arife köprü 0.5) + 20,21,22 (tatil) + 23,24,25,26,27 (köprü) + 28-29 (Cmt-Paz)
  {
    id: 'ramazan-2026',
    name: 'Ramazan Bayramı',
    bridgeDays: ['2026-03-16', '2026-03-17', '2026-03-18', '2026-03-19', '2026-03-23', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-27'],
    totalVacationDays: 16,
    bridgeDaysCount: 8.5,
    efficiency: 1.88,
    startDate: '2026-03-14',
    endDate: '2026-03-29'
  },
  // 23 Nisan (Perşembe)
  {
    id: '23nisan-2026',
    name: '23 Nisan Tatili',
    bridgeDays: ['2026-04-24'],
    totalVacationDays: 4,
    bridgeDaysCount: 1,
    efficiency: 4,
    startDate: '2026-04-23',
    endDate: '2026-04-26'
  },
  // 1 Mayıs (Cuma)
  {
    id: '1mayis-2026',
    name: '1 Mayıs Tatili',
    bridgeDays: [],
    totalVacationDays: 3,
    bridgeDaysCount: 0,
    efficiency: Infinity,
    startDate: '2026-05-01',
    endDate: '2026-05-03'
  },
  // 19 Mayıs + Kurban Bayramı (26 Mayıs arife Salı, 27-30 Mayıs)
  // 16-17 Mayıs (Cmt-Paz) + 18 (köprü) + 19 (tatil) + 20,21,22 (köprü) + 23-24 (Cmt-Paz) + 25 (köprü) + 26 (arife köprü 0.5) + 27,28,29,30 (tatil) + 31 (Paz)
  {
    id: 'mayis-mega-2026',
    name: '19 Mayıs + Kurban Bayramı',
    bridgeDays: ['2026-05-18', '2026-05-20', '2026-05-21', '2026-05-22', '2026-05-25', '2026-05-26'],
    totalVacationDays: 16,
    bridgeDaysCount: 5.5,
    efficiency: 2.91,
    startDate: '2026-05-16',
    endDate: '2026-05-31'
  },
  // 15 Temmuz (Çarşamba)
  {
    id: '15temmuz-2026',
    name: '15 Temmuz Tatili',
    bridgeDays: ['2026-07-13', '2026-07-14', '2026-07-16', '2026-07-17'],
    totalVacationDays: 9,
    bridgeDaysCount: 4,
    efficiency: 2.25,
    startDate: '2026-07-11',
    endDate: '2026-07-19'
  },
  // 30 Ağustos (Pazar)
  {
    id: '30agustos-2026',
    name: '30 Ağustos Tatili',
    bridgeDays: [],
    totalVacationDays: 2,
    bridgeDaysCount: 0,
    efficiency: Infinity,
    startDate: '2026-08-29',
    endDate: '2026-08-30'
  },
  // Cumhuriyet Bayramı (28 Ekim arife Çarşamba, 29 Ekim Perşembe)
  // 24-25 Ekim (Cmt-Paz) + 26,27 (köprü) + 28 (arife köprü 0.5) + 29 (tatil) + 30 (köprü) + 31-1 Kasım (Cmt-Paz)
  {
    id: 'cumhuriyet-2026',
    name: 'Cumhuriyet Bayramı',
    bridgeDays: ['2026-10-26', '2026-10-27', '2026-10-28', '2026-10-30'],
    totalVacationDays: 9,
    bridgeDaysCount: 3.5,
    efficiency: 2.57,
    startDate: '2026-10-24',
    endDate: '2026-11-01'
  },
];

// 2027 Köprü İzni Önerileri - KESİNTİSİZ TATİL (Arifeler dahil)
const suggestions2027: BridgeSuggestion[] = [
  // Yılbaşı (1 Ocak 2027 - Cuma)
  {
    id: 'yilbasi-2027',
    name: 'Yılbaşı Tatili',
    bridgeDays: [],
    totalVacationDays: 3,
    bridgeDaysCount: 0,
    efficiency: Infinity,
    startDate: '2027-01-01',
    endDate: '2027-01-03'
  },
  // Ramazan Bayramı (8 Mart arife Pazartesi, 9-11 Mart 2027)
  // 6-7 Mart (Cmt-Paz) + 8 (arife köprü 0.5) + 9,10,11 (tatil) + 12 (köprü) + 13-14 (Cmt-Paz)
  {
    id: 'ramazan-2027',
    name: 'Ramazan Bayramı',
    bridgeDays: ['2027-03-08', '2027-03-12'],
    totalVacationDays: 9,
    bridgeDaysCount: 1.5,
    efficiency: 6,
    startDate: '2027-03-06',
    endDate: '2027-03-14'
  },
  // 23 Nisan (Cuma)
  {
    id: '23nisan-2027',
    name: '23 Nisan Tatili',
    bridgeDays: [],
    totalVacationDays: 3,
    bridgeDaysCount: 0,
    efficiency: Infinity,
    startDate: '2027-04-23',
    endDate: '2027-04-25'
  },
  // 1 Mayıs (Cumartesi)
  {
    id: '1mayis-2027',
    name: '1 Mayıs Tatili',
    bridgeDays: [],
    totalVacationDays: 2,
    bridgeDaysCount: 0,
    efficiency: Infinity,
    startDate: '2027-05-01',
    endDate: '2027-05-02'
  },
  // Kurban Bayramı (15 Mayıs arife Cumartesi, 16-19 Mayıs) + 19 Mayıs zaten tatil
  // 15 Mayıs Cmt (arife ama hafta sonu!) + 16,17,18,19 (tatil) + 20,21 (köprü) + 22-23 (Cmt-Paz)
  {
    id: 'kurban-2027',
    name: 'Kurban + 19 Mayıs',
    bridgeDays: ['2027-05-20', '2027-05-21'],
    totalVacationDays: 9,
    bridgeDaysCount: 2,
    efficiency: 4.5,
    startDate: '2027-05-15',
    endDate: '2027-05-23'
  },
  // 15 Temmuz (Perşembe)
  {
    id: '15temmuz-2027',
    name: '15 Temmuz Tatili',
    bridgeDays: ['2027-07-16'],
    totalVacationDays: 4,
    bridgeDaysCount: 1,
    efficiency: 4,
    startDate: '2027-07-15',
    endDate: '2027-07-18'
  },
  // 30 Ağustos (Pazartesi)
  {
    id: '30agustos-2027',
    name: '30 Ağustos Tatili',
    bridgeDays: [],
    totalVacationDays: 3,
    bridgeDaysCount: 0,
    efficiency: Infinity,
    startDate: '2027-08-28',
    endDate: '2027-08-30'
  },
  // Cumhuriyet Bayramı (28 Ekim arife Perşembe, 29 Ekim Cuma)
  // 28 Ekim arife (köprü 0.5) + 29 Ekim (tatil) + 30-31 (Cmt-Paz)
  {
    id: 'cumhuriyet-2027',
    name: 'Cumhuriyet Bayramı',
    bridgeDays: ['2027-10-28'],
    totalVacationDays: 4,
    bridgeDaysCount: 0.5,
    efficiency: 8,
    startDate: '2027-10-28',
    endDate: '2027-10-31'
  },
];

export const suggestionsByYear: Record<number, BridgeSuggestion[]> = {
  2025: suggestions2025,
  2026: suggestions2026,
  2027: suggestions2027,
};

export function getSuggestionsForYear(year: number): BridgeSuggestion[] {
  const suggestions = suggestionsByYear[year] || [];
  return suggestions.sort((a, b) => b.efficiency - a.efficiency);
}

export function getTotalVacationDays(year: number): { totalDays: number; bridgeDays: number } {
  const suggestions = suggestionsByYear[year] || [];
  const totalDays = suggestions.reduce((sum, s) => sum + s.totalVacationDays, 0);
  const bridgeDays = suggestions.reduce((sum, s) => sum + s.bridgeDaysCount, 0);
  return { totalDays, bridgeDays };
}
