import "./SectionBancos.css";

import logobcp from "../../../assets/bcp-4.svg";
import logointerbank from "../../../assets/interbank-sinfondo.png";
import logobbva from "../../../assets/bbva-2.svg";
import logoscotiabank from "../../../assets/scotiabank-5.svg";
import logobanbif from "../../../assets/banbif-1.svg";

export const SectionBancos = () => {
  return (
    <div className="banner">
      <h2>Transferencias inmediatas</h2>
      <div className="logo-container">
        <div className="logos">
          <img src={logobcp} alt="BCP" className="logo-bcp" />
          <img src={logointerbank} alt="Interbank" className="logo-interbank" />
          <img src={logobbva} alt="BBVA" className="logo-bbva" />
          <img
            src={logoscotiabank}
            alt="Scotiabank"
            className="logo-scotiabank"
          />
          <img src={logobanbif} alt="BanBif" className="logo-banbif" />
        </div>
        <div className="logo-text">
          <h3>20 minutos</h3>
        </div>
      </div>
    </div>
  );
};
