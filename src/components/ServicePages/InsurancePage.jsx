import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceNavbar from "./ServiceNavbar";
import { InsuranceDetails } from "./data";
import cargo from "../../assets/ServicePages/CARGO.png";
import vehicle from "../../assets/ServicePages/VEHICLE.png";
import property from "../../assets/ServicePages/PROPERTY.png";
import liability from "../../assets/ServicePages/LIABILITY.png";
import BackButton from "../BackButtonModule/BackButton";

export default function InsurancePage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const images = [cargo, vehicle, property, liability];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div>
      <div className="flex gap-3 items-center">
        <BackButton />
        <span className="md:text-3xl text-xl font-bold">
          Insurance Services
        </span>
      </div>
      <div className="flex justify-center items-center">
        <Slider {...settings} className="w-[40%] max-[768px]:w-[60%]">
          {images.map((img, index) => {
            return (
              <div key={index}>
                <img
                  src={img}
                  alt=""
                  className="w-[300px] max-[435px]:w-fit max-[768px]:w-fit h-[300px] max-[435px]:h-fit max-[768px]:h-fit rounded-xl"
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <ServiceNavbar Data={props.Data} linkTo={props.linkTo} />
    </div>
  );
}
