"use client";

import { allCocktails } from "../constants";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import {
  drink1,
  drink2,
  drink3,
  drink4,
  leftArrow,
  rightArrow,
  sliderLeftLeaf,
  sliderRightLeaf,
} from "../utils";

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      "#current-cocktail-img",
      { opacity: 0, scale: 0.9 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "bounce.out",
      }
    );
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
  }, [currentIndex]);

  const totalCocktails = allCocktails.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  const drinks = [drink1, drink2, drink3, drink4];

  const currentCocktailImg = drinks[currentIndex];

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative w-full md:mt-40 mt-0 2xl:px-0 px-5 py-20 radial-gradient overflow-hidden"
    >
      <Image
        src={sliderLeftLeaf}
        alt="left-leaf"
        id="m-left-leaf"
        placeholder="blur"
        className="object-contain absolute -bottom-20 left-0"
      />
      <Image
        src={sliderRightLeaf}
        alt="right-leaf"
        id="m-right-leaf"
        placeholder="blur"
        className="object-contain absolute -top-40 right-0"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav
        className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 mb-20 relative z-10 md:max-w-6xl md:mx-auto"
        aria-label="Cocktail Navigation"
      >
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`md:text-3xl text-xl pb-2 cursor-pointer hover:text-yellow hover:border-yellow border-b-1 transition-colors font-modern-negra 
				${isActive ? "text-white border-white" : "text-white/50 border-white/50"}
			 `}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="flex flex-col justify-between items-center container md:w-[90%] mx-auto relative">
        <div className="flex items-center justify-between w-full absolute">
          <button
            className="text-left text-white hover:text-yellow cursor-pointer transition-colors max-w-36"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              {prevCocktail.name}
            </span>
            <Image src={rightArrow} alt="right-arrow" aria-hidden="true" />
          </button>

          <button
            className="text-left text-white hover:text-yellow cursor-pointer transition-colors max-w-36"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              {nextCocktail.name}
            </span>
            <Image src={leftArrow} alt="left-arrow" aria-hidden="true" />
          </button>
        </div>

        <div
          id="cocktail-img"
          className="flex justify-center items-center mt-10"
        >
          {/* Current Cocktail */}
          <Image
            src={currentCocktailImg}
            className="object-contain h-[60vh]"
            alt={currentCocktail.title}
            id="current-cocktail-img"
            style={{ width: "auto" }}
            placeholder="blur"
          />
        </div>

        <div className="details flex max-md:flex-col gap-10 md:items-center justify-between w-full lg:absolute bottom-0">
          <div ref={contentRef} className="space-y-4 lg:translate-y-20">
            <p>Recipe for:</p>
            <p
              id="title"
              className="font-modern-negra md:text-6xl text-3xl text-yellow max-w-40"
            >
              {currentCocktail.name}
            </p>
          </div>

          <div className="space-y-5 md:max-w-md text-left">
            <h2 className="md:text-5xl text-3xl font-serif">
              {currentCocktail.title}
            </h2>
            <p className="md:text-lg pe-5">{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
