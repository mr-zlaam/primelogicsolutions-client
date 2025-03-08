export default async function ServicePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  console.info(slug);
  return <div>{JSON.stringify(slug, null, 2)}</div>;
}
