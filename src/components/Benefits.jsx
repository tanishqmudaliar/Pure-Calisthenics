"use client";
import localFont from "next/font/local";
import React from "react";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const Benefits = ({ index, title, subtitle, setModal }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="group flex w-full justify-between items-center p-6 xl:p-12 border-t border-gray-400 cursor-pointer transition-all duration-200 last:border-b last:border-gray-300 hover:opacity-50"
    >
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
  );
};

export default Benefits;
