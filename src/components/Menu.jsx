import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./anim";
import Curve from "./Curve";
import localFont from "next/font/local";
import Data from "./Data";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/",
  },
  {
    title: "Blog",
    href: "/",
  },
  {
    title: "Book a Session",
    href: "/",
  },
];
const Menu = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="w-svw md:w-2/4 min-w-fit h-screen bg-secondary fixed top-0 right-0 text-white flex flex-col xl:hidden"
      style={{ zIndex: 20 }}
    >
      <div className="box-border h-full m-24 mt-32 flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={`${aspekta.className} flex flex-col text-5xl gap-7 font-light`}
        >
          <div className="text-gray-300 border-b border-gray-300 text-xs pb-1 my-5 uppercase">
            <p className="font-semibold text-xs">Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Data
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Data>
            );
          })}
          <div
            className={`${aspekta.className} grid grid-cols-2 gap-5 w-full text-xs uppercase text-gray-300 font-normal pb-1 my-5 md:flex md:justify-between cursor-pointer`}
          >
            <a>Instagram</a>
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Youtube</a>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Menu;
