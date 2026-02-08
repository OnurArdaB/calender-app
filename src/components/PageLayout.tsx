'use client';

import Link from 'next/link';
import AdBanner from './AdBanner';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm mb-2 inline-block">
            ← Ana Sayfa
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          {description && <p className="text-gray-600 mt-1">{description}</p>}
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 pt-4">
        <AdBanner />
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {children}
        </div>
      </main>

      <div className="max-w-4xl mx-auto px-4 pb-4">
        <AdBanner />
      </div>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6">
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
