import DynamicForm from "../DynamicForm";

const FSPRegistration = () => {
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
    { label: "Service", name: "service", type: "text" },
    { label: "Service Network", name: "serviceNetwork", type: "text" },
    { label: "Compliance Form", name: "complianceForm", type: "text" },
  ];

  const bankDetails = [
    { label: "Name", name: "name", value: "" },
    { label: "Account Number", name: "accountNumber", value: "" },
    { label: "Branch Name", name: "branchName", value: "" },
    { label: "IFSC Code", name: "ifscCode", value: "" },
  ];

  return (
    <>
      <DynamicForm
        config={formInputs}
        formCSS="w-full flex justify-center items-center flex-col gap-6"
        isBankDetails={true}
        formDivCSS="grid grid-cols-1 md:grid-cols-2 w-full md:w-fit justify-center items-center gap-5"
        formTitle={"FSP Registration"}
      />
    </>
  );
};

export default FSPRegistration;
