export interface MenuItemType {
  id: number;
  title: string;
  description?: string;
  pageData?: string | Sections[];
  href?: string;
  image?: string;
  children?: MenuItemType[];
}

// Type for content sections
export interface Sections {
  id: number;
  title?: string;
  subTitle?: string;
  description?: string;
  sectionChildren: Sections[];
}

// Section identifier type to help with template selection
export const SectionType = {
  SERVICES: "SERVICES",
  INDUSTRIES: "INDUSTRIES",
  TECHNOLOGIES: "TECHNOLOGIES"
} as const;

export type SectionTypes = (typeof SectionType)[keyof typeof SectionType];

// Helper function to determine the section type based on path or menu item
export function getSectionType(path: string): SectionTypes | null {
  if (path.startsWith("/services")) return SectionType.SERVICES;
  if (path.startsWith("/industries")) return SectionType.INDUSTRIES;
  if (path.startsWith("/technologies")) return SectionType.TECHNOLOGIES;
  return null;
}

// Helper function to get the top-level parent of any menu item
export function getTopLevelParent(menuData: MenuItemType[], currentItemId: number): SectionTypes | null {
  // Find item directly at top level
  const topLevelItem = menuData.find((item) => item.id === currentItemId);
  if (topLevelItem) {
    return topLevelItem.title as SectionTypes;
  }

  // Search through children
  for (const item of menuData) {
    if (!item.children) continue;

    // Look in first level children
    const childItem = item.children.find((child) => child.id === currentItemId);
    if (childItem) {
      return item.title as SectionTypes;
    }

    // Look in second level (grandchildren)
    for (const child of item.children) {
      if (!child.children) continue;

      const grandchildItem = child.children.find((gc) => gc.id === currentItemId);
      if (grandchildItem) {
        return item.title as SectionTypes;
      }
    }
  }

  return null;
}
