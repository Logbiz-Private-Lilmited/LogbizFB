import React from "react";
import Stats from "../components/HeroSection/Stats";
import ServiceBtn from "../components/HeroSection/ServiceBtn";
import Hero1 from "../assets/HeroSection/Hero1.jpeg";
import infoDetails from "../components/Homeview/InfoDetails";
import InfoCards from "../components/Homeview/InfoCards";
import BoxesComponent from "../components/Homeview/ServiceBoxes";
import BoxData from "../components/Homeview/BoxData";
import LogbizStat from "../assets/HeroSection/LogbizStats.svg";
import AnimatedStats from "../components/HeroSection/AnimatedStats";

export const HomeView = () => {
  return (
    <div className=" mx-auto">
      <section className="flex flex-col h-fit justify-between w-full mb-10 bg-[#D9D9D9] rounded-xl p-4 gap-8 md:gap-16">
        <AnimatedStats />
        <Stats />
      </section>
      <InfoCards info={infoDetails} />
      <BoxesComponent info={BoxData} />
    </div>
  );
};
