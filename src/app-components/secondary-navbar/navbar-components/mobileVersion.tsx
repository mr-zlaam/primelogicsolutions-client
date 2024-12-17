"use client";
//TODO: DO THE CODE SPLITING COMPULSORY
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import logoImage from "../../../../public/assets/images/logo.png";
import Image from "next/image";
import { IMENUITEM } from "../secondaryMenus";
import SideBarCircleButton from "../navbar-components/sideBarButton";
import RequestQuoteButton from "../navbar-components/requestQuoteButton";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export interface MultiLevelMenuProps {
  items: IMENUITEM[];
}

const SecondaryNavbar: React.FC<MultiLevelMenuProps> = ({ items }) => {
  const [activeMenuPath, setActiveMenuPath] = useState<number[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = (id: number, depth: number) => {
    setActiveMenuPath((prev) => {
      const newPath = [...prev.slice(0, depth), id];
      return prev[depth] === id ? prev.slice(0, depth) : newPath;
    });
  };

  const handleMouseLeave = () => {
    setActiveMenuPath([]);
  };

  return (
    <header className="bg-primary lg:max-w-screen-xl mx-auto flex items-center justify-between w-full lg:justify-around h-[100px] shadow-md px-16 rounded-sm ">
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
        className="hidden lg:flex  rounded-md space-x-3 relative"
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
      {!mobileMenuOpen && (
        <span className="lg:hidden text-4xl">
          <FaBars
            size={30}
            onClick={() => setMobileMenuOpen(true)}
          />
        </span>
      )}
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-screen bg-white transform transition-all duration-300 ease-in-out ",
          mobileMenuOpen ? "-translate-y-100" : "-translate-y-full hidden"
        )}>
        <ul className="flex lg:hidden space-x-3 flex-col">
          <button
            className="p-5 w-full flex justify-end "
            onClick={() => setMobileMenuOpen(false)}>
            <IoClose size={30} />
          </button>
          {items.map((item) => (
            <MobileMenuItem
              key={item.id}
              item={item}
            />
          ))}
        </ul>
      </div>
      <div className=" space-x-5 items-center hidden lg:flex">
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
      className="relative text-base"
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
            "absolute left-0 bg-white border border-gray-200 shadow-md w-fit z-[999] transition-all duration-300 ease-in-out transform origin-top pointer-events-auto",
            depth === 0 ? "top-full mt-4" : "top-0 left-full",
            isActive ? "opacity-100 scale-y-100 rounded-md" : "opacity-0 scale-y-0 pointer-events-none"
          )}>
          {/* Invisible Bridge */}
          <span
            className="absolute -top-5 left-0 h-5 w-full bg-transparent pointer-events-auto"
            aria-hidden="true"></span>

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
const MobileMenuItem: React.FC<{ item: IMENUITEM }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li>
      <div
        onClick={handleClick}
        className={cn(
          "flex justify-between items-center px-4 py-2 cursor-pointer rounded transition-all duration-300",
          "hover:bg-primary hover:text-background"
        )}>
        <span>{item.title}</span>
        {item.children && <span>{isOpen ? "−" : "+"}</span>}
      </div>

      {/* Dropdown */}
      {item.children && (
        <ul
          className={cn(
            "pl-4 transition-[opacity,max-height] duration-300 ease-in-out overflow-hidden",
            isOpen
              ? "max-h-full opacity-100" // Adjust max-height based on content
              : "max-h-0 opacity-0"
          )}>
          {item.children.map((child) => (
            <MobileMenuItem
              key={child.id}
              item={child}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
