import Link from 'next/link';
import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Blog - Türkiye Tatil Takvimi',
  description: 'Tatil planlama ipuçları, köprü izni stratejileri ve 2026 tatil rehberi.',
};

const blogPosts = [
  {
    slug: '2026-tatil-rehberi',
    title: '2026 Yılı Tatil Rehberi: Tüm Resmi Tatiller',
    excerpt: '2026 yılındaki tüm resmi tatilleri, dini bayramları ve önemli günleri keşfedin. Tatil planlamanızı şimdiden yapın.',
    date: '1 Ocak 2026',
    readTime: '5 dk',
    category: 'Rehber'
  },
  {
    slug: 'kopru-izni-stratejileri',
    title: 'Köprü İzni Stratejileri: Az İzinle Çok Tatil',
    excerpt: 'Yıllık izninizi en verimli şekilde kullanmanın yolları. Profesyonel köprü izni taktikleri ve uzman önerileri.',
    date: '1 Ocak 2026',
    readTime: '7 dk',
    category: 'İpuçları'
  },
  {
    slug: 'ramazan-bayrami-tatil-onerileri',
    title: '2026 Ramazan Bayramı Tatil Önerileri',
    excerpt: 'Ramazan Bayramı tatilinde gidilecek yerler, konaklama önerileri ve bütçe dostu tatil fikirleri.',
    date: '1 Ocak 2026',
    readTime: '6 dk',
    category: 'Tatil Önerileri'
  }
];

export default function BlogPage() {
  return (
    <PageLayout title="Blog" description="Tatil planlama ipuçları ve rehberler">
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <article className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-500 text-sm">{post.readTime} okuma</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600">
                {post.excerpt}
              </p>
              <div className="mt-4 text-blue-600 font-medium group-hover:underline">
                Devamını oku →
              </div>
            </article>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
