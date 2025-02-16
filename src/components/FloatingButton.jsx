"use client";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React, { useState, useEffect } from "react";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div
        className="fixed bottom-[53px] right-0 rounded-s-full w-fit h-fit flex flex-col justify-end items-end"
        style={{ zIndex: 19 }}
      >
        <a
          className="flex justify-center items-center relative bg-white w-16 h-16 rounded-s-full border-y-2 border-l-2 border-secondary font-semibold text-lg text-secondary cursor-pointer"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=9773968119"
        >
          <WhatsAppIcon />
        </a>
      </div>
    )
  );
};

export default FloatingButton;
