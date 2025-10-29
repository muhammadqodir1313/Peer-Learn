import KnowledgeDetailClient from "./KnowledgeDetailClient";

export default async function Page({ params }: { params: { id: string } }) {
  return <KnowledgeDetailClient params={params} />;
}
