"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import logoImage from "../../../public/assets/images/logo.png";
import Image from "next/image";
import PageWrapper from "../pagewrapper/pagewrapper";
import { IMENUITEM } from "./secondaryMenus";

export interface MultiLevelMenuProps {
  items: IMENUITEM[];
}

const SecondaryNavbar: React.FC<MultiLevelMenuProps> = ({ items }) => {
  const [activeMenuPath, setActiveMenuPath] = useState<number[]>([]);

  const handleMenuToggle = (id: number, depth: number) => {
    setActiveMenuPath((prev) => {
      const newPath = [...prev.slice(0, depth), id];
      return prev[depth] === id ? prev.slice(0, depth) : newPath;
    });
  };

  const handleMouseLeave = () => {
    setActiveMenuPath([]); // Close all menus when mouse leaves the top-level menu
  };

  return (
    <PageWrapper className="max-w-screen-xl px-5">
      <header className="bg-primary flex items-center space-x-10 h-[100px] shadow-md px-16">
        <Link
          href={"/"}
          className="block">
          <Image
            src={logoImage}
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <ul
          className="flex rounded-md space-x-5"
          onMouseLeave={handleMouseLeave}>
          {items.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              depth={0}
              activeMenuPath={activeMenuPath}
              onToggle={handleMenuToggle}
            />
          ))}
        </ul>
      </header>
    </PageWrapper>
  );
};

interface MenuItemProps {
  item: IMENUITEM;
  depth: number;
  activeMenuPath: number[];

  // eslint-disable-next-line no-unused-vars
  onToggle: (_id: number, _depth: number) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, depth, activeMenuPath, onToggle }) => {
  const isActive = activeMenuPath[depth] === item.id;

  const handleMouseEnter = () => {
    onToggle(item.id, depth);
  };

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}>
      <Link
        href={item.href}
        className={cn(
          "flex items-center justify-between px-3 py-2 cursor-pointer",
          depth >= 1 && "hover:bg-primary hover:text-background text-primary"
        )}>
        <span className={cn("font-medium whitespace-nowrap block", depth === 0 && "text-background")}>{item.title}</span>

        {item.children && <span className={cn(isActive && "rotate-180 transition-all duration-300", depth === 0 ? "text-background" : "")}> ▼</span>}
      </Link>

      <ul
        className={`absolute left-0 ${depth === 0 ? "top-full" : "top-0 left-full"} bg-white border border-gray-200 shadow-md w-fit z-50 
        transition-all duration-300 ease-in-out transform ${
          isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        } origin-top`}>
        {item.children?.map((child) => (
          <MenuItem
            key={child.id}
            item={child}
            depth={depth + 1}
            activeMenuPath={activeMenuPath}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </li>
  );
};

export default SecondaryNavbar;
