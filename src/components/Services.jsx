import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import HistoryIcon from "@mui/icons-material/History";
import WorkIcon from "@mui/icons-material/Work";
import localFont from "next/font/local";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          className="w-box md:w-[30vw] xl:w-96 flex flex-col gap-2 justify-start items-start rounded-xl p-5 bg-secondary mx-2"
        >
          <div className="w-full h-36 rounded-xl bg-white" />
          <div className="mt-2 flex flex-col gap-2">
            <FitnessCenterIcon className="h-5 w-5 text-white" />
            <div
              className={`${aspekta.className} font-bold text-white text-xl`}
            >
              Kids Fitness Group Batch
            </div>
            <div
              className={`${aspekta.className} font-normal text-white text-base`}
            >
              4:00 PM - 5:00 PM (Ages 7-12), Monday to Saturday.
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          className="w-box md:w-[30vw] xl:w-96 flex flex-col gap-2 justify-start items-start rounded-xl p-5 bg-secondary mx-2 mt-5 md:mt-0"
        >
          <div className="w-full h-36 rounded-xl bg-white" />
          <div className="mt-2 flex flex-col gap-2">
            <PersonIcon className="h-5 w-5 text-white" />
            <div
              className={`${aspekta.className} font-bold text-white text-xl`}
            >
              One to One Personal Training
            </div>
            <div
              className={`${aspekta.className} font-normal text-white text-base`}
            >
              For ages 13 and above.
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          className="w-box md:w-[30vw] xl:w-96 flex flex-col gap-2 justify-start items-start rounded-xl p-5 bg-secondary mx-2 mt-5 md:mt-0"
        >
          <div className="w-full h-36 rounded-xl bg-white" />
          <div className="mt-2 flex flex-col gap-2">
            <PhoneAndroidIcon className="h-5 w-5 text-white" />
            <div
              className={`${aspekta.className} font-bold text-white text-xl`}
            >
              Online Personal Training
            </div>
            <div
              className={`${aspekta.className} font-normal text-white text-base`}
            >
              (NRI Indians, Foreign Countries) Live via WhatsApp Call.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          className="w-box md:w-[30vw] xl:w-96 flex flex-col gap-2 justify-start items-start rounded-xl p-5 bg-secondary mx-2 mt-5"
        >
          <div className="w-full h-36 rounded-xl bg-white" />
          <div className="mt-2 flex flex-col gap-2">
            <BusinessIcon className="h-5 w-5 text-white" />
            <div
              className={`${aspekta.className} font-bold text-white text-xl`}
            >
              Corporate Workshops & Fitness Sessions
            </div>
            <div
              className={`${aspekta.className} font-normal text-white text-base`}
            >
              Flexibility Training, Experiencing Calisthenics.
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          className="w-box md:w-[62vw] xl:w-[784px] flex flex-col gap-2 justify-start items-start rounded-xl p-5 bg-secondary mx-2 mt-5"
        >
          <div className="w-full h-36 rounded-xl bg-white" />
          <div className="mt-2 flex flex-1 md:justify-center flex-col gap-2">
            <SchoolIcon className="h-5 w-5 text-white" />
            <div
              className={`${aspekta.className} font-bold text-white text-xl`}
            >
              Educational Seminar: Effects of Different Fitness Forms
            </div>
            <div
              className={`${aspekta.className} font-normal text-white text-base`}
            >
              Yoga vs Gym vs Zumba vs Sports vs Calisthenics vs Walking.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          className="w-box md:w-[62vw] xl:w-[784px] flex flex-col gap-2 justify-start items-start rounded-xl p-5 bg-secondary mx-2 mt-5"
        >
          <div className="w-full h-36 rounded-xl bg-white" />
          <div className="mt-2 flex flex-1 md:justify-center flex-col gap-2">
            <WorkIcon className="h-5 w-5 text-white" />
            <div
              className={`${aspekta.className} font-bold text-white text-xl`}
            >
              Educational Seminar: Calisthenics as a Full-Time Profession
            </div>
            <div
              className={`${aspekta.className} font-normal text-white text-base`}
            >
              Become an Athlete, Become a Coach, Become an Influencer.
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          className="w-box md:w-[30vw] xl:w-96 flex flex-col gap-2 justify-start items-start rounded-xl p-5 bg-secondary mx-2 mt-5"
        >
          <div className="w-full h-36 rounded-xl bg-white" />
          <div className="mt-2 flex flex-col gap-2">
            <HistoryIcon className="h-5 w-5 text-white" />
            <div
              className={`${aspekta.className} font-bold text-white text-xl`}
            >
              Educational Seminar: Introduction to Calisthenics
            </div>
            <div
              className={`${aspekta.className} font-normal text-white text-base`}
            >
              History, Present, and Future of Calisthenics.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
