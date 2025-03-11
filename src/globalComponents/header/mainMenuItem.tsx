import type { MenuItemType } from "@/lib/types/types";
import Link from "next/link";
import type { JSX } from "react";

interface MainMenuItemProps {
  item: MenuItemType;
  columnIndex: number;
  parentTitle: string;
}

export default function MainMenuItem({ item }: MainMenuItemProps): JSX.Element {
  // Maximum number of children to display (limit to 6 as requested)
  const MAX_CHILDREN = 6;

  // Limit children items to MAX_CHILDREN (6)
  const limitedChildren = item.children ? item.children.slice(0, MAX_CHILDREN) : [];

  return (
    <div className="relative">
      <div className="mb-3">
        <h3 className="text-primary font-semibold text-sm tracking-wide">{item.title}</h3>
      </div>

      {limitedChildren.length > 0 && (
        <ul className="space-y-2">
          {limitedChildren.map((subItem) => (
            <li key={subItem.id}>
              <Link
                href={subItem.href !== undefined ? subItem.href : "#"}
                className="text-gray-600 hover:text-secondary transition-colors text-sm flex items-center justify-between group">
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
