"use client";
import React from "react";
import whitedotpng from "@/assets/images/white-dot.png";
import shape2 from "@/assets/images/shape2.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
function AnimatedImagesComponent() {
  const path = usePathname();
  if (path !== "/") return null;
  return (
    <React.Fragment>
      <div className="w-fit mx-auto relative top-2 animate-y-tofro">
        <Image
          src={whitedotpng}
          width={130}
          height={130}
          alt="whitedotpng"
        />
      </div>
      <div className="absolute z-[-1] top-0 left-[-20px] animate-x-tofro">
        <Image
          src={shape2}
          width={400}
          height={400}
          alt="whitedotpng"
          className="opacity-40 select-none"
        />
      </div>
    </React.Fragment>
  );
}

export default AnimatedImagesComponent;
