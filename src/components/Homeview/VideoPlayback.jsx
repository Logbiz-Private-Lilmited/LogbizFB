import React from "react";

const VideoPlayback = () => {
  return (
    <>
      <div className="flex w-full gap-2 md:px-8 lg:px-10 px-6 font-semibold">
        <button className="rounded-md w-fit bg-black text-white p-2.5">
          What we <span className="text-customOrange">do</span>?
        </button>
        <button className="rounded-lg w-fit bg-[#D9D9D9] text-black p-2.5">
          How it <span className="text-customOrange">works</span>
        </button>
      </div>
      <div className="flex w-full gap-4 p-4 md:px-8 lg:px-10 px-6 md:flex-row flex-col">
        <div className="border rounded-md md:w-3/4 w-full md:h-80 h-40 border-black"></div>
        <div className="border rounded-md md:w-1/2 w-full">
          <iframe
            src="https://www.youtube.com/embed/Nuv4Iba7ttM?si=onVHmKtW5I8haeWQ?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full rounded-md"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default VideoPlayback;
