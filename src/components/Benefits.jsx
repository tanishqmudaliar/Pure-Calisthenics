"use client";
import localFont from "next/font/local";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const Benefits = ({ title, subtitle, body }) => {
  const bodyRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const bodyElement = bodyRef.current;

    // Initial setup - hide the body content
    gsap.set(bodyElement, {
      height: 0,
      opacity: 0,
      y: -20,
      marginTop: 0,
    });

    // Create hover animation
    container.addEventListener("mouseenter", () => {
      gsap.to(bodyElement, {
        height: "auto",
        opacity: 1,
        y: 0,
        marginTop: 16, // equivalent to mt-4
        duration: 0.4,
        ease: "power2.out",
      });
    });

    // Create hover out animation
    container.addEventListener("mouseleave", () => {
      gsap.to(bodyElement, {
        height: 0,
        opacity: 0,
        y: -20,
        marginTop: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    });

    // Cleanup
    return () => {
      container.removeEventListener("mouseenter", () => {});
      container.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="group flex flex-col w-full justify-center items-center p-6 xl:p-12 border-t border-gray-400 cursor-pointer transition-all duration-300 last:border-b last:border-gray-400 hover:-mb-4"
    >
      <div className="flex w-full justify-between items-center">
        <h2
          className={`${aspekta.className} text-black text-start text-2xl md:text-3xl xl:text-5xl font-normal transition-all duration-400 group-hover:-translate-x-2 mr-3`}
        >
          {title}
        </h2>
        <p
          className={`${ppeditorialul.className} text-neutral-600 text-end text-sm md:text-xl xl:text-2xl transition-all duration-400 font-light group-hover:translate-x-2 ml-3`}
        >
          {subtitle}
        </p>
      </div>
      <div
        ref={bodyRef}
        className="w-full flex-col justify-center items-center border-t border-gray-400"
      >
        <p className={`${aspekta.className} my-4`}>{body}</p>
      </div>
    </div>
  );
};

export default Benefits;
