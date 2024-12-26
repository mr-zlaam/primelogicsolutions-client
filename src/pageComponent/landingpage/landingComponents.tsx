import React from "react";
import Hero1Component from "@/pageComponent/landingpage/hero1";
import Hero2Component from "@/pageComponent/landingpage/hero2";
import Hero3Component from "@/pageComponent/landingpage/hero3";
import Hero4Component from "@/pageComponent/landingpage/hero4";
import Hero5Component from "@/pageComponent/landingpage/hero5";
function LandingComponents() {
  return (
    <React.Fragment>
      <Hero1Component />
      <Hero2Component />
      <Hero3Component />
      <Hero4Component />
      <Hero5Component />
    </React.Fragment>
  );
}

export default LandingComponents;
