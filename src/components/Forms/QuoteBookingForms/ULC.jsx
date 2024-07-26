import React from "react";
import ScrollToTopOnMount from "../ScrollToTop";
import DynamicForm from "../DynamicForm";

const ULC = () => {
  const formInputs = [
    {
      name: "ulcinfo",
      label: "ULC information in MM & Kg",
      type: "group",
      fields: [
        {
          name: "ulcType",
          type: "select",
          options: ["Type1", "Type2", "Type3"],
        },
        { name: "length", type: "text", label: "Length" },
        { name: "breadth", type: "text", label: "Breadth" },
        { name: "height", type: "text", label: "Height" },
        { name: "weight", type: "text", label: "Weight" },
        { name: "quantity", type: "text", label: "Quantity" },
      ],
    },
    {
      label: "Expected Pick Up Date",
      name: "expectedPickUpDate",
      type: "date",
    },
    {
      label: "GST/VAT Number",
      name: "gstVatNumber",
      type: "text",
    },
    {
      label: "Personal Info",
      type: "group",
      fields: [
        { name: "phoneNumber", type: "text", label: "Phone No" },
        { name: "email", type: "email", label: "E-mail" },
      ],
    },
    {
      label: "Is cargo of Hazardous nature?",
      name: "isHazardous",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      label: "Stackable cargo?",
      name: "stackableCargo",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      label: "Cargo Insurance?",
      name: "cargoInsurance",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      label: "Do you need customs clearance?",
      name: "customerClearance",
      type: "radio",
      options: ["Yes", "No"],
    },
  ];

  return (
    <>
      <ScrollToTopOnMount />
      <DynamicForm
        config={formInputs}
        formTitle={"ULC Details"}
        key={"ulc"}
        formRadioCSS={"flex gap-2 md:flex-row flex-col md:gap-4"}
        formCSS="md:w-fit flex justify-center flex-col gap-6 lg:mx-16 my-2 mx-4"
        formGroupCSS="flex gap-2 md:flex-row flex-col flex-wrap"
        note={[
          "Quote will be excluding GST Charges which will be calculated based on your declaration whether its forward charge or revers charge or you intend to send sample goods. If you have multiple options please raise separate quote requests. Our experts will get in touch shortly ...",
        ]}
        requestID={1234}
      />
    </>
  );
};

export default ULC;
