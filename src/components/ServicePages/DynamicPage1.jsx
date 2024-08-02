import React , {useEffect} from "react";
import ServiceCard from "./ServiceCard";
import Dropdown from "./Dropdown";
import PLImg1 from "/src/assets/ServicePages/PartLoadImg1.png"
import PLImg2 from "/src/assets/ServicePages/PartLoadImg2.png"
import PLImg3 from "/src/assets/ServicePages/PartLoadImg3.png"

const PLImgs = [PLImg1,PLImg2,PLImg3]


export default function DynamicPage1(props){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const details = [...props.Data]

    return(
        <div>
            <div className="flex max-[435px]:flex-col justify-between">
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
                    <p className="font-semibold block text-nowrap p-1">Sort by:</p>
                    <Dropdown/>
                </div>
            </div>
            <div className="p-4">
                <div>
                    <h1 className="text-2xl font-medium mb-6">On Demand</h1>
                    <div className="flex flex-wrap justify-stretch px-4 gap-8">
                        {
                            details.map((detail, index) => {
                                if (detail.on_demand == true){
                                    return(
                                        <ServiceCard
                                        key={index}
                                        Img={props.img}
                                        Name={detail.name}
                                        Location={detail.location}
                                        Model={detail.vehicle_model}
                                        Capacity={detail.capacity}
                                        BodyType={detail.body_type}
                                        />
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="text-2xl font-medium mb-6 ">Advanced Booking</h1>
                    <div className="flex flex-wrap px-4 gap-8">
                        {
                            details.map((detail, index) => {
                                if (detail.advanced === true){
                                    return(
                                        <ServiceCard
                                        key={index}
                                        Img={props.img}
                                        Name={detail.name}
                                        Location={detail.location}
                                        Model={detail.vehicle_model}
                                        Capacity={detail.capacity}
                                        BodyType={detail.body_type}
                                        />
                                    )
                                }
                            })
                        }
                    </div>
                    <div className=" flex justify-center items-center mt-4">
                        <p className="bg-[#f2f2f2] w-fit p-2 rounded-md font-semibold text-center">Did not find vehicle for your load destination?</p>
                        <img src="/src/assets/ServicePages/Question.png" alt="" className=" w-8 h-8 p-1 mt-1 inline-block" />
                    </div>
                    <div className="flex justify-center items-center mt-3">
                        <div className="border-2 border-black rounded-lg px-10 py-4 flex flex-col justify-center items-center w-max">
                            <div className=" flex justify-center items-center gap-2">
                                <h1 className="font-semibold text-center ">If you want Part Load Booking click here !</h1>
                                <img src="/src/assets/ServicePages/Question.png" alt="" className=" w-5 h-5 inline-block" />
                            </div>
                            <div className="mt-10">
                                {
                                    PLImgs.map((image,index) =>{
                                        return(
                                            <img src={image} alt="" key={index} className=" inline-block w-[120px] max-[435px]:w-[70px]" />
                                        )
                                    })
                                }
                            </div>
                            <div className="font-semibold mt-2">
                                Book cube space shipments on pallets for efficient transport 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}