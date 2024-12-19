"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
function AnimatedImagesComponent() {
  const path = usePathname();
  if (path !== "/") return null;
  return (
    <React.Fragment>
      <div className="w-fit mx-auto relative top-2 animate-y-tofro">
        <Image
          src={"https://i.postimg.cc/Cx0QNYP8/white-dot.png"}
          width={130}
          height={130}
          alt="whitedotpng"
        />
      </div>
      <div className="absolute z-[-1] top-0 left-[-20px] animate-x-tofro">
        <Image
          src={"https://i.postimg.cc/x1PFp7h4/shape2.png"}
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
