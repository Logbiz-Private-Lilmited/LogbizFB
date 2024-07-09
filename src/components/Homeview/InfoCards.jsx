import React from "react";

const InfoComponent = ({ heading, paragraphs, buttonText }) => {
  return (
    <div className="flex flex-col w-3/4 max-h-fit flex-wrap mx-auto">
      <h2 className="text-4xl font-bold flex-1 leading-h2 mb-10">{heading}</h2>

      {paragraphs.map((paragraph, index) => (
        <p key={index} className="leading-p text-xl text-paraColor">
          {paragraph}
        </p>
      ))}

      <button className="ml-auto my-5 bg-btn-grey px-5 py-1 rounded-md font-bold hover:bg-black hover:text-white">
        {buttonText}
      </button>
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
            />
            <hr className="block lg:hidden md:hidden w-11/12 my-5 border-black border-y-4 m-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default InfoCards;
