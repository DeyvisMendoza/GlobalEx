import "./SectionPregunta.css";

import img1 from "../../../assets/sectionPregunta/img1.svg";
import img2 from "../../../assets/sectionPregunta/img2.svg";
import img3 from "../../../assets/sectionPregunta/img3.svg";
import img4 from "../../../assets/sectionPregunta/img4.svg";
import img5 from "../../../assets/sectionPregunta/img5.svg";
import { Button } from "@nextui-org/react";

export const SectionPregunta = () => {
  return (
    <div className="sectionMain">
      <div className="sectionPregunta">
        <div className="sectionPreguntaContainer">
          <div className="sectionPreguntaHeader">
            <h2 className="sectionPreguntaTitle">¿Por qué elegir GlobalEX?</h2>
            <div className="benefitsGrid">
              <div className="benefitItemOne">
                <img
                  src={img1}
                  alt="Tasas Competitivas"
                  className="benefitImage"
                />
                <div className="benefitItemOneText">
                  <h4 className="benefitTitle">Tasas Competitivas</h4>
                  <p className="benefitDescription">
                    Maximiza el valor de tu dinero con las mejores tasas del
                    mercado.
                  </p>
                </div>
              </div>
              <div className="benefitItemTwo">
                <img
                  src={img2}
                  alt="Conveniencia Total"
                  className="benefitImage"
                />{" "}
                <div className="benefitItemOneText">
                  <h4 className="benefitTitle">Conveniencia Total</h4>
                  <p className="benefitDescription">
                    Accede a nuestros servicios 24/7, en línea o en nuestras
                    sucursales.
                  </p>
                </div>
              </div>

              <div className="benefitItemThree">
                <img
                  src={img3}
                  alt="Seguridad y Transparencia"
                  className="benefitImage"
                />
                <div className="benefitItemOneText">
                  <h4 className="benefitTitle">Seguridad y Transparencia</h4>
                  <p className="benefitDescription">
                    Disfruta de transacciones rápidas y seguras con total
                    confianza.
                  </p>
                </div>{" "}
              </div>

              <div className="benefitItemFour">
                <img
                  src={img4}
                  alt="Atención al Cliente de Primera"
                  className="benefitImage"
                />
                <div className="benefitItemOneText">
                  <h4 className="benefitTitle">
                    Atención al Cliente de Primera
                  </h4>
                  <p className="benefitDescription">
                    Recibe apoyo cercano y soluciones personalizadas de nuestro
                    equipo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src={img5} alt="" className="sectionPreguntaImage" />
        </div>
        {/* <div className="sectionPreguntaFooter">
          <button className="operationButton">INICIAR OPERACION</button>
        </div> */}
        <Button className="operationButton">INICIAR OPERACION</Button>
      </div>
    </div>
  );
};
