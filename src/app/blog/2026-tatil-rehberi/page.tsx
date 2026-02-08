import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export const metadata = {
  title: '2026 Yılı Tatil Rehberi: Tüm Resmi Tatiller - Türkiye Tatil Takvimi',
  description: '2026 yılındaki tüm resmi tatilleri, dini bayramları ve önemli günleri keşfedin. Tatil planlamanızı şimdiden yapın.',
};

export default function TatilRehberiPage() {
  return (
    <PageLayout title="2026 Yılı Tatil Rehberi" description="Tüm Resmi Tatiller ve Önemli Günler">
      <article className="prose prose-gray max-w-none">
        <div className="flex items-center gap-3 mb-6 text-sm">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded-full">Rehber</span>
          <span className="text-gray-500">1 Ocak 2026</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500">5 dk okuma</span>
        </div>

        <p className="text-lg text-gray-700 mb-6">
          2026 yılı, çalışanlar için oldukça verimli tatil fırsatları sunuyor. Bu rehberde, tüm resmi
          tatilleri, dini bayramları ve köprü izni fırsatlarını detaylı olarak inceliyoruz.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Resmi Tatiller</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. Yılbaşı (1 Ocak 2026 - Perşembe)</h3>
        <p className="text-gray-700 mb-4">
          Yeni yıla Perşembe günü giriyoruz. Cuma günü izin alarak 4 günlük bir tatil yapabilirsiniz.
          Bu dönemde kış turizmi bölgeleri (Uludağ, Kartalkaya, Palandöken) oldukça popüler olacaktır.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. Ulusal Egemenlik ve Çocuk Bayramı (23 Nisan 2026 - Perşembe)</h3>
        <p className="text-gray-700 mb-4">
          TBMM'nin açılışının yıl dönümü olan 23 Nisan, aynı zamanda dünya çocuklarına armağan edilmiş
          özel bir gündür. Perşembe gününe denk gelmesi, 4 günlük tatil fırsatı sunuyor.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. Emek ve Dayanışma Günü (1 Mayıs 2026 - Cuma)</h3>
        <p className="text-gray-700 mb-4">
          İşçi Bayramı Cuma gününe denk geliyor. Hiç izin almadan 3 günlük hafta sonu tatili yapabilirsiniz.
          Bahar aylarının güzelliklerini yaşamak için ideal bir dönem.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">4. Atatürk'ü Anma, Gençlik ve Spor Bayramı (19 Mayıs 2026 - Salı)</h3>
        <p className="text-gray-700 mb-4">
          Samsun'a çıkışın yıl dönümü Salı gününe denk geliyor. Pazartesi günü izin alarak 4 günlük
          tatil yapabilirsiniz. Karadeniz turu için mükemmel bir zaman.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">5. Demokrasi ve Milli Birlik Günü (15 Temmuz 2026 - Çarşamba)</h3>
        <p className="text-gray-700 mb-4">
          15 Temmuz darbe girişiminin püskürtülmesinin anısına kutlanan bu gün Çarşamba'ya denk geliyor.
          Perşembe ve Cuma izin alarak 5 günlük tatil yapabilirsiniz.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">6. Zafer Bayramı (30 Ağustos 2026 - Pazar)</h3>
        <p className="text-gray-700 mb-4">
          Büyük Taarruz'un yıl dönümü Pazar gününe denk geliyor. Hafta sonuyla birleşiyor ancak
          Pazartesi izin alarak tatili uzatabilirsiniz.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">7. Cumhuriyet Bayramı (29 Ekim 2026 - Perşembe)</h3>
        <p className="text-gray-700 mb-4">
          Cumhuriyetimizin 103. yılını kutlayacağız. 28 Ekim Çarşamba öğleden sonra arife tatili,
          29 Ekim tam gün tatil. Cuma izin alarak 5 günlük tatil yapılabilir.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Dini Bayramlar</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Ramazan Bayramı (19-22 Mart 2026)</h3>
        <p className="text-gray-700 mb-4">
          Ramazan Bayramı 2026 yılında Mart ayının ortasına denk geliyor. 19 Mart Perşembe öğleden
          sonra arife, 20-22 Mart bayram günleri. Hafta sonuyla birleşerek uzun bir tatil dönemi
          oluşturuyor.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Arife: 19 Mart Perşembe (yarım gün)</li>
          <li>1. Gün: 20 Mart Cuma</li>
          <li>2. Gün: 21 Mart Cumartesi</li>
          <li>3. Gün: 22 Mart Pazar</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Kurban Bayramı (26-30 Mayıs 2026)</h3>
        <p className="text-gray-700 mb-4">
          Kurban Bayramı yılın en uzun tatil dönemlerinden birini oluşturuyor. 4,5 günlük resmi tatil
          ile birlikte sadece 1 gün izin alarak 9 günlük tatil yapabilirsiniz!
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Arife: 26 Mayıs Salı (yarım gün)</li>
          <li>1. Gün: 27 Mayıs Çarşamba</li>
          <li>2. Gün: 28 Mayıs Perşembe</li>
          <li>3. Gün: 29 Mayıs Cuma</li>
          <li>4. Gün: 30 Mayıs Cumartesi</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Özet Tablo</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Tatil</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Tarih</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Gün</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Süre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Yılbaşı</td>
                <td className="border border-gray-300 px-4 py-2">1 Ocak</td>
                <td className="border border-gray-300 px-4 py-2">Perşembe</td>
                <td className="border border-gray-300 px-4 py-2">1 gün</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Ramazan Bayramı</td>
                <td className="border border-gray-300 px-4 py-2">19-22 Mart</td>
                <td className="border border-gray-300 px-4 py-2">Per-Paz</td>
                <td className="border border-gray-300 px-4 py-2">3,5 gün</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">23 Nisan</td>
                <td className="border border-gray-300 px-4 py-2">23 Nisan</td>
                <td className="border border-gray-300 px-4 py-2">Perşembe</td>
                <td className="border border-gray-300 px-4 py-2">1 gün</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1 Mayıs</td>
                <td className="border border-gray-300 px-4 py-2">1 Mayıs</td>
                <td className="border border-gray-300 px-4 py-2">Cuma</td>
                <td className="border border-gray-300 px-4 py-2">1 gün</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">19 Mayıs</td>
                <td className="border border-gray-300 px-4 py-2">19 Mayıs</td>
                <td className="border border-gray-300 px-4 py-2">Salı</td>
                <td className="border border-gray-300 px-4 py-2">1 gün</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Kurban Bayramı</td>
                <td className="border border-gray-300 px-4 py-2">26-30 Mayıs</td>
                <td className="border border-gray-300 px-4 py-2">Sal-Cmt</td>
                <td className="border border-gray-300 px-4 py-2">4,5 gün</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">15 Temmuz</td>
                <td className="border border-gray-300 px-4 py-2">15 Temmuz</td>
                <td className="border border-gray-300 px-4 py-2">Çarşamba</td>
                <td className="border border-gray-300 px-4 py-2">1 gün</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">30 Ağustos</td>
                <td className="border border-gray-300 px-4 py-2">30 Ağustos</td>
                <td className="border border-gray-300 px-4 py-2">Pazar</td>
                <td className="border border-gray-300 px-4 py-2">1 gün</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Cumhuriyet Bayramı</td>
                <td className="border border-gray-300 px-4 py-2">28-29 Ekim</td>
                <td className="border border-gray-300 px-4 py-2">Çar-Per</td>
                <td className="border border-gray-300 px-4 py-2">1,5 gün</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Tatil Planınızı Yapın!</h3>
          <p className="text-gray-600 mb-4">
            Tüm bu tatilleri ve köprü izni fırsatlarını görmek için takvimimizi kullanın.
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
