import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ServiceNavbar(props) {
  const details = [...props.Data];

  const [active, isActive] = useState(1);

  const desc = [...details[active - 1].description];

  function handleClick(item) {
    isActive(item);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-wrap gap-8 max-[435px]:gap-4 border-2 rounded-full max-[435px]:rounded-md max-[780px]:rounded-lg p-4 border-black w-fit">
        {details.map((detail, index) => {
          return (
            <button
              key={detail.index}
              onClick={() => handleClick(detail.index)}
              className={`${active === detail.index ? "bg-[#ff6600] text-white" : "bg-white"
                } text-wrap font-bold text-center text-lg max-[435px]:text-base hover:bg-[#ff6600] hover:text-white p-3 rounded-full cursor-pointer`}
            >
              {detail.name}
            </button>

          );
        })}
      </div>
      <div className="bg-[#eae6e6] w-[700px] max-[435px]:w-fit mt-4 p-5 rounded-xl">
        {desc.map((line, index) => {
          return <li key={index} className="max-[435px]:text-base text-wrap">{line}</li>;
        })}
      </div>
      <Link
        className="text-white text-lg  px-4 py-2 mt-3 rounded-lg bg-[#ff6600]"
        to={props.linkTo}
      >
        Quote
      </Link>
    </div>
  );
}
