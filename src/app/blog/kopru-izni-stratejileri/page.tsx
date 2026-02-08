import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Köprü İzni Stratejileri: Az İzinle Çok Tatil - Türkiye Tatil Takvimi',
  description: 'Yıllık izninizi en verimli şekilde kullanmanın yolları. Profesyonel köprü izni taktikleri ve uzman önerileri.',
};

export default function KopruIzniStratejileriPage() {
  return (
    <PageLayout title="Köprü İzni Stratejileri" description="Az İzinle Çok Tatil Yapmanın Yolları">
      <article className="prose prose-gray max-w-none">
        <div className="flex items-center gap-3 mb-6 text-sm">
          <span className="px-3 py-1 bg-green-100 text-green-700 font-medium rounded-full">İpuçları</span>
          <span className="text-gray-500">1 Ocak 2026</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500">7 dk okuma</span>
        </div>

        <p className="text-lg text-gray-700 mb-6">
          Yıllık izin günleriniz sınırlı, ama tatil hayalleriniz sınırsız mı? Doğru köprü izni stratejileri
          ile az izin kullanarak maksimum tatil yapabilirsiniz. İşte 2026 için profesyonel taktikler.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Köprü İzni Nedir?</h2>
        <p className="text-gray-700 mb-4">
          Köprü izni, resmi tatiller ile hafta sonları arasında kalan iş günlerinde alınan izindir.
          Bu strateji sayesinde kısa süreli yıllık izinlerle uzun tatil dönemleri oluşturabilirsiniz.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-yellow-800">
            <strong>Altın Kural:</strong> Verimlilik oranı = Toplam tatil günü / Kullanılan izin günü.
            Bu oran ne kadar yüksekse, izninizi o kadar verimli kullanıyorsunuz demektir.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2026'nın En Verimli Köprü İzinleri</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. Kurban Bayramı - 9x Verimlilik 🏆</h3>
        <div className="bg-green-50 rounded-lg p-4 mb-4">
          <p className="text-green-800 font-medium">1 gün izin = 9 gün tatil</p>
        </div>
        <p className="text-gray-700 mb-4">
          2026'nın şampiyonu! Kurban Bayramı 26-30 Mayıs tarihleri arasında. Sadece 25 Mayıs Pazartesi
          günü izin alarak 23 Mayıs Cumartesi'den 31 Mayıs Pazar'a kadar tam 9 gün tatil yapabilirsiniz.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. Cumhuriyet Bayramı - 5x Verimlilik</h3>
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <p className="text-blue-800 font-medium">1 gün izin = 5 gün tatil</p>
        </div>
        <p className="text-gray-700 mb-4">
          Cumhuriyet Bayramı 28-29 Ekim'de (Çarşamba-Perşembe). 30 Ekim Cuma izin alarak
          28 Ekim'den 1 Kasım'a kadar 5 günlük bir tatil yapabilirsiniz.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. Yılbaşı, 23 Nisan, 19 Mayıs - 4x Verimlilik</h3>
        <div className="bg-purple-50 rounded-lg p-4 mb-4">
          <p className="text-purple-800 font-medium">1 gün izin = 4 gün tatil</p>
        </div>
        <p className="text-gray-700 mb-4">
          Bu üç tatil de Perşembe veya Salı günlerine denk geliyor. Tek bir gün izin alarak
          hafta sonuyla birleştirip 4 günlük tatiller oluşturabilirsiniz.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Strateji Önerileri</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Strateji 1: Minimalist Yaklaşım</h3>
        <p className="text-gray-700 mb-4">
          Sadece en verimli köprü izinlerini kullanın. 4x ve üzeri verimlilik oranına sahip izinlere
          odaklanarak toplam 5-6 gün izinle 25+ gün tatil yapabilirsiniz.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Yılbaşı: 1 gün izin → 4 gün tatil</li>
          <li>23 Nisan: 1 gün izin → 4 gün tatil</li>
          <li>19 Mayıs: 1 gün izin → 4 gün tatil</li>
          <li>Kurban Bayramı: 1 gün izin → 9 gün tatil</li>
          <li>Cumhuriyet Bayramı: 1 gün izin → 5 gün tatil</li>
        </ul>
        <p className="text-gray-700 mb-4">
          <strong>Toplam: 5 gün izin = 26 gün tatil</strong>
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Strateji 2: Mega Tatil Yaklaşımı</h3>
        <p className="text-gray-700 mb-4">
          Birden fazla tatili birleştirerek uzun dönem tatiller oluşturun. Özellikle Mayıs ayı
          bu strateji için mükemmel: 19 Mayıs + Kurban Bayramı.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>18 Mayıs Pazartesi izin</li>
          <li>20-22 Mayıs (3 gün) izin</li>
          <li>25 Mayıs Pazartesi izin</li>
        </ul>
        <p className="text-gray-700 mb-4">
          <strong>Toplam: 5 gün izin = 16 gün kesintisiz tatil!</strong>
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Strateji 3: Erken Planlama</h3>
        <p className="text-gray-700 mb-4">
          Yıl başında tüm köprü izinlerinizi planlayın ve yöneticinize bildirin. Erken rezervasyon
          yaparak hem uçak bileti hem de otel fiyatlarından tasarruf edin.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Dikkat Edilmesi Gerekenler</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Şirket Politikası:</strong> Bazı şirketler köprü izinlerini kısıtlayabilir veya zorunlu tatil ilan edebilir.</li>
          <li><strong>Erken Başvuru:</strong> Popüler dönemlerde izin almak zor olabilir, erken başvurun.</li>
          <li><strong>Takım Koordinasyonu:</strong> Ekip arkadaşlarınızla koordineli olun, herkes aynı anda izne çıkmasın.</li>
          <li><strong>Proje Planlaması:</strong> Önemli proje teslim tarihleriyle çakışmamaya dikkat edin.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Sonuç</h2>
        <p className="text-gray-700 mb-4">
          2026 yılı, akıllı köprü izni planlaması için harika fırsatlar sunuyor. Özellikle Kurban Bayramı'ndaki
          9x verimlilik oranı, yılın en değerli izin fırsatı. Şimdiden planlamaya başlayın ve
          yıllık izninizi en verimli şekilde değerlendirin!
        </p>

        <div className="bg-blue-50 rounded-xl p-6 mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Hemen Planlayın!</h3>
          <p className="text-gray-600 mb-4">
            İnteraktif takvimimizle köprü izinlerinizi seçin ve toplam tatil gününüzü anında görün.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Takvime Git
          </Link>
        </div>
      </article>
    </PageLayout>
  );
}
