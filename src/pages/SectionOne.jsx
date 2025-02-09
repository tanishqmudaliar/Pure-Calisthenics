import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Phone from "@mui/icons-material/Phone";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const SectionOne = () => {
  return (
    <div className="w-full h-fit min-h-svh bg-main flex flex-col justify-end items-center pt-20">
      <div className="flex flex-1 flex-col justify-center items-center mt-5 md:mt-10">
        <div className="mx-7 flex flex-col justify-center items-center">
          <h1
            className={`${aspekta.className} w-full text-start text-base md:text-2xl font-light text-white`}
          >
            We Want You To Feel
          </h1>
          <h1
            className={`${aspekta.className} w-full text-center text-4xl md:text-5xl xl:text-7xl font-light text-white text-shadow-highlight`}
          >
            Strong. Light.{" "}
            <span className={ppeditorialul.className}>Energetic.</span>
          </h1>
          <h1
            className={`${aspekta.className} w-full text-end text-base md:text-2xl font-light text-white`}
          >
            We Do Calisthenics Personal Training
          </h1>
        </div>
        <h1
          className={`${aspekta.className} w-4/5 text-center text-xl xl:text-2xl font-light text-white my-5 xl:mb-7`}
        >
          Pure Calisthenics community is supportive, acceptive, judgement-free &
          encouraging.
        </h1>
        <h1
          className={`${aspekta.className} w-3/4 text-center text-2xl md:text-3xl font-light text-white mb-4`}
        >
          Want to know more?
        </h1>
        <div className="flex justify-center items-center">
          <div className="w-fit h-fit flex m-1 justify-center items-center rounded-lg shadow-[5px_5px_0px_#1e1e1e]">
            <a
              className={`${aspekta.className} flex justify-center items-center relative bg-white w-16 h-16 rounded-lg border-2 border-secondary font-semibold text-lg text-secondary cursor-pointer hover:translate-x-[5px] hover:translate-y-[5px] transition-transform duration-300`}
              target="_blank"
              href="tel:+919773968119"
            >
              <Phone />
            </a>
          </div>
          <div className="ml-2 w-fit h-fit flex justify-center items-center rounded-lg shadow-[5px_5px_0px_#1e1e1e]">
            <a
              className={`${aspekta.className} flex justify-center items-center relative bg-white w-44 h-16 rounded-lg border-2 border-secondary font-semibold text-lg text-secondary cursor-pointer hover:translate-x-[5px] hover:translate-y-[5px] transition-transform duration-300`}
              href="https://api.whatsapp.com/send?phone=9773968119"
              target="_blank"
            >
              Chat with us <WhatsAppIcon className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      <Image
        className="mt-5 w-full xl:w-11/12 h-auto"
        src="/images/bg.png"
        width={3000}
        height={1350}
        alt="Group Photo"
      />
    </div>
  );
};

export default SectionOne;
