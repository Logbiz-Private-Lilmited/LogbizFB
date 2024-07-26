import React from "react";
import ScrollToTopOnMount from "../ScrollToTop";
import DynamicForm from "../DynamicForm";

const Insurance = () => {
  const formInputs = [
    { label: "Insurance Type", name: "companyName", type: "text" },
    { label: "Phone Number", name: "mobileNumber", type: "text" },
    { label: "Expected Date", name: "expectedDate", type: "date" },

    { label: "Email", name: "email", type: "email" },
    { label: "City", name: "city", type: "text" },
  ];
  return (
    <>
      <ScrollToTopOnMount />
      <DynamicForm
        config={formInputs}
        formTitle={"Insurance Application"}
        requestID={123}
        formCSS={"flex flex-col items-center gap-2 mb-2"}
        key={"insuranceApplication"}
      />
    </>
  );
};

export default Insurance;
