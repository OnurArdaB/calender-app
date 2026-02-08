'use client';

import { useState } from 'react';
import Link from 'next/link';
import Calendar from '@/components/Calendar';
import BridgeCalculator from '@/components/BridgeCalculator';
import BridgeSuggestions from '@/components/BridgeSuggestions';
import HolidayList from '@/components/HolidayList';
import AdBanner from '@/components/AdBanner';

export default function Home() {
  const [selectedDates, setSelectedDates] = useState<Set<string>>(new Set());

  const handleDateToggle = (date: string) => {
    setSelectedDates(prev => {
      const newSet = new Set(prev);
      if (newSet.has(date)) {
        newSet.delete(date);
      } else {
        newSet.add(date);
      }
      return newSet;
    });
  };

  const handleClearAll = () => {
    setSelectedDates(new Set());
  };

  const handleApplySuggestion = (days: string[]) => {
    setSelectedDates(prev => {
      const newSet = new Set(prev);
      days.forEach(day => newSet.add(day));
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Türkiye Tatil Takvimi 2026
          </h1>
          <p className="text-gray-600 mt-1">
            Köprü izinlerinizi planlayın, tatil günlerinizi hesaplayın
          </p>
        </div>
      </header>

      {/* Üst Reklam */}
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <AdBanner />
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol: Takvim */}
          <div className="lg:col-span-2">
            <Calendar
              selectedDates={selectedDates}
              onDateToggle={handleDateToggle}
            />
          </div>

          {/* Sağ: Hesaplayıcı */}
          <div>
            <BridgeCalculator
              selectedDates={selectedDates}
              onClearAll={handleClearAll}
            />
          </div>
        </div>

        {/* Alt: Öneriler ve Tatil Listesi */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BridgeSuggestions
            selectedDates={selectedDates}
            onApplySuggestion={handleApplySuggestion}
          />
          <HolidayList />
        </div>
      </main>

      {/* Alt Reklam */}
      <div className="max-w-7xl mx-auto px-4 pb-4">
        <AdBanner />
      </div>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
            <Link href="/hakkimizda" className="hover:text-blue-600">Hakkımızda</Link>
            <Link href="/iletisim" className="hover:text-blue-600">İletişim</Link>
            <Link href="/gizlilik" className="hover:text-blue-600">Gizlilik Politikası</Link>
            <Link href="/sss" className="hover:text-blue-600">SSS</Link>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          </div>
          <p className="text-center text-gray-500 text-sm">
            © 2026 Türkiye Tatil Takvimi. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
