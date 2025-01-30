import { motion } from "framer-motion";
import { slide, scale } from "./anim.js";

const Data = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-2 h-2 bg-white rounded-full absolute -left-7"
      ></motion.div>
      <h1>{title}</h1>
    </motion.div>
  );
};
export default Data;
