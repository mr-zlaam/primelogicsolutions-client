"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FlipCard from "./flipCard";
import { services } from "./cardContent";
import { industries } from "./cardContent";
import { Lightbulb, Cloud, Shield, HeartPulse, ShoppingCart, Factory, Brain, Link, Wifi } from "lucide-react";
import NextLink from "next/link";

// Helper function to get the appropriate icon component
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, React.ElementType> = {
    Lightbulb,
    Cloud,
    Shield,
    HeartPulse,
    ShoppingCart,
    Factory,
    Brain,
    Link,
    Wifi
  };

  return iconMap[iconName] || Lightbulb;
};

export default function Services() {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: industriesRef, isVisible: industriesVisible } = useScrollAnimation();

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <>
      <section
        ref={servicesRef as React.RefObject<HTMLElement>}
        className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={servicesVisible ? "visible" : "hidden"}
            variants={sectionVariants}
            className="space-y-12">
            <motion.div
              variants={titleVariants}
              className="text-center">
              <h2 className="text-3xl font-bold text-blue-900">Services</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Comprehensive solutions tailored to meet your enterprise needs</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = getIconComponent(service.icon);

                return (
                  <div
                    key={service.id}
                    className="h-80">
                    <FlipCard
                      index={index}
                      backgroundImage={service.backgroundImage}
                      frontContent={
                        <div className="flex flex-col items-center justify-center p-8 h-full text-blue-900">
                          <div className="bg-white p-4 rounded-full mb-6">
                            <Icon className="h-10 w-10 text-blue-600" />
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                          <p className="text-center text-white">{service.frontContent}</p>
                        </div>
                      }
                      backContent={
                        <div className="flex flex-col items-center justify-center p-8 h-full bg-blue-900 text-white">
                          <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                          <ul className="mb-6 space-y-2">
                            {service.backContent.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-center">
                                <span className="mr-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <NextLink
                            href={service.link}
                            className="mt-auto text-blue-300 hover:text-white transition-colors">
                            Learn More →
                          </NextLink>
                        </div>
                      }
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        ref={industriesRef as React.RefObject<HTMLElement>}
        className="w-full py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={industriesVisible ? "visible" : "hidden"}
            variants={sectionVariants}
            className="space-y-12">
            <motion.div
              variants={titleVariants}
              className="text-center">
              <h2 className="text-3xl font-bold text-blue-900">Industries</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Specialized solutions for diverse industry verticals</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const Icon = getIconComponent(industry.icon);

                return (
                  <motion.div
                    key={industry.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={industriesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      ease: [0.25, 0.1, 0.25, 1.0]
                    }}
                    className="bg-white rounded-lg shadow-lg p-8">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">{industry.title}</h3>
                    <ul className="mb-6 space-y-2">
                      {industry.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <NextLink
                      href={industry.link}
                      className="text-blue-600 hover:text-blue-800 transition-colors mt-4 inline-block">
                      READ DETAILS →
                    </NextLink>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

