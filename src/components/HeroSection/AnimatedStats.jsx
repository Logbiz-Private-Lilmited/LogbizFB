import React from "react";
import AnimationLogo from "../../../public/AnimationLogo.svg";
import Animation from "./Animation";

const AnimatedStats = () => {
  return (
    <div className="md:text-4xl xl:text-6xl font-bold w-full text-3xl">
      <div className="md:w-1/2">
        LogBiz offers single window
        <span className="text-customOrange"> Services</span> &
        <span className="text-customOrange"> Solutions </span> to all your
        logistics needs
      </div>

      <div className="w-full lg:w-1/3 h-fit lg:absolute lg:top-1/2 lg:right-24 transform translate-y-3 lg:-translate-y-1/2">
        <Animation />
      </div>
    </div>
  );
};

export default AnimatedStats;
