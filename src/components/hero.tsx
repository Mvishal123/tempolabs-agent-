"use client";

import { motion, Variants } from "motion/react";
import { Button } from "./button";
import YCLogo from "./yc-logo";
import KevinCursor from "./kevin-cursor";
import ParthCursor from "./parth-cursor";
import PeterCursor from "./peter-cursor";
import useCursor from "@/hooks/useCursor";
import CustomCursor from "./customCursor";
import MovingCursor from "./moving-cursor";

const gentleMovement: Variants = {
  animate: {
    x: [0, 30, -30, 0], // Moves left-right within ±30px
    y: [0, 30, -30, 0], // Moves up-down within ±30px
    transition: {
      repeat: Infinity,
      repeatType: "mirror", // ✅ Corrected Type
      duration: 5,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const { cursorPos, hideCursor, setHideCursor } = useCursor();

  return (
    <div
      className="hero max-w-7xl mx-auto relative flex flex-col items-center py-12 sm:cursor-none"
      onMouseEnter={() => setHideCursor(false)}
      onMouseLeave={() => setHideCursor(true)}
    >
      <div className="pt-16">
        <div className="font-light flex items-center gap-2 bg-white/15 rounded-md py-2 px-4">
          Backed by
          <div className="bg-orange-500 size-6 flex items-center justify-center rounded">
            <YCLogo />
          </div>
          <span className="text-orange-500">Combinator</span>
        </div>
      </div>

      <div className="flex items-center justify-center max-w-2xl mt-6 border select-none hover:border-brand border-transparent">
        <h1 className="text-[3.5rem] text-center leading-tight font-medium">
          Design & Development for High-Growth Startups
        </h1>
      </div>

      <div className="flex items-center justify-center max-w-lg mt-12 select-none border hover:border-brand border-transparent">
        <p className="text-white/60 text-center font-light text-lg">
          Let our agents build your React app.
          <br /> 1-3 features shipped weekly,
          <span className="text-white"> Guaranteed.</span>
        </p>
      </div>

      <div
        className="my-10 z-10 "
        onMouseEnter={() => setHideCursor(true)}
        onMouseLeave={() => setHideCursor(false)}
      >
        <Button className="cursor-pointer">Get Started</Button>
      </div>

      {/* Decor */}
      <div className="h-[300px] w-[600px] rounded-full bg-brand/40 blur-[200px] absolute z-[-99]" />

      {/* Moving Cursors */}
      <div className="hidden sm:block sm:size-40 md:size-48 absolute bottom-24 left-80">
        <MovingCursor Component={PeterCursor} />
      </div>
      <div className="hidden sm:block sm:size-40 md:size-48 absolute top-10 left-48">
        <MovingCursor Component={KevinCursor} />
      </div>
      <div className="hidden sm:block sm:size-40 md:size-48 absolute top-20 right-32">
        <MovingCursor Component={ParthCursor} />
      </div>

      {/* Custom Cursor */}
      <CustomCursor x={cursorPos.x} y={cursorPos.y} hide={hideCursor} />
    </div>
  );
};

export default Hero;
