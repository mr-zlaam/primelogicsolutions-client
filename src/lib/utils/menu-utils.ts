// src/lib/utils/menu-utils.ts
import { type MenuItemType, SectionType, type SectionTypes } from "../types/types";
import { menuData } from "../menu-data";

/**
 * Safely extracts a slug from an href or falls back to generating one from title
 * @param href - Optional href string
 * @param title - Title to use as fallback
 * @returns Extracted or generated slug
 */
function extractSlug(href: string | null | undefined, title: string): string {
  // If href exists, try to extract the last segment, otherwise generate from title
  if (href !== null && href !== undefined) {
    const segments = href.split("/");
    const lastSegment = segments.pop();

    if (lastSegment !== null && lastSegment !== undefined && lastSegment.length > 0) {
      return lastSegment;
    }
  }

  // Fallback to title-based slug
  return title.toLowerCase().replace(/\s+/g, "-");
}

/**
 * Finds a menu item by section type and slug array
 * @param sectionType - The top-level section type (SERVICES, INDUSTRIES, TECHNOLOGIES)
 * @param slugArray - Array of slug segments from the URL path
 * @returns The matching menu item or null if not found
 */
export function findItemBySlug(sectionType: SectionTypes, slugArray: string[]): MenuItemType | null {
  // Find the specified section
  const section = menuData.find((item) => item.title === sectionType);
  if (!section) return null;

  // Handle root path
  if (slugArray.length === 0) {
    return section;
  }

  // For single slug (category page)
  if (slugArray.length === 1) {
    const categorySlug = slugArray[0];

    return (
      section.children?.find((category) => {
        // Extract slug from href or generate from title
        const extractedSlug = extractSlug(category.href, category.title);
        return extractedSlug === categorySlug;
      }) || null
    );
  }

  // For two slugs (specific page)
  if (slugArray.length === 2) {
    const [categorySlug, itemSlug] = slugArray;

    // Find the category
    const category = section.children?.find((category) => {
      const extractedSlug = extractSlug(category.href, category.title);
      return extractedSlug === categorySlug;
    });

    if (!category) return null;

    // Find the specific item within the category
    return (
      category.children?.find((item) => {
        const extractedSlug = extractSlug(item.href, item.title);
        return extractedSlug === itemSlug;
      }) || null
    );
  }

  return null;
}

/**
 * Generate static paths for a specific section
 * @param sectionType - The section type (SERVICES, INDUSTRIES, TECHNOLOGIES)
 * @returns An array of path objects for static generation
 */
export function generateSectionStaticParams(sectionType: SectionTypes): { slug: string[] }[] {
  const paths: { slug: string[] }[] = [];

  // Find the specified section
  const section = menuData.find((item) => item.title === sectionType);

  if (section && section.children) {
    // Add root path
    paths.push({ slug: [] });

    // For each category
    section.children.forEach((category) => {
      // Extract category slug
      const categorySlug = extractSlug(category.href, category.title);

      // Add category path
      paths.push({ slug: [categorySlug] });

      // For each item within the category
      if (category.children) {
        category.children.forEach((item) => {
          // Extract item slug
          const itemSlug = extractSlug(item.href, item.title);

          // Add item path
          paths.push({ slug: [categorySlug, itemSlug] });
        });
      }
    });
  }

  return paths;
}

// Convenience functions for specific sections
export function findServiceBySlug(slugArray: string[]): MenuItemType | null {
  return findItemBySlug(SectionType.SERVICES, slugArray);
}

export function findIndustryBySlug(slugArray: string[]): MenuItemType | null {
  return findItemBySlug(SectionType.INDUSTRIES, slugArray);
}

export function findTechnologyBySlug(slugArray: string[]): MenuItemType | null {
  return findItemBySlug(SectionType.TECHNOLOGIES, slugArray);
}

export function generateServiceStaticParams(): { slug: string[] }[] {
  return generateSectionStaticParams(SectionType.SERVICES);
}

export function generateIndustryStaticParams(): { slug: string[] }[] {
  return generateSectionStaticParams(SectionType.INDUSTRIES);
}

export function generateTechnologyStaticParams(): { slug: string[] }[] {
  return generateSectionStaticParams(SectionType.TECHNOLOGIES);
}
