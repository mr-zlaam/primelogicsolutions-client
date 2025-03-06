// src/components/sections/compliance/index.tsx
"use client";
import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ShieldCheck, Shield, Lock } from "lucide-react";

export const ComplianceSection: React.FC = () => {
  const bgImageAnimation = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const textBoxAnimation = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const logoAnimation = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true
  });

  const descriptionAnimation = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="max-w-screen-xl mx-auto rounded-xl h-[80dvh] m-3 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="h-full w-full flex items-center">
          {/* Left section with background image */}
          <div className="left h-full flex-[2] relative overflow-hidden">
            {/* Background image with overlay - absolute positioning ONLY within this div */}
            <div
              ref={bgImageAnimation.ref as React.RefObject<HTMLDivElement>}
              className={cn(
                "absolute inset-0 w-full h-full transition-opacity duration-1000",
                bgImageAnimation.isVisible ? "opacity-100" : "opacity-0"
              )}>
              <div className="relative w-full h-full">
                <Image
                  src="https://placehold.co/1000x1000.jpg"
                  alt="Business meeting"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-primary/80" />
              </div>
            </div>

            {/* Content for left section */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between items-center">
              {/* Compliance icons */}
              <div className="flex space-x-6 mb-8">
                <div className="flex items-center bg-white rounded-full p-4 w-16 h-16 justify-center">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center bg-white rounded-full p-4 w-16 h-16 justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center bg-white rounded-full p-4 w-16 h-16 justify-center">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Compliance text box */}
              <div
                ref={textBoxAnimation.ref as React.RefObject<HTMLDivElement>}
                className={cn(
                  "bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-xl transition-all duration-700 transform",
                  textBoxAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                <p className=" font-medium text-lg text-primary">
                  Our solutions are designed to align with US industry regulations, including GDPR, HIPAA, PCI-DSS, and federal cybersecurity
                  standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right section with solid background */}
          <div className="right h-full flex-1 bg-primary p-8 flex flex-col justify-center items-center">
            {/* America First logo */}
            <div
              ref={logoAnimation.ref as React.RefObject<HTMLDivElement>}
              className={cn(
                "relative w-32 h-32 mb-6 transition-all duration-700 transform",
                logoAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
              <Image
                src="https://placehold.co/200x200.jpg"
                alt="America First"
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>

            {/* Description */}
            <div
              ref={descriptionAnimation.ref as React.RefObject<HTMLDivElement>}
              className={cn(
                "text-white mb-8 max-w-md text-right transition-all duration-700 transform",
                descriptionAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
              <p className="text-lg">
                At PLS, we master your market&apos;s intricacies. Our experts deliver tailored solutions nationwide, from advanced automation to
                transformative digital marketing, driving your success.
              </p>
            </div>
            <div className="rounded-full overflow-hidden">
              <Image
                height={100}
                width={100}
                src={"https://placehold.co/200x200.jpg"}
                alt="CEO"
              />
            </div>
            <h1 className="text-white font-bold text-lg my-2">Fyaz Khan (CEO)</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;

