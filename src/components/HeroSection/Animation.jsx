import React from "react";
import "../../../src/index.css";
import AnimationLogo from "../../../public/AnimationLogo.svg";

const Animation = () => {
  return (
    <div class="circle-container">
    <div class="rotate-circle"></div>
    <div class="rotate-circle2"></div>
    <img src={AnimationLogo} alt="Center Image" class="center-image" />
  </div>
  
  );
};

export default Animation;
