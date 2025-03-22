"use client";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";
import { menuSlide, slide } from "./anim";
import Curve from "./curve";

const theme = createTheme({
  palette: {
    white: {
      main: "#ffffff",
    },
  },
});

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full h-full">
      {/* Navigation Bar */}
      <div
        className="fixed w-full h-20 flex top-0 justify-center items-center bg-white border-b border-secondary"
        style={{ zIndex: 25 }}
      >
        <div className="w-[95vw] md:w-4/5 flex justify-evenly md:justify-between items-center">
          <img
            src="/logo/pure-calisthenics.png"
            className="w-44 h-auto"
            alt="Pure Calisthenics"
          />
          <div className="hidden xl:flex justify-between items-center w-2/5">
            <a
              href="/"
              className={`${aspekta.className} text-lg cursor-pointer`}
            >
              Home
            </a>
            <a
              href="/#services-section"
              className={`${aspekta.className} text-lg cursor-pointer`}
            >
              Services
            </a>
            <a
              href="/blogs"
              className={`${aspekta.className} text-lg cursor-pointer`}
            >
              Blogs
            </a>
            <a
              className={`${aspekta.className} bg-main bg-opacity-30 w-fit h-fit py-2 px-6 text-lg rounded-full font-semibold text-main cursor-pointer border-2 border-main hover:bg-opacity-100 hover:text-white transition-all duration-200`}
              href="https://api.whatsapp.com/send?phone=9773968119"
              target="_blank"
            >
              Book a Demo Session
            </a>
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

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isActive && (
          <ThemeProvider theme={theme}>
            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="w-full h-screen bg-secondary fixed top-0 right-0 flex flex-col xl:hidden"
              style={{ zIndex: 20 }}
            >
              <div className="box-border h-full mx-12 mt-36 flex flex-col justify-start items-center">
                <div className="flex flex-col gap-7">
                  <div className="border-b border-white pb-1 my-5 uppercase w-[50vw]">
                    <p
                      className={`${aspekta.className} text-white font-semibold text-sm`}
                    >
                      Navigation
                    </p>
                  </div>

                  {/* Home Item */}
                  <motion.div
                    custom={0}
                    variants={slide}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <a
                      href="/"
                      onClick={() => setIsActive(false)}
                      className={`${aspekta.className} text-white font-light text-5xl flex`}
                    >
                      Home
                    </a>
                  </motion.div>

                  {/* Services Item */}
                  <motion.div
                    custom={1}
                    variants={slide}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <a
                      href="/#services-section"
                      onClick={() => setIsActive(false)}
                      className={`${aspekta.className} text-white font-light text-5xl flex`}
                    >
                      Services
                    </a>
                  </motion.div>

                  {/* Blogs Item */}
                  <motion.div
                    custom={2}
                    variants={slide}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <a
                      href="/blogs"
                      onClick={() => setIsActive(false)}
                      className={`${aspekta.className} text-white font-light text-5xl flex`}
                    >
                      Blogs
                    </a>
                  </motion.div>

                  {/* Social Icons */}
                  <div
                    className={`${aspekta.className} grid grid-cols-2 gap-5 place-content-start w-full uppercase pb-1 my-5 cursor-pointer`}
                  >
                    <IconButton
                      target="_blank"
                      href="https://www.instagram.com/pure__calisthenics"
                      color="white"
                      className="w-[135px] h-12 rounded-lg flex justify-start"
                    >
                      <InstagramIcon className="mr-2" />
                      <h1 className="text-white text-sm font-semibold">
                        Instagram
                      </h1>
                    </IconButton>
                    <IconButton
                      target="_blank"
                      href="https://www.youtube.com/channel/UCTa4HXD-6C2j4ROP1Vq0B3g"
                      color="white"
                      className="w-[135px] h-12 rounded-lg flex justify-start"
                    >
                      <YouTubeIcon className="mr-2" />
                      <h1 className="text-white text-sm font-semibold">
                        Youtube
                      </h1>
                    </IconButton>
                    <IconButton
                      target="_blank"
                      href="tel:+919773968119"
                      color="white"
                      className="w-[135px] h-12 rounded-lg flex justify-start"
                    >
                      <Phone className="mr-2" />
                      <h1 className="text-white text-sm font-semibold">
                        Call Us
                      </h1>
                    </IconButton>
                    <IconButton
                      target="_blank"
                      href="https://maps.app.goo.gl/zmLdBUQ7aXXEuuae8"
                      color="white"
                      className="w-[135px] h-12 rounded-lg flex justify-start"
                    >
                      <LocationOnIcon className="mr-2" />
                      <h1 className="text-white text-sm font-semibold">
                        Location
                      </h1>
                    </IconButton>
                  </div>
                </div>
              </div>
              <Curve />
            </motion.div>
          </ThemeProvider>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
