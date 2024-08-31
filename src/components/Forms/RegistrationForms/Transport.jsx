import React from "react";
import ScrollToTopOnMount from "../ScrollToTop";
import DynamicForm from "../DynamicForm";

const Transport = () => {
  const formFields = [
    // Personal Details Left
    { label: "Name", name: "name", type: "text" },
    { label: "Phone no", name: "phoneNumber", type: "text" },
    { label: "Email", name: "email", type: "email" },

    { label: "Business Intro", name: "businessIntro", type: "text" },

    // Experience
    { label: "Driving Years", name: "drivingYears", type: "text" },
    { label: "Vehicle Driven", name: "vehicleDriven", type: "text" },
    { label: "License number", name: "licenseNumber", type: "text" },
    {
      label: "Compliance Form +",
      name: "complianceFormButton",
      type: "button",
    },
    { label: "Upload Images +", name: "uploadImagesButton", type: "button" },
    {
      label: "Download Compliance Form",
      name: "downloadComplianceFormButton",
      type: "button",
    },

    // Personal Details Right
    { label: "Age", name: "age", type: "number" },

    { label: "Blood Group", name: "bloodGroup", type: "text" },
    { label: "Aadhaar Number", name: "aadhaarNumber", type: "text" },
    { label: "PAN card number", name: "panCardNumber", type: "text" },
    {
      label: "Language",
      name: "language",
      type: "select",
      options: ["English", "Spanish"],
    },

    // Services (Radio Buttons)
    {
      name: "servicesRadio",
      label: "Services",
      type: "radio",
      options: [
        "FTL",
        "LTL",
        "TCT",
        "First Mile",
        "Dry Van",
        "Last Mile",
        "Flat Bed",
      ],
    },
  ];

  return (
    <>
      <ScrollToTopOnMount />
      <DynamicForm
        config={formFields}
        formTitle={"Transport"}
        key={"transport"}
        formRadioCSS={"flex gap-2 md:flex-row md:gap-4 flex-wrap md:mx-0 mx-10"}
        formCSS="w-full flex flex-wrap overflow-hidden justify-center items-center gap-6"
        formDivCSS={
          "flex flex-col md:flex-row md:flex-wrap md:mx-72 md:pl-20 gap-6 md:justify-baseline items-center w-fit mx-10"
        }
        formGroupCSS="flex gap-2 md:flex-row flex-col flex-wrap md:flex-nowrap items-stretch"
        isBankDetails={true}
        isInsurance={true}
        requestID={1234}
      />
    </>
  );
};

export default Transport;
