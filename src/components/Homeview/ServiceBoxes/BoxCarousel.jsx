import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const BoxComponent = ({ link, svgPath, text }) => {
  return (
    <Link
      to={link}
      className="h-full rounded-lg flex flex-col justify-center items-center p-5 border-2 border-transparent duration-300 transition-border ease-linear hover:border-customOrange hover:shadow-custom-light-hover hover:bg-[#efefef]"
    >
      <img src={svgPath} alt={text} className="h-20" />
      <p className="mt-2 text-xl font-bold text-center">{text}</p>
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

const BoxesCarousel = ({ datasets }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768, // Medium devices (tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Slider-wrapper p-10">
      {datasets &&
        datasets.map((data, dataIndex) => (
          <div key={dataIndex} className="mb-20 sm:w-4/5 lg:w-2/5 mx-auto">
            <h2 className="text-4xl font-bold flex-1 leading-h2 mb-10 text-center">
              {data.title}
              {data.subtitle}
            </h2>
            <Slider {...settings}>
              {data.items.map((box, index) => (
                <div key={index} className="px-2 h-[205px]">
                  <BoxComponent
                    svgPath={box.svgPath}
                    text={box.text}
                    link={box.link}
                  />
                </div>
              ))}
            </Slider>
          </div>
        ))}
    </div>
  );
};
export default BoxesCarousel;
