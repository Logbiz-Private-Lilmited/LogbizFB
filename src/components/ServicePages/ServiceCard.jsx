import React from "react";
import Location from "/src/assets/ServicePages/location.png";
import Point from "/src/assets/ServicePages/point.png";
import { Link } from "react-router-dom";
export default function ServiceCard(props) {
  return (
    <Link to={props.linkTo}>
      <div className="border border-black rounded-lg h-fit w-fit p-2 pr-[15px] flex gap-4 items-center">
        <img
          src={props.Img}
          alt=""
          className="w-[190px] h-[190px] max-[435px]:w-[130px] max-[435px]:h-[150px] rounded-lg"
        />
        <div className="flex flex-col max-[435px]:gap-0">
          <p className="text-2xl max-[435px]:text-xl font-medium">
            {props.Name}
          </p>
          <div className="flex gap-2 max-[435px]:mt-0">
            <img src={Location} alt="" className="h-5" />
            <p className="text-[18px] max-[435px]:text-[13px]">
              {props.Location}
            </p>
          </div>
          <div className="flex gap-2">
            <img
              src={Point}
              className="w-[20px] h-[20px] max-[435px]:h-4 max-[435px]:w-4"
            />
            <p className="text-[18px] max-[435px]:text-[13px]">{props.Model}</p>
          </div>
          <div className="flex gap-2">
            <img
              src={Point}
              alt=""
              className="w-[20px] h-[20px] max-[435px]:h-4 max-[435px]:w-4"
            />
            <p className="text-[18px] max-[435px]:text-[13px]">
              Capacity <span>{props.Capacity}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <img
              src={Point}
              alt=""
              className="w-[20px] h-[20px] max-[435px]:h-4 max-[435px]:w-4"
            />
            <p className="text-[18px] max-[435px]:text-[13px]">
              <span>{props.BodyType}</span> Body
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
