"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Nav from "./Nav";
import { AnimatePresence } from "framer-motion";
import localFont from "next/font/local";

const aspekta = localFont({
  src: "../../fonts/AspektaVF.woff2",
});

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex justify-evenly items-center">
      <h1
        className={`${aspekta.className} relative text-xl md:text-2xl lg:text-3xl font-normal text-white z-10`}
      >
        {isActive ? "CLOSE" : "MENU"}
      </h1>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="relative z-10 w-12 h-12 rounded-full cursor-pointer flex items-center justify-center"
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
