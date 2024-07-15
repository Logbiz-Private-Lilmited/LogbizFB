import React from "react";
import DynamicForm from "../DynamicForm";
import ScrollToTopOnMount from "../ScrollToTop";

const WarehouseRegistration = () => {
  const warehouseRegistration = [
    { name: "yourName", label: "Your Name", type: "text" },
    { name: "yourEmail", label: "Your Email-id", type: "email" },
    { name: "mobileNumber", label: "Mobile number", type: "text" },
    { name: "address", label: "Address", type: "text" },
    {
      name: "purpose",
      label: "Please check in purpose of property registration",
      type: "radio",
      options: [
        "Built to Suit (BTS)",
        "Warehouse Ready to Move In (RTM)",
        "Pallet Storage",
        "Land Parcels for Logistics Park",
      ],
    },
    { name: "locationOfProperty", label: "Location of Property", type: "text" },
    { name: "forPalletStorage", label: "For Pallet Storage", type: "text" },
    { name: "forBTSRTM", label: "For BTS/RTM", type: "text" },
    { name: "googleLocation", label: "Google Location", type: "text" },
    { name: "blockName", label: "Block Name", type: "text" },
    { name: "columnSpan", label: "Column Span", type: "text" },
    { name: "floor", label: "Floor", type: "text" },
    { name: "designLiveLoad", label: "Design Live Load", type: "text" },
    { name: "addRoofLoad", label: "Add Roof Load", type: "text" },
    { name: "dockOpening", label: "Dock Opening", type: "text" },
    { name: "cLoadColumns", label: "C Load Columns", type: "text" },
    { name: "roof", label: "Roof", type: "text" },
    { name: "reverseCanopy", label: "Reverse Canopy", type: "text" },
    { name: "ventilation", label: "Ventilation", type: "text" },
    { name: "finishedFloorLevel", label: "Finished Floor Level", type: "text" },
    {
      name: "louvers",
      label: "Louvers",
      type: "select",
      options: ["Yes", "No"],
    },
    { name: "mainlinePower", label: "Mainline Power", type: "text" },
    {
      name: "staffSeatingCapacity",
      label: "Staff Seating Capacity",
      type: "text",
    },
    { name: "parkingSpace", label: "Parking Space", type: "text" },
    { name: "insulation", label: "Insulation", type: "text" },
    { name: "availabilityDate", label: "Availability Date", type: "date" },
    {
      name: "fireNOC",
      label: "Fire NOC",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      name: "warehouseCompliance",
      label: "Warehouse Compliance",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      name: "fireHydrant",
      label: "Fire hydrant",
      type: "select",
      options: ["Yes", "No"],
    },
    { name: "powerBackDGSet", label: "Power Back DG set", type: "text" },
    {
      name: "warehouseStructure",
      label: "Warehouse Structure",
      type: "select",
      options: ["PEB", "Other"],
    },
    { name: "turningRadius", label: "Turning Radius", type: "text" },
    { name: "heightFromSides", label: "Height from Sides (Ft)", type: "text" },
    { name: "plinthHeight", label: "Plinth Height", type: "text" },
    { name: "noOfDocks", label: "No of Docks", type: "text" },
    {
      name: "waterStorageCapacity",
      label: "Water Storage Capacity",
      type: "text",
    },
    { name: "typeOfDoors", label: "Type of Doors", type: "text" },
    {
      name: "dockPits",
      label: "Dock Pits",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      name: "mheRamp",
      label: "MHE RAMP",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      name: "boundaryWall",
      label: "Boundary Wall",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      name: "fireFittingSystem",
      label: "Fire Fitting System",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      name: "utilityBuilding",
      label: "Utility Building",
      type: "select",
      options: ["Yes", "No"],
    },
    { name: "siteDescription", label: "Site Description", type: "text" },
    { name: "siteConnectivity", label: "Site Connectivity", type: "text" },
    { name: "roadNetwork", label: "Road Network", type: "text" },
    { name: "boxLayout", label: "Box Layout", type: "file" },
    { name: "warehousePicture", label: "Warehouse Picture", type: "file" },
    { name: "siteLayout", label: "Site Layout", type: "file" },
  ];
  const warehouseRegistrationFormCSS =
    "h-full w-full px-8 md:px-28 grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 md:justify-around py-4 gap-5 md:gap-6 lg:gap-10 items-center text-justify";

  return (
    <div>
      <ScrollToTopOnMount />
      <DynamicForm
        config={warehouseRegistration}
        isBankDetails={false}
        formCSS={warehouseRegistrationFormCSS}
        formTitle={"Register a Warehouse"}
        requestID={"12345"}
        key={"warehouseRegistration"}
      />
    </div>
  );
};

export default WarehouseRegistration;
