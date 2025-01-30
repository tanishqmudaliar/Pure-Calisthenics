"use client";
import localFont from "next/font/local";
import React from "react";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const Benefits = ({ title, subtitle, body }) => {
  return (
    <div className="group flex flex-col w-full justify-center items-center p-6 xl:p-12 border-t border-gray-400 cursor-pointer transition-all duration-300 last:border-b last:border-gray-400 hover:-mb-4">
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
      <div className="w-full opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-auto flex-col justify-center items-center border-t border-gray-400 group-hover:mt-4 transition-all duration-300 ease-in-out">
        <p className={`${aspekta.className} my-4`}>{body}</p>
      </div>
    </div>
  );
};

export default Benefits;
