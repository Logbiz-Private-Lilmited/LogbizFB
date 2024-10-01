import React, { useEffect } from "react";
import Dropdown from "./Dropdown";
import FreightCard from "./FreightCard";
import BackButton from "../BackButtonModule/BackButton";
import { useNavigate } from "react-router-dom"; // For navigation

export default function FreightPage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const details = [...props.Data];
  console.log;

  // Function to handle clicking on a FreightCard
  const handleFreightCardClick = (type) => {
    navigate("/hireAFreight", { state: { freightType: type } }); // Navigate to hireAFreight with state
  };

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

        <div className="mx-auto flex flex-col justify-center items-center gap-5">
          {/* Map through details and render FreightCard as a button */}
          {details.map((item, index) => {
            return (
              <FreightCard
                key={index}
                Image={item.image}
                Name={item.type}
                Description={item.description}
                onClick={() => handleFreightCardClick(item.type)} // Pass freight type when card is clicked
                // linkTo={item.linkTo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
