"use client";

import Image from "next/image";
import { heroLeftLeaf, heroRightLeaf } from "../utils";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          heroLeftSubtitleSplit.revert();
          heroRightSubtitleSplit.revert();
        },
      });

      SplitText.create("#el-hero-title", {
        type: "chars, words",
        charsClass: "text-gradient",
        onSplit: (self) => {
          gsap.to("#el-hero-title", {
            opacity: 1,
          });

          return tl.from(self.chars, {
            yPercent: 50,
            opacity: 0,
            duration: 1.8,
            ease: "expo.out",
            stagger: {
              amount: 0.5,
              from: "start",
            },
          });
        },
      });

      let heroLeftSubtitleSplit = SplitText.create("#el-hero-left-subtitle", {
        type: "lines",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
          gsap.to("#el-hero-left-subtitle", {
            opacity: 1,
          });

          return tl.from(
            self.lines,
            {
              y: 50,
              opacity: 0,
              ease: "power1.inOut",
              autoAlpha: 0,
              stagger: 0.05,
            },
            "<1"
          );
        },
      });

      let heroRightSubtitleSplit = SplitText.create("#el-hero-right-subtitle", {
        type: "lines",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
          gsap.to("#el-hero-right-subtitle", {
            opacity: 1,
          });

          return tl.from(
            self.lines,
            {
              y: 50,
              opacity: 0,
              ease: "power1.inOut",
              autoAlpha: 0,
              stagger: 0.05,
            },
            "<"
          );
        },
      });
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(
        "#el-hero-right-leaf",
        {
          y: 200,
        },
        "<"
      )
      .to(
        "#el-hero-left-leaf",
        {
          y: -200,
        },
        "<"
      );

    const startValue = isMobile ? "top 50%" : "center 50%";
    const endValue = isMobile ? "120% top" : "bottom top";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#el-hero-video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    const video = videoRef.current;

    tl.to(video, {
      currentTime: video.duration,
    });
  }, []);

  return (
    <>
      <section
        id="hero"
        className='inset-0 size-full bg-[url("/images/noise.png")] relative z-10 min-h-dvh w-full border border-transparent'
      >
        <h1
          id="el-hero-title"
          className="md:mt-32 mt-40 text-8xl md:text-[20vw] leading-none text-center font-modern-negra uppercase opacity-0 text-gradient"
        >
          Mojito
        </h1>
        <Image
          src={heroLeftLeaf}
          alt="Left Leaf"
          placeholder="blur"
          id="el-hero-left-leaf"
          className="absolute left-0 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto -bottom-20"
        />

        <Image
          src={heroRightLeaf}
          alt="Right Leaf"
          placeholder="blur"
          id="el-hero-right-leaf"
          className="absolute right-0 md:bottom-0 xl:top-0 2xl:top-12 top-1/2"
        />

        <div className="container md:w-[90%] mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5">
          <div className="flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto">
            <div className="space-y-5 hidden md:block">
              <p className="2xl:text-start text-center">
                Cool. Crisp. Classic.
              </p>
              <p
                id="el-hero-left-subtitle"
                className="font-modern-negra text-6xl text-yellow max-w-xl opacity-0"
              >
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full">
              <p id="el-hero-right-subtitle" className="text-left opacity-0">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <Link
                href="#cocktails"
                className="font-semibold opacity-80 2xl:text-start text-center hover:text-yellow"
              >
                View cocktails
              </Link>
            </div>
          </div>
        </div>
      </section>
      <video
        className="w-full h-[100%] absolute bottom-0 left-0 md:object-contain object-bottom object-cover inset-0"
        ref={videoRef}
        id="el-hero-video"
        muted
        playsInline
        preload="auto"
        src="/videos/output.mp4"
      />
    </>
  );
};

export default Hero;
