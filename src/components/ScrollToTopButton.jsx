import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#819A91] text-white p-2 rounded-full shadow-lg hover:bg-[#6c837a] transition z-50"
        title="Yukarı Çık"
      >
        <ChevronUpIcon className="h-6 w-6" />
      </button>
    )
  );
}

export default ScrollToTopButton;
