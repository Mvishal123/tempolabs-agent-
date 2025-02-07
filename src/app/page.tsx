import Hero from "@/components/hero";
import Team from "@/components/team";
import React from "react";

const Page = () => {
  return (
    <div>
      <Hero />
      <Team />
      <div className="h-[400vh]"></div>
    </div>
  );
};

export default Page;
