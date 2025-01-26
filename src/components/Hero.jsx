"use client";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import Bubbles from "./Bubbles";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorial = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-svh bg-main flex justify-end items-center flex-col">
      <Bubbles
        imageSrc="/images/1.jpg"
        x={isSmallScreen ? "-27%" : "-36%"}
        y={isSmallScreen ? "6%" : "7%"}
        bubbleSize={isSmallScreen ? "10vw" : "7vw"}
        imageSize={isSmallScreen ? "35vw" : "23vw"}
        zIndex={6}
        delay={0}
        startAsImage={true}
      />
      <Bubbles
        imageSrc="/images/2.jpg"
        x={isSmallScreen ? "0%" : "0%"}
        y={isSmallScreen ? "-2%" : "3%"}
        bubbleSize={isSmallScreen ? "10vw" : "7vw"}
        imageSize={isSmallScreen ? "45vw" : "25vw"}
        zIndex={5}
        delay={-2}
        startAsImage={false}
      />
      <Bubbles
        imageSrc="/images/3.jpg"
        x={isSmallScreen ? "-23%" : "-30%"}
        y={isSmallScreen ? "-9%" : "-7%"}
        bubbleSize={isSmallScreen ? "10vw" : "4vw"}
        imageSize={isSmallScreen ? "33vw" : "15vw"}
        zIndex={4}
        delay={-2}
        startAsImage={false}
      />
      <Bubbles
        imageSrc="/images/4.jpg"
        x={isSmallScreen ? "-10%" : "-13%"}
        y={isSmallScreen ? "-9%" : "-8%"}
        bubbleSize={isSmallScreen ? "0vw" : "4vw"}
        imageSize={isSmallScreen ? "0vw" : "15vw"}
        zIndex={3}
        delay={4}
        startAsImage={false}
      />
      <Bubbles
        imageSrc="/images/4.jpg"
        x={isSmallScreen ? "27%" : "33%"}
        y={isSmallScreen ? "-11%" : "-9%"}
        bubbleSize={isSmallScreen ? "10vw" : "4vw"}
        imageSize={isSmallScreen ? "30vw" : "15vw"}
        zIndex={2}
        delay={-1}
        startAsImage={true}
      />
      <Bubbles
        imageSrc="/images/4.jpg"
        x={isSmallScreen ? "30%" : "30%"}
        y={isSmallScreen ? "7%" : "7%"}
        bubbleSize={isSmallScreen ? "10vw" : "7vw"}
        imageSize={isSmallScreen ? "30vw" : "25vw"}
        zIndex={2}
        delay={5}
        startAsImage={false}
      />
      <div className="absolute z-10 w-max h-min mb-8">
        <h1
          className={`${aspekta.className} text-center md:text-start text-lg md:text-2xl font-light text-white`}
        >
          We Do Calisthenics Personal Training
        </h1>
        <h1
          className={`${aspekta.className} text-center text-2xl md:text-5xl xl:text-7xl font-light text-white`}
        >
          Structured. System Based.{" "}
          <span className={ppeditorial.className}>Trusted.</span>
        </h1>
        <h1
          className={`${aspekta.className} text-center md:text-end text-lg md:text-2xl font-light text-white`}
        >
          We Represent Self Improvement
        </h1>
      </div>
    </div>
  );
};

export default Hero;
