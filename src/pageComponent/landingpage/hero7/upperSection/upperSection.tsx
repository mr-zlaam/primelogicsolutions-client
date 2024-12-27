import React from "react";
import UpperSectionContent from "./upperSectionContent/upperSectionContent";

export default function UpperSection() {
  return (
    <React.Fragment>
      <section className="lg:max-h-40vh">
        <UpperSectionContent />
      </section>
    </React.Fragment>
  );
}
