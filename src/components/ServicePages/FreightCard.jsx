import React from "react";

export default function FreightCard(props){
    return(
        <div className="flex max-[426px]:flex-wrap max-[426px]:flex-col-reverse gap-10 max-[426px]:p-3 max-[426px]:gap-1 border-2 py-4 px-6 rounded-lg solid border-black">
            <div className="p-4 flex flex-col gap-3">
                <div className="text-2xl font-bold">{props.Name}<span> Freight</span></div>
                <div className=" max-[426px]:hidden">{props.Description}</div>
            </div>
            <img src={props.Image} alt="" className="w-[270px] h-[180px] rounded-lg" />
        </div>
    )
}