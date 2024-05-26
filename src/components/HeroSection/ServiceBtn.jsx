import React from "react";
import RightArrow from "../../assets/HeroSection/right-arrow.svg";

const ServiceBtn = ({ title, img, scrollTo }) => {
  console.log("scrollTo:", scrollTo); // Debugging the scrollTo prop

  const handleClick = (e) => {
    e.preventDefault();
    if (scrollTo) {
      const targetElement = document.getElementById(scrollTo);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Element with ID ${scrollTo} not found.`);
      }
    }
  };

  return (
    <a href={`#${scrollTo}`} onClick={handleClick}>
      <div className="w-fit h-30 bg-[#4F4F4F] flex items-center p-2 rounded-xl">
        <img
          src={img}
          alt="Hero1"
          className="h-28 rounded-xl w-28"
          loading="lazy"
        />
        <div className="flex flex-col justify-between h-full items-center">
          <img
            src={RightArrow}
            alt="right-arrow"
            className="md:h-8 h-6 mb-2 xl:ml-32 ml-24"
            loading="lazy"
          />
          <p className="text-white w-3/4 mb-2">{title}</p>
        </div>
      </div>
    </a>
  );
};

export default ServiceBtn;
