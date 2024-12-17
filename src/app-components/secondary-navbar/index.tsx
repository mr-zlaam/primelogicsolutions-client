"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import logoImage from "../../../public/assets/images/logo.png";
import Image from "next/image";
import { IMENUITEM } from "./secondaryMenus";
import SideBarCircleButton from "./navbar-components/sideBarButton";
import RequestQuoteButton from "./navbar-components/requestQuoteButton";

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
    <header className="bg-primary max-w-screen-xl mx-auto flex items-center justify-around h-[100px] shadow-md px-16 rounded-sm">
      <Link
        href={"/"}
        className="">
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
      <div className="flex space-x-5 items-center">
        <SideBarCircleButton />
        <RequestQuoteButton />
      </div>
    </header>
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
      className="relative rounded-md "
      onMouseEnter={handleMouseEnter}>
      <Link
        href={item.href}
        className={cn(
          "flex rounded-md items-center justify-between  cursor-pointer",
          depth >= 1 && "hover:bg-primary hover:text-background text-primary px-3 py-2"
        )}>
        <span className={cn("font-medium block", depth === 0 && "text-background", depth >= 1 && " whitespace-nowrap pr-2")}>{item.title}</span>

        {item.children && (
          <span
            className={cn(
              isActive && depth === 0 && "rotate-180 transition-all duration-300",
              isActive && depth >= 1 && "-rotate-90 transition-all duration-200",
              depth === 0 && "text-background"
            )}>
            {" "}
            ▼
          </span>
        )}
      </Link>

      {item.children && (
        <ul
          className={cn(
            "absolute left-0  bg-white border border-gray-200 shadow-md w-fit z-[999] transition-all duration-300 ease-in-out transform origin-top",
            depth === 0 ? "top-full" : "top-0 left-full",
            isActive ? "opacity-100 scale-y-100 top-6 rounded-md " : "opacity-0 scale-y-0 pointer-events-none"
          )}>
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
      )}
    </li>
  );
};

export default SecondaryNavbar;
