import React from "react";
import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/BackArrow.png";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

  return (
    <button
      onClick={handleBack}
      className="bg-[#d9d9d9] h-fit w-[50px] align-middle px-3 p-1.5 rounded-lg"
    >
      <img src={backArrow} alt="Back" />
    </button>
  );
};

export default BackButton;
