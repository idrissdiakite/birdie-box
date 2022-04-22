import React from "react";
import logo from "../../assets/img/Logo.svg";
import balle from "../../assets/img/Balle.png";
import balle2 from "../../assets/img/Balle2.png";
import { motion } from "framer-motion";

import "./style.scss";

const Header = () => {
  return (
    <motion.header
      initial="initial"
      animate="in"
      variants={variants}
      transition={pageTransition}
      className="header"
    >
      <motion.div
        initial="initial"
        animate="in"
        variants={variants}
        transition={logoTransition}
        className="header__logo"
      >
        <img src={logo} alt="logo" />
      </motion.div>

      <motion.div 
      initial="initial"
        animate="in"
        variants={variants}
        transition={titleTransition}
        className="header__title">
        <h1>
          Un coffret <br /> unique{" "}
          <span>
            <img src={balle} alt="Balle" class="header__title--img" />
          </span>
        </h1>
        <h1>
          pour marquer <br /> le coup !<br />
          <span>
            <img src={balle2} alt="Balle" class="header__title--img" />
          </span>
        </h1>
      </motion.div>
    </motion.header>
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
  duration: 2.5,
};

const logoTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 3.5,
};

const titleTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 4.5,
};

export default Header;
