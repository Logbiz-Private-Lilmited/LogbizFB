import React,{useEffect} from "react";
import Dropdown from "./Dropdown";
import FreightCard from "./FreightCard";

export default function FreightPage(props){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const details =[...props.Data]

    return(
        <div>
            <div className="flex justify-between">
                <div className=" inline-flex gap-3">
                    <a href="/" className="bg-[#d9d9d9] h-fit align-middle p-3 rounded-lg">
                        <img src="/src/assets/BackArrow.png" alt="" />
                    </a>
                    <h1 className="text-3xl max-[435px]:text-xl font-bold">Available Freight Forwarding Services</h1>
                </div>
                <div className="flex flex-row flex-wrap gap-3">
                    <div>
                        <input type="text" placeholder="Serach" className="border-2 border-[E9E7E2] p-1 rounded-md" />
                    </div>
                    <h1 className="font-semibold block text-nowrap p-1">Sort by:</h1>
                    <Dropdown/>
                </div>
            </div>
            <div className="p-6">
                <h1 className="text-xl font-semibold">You can Quote for the following freights: </h1>
                <div className="p-5 flex flex-col justify-center items-center gap-5">
                    {
                        details.map((item, index) => {
                            return(
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