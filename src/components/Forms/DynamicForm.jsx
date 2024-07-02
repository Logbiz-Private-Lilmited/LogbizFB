import React from "react";
import useForm from "./useform";

const DynamicForm = ({
  config,
  formCSS,
  isBankDetails,
  formDivCSS,
  formTitle,
  requestID,
  note,
}) => {
  const initialValues = config.reduce((acc, field) => {
    if (field.type === "group") {
      field.fields.forEach((subField) => {
        acc[subField.name] = "";
      });
    } else {
      acc[field.name] = "";
    }
    return acc;
  }, {});

  const { values, handleChange, setValues } = useForm(initialValues);
  const labelCSS = "flex flex-col";
  const inputCSS = "border rounded-sm p-2 w-full placeholder:text-sm mt-2";
  const radioInputCSS = "mt-2";

  const bankDetails = [
    { label: "Name", name: "name", value: "" },
    { label: "Account Number", name: "accountNumber", value: "" },
    { label: "Branch Name", name: "branchName", value: "" },
    { label: "IFSC Code", name: "ifscCode", value: "" },
  ];

  const renderInput = (field) => {
    switch (field.type) {
      case "text":
      case "email":
      case "password":
      case "date":
        return (
          <div key={field.name} className="">
            <label htmlFor={field.name} className={labelCSS}>
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={values[field.name]}
              onChange={handleChange}
              placeholder={field.label}
              className={inputCSS}
            />
          </div>
        );
      case "checkbox":
        return (
          <div key={field.name}>
            <label htmlFor={field.name} className={labelCSS}>
              <input
                type="checkbox"
                name={field.name}
                id={field.name}
                checked={values[field.name]}
                onChange={handleChange}
                className={inputCSS}
              />
              {field.label}
            </label>
          </div>
        );
      case "select":
        return (
          <div key={field.name}>
            <label htmlFor={field.name} className={labelCSS}>
              {field.label}
            </label>
            <select
              name={field.name}
              id={field.name}
              value={values[field.name]}
              onChange={handleChange}
              className={inputCSS}
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
          <div key={field.name} className="w-full">
            <label className={labelCSS}>{field.label}</label>
            <div className="flex flex-col">
              {field.options.map((option) => (
                <label key={option} className="flex items-center mt-2">
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
          <div
            key={field.label}
            className="form-group flex items-center justify-center flex-col"
          >
            <label className="font-body text-xl text-center pb-10">
              {field.label}
            </label>
            <div className="form-group-fields grid grid-cols-3 grid-rows-7 gap-8 ">
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
    const data = values;
    console.log("submitted values:", data);
    setValues(initialValues);
  };

  return (
    <>
      <div className="flex justify-between md:items-center md:text-center h-full w-screen md:px-12 md:py-4 px-4 py-2">
        <button className="border rounded-lg px-2 bg-gray-300 w-fit">
          <svg
            fill="#000000"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
            stroke="#000000"
            transform="rotate(90)"
            className="md:h-[24px] md:w-[24px] h-[18px] w-[18px]"
          >
            <path
              id="XMLID_30_"
              d="M154.394,325.606C157.322,328.535,161.161,330,165,330s7.678-1.465,10.607-4.394l75-75 c5.858-5.857,5.858-15.355,0-21.213c-5.858-5.857-15.356-5.857-21.213,0L180,278.787V15c0-8.284-6.716-15-15-15 c-8.284,0-15,6.716-15,15v263.787l-49.394-49.394c-5.858-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213 L154.394,325.606z"
            />
          </svg>
        </button>
        <div className="flex justify-center items-center text-center w-fit">
          <h1 className="md:text-xl font-bold flex justify-between">
            {formTitle}
          </h1>
        </div>
        <div className="w-fit">Request ID:{requestID}</div>
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
          <div className="border-2 md:mx-20 gap-4 flex flex-col p-4 rounded">
            <h1 className="md:text-lg">Bank Details</h1>
            <div className="flex sm:flex-row flex-col gap-4">
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
        <div className="md:col-span-2 lg:col-span-4 flex justify-end">
          <button
            type="submit"
            className="border rounded-md px-8 py-1 text-sm bg-gray-200"
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
              {note.map((note) => {
                return <li key={note}>{note}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicForm;
