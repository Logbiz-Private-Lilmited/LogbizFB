import DynamicForm from "../DynamicForm";
import ScrollToTopOnMount from "../ScrollToTop";

const FreightRegistration = () => {
  const formInputs = [
    { label: "Company Name", name: "companyName", type: "text" },
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Mobile Number", name: "mobileNumber", type: "text" },
    { label: "GST", name: "gstNumber", type: "text" },
    { label: "Aadhar", name: "aadhar", type: "text" },
    { label: "PAN Number", name: "panNumber", type: "text" },
    { label: "Code Status", name: "codeStatus", type: "text" },
    { label: "Compliance Form", name: "complianceForm", type: "text" },
    { label: "Address", name: "address", type: "text" },
    { label: "City", name: "city", type: "text" },
    { label: "State", name: "state", type: "text" },

    {
      name: "sevicesCheckbox",
      label: "Services",
      type: "checkbox",
      options: [
        {
          name: "customClearance",
          label: "Custom Clearance",
        },
        { name: "inlandMovement", label: "Inland Movemenet" },
        {
          name: "warehouseSolutions",
          label: "Warehouse Solutions",
        },
        { name: "charteringService", label: "Chartering Service" },
        { name: "bulkBreak", label: "Bulk / Break" },
        {
          name: "marineInsurance",
          label: "Marine Insurance",
        },
        {
          name: "buyerConsolideration",
          label: "Buyer Consolideration",
        },
        {
          name: "packaging&Fumigation",
          label: "Packaging & Fumigation",
        },
      ],
    },
  ];

  return (
    <>
      <ScrollToTopOnMount />
      <DynamicForm
        config={formInputs}
        formCSS="md:w-fit flex justify-center items-center flex-col gap-6 lg:mx-16 my-2 mx-4"
        isBankDetails={true}
        formDivCSS="w-full flex flex-col gap-4 flex md:flex-row flex-wrap md:w-2/3"
        formTitle={"Freight Registration"}
        requestID={"1234"}
        ifLabel={false}
        key={"freightRegistration"}
        formType={"freightRegistration"}
      />
    </>
  );
};

export default FreightRegistration;
