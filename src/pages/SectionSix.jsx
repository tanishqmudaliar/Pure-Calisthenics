import React from "react";
import localFont from "next/font/local";
import { Rating } from "@mui/material";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const testimonials = [
  {
    name: "Alex Carter",
    testimonial:
      "I've never felt stronger or more in control of my body. Calisthenics changed my life!",
    rating: 5,
    image: "/images/about-1.jpg",
  },
  {
    name: "Jordan Smith",
    testimonial:
      "The trainers push you to achieve things you never thought possible. Amazing experience!",
    rating: 4,
    image: "/images/about-1.jpg",
  },
  {
    name: "Emily Rodriguez",
    testimonial:
      "I lost fat, gained muscle, and feel more confident than ever. Highly recommend!",
    rating: 3,
    image: "/images/about-1.jpg",
  },
  {
    name: "Chris Evans",
    testimonial:
      "Great workouts and supportive coaches. Just wish there were more class timings available.",
    rating: 4,
    image: "/images/about-1.jpg",
  },
  {
    name: "Sophia Lee",
    testimonial:
      "The perfect mix of strength, mobility, and endurance training. My body feels incredible!",
    rating: 5,
    image: "/images/about-1.jpg",
  },
  {
    name: "Daniel Wright",
    testimonial:
      "Started as a beginner, now I can do things I never imagined. Truly life-changing!",
    rating: 4,
    image: "/images/about-1.jpg",
  },
];

const SectionSix = () => {
  return (
    <div className="w-full h-fit bg-secondary flex flex-col justify-center items-center py-20">
      <div className="w-4/5 mx-10 md:mx-10 xl:mx-14">
        <h1
          className={`${aspekta.className} text-5xl md:text-6xl xl:text-7xl font-light text-white`}
        >
          Real Results,
          <br />
          Real Transfor
          <span className={`${ppeditorialul.className} text-main `}>m</span>
          ations
        </h1>
        <p
          className={`${aspekta.className} text-sm md:text-base xl:text-lg font-medium text-slate-200 mt-10`}
        >
          See How Calisthenics Changed Lives and Built Unshakable Strength
        </p>
      </div>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 mt-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-[95%] h-fit rounded-lg p-4 bg-white">
            <img
              src={testimonial.image}
              className="w-full h-fit rounded-lg"
              alt="Name"
            />
            <h1 className={`${aspekta.className} text-2xl mt-3`}>
              {testimonial.name}
            </h1>
            <p className={`${aspekta.className} text-base my-1`}>
              {testimonial.testimonial}
            </p>
            <Rating value={testimonial.rating} readOnly />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionSix;
