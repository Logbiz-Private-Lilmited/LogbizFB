import React from "react";

const VideoPlayback = () => {
  return (
    <>
      <div className="flex gap-2 font-semibold">
        <button className="rounded-md w-fit bg-black text-white p-2.5">
          What we <span className="text-customOrange">do</span>?
        </button>
        <button className="rounded-md w-fit bg-[#D9D9D9] text-black p-2.5">
          How it <span className="text-customOrange">works</span>
        </button>
      </div>
      <div className="flex gap-4 mt-4 md:flex-row flex-col">
        <div className="border rounded-md md:w-3/4 w-full h-[430px] border-black"></div>
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
