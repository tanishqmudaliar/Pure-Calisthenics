"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full h-full">
      <div
        className="fixed w-full h-20 flex top-0 justify-center items-center bg-white border-b border-secondary"
        style={{ zIndex: 25 }}
      >
        <div className="w-4/5 flex justify-between items-center">
          <img
            src="/logo/pure-calisthenics.png"
            className="w-44 h-auto"
            alt="Pure Calisthenics"
          />
          <div className="hidden xl:flex justify-between items-center w-2/5">
            <h1 className={`${aspekta.className} text-lg cursor-pointer`}>
              Home
            </h1>
            <h1 className={`${aspekta.className} text-lg cursor-pointer`}>
              About
            </h1>
            <h1 className={`${aspekta.className} text-lg cursor-pointer`}>
              Blog
            </h1>
            <button
              className={`${aspekta.className} bg-main w-fit h-fit p-3 text-lg rounded-full border-2 font-semibold border-black text-white`}
            >
              Book a Demo Session
            </button>
          </div>
          <div className="flex xl:hidden justify-center items-center">
            <h1
              className={`${aspekta.className} relative text-xl text-secondary`}
            >
              {isActive ? "CLOSE" : "MENU"}
            </h1>
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="relative w-12 h-12 rounded-full cursor-pointer flex items-center justify-center"
            >
              <div
                className={`relative w-full ${
                  isActive ? "burger-active" : "burger"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Menu />}</AnimatePresence>
    </div>
  );
};

export default NavBar;
