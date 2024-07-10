import React from "react";

const LogoWithLines = () => {
  return (
    <div className="flex items-center justify-center w-full my-6">
      <div className="flex-grow border-2 border-black mx-2"></div>
      <img src="/LogoText.svg" alt="Logo" className="h-16"></img>
      <div className="flex-grow border-2 border-black mx-2"></div>
    </div>
  );
};

export default LogoWithLines;
