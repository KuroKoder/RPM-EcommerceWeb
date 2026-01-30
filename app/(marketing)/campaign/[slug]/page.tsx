import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>; // Di Next.js terbaru, params adalah Promise
};

// Fungsi ini wajib ada agar file dikenali sebagai Module/Page
export default async function CampaignPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="container py-10">
      <h1 className="text-3xl font-bold">Campaign: {slug}</h1>
      <p>Halaman ini berhasil dimuat sebagai modul.</p>
    </main>
  );
}

// Opsional: Untuk SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Campaign ${slug} | RPM`,
  };
}