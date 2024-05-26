import React from "react";

const Stats = () => {
  const stats = [
    { title: "Happy Customers", count: "1M" },
    { title: "Logistics Service Providers", count: "1K" },
    { title: "Connections", count: "200" },
  ];
  return (
    <div className="bg-black w-full md:w-2/5 lg:w-1/4 2xl:h-[440px] h-[400px] rounded-[30px] text-start flex justify-evenly flex-col px-10">
      {stats.map((item) => {
        return (
          <div className="text-white" key={item.title}>
            <h1 className="lg:text-6xl text-5xl font-bold">
              {item.count}
              <span className="text-customOrange">+</span>
            </h1>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
