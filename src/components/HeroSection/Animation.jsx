import React from "react";
import AnimationLogo from "/AnimationLogo.svg";
import label1 from "/label1.svg";
import label2 from "/label2.svg";
import label3 from "/label3.svg";
import label4 from "/label4.svg";

const Animation = () => {
  return (
    <div className="circle-container">
      <div className="rotate-circle"></div>
      <div className="rotate-circle2 "></div>
      <img
        src={label1}
        alt="label"
        className="label-right md:h-20 h-12 absolute top-12 md:-right-16 -right-8 opacity-0 z-10"
      />
      <img
        src={label2}
        alt="label"
        className="label-right md:h-20 h-12 absolute md:bottom-8 bottom-16 md:-right-16 -right-14 opacity-0 z-10"
      />
      <img
        src={label3}
        alt="label"
        className="label-left md:h-20 h-12 absolute bottom-0 md:-left-28 -left-10 opacity-0 z-10"
      />
      <img
        src={label4}
        alt="label"
        className="label-left md:h-5 h-3 absolute md:top-36 top-24 md:-left-40 -left-10 opacity-0 z-10"
      />

      <img src={AnimationLogo} alt="Center Image" className="center-image" />
    </div>
  );
};

export default Animation;
