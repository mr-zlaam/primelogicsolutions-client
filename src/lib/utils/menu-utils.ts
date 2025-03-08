import { menuData } from "../menu-data"; // Adjust path to your menuData file
import type { MenuItemType } from "@/types";

/**
 * Normalize path segment to handle common typos
 */
function normalizePathSegment(segment: string): string {
  const typos: Record<string, string> = {
    "web-devlopment": "web-development",
    "software-devlopment": "software-development",
    "mobile-devlopment": "mobile-development",
    "computer-visionss": "computer-vision"
  };

  return typos[segment] || segment;
}

/**
 * Find a menu item based on path segments
 *
 * @param pathSegments Array of path segments (e.g. ["data-and-analytics", "computer-vision"])
 * @returns The matching menu item or null if not found
 */
export function findMenuItem(pathSegments: string[], PARENT_NAME: "SERVICES" | "TECHNOLOGIES" | "INDUSTRIES"): MenuItemType | null {
  if (pathSegments.length === 0) {
    return null;
  }

  // Normalize path segments to handle typos
  const normalizedSegments = pathSegments.map(normalizePathSegment);

  // Find services section
  const servicesItem = menuData.find((item) => item.title === PARENT_NAME);
  if (!servicesItem || !servicesItem.children) {
    return null;
  }

  const parentCategory = servicesItem.children.find((category) => {
    if (category.href === undefined || category.href === null) throw new Error("category is undefined");
    const categorySlug = category.href.split("/").pop();
    return categorySlug === normalizedSegments[0];
  });

  if (!parentCategory || !parentCategory.children) {
    return null;
  }

  if (normalizedSegments.length === 1) {
    return parentCategory;
  }

  const childItem = parentCategory.children.find((child) => {
    if (child.href === undefined || child.href === null) throw new Error("child is undefined");
    const childSlug = child.href.split("/").pop();
    return childSlug === normalizedSegments[1];
  });

  return childItem || null;
}
