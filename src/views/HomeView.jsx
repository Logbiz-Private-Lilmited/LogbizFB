import React from "react";
import { Link } from "react-router-dom";

import Stats from "../components/HeroSection/Stats";
import infoDetails from "../components/Homeview/InfoDetails";
import InfoCards from "../components/Homeview/InfoCards";
import BoxesComponent from "../components/Homeview/ServiceBoxes";
import BoxData from "../components/Homeview/BoxData";
import AnimatedStats from "../components/HeroSection/AnimatedStats";
import VideoPlayback from "../components/Homeview/VideoPlayback";
import RegisterCarousel from "../components/Homeview/RegisterCarousel";
import { BiArrowFromRight, BiLeftArrow } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";

export const HomeView = () => {
  return (
    <div className="mx-auto">
      <section className="flex flex-col h-fit justify-between w-full mb-10 bg-[#D9D9D9] rounded-xl p-4 gap-8 md:gap-16">
        <AnimatedStats />
        <Stats />
      </section>
      <InfoCards info={infoDetails} />
      <h2 className="text-4xl font-bold flex-1 leading-h2 mb-10 text-center">
        Services Available
      </h2>
      <BoxesComponent info={BoxData} />
      <VideoPlayback />
      <RegisterCarousel />
      <div className="w-full flex items-center justify-center text-center">
        <button className="flex md:p-8 bg-[#f2f2f2] md:text-2xl text-lg items-center md:gap-4 gap-2 p-4">
          Get an advantage with Logbiz Plans <GoArrowRight size={30} />
          <Link></Link>
        </button>
      </div>
    </div>
  );
};
