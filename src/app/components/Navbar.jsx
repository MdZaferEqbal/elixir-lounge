"use client";

import Image from "next/image";
import Link from "next/link";

import { logo } from "../utils";
import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    const headerTween = gsap.timeline({
      scrollTrigger: {
        trigger: "#el-header",
        start: "bottom +60",
        end: "top top",
        scrub: 0.75,
      },
    });

    headerTween.fromTo(
      "#el-header",
      {
        backgroundColor: "transparent",
      },
      {
        backdropFilter: "blur(10px)",
      }
    );
  }, []);

  return (
    <header id="el-header" className="fixed z-50 w-full bg-[rgba(0,0,0,0.31)]">
      <nav className="flex md:flex-row md:w-[90%] flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">
        <Link
          href="#hero"
          className="flex items-center gap-2 cursor-pointer text-nowrap md:text-base text-sm"
        >
          <Image src={logo} alt="Elixir Lounge Logo" />
          <p className="font-modern-negra text-3xl -mb-2">Elixir Lounge</p>
        </Link>
        <ul className="flex justify-center items-center lg:gap-12 gap-7">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className="cursor-pointer text-nowrap md:text-base text-sm hover:text-yellow transition-all hover:scale-110"
            >
              <Link href={`#${navLink.id}`}>{navLink.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
