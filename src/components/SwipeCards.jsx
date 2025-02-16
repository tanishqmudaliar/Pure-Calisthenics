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
          loop={true}
          className="w-swipecards h-swipecards xl:w-96 xl:h-96 max-w-96 max-h-96"
        >
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main">
            <div
              className={`${ppeditorial.className} w-3/4 text-center text-4xl`}
            >
              Self Confidence
            </div>
            <h1 className="uppercase">⟵ Swipe ⟶</h1>
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main">
            <div
              className={`${ppeditorial.className} w-3/4 text-center text-4xl`}
            >
              Positive Self Image
            </div>
            <h1 className="uppercase">⟵ Swipe ⟶</h1>
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main">
            <div
              className={`${ppeditorial.className} w-3/4 text-center text-4xl`}
            >
              Better Personality
            </div>
            <h1 className="uppercase">⟵ Swipe ⟶</h1>
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main">
            <div
              className={`${ppeditorial.className} w-3/4 text-center text-4xl`}
            >
              Strong Mindset
            </div>
            <h1 className="uppercase">⟵ Swipe ⟶</h1>
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main">
            <div
              className={`${ppeditorial.className} w-3/4 text-center text-4xl`}
            >
              Raw Strength
            </div>
            <h1 className="uppercase">⟵ Swipe ⟶</h1>
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main">
            <div
              className={`${ppeditorial.className} w-3/4 text-center text-4xl`}
            >
              Sports Performance
            </div>
            <h1 className="uppercase">⟵ Swipe ⟶</h1>
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main">
            <div
              className={`${ppeditorial.className} w-3/4 text-center text-4xl`}
            >
              Social Confidence
            </div>
            <h1 className="uppercase">⟵ Swipe ⟶</h1>
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main">
            <div
              className={`${ppeditorial.className} w-3/4 text-center text-4xl`}
            >
              Better First Impressions
            </div>
            <h1 className="uppercase">⟵ Swipe ⟶</h1>
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main">
            <div
              className={`${ppeditorial.className} w-3/4 text-center text-4xl`}
            >
              Life Long Longetivity
            </div>
            <h1 className="uppercase">⟵ Swipe ⟶</h1>
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main">
            <div
              className={`${ppeditorial.className} w-3/4 text-center text-4xl`}
            >
              Attractive Physique
            </div>
            <h1 className="uppercase">⟵ Swipe ⟶</h1>
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center place-content-center rounded-full text-white bg-main">
            <div
              className={`${ppeditorial.className} w-3/4 text-center text-4xl`}
            >
              Control Over Bodyweight
            </div>
            <h1 className="uppercase">⟵ Swipe ⟶</h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwipeCards;
