import { Abutton } from "@/components/ui/a-button";
import React from "react";

function RequestQuoteButton() {
  return (
    <Abutton
      className="bg-background h-[60px]  border  font-semibold text-primary border-blue-200 rounded-full"
      variant={"animate"}>
      Request Quote
    </Abutton>
  );
}

export default RequestQuoteButton;
