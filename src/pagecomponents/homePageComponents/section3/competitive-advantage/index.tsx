/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { FeatureItem } from "./FeatureItem";
import { FeatureType } from "@/types";

export const CompetitiveAdvantage: React.FC = () => {
  const titleAnimation = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const subtitleAnimation = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const descriptionAnimation = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const imageAnimation = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const leftFeatures: FeatureType[] = [
    { id: "feature-1", title: "AI & Automation" },
    { id: "feature-2", title: "Cloud Mastery" },
    { id: "feature-3", title: "Omnichannel Optimization" }
  ];

  const rightFeatures: FeatureType[] = [
    { id: "feature-4", title: "Enterprise Security" },
    { id: "feature-5", title: "Data-Driven Growth" },
    { id: "feature-6", title: "Regulatory Compliance" }
  ];

  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <p
                ref={titleAnimation.ref as React.RefObject<HTMLParagraphElement>}
                className={cn(
                  "text-orange-500 font-medium transition-all duration-700",
                  titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                PLS Competitive Advantage
              </p>

              <h2
                ref={subtitleAnimation.ref as React.RefObject<HTMLHeadingElement>}
                className={cn(
                  "text-4xl md:text-5xl font-bold text-primary leading-tight transition-all duration-700",
                  subtitleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                Unmatched Competitive Edge: Future-Ready Solutions for American Businesses
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-5xl font-bold text-secondary">25</div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">Years of Industry Leadership</h3>
                  <p
                    ref={descriptionAnimation.ref as React.RefObject<HTMLParagraphElement>}
                    className={cn(
                      "mt-2 text-gray-600 leading-relaxed transition-all duration-700",
                      descriptionAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}>
                    Harness the power of AI, automation, and digital transformation to drive scalability, security, and data-driven growth. With
                    decades of expertise, we equip businesses with the tools to outperform, adapt, and lead in an evolving market.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="space-y-4">
                  {leftFeatures.map((feature, index) => (
                    <FeatureItem
                      key={feature.id}
                      feature={feature}
                      delay={index + 1}
                    />
                  ))}
                </div>
                <div className="space-y-4">
                  {rightFeatures.map((feature, index) => (
                    <FeatureItem
                      key={feature.id}
                      feature={feature}
                      delay={index + 4}
                    />
                  ))}
                </div>
              </div>

              <div
                ref={subtitleAnimation.ref as React.RefObject<HTMLDivElement>}
                className={cn(
                  "mt-8 transition-all duration-700",
                  subtitleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                <a
                  href="#"
                  className="inline-flex items-center text-primary text-2xl  duration-300 transition-colors  font-bold hover:text-secondary">
                  LEARN MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            ref={imageAnimation.ref as React.RefObject<HTMLDivElement>}
            className={cn(
              "relative mt-8 lg:mt-0 pt-8 transition-all duration-1000",
              imageAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}>
            {/* Create a container for the stacked images */}
            <div className="relative h-[400px] md:h-[450px]">
              {/* First image (blue background - Technology) */}
              <div className="absolute top-0 right-0 md:right-0 z-10 w-[90%] md:w-[80%] h-[60%]">
                <img
                  src="https://placehold.co/600x500/000080/FFFFFF?text=Technology"
                  alt="Technology visualization"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>

              {/* Second image (green background - Volunteers) - positioned to overlap */}
              <div className="absolute bottom-0 left-0 z-10 w-[60%] md:w-[55%] h-[50%]">
                <img
                  src="https://placehold.co/400x300/228B22/FFFFFF?text=Volunteers"
                  alt="Volunteer team"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Third image (dark background - Business) - positioned to overlap both */}
              <div className="absolute bottom-[20%] right-[15%] z-15 w-[50%] md:w-[45%] h-[45%]">
                <img
                  src="https://placehold.co/500x400/28282b/FFFFFF?text=Business"
                  alt="Business professionals"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

