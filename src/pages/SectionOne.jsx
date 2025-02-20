import React from "react";
import localFont from "next/font/local";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Phone from "@mui/icons-material/Phone";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorial = localFont({
  src: "../fonts/ppeditorialold-italic.otf",
});

const SectionOne = () => {
  return (
    <div className="w-full h-fit min-h-svh bg-main flex flex-col justify-center items-center pt-20">
      <div className="w-full flex flex-1 flex-col justify-center items-center">
        <div className="mx-5 flex flex-col justify-center items-center">
          <h1
            className={`${aspekta.className} w-full text-center text-xl md:text-2xl xl:text-3xl font-light text-white`}
          >
            We Want You To Feel
          </h1>
          <h1
            className={`${aspekta.className} w-full text-center text-[8.5vw]/[8.5vw] md:text-5xl xl:text-7xl font-normal text-white mb-5 xl:mb-7 mt-1`}
          >
            Strong. Light.{" "}
            <span className={ppeditorial.className}>Energetic.</span>
          </h1>
        </div>
        <h1
          className={`${aspekta.className} mx-5 text-center text-2xl md:text-3xl font-light text-white mb-5 xl:mb-7`}
        >
          We Do Calisthenics Personal Training
        </h1>
        <h1
          className={`${aspekta.className} mx-5 text-center text-2xl md:text-3xl font-light text-white mb-5 xl:mb-7 flex flex-col justify-center items-center`}
        >
          Our Gym Environment is
          <div className="text-start text-lg xl:text-xl grid grid-cols-2 gap-x-4 text-white">
            <li>Supportive</li>
            <li>Acceptive</li>
            <li>Encouraging</li>
            <li>Unbiased</li>
          </div>
        </h1>
        <h1
          className={`${aspekta.className} w-3/4 text-center text-2xl md:text-3xl font-light text-white mb-4`}
        >
          Want to know more?
        </h1>
        <div className="flex justify-center items-center">
          <div className="w-fit h-fit flex m-1 justify-center items-center rounded-lg shadow-[5px_5px_0px_#1e1e1e]">
            <a
              className="flex justify-center items-center relative bg-white w-16 h-16 rounded-lg border-2 border-secondary font-semibold text-lg text-secondary cursor-pointer hover:translate-x-[5px] hover:translate-y-[5px] transition-transform duration-300"
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
    </div>
  );
};

export default SectionOne;
