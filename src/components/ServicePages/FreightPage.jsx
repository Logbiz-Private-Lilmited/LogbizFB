import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import FreightCard from "./FreightCard";
import BackButton from "../BackButtonModule/BackButton";
import { useNavigate } from "react-router-dom"; // For navigation

export default function FreightPage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const details = ["Air", "Sea", "Rail"]; // Match types in FreightDetails

  const freightDetails = [...props.Data]; // Assuming props.Data is FreightDetails array

  const [active, setActive] = useState(0); // Default active index

  function handleClick(item) {
    setActive(item); // Update the active index
  }

  // Function to handle clicking on a FreightCard
  const handleFreightCardClick = (type) => {
    navigate("/hireAFreight", { state: { freightType: type } }); // Navigate to hireAFreight with state
  };

  // Filter freight details based on the active selection (Air, Sea, Rail)
  const filteredFreights = freightDetails.filter(
    (item) => item.type === details[active]
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-col md:flex-row inline-flex gap-3">
          <BackButton />
          <span className="md:text-3xl text-xl font-bold">
            Available Freight Forwarding Services
          </span>
        </div>
        <div className="flex flex-row flex-wrap gap-3 min-w-fit">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-[E9E7E2] p-1 rounded-md"
            />
          </div>
          <p className="font-semibold block text-nowrap p-1">Sort by:</p>
          <Dropdown />
        </div>
      </div>
      <div className="p-6 w-[96%] mx-auto">
        <h3 className="my-6 font-semibold">
          You can Quote for the following freights:{" "}
        </h3>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap gap-8 max-[435px]:gap-4 border-2 rounded-full max-[435px]:rounded-md max-[780px]:rounded-lg p-4 border-black w-fit">
            {details.map((detail, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`${
                    active === index ? "bg-[#ff6600] text-white" : "bg-white"
                  } text-wrap font-bold text-center text-lg max-[435px]:text-base hover:bg-[#ff6600] hover:text-white p-3 rounded-full cursor-pointer`}
                >
                  {detail} Freight
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center items-center mt-3">
          {filteredFreights.length > 0 ? (
            filteredFreights.map((item, index) => {
              return (
                <FreightCard
                  key={index}
                  Image={item.image}
                  Name={item.type + " Freight"} // Add " Freight" for consistency
                  Description={item.description}
                  onClick={() => handleFreightCardClick(item.type)} // Pass freight type when card is clicked
                />
              );
            })
          ) : (
            <p className="text-center font-semibold">
              No freight services available for {details[active]}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
