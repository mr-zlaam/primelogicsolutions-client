import {} from "react";
import Hero3Content from "./hero3Content/hero3Content";
import Hero3Cards from "./hero3Cards/hero3Cards";

function Hero3Component() {
  return (
    <>
      <section className="hero3-bg my-5">
        <div className="w-full h-full bg-[#121323]/90 pt-[5rem] pb-[15rem]">
          <Hero3Content />
          <Hero3Cards />
        </div>
      </section>
    </>
  );
}

export default Hero3Component;
