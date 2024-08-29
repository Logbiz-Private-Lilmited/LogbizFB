import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import Dropdown from "./Dropdown";
import PLImg1 from "/src/assets/ServicePages/PartLoadImg1.png";
import PLImg2 from "/src/assets/ServicePages/PartLoadImg2.png";
import PLImg3 from "/src/assets/ServicePages/PartLoadImg3.png";
import BackButton from "../BackButtonModule/BackButton";

const PLImgs = [PLImg1, PLImg2, PLImg3];

export default function DynamicPage1({ data, name }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="flex max-[435px]:flex-col justify-between">
        <div className=" inline-flex gap-3 items-center">
          <BackButton />
          <div className="md:text-2xl text-xl font-bold">
            Available {name} Services
          </div>
        </div>
        <div className="inline-flex flex-row gap-3">
          <div>
            <input
              type="text"
              placeholder="Serach"
              className="border-2 border-[E9E7E2] p-1 rounded-md max-[435px]:w-[105px]"
            />
          </div>
          <p className="font-semibold block text-nowrap p-1">Sort by:</p>
          <Dropdown />
        </div>
      </div>
      <div className="p-4">
        <div>
          <p className="text-2xl font-medium mb-6">On Demand</p>
          <div className="flex flex-wrap justify-stretch px-4 gap-8">
            {data.map((detail, index) => {
              console.log("deatil:", detail);
              if (detail.on_demand === true) {
                return (
                  <ServiceCard
                    key={detail.name}
                    Img={detail.img}
                    Name={detail.companyName}
                    Location={detail.location}
                    Model={detail.model}
                    Capacity={detail.capacity}
                    BodyType={detail.body_type}
                    linkTo={detail.slug}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-2xl font-medium mb-6 ">Advanced Booking</p>
          <div className="flex flex-wrap px-4 gap-8">
            {data.map((detail, index) => {
              console.log("deatil:", detail);
              if (detail.on_demand === false) {
                return (
                  <ServiceCard
                    key={detail.name}
                    Img={detail.img}
                    Name={detail.companyName}
                    Location={detail.location}
                    Model={detail.model}
                    Capacity={detail.capacity}
                    BodyType={detail.body_type}
                    linkTo={detail.slug}
                  />
                );
              }
            })}
          </div>

          <div className=" flex justify-center items-center mt-4">
            <p className="bg-[#f2f2f2] w-fit p-2 rounded-md font-semibold text-center">
              Did not find vehicle for your load destination?
            </p>
            <img
              src="/src/assets/ServicePages/Question.png"
              alt=""
              className=" w-8 h-8 p-1 mt-1 inline-block"
            />
          </div>
          <div className="flex justify-center items-center mt-3">
            <div className="border-2 border-black rounded-lg px-10 py-4 flex flex-col justify-center items-center w-max">
              <div className=" flex justify-center items-center gap-2">
                <p className="font-semibold text-center ">
                  If you want Part Load Booking click here !
                </p>
                <img
                  src="/src/assets/ServicePages/Question.png"
                  alt=""
                  className=" w-5 h-5 inline-block"
                />
              </div>
              <div className="mt-10">
                {PLImgs.map((image, index) => {
                  return (
                    <img
                      src={image}
                      alt=""
                      key={index}
                      className=" inline-block w-[120px] max-[435px]:w-[70px]"
                    />
                  );
                })}
              </div>
              <div className="font-semibold mt-2 max-[435px]:text-[20px] ">
                <p>
                  Book cube space shipments on pallets for efficient transport
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
