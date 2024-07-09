import React from "react";
import { Link } from "react-router-dom";
import BoxesComponent from "./ServiceBoxes";

const RegisterCarousel = () => {
  //import { ReactComponent as TruckSvg } from '../../../public/turck.svg';

  const registerCarouselData = [
    {
      svgPath: "/truck.svg",
      text: "Road transportation",
      link: "/box1",
    },
    {
      svgPath: "/international-shipping 1.svg",
      text: "Freight Forwarding",
      link: "/box2",
    },
    {
      svgPath: "/warehouse 1.svg",
      text: "Warehouse Service ",
      link: "/box2",
    },
    {
      svgPath: "/distribution 1.svg",
      text: "Distribution Service",
      link: "/box2",
    },
    {
      svgPath: "/insurance 1.svg",
      text: "Insurance Service",
      link: "/box2",
    },
    {
      svgPath: "/consultant 1.svg",
      text: "Logistics Consulting Services",
      link: "/box2",
    },
    {
      svgPath: "/manufacturing 1.svg",
      text: "Original Equipment Manufacturers Services",
      link: "/box2",
    },
    {
      svgPath: "/finance 1.svg",
      text: "Finance Service",
      link: "/box2",
    },
  ];

  return (
    <>
      <div className="mt-10 h-fit">
        <div className="flex justify-center flex-col items-center w-full">
          <h1 className="md:text-2xl font-semibold text-lg ">
            Looking to provide logistic service?
          </h1>
          <Link
            to={"/signup"}
            className="font-semibold text-customOrange text-2xl italic"
          >
            Register
          </Link>
          <h1 className="text-sm font-semibold mt-4 md:w-full w-3/4 text-center">
            Register in any of the services you would like to offer.
          </h1>{" "}
        </div>
        <div className="">
          <BoxesComponent info={registerCarouselData} />
        </div>
      </div>
    </>
  );
};

export default RegisterCarousel;
