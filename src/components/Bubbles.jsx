"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Bubbles = ({
  imageSrc,
  x,
  y,
  bubbleSize,
  imageSize,
  zIndex = 1,
  delay = 0,
  startAsImage = false,
}) => {
  const bubbleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = imageSrc;

    const timeline = gsap.timeline({ repeat: -1 });

    if (startAsImage) {
      timeline
        .to(imageRef.current, {
          duration: 0.5,
          scale: 1,
          transformOrigin: "center",
          opacity: 1,
          onStart: () => {
            imageRef.current.classList.remove("hidden");
          },
        })
        .to(imageRef.current, {
          duration: 2,
          x: "random(-15vw, 15vw)",
          y: "random(-15vh, 15vh)",
          repeat: 1,
          yoyo: true,
          delay,
        })
        .to(imageRef.current, {
          duration: 0.5,
          scale: 0,
          transformOrigin: "center",
          opacity: 0,
          onComplete: () => {
            imageRef.current.classList.add("hidden");
          },
        })
        .to(bubbleRef.current, {
          duration: 0.5,
          scale: 1,
          transformOrigin: "center",
          opacity: 1,
          onStart: () => {
            bubbleRef.current.classList.remove("hidden");
          },
        })
        .to(bubbleRef.current, {
          duration: 2,
          x: "random(-15vw, 15vw)",
          y: "random(-15vh, 15vh)",
          repeat: 1,
          yoyo: true,
        })
        .to(bubbleRef.current, {
          duration: 0.5,
          scale: 0,
          transformOrigin: "center",
          opacity: 0,
          onComplete: () => {
            bubbleRef.current.classList.add("hidden");
          },
        });
    } else {
      timeline
        .to(bubbleRef.current, {
          duration: 0.5,
          scale: 1,
          transformOrigin: "center",
          opacity: 1,
          onStart: () => {
            bubbleRef.current.classList.remove("hidden");
          },
        })
        .to(bubbleRef.current, {
          duration: 3,
          x: "random(-15vw, 15vw)",
          y: "random(-15vh, 15vh)",
          repeat: 1,
          yoyo: true,
          delay,
        })
        .to(bubbleRef.current, {
          duration: 0.5,
          scale: 0,
          transformOrigin: "center",
          opacity: 0,
          onComplete: () => {
            bubbleRef.current.classList.add("hidden");
          },
        })
        .to(imageRef.current, {
          duration: 0.5,
          scale: 1,
          transformOrigin: "center",
          opacity: 1,
          onStart: () => {
            imageRef.current.classList.remove("hidden");
          },
        })
        .to(imageRef.current, {
          duration: 3,
          x: "random(-15vw, 15vw)",
          y: "random(-15vh, 15vh)",
          repeat: 1,
          yoyo: true,
        })
        .to(imageRef.current, {
          duration: 0.5,
          scale: 0,
          transformOrigin: "center",
          opacity: 0,
          onComplete: () => {
            imageRef.current.classList.add("hidden");
          },
        });
    }
  }, [delay, startAsImage]);

  return (
    <div
      className="absolute w-full h-svh flex justify-center items-center overflow-hidden rounded-full"
      style={{ zIndex, left: x, top: y }}
    >
      <div
        className="bg-white rounded-full absolute opacity-0 scale-0 hidden"
        style={{
          width: bubbleSize,
          height: bubbleSize,
        }}
        ref={bubbleRef}
      />
      <img
        src={imageSrc}
        alt="popup"
        className="rounded-full absolute opacity-0 scale-0 hidden"
        style={{ width: imageSize, height: imageSize }}
        ref={imageRef}
      />
    </div>
  );
};

export default Bubbles;
