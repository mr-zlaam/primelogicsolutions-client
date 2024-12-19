import React from "react";
import PageWrapper from "../pagewrapper/pagewrapper";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const words = [
  {
    text: "Online",
    className: " text-7xl font-[900] text-background"
  },
  {
    text: "Solution!",
    className: " text-7xl font-[900] text-primary"
  }
];
function LandingComponent() {
  return (
    <React.Fragment>
      <div className="landing-bg  ">
        <PageWrapper className="flex items-center ">
          <div className="h-[60px] animate-heart w-[60px] relative top-20 left-[-7rem] rounded-full bg-primary" />
          <h1 className="relative top-20  text-7xl font-[900]">
            <span className="text-background">One</span> <span className="text-background">Stop</span>
            <br />
            <TypewriterEffectSmooth
              words={words}
              cursorClassName="hidden"
              className=""
            />
          </h1>
        </PageWrapper>
      </div>
    </React.Fragment>
  );
}

export default LandingComponent;
