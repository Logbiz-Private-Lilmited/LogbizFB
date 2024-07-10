import BoxesCarousel from "./BoxCarousel";
import RegBoxData from "./RegistrantionBoxData";

const RegBoxes = () => {
  const datasets = [
    {
      title: "Looking to provide a logistic service ?",
      subtitle: "REGISTER",
      items: RegBoxData,
      smalltitle:"Register in any of the services you would like to offer.",
    },
  ];

  return (
    <div>
      <BoxesCarousel datasets={datasets} />
    </div>
  );
};

export default RegBoxes;
