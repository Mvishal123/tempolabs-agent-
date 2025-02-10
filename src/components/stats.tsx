import React from "react";

const Stats = () => {
  return (
    <section className="mt-36 flex flex-col items-center py-12">
      <p className="text-4xl font-brockmann text-center max-w-4xl tracking-tight leading-snug text-neutral-400">
        We <span className="text-white">10X</span> the speed of{" "}
        <span className="text-white">design & development</span>
        using the perfect combination of{" "}
        <span className="text-white">AI + human expertise.</span>
      </p>
      <div className="flex flex-wrap gap-10 max-md:gap-14 items-start max-lg:justify-center mt-32 text-center max-md:mt-28 max-md:max-w-full font-brockmann">
        <div className="flex flex-col items-center min-w-[240px] w-[275px]">
          <div className="text-8xl tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#38C793] to-[#503ABF] max-md:text-6xl">
            95%
          </div>
          <div className="mt-5 text-lg tracking-tight leading-none text-neutral-500">
            Retention Rate Across Clients
          </div>
        </div>
        <div className="flex flex-col items-center min-w-[240px] w-[275px]">
          <div className="text-8xl tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b to-[#503ABF] max-md:text-6xl from-[#DA41D3]">
            3x
          </div>
          <div className="mt-5 text-lg tracking-tight leading-none text-neutral-500">
            Increase in Development Velocity
          </div>
        </div>
        <div className="flex flex-col items-center min-w-[240px] w-[275px]">
          <div className="text-8xl tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#38C793] to-[#503ABF] max-md:text-6xl">
            $100K
          </div>
          <div className="mt-5 text-lg tracking-tight leading-none text-neutral-500">
            Avg Savings per Year
          </div>
        </div>
      </div>
      <img
        alt="Tempo ISsue image"
        loading="lazy"
        width="1200"
        height="650"
        data-nimg="1"
        className="mt-32 md:mt-40"
        src="https://www.tempolabs.ai/_next/static/media/tempo-issue-tracker.fb118295.svg"
        style={{ color: "transparent" } as React.CSSProperties}
      ></img>
    </section>
  );
};

export default Stats;
