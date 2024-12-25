import React from "react";
import SectionLeft from "./section-left/section-left";
import SectionRight from "./section-right/section-right";

function Hero4Component() {
  return (
    <React.Fragment>
      <div className="flex justify-evenly items-center flex-col xl:flex-row my-20 px-4">
        <SectionLeft />
        <SectionRight />
      </div>
    </React.Fragment>
  );
}

export default Hero4Component;
