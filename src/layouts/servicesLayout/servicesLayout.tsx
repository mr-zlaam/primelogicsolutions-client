import type { MenuItemType } from "@/types";

function ServicesLayout({ data }: { data: MenuItemType }) {
  console.info(data.pageData);
  return <section>ServicesLayout</section>;
}

export default ServicesLayout;
