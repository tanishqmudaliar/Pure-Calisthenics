"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Header from "@/components/Header";

const NavBar = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        gsap.to(imageRef.current, { y: -100, duration: 0.5 });
      } else {
        // Scrolling up
        gsap.to(imageRef.current, { y: 0, duration: 0.5 });
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ zIndex: 20 }}
      className="fixed flex top-5 justify-between
     items-center w-11/12"
    >
      <img
        src="/logos/bw-logo.png"
        className="w-40 md:w-52 lg:w-60 h-auto"
        alt="Pure Calisthenics"
        ref={imageRef}
      />
      <Header />
    </div>
  );
};

export default NavBar;
