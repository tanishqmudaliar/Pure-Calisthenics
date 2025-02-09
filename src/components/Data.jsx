import { motion } from "framer-motion";
import { slide } from "./anim.js";

const Data = ({ data }) => {
  const { title, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <h1>• {title}</h1>
    </motion.div>
  );
};
export default Data;
