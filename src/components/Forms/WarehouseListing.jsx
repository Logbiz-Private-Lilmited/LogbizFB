import axios from "axios";
import React, { useState } from "react";

const WarehouseListing = () => {
  const errorCSS = "text-red-500 text-sm p-1"; //the predefined css
  const labelCSS = "flex flex-col";
  const inputCSS = "border rounded-sm p-2 w-full placeholder:text-sm mt-2";
  const requestId = 1234567; // this can be passed through the props

  const initialFormData = {
    // initial form data and its types since we have different input fields
    name: { value: "", type: "text" },
    email: { value: "", type: "email" },
    mobile: { value: "", type: "tel" },
    address: { value: "", type: "text" },
    locationOfProperty: { value: "", type: "text" },
    forPalleteStorage: { value: "", type: "text" },
    sizeOfWarehouse: { value: "", type: "text" },
    preferredGoogleLocation: { value: "", type: "text" },
    reserve: { value: "", type: "text" },
    columnSpan: { value: "", type: "text" },
    floor: { value: "", type: "text" },
    designLiveLoad: { value: "", type: "text" },
    addRoofLoad: { value: "", type: "text" },
    dockOpening: { value: "", type: "text" },
    cLoadColumns: { value: "", type: "text" },
    roof: { value: "", type: "text" },
    reverseCanopy: { value: "", type: "text" },
    ventilation: { value: "", type: "text" },
    finishedFloorLevel: { value: "", type: "text" },
    louvers: { value: "", type: "text" },
    mainlinePower: { value: "", type: "text" },
    staffSeatingCapacity: { value: "", type: "number" },
    parkingSpace: { value: "", type: "number" },
    insulation: { value: "", type: "text" },
    expectedDeliveryDate: { value: "", type: "date" },
    fireNOC: { value: "Yes", type: "select", options: ["Yes", "No"] },
    warehouseCompliance: {
      value: "Yes",
      type: "select",
      options: ["Yes", "No"],
    },
    fireHydrant: { value: "Yes", type: "select", options: ["Yes", "No"] },
    powerBackDGSet: { value: "", type: "text" },
    warehouseStructure: {
      value: "PEB",
      type: "select",
      options: ["PEB", "Non-PEB"],
    },
    turningRadius44TnVeh: { value: "", type: "text" },
    heightFromCentre: { value: "", type: "text" },
    heightFromSides: { value: "", type: "text" },
    plinthHeight: { value: "", type: "text" },
    noOfDocks: { value: "", type: "number" },
    waterStorageCapacity: { value: "", type: "text" },
    boundaryWall: { value: "PEB", type: "select", options: ["PEB", "Non-PEB"] },
    warehousePicture: { value: "", type: "file" },
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({}); // this is for handling the input error

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: { ...formData[name], value: files ? files[0] : value },
    });
  };

  const validate = () => {
    // this function is to make sure no input field is empty
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key].value)
        newErrors[key] = `${key
          .replace(/([A-Z])/g, " $1") //since the intial form data is camel case converting it to normal
          .replace(/^./, (str) => str.toUpperCase())} is required`;
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = axios.post(
          "http://localhost:3001/api/warehouse", //this is for testing the form
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Form Data Submitted:", formData);
        const initialFormDataClone = { ...initialFormData };
        setFormData(initialFormDataClone);
        setErrors({});
      } catch (err) {
        console.log("error submiting form:", err);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div className="flex justify-between flex-col md:flex-row md:items-center h-full w-screen md:px-12 md:py-4 px-4 py-2">
        <div className="flex gap-2">
          <button className="border rounded-lg px-2 bg-gray-300">
            <svg
              fill="#000000"
              height="24px"
              width="24px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
              stroke="#000000"
              transform="rotate(90)"
            >
              <path
                id="XMLID_30_"
                d="M154.394,325.606C157.322,328.535,161.161,330,165,330s7.678-1.465,10.607-4.394l75-75 c5.858-5.857,5.858-15.355,0-21.213c-5.858-5.857-15.356-5.857-21.213,0L180,278.787V15c0-8.284-6.716-15-15-15 c-8.284,0-15,6.716-15,15v263.787l-49.394-49.394c-5.858-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213 L154.394,325.606z"
              />
            </svg>
          </button>
          <span className="md:text-xl font-bold">Rent a Warehouse</span>
        </div>
        <div>
          <h1 className="text-sm">RequestID: {requestId}</h1>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="h-full w-full px-8 md:px-28 grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 md:justify-around py-4 gap-4 md:gap-6 lg:gap-10 items-center text-justify"
      >
        {Object.keys(formData).map((key, index) => (
          <label htmlFor={key} className={labelCSS} key={index}>
            {key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
            {formData[key].type === "select" ? (
              <select
                name={key}
                className={inputCSS}
                value={formData[key].value}
                onChange={handleChange}
              >
                {formData[key].options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={formData[key].type}
                name={key}
                className={inputCSS}
                placeholder={key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
                value={formData[key].type !== "file" ? formData[key].value : ""}
                onChange={handleChange}
              />
            )}
            {errors[key] && <span className={errorCSS}>{errors[key]}</span>}
          </label>
        ))}
        <div className="md:col-span-2 lg:col-span-4 flex justify-end ">
          <button
            type="submit"
            className="border rounded-md px-8 py-1 text-sm bg-gray-400 "
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default WarehouseListing;
