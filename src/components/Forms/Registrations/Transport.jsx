// src/Freight.js
import React from "react";
<<<<<<< Updated upstream:src/components/Forms/Registrations/Transport.jsx
import useForm from "../useform";
=======
import ScrollToTopOnMount from "../ScrollToTop";
>>>>>>> Stashed changes:src/components/Forms/RegistrationForms/Transport.jsx

const personalDetailsLeft = [
  { placeholder: "Name", type: "text" },
  { placeholder: "Phone no", type: "text" },
  { placeholder: "Email", type: "email" },
  {
    placeholder: "Type Phone",
    type: "select",
    options: ["Mobile", "Landline"],
  },
  { placeholder: "Business Intro", type: "text" },
  { placeholder: "Service", type: "select", options: ["Option 1", "Option 2"] },
];

const experience = [
  { placeholder: "Driving Years", type: "text" },
  { placeholder: "Vehicle Driven", type: "text" },
  { placeholder: "License number", type: "text" },
  { placeholder: "Compliance Form +", type: "button" },
  { placeholder: "Upload Images +", type: "button" },
  { placeholder: "Download Compliance Form", type: "button" },
];

const personalDetailsRight = [
  { placeholder: "Age", type: "number" },
  { placeholder: "Language", type: "select", options: ["English", "Spanish"] },
  { placeholder: "Blood Group", type: "text" },
  { placeholder: "Aadhaar Number", type: "text" },
  { placeholder: "PAN card number", type: "text" },
];

const services = [
  { name: "service", value: "FTL", label: "FTL" },
  { name: "service", value: "LTL", label: "LTL" },
  { name: "service", value: "TCT", label: "TCT" },
  { name: "service", value: "First Mile", label: "First Mile" },
  { name: "service", value: "Dry Van", label: "Dry Van" },
  { name: "service", value: "Last Mile", label: "Last Mile" },
  { name: "service", value: "Flat Bed", label: "Flat Bed" },
];

const bankDetails = [
  { label: "Name", name: "name", value: "" },
  { label: "Account Number", name: "accountNumber", value: "" },
  { label: "Branch Name", name: "branchName", value: "" },
  { label: "IFSC Code", name: "ifscCode", value: "" },
];
const insuranceDetails = [
  { name: "insuranceCompany", placeholder: "Insurance Company", type: "text" },
  { name: "policyNumber", placeholder: "Policy Number", type: "text" },
  { name: "insuranceCover", placeholder: "Insurance Cover", type: "text" },
  { name: "insurancePremium", placeholder: "Insurance Premium", type: "text" },
  { name: "startDate", placeholder: "Start Date", type: "date" },
  { name: "endDate", placeholder: "End Date", type: "date" },
];
const inputCSS = "border rounded-md p-2 w-fit placeholder:text-sm mt-2";
const divCSS = "flex flex-col gap-3";

const renderField = (field) => {
  if (field.type === "select") {
    return (
      <select className={inputCSS} key={field.placeholder}>
        {field.options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    );
  } else if (field.type === "button") {
    return (
      <button
        className={`${inputCSS} text-gray-500 text-start`}
        key={field.placeholder}
      >
        {field.placeholder}
      </button>
    );
  }
  return (
    <input
      type={field.type}
      placeholder={field.placeholder}
      className={inputCSS}
      key={field.placeholder}
    />
  );
};

const Transport = () => {
  return (
    <>
      <div className="flex justify-between md:items-center md:text-center h-full w-screen md:px-12 md:py-4 px-4 py-2">
        <button className="border rounded-lg px-2 bg-gray-300 w-fit">
          <svg
            fill="#000000"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
            stroke="#000000"
            transform="rotate(90)"
            className="md:h-[24px] md:w-[24px] h-[18px] w-[18px]"
          >
            <path
              id="XMLID_30_"
              d="M154.394,325.606C157.322,328.535,161.161,330,165,330s7.678-1.465,10.607-4.394l75-75 c5.858-5.857,5.858-15.355,0-21.213c-5.858-5.857-15.356-5.857-21.213,0L180,278.787V15c0-8.284-6.716-15-15-15 c-8.284,0-15,6.716-15,15v263.787l-49.394-49.394c-5.858-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213 L154.394,325.606z"
            />
          </svg>
        </button>
      </div>
      <form className="p-4 flex flex-col justify-center items-center gap-10">
        <div className="grid grid-cols-3 gap-14 w-1/2">
          <div className={divCSS}>
            <h2 className="text-xl text-center">Personal Details</h2>
            {personalDetailsLeft.map(renderField)}
          </div>

          <div className={divCSS}>
            <h2 className="text-xl text-center">Experience</h2>
            {experience.map(renderField)}
          </div>

          <div className={divCSS}>
            <h2 className="text-xl text-center">Personal Details</h2>
            {personalDetailsRight.map(renderField)}
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-xl mb-2 text-start text">Services</h2>
          <div className="w-full flex items-center justify-center">
            {services.map((service) => (
              <label
                key={service.value}
                className="mr-4 mb-2 flex items-center w-fit"
              >
                <input
                  type="radio"
                  name={service.name}
                  value={service.value}
                  className="mr-1"
                />
                {service.label}
              </label>
            ))}
          </div>
        </div>
        <div className="border-2 md:mx-20 gap-4 flex flex-col p-4 rounded">
          <h1 className="md:text-lg">Bank Details</h1>
          <div className="flex sm:flex-row flex-col gap-4">
            {bankDetails.map((item) => (
              <input
                className={inputCSS}
                placeholder={item.label}
                name={item.name}
                key={item.name}
              />
            ))}
          </div>
        </div>
        <div className="gap-4 flex flex-col rounded w-2/3">
          <h1 className="md:text-lg">Insurance Details</h1>
          <div className="flex sm:flex-row flex-col gap-4 flex-wrap">
            {insuranceDetails.map((item) => (
              <input
                className={inputCSS}
                placeholder={item.placeholder}
                name={item.name}
                key={item.name}
                type={item.type}
              />
            ))}
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-4 flex justify-end w-2/3">
          <button
            type="submit"
            className="border rounded-md px-8 py-1 text-sm bg-gray-200"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Transport;
