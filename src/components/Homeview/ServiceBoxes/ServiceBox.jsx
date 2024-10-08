import BoxesCarousel from "./BoxCarousel";
import boxData from "./ServiceBoxData";

const ServiceBoxes = () => {
  const datasets = [{ title: "Services Available", items: boxData }];

  return (
    <div id="servicesAvailable">
      <BoxesCarousel datasets={datasets} />
    </div>
  );
};

export default ServiceBoxes;
