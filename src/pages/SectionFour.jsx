"use client";
import React, { useEffect, useRef } from "react";
import localFont from "next/font/local";
import gsap from "gsap";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const ppeditorial = localFont({
  src: "../fonts/ppeditorialold-italic.otf",
});

const SectionFour = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  let xPercent = 0;

  useEffect(() => {
    gsap.set(thirdText.current, {
      left: thirdText.current.getBoundingClientRect().width,
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(thirdText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.075;
  };
  return (
    <div className="w-full h-fit md:h-svh bg-secondary flex flex-col justify-evenly items-center pt-20 pb-10">
      <div className="w-4/5 mx-10 md:mx-10 xl:mx-14">
        <h1
          className={`${aspekta.className} text-5xl md:text-6xl xl:text-7xl font-light text-white`}
        >
          It’s all quite,
          <br />
          Si
          <span className={`${ppeditorialul.className} text-main `}>m</span>ple
        </h1>
        <p
          className={`${aspekta.className} text-sm md:text-base xl:text-lg font-medium text-slate-200 mt-10`}
        >
          We're obsessed with you feeling strong, light & and in control of your
          health.
        </p>
      </div>
      <div className="flex w-full md:w-4/5 justify-center md:justify-end my-14 md:my-10">
        <div className="relative w-36 h-36 md:w-44 md:h-44 z-15 left-5 bg-white rounded-full flex flex-col justify-center items-center text-3xl">
          <h1
            className={`${ppeditorial.className} font-medium text-5xl mt-3 md:mt-0`}
          >
            700+
          </h1>
          <h1
            className={`${aspekta.className} text-xs text-center font-medium uppercase`}
          >
            students
            <span> </span>
            <br className="md:hidden" />
            trained
          </h1>
        </div>
        <div className="w-36 h-36 md:w-44 md:h-44 z-10 bg-main rounded-full flex flex-col justify-center items-center text-3xl">
          <h1
            className={`${ppeditorial.className} ml-4 md:ml-0 font-medium text-5xl`}
          >
            100+
          </h1>
          <h1 className={`${aspekta.className} text-xs font-medium uppercase`}>
            transformed
          </h1>
        </div>
        <div className="relative w-36 h-36 md:w-44 md:h-44 -left-5 bg-white rounded-full flex flex-col justify-center items-center text-3xl">
          <h1
            className={`${ppeditorial.className} font-medium text-5xl mt-3 md:mt-0`}
          >
            4+
          </h1>
          <h1
            className={`${aspekta.className} text-xs text-center font-medium uppercase`}
          >
            years of
            <span> </span>
            <br className="md:hidden" />
            experience
          </h1>
        </div>
      </div>
      <div className="w-screen h-fit bg-white">
        <div
          className={`${aspekta.className} relative whitespace-nowrap flex text-xs md:text-base xl:text-lg uppercase font-medium py-2 text-black`}
        >
          <h1 ref={firstText}>
            Dr Jigar Maniar, Dr Devesh Tiwari, Anchal Pilani (Yoga), Aleena
            Joshi (Yoga), Jay Shah (London), Akhilesh & Shilpa (Australia),
          </h1>
          <h1 ref={secondText} className="ml-2">
            Dr Jigar Maniar, Dr Devesh Tiwari, Anchal Pilani (Yoga), Aleena
            Joshi (Yoga), Jay Shah (London), Akhilesh & Shilpa (Australia),
          </h1>
          <h1 ref={thirdText} className="ml-2">
            Dr Jigar Maniar, Dr Devesh Tiwari, Anchal Pilani (Yoga), Aleena
            Joshi (Yoga), Jay Shah (London), Akhilesh & Shilpa (Australia),
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
