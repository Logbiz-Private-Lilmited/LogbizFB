import React from "react";
import ServiceNavbar from "./ServiceNavbar";
import Dropdown from "./Dropdown";

export default function DistributionPage(props){
    const distdata=[
        {
            name:"Messan Logistics",
            service:"3PL Service",
            network:"Service Netowrk",
            rating:5,
            info:"www.google.com",
            select:"false"
        }
    ]

    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < rating; i++) {
          stars.push(<span key={i} className="text-yellow-500">★</span>);
        }
        return stars;
      };

    return(
        <div>
            <div className="flex max-[435px]:flex-col justify-between mb-6">
                <div className=" inline-flex gap-3">
                    <a href="/" className="bg-[#d9d9d9] h-fit align-middle p-3 rounded-lg">
                        <img src="/src/assets/BackArrow.png" alt="" />
                    </a>
                    <h1 className="text-3xl max-[435px]:text-xl font-bold">Available {props.Name} Services</h1>
                </div>
                <div className="inline-flex flex-row gap-3">
                    <div>
                        <input type="text" placeholder="Serach" className="border-2 border-[E9E7E2] p-1 rounded-md max-[435px]:w-[105px]" />
                    </div>
                    <h1 className="font-semibold block text-nowrap p-1">Sort by:</h1>
                    <Dropdown/>
                </div>
            </div>
            <div className="flex justify-center items-center mb-4">
                <div className="overflow-x-auto ">
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                        <th className="bg-black text-white text-lg md:text-xl lg:text-2xl p-2 md:p-3 rounded-l-full max-[435px]:rounded-l-2xl">Name</th>
                        <th className="bg-black text-white text-lg md:text-xl lg:text-2xl p-2 md:p-3">Service</th>
                        <th className="bg-black text-white text-lg md:text-xl lg:text-2xl p-2 md:p-3">Service Network</th>
                        <th className="bg-black text-white text-lg md:text-xl lg:text-2xl p-2 md:p-3">Rating</th>
                        <th className="bg-black text-white text-lg md:text-xl lg:text-2xl p-2 md:p-3">More Info</th>
                        <th className="bg-black text-white text-lg md:text-xl lg:text-2xl p-2 md:p-3 pr-3 max-[435px]:rounded-r-2xl">Select</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {distdata.map((item, idx) => (
                            <tr key={idx} className="bg-[#d9d9d960]">
                                <td className="p-2 md:p-3 text-center text-sm md:text-lg lg:text-xl">{item.name}</td>
                                <td className="p-2 md:p-3 text-center text-sm md:text-lg lg:text-xl">{item.service}</td>
                                <td className="p-2 md:p-3 text-center text-sm md:text-lg lg:text-xl">{item.network}</td>
                                <td className="p-2 md:p-3 text-center text-sm md:text-lg lg:text-xl">{renderStars(item.rating)}</td>
                                <td className="p-2 md:p-3 text-center text-sm md:text-lg lg:text-xl">
                                <a href={`http://${item.info}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                    View More
                                </a>
                                </td>
                                <td className="p-2 md:p-3 text-center text-sm md:text-lg lg:text-xl">
                                <div className="custom-checkbox">
                                    <input type="checkbox" id={`checkbox-${idx}`} checked={item.select === "true"} readOnly />
                                    <label htmlFor={`checkbox-${idx}`}></label>
                                </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
            <ServiceNavbar Data={props.Data} />
            <div className="flex justify-center items-center mt-8 mb-4">
                <div className="flex flex-col bg-black rounded-3xl p-4 w-fit justify-center items-center">
                    <img src="/src/assets/ServicePages/ULC.png" alt="" />
                    <h1 className="bg-[#ff6600] text-white p-3 w-fit text-center rounded-lg">ULC Hire</h1>
                </div>
            </div>
        </div>
    )
}