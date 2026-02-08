'use client';

import { useEffect, useState } from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
}

export default function AdBanner({ slot = 'XXXXXXXXXX', format = 'horizontal' }: AdBannerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Placeholder - gerçek AdSense ID'si geldiğinde değiştirilecek
  const isPlaceholder = slot === 'XXXXXXXXXX';

  if (!isClient) return null;

  if (isPlaceholder) {
    return (
      <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
        <div className="flex items-center justify-center gap-2 text-gray-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
          <span className="font-medium">Reklam Alanı</span>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Google AdSense ID eklendiğinde burada reklam görünecek
        </p>
      </div>
    );
  }

  // Gerçek AdSense kodu
  return (
    <div className="w-full">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Kendi Publisher ID'nizi ekleyin
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
