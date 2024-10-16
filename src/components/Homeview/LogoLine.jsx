import React from "react";
import ScrollReveal from "scrollreveal";

const LogoWithLines = () => {
  ScrollReveal({ reset: true });
  ScrollReveal().reveal('.logo-line')

  return (
    <div className="flex items-center justify-center w-full my-6 logo-line">
      <div className="flex-grow border-2 border-black mx-2"></div>
      <img src="/LogoText.svg" alt="Logo" className="h-16"></img>
      <div className="flex-grow border-2 border-black mx-2"></div>
    </div>
  );
};

export default LogoWithLines;
