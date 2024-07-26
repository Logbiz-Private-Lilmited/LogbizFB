import DynamicForm from "../../DynamicForm";

const WarehouseListingForm = () => {
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

  const warehouseListingformCSS =
    "h-full w-full px-8 md:px-28 grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 md:justify-around py-4 gap-5 md:gap-6 lg:gap-10 items-center text-justify";

  return (
    <DynamicForm
      config={initialFormData}
      formCSS={warehouseListingformCSS}
      formTitle={"Warehouse Listing Form"}
      requestID={"1234"}
    />
  );
};
export default WarehouseListingForm;
