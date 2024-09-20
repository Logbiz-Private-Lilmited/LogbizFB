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
        <div className="border rounded-md md:w-3/4 w-full h-[430px] border-black p-2 overflow-y-scroll">
          <ul className="list-none p-0 md:text-2xl text-xl">
            <li>
              At LogBiz, we streamline logistics by offering end-to-end freight
              solutions, including air, sea, and rail services, ensuring your
              goods reach their destination safely and on time. We specialize in
              optimizing supply chains with real-time tracking, inventory
              management, and seamless collaboration across the network.
            </li>
            <li className="text-customOrange">
              Our platform provides transparent, real-time tracking for all
              shipments, keeping you informed at every step. With a
              customer-first approach, we offer 24/7 support and customizable
              logistics plans to meet your unique business needs.
            </li>

            <li>
              We are also committed to sustainability, using eco-friendly
              practices to minimize our environmental impact.
            </li>
          </ul>
        </div>
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
