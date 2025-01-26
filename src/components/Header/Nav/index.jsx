import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import localFont from "next/font/local";

const aspekta = localFont({
  src: "../../../fonts/AspektaVF.woff2",
});

const navItems = [
  {
    title: "Section 1",
    href: "/",
  },
  {
    title: "Section 2",
    href: "/work",
  },
  {
    title: "Section 3",
    href: "/about",
  },
  {
    title: "Section 4",
    href: "/contact",
  },
];

export default function index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="w-svw md:w-2/4 lg:w-1/3 min-w-fit h-screen bg-secondary fixed top-0 right-0 text-white"
    >
      <div className="box-border h-full m-24 flex flex-col justify-between">
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
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
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
}
