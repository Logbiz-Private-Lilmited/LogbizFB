import BoxesCarousel from "./BoxComponent";
import boxData from "./ServiceBoxData";

const ServiceBoxes = () => {
  const datasets = [{ title: "Services Available", items: boxData }];

  return (
    <div>
      <BoxesCarousel datasets={datasets} />
    </div>
  );
};

export default ServiceBoxes;