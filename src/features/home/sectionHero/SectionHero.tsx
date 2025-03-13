import { Button } from "@nextui-org/react";
import "./SectionHero.css";
import fondo from "../../../assets/sectionHero/fondo.svg";
import sinperson from "../../../assets/sectionHero/sitperson.png";
import { Cambios } from "./components/cambios/Cambios";

export const SectionHero = () => {
  return (
    <div className="sectionHero">
      <div className="heroContent">
        <div className="heroTextContainer">
          <h1 className="heroTitle">
            CON <span className="highlight">GLOBALEX</span>,{" "}
            <span className="highlight">ENVIAR Y RECIBIR</span> DINERO ES TAN
            FÁCIL COMO CONFIAR EN LOS{" "}
            <span className="highlight">EXPERTOS</span>
          </h1>
        </div>
        <Button className="heroButton">Contáctanos</Button>
      </div>
      <div className="heroImages">
        <img src={fondo} alt="Background" className="backgroundImage" />
        <Cambios />
        <img src={sinperson} alt="Person Sitting" className="personImage" />
      </div>
    </div>
  );
};
