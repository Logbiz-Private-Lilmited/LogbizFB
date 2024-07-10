import React from "react";
import { Link } from "react-router-dom";

const InfoComponent = ({ heading, paragraphs, buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col w-3/4 max-h-fit flex-wrap mx-auto">
      <h2 className="text-4xl font-bold flex-1 leading-h2 mb-10">{heading}</h2>

      {paragraphs.map((paragraph, index) => (
        <p key={index} className="leading-p text-xl text-paraColor">
          {paragraph}
        </p>
      ))}

      <Link to={buttonLink} className="ml-auto my-5">
        <button className="bg-btn-grey px-5 py-1 rounded-md font-bold hover:bg-black hover:text-white">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

const InfoCards = ({ info }) => {
  return (
    <div className="py-10">
      <div className="flex lg:flex-row md:flex-row md:justify-center flex-col">
        {info.map((box, index) => (
          <div key={index}>
            <InfoComponent
              heading={box.heading}
              paragraphs={box.paragraphs}
              buttonText={box.buttonText}
              buttonLink={box.buttonLink}
            />
            <hr className="block lg:hidden md:hidden w-11/12 my-5 border-black border-y-4 m-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default InfoCards;
