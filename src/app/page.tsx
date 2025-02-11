import BookCall from "@/components/book-a-call";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Stats from "@/components/stats";
import Team from "@/components/team";
import WhatMakesTempoDifferent from "@/components/what-makes-tempo-different";
import React from "react";

const Page = () => {
  return (
    <div>
      <Hero />
      <Team />
      <Stats />
      <HowItWorks />
      <WhatMakesTempoDifferent />
      <div className="h-[100vh]"></div>
      <BookCall />
    </div>
  );
};

export default Page;
