import BookCall from "@/components/book-a-call";
import Hero from "@/components/hero";
import Team from "@/components/team";
import React from "react";

const Page = () => {
  return (
    <div>
      <Hero />
      <Team />
      <div className="h-[100vh]"></div>
      <BookCall />
    </div>
  );
};

export default Page;
