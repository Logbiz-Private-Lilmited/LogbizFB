import React, { useEffect } from "react";
import ServiceNavbar from "./ServiceNavbar";
import Dropdown from "./Dropdown";
import PLImg1 from "/src/assets/ServicePages/PartLoadImg1.png";
import PLImg2 from "/src/assets/ServicePages/PartLoadImg2.png";
import PLImg3 from "/src/assets/ServicePages/PartLoadImg3.png";
import BackButton from "../BackButtonModule/BackButton";

const PLImgs = [PLImg1, PLImg2, PLImg3];

export default function DistributionPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const distdata = [
    {
      name: "Messan Logistics",
      service: "3PL Service",
      network: "Service Netowrk",
      rating: 5,
      info: "www.google.com",
      select: "false",
    },
  ];

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="text-yellow-500">
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <div className="flex max-[435px]:flex-col justify-between mb-6">
        <div className=" inline-flex gap-3">
          <BackButton />
          <h1 className="max-[435px]:text-xl font-bold">
            Available {props.Name} Services
          </h1>
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
      <div className="flex justify-center items-center mb-4">
        <div className="overflow-x-auto ">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="bg-black text-white text-lg md:text-xl lg:text-2xl p-2 md:p-3 rounded-l-full max-[435px]:rounded-l-2xl">
                  Name
                </th>
                <th className="bg-black text-white text-lg md:text-xl lg:text-2xl p-2 md:p-3">
                  Service
                </th>
                <th className="bg-black text-white text-lg md:text-xl lg:text-2xl p-2 md:p-3">
                  Service Network
                </th>
                <th className="bg-black text-white text-lg md:text-xl lg:text-2xl p-2 md:p-3">
                  Rating
                </th>
                <th className="bg-black text-white text-lg md:text-xl lg:text-2xl p-2 md:p-3">
                  More Info
                </th>
                <th className="bg-black text-white text-lg md:text-xl lg:text-2xl p-2 pr-5 rounded-r-full max-[435px]:rounded-r-2xl">
                  Select
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {distdata.map((item, idx) => (
                <tr key={idx} className="bg-[#d9d9d960]">
                  <td className="p-2 md:p-3 text-center text-sm md:text-lg lg:text-xl">
                    {item.name}
                  </td>
                  <td className="p-2 md:p-3 text-center text-sm md:text-lg lg:text-xl">
                    {item.service}
                  </td>
                  <td className="p-2 md:p-3 text-center text-sm md:text-lg lg:text-xl">
                    {item.network}
                  </td>
                  <td className="p-2 md:p-3 text-center text-sm md:text-lg lg:text-xl">
                    {renderStars(item.rating)}
                  </td>
                  <td className="p-2 md:p-3 text-center text-sm md:text-lg lg:text-xl">
                    <a
                      href={`http://${item.info}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      View More
                    </a>
                  </td>
                  <td className="p-2 md:p-3 text-center text-sm md:text-lg lg:text-xl">
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        id={`checkbox-${idx}`}
                        checked={item.select === "true"}
                        readOnly
                      />
                      <label htmlFor={`checkbox-${idx}`}></label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ServiceNavbar Data={props.Data} />
      <div className="flex justify-center items-center mt-8 mb-4">
        <div className="flex flex-col bg-black rounded-3xl p-4 w-fit justify-center items-center">
          <img src="/src/assets/ServicePages/ULC.png" alt="" />
          <p className="bg-[#ff6600] text-white p-3 w-fit text-center rounded-lg">
            ULC Hire
          </p>
        </div>
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
          <div className="font-semibold mt-2">
            Book cube space shipments on pallets for efficient transport
          </div>
        </div>
      </div>
    </div>
  );
}
