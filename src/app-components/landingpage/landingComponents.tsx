import React from "react";
import Hero1Component from "@/app-components/landingpage/hero1";
import Hero2Component from "@/app-components/landingpage/hero2";
import Hero3Component from "@/app-components/landingpage/hero3";
import Hero4Component from "./hero4";
function LandingComponents() {
  return (
    <React.Fragment>
      <Hero1Component />
      <Hero2Component />
      <Hero3Component />
      <Hero4Component />
    </React.Fragment>
  );
}

export default LandingComponents;
