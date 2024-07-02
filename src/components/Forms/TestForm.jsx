import React from "react";
import DynamicForm from "./DynamicForm";

const TestForm = () => {
  const initialFormData = [
    { name: "name", label: "Name", type: "text", value: "" },
    { name: "email", label: "Email", type: "email", value: "" },
    { name: "mobile", label: "Mobile", type: "tel", value: "" },
    { name: "address", label: "Address", type: "text", value: "" },
    {
      name: "locationOfProperty",
      label: "Location of Property",
      type: "text",
      value: "",
    },
    {
      name: "forPalleteStorage",
      label: "For Pallete Storage",
      type: "text",
      value: "",
    },
    {
      name: "sizeOfWarehouse",
      label: "Size of Warehouse",
      type: "text",
      value: "",
    },
    {
      name: "preferredGoogleLocation",
      label: "Preferred Google Location",
      type: "text",
      value: "",
    },
    { name: "reserve", label: "Reserve", type: "text", value: "" },
    { name: "columnSpan", label: "Column Span", type: "text", value: "" },
    { name: "floor", label: "Floor", type: "text", value: "" },
    {
      name: "designLiveLoad",
      label: "Design Live Load",
      type: "text",
      value: "",
    },
    { name: "addRoofLoad", label: "Add Roof Load", type: "text", value: "" },
    { name: "dockOpening", label: "Dock Opening", type: "text", value: "" },
    { name: "cLoadColumns", label: "C Load Columns", type: "text", value: "" },
    { name: "roof", label: "Roof", type: "text", value: "" },
    { name: "reverseCanopy", label: "Reverse Canopy", type: "text", value: "" },
    { name: "ventilation", label: "Ventilation", type: "text", value: "" },
    {
      name: "finishedFloorLevel",
      label: "Finished Floor Level",
      type: "text",
      value: "",
    },
    { name: "louvers", label: "Louvers", type: "text", value: "" },
    { name: "mainlinePower", label: "Mainline Power", type: "text", value: "" },
    {
      name: "staffSeatingCapacity",
      label: "Staff Seating Capacity",
      type: "number",
      value: "",
    },
    { name: "parkingSpace", label: "Parking Space", type: "number", value: "" },
    { name: "insulation", label: "Insulation", type: "text", value: "" },
    {
      name: "expectedDeliveryDate",
      label: "Expected Delivery Date",
      type: "date",
      value: "",
    },
    {
      name: "fireNOC",
      label: "Fire NOC",
      type: "select",
      options: ["Yes", "No"],
      value: "Yes",
    },
    {
      name: "warehouseCompliance",
      label: "Warehouse Compliance",
      type: "select",
      options: ["Yes", "No"],
      value: "Yes",
    },
    {
      name: "fireHydrant",
      label: "Fire Hydrant",
      type: "select",
      options: ["Yes", "No"],
      value: "Yes",
    },
    {
      name: "powerBackDGSet",
      label: "Power Back DG Set",
      type: "text",
      value: "",
    },
    {
      name: "warehouseStructure",
      label: "Warehouse Structure",
      type: "select",
      options: ["PEB", "Non-PEB"],
      value: "PEB",
    },
    {
      name: "turningRadius44TnVeh",
      label: "Turning Radius 44Tn Veh",
      type: "text",
      value: "",
    },
    {
      name: "heightFromCentre",
      label: "Height From Centre",
      type: "text",
      value: "",
    },
    {
      name: "heightFromSides",
      label: "Height From Sides",
      type: "text",
      value: "",
    },
    { name: "plinthHeight", label: "Plinth Height", type: "text", value: "" },
    { name: "noOfDocks", label: "No of Docks", type: "number", value: "" },
    {
      name: "waterStorageCapacity",
      label: "Water Storage Capacity",
      type: "text",
      value: "",
    },
    {
      name: "boundaryWall",
      label: "Boundary Wall",
      type: "select",
      options: ["PEB", "Non-PEB"],
      value: "PEB",
    },
    {
      name: "warehousePicture",
      label: "Warehouse Picture",
      type: "file",
      value: "",
    },
  ];

  const distributionHubOwnerformData = [
    {
      label: "Distribution Hub Owner",
      type: "group",
      isLabel: true,
      fields: [
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
      ],
    },
    {
      label: "Bank Details",
      type: "group",
      isLabel: false,
      fields: [
        { name: "bankName", label: "Bank Name", type: "text" },
        { name: "accountNumber", label: "Account Number", type: "text" },
        { name: "branchAddress", label: "Branch Address", type: "text" },
        { name: "ifscCode", label: "IFSC Code", type: "text" },
      ],
    },
  ];

  // const insuranceApplication=[{name:"insuranceType",type:}]

  const formInputs = [
    {
      label: "Company Name",
      name: "companyName",
      type: "text",
      value: "",
    },
    { label: "Name", name: "name", type: "text", value: "" },
    { label: "Email", name: "email", type: "email", value: "" },
    { label: "Mobile Number", name: "mobileNumber", type: "text", value: "" },
    { label: "GST", name: "gstNumber", type: "text", value: "" },
    { label: "Aadhar", name: "aadhar", type: "text", value: "" },
    { label: "PAN Number", name: "panNumber", type: "text", value: "" },
    {
      label: "Business Registration No",
      name: "businessRegistration",
      type: "text",
      value: "",
    },
    { label: "Address", name: "address", type: "text", value: "" },
    { label: "City", name: "city", type: "text", value: "" },
    { label: "State", name: "state", type: "text", value: "" },
    { label: "Service", name: "service", type: "text", value: "" },
    {
      label: "Service Network",
      name: "serviceNetwork",
      type: "text",
      value: "",
    },
    {
      label: "Compilance Form",
      name: "compilanceForm",
      type: "text",
      value: "",
    },
  ];

  const warehouseListingformCSS =
    "h-full w-full px-8 md:px-28 grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 md:justify-around py-4 gap-5 md:gap-6 lg:gap-10 items-center text-justify";
  const distributionHubOwnerformCSS = "flex flex-col p-2 w-full";

  const fspFormCSS =
    "w-full flex justify-center items-center flex-col gap-6 h-fit";
  const fspDivCSS =
    "grid md:grid-cols-2 grid-flow-row md:justify-center text-justify items-center gap-5 h-fit";

  const bankDetails = [
    { label: "Name", name: "name", value: "" },
    { label: "Account Number", name: "accountNumber", value: "" },
    { label: "Branch Name", name: "branchName", value: "" },
    { label: "IFSC Code", name: "ifscCode", value: "" },
  ];
  const note = [
    "We also provide Unit Load containers through our Logistic Service Providers will manage pick and drop at your site ",
    "Quote will be excluding GST Charges which will be calculated based on your declaration whether its forward charge or revers charge or you intend to send sample goods. If you have multiple options please raise separate quote requests. Our experts will get in touch shortly ...",
  ];
  return (
    <div>
      <DynamicForm
        config={initialFormData}
        formCSS={warehouseListingformCSS}
        formTitle={"Warehouse Listing Form"}
        requestID={"1234"}
      />
      <DynamicForm
        config={formInputs}
        formCSS={fspFormCSS}
        formDivCSS={fspDivCSS}
        isBankDetails={true}
        formTitle={"FSP Registration"}
        requestID={"1234"}
      />
    </div>
  );
};

export default TestForm;
