import React from "react";
import boxData from "./BoxData";
import { Link } from "react-router-dom";


const BoxComponent = ({link, svgPath, text}) =>{
    return(
        <Link to={link} className="bg-boxBg border-2 border-black rounded-lg flex flex-col justify-evenly items-center p-5">
            <img src={svgPath} alt={text} className="h-20" />
            <p className="mt-2 text-base font-bold text-center">{text}</p>
        </Link>
    );
};

const BoxesComponent =()=>{
    return(
        <div className="grid grid-cols-2 
                        sm:grid-rows-2 sm:grid-cols-4 
                        lg:grid-cols-8 lg:grid-row-1 
                        gap-4 p-4">
            {boxData.map((box, index)=>(
                <BoxComponent 
                    key={index} 
                    svgPath={box.svgPath} 
                    text={box.text} 
                    link={box.link}
                />
            ))}
        </div>
    );
};

export default BoxesComponent;