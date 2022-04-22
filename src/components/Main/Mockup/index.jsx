import React from "react";
import mockup from "../../../assets/img/Birdiebox.png"

import "./style.scss";

const Mockup = () => {
  return (
        <div className="mockup">
          <img src={mockup} alt="Birdie Box" />
        </div>
  );
};

export default Mockup;
