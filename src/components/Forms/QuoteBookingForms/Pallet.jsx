import React from "react";
import ScrollToTopOnMount from "../ScrollToTop";
import DynamicForm from "../DynamicForm";

const Pallet = () => {
  const formInputs = [
    {
      name: "freightDestination",
      type: "radio",
      label: "Freight Destination",
      options: ["Domestic", "International"],
    },
    {
      name: "loadPickUP",
      label: "Load PickUp Location",
      type: "group",
      fields: [
        {
          name: "pickUp",
          type: "select",
          label: "PickUp",
          options: ["Type1", "Type2", "Type3"],
        },
        { name: "pickUpPincode", type: "text", label: "Length" },
      ],
    },
    {
      name: "loadDrop",
      label: "Load Drop Location",
      type: "group",
      fields: [
        {
          name: "drop",
          type: "select",
          label: "Drop",
          options: ["Type1", "Type2", "Type3"],
        },
        { name: "pickUpPincode", type: "text", label: "Length" },
      ],
    },
    {
      name: "truckInfo",
      label: "Truck Information in Ft & Kg:",
      type: "group",
      fields: [
        {
          name: "truckType",
          type: "select",
          label: "Truck Type",
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
        formTitle={"Book a Pallet or ULC"}
        key={"pallet/ulc"}
        formRadioCSS={"flex gap-2 md:flex-row flex-col md:gap-4"}
        formCSS="md:w-fit flex flex-wrap gap-6 lg:mx-24 my-2 mx-4 text-start items-end"
        formGroupCSS="flex gap-2 md:flex-row flex-col flex-wrap md:flex-nowrap items-end"
        note={[
          "We also provide Unit Load containers through our Logistic Service Providers will manage pick and drop at your site ",
          "Quote will be excluding GST Charges which will be calculated based on your declaration whether its forward charge or revers charge or you intend to send sample goods. If you have multiple options please raise separate quote requests. Our experts will get in touch shortly ...",
        ]}
        requestID={1234}
      />
    </>
  );
};

export default Pallet;
