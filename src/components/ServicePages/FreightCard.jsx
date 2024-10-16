import React from "react";
import { Link } from "react-router-dom";

export default function FreightCard(props) {
  return (
    <Link
      to={`/hireAFreight/${props.Name.toLowerCase()}`}
      className="flex flex-wrap-reverse lg:flex-nowrap gap-10 p-6 border-2 border-black rounded-lg w-[1000px]"
    >
      <div className="flex flex-col gap-3">
        <div className="text-lg">{props.Description}</div>
      </div>
      <img
        src={props.Image}
        alt=""
        className="w-[400px] h-[250px] rounded-lg"
      />
    </Link>
  );
}
