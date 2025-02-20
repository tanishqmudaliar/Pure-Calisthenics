import React from "react";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { menuSlide } from "./anim";
import Curve from "./Curve";
import Data from "./Data";

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

const navItems = [
  {
    title: "Section 1",
  },
  {
    title: "Section 2",
  },
  {
    title: "Section 3",
  },
];
const Menu = () => {
  return (
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
            <div className="border-b border-white pb-1 my-5 uppercase">
              <p
                className={`${aspekta.className} text-white font-semibold text-sm`}
              >
                Navigation
              </p>
            </div>
            {navItems.map((data, index) => {
              return <Data key={index} data={{ ...data, index }}></Data>;
            })}
            <div
              className={`${aspekta.className} grid grid-cols-2 gap-5 w-full uppercase pb-1 my-5 cursor-pointer`}
            >
              <IconButton
                target="_blank"
                href="https://www.instagram.com/pure__calisthenics"
                color="white"
                className="bg-main w-full h-12 rounded-lg"
              >
                <InstagramIcon className="mr-2" />
                <h1 className="text-white text-sm font-semibold">Instagram</h1>
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.facebook.com/punit.pure.calisthenics/"
                color="white"
                className="bg-main w-full h-12 rounded-lg"
              >
                <FacebookIcon className="mr-2" />
                <h1 className="text-white text-sm font-semibold">Facebook</h1>
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.youtube.com/channel/UCTa4HXD-6C2j4ROP1Vq0B3g"
                color="white"
                className="bg-main w-full h-12 rounded-lg"
              >
                <YouTubeIcon className="mr-2" />
                <h1 className="text-white text-sm font-semibold">Youtube</h1>
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/company/pure-calisthenics/"
                color="white"
                className="bg-main w-full h-12 rounded-lg"
              >
                <LinkedInIcon className="mr-2" />
                <h1 className="text-white text-sm font-semibold">LinkedIn</h1>
              </IconButton>
            </div>
          </div>
        </div>
        <Curve />
      </motion.div>
    </ThemeProvider>
  );
};

export default Menu;
