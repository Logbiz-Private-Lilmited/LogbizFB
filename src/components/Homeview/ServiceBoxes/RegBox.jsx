import BoxesCarousel from "./BoxComponent";
import RegBoxData from "./RegistrationBoxData";

const RegBoxes = () => {
  const datasets = [{ title: "Looking to provide a logistic service ?", subtitle:"REGISTER", items: RegBoxData }];

  return (
    <div>
      <BoxesCarousel datasets={datasets} />
    </div>
  );
};

export default RegBoxes;
