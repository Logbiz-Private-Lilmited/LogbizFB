import React from "react";
import AnimationLogo from "/AnimationLogo.svg";

const Animation = () => {
  return (
    <div className="circle-container">
      <div className="rotate-circle"></div>
      <div className="rotate-circle2"></div>
      <img src={AnimationLogo} alt="Center Image" className="center-image" />
    </div>
  );
};

export default Animation;
