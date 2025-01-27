"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import localFont from "next/font/local";

const ppeditorial = localFont({
  src: "../fonts/ppeditorialold-italic.otf",
});

const SwipeCards = () => {
  return (
    <div className="static md:absolute w-full h-fit md:h-screen flex items-center justify-end md:items-end">
      <div className="w-full md:w-96 h-96 md:mr-10 md:mb-5 xl:mb-14 xl:mr-20 flex justify-center items-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-80 h-80 xl:w-96 xl:h-96 rounded-full"
        >
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main">
            <div
              className={`${ppeditorial.className} w-fit text-4xl xl:text-5xl`}
            >
              Self Confidence
            </div>
            <h1 className="uppercase">⟵ Swipe</h1>
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main1">
            <div
              className={`${ppeditorial.className} w-fit text-4xl xl:text-5xl`}
            >
              Strength
            </div>
            <h1 className="uppercase">⟵ Swipe ⟶</h1>
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main2">
            <div
              className={`${ppeditorial.className} w-fit text-4xl xl:text-5xl`}
            >
              Clarity
            </div>
            <h1 className="uppercase">Swipe ⟶</h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwipeCards;
