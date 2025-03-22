"use client";
import localFont from "next/font/local";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    ochre: {
      main: "#000000",
    },
  },
});

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const Benefits = ({ title, body }) => {
  const bodyRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const bodyElement = bodyRef.current;

    // Initial setup - hide the body content
    gsap.set(bodyElement, {
      height: 0,
      opacity: 0,
      y: -20,
      marginTop: 0,
    });
  }, []);

  const toggleContent = () => {
    const bodyElement = bodyRef.current;
    setIsOpen(!isOpen);

    if (!isOpen) {
      gsap.to(bodyElement, {
        height: "auto",
        opacity: 1,
        y: 0,
        marginTop: 16,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(bodyElement, {
        height: 0,
        opacity: 0,
        y: -20,
        marginTop: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col w-full justify-center items-center p-6 xl:p-12 border-t border-gray-400 last:border-b last:border-gray-400">
        <div className="flex w-full justify-between items-center">
          <h2
            className={`${aspekta.className} text-black text-start text-3xl xl:text-5xl font-normal`}
          >
            {title}
          </h2>
          <IconButton
            onClick={toggleContent}
            className="w-fit h-fit ml-2"
            color="ochre"
          >
            {isOpen ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
        </div>
        <div
          ref={bodyRef}
          className="w-full flex-col justify-center items-center border-t border-gray-400"
        >
          <p className={`${aspekta.className} my-4 text-xl ml-5`}>{body}</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Benefits;
