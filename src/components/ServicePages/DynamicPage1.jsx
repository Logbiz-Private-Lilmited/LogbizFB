import React, { useEffect,useState } from "react";
import ServiceCard from "./ServiceCard";
import Dropdown from "./Dropdown";
import PLImg1 from "/src/assets/ServicePages/PartLoadImg1.png";
import PLImg2 from "/src/assets/ServicePages/PartLoadImg2.png";
import PLImg3 from "/src/assets/ServicePages/PartLoadImg3.png";
import BackButton from "../BackButtonModule/BackButton";

const PLImgs = [PLImg1, PLImg2, PLImg3];

export default function TestPage({ data, name }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const details = ["On Demand","Advanced Booking"]

  const [active, isActive] = useState(0);

  function handleClick(item) {
    isActive(item);
  }

  return (
    <div className="flex flex-col gap-5">
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
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap gap-8 max-[435px]:gap-4 border-2 rounded-full max-[435px]:rounded-md max-[780px]:rounded-lg p-4 border-black w-fit">
          {details.map((detail, index) => {
            return (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`${active === index ? "bg-[#ff6600] text-white" : "bg-white"
                  } text-wrap font-bold text-center text-lg max-[435px]:text-base hover:bg-[#ff6600] hover:text-white p-3 rounded-full cursor-pointer`}
              >
                {detail}
              </button>

            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 px-[50px]">
        {
          data.map((detail,index) => {
            if(active === 0 & detail.on_demand === true){
              return(
              <ServiceCard
                key={index}
                Img={detail.img}
                Name={detail.companyName}
                Location={detail.location}
                Model={detail.vehicle_model}
                Capacity={detail.capacity}
                BodyType={detail.body_type}
                linkTo={detail.companyName}
              />
            )
            }
          })
        }
        {
          data.map((detail,index) => {
            if(active === 1 & detail.on_demand === false){
              return(
              <ServiceCard
                key={index}
                Img={detail.img}
                Name={detail.companyName}
                Location={detail.location}
                Model={detail.vehicle_model}
                Capacity={detail.capacity}
                BodyType={detail.body_type}
                linkTo={detail.companyName}
              />
            )
            }
          })
        }
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
  );
}
