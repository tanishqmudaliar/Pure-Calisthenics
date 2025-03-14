"use client";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import { Rating } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const testimonials = [
  {
    name: "Devesh Tiwari",
    testimonial:
      "Amazing experience. It’s been 8 months here. I can see the difference in my muscle strength, core strength, physique & posture. I look well toned now and get lot of compliments. I get personal attention here. That has helped me realise my weak areas, which part of my body is stiff and requires more focus. Strength, flexibility, mobility, endurance and agility everything is being taken care of here. Over all feel very good about my body now. Looking forward to continuing calisthenics till advanced level.",
    rating: 5,
    image: "/assets/devesh.jpg",
  },
  {
    name: "Divya Nagaraj",
    testimonial:
      "I had approached Punit with the intention of getting fit, healing my knee injury. It’s been 4 months now since I have joined pure calisthenics. He is knowledgeable and explains you patiently what and why we are doing in such a simple manner that an absolute beginner will easily understand. He has super approachable and answers yours questions. \n \n I have seen improvements in my strength, feel more energetic and lost couple of kilos. Balli and Akshat have been amazing trainers, all the exercises are explained and demonstrated well and they too are really interested in your progression and are open to questions. \n \n Would recommend it 100%!!",
    rating: 5,
    image: "/assets/divya.jpg",
  },
  {
    name: "Rajni Sharma",
    testimonial:
      "Highly recommended Calisthenics training. Very sincere and professional instructor. From nowhere close to headstand, I was able to see my dream coming true of doing headstand independently during my assessment only ( which was free of cost session). Thank you Punit for your genuine and excellent work and keep spreading this knowledge across India. 🤸",
    rating: 5,
    image: "/assets/rajni.jpg",
  },
  {
    name: "Debaleena Acharya",
    testimonial:
      "Joining the calisthenics gym has been the best decision I've made in a long time. I only wish I'd made it sooner! From day one, I've been impressed by the wealth of knowledge available and the dedication of the coaches. Punit Sir has been instrumental in understanding my goals and pushing me to achieve them. His personalized approach ensures that I get the most out of every session. Balli Sir's expertise has been invaluable in helping me grasp the importance of each exercise. The energy in the gym is contagious, vibrant making every workout enjoyable and keeping me motivated to push my limits. Highly recommended!",
    rating: 5,
    image: "/assets/pooja.jpg",
  },
  {
    name: "Khushali Changela",
    testimonial:
      "I’ve been training at this calisthenics gym for three months, and I’m really impressed. The space is well-equipped, and the trainers are fantastic. They take the time to teach proper techniques, provide personalized coaching, and ensure that everyone is progressing at their own pace. \n \n The coaches create a supportive and motivating environment, and there’s a real sense of community among the members. I’ve seen noticeable improvements in my strength and mobility, thanks to their expert guidance. \n \n Overall, it’s a great place to train, and I highly recommend it to anyone serious about calisthenics or just looking to get stronger!",
    rating: 5,
    image: "/assets/khushali.jpg",
  },
  {
    name: "Jaydeep Soni",
    testimonial:
      "The gym is pretty good and helpful. The staff is pretty amicable . Its been a week since I joined and am motivated to continue for many more years . The atmosphere is quite relaxed and the coaches are quite fun.",
    rating: 5,
    image: "/assets/jaydeep.jpg",
  },
];

const SectionFive = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full h-fit bg-secondary flex flex-col justify-center items-center py-20">
      <div className="w-4/5 mx-10 md:mx-10 xl:mx-14">
        <h1
          data-aos="fade-left"
          data-aos-duration="500"
          className={`${aspekta.className} text-4xl md:text-6xl xl:text-7xl font-light text-white`}
        >
          Real results,
          <br />
          Real transfor
          <span className={`${ppeditorialul.className} text-main `}>m</span>
          ations
        </h1>
        <p
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-duration="500"
          className={`${aspekta.className} text-lg md:text-xl font-medium text-white mt-6 md:mt-7 xl:mt-8`}
        >
          What our members have experienced with us:
        </p>
      </div>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 mt-10">
        {testimonials.map((testimonial, index) => (
          <div
            data-aos="zoom-in-up"
            data-aos-duration="500"
            key={index}
            className="w-[95%] h-full rounded-lg p-4 bg-white"
          >
            <Image
              src={testimonial.image}
              width={5712}
              height={4284}
              className="w-full h-fit rounded-lg"
              alt={testimonial.name}
              priority
            />
            <h1 className={`${aspekta.className} text-3xl mt-3`}>
              {testimonial.name}
            </h1>
            <Rating value={testimonial.rating} readOnly className="my-2" />
            {testimonial.testimonial.split(/\n/g).map((line, i) =>
              line.trim() === "" ? (
                <br key={i} />
              ) : (
                <p
                  key={i}
                  className={`${aspekta.className} text-base text-[#333333]`}
                >
                  {line}
                </p>
              )
            )}
          </div>
        ))}
      </div>
      <div id="services-section" />
    </div>
  );
};

export default SectionFive;
