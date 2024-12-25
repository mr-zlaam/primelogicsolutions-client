import React from "react";
import SectionLeft from "./section-left/section-left";
import SectionRight from "./section-right/section-right";

function Hero4Component() {
  return (
    <React.Fragment>
      <div className="flex justify-around items-center flex-col md:flex-row my-20">
        <SectionLeft />
        <SectionRight />
      </div>
    </React.Fragment>
  );
}

export default Hero4Component;
