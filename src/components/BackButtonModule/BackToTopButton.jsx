import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-14 right-8 bg-customOrange text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out"
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    )
  );
};

export default BackToTopButton;
