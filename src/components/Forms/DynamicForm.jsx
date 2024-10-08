import React from "react";
import useForm from "./useform";
import BackButton from "../BackButtonModule/BackButton";

const DynamicForm = ({
  config,
  formCSS,
  isBankDetails,
  formDivCSS,
  formTitle,
  requestID,
  note,
  ifLabel,
  formRadioCSS,
  formGroupCSS,
  isInsurance,
}) => {
  const initialValues = config.reduce((acc, field) => {
    if (field.type === "checkbox") {
      field.options.forEach((option) => {
        acc[option.name] = false;
      });
    } else if (field.type === "group") {
      field.fields.forEach((subField) => {
        acc[subField.name] = "";
      });
    } else {
      acc[field.name] = "";
    }
    return acc;
  }, {});

  const { values, handleChange, setValues } = useForm(initialValues);

  const inputCSS =
    "border rounded-sm p-2 w-full placeholder:text-sm mt-2 placeholder:text-gray-800";
  const radioInputCSS = "w-fit";

  const bankDetails = [
    { label: "Name", name: "bankName" },
    { label: "Account Number", name: "accountNumber" },
    { label: "Branch Name", name: "branchName" },
    { label: "IFSC Code", name: "ifscCode" },
  ];
  const insuranceDetails = [
    {
      name: "insuranceCompany",
      placeholder: "Insurance Company",
      type: "text",
    },
    { name: "policyNumber", placeholder: "Policy Number", type: "text" },
    { name: "insuranceCover", placeholder: "Insurance Cover", type: "text" },
    {
      name: "insurancePremium",
      placeholder: "Insurance Premium",
      type: "text",
    },
    { name: "startDate", placeholder: "Start Date", type: "date" },
    { name: "endDate", placeholder: "End Date", type: "date" },
  ];

  const renderInput = (field) => {
    switch (field.type) {
      case "text":
      case "email":
      case "password":
        return (
          <div key={field.name}>
            {ifLabel && (
              <label
                htmlFor={field.name}
                className="flex flex-col"
                key={field.name}
              >
                {field.label}
              </label>
            )}
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={values[field.name]}
              onChange={handleChange}
              placeholder={field.label}
              className={inputCSS}
              key={field.name}
            />
          </div>
        );

      case "date":
        return (
          <div key={field.name} className=" flex flex-col">
            {
              <label htmlFor={field.name} className="flex flex-col">
                {field.label}
              </label>
            }
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={values[field.name]}
              onChange={handleChange}
              placeholder={field.label}
              className={
                "border rounded-sm p-2 w-fit md:w-[195px] placeholder:text-sm mt-2 placeholder:text-gray-800"
              }
            />
          </div>
        );
      case "checkbox":
        return (
          <div className="mt-4 w-full" key={field.label}>
            <h2 className="text-lg mb-4 font-semibold">{field.label}</h2>
            <div className="grid sm:grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-4">
              {field.options.map((option) => (
                <div
                  key={option.name}
                  className="checkbox-group flex items-baseline"
                >
                  <input
                    type="checkbox"
                    name={option.name}
                    id={option.name}
                    checked={values[option.name]}
                    onChange={handleChange}
                    className="mx-2"
                  />
                  <label htmlFor={option.name}>{option.label}</label>
                </div>
              ))}
            </div>
          </div>
        );
      case "select":
        return (
          <div key={field.name}>
            <label htmlFor={field.name} className="flex flex-col">
              {field.label}
            </label>
            <select
              name={field.name}
              id={field.name}
              value={values[field.name]}
              onChange={handleChange}
              className={`${inputCSS}`}
            >
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      case "radio":
        return (
          <div key={field.name} className="">
            <label className="flex flex-col">{field.label}</label>
            <div className={!formRadioCSS ? `flex flex-col` : formRadioCSS}>
              {field.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center mt-2 gap-1 hover:cursor-pointer"
                >
                  <input
                    type="radio"
                    name={field.name}
                    value={option}
                    checked={values[field.name] === option}
                    onChange={handleChange}
                    className={radioInputCSS}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        );
      case "group":
        return (
          <div key={field.name} className="flex flex-col gap-2 w-full ">
            <label className="font-body text-xl" key={field.label}>
              {field.label}
            </label>
            <div className={formGroupCSS} key={field.name}>
              {field.fields.map((subField) => renderInput(subField))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post("http://localhost:3000/submit-form", { ...values, formType }) // Include formType in the data sent to the backend
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("There was an error submitting the form!", error);
    //   });
    e.preventDefault();
    const data = values;
    console.log("submitted values:", data);
    setValues(initialValues);
  };

  return (
    <>
      <div className="flex flex-col justify-between md:flex-row md:items-center md:text-center h-full mb-10">
        <BackButton />
        <div className="flex justify-center items-center text-center w-fit">
          <div className="md:text-2xl font-bold flex justify-between">
            <h2> {formTitle} </h2>
          </div>
        </div>
        <div className="w-fit pr-2">Request ID:{requestID}</div>
      </div>
      <form className={formCSS} onSubmit={handleSubmit}>
        {formDivCSS ? (
          <div className={formDivCSS}>
            {config.map((field) => renderInput(field))}
          </div>
        ) : (
          config.map((field) => renderInput(field))
        )}
        {isBankDetails && (
          <div className="md:gap-4 gap-1 flex flex-col rounded md:w-4/5 w-11/12 border p-4">
            <h1 className="md:text-lg text-base">Bank Details</h1>
            <div className="flex md:flex-row flex-col gap-4 flex-wrap md:flex-nowrap ">
              {bankDetails.map((item) => (
                <input
                  className={inputCSS}
                  placeholder={item.label}
                  name={item.name}
                  key={item.name}
                  onChange={handleChange}
                />
              ))}
            </div>
          </div>
        )}
        {isInsurance && (
          <div className="md:gap-4 gap-1 flex flex-col rounded w-4/5">
            <h1 className="md:text-lg text-base">Insurance Details</h1>
            <div className="flex sm:flex-row flex-col gap-4 flex-wrap">
              {insuranceDetails.map((item) => (
                <input
                  className={inputCSS}
                  placeholder={item.placeholder}
                  name={item.name}
                  key={item.name}
                  type={item.type}
                  onChange={handleChange}
                />
              ))}
            </div>
          </div>
        )}

        <div className="md:col-span-2 lg:col-span-4 flex justify-end md:w-4/5">
          <button
            type="submit"
            className="border rounded-md px-6 py-2 text-md bg-btn-grey hover:bg-customOrange hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
      {note && note.length > 0 && (
        <div className="border-2 border-black md:m-28 m-10 gap-4 flex flex-col p-4 rounded">
          <h1 className="text-sm font-bold">Note</h1>
          <div className="text-sm">
            <ul className="gap-8 flex flex-col">
              {note.map((noteItem, index) => (
                <li key={index}>{noteItem}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicForm;
