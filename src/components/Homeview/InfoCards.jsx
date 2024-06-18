import React from "react";

const InfoComponent = ({heading, paragraphs, buttonText})=>{
    return(
        <div className="flex flex-col w-5/6 max-h-fit md:w-2/5 flex-wrap self-center sm:w-10/12">
            <h2 className="text-4xl font-bold flex-1 leading-h2 mb-10">{heading}</h2>
        
            {paragraphs.map((paragraph, index) =>(
                <p key={index} className="leading-p text-xl text-paraColor">{paragraph}</p>
            ))}
        
            <button className="ml-auto my-5 bg-btn-grey px-5 py-1 rounded-md font-bold">{buttonText}</button>
        </div>
    );
};

const InfoCards = ({ info })=>{
    return(
        <div>
        <div className="flex lg:flex-row md:flex-row md:justify-around flex-col ">
            {info.map((box, index) =>(
                <>
                <InfoComponent
                key={index}
                heading={box.heading}
                paragraphs={box.paragraphs}
                buttonText={box.buttonText}
                />
                <hr className="block lg:hidden md:hidden w-11/12 my-5 border-black border-y-4 m-auto" />
                </>
            ))}
                </div>
                </div>
    )
}
export default InfoCards;