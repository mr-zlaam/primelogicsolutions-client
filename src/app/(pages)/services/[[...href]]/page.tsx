export default async function ServicePage({ params }: { params: Promise<{ href: string[] }> }) {
  const { href } = await params;
  console.info(href);
  return <div>{JSON.stringify(href, null, 2)}</div>;
}
