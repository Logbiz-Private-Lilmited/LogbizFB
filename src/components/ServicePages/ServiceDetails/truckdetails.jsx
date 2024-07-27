import React from "react";
import { useNavigate } from "react-router-dom";
import MapComponent from "./mapcomponent";
import BackButton from "../../backbutton/BackButton";

const TruckDetails = ({ data = mockData }) => {
  const navigate = useNavigate();

  // Utility classes
  const textBase = "text-black font-['SF Pro Display']";
  const textLarge = `${textBase} text-3xl font-medium`;
  const textSmall = `${textBase} text-base font-normal text-neutral-700 leading-normal`;
  const boxBase = "w-full h-96 bg-zinc-300 rounded-2xl mb-4";
  const formInputBase = "w-full py-1 flex flex-col";
  const fieldPadding = "py-4";
  const inputBase = "w-full px-4 py-2 rounded-md border-2 border-stone-200";
  const buttonBase =
    "text-lg md:text-sm text-black font-bold text-center rounded py-3 px-4 border-2 border-black bg-white hover:bg-customOrange hover:border-customOrange hover:text-white transition-all duration-300";

  return (
    <div className="container mx-auto p-4">
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
          <div className="bg-neutral-50 rounded-3xl border border-black w-full h-auto mb-4 p-4">
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
                      value: data.pickUpLocation || "",
                    },
                    {
                      placeholder: "Enter pincode",
                      value: data.pickUpPincode || "",
                    },
                  ],
                },
                {
                  title: "Load Drop Location",
                  fields: [
                    {
                      placeholder: "Enter drop location",
                      value: data.dropLocation || "",
                    },
                    {
                      placeholder: "Enter pincode",
                      value: data.dropPincode || "",
                    },
                  ],
                },
              ].map(({ title, fields }) => (
                <div className="w-full md:w-1/2" key={title}>
                  <div className={`${textBase} text-2xl font-medium mb-4`}>
                    {title}
                  </div>
                  <div className="flex flex-col gap-4">
                    {fields.map(({ placeholder, value }, idx) => (
                      <div className={formInputBase} key={idx}>
                        <input
                          type="text"
                          placeholder={placeholder}
                          className={inputBase}
                          value={value}
                          readOnly
                        />
                      </div>
                    ))}
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
            .map((_, idx) => (
              <div className={boxBase} key={idx}>
                <div className={`${textBase} text-3xl font-normal text-center`}>
                  {data.assetImages?.[idx] || "Images of LSP’S asset"}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Map section starts here */}
      <div className="w-full h-80 bg-gray-200 my-6 rounded-xl">
        <div className="h-full p-3">
          <MapComponent location={[12.91742, 77.67457]} zoom={10} />
          {/* Needds confirmation about location. Is it dynamic or Static */}
        </div>
      </div>
    </div>
  );
};

// Mock data for development/testing
const mockData = {
  companyName: "M/S SK Transportation Company",
  registrationNumber: "",
  location: "Gurgaon",
  pinCode: "",
  bodyType: "Closed Body",
  model: "TATA 1109G LPT DCR49CBC 85B6M5XD 2022",
  volumeMetrics: {
    L: "Length",
    W: "Width",
    H: "Height",
  },
  capacity: "Capacity",
  insuranceActive: true,
  registrationCertificateNo: "H123ewds",
  pickUpLocation: "Pickup Location",
  pickUpPincode: "",
  dropLocation: "Drop Location",
  dropPincode: "",
  assetImages: ["Image1", "Image2"],
};

export default TruckDetails;
