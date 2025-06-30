"use client";

import { useEffect } from "react";
import { About, Art, Cocktails, Hero, Loader, Menu } from "./components";
import gsap from "gsap";

export default function Home() {
  useEffect(() => {
    const handleLoad = () => {
      gsap.to("#el-loader", {
        opacity: 0,
        onComplete: () => {
          gsap.to("#el-main-container", {
            opacity: 1,
          });

          document.getElementById("el-loader")?.classList.add("hidden");
        },
      });
      console.log("Page Loaded");
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <Loader />
      <main
        id="el-main-container"
        className="w-full opacity-0 overflow-x-hidden"
      >
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
      </main>
    </>
  );
}
