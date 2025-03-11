"use client";

import { useState, useRef, useEffect, type JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MenuItemType } from "@/types";

// Animation variants
const menuVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
};

interface MegaMenuProps {
  items: MenuItemType[];
  isScrolled: boolean;
}

export default function MegaMenu({ items, isScrolled }: MegaMenuProps): JSX.Element {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const [categoryPage, setCategoryPage] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement>(null);

  // Number of categories to display per page
  const CATEGORIES_PER_PAGE = 6;

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (menuTimeout !== null) {
        clearTimeout(menuTimeout);
      }
    };
  }, [menuTimeout]);

  // Menu interaction handlers
  const handleMenuEnter = (menuTitle: string): void => {
    if (menuTimeout !== null) {
      clearTimeout(menuTimeout);
    }
    // Reset category page whenever a new menu is opened
    setCategoryPage(0);
    setActiveMenu(menuTitle);
  };

  const handleMenuLeave = (): void => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
      setCategoryPage(0);
    }, 200);
    setMenuTimeout(timeout);
  };

  // Pagination handlers for category pages
  const handleNextCategoryPage = (e: React.MouseEvent): void => {
    e.stopPropagation();
    const activeItem = items.find(item => item.title === activeMenu);
    if (!activeItem || !activeItem.children) return;

    const totalPages = Math.ceil(activeItem.children.length / CATEGORIES_PER_PAGE);
    if (categoryPage < totalPages - 1) {
      setCategoryPage(categoryPage + 1);
    }
  };

  const handlePrevCategoryPage = (e: React.MouseEvent): void => {
    e.stopPropagation();
    if (categoryPage > 0) {
      setCategoryPage(categoryPage - 1);
    }
  };

  // Get current categories for the active menu
  const getCurrentCategories = (): MenuItemType[] => {
    const activeItem = items.find(item => item.title === activeMenu);
    if (!activeItem || !activeItem.children) return [];

    const startIndex = categoryPage * CATEGORIES_PER_PAGE;
    return activeItem.children.slice(startIndex, startIndex + CATEGORIES_PER_PAGE);
  };

  // Calculate total pages for categories
  const getTotalCategoryPages = (): number => {
    const activeItem = items.find(item => item.title === activeMenu);
    if (!activeItem || !activeItem.children) return 0;

    return Math.ceil(activeItem.children.length / CATEGORIES_PER_PAGE);
  };

  // Styles based on scroll state
  const textColor = isScrolled ? "text-white" : "text-primary";
  const hoverColor = isScrolled ? "hover:text-white/80" : "hover:text-secondary";
  const textShadow = !isScrolled ? "drop-shadow-sm" : "";

  return (
    <nav
      className="hidden lg:flex items-center space-x-1"
      ref={menuRef}>
      {items.map((item) => (
        <div
          key={item.id}
          className="relative">
          {item.href !== undefined && item.children === undefined ? (
            <Link
              href={item.href}
              className={cn("flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors", textColor, hoverColor, textShadow)}>
              {item.title}
            </Link>
          ) : (
            <button
              type="button"
              className={cn("flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors", textColor, hoverColor, textShadow)}
              onMouseEnter={() => handleMenuEnter(item.title)}
              onMouseLeave={handleMenuLeave}
              aria-expanded={activeMenu === item.title}>
              {item.title}
              <ChevronDown
                className={cn("ml-1 h-4 w-4 transition-transform duration-200", activeMenu === item.title ? "transform rotate-180" : "")}
              />
            </button>
          )}
        </div>
      ))}

      {/* Centered Mega Menu */}
      <AnimatePresence>
        {activeMenu !== null && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed left-0 right-0 top-[6rem] z-50 mx-auto w-full max-w-6xl bg-white rounded-md shadow-lg"
            onMouseEnter={() => {
              if (menuTimeout !== null) {
                clearTimeout(menuTimeout);
                setMenuTimeout(null);
              }
            }}
            onMouseLeave={() => handleMenuLeave()}>
            {items.map(
              (item) =>
                item.title === activeMenu &&
                item.children !== undefined && (
                  <div
                    key={item.id}
                    className="p-6">
                    <div className="grid grid-cols-4 gap-6">
                      {/* Column 1: Featured Image */}
                      <div className="col-span-1">
                        <div className="relative h-[200px] w-[200px] rounded-lg overflow-hidden">
                          <Image
                            src={item.image !== undefined ? item.image : "/images/menu/default.jpg"}
                            alt={`${item.title} featured image`}
                            fill
                            sizes="200px"
                            style={{ objectFit: "cover" }}
                            className="transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                            <h3 className="text-white text-lg font-bold">{item.title}</h3>
                            {item.description !== undefined && <p className="text-white/90 text-xs mt-1">{item.description}</p>}
                          </div>
                        </div>
                      </div>

                      {/* Columns 2-4: Menu Categories */}
                      <div className="col-span-3 grid grid-cols-3 gap-6">
                        {getCurrentCategories().map((category, index) => (
                          <MainMenuItem
                            key={category.id}
                            item={category}
                            columnIndex={index}
                            parentTitle={item.title}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Pagination controls for categories */}
                    {getTotalCategoryPages() > 1 && (
                      <div className="flex justify-end mt-4 space-x-4">
                        {categoryPage > 0 && (
                          <button
                            onClick={handlePrevCategoryPage}
                            // className="flex items-center text-sm text-primary hover:text-secondary transition-colors absolute bottom-4 right-0"
                            className="bg-secondary px-4 py-2 text-white rounded-tr-md rounded-bl-md transition-colors hover:bg-secondary/90 absolute bottom-0 left-0"
                            aria-label="Previous page">
                            Previous
                            {/* <ArrowRight className="h-4 w-4 ml-1" /> */}
                          </button>

                        )}

                        {categoryPage < getTotalCategoryPages() - 1 && (

                          <button
                            onClick={handleNextCategoryPage}
                            // className="flex items-center text-sm text-primary hover:text-secondary transition-colors absolute bottom-4 right-0"
                            className="bg-secondary px-4 py-2 text-white rounded-tl-md rounded-br-md transition-colors hover:bg-secondary/90 absolute bottom-0 right-0"
                            aria-label="Next page">
                            Next
                            {/* <ArrowRight className="h-4 w-4 ml-1" /> */}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

interface MainMenuItemProps {
  item: MenuItemType;
  columnIndex: number;
  parentTitle: string;
}

function MainMenuItem({ item }: MainMenuItemProps): JSX.Element {
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
