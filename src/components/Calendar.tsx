'use client';

import { useState } from 'react';
import { holidays2026, isHoliday, isWeekend, Holiday } from '@/data/holidays';

interface CalendarProps {
  selectedDates: Set<string>;
  onDateToggle: (date: string) => void;
}

const MONTHS = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
];

const DAYS = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];

export default function Calendar({ selectedDates, onDateToggle }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(0);
  const year = 2026;

  const getDaysInMonth = (month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Pazartesi = 0
  };

  const formatDate = (month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const renderMonth = (month: number) => {
    const daysInMonth = getDaysInMonth(month);
    const firstDay = getFirstDayOfMonth(month);
    const days = [];

    // Boş günler
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />);
    }

    // Ayın günleri
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = formatDate(month, day);
      const date = new Date(year, month, day);
      const holiday = isHoliday(date);
      const weekend = isWeekend(date);
      const isSelected = selectedDates.has(dateStr);

      let bgColor = 'bg-white hover:bg-gray-100';
      let textColor = 'text-gray-900';
      let border = '';

      if (holiday) {
        if (holiday.type === 'yarim-gun') {
          bgColor = 'bg-orange-200';
          textColor = 'text-orange-800';
        } else {
          bgColor = 'bg-red-200';
          textColor = 'text-red-800';
        }
      } else if (weekend) {
        bgColor = 'bg-gray-200';
        textColor = 'text-gray-600';
      }

      if (isSelected) {
        border = 'ring-2 ring-blue-500 ring-offset-1';
        if (!holiday && !weekend) {
          bgColor = 'bg-blue-100';
        }
      }

      days.push(
        <button
          key={day}
          onClick={() => !holiday && !weekend && onDateToggle(dateStr)}
          disabled={!!holiday || weekend}
          className={`h-10 w-full rounded-md text-sm font-medium ${bgColor} ${textColor} ${border}
            ${!holiday && !weekend ? 'cursor-pointer' : 'cursor-not-allowed'}
            transition-all duration-150`}
          title={holiday?.name || (weekend ? 'Hafta sonu' : '')}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setCurrentMonth(Math.max(0, currentMonth - 1))}
          disabled={currentMonth === 0}
          className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-xl font-bold text-gray-800">
          {MONTHS[currentMonth]} {year}
        </h2>
        <button
          onClick={() => setCurrentMonth(Math.min(11, currentMonth + 1))}
          disabled={currentMonth === 11}
          className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map(day => (
          <div key={day} className="h-8 flex items-center justify-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {renderMonth(currentMonth)}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-200" />
          <span>Resmi Tatil</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-orange-200" />
          <span>Yarım Gün</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-200" />
          <span>Hafta Sonu</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-100 ring-2 ring-blue-500" />
          <span>Köprü İzni</span>
        </div>
      </div>
    </div>
  );
}
