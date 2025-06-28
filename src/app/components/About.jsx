"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { abt1, abt2, abt3, abt4, abt5 } from "../utils";
import Image from "next/image";

gsap.registerPlugin(SplitText);

const About = () => {
  useGSAP(() => {
    let subTitleTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#el-about-subtitle",
        start: "bottom bottom",
      },
      onComplete: () => {
        aboutSubtitleSplit.revert();
      },
    });

    let aboutSubtitleSplit = SplitText.create("#el-about-subtitle", {
      type: "lines",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        gsap.to("#el-about-subtitle", {
          opacity: 1,
        });

        return subTitleTl.from(self.lines, {
          y: 50,
          opacity: 0,
          ease: "power1.inOut",
          autoAlpha: 0,
          stagger: 0.05,
        });
      },
    });

    let gridTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animated-img",
        start: "top bottom-=30%",
      },
    });

    gridTl.fromTo(
      ".animated-img",
      {
        opacity: 0,
        yPercent: 50,
      },
      {
        opacity: 1,
        yPercent: 0,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden py-28 2xl:px-0 px-5 container md:w-[90%] mx-auto"
    >
      <div className="mb-16 md:px-0 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="md:col-span-8">
            <p className="inline-block rounded-full bg-white text-black px-4 py-2 text-sm font-medium mb-8">
              Best Cocktails
            </p>
            <h2
              id="el-about-subtitle"
              className="text-5xl md:text-6xl font-modern-negra max-w-lg opacity-0"
            >
              Where every details matter<span className="text-white"> - </span>
              from muddle to garnish
            </h2>
          </div>

          <div className="md:col-span-4 space-y-5 flex flex-col justify-between">
            <p className="text-lg">
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
            <div className="flex flex-col justify-between md:gap-2 gap-5">
              <p className="md:text-3xl text-xl font-bold">
                <span className="text-yellow font-bold text-5xl">4.5</span>/5.0
              </p>
              <p>More than +12000 customers</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="top-grid"
        className="grid grid-cols-1 xl:grid-cols-12 gap-5 mb-5 md:px-0 px-5"
      >
        <div className="animated-img md:col-span-3 rounded-3xl overflow-hidden h-72 relative">
          <div className='absolute inset-0 size-full bg-[url("/images/noise.png")]' />
          <Image
            src={abt1}
            alt="grid-img-1"
            placeholder="blur"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="animated-img md:col-span-6 rounded-3xl overflow-hidden h-72 relative">
          <div className='absolute inset-0 size-full bg-[url("/images/noise.png")]' />
          <Image
            src={abt2}
            alt="grid-img-2"
            placeholder="blur"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="animated-img md:col-span-3 rounded-3xl overflow-hidden h-72 relative">
          <div className='absolute inset-0 size-full bg-[url("/images/noise.png")]' />
          <Image
            src={abt5}
            alt="grid-img-5"
            placeholder="blur"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div
        id="bottom-grid"
        className="animated-img grid grid-cols-1 md:grid-cols-12 gap-5 md:px-0 px-5"
      >
        <div className="animated-img md:col-span-8 rounded-3xl overflow-hidden h-72 relative">
          <div className='absolute inset-0 size-full bg-[url("/images/noise.png")]' />
          <Image
            src={abt3}
            alt="grid-img-3"
            placeholder="blur"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="animated-img md:col-span-4 rounded-3xl overflow-hidden h-72 relative">
          <div className='absolute inset-0 size-full bg-[url("/images/noise.png")]' />
          <Image
            src={abt4}
            alt="grid-img-4"
            placeholder="blur"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
