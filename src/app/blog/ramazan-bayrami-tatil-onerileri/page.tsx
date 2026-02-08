import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export const metadata = {
  title: '2026 Ramazan Bayramı Tatil Önerileri - Türkiye Tatil Takvimi',
  description: 'Ramazan Bayramı tatilinde gidilecek yerler, konaklama önerileri ve bütçe dostu tatil fikirleri.',
};

export default function RamazanBayramiPage() {
  return (
    <PageLayout title="2026 Ramazan Bayramı Tatil Önerileri" description="Gidilecek Yerler ve Tatil Fikirleri">
      <article className="prose prose-gray max-w-none">
        <div className="flex items-center gap-3 mb-6 text-sm">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 font-medium rounded-full">Tatil Önerileri</span>
          <span className="text-gray-500">1 Ocak 2026</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500">6 dk okuma</span>
        </div>

        <p className="text-lg text-gray-700 mb-6">
          2026 Ramazan Bayramı 19-22 Mart tarihleri arasında kutlanacak. Baharın başlangıcına denk gelen
          bu tatil, hem yurt içi hem de yurt dışı seyahatler için mükemmel bir zaman. İşte size
          önerilerimiz.
        </p>

        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-2">2026 Ramazan Bayramı Tarihleri</h3>
          <ul className="text-gray-700 space-y-1">
            <li>📅 Arife: 19 Mart Perşembe (yarım gün)</li>
            <li>📅 1. Gün: 20 Mart Cuma</li>
            <li>📅 2. Gün: 21 Mart Cumartesi</li>
            <li>📅 3. Gün: 22 Mart Pazar</li>
          </ul>
          <p className="text-gray-600 mt-3 text-sm">
            * Dini bayram tarihleri Diyanet İşleri Başkanlığı tarafından kesinleştirilir.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Yurt İçi Tatil Önerileri</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. Ege ve Akdeniz Kıyıları</h3>
        <p className="text-gray-700 mb-4">
          Mart ayı sonlarında Ege ve Akdeniz'de hava ılımaya başlar. Denize girmek için erken olsa da
          sahil kasabaları sakin ve fiyatlar uygun olur. Önerilen yerler:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li><strong>Fethiye:</strong> Ölüdeniz, Kelebekler Vadisi, Saklıkent Kanyonu</li>
          <li><strong>Kaş:</strong> Butik oteller, dalış, antik kentler</li>
          <li><strong>Bodrum:</strong> Tarihi yerler, restoranlar, gece hayatı</li>
          <li><strong>Antalya:</strong> Kaleiçi, Düden Şelalesi, müzeler</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. Kapadokya</h3>
        <p className="text-gray-700 mb-4">
          İlkbahar, Kapadokya'yı ziyaret etmek için en güzel dönemlerden biri. Hava sıcaklıkları
          ideal, balon turları için mükemmel koşullar. Yapılacaklar:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Sıcak hava balonu turu (şafakta)</li>
          <li>Göreme Açık Hava Müzesi</li>
          <li>Yeraltı şehirleri (Derinkuyu, Kaymaklı)</li>
          <li>ATV turları ve vadi yürüyüşleri</li>
          <li>Yerel şarap tadımları</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. Karadeniz</h3>
        <p className="text-gray-700 mb-4">
          Baharla birlikte yeşeren yaylalar ve göller harika manzaralar sunar. Özellikle:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li><strong>Trabzon:</strong> Sümela Manastırı, Uzungöl</li>
          <li><strong>Rize:</strong> Ayder Yaylası, çay bahçeleri</li>
          <li><strong>Artvin:</strong> Borçka Karagöl, Şavşat</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">4. Güneydoğu Anadolu</h3>
        <p className="text-gray-700 mb-4">
          Tarih ve gastronomi tutkunları için muhteşem bir rota. Bahar aylarında hava henüz
          çok sıcak değil, gezme keyfi yüksek.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li><strong>Gaziantep:</strong> Zeugma Müzesi, baklavacılar, tarihi hanlar</li>
          <li><strong>Mardin:</strong> Taş evler, Midyat, manastırlar</li>
          <li><strong>Şanlıurfa:</strong> Göbeklitepe, Balıklıgöl</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Yurt Dışı Tatil Önerileri</h2>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. Yakın Destinasyonlar (Vizesiz)</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Gürcistan (Tiflis, Batum):</strong> 2-3 saatlik uçuş, uygun fiyatlar, zengin mutfak</li>
          <li><strong>Kuzey Kıbrıs:</strong> Plajlar, tarihi yerler, casino</li>
          <li><strong>Karadağ:</strong> Kotor, Budva, doğal güzellikler</li>
          <li><strong>Bosna Hersek:</strong> Saraybosna, Mostar Köprüsü</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. Avrupa Şehir Turları</h3>
        <p className="text-gray-700 mb-4">
          Mart ayı, Avrupa'da turist yoğunluğunun az olduğu dönem. Daha uygun fiyatlar ve kalabalıksız
          sokaklar sizi bekliyor.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li><strong>Prag:</strong> Gotik mimari, bira kültürü, uygun fiyatlar</li>
          <li><strong>Budapeşte:</strong> Termal kaplıcalar, tuna nehri, Macar mutfağı</li>
          <li><strong>Roma:</strong> Vatikan, Kolezyum, İtalyan mutfağı</li>
          <li><strong>Barselona:</strong> Gaudi eserleri, plajlar, tapas</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Bütçe İpuçları</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Erken Rezervasyon:</strong> Uçak ve otel için en az 2 ay önceden rezervasyon yapın</li>
          <li><strong>Esnek Tarihler:</strong> Mümkünse arife gününden önce yola çıkın, dönüşü erteleyin</li>
          <li><strong>Alternatif Havalimanları:</strong> İstanbul yerine Sabiha Gökçen'den uçuşlar genelde daha uygun</li>
          <li><strong>Konaklama:</strong> Apart otel veya Airbnb ile tasarruf edin</li>
          <li><strong>Grup Turları:</strong> Özellikle yurt dışı için grup turları bireysel seyahatten ekonomik olabilir</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Köprü İzni ile Uzatın</h2>
        <p className="text-gray-700 mb-4">
          Ramazan Bayramı 19-22 Mart'ta (Perşembe-Pazar). Eğer 23-27 Mart (Pazartesi-Cuma) izin
          alabilirseniz, tatili 16 güne uzatabilirsiniz! Bu süre, uzun mesafeli seyahatler için idealdir.
        </p>

        <div className="bg-green-50 rounded-xl p-6 mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Tatil Planınızı Yapın</h3>
          <p className="text-gray-600 mb-4">
            Köprü izni hesaplayıcımızla Ramazan Bayramı tatilini nasıl uzatabileceğinizi görün.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Takvime Git
          </Link>
        </div>
      </article>
    </PageLayout>
  );
}
