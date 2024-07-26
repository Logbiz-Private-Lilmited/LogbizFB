import DynamicForm from "../DynamicForm";
import ScrollToTopOnMount from "../ScrollToTop";

const ThreePL = () => {
  const formInputs = [
    { label: "Company Name", name: "companyName", type: "text" },
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Mobile Number", name: "mobileNumber", type: "text" },
    { label: "GST", name: "gstNumber", type: "text" },
    { label: "Aadhar", name: "aadhar", type: "text" },
    { label: "PAN Number", name: "panNumber", type: "text" },
    {
      label: "Business Registration No",
      name: "businessRegistration",
      type: "text",
    },
    { label: "Address", name: "address", type: "text" },
    { label: "City", name: "city", type: "text" },
    { label: "State", name: "state", type: "text" },
    { label: "Service Type", name: "serviceType", type: "text" },
    { label: "Service Network", name: "serviceNetwork", type: "text" },
    { label: "WMC", name: "wmc", type: "text" },
    { label: "Compliance Form", name: "complianceForm", type: "text" },
    { label: "About Us", name: "aboutUs", type: "text" },
    {
      label: "Service Offerings",
      type: "checkbox",
      options: [
        { name: "orderFulfillment", label: "Order Fulfillment" },
        { name: "loadDeconsolidation", label: "Load Deconsolidation" },
        { name: "bondedRegime", label: "Bonded Regime" },
        { name: "nonBondedRegime", label: "Non-Bonded Regime" },
        {
          name: "crossdockingAndTransloading",
          label: "Crossdocking and Transloading",
        },
        { name: "fullTruckLoads", label: "Full Truck Loads" },
        { name: "lessThanTruckLoads", label: "Less Than Truck Loads" },
        { name: "labelling", label: "Labelling" },
        { name: "palletizing", label: "Palletizing" },
        { name: "productCustomization", label: "Product Customization" },
        { name: "productDisposal", label: "Product Disposal" },
        { name: "qualityControl", label: "Quality Control" },
        { name: "repackaging", label: "Repackaging" },
        {
          name: "shavingToppingOffPalettes",
          label: "Shaving / Topping off Palettes",
        },
        { name: "reporting", label: "Reporting" },
        { name: "returnsManagement", label: "Returns Management" },
        { name: "scanning", label: "Scanning" },
        { name: "courierCargoSorting", label: "Courier Cargo Sorting" },
        { name: "garmentsOnHanger", label: "Garments on Hanger" },
      ],
    },
  ];

  const bankDetails = [
    { label: "Name", name: "name", value: "" },
    { label: "Account Number", name: "accountNumber", value: "" },
    { label: "Branch Name", name: "branchName", value: "" },
    { label: "IFSC Code", name: "ifscCode", value: "" },
  ];

  return (
    <>
      <ScrollToTopOnMount />
      <DynamicForm
        config={formInputs}
        formCSS="md:w-fit flex justify-center items-center flex-col gap-6 lg:mx-16 my-2 mx-4"
        isBankDetails={true}
        // formDivCSS="flex flex-rows flex-wrap md:w-2/3 w-screen md:gap-6 gap-4"
        formDivCSS="w-full flex flex-col gap-4 flex md:flex-row flex-wrap md:w-2/3"
        formTitle={"3PL Registration"}
        requestID={"1234"}
        ifLabel={false}
        key={"3PL"}
      />
    </>
  );
};

export default ThreePL;
