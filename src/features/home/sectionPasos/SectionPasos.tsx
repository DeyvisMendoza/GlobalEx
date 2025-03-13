import "./SectionPasos.css";
import img1 from "../../../assets/sectionPasos/img1.svg";
import img2 from "../../../assets/sectionPasos/img2.svg";
import img3 from "../../../assets/sectionPasos/img3.svg";
import { Button } from "@nextui-org/react";

export const SectionPasos = () => {
  return (
    <div className="sectionPasos">
      <h2 className="sectionPasosTitle">Tu camino con nosotros</h2>
      <div className="sectionPasosSteps">
        <div className="sectionPasosStep">
          <img className="sectionPasosImage" src={img1} alt="" />
          <div className="sectionPasosContent">
            <h3 className="sectionPasosSubtitle">Elige tu camino</h3>
            <p className="sectionPasosDescription">
              Cambios de divisas, transferencias o asesoramiento, disponibles
              online y en nuestras sucursales.
            </p>
          </div>
        </div>
        <div className="sectionPasosStep">
          <img className="sectionPasosImage" src={img2} alt="" />
          <div className="sectionPasosContent">
            <h3 className="sectionPasosSubtitle">Elige tu camino</h3>
            <p className="sectionPasosDescription">
              Cambios de divisas, transferencias o asesoramiento, disponibles
              online y en nuestras sucursales.
            </p>
          </div>
        </div>
        <div className="sectionPasosStep">
          <img className="sectionPasosImage" src={img3} alt="" />
          <div className="sectionPasosContent">
            <h3 className="sectionPasosSubtitle">Elige tu camino</h3>
            <p className="sectionPasosDescription">
              Cambios de divisas, transferencias o asesoramiento, disponibles
              online y en nuestras sucursales.
            </p>
          </div>
        </div>
      </div>
      {/* <button className="sectionPasosButton">INICIAR OPERACION</button> */}
      <Button className="sectionPasosButton">INICIAR OPERACION</Button>
    </div>
  );
};
