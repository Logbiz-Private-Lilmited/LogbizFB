import React from "react";
import Transport from "/src/assets/ServicePages/transport.png"
import Location from "/src/assets/ServicePages/location.png"
import Point from "/src/assets/ServicePages/point.png"

export default function ServiceCard(props){
    return(
        <div key={props.key} className="border-2 border-black rounded-md h-fit w-fit p-2 pr-[10px] flex gap-4">
            <img src={Transport} alt="" className="w-[190px] h-[190px]" />
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl max-[435px]:text-2xl font-medium">{props.Name}</h1>
                <div className="flex gap-2 mt-3">
                    <img src={Location} alt="" className="h-5" />
                    <h1 className="text-[18px] max-[435px]:text-[13px]">{props.Location}</h1>
                </div>
                <div className="flex gap-2">
                    <img src={Point} className="w-[20px] h-[20px] max-[435px]:h-4 max-[435px]:w-4" />
                    <h1 className="max-[435px]:text-[13px]">{props.Model}</h1>
                </div>
                <div className="flex gap-2">
                    <img src={Point} alt="" className="w-[20px] h-[20px] max-[435px]:h-4 max-[435px]:w-4" />
                    <h1 className="max-[435px]:text-[13px]">Capacity <span>{props.Capacity}</span></h1>
                </div>
                <div className="flex gap-2">
                    <img src={Point} alt="" className="w-[20px] h-[20px] max-[435px]:h-4 max-[435px]:w-4" />
                    <h1 className=" max-[435px]:text-[13px]"><span>{props.BodyType}</span> Body</h1>
                </div> 
            </div>
        </div>
    )
}