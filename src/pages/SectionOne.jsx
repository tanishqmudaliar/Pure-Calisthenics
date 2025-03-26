import React from "react";
import localFont from "next/font/local";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Phone from "@mui/icons-material/Phone";
import Video from "next-video";
import thumbnail from "/public/images/thumbnail.png";
import landing from "/videos/landing.mp4";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorial = localFont({
  src: "../fonts/ppeditorialold-italic.otf",
});

const SectionOne = () => {
  return (
    <div className="w-full h-fit min-h-svh bg-main flex flex-col xl:flex-row justify-evenly items-center pt-20">
      <div className="xl:hidden">
        <Video
          src={landing}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          poster={thumbnail}
          blurDataURL={thumbnail.blurDataURL}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-1 xl:flex-none flex-col justify-center items-center my-5">
        <div className="flex flex-col justify-center items-center">
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
        <div className="flex flex-col md:flex-row justify-center items-center mb-3 md:mb-0">
          <div className="flex justify-center items-center">
            <div className="w-fit h-fit flex justify-center items-center shadow-[5px_5px_0px_#1e1e1e]">
              <a
                className="flex justify-center items-center bg-white w-16 h-16 border-2 border-secondary cursor-pointer hover:translate-x-[5px] hover:translate-y-[5px] transition-transform duration-300"
                target="_blank"
                href="tel:+919773968119"
              >
                <Phone />
              </a>
            </div>
            <div className="w-fit h-fit flex md:hidden ml-3 justify-center items-center shadow-[5px_5px_0px_#1e1e1e]">
              <a
                className={`${aspekta.className} flex justify-center items-center bg-white w-48 h-16 border-2 border-secondary cursor-pointer font-semibold text-lg text-secondary uppercase hover:translate-x-[5px] hover:translate-y-[5px] transition-transform duration-300`}
                target="_blank"
                href="tel:+919773968119"
              >
                Chat with us <WhatsAppIcon className="ml-2" />
              </a>
            </div>
            <div className="w-fit h-fit hidden md:flex ml-3 justify-center items-center shadow-[5px_5px_0px_#1e1e1e]">
              <a
                className="flex justify-center items-center bg-white w-16 h-16 border-2 border-secondary cursor-pointer hover:translate-x-[5px] hover:translate-y-[5px] transition-transform duration-300"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=9773968119"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
          <div className="w-fit h-fit flex md:ml-3 mt-3 md:mt-0 justify-center items-center shadow-[5px_5px_0px_#1e1e1e]">
            <a
              className={`${aspekta.className} flex justify-center items-center bg-white w-[268px] md:w-fit px-5 h-16 border-2 border-secondary cursor-pointer font-semibold text-lg text-secondary uppercase hover:translate-x-[5px] hover:translate-y-[5px] transition-transform duration-300`}
              href="/#fitness-assesment-form"
            >
              <ContentPasteIcon className="mr-5" />
              Free Fitness Assessment
            </a>
          </div>
        </div>
      </div>
      <div className="w-[40vw] h-auto shadow-[5px_5px_0px_#1e1e1e] hidden xl:flex">
        <Video
          src={landing}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          poster={thumbnail}
          blurDataURL={thumbnail.blurDataURL}
          className="w-[40vw] h-auto bg-secondary object-cover border-2 border-secondary"
        />
      </div>
    </div>
  );
};

export default SectionOne;
