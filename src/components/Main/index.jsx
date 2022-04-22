import React from "react";
import letterB from "../../assets/img/B.svg";
import background from "../../assets/img/Background.png";
import Description from "./Description";
import Mockup from "./Mockup";
import { motion } from "framer-motion";


import "./style.scss";

const Main = () => {
  return (
    <motion.main
      initial="initial"
      animate="in"
      variants={variants}
      transition={pageTransition}
      className="main"
    >
      <span>
        <img src={letterB} alt="Lettre b" className="letter" />
      </span>
      <span>
        <img
          src={background}
          alt="Background"
          className="background"
        />
      </span>
      <div className="main__container">
        <Mockup />
        <Description />
      </div>
    </motion.main>
  );
};

// Motion
const variants = {
  initial: {
    opacity: 0,
    scale: 1,
  },
  in: {
    opacity: 1,
    x: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 7.5,
};

export default Main;
