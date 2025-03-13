import { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import upArrowIcon from "../../assets/up-arrow.svg"; // Cambia la ruta a tu ícono de flecha

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className="scrollToTopButton" onClick={scrollToTop}>
        <img
          src={upArrowIcon}
          alt="Scroll to Top"
          className="scrollToTopIcon"
        />
      </div>
    )
  );
};
