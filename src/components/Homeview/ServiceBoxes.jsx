import React from "react";
import boxData from "./BoxData";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const BoxComponent = ({ link, svgPath, text }) => {
  return (
    <Link
      to={link}
      className="h-full rounded-lg flex flex-col justify-center items-center p-5 border-2 border-transparent duration-300 transition-border ease-linear hover:border-customOrange hover:shadow-custom-light-hover"
    >
      <img src={svgPath} alt={text} className="h-20" />
      <p className="mt-2 text-base font-bold text-center">{text}</p>
    </Link>
  );
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={`${className} custom-arrow`} onClick={onClick}>
      Previous
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={`${className} custom-arrow`} onClick={onClick}>
      Next
    </button>
  );
};

const BoxesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 480, // Extra small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-20 sm:w-4/5 lg:w-2/5 mx-auto">
      <Slider {...settings}>
        {boxData.map((box, index) => (
          <div key={index} className="px-2 h-[205px]">
            <BoxComponent
              bgColor={box.bgColor}
              svgPath={box.svgPath}
              text={box.text}
              link={box.link}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default BoxesCarousel;

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
