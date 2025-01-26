"use client";
import React, { useState, useRef } from "react";
import gsap from "gsap";

const EnlargeBubbles = ({ bubbles }) => {
  const [activeBubble, setActiveBubble] = useState(null);
  const bubbleRefs = useRef([]);

  const handleBubbleClick = (index) => {
    if (activeBubble !== null && activeBubble !== index) {
      // Shrink the previously active bubble
      gsap.to(bubbleRefs.current[activeBubble], {
        width: "120px",
        height: "120px",
        duration: 1,
      });
    }

    // Enlarge the clicked bubble and fade in "Hi"
    gsap.to(bubbleRefs.current[index], {
      width: "350px",
      height: "350px",
      duration: 1,
    });

    setActiveBubble(index);
  };

  return (
    <div className="absolute w-full h-screen overflow-hidden invisible xl:visible">
      {bubbles.map((bubble, index) => (
        <div
          key={bubble.id}
          className="absolute flex justify-center items-center rounded-full"
          style={{
            width: "350px",
            height: "350px",
            top: bubble.top,
            right: bubble.right,
          }}
        >
          <div
            className="bg-main rounded-full cursor-pointer flex justify-center items-center text-3xl"
            style={{
              width: "120px",
              height: "120px",
            }}
            ref={(el) => (bubbleRefs.current[index] = el)}
            onClick={() => handleBubbleClick(index)}
          >
            {activeBubble == index
              ? index === 0
                ? "Self Confidence"
                : index === 1
                ? "Strength"
                : index === 2
                ? "Clarity"
                : "+"
              : "+"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnlargeBubbles;
