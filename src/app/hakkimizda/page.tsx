import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Hakkımızda - Türkiye Tatil Takvimi',
  description: 'Türkiye Tatil Takvimi hakkında bilgi. Köprü izni planlama ve tatil hesaplama aracı.',
};

export default function HakkimizdaPage() {
  return (
    <PageLayout title="Hakkımızda" description="Türkiye'nin en kapsamlı tatil planlama aracı">
      <div className="prose prose-gray max-w-none">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Misyonumuz</h2>
          <p className="text-gray-700 text-lg">
            Türkiye'deki çalışanların tatil günlerini en verimli şekilde planlamalarına yardımcı olmak.
            Köprü izinlerini akıllıca kullanarak daha uzun tatiller yapmanızı sağlıyoruz.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Neden Türkiye Tatil Takvimi?</h2>
        <p className="text-gray-700 mb-4">
          Türkiye Tatil Takvimi, 2026 yılındaki tüm resmi tatilleri ve dini bayramları içeren kapsamlı
          bir tatil planlama aracıdır. Özel sektör çalışanları için tasarlanmış bu araç, köprü izinlerini
          otomatik olarak hesaplar ve size en verimli tatil planlarını sunar.
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Güncel Takvim</h3>
            <p className="text-gray-600 text-sm">
              2026 yılı resmi tatilleri ve dini bayramlar dahil tüm önemli günler
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌉</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Köprü İzni</h3>
            <p className="text-gray-600 text-sm">
              Akıllı köprü izni önerileri ile tatil günlerinizi maksimize edin
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Verimlilik</h3>
            <p className="text-gray-600 text-sm">
              Minimum izin günü ile maksimum tatil süresi hesaplaması
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">Özelliklerimiz</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Resmi Tatiller:</strong> Yılbaşı, 23 Nisan, 1 Mayıs, 19 Mayıs, 15 Temmuz, 30 Ağustos, 29 Ekim</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Dini Bayramlar:</strong> Ramazan Bayramı (3,5 gün) ve Kurban Bayramı (4,5 gün)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Arife Günleri:</strong> Bayram arifeleri yarım gün olarak hesaplanır</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Otomatik Hesaplama:</strong> Seçtiğiniz köprü izinleri anında hesaplanır</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span><strong>Akıllı Öneriler:</strong> En verimli köprü izni kombinasyonları</span>
          </li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">2026 Yılı Tatil Özeti</h2>
        <p className="text-gray-700 mb-4">
          2026 yılında özel sektör çalışanları için toplam <strong>15,5 gün</strong> resmi tatil bulunmaktadır.
          Doğru köprü izinleri ile bu günleri <strong>50+ güne</strong> çıkarmanız mümkün!
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">İletişim</h2>
          <p className="text-gray-700">
            Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz.
            Türkiye Tatil Takvimi'ni daha iyi hale getirmek için her türlü fikre açığız.
          </p>
          <p className="text-gray-700 mt-4">
            <strong>E-posta:</strong> iletisim@tatilplanlayici.com
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
