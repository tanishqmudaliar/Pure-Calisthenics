import { motion } from "framer-motion";
import { slide } from "./anim.js";
import localFont from "next/font/local";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const Data = ({ data }) => {
  const { title, index } = data;

  return (
    <motion.div
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <h1
        className={`${aspekta.className} text-white font-light text-5xl flex`}
      >
        {title}
      </h1>
    </motion.div>
  );
};
export default Data;
