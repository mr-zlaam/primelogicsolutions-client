// app/services/[[...href]]/page.tsx

import { findMenuItem } from "@/lib/utils/menu-utils";

export default async function ServicePage({ params }: { params: Promise<{ href: string[] }> }) {
  const { href } = await params;
  console.info("Received path segments:", href);

  const menuItem = findMenuItem(href);
  if (menuItem === null || menuItem === undefined)
    throw new Error("Menu item not found");
  console.info("Found menu item:", menuItem?.pageData?.map(sect => sect.title));

  return <pre>{JSON.stringify(menuItem, null, 2)}</pre>;
}
