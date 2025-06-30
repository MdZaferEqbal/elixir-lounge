"use client";

import Image from "next/image";
import { cocktailLeftLeaf, cocktailRightLeaf } from "../utils";
import { cocktailLists, mockTailLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#el-cocktails-l-leaf", {
        x: -100,
        y: 100,
      })
      .from("#el-cocktails-r-leaf", {
        x: 100,
        y: 100,
      });
  });
  return (
    <section
      id="cocktails"
      className='inset-0 size-full bg-[url("/images/noise.png")] relative min-h-dvh w-full overflow-hidden'
    >
      <Image
        src={cocktailLeftLeaf}
        alt="Left Leaf"
        placeholder="blur"
        id="el-cocktails-l-leaf"
        className="absolute left-0 md:bottom-0 md:top-auto -top-20"
      />
      <Image
        src={cocktailRightLeaf}
        alt="Right Leaf"
        placeholder="blur"
        id="el-cocktails-r-leaf"
        className="absolute right-0 md:bottom-0 md:top-auto -top-20"
      />
      <div className="container md:w-[90%] mx-auto relative z-10 flex md:flex-row flex-col justify-between items-start gap-20 pt-40 2xl:px-0 px-5">
        <div className="space-y-8 w-full md:w-fit">
          <h2 className="text-xl font-medium">Most popular Coktails:</h2>
          <ul className="space-y-8">
            {cocktailLists.map((cocktail) => (
              <li
                key={cocktail.name}
                className="flex justify-between items-start"
              >
                <div className="md:me-28">
                  <h3 className="font-modern-negra 2xl:text-3xl text-xl text-yellow">
                    {cocktail.name}
                  </h3>
                  <p className="text-sm">
                    {cocktail.country} | {cocktail.detail}
                  </p>
                </div>
                <span className="text-xl font-extrabold">
                  - {cocktail.price}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8 w-full md:w-fit pb-20 md:pb-0">
          <h2 className="text-xl font-medium">Most loved Mocktail:</h2>
          <ul className="space-y-8">
            {mockTailLists.map((mocktail) => (
              <li
                key={mocktail.name}
                className="flex justify-between items-start"
              >
                <div className="me-28">
                  <h3 className="font-modern-negra 2xl:text-3xl text-xl text-yellow">
                    {mocktail.name}
                  </h3>
                  <p className="text-sm">
                    {mocktail.country} | {mocktail.detail}
                  </p>
                </div>
                <span className="text-xl font-extrabold">
                  - {mocktail.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
