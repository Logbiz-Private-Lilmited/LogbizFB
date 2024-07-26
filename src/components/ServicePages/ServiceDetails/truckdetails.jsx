import React from "react";

const TruckDetails = () => {
  const textClass = "text-black font-['SF Pro Display'] w-1/2";
  const largeTextClass = `${textClass} text-3xl font-medium`;
  const smallTextClass = `${textClass} text-base font-normal text-neutral-700 leading-normal`;
  const boxClass = "w-full h-96 bg-zinc-300 rounded-2xl mb-4";
  const formInputClass = "w-full px-4 py-1 rounded-md border-2 border-stone-200 flex flex-col";

  return (
    <div className="container mx-auto p-4">
      <div className="w-full text-black text-4xl font-bold font-['SF Pro Display'] mb-4 text-center">
        M/S SK Transportation Company
        <div className="text-black text-4xl font-medium font-['SF Pro Display'] mb-4">
          HR55AL4900
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="flex items-center">
            <div className={largeTextClass}>Location</div>
            <div className={largeTextClass}>Gurgaon</div>
          </div>
          <div className="flex items-center">
            <div className={largeTextClass}>Pin code</div>
            <div className={largeTextClass}>635109</div>
          </div>
          <div className={largeTextClass}>Body type</div>
          <div className={largeTextClass}>Volume Metrics</div>
          <div className="flex">
            <div className={largeTextClass}>L</div>
            <div className={largeTextClass}>B</div>
            <div className={largeTextClass}>H</div>
          </div>
          <div className={largeTextClass}>Capacity</div>
          <div className={largeTextClass}>Insurance active</div>
          <div className={largeTextClass}>Yes</div>
          <div className={largeTextClass}>Registration Certificate No</div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <div className={boxClass}>
            <div className={`${textClass} text-3xl font-normal`}>Images of LSP’S asset</div>
          </div>
          <div className={boxClass}>
            <div className={`${textClass} text-3xl font-normal`}>Images of LSP’S asset</div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-50 rounded-3xl border border-black w-full h-auto mb-4 p-4">
        <div className={`${textClass} text-2xl font-medium mb-4 w-full`}>Estimation</div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className={`${textClass} text-2xl font-medium`}>Load Pick Up Location</div>
          <div className={formInputClass}>
            <div className={smallTextClass}>Pick up</div>
          </div>
          <div className={formInputClass}>
            <div className={smallTextClass}>Pincode</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className={`${textClass} text-2xl font-medium`}>Load Drop Location</div>
          <div className={formInputClass}>
            <div className={smallTextClass}>Pick up</div>
          </div>
          <div className={formInputClass}>
            <div className={smallTextClass}>Pincode</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className={`${textClass} text-2xl font-normal`}>Distance:</div>
          <div className={`${textClass} text-2xl font-normal`}>Amount:</div>
        </div>
        <div className="w-40 h-16 relative rounded border-2 border-black mb-4 mx-auto">
          <div className="absolute w-40 h-16 bg-white rounded"></div>
          <div className="absolute w-28 h-7 left-[34px] top-[18px] text-black text-xl font-bold">
            Book now
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckDetails;
