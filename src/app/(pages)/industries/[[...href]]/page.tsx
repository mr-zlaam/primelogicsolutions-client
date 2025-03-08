// app/services/[[...href]]/page.tsx

import { findMenuItem } from "@/lib/utils/menu-utils";
import { notFound } from "next/navigation";

export default async function ServicePage({ params }: { params: Promise<{ href: string[] }> }) {
  const { href } = await params;
  console.info("Received path segments:", href);

  const menuItem = findMenuItem(href, "INDUSTRIES");
  if (menuItem === null || menuItem === undefined) return notFound();
  console.info(
    "Found menu item:",
    menuItem?.pageData?.map((sect) => sect.title)
  );

  return <pre>{JSON.stringify(menuItem, null, 2)}</pre>;
}
