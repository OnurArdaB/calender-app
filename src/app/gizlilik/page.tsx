import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Gizlilik Politikası - Türkiye Tatil Takvimi',
  description: 'Türkiye Tatil Takvimi gizlilik politikası ve kişisel verilerin korunması hakkında bilgi.',
};

export default function GizlilikPage() {
  return (
    <PageLayout title="Gizlilik Politikası" description="Kişisel verilerinizin korunması bizim için önemlidir">
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 mb-6">
          Son güncelleme: 1 Ocak 2026
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. Giriş</h2>
        <p className="text-gray-700 mb-4">
          Türkiye Tatil Takvimi olarak, kullanıcılarımızın gizliliğine saygı duyuyor ve kişisel verilerinizin
          korunmasını önemsiyoruz. Bu gizlilik politikası, web sitemizi kullanırken toplanan bilgiler ve
          bu bilgilerin nasıl kullanıldığı hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. Toplanan Bilgiler</h2>
        <p className="text-gray-700 mb-4">
          Web sitemiz aşağıdaki bilgileri toplayabilir:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Tarayıcı türü ve sürümü</li>
          <li>İşletim sistemi</li>
          <li>Ziyaret edilen sayfalar ve ziyaret süresi</li>
          <li>IP adresi (anonimleştirilmiş)</li>
          <li>Çerezler aracılığıyla toplanan kullanım verileri</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. Çerezler (Cookies)</h2>
        <p className="text-gray-700 mb-4">
          Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır. Çerezler, tarayıcınız
          tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezleri tarayıcı ayarlarınızdan
          devre dışı bırakabilirsiniz, ancak bu durumda bazı özellikler düzgün çalışmayabilir.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. Google AdSense ve Reklamlar</h2>
        <p className="text-gray-700 mb-4">
          Web sitemizde Google AdSense reklamları gösterilmektedir. Google, reklamları kişiselleştirmek
          için çerezler kullanabilir. Google'ın çerez kullanımı hakkında daha fazla bilgi için
          Google Gizlilik Politikası'nı inceleyebilirsiniz.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. Üçüncü Taraf Hizmetleri</h2>
        <p className="text-gray-700 mb-4">
          Web sitemiz aşağıdaki üçüncü taraf hizmetlerini kullanmaktadır:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Google AdSense (reklam)</li>
          <li>Google Analytics (analiz)</li>
          <li>Vercel (hosting)</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">6. Veri Güvenliği</h2>
        <p className="text-gray-700 mb-4">
          Kişisel verilerinizin güvenliğini sağlamak için uygun teknik ve organizasyonel önlemler
          alınmaktadır. Verileriniz şifreli bağlantı (HTTPS) üzerinden iletilmektedir.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">7. Kullanıcı Hakları</h2>
        <p className="text-gray-700 mb-4">
          KVKK kapsamında aşağıdaki haklara sahipsiniz:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
          <li>Kişisel verilerinizin silinmesini isteme</li>
          <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">8. İletişim</h2>
        <p className="text-gray-700 mb-4">
          Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
        </p>
        <p className="text-gray-700">
          E-posta: iletisim@tatilplanlayici.com
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">9. Değişiklikler</h2>
        <p className="text-gray-700 mb-4">
          Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlanacaktır.
          Politikayı düzenli olarak kontrol etmenizi öneririz.
        </p>
      </div>
    </PageLayout>
  );
}
