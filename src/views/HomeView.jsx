import React from "react";
import { Link } from "react-router-dom";
import Stats from "../components/HeroSection/Stats";
import infoDetails from "../components/Homeview/InfoDetails";
import InfoCards from "../components/Homeview/InfoCards";
import AnimatedStats from "../components/HeroSection/AnimatedStats";
import VideoPlayback from "../components/Homeview/VideoPlayback";
import { BiArrowFromRight, BiLeftArrow } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import RegBoxes from "../components/Homeview/ServiceBoxes/RegBox";
import ServiceBoxes from "../components/Homeview/ServiceBoxes/ServiceBox";
import LogoWithLines from "../components/Homeview/LogoLine";

export const HomeView = () => {
  return (
    <div className="mx-auto">
      <section className="flex flex-col h-fit justify-between w-full mb-10 bg-[#D9D9D9] rounded-xl p-4 gap-8 md:gap-16">
        <AnimatedStats />
        <Stats />
      </section>
      <InfoCards info={infoDetails} />
      <LogoWithLines />
      <ServiceBoxes />
      <VideoPlayback />
      <RegBoxes />
      <div className="w-full flex items-center justify-center text-center">
        <button className="flex md:p-8 bg-[#f2f2f2] md:text-2xl text-lg items-center md:gap-4 gap-2 p-4">
          Get an advantage with Logbiz Plans <GoArrowRight size={30} />
          <Link></Link>
        </button>
      </div>
      <div className="subscribe-button w-fit text-sm font-bold p-3 md:mx-4 bg-black text-white rounded-md my-2">
        <Link>
          {" "}
          Subscribe to our{" "}
          <span className="text-customOrange">News Letters</span> here
        </Link>
      </div>
    </div>
  );
};
