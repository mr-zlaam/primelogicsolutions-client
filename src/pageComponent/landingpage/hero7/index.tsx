import React from "react";
import UpperSection from "./upperSection/upperSection";
import LowerSection from "./lowerSection/lowerSection";

export default function Hero7Compnent() {
  return (
    <React.Fragment>
      <section className="bg-[#06122A] lg:max-h-[60vh] overflow-visible">
        <UpperSection />
        <LowerSection />
      </section>
    </React.Fragment>
  );
}
