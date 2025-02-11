import React from "react";

const HowItWorks = () => {
  return (
    <section className="relative flex flex-col w-full max-md:mt-8 mt-16 max-w-7xl mx-auto px-5">
      <div className="flex flex-col">
        <div className="inline-flex items-center rounded-md text-base border px-3.5 py-1.5 font-light transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-neutral-800 text-neutral-300 w-fit">
          How it works
        </div>
        <h2 className="flex flex-col mt-8 w-full max-md:mt-10 text-5xl lg:text-6xl text-white font-brockmann">
          1 - 3 features per week.
        </h2>
        <p className="text-lg text-neutral-400 font-light mt-5">
          Get 1-3 features design and shipped weekly, guaranteed, or your money
          back.
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-14 lg:mt-28">
        <div className="flex flex-col gap-1">
          <div className="flex items-start">
            <div className="flex gap-4 lg:gap-6 items-center pr-4 w-fit text-lg tracking-tight leading-none text-center whitespace-nowrap text-neutral-400">
              <div className="size-[34px] text-lg  bg-gradient-to-tl from-[#3B3C42] via-[#1F1F22] to-[#1F1F22] rounded-full p-[1px]">
                <div className="bg-background w-full h-full rounded-full flex items-center justify-center">
                  1
                </div>
              </div>
            </div>
            <div className="flex items-start w-full gap-3 lg:gap-6">
              <h3 className="text-lg lg:text-2xl tracking-tighter text-white font-brockmann">
                Submit your Spec / PRD
              </h3>
              <p className="text-xs lg:text-lg tracking-tight font-light leading-6 text-neutral-400">
                Submit what you need to build and our agents get to work.
              </p>
            </div>
          </div>
          <div className="w-[1px] h-7 ml-4 bg-neutral-700 flex-shrink-0"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-start">
            <div className="flex gap-4 lg:gap-6 items-center pr-4 w-fit text-lg tracking-tight leading-none text-center whitespace-nowrap text-neutral-400">
              <div className="size-[34px] text-lg  bg-gradient-to-tl from-[#3B3C42] via-[#1F1F22] to-[#1F1F22] rounded-full p-[1px]">
                <div className="bg-background w-full h-full rounded-full flex items-center justify-center">
                  2
                </div>
              </div>
            </div>
            <div className="flex items-start w-full gap-3 lg:gap-6">
              <h3 className="text-lg lg:text-2xl tracking-tighter text-white font-brockmann">
                Our Agents Design
              </h3>
              <p className="text-xs lg:text-lg tracking-tight font-light leading-6 text-neutral-400">
                We share designs ready for review in 24-72 hours, quality
                guaranteed by human designers.
              </p>
            </div>
          </div>
          <div className="w-[1px] h-7 ml-4 bg-neutral-700 flex-shrink-0"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-start">
            <div className="flex gap-4 lg:gap-6 items-center pr-4 w-fit text-lg tracking-tight leading-none text-center whitespace-nowrap text-neutral-400">
              <div className="size-[34px] text-lg  bg-gradient-to-tl from-[#3B3C42] via-[#1F1F22] to-[#1F1F22] rounded-full p-[1px]">
                <div className="bg-background w-full h-full rounded-full flex items-center justify-center">
                  3
                </div>
              </div>
            </div>
            <div className="flex items-start w-full gap-3 lg:gap-6">
              <h3 className="text-lg lg:text-2xl tracking-tighter text-white font-brockmann">
                Our Agents Code
              </h3>
              <p className="text-xs lg:text-lg tracking-tight font-light leading-6 text-neutral-400">
                We open a pull request with production-ready code, quality
                guaranteed by human developers.
              </p>
            </div>
          </div>
          <div className="w-[1px] h-7 ml-4 bg-neutral-700 flex-shrink-0"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-start">
            <div className="flex gap-4 lg:gap-6 items-center pr-4 w-fit text-lg tracking-tight leading-none text-center whitespace-nowrap text-neutral-400">
              <div className="size-[34px] text-lg  bg-gradient-to-tl from-[#3B3C42] via-[#1F1F22] to-[#1F1F22] rounded-full p-[1px]">
                <div className="bg-background w-full h-full rounded-full flex items-center justify-center">
                  4
                </div>
              </div>
            </div>
            <div className="flex items-start w-full gap-3 lg:gap-6">
              <h3 className="text-lg lg:text-2xl tracking-tighter text-white font-brockmann">
                You Review
              </h3>
              <p className="text-xs lg:text-lg tracking-tight font-light leading-6 text-neutral-400">
                Want something changed? No problem. Code reviews and design
                revisions are included.
              </p>
            </div>
          </div>
          <div className="w-[1px] h-7 ml-4 bg-neutral-700 flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
