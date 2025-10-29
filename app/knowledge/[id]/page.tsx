import KnowledgeDetailClient from "./KnowledgeDetailClient";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <KnowledgeDetailClient params={{ id }} />;
}
