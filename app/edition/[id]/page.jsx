import { notFound } from 'next/navigation';
import editions from '@/data/editions.json';

export function generateStaticParams() {
  return editions.map((edition) => ({ id: edition.id }));
}

export default function EditionPage({ params }) {
  const edition = editions.find((e) => e.id === params.id);
  if (!edition) return notFound();

  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        نسخه شماره {edition.number} - {edition.date}
      </h2>
      <img src={edition.imageUrl} alt="نسخه" className="w-full max-w-3xl mx-auto" />
      <a href={edition.pdfUrl} download className="inline-block mt-4 text-blue-600">
        📥 دانلود نسخه الکترونیکی
      </a>
    </main>
  );
}
