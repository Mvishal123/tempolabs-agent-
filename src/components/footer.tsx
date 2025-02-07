import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import TempoLogoBig from "./tempo-logo-big";

const Footer = () => {
  return (
    <footer className="footer-gradient py-10 px-6 relative">
      <div className="max-w-7xl mx-auto flex items-start justify-between overflow-hidden">
        <div>
          <div className="w-fit border-b-[0.5px] border-white/15 pb-6">
            <span className="text-xs text-white/60">TEMPO LABS | YC 23</span>
            <p className="text-3xl mt-4">
              Build UI's 10x faster{" "}
              <span className="bg-gradient-to-r from-purple-500 to-violet-400 bg-clip-text text-transparent">
                with AI
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div className="p-2 bg-white/10 rounded-md">
              <Linkedin className="text-white/70 size-4" />
            </div>
            <div className="p-2 bg-white/10 rounded-md">
              <Twitter className="text-white/70 size-4" />
            </div>
            <div className="p-2 bg-white/10 rounded-md">
              <Instagram className="text-white/70 size-4" />
            </div>
          </div>
          <div className="mt-6 ">
            <div>
              <h1 className="text-xs text-white/60">COMPANY</h1>
              <ul className="mt-2 space-y-3 text-white/80 text-lg">
                <li>
                  <Link className="hover:underline" href="#">
                    Agent+
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="#">
                    React Components
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="#">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h1 className="text-xs text-white/60">LEGAL</h1>
              <ul className="mt-2 space-y-3 text-white/80 text-lg">
                <li>
                  <Link className="hover:underline" href="#">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="#">
                    TOS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
            <TempoLogoBig />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
