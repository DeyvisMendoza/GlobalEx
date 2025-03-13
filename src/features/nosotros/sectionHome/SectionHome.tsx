import "./SectionHome.css";
import img1 from "../../../assets/nosotros/sectionHome/3d_character_206.jpg";

export const SectionHome = () => {
  return (
    <div className="sectionHomeMain">
      <div className="sectionHome">
        <img src={img1} alt="" className="sectionHomeImage" />
        <div className="sectionHomeContent">
          <h2 className="sectionHomeTitle">Acerca de GlobalEX.</h2>
          <p className="sectionHomeDescription">
            Con más de 20 años de experiencia, GlobalEX se ha consolidado como
            un referente en el mundo financiero. Nacimos con la misión de
            facilitar el cambio de divisas y simplificar las transacciones
            internacionales, adaptándonos constantemente a un mercado en
            evolución. <br />
            <br /> Ofrecemos tasas de cambio competitivas, un servicio al
            cliente excepcional, y la seguridad que necesitas en cada operación.
            En GlobalEX, tu satisfacción es nuestra prioridad, y nos esforzamos
            por ser tu aliado de confianza en cada paso de tu camino financiero.
          </p>
        </div>
      </div>
    </div>
  );
};
