import React from "react";

function SectionLeft() {
  return (
    <section className="max-w-[700px] flex-1">
      <div className="flex flex-col justify-center">
        <div>
          <h1 className="relative">
            <span className="asbsolute border-2 border-l-0 border-r-0 border-b-0 border-primary w-[40px] mx-4 mt-3" />
            <span className="text-primary font-bold text-xl">What We Offer ?</span>
          </h1>
          <h2 className="text-4xl font-bold">
            We Strive To Offer <br />
            Intelligent
            <span className="text-primary"> Business Solutions</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default SectionLeft;
