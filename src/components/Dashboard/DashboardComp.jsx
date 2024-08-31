import React from "react";

const DashboardComp = ({
  serviceName, //this is a company name where the request is sent
  requestId,
  status, //status of the application ex:Approval pending
  loadPickUpLocatoin,
  loadDropUpLocatoin,
  expectedPickUpDate,
  expectedQuote,
  freightType, // International or domestic
}) => {
  return (
    <div className="flex flex-col border rounded-lg md:p-6 md:mx-10 mx-2 p-4 md:gap-4 gap-2 bg-gray-50">
      <div className="flex justify-between md:flex-row flex-col">
        <div className="flex md:gap-4 items-start md:flex-row flex-col">
          <div className="text-lg font-semibold flex flex-col">
            Request sent to {serviceName}
            <span className="text-xs font-normal">{freightType} Freight</span>
          </div>{" "}
          <span className="border w-fit h-fit bg-customOrange text-white md:px-2.5 px-2 rounded-md md:text-base text-xs font-thin line-clamp-1">
            {status}
          </span>
        </div>{" "}
        <span>Request ID:{requestId}</span>
      </div>
      <div className="flex gap-2 flex-col">
        <div className="text-sm">
          Load Pick Up Location : {loadPickUpLocatoin}{" "}
        </div>
        <div className="text-sm">
          Load Pick Up Location : {loadDropUpLocatoin}
        </div>
        <div className="text-sm">
          Expected Pick Up Date : {expectedPickUpDate}
        </div>
        <div className="text-sm"> Expected Quote : {expectedQuote}</div>
      </div>
      <div className="w-full flex justify-end">
        <button className="border p-2 px-10 rounded-md bg-white">
          Download Invoice
        </button>
      </div>
    </div>
  );
};

export default DashboardComp;
