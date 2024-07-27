import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <a href="/" className="bg-[#d9d9d9] block w-12 h-auto p-2 rounded-lg">
      <img src="/src/assets/BackArrow.png" alt="" />
    </a>
  );
};

export default BackButton;
