import React from "react";
import localFont from "next/font/local";
import EnlargeBubbles from "./EnlargeBubbles";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorial = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const SectionTwo = () => {
  const bubbles = [
    {
      id: 1,
      top: "70%",
      right: "40%",
      transformOrigin: "bottom left",
    },
    {
      id: 2,
      top: "55%",
      right: "10%",
      transformOrigin: "center",
    },
    {
      id: 3,
      top: "5%",
      right: "0%",
      transformOrigin: "top right",
    },
  ];

  return (
    <div className="w-full h-screen bg-white flex justify-start items-center flex-col overflow-hidden">
      <div className="w-4/5 m-10 md:m-24 xl:m-28">
        <h1
          className={`${aspekta.className} text-5xl md:text-6xl xl:text-7xl font-light text-black`}
        >
          Calisthenics broken down,
          <br />J<span className={`${ppeditorial.className} text-main`}>u</span>
          st for you
        </h1>
        <p
          className={`${aspekta.className} text-sm md:text-base xl:text-lg font-medium text-neutral-500 mt-10 md:mt-7 xl:mt-10 w-full md:w-1/2`}
        >
          We only teach what we are good at and that is pretty much everything
          you'll ever need. With us you will experiece:
        </p>
      </div>
      <EnlargeBubbles bubbles={bubbles} />
    </div>
  );
};

export default SectionTwo;
