import React from "react";
import icon from "./linkedin.svg";

const Linkedin = () => (
  <a href={"https://linkedin.com"}>
    <img className="icon" src={icon} alt="LinkedIn logo" />
    <span className="text">&nbsp;LinkedIn</span>
  </a>
);

export default Linkedin;