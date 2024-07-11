import React from "react";
import DynamicForm from "../DynamicForm";
import ScrollToTopOnMount from "../ScrollToTop";

const DistributionHubForm = () => {
  const distributionHubOwnerformCSS =
    "w-full flex justify-center items-center flex-col gap-6";

  const distributionHubOwnerformData = [
    { name: "companyName", label: "Company Name", type: "text" },
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email Id", type: "email" },
    { name: "mobile", label: "Mobile Phone", type: "tel" },
    { name: "gst", label: "GST", type: "text" },
    { name: "aadhaar", label: "Aadhaar Number", type: "text" },
    { name: "panCard", label: "PAN Card Number", type: "text" },
    {
      name: "businessRegistration",
      label: "Business Registration Number",
      type: "text",
    },
    { name: "address", label: "Address", type: "text" },
    { name: "city", label: "City", type: "text" },
    { name: "state", label: "State", type: "text" },
    { name: "complianceForm", label: "Compliance Form", type: "text" },
    {
      name: "serviceType",
      label: "Service Type",
      type: "select",
      options: ["Option 1", "Option 2"],
    },
    { name: "storageCapacity", label: "Storage Capacity", type: "text" },
    {
      name: "transportationService",
      label: "Transportation Service",
      type: "text",
    },
    { name: "servicesOffered", label: "Services Offered", type: "text" },
    { name: "erpSystem", label: "ERP/System", type: "text" },
    { name: "anyOtherInfo", label: "Any other info", type: "text" },
  ];
  return (
    <div>
      <ScrollToTopOnMount />
      <DynamicForm
        config={distributionHubOwnerformData}
        isBankDetails={true}
        formCSS={distributionHubOwnerformCSS}
        formDivCSS="grid grid-cols-1 md:grid-cols-3 w-full md:w-fit justify-center items-center gap-5"
        formTitle={"Distribution Hub Owner"}
        requestID={"12345"}
        key={"distributionHubForm"}
      />
    </div>
  );
};

export default DistributionHubForm;
