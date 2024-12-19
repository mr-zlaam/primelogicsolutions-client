"use client";
import React from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function RequestQuoteButton() {
  const handleQuoteSubmit = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };
  return (
    <div className="flex items-center justify-center ">
      <Modal>
        <ModalTrigger className="bg-background h-[60px] border font-semibold text-primary rounded-full shadow-md  duration-200 transition-background hover:border-dashed hover:border-blue-200 hover:bg-primary hover:text-background">
          Request Quote
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="flex flex-col md:flex-row w-full  p-4 md:p-8  rounded-lg  overflow-y-auto">
            <div className="w-full md:w-1/2  lg:flex items-center justify-center  hidden relative top-5">
              <Image
                src="https://i.postimg.cc/J0LhySrM/request-quote-modal.jpg"
                alt="Placeholder Image"
                width={600}
                height={750}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-8">
              <h4 className="text-lg md:text-2xl text-neutral-600 font-bold mb-4">Request a Quote</h4>
              <form className="space-y-2  w-full">
                <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email your email"
                    className="w-full"
                  />
                </div>

                <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    type="number"
                    id="phone"
                    placeholder="Enter your phone"
                    className="w-full"
                  />
                </div>

                <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    type="text"
                    id="company"
                    placeholder="Enter your company name (Optional)"
                    className="w-full"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input
                    type="datetime-local"
                    id="deadline"
                    placeholder="Enter deadline (Optional)"
                    className="w-full"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                    className="w-full"
                  />
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="details">Details</Label>
                  <Textarea
                    placeholder="Enter details here."
                    className=" resize-none"
                    id="details"
                  />
                </div>
                <div>
                  <Label htmlFor="Details">Services</Label>

                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile Development</SelectItem>
                      <SelectItem value="cloud">Cloud Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </div>
          </ModalContent>
          <ModalFooter className="flex justify-end gap-4 mt-4">
            <Button onClick={handleQuoteSubmit}>Submit</Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
