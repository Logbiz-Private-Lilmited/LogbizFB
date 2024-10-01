import React from "react";
import ServiceNavbar from "./ServiceNavbar";

export default function FinancePage(props) {
  return (
    <div>
      <div className=" inline-flex gap-3">
        <a href="/" className="bg-[#d9d9d9] h-fit align-middle p-3 rounded-lg">
          <img src="/src/assets/BackArrow.png" alt="" />
        </a>
        <span className="md:text-3xl text-xl font-bold">Finance Services</span>
      </div>
      <ServiceNavbar Data={props.Data} />
    </div>
  );
}
