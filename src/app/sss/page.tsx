'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';

const faqs = [
  {
    question: '2026 yılında kaç gün resmi tatil var?',
    answer: '2026 yılında özel sektör çalışanları için toplam 15,5 gün resmi tatil bulunmaktadır. Bu tatiller; Yılbaşı (1 gün), Ramazan Bayramı (3,5 gün), 23 Nisan (1 gün), 1 Mayıs (1 gün), 19 Mayıs (1 gün), Kurban Bayramı (4,5 gün), 15 Temmuz (1 gün), 30 Ağustos (1 gün) ve Cumhuriyet Bayramı (1,5 gün) şeklindedir.'
  },
  {
    question: 'Köprü izni nedir?',
    answer: 'Köprü izni, resmi tatiller ile hafta sonları arasında kalan iş günlerinde alınan izindir. Bu izinler sayesinde kısa süreli izinlerle uzun tatil dönemleri oluşturabilirsiniz. Örneğin, Perşembe günü tatil ise Cuma günü izin alarak 4 günlük bir tatil yapabilirsiniz.'
  },
  {
    question: 'En verimli köprü izinleri hangileri?',
    answer: '2026 yılı için en verimli köprü izinleri: 1) Kurban Bayramı - 1 gün izin ile 9 gün tatil (9x verimlilik), 2) Cumhuriyet Bayramı - 1 gün izin ile 5 gün tatil (5x verimlilik), 3) Yılbaşı, 23 Nisan, 19 Mayıs, 30 Ağustos - 1 gün izin ile 4 gün tatil (4x verimlilik).'
  },
  {
    question: 'Ramazan ve Kurban Bayramı tarihleri kesin mi?',
    answer: 'Dini bayram tarihleri Hicri takvime göre belirlenir ve Diyanet İşleri Başkanlığı tarafından ay gözlemine bağlı olarak kesinleştirilir. Sitemizdeki tarihler astronomik hesaplamalara dayanan tahmini tarihlerdir ve 1-2 gün farklılık gösterebilir.'
  },
  {
    question: 'Arife günleri tam gün mü yoksa yarım gün mü?',
    answer: 'Özel sektörde Ramazan Bayramı, Kurban Bayramı ve Cumhuriyet Bayramı arifeleri öğleden sonra tatildir, yani yarım gün olarak hesaplanır. Ancak bu durum işverenin politikasına göre değişebilir, bazı işverenler arife günlerini tam gün tatil yapabilir.'
  },
  {
    question: 'Tatil hesaplaması nasıl yapılıyor?',
    answer: 'Takvimde köprü izni olarak seçtiğiniz günler, resmi tatiller ve hafta sonları birleştirilerek toplam tatil günü hesaplanır. Sistem otomatik olarak ardışık günleri gruplar ve her dönem için detaylı bilgi sunar.'
  },
  {
    question: '15 Temmuz resmi tatil mi?',
    answer: 'Evet, 15 Temmuz Demokrasi ve Milli Birlik Günü 2017 yılından itibaren resmi tatil olarak kabul edilmektedir. Bu gün tüm kamu ve özel sektör çalışanları için tatildir.'
  },
  {
    question: 'Yıllık izin günlerim köprü izinlerinden düşer mi?',
    answer: 'Evet, köprü izni olarak kullandığınız günler yıllık izin hakkınızdan düşer. Bu nedenle yıllık izin günlerinizi stratejik kullanarak maksimum tatil süresi elde etmeniz önemlidir.'
  },
  {
    question: 'Bu takvim sadece özel sektör için mi geçerli?',
    answer: 'Bu takvim özel sektör çalışanları için optimize edilmiştir. Kamu çalışanları için bazı farklılıklar olabilir, örneğin idari izin uygulamaları farklı olabilir. Kamu çalışanları kendi kurumlarının izin politikalarını kontrol etmelidir.'
  },
  {
    question: 'Mobil cihazlarda kullanabilir miyim?',
    answer: 'Evet, Türkiye Tatil Takvimi tamamen mobil uyumludur. Telefonunuzun tarayıcısından siteyi ziyaret edebilir, hatta ana ekrana ekleyerek uygulama gibi kullanabilirsiniz.'
  }
];

export default function SSSPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageLayout title="Sık Sorulan Sorular" description="Merak edilenler ve cevapları">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-xl">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Başka sorunuz mu var?</h2>
        <p className="text-gray-600 mb-4">
          Burada cevabını bulamadığınız sorularınız için bizimle iletişime geçebilirsiniz.
        </p>
        <a
          href="/iletisim"
          className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          İletişime Geç
        </a>
      </div>
    </PageLayout>
  );
}
