import React from "react";
import BackButton from "../../../BackButtonModule/BackButton";
import { NavLink, Outlet } from "react-router-dom";

const WarehouseDetails = () => {
  const navLinkCss =
    "hover:bg-customOrange w-fit p-2 px-3 rounded-full hover:text-white ease-in text-sm md:text-base";

  return (
    <div className="md:mx-10 mx-2 gap-4 flex flex-col">
      <div className="w-fit">
        <BackButton />
      </div>
      <div className="w-full h-96 bg-gray-200 relative rounded-lg">
        <div className="w-full h-20 bg-black absolute bottom-0 left-0 rounded-b-lg flex text-white items-center md:space-x-14 space-x-6 px-8 bg-opacity-80">
          <div>Gurgoan</div>
          <div>Area (in sqft) - xx </div>
          <div>Block No - xxxx</div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center md:mx-10 mx-2 gap">
        <nav className="flex justify-evenly md:gap-2 gap-0.5 border-primaryBlue border p-2 w-fit rounded-full items-center">
          <NavLink to="site-overview" className={navLinkCss}>
            Site Overview
          </NavLink>
          <NavLink to="specifications" className={navLinkCss}>
            Specification
          </NavLink>
          <NavLink to="request-site-visit" className={navLinkCss}>
            Request Site Visit
          </NavLink>
          <NavLink to="upload-bts-specification" className={navLinkCss}>
            Upload BTS Specification
          </NavLink>
        </nav>
      </div>
      <div className="">
        {" "}
        <Outlet />
        {/* the above nav will be rendered here */}
      </div>
    </div>
  );
};

export default WarehouseDetails;
