import { Abutton } from "@/components/ui/a-button";
import React from "react";
function RequestQuoteButton() {
  return (
    <Abutton
      className="bg-background h-[60px]  border  font-semibold text-primary  rounded-full shadow-md active:scale-95 duration-200 transition-transform hover:border-dashed hover:border-blue-200"
      variant={"animate"}>
      Request Quote
    </Abutton>
  );
}

export default RequestQuoteButton;
