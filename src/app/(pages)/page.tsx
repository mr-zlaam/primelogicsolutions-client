import Hero1Component from "@/app-components/landingpage/hero1";
import Hero2Component from "@/app-components/landingpage/hero2";
import React from "react";

export default function HomePage() {
  return (
    <React.Fragment>
      <Hero1Component />
      <Hero2Component />
    </React.Fragment>
  );
}
