import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MapComponent from "./mapcomponent";
import BackButton from "../../BackButtonModule/BackButton";
import { TransportDetails, LogisticsDetails, WarehouseServiceDetails } from "../data";

const TruckDetails = () => {
  const navigate = useNavigate();
  const { companyName } = useParams();
  const [data, setData] = useState(null);
  const [formState, setFormState] = useState({
    pickUpLocation: "",
    pickUpPincode: "",
    dropLocation: "",
    dropPincode: "",
  });

  // Dynamic rendering based on the slug
  useEffect(() => {
    let selectedTruck = TransportDetails.find((truck) => truck.companyName === companyName);

    if (!selectedTruck) {
      // Search in WarehouseServiceDetails
      selectedTruck = WarehouseServiceDetails.find((truck) => truck.companyName === companyName);
    }

    if (!selectedTruck) {
      // Search in LogisticsDetails
      selectedTruck = LogisticsDetails.find((truck) => truck.companyName === companyName);
    }

    if (selectedTruck) {
      setData(selectedTruck);
      // Initialize formState based on selectedTruck data
      setFormState({
        pickUpLocation: selectedTruck.pickUpLocation || "",
        pickUpPincode: selectedTruck.pickUpPincode || "",
        dropLocation: selectedTruck.dropLocation || "",
        dropPincode: selectedTruck.dropPincode || "",
      });
    }
  }, [companyName]);

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "pickUpPincode" || name === "dropPincode") {
      const numericValue = value.replace(/[^0-9]/g, "");
      if (numericValue.length > 6) return;
      setFormState((prevState) => ({
        ...prevState,
        [name]: numericValue,
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  // Utility classes
  const textBase = "text-black font-['SF Pro Display']";
  const textLarge = `${textBase} text-3xl font-medium`;
  const boxBase = "w-full h-auto bg-zinc-300 rounded-xl";
  const formInputBase = "w-full py-1 flex flex-col";
  const fieldPadding = "py-4";
  const inputBase = "w-full px-4 py-2 rounded-md border-2 border-stone-200";
  const buttonBase =
    "text-lg md:text-sm text-black font-bold text-center rounded py-3 px-4 border-2 border-black bg-white hover:bg-customOrange hover:border-customOrange hover:text-white transition-all duration-300";

  if (!data) return <h1>Loading....</h1>;

  return (
    <div className="p-4 w-full">
      <BackButton />
      <div className={`${textBase} text-4xl font-bold mb-4 text-center`}>
        {data.companyName || "M/S SK Transportation Company"}
        <div className={`${textBase} text-4xl font-medium mb-4`}>
          {data.registrationNumber || "Registration Number Here"}
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full md:w-3/4">
          {[
            { label: "Location", value: data.location || "N/A" },
            { label: "Pin code", value: data.pinCode || "N/A" },
            { label: "Body type", value: data.bodyType || "N/A" },
            { label: "Model", value: data.model || "N/A" },
          ].map(({ label, value }) => (
            <div
              className={`${fieldPadding} flex flex-col md:flex-row items-start`}
              key={label}
            >
              <div className={`${textLarge} md:w-2/5`}>{label}</div>
              <div className={`${textLarge} md:w-3/5`}>{value}</div>
            </div>
          ))}

          <div
            className={`${fieldPadding} flex flex-col md:flex-row items-start`}
          >
            <div className={`${textLarge} md:w-2/5`}>Volume Metrics</div>
            <div className="flex flex-col md:flex-row md:w-3/5 justify-between">
              {[
                { label: data.volumeMetrics?.L || "L" },
                { label: data.volumeMetrics?.W || "W" },
                { label: data.volumeMetrics?.H || "H" },
                { label: data.capacity || "Capacity" },
              ].map(({ label }) => (
                <div className={textLarge} key={label}>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {[
            {
              label: "Insurance active",
              value: data.insuranceActive ? "Yes" : "No",
            },
            {
              label: "Registration Certificate No",
              value: data.registrationCertificateNo || "N/A",
            },
          ].map(({ label, value }) => (
            <div
              className={`${fieldPadding} flex flex-col md:flex-row items-start`}
              key={label}
            >
              <div className={`${textLarge} md:w-2/5`}>{label}</div>
              <div className={`${textLarge} md:w-3/5`}>{value}</div>
            </div>
          ))}

          {/* Estimate box */}
          <div className="bg-neutral-50 rounded-xl border border-black w-full h-auto mb-4 p-4">
            <div className={`${textBase} text-2xl font-medium mb-4 w-full`}>
              Estimation
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {[
                {
                  title: "Load Pick Up Location",
                  fields: [
                    {
                      placeholder: "Enter pick up location",
                      name: "pickUpLocation",
                      value: formState.pickUpLocation,
                      maxLength: 100,
                    },
                    {
                      placeholder: "Enter pincode",
                      name: "pickUpPincode",
                      value: formState.pickUpPincode,
                      type: "number",
                      maxLength: 6,
                    },
                  ],
                },
                {
                  title: "Load Drop Location",
                  fields: [
                    {
                      placeholder: "Enter drop location",
                      name: "dropLocation",
                      value: formState.dropLocation,
                      maxLength: 100,
                    },
                    {
                      placeholder: "Enter pincode",
                      name: "dropPincode",
                      value: formState.dropPincode,
                      type: "number",
                      maxLength: 6,
                    },
                  ],
                },
              ].map(({ title, fields }) => (
                <div className="w-full md:w-1/2" key={title}>
                  <div className={`${textBase} text-2xl font-medium mb-4`}>
                    {title}
                  </div>
                  <div className="flex flex-col lg:flex-row gap-4">
                    {fields.map(
                      ({ placeholder, name, value, maxLength }, index) => (
                        <div className={formInputBase} key={index}>
                          <input
                            type={name.includes("Pincode") ? "number" : "text"}
                            placeholder={placeholder}
                            name={name}
                            className={inputBase}
                            value={value}
                            onChange={handleInputChange}
                            maxLength={maxLength}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 mb-4 lg:flex-row justify-between w-3/5">
              <div className={`${textBase} text-2xl font-normal`}>
                Distance:
              </div>
              <div className={`${textBase} text-2xl font-normal`}>Amount:</div>
              <button
                onClick={() => navigate("/signup")}
                className={buttonBase}
              >
                Book now
              </button>
            </div>
          </div>
          {/* Estimate box end */}
        </div>
        {/* Images Box */}
        <div className="flex flex-col w-full md:w-1/4 gap-4">
          {Array(2)
            .fill()
            .map((_, index) => (
              <div className={`${boxBase} p-4 my-auto`} key={index}>
                
                  {data.img?.[index] ? (
                    <img
                      src={data.img}
                      alt={`Asset Image ${data.companyName}`}
                      className="w-full rounded-xl h-96"
                    />
                  ) : (
                    "Images of LSP’s asset"
                  )}
                
              </div>
            ))}
        </div>
      </div>

      {/* Map section starts here */}
      <div className="w-full h-80 bg-gray-200 my-6 rounded-xl">
        <div className="h-full p-3">
          <MapComponent location={[12.91742, 77.67457]} zoom={10} />
          {/* Needs confirmation about location. Is it dynamic or Static */}
        </div>
      </div>
    </div>
  );
};

export default TruckDetails;
