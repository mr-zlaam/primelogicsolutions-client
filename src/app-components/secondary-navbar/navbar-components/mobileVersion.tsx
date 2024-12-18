"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import type { IMENUITEM } from "../secondaryMenus";

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
export default MobileMenuItem;
