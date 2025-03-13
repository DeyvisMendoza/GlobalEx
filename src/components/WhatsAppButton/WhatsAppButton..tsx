import "./WhatsAppButton.css";
import whatsappIcon from "../../assets//WhatsApp.svg.png"; 

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/1234567890", "_blank"); // Reemplaza con tu número de WhatsApp
  };

  return (
    <div className="whatsappButton" onClick={handleClick}>
      <img src={whatsappIcon} alt="WhatsApp" className="whatsappIcon" />
    </div>
  );
};
