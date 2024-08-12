import React from "react";
import Transport from "/src/assets/ServicePages/transport.png"
import Location from "/src/assets/ServicePages/location.png"
import Point from "/src/assets/ServicePages/point.png"

export default function ServiceCard(props){
    return(
        <div className="border-2 border-black rounded-md h-fit w-fit p-2 pr-[15px] flex gap-4">
            <img src={props.Img} alt="" className="w-[190px] h-[190px] max-[435px]:w-[130px] max-[435px]:h-[150px]" />
            <div className="flex flex-col max-[435px]:gap-0">
                <p className="text-4xl max-[435px]:text-xl font-medium">{props.Name}</p>
                <div className="flex gap-2 mt-3 max-[435px]:mt-0">
                    <img src={Location} alt="" className="h-5" />
                    <p className="text-[18px] max-[435px]:text-[13px]">{props.Location}</p>
                </div>
                <div className="flex gap-2">
                    <img src={Point} className="w-[20px] h-[20px] max-[435px]:h-4 max-[435px]:w-4" />
                    <p className="text-[18px] max-[435px]:text-[13px]">{props.Model}</p>
                </div>
                <div className="flex gap-2">
                    <img src={Point} alt="" className="w-[20px] h-[20px] max-[435px]:h-4 max-[435px]:w-4" />
                    <p className="text-[18px] max-[435px]:text-[13px]">Capacity <span>{props.Capacity}</span></p>
                </div>
                <div className="flex gap-2">
                    <img src={Point} alt="" className="w-[20px] h-[20px] max-[435px]:h-4 max-[435px]:w-4" />
                    <p className="text-[18px] max-[435px]:text-[13px]"><span>{props.BodyType}</span> Body</p>
                </div> 
            </div>
        </div>
    )
}