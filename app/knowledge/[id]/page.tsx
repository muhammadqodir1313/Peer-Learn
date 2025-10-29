import KnowledgeDetailClient from "./KnowledgeDetailClient";

export async function generateStaticParams() {
  // Generate static pages for all knowledge items
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <KnowledgeDetailClient params={{ id }} />;
}
