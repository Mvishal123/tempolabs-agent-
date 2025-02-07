"use client";

import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-[999] px-12 py-[1.5rem] bg-transparent backdrop-blur-md flex items-center justify-between fixed top-0 w-full">
      <div className="relative z-10 flex text-white/95 items-center gap-4 font-normal">
        <div className="bg-brand w-fit p-2.5 rounded-lg ">
          <Image src="/images/logo.svg" alt="logo" width={18} height={18} />
        </div>
        Tempo Agent+
      </div>

      {/* Navigation */}
      <nav className="absolute inset-x-0 hidden md:flex items-center justify-center">
        <ul className="flex items-center gap-4">
          {LINKS.map((item, idx) => (
            <li
              key={idx}
              className="font-light text-[#A3A3A3] hover:text-white/90 inline"
            >
              <Link href={item.label}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative z-10">
        <Button>Book a Call</Button>
      </div>
    </header>
  );
};

export default Header;

const LINKS = [
  {
    label: "AI",
    href: "#",
  },
  {
    label: "Features",
    href: "#",
  },
  {
    label: "Components",
    href: "#",
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "FAQ",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Agent+",
    href: "#",
  },
];
