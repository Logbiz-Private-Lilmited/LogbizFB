import React, { useEffect } from "react";
import Dropdown from "./Dropdown";
import FreightCard from "./FreightCard";
import BackButton from "../BackButtonModule/BackButton";

export default function FreightPage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const details = [...props.Data]

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-col md:flex-row inline-flex gap-3">
                    <BackButton />
                    <h1 className="max-[435px]:text-lg mb-0 leading-none">Available Freight Forwarding Services</h1>
                </div>
                <div className="flex flex-row flex-wrap gap-3 min-w-fit">
                    <div>
                        <input type="text" placeholder="Serach" className="border-2 border-[E9E7E2] p-1 rounded-md" />
                    </div>
                    <p className="font-semibold block text-nowrap p-1">Sort by:</p>
                    <Dropdown />
                </div>
            </div>
            <div className="p-6 w-[96%] mx-auto">
                <h3 className="my-6 font-semibold">You can Quote for the following freights: </h3>
                <div className="mx-auto flex flex-col justify-center items-center gap-5">
                    {
                        details.map((item, index) => {
                            return (
                                <FreightCard
                                    key={index}
                                    Image={item.image}
                                    Name={item.type}
                                    Description={item.description}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}