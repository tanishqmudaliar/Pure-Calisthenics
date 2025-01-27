"use client";
import Benefits from "@/components/Benefits";
import Modal from "@/components/Modal";
import localFont from "next/font/local";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Muscle Development",
    subtitle: "Build Lean Mass",
    src: "muscle-development.jpg",
    color: "#FF5733",
  },
  {
    title: "Visible Fat Loss",
    subtitle: "Shed Stubborn Fat",
    src: "fat-loss.jpg",
    color: "#27AE60",
  },
  {
    title: "Noticeable Strength Gains",
    subtitle: "Increase Your Power",
    src: "strength-gains.jpg",
    color: "#2980B9",
  },
  {
    title: "Core Strength & Stability",
    subtitle: "Stronger Core Foundation",
    src: "core-strength.jpg",
    color: "#8E44AD",
  },
  {
    title: "Moving Better Every Day",
    subtitle: "Improved Daily Mobility",
    src: "improved-mobility.jpg",
    color: "#F4D03F",
  },
  {
    title: "Mastering Bodyweight Control",
    subtitle: "Control Your Movement",
    src: "body-weight-control.jpg",
    color: "#E67E22",
  },
  {
    title: "Better Confidence & Personality",
    subtitle: "Elevate Your Presence",
    src: "confidence.jpg",
    color: "#C0392B",
  },
];

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const SectionFour = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(titleRef.current, {
      scrollTrigger: {
        pin: titleRef.current,
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-fit bg-white flex flex-col items-center justify-center"
    >
      <div
        ref={titleRef}
        className="w-full bg-white p-7 pt-10 md:mt-0 md:p-10 flex justify-center items-center z-10"
      >
        <div
          className={`${aspekta.className} w-4/5 text-start text-3xl md:text-6xl xl:text-7xl font-light text-black`}
        >
          We make sure you recieve
          <br />
          <span className={`${ppeditorialul.className} text-main `}>
            more
          </span>{" "}
          than you invest
        </div>
      </div>
      <div className="w-4/5 mb-20 flex flex-col justify-center items-center">
        {projects.map((project, index) => {
          return (
            <Benefits
              index={index}
              title={project.title}
              subtitle={project.subtitle}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default SectionFour;
