import React from "react";
import localFont from "next/font/local";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const SectionOne = () => {
  return (
    <div className="w-full h-fit min-h-svh bg-main flex flex-col justify-center items-center pt-20 sm:pb-10 md:pb-0">
      <div className="mx-7 flex flex-col justify-center items-center">
        <h1
          className={`${aspekta.className} w-full text-start text-base md:text-2xl font-light text-white`}
        >
          We Do Calisthenics Personal Training
        </h1>
        <h1
          className={`${aspekta.className} w-full text-center text-4xl md:text-5xl xl:text-7xl font-light text-secondary`}
        >
          Structured. System Based.{" "}
          <span className={ppeditorialul.className}>Trusted.</span>
        </h1>
        <h1
          className={`${aspekta.className} w-full text-end text-base md:text-2xl font-light text-white`}
        >
          We Represent Self Improvement
        </h1>
      </div>
      <h1
        className={`${aspekta.className} w-4/5 text-center text-xl xl:text-2xl font-light text-white mt-5 mb-7 xl:mb-10`}
      >
        Calisthenics helps you achieve fat loss, build raw strength, enhance
        core stability, and boost long-lasting athletic performance.
      </h1>
      <hr className="w-2/5 text-white" />
      <h1
        className={`${aspekta.className} w-3/4 text-center text-2xl md:text-3xl font-light text-white my-4`}
      >
        Want to know more call us
      </h1>
      <button
        className={`${aspekta.className} bg-white w-fit h-fit p-4 text-lg rounded-full font-semibold text-main cursor-pointer hover:text-secondary`}
      >
        Book a Demo Session
      </button>
    </div>
  );
};

export default SectionOne;
