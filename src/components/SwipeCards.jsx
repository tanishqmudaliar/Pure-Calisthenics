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
    <div className="w-full md:w-4/5 h-fit flex justify-center md:justify-end items-center py-10 md:pb-14 xl:-mt-28">
      <div className="w-max">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-80 h-80 xl:w-96 xl:h-96"
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
