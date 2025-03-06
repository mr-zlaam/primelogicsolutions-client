"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { menuData, MenuItemType } from "@/lib/menu-data";
import MegaMenu from "./megaMenu";

// Mobile menu component
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  // Recursive function to render menu items
  const renderMenuItem = (item: MenuItemType, depth = 0) => {
    const isExpanded = expandedItems.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <li
        key={item.id}
        className={cn("w-full", depth > 0 ? "ml-4" : "")}>
        <div className="flex items-center justify-between">
          {item.href ? (
            <Link
              href={item.href}
              className="py-3 text-lg w-full text-gray-900"
              onClick={onClose}>
              {item.title}
            </Link>
          ) : (
            <button
              type="button"
              className="flex items-center justify-between w-full py-3 text-lg text-gray-900"
              onClick={() => hasChildren && toggleItem(item.id)}>
              {item.title}
              {hasChildren && <ChevronDown className={cn("h-5 w-5 transition-transform", isExpanded ? "transform rotate-180" : "")} />}
            </button>
          )}
        </div>

        {hasChildren && isExpanded && (
          <ul className="border-l-2 border-gray-200 mt-1 mb-2">{item.children!.map((child) => renderMenuItem(child, depth + 1))}</ul>
        )}
      </li>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
          onClick={onClose}>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b">
              <Link
                href="/"
                onClick={onClose}>
                <Image
                  src="https://placehold.co/100x100.jpg"
                  alt="PLogic Logo"
                  width={120}
                  height={120}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                className="p-2 rounded-md hover:bg-gray-100"
                onClick={onClose}>
                <X
                  className="h-6 w-6 text-gray-900"
                  aria-hidden="true"
                />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-1">{menuData.map((item) => renderMenuItem(item))}</ul>

              <div className="mt-8 space-y-4">
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={onClose}
                  asChild>
                  <Link href="/get-started">GET STARTED</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  onClick={onClose}
                  asChild>
                  <Link href="/get-quote">GET QUOTE</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure header height for mega menu positioning
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === headerRef.current) {
          setHeaderHeight(entry.contentRect.height);
        }
      }
    });

    const currentHeaderRef = headerRef.current;
    if (currentHeaderRef) {
      resizeObserver.observe(currentHeaderRef);
    }

    return () => {
      if (currentHeaderRef) {
        resizeObserver.unobserve(currentHeaderRef);
      }
    };
  }, [scrolled]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled ? "bg-primary text-white py-12" : "bg-white text-primary py-8"
      )}
      style={{ "--header-height": `${headerHeight}px` } as React.CSSProperties}>
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center relative z-10">
          <Image
            src="https://placehold.co/100x100.jpg"
            alt="PLogic Logo"
            width={140}
            height={50}
            className={cn("transition-all duration-300", scrolled ? "h-10 w-auto" : "h-12 w-auto")}
            priority
          />
        </Link>

        {/* Desktop Navigation with MegaMenu */}
        <MegaMenu
          items={menuData}
          isScrolled={scrolled}
        />

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="outline"
            className={cn("bg-transparent transition-all duration-300", !scrolled && "hover:bg-primary hover:text-white duration-300 transition-all")}
            asChild>
            <Link href="/get-started">GET STARTED</Link>
          </Button>

          <Button
            variant={"outline"}
            className={cn("bg-transparent transition-all duration-300", !scrolled && "hover:bg-primary hover:text-white duration-300 transition-all")}
            asChild>
            <Link href="/get-quote">GET QUOTE</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={cn(
            "lg:hidden p-2 rounded-md focus:outline-none",
            scrolled ? "hover:bg-white/10 text-white" : "hover:bg-primary/10 text-primary"
          )}
          onClick={() => setMobileMenuOpen(true)}>
          <Menu
            className="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

