import { Button } from "@nextui-org/react";
import iconocambio from "../../../../../assets/Footer/iconodecambio.svg";
import "./Cambios.css";
import { FaDollarSign } from "react-icons/fa";

export const Cambios = () => {
  return (
    <div className="cambiosContainer">
      <div className="cambioRates">
        <div className="rateInfo">
          <h2 className="rateTitle">COMPRA</h2>
          <h2 className="rateValue">S/ 3.7590</h2>
        </div>
        <div className="rateInfo">
          <h2 className="rateTitle">VENTA</h2>
          <h2 className="rateValue">S/ 3.7660</h2>
        </div>
      </div>
      <div className="envioSection">
        <div className="currencyInfo">
          <p className="currencyLabel">USD</p>
          {/* <i className="currencyIcon"><FaDollarSign />
          </i> */}
          <FaDollarSign size={35} className="iconos" />
        </div>
        <div className="envioInfo">
          <h2 className="envioTitle">ENVÍAS DÓLARES</h2>
          <h2 className="envioValue">1,000.00</h2>
        </div>
      </div>
      <div className="iconContainer">
        <img src={iconocambio} alt="" className="cambioIcon" />
      </div>
      <div className="recibeSection">
        <div className="currencyInfo">
          <p className="currencyLabel">PEN</p>
          {/* <i className="currencyIcon"><FaDollarSign />
          </i> */}
          <FaDollarSign size={35} />
        </div>
        <div className="recibeInfo">
          <h2 className="recibeTitle">RECIBES SOLES</h2>
          <h2 className="recibeValue">3,759.00</h2>
        </div>
      </div>

      <Button className="cambioButton">INCIAR OPERACIÓN</Button>
    </div>
  );
};
