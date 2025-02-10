import React from "react";
import { Button } from "./button";

const BookCall = () => {
  return (
    <div className="relative h-screen overflow-hidden pt-32">
      <div className="absolute inset-0 top-10 mb-10 z-0">
        <img
          src="https://www.tempolabs.ai/_next/static/media/dotted-background.8e6456da.webp"
          alt="dotted-pattern"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-lg mx-auto">
        <h1 className="text-6xl text-center leading-tight mt-12">
          See if Tempo Agent<span className="text-brand">+</span> is for you
        </h1>
        <p className="text-neutral-500 text-center mt-4">
          Get a guided tour through Tempo and find out how your team can start
          shipping features in weeks, instead of months Book a Call
        </p>
        <Button className="mx-auto block mt-12">Book a call</Button>
      </div>
    </div>
  );
};

export default BookCall;
