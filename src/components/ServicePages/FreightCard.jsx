import React from "react";
import { Link } from "react-router-dom";

export default function FreightCard(props) {
  return (
    <Link
      to={`/hireAFreight/${props.Name.toLowerCase()}`}
      className="flex flex-wrap-reverse lg:flex-nowrap gap-10 p-6 border-2 border-black rounded-lg"
    >
      <div className="flex flex-col gap-3">
        <div className="text-3xl font-bold">
          {props.Name}
          <span> Freight</span>
        </div>
        <div className="text-xl">{props.Description}</div>
      </div>
      <img
        src={props.Image}
        alt=""
        className="w-[500px] h-[350px] rounded-lg"
      />
    </Link>
  );
}
