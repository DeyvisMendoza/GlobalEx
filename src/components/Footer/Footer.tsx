import img1 from "../../assets/Footer/img1.svg";

import linkedin from "../../assets/Footer/in.svg";
import fb from "../../assets/Footer/fb.svg";
import ig from "../../assets/Footer/ig.svg";

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerAbout">
          <div className="footerLogo">
            <img src={img1} alt="GlobalEX Logo" className="logoImage" />
          </div>
          <p className="footerDescription">
            GlobalEX es un líder en servicios financieros con 20 años de
            experiencia, especializado en cambio de divisas y transferencias
            nacionales.
          </p>
        </div>
        <div className="footerHours">
          <h4>Horario de atención:</h4>
          <h4>Lunes a Viernes de 8:30 am a 6:00 pm</h4>
          <h4>Sábados de 8:30 am a 1:00 pm.</h4>
        </div>
        <div className="footerHours">

          <h4>Horario de atención:</h4>
          <h4>Lunes a Viernes de 8:30 am a 6:00 pm</h4>

          <h4>Sábados de 8:30 am a 1:00 pm.</h4>
        </div>
        <div className="footerSocialAndContact">
          <div className="socialIcons">
            <i className="socialIcon">
              <img src={linkedin} alt="LinkedIn" className="iconImage" />
            </i>
            <i className="socialIcon">
              <img src={fb} alt="Facebook" className="iconImage" />
            </i>
            <i className="socialIcon">
              <img src={ig} alt="Instagram" className="iconImage" />
            </i>
          </div>
          <div className="contactInfo">
            <div className="contactItem">
              <i className="contactIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="30"
                  viewBox="0 0 33 30"
                  fill="none"
                >
                  <path
                    d="M29.0684 21.6837C28.0448 20.7774 25.566 19.4549 24.3633 18.9219C22.7971 18.2286 22.6682 18.1719 21.4371 18.9757C20.616 19.5121 20.0701 19.9912 19.1091 19.8111C18.1481 19.631 16.0598 18.6154 14.2313 17.0136C12.4027 15.4118 11.18 13.5234 10.9744 12.6818C10.7688 11.8401 11.3231 11.366 11.9277 10.6427C12.7798 9.62318 12.7153 9.45325 11.987 8.07689C11.4192 7.00638 9.87035 4.84837 8.83524 3.95345C7.72793 2.99226 7.72793 3.16218 7.01444 3.42273C6.43357 3.6375 5.8763 3.89857 5.34961 4.20267C4.31836 4.80476 3.74602 5.30489 3.34576 6.05652C2.94551 6.80814 2.76569 8.57023 4.8327 11.8701C6.89971 15.17 8.3499 16.8573 11.3515 19.4877C14.3531 22.1181 16.6611 23.5324 20.0353 25.1954C24.2092 27.2497 25.8103 26.8493 26.6681 26.4981C27.526 26.1469 28.0977 25.6485 28.7841 24.7423C29.1311 24.2802 29.4288 23.791 29.6736 23.2809C29.9707 22.6562 30.1641 22.6562 29.0684 21.6837Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                </svg>
              </i>
              <p className="contactText">+51 997 501 235</p>
            </div>
            <div className="contactItem">
              <i className="contactIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="27"
                  viewBox="0 0 30 27"
                  fill="none"
                >
                  <path
                    d="M24.8438 5.375H5.15625C3.86183 5.375 2.8125 6.28442 2.8125 7.40625V19.5938C2.8125 20.7156 3.86183 21.625 5.15625 21.625H24.8438C26.1382 21.625 27.1875 20.7156 27.1875 19.5938V7.40625C27.1875 6.28442 26.1382 5.375 24.8438 5.375Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.5625 8.625L15 14.3125L23.4375 8.625"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
              <p className="contactText">DavidC@globalEX.pe</p>
            </div>
            <div className="contactItem">
              <i className="contactIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="25"
                  viewBox="0 0 28 25"
                  fill="none"
                >
                  <path
                    d="M14 11C14.9665 11 15.75 10.3284 15.75 9.5C15.75 8.67157 14.9665 8 14 8C13.0335 8 12.25 8.67157 12.25 9.5C12.25 10.3284 13.0335 11 14 11Z"
                    fill="black"
                  />
                  <path
                    d="M14 2C9.17547 2 5.25 5.21797 5.25 9.17188C5.25 11.0548 6.25133 13.5589 8.22609 16.6147C9.81203 19.0681 11.6468 21.2867 12.6011 22.3906C12.7623 22.5792 12.9732 22.7326 13.2165 22.8384C13.4599 22.9441 13.7288 22.9992 14.0016 22.9992C14.2745 22.9992 14.5434 22.9441 14.7868 22.8384C15.0301 22.7326 15.2409 22.5792 15.4022 22.3906C16.3548 21.2867 18.1913 19.0681 19.7772 16.6147C21.7487 13.5598 22.75 11.0558 22.75 9.17188C22.75 5.21797 18.8245 2 14 2ZM14 12.5C13.3078 12.5 12.6311 12.3241 12.0555 11.9944C11.4799 11.6648 11.0313 11.1962 10.7664 10.6481C10.5015 10.0999 10.4322 9.49667 10.5673 8.91473C10.7023 8.33279 11.0356 7.79824 11.5251 7.37868C12.0146 6.95912 12.6383 6.6734 13.3172 6.55764C13.9961 6.44189 14.6999 6.5013 15.3394 6.72836C15.9789 6.95542 16.5256 7.33994 16.9101 7.83329C17.2947 8.32664 17.5 8.90666 17.5 9.5C17.499 10.2954 17.1299 11.0579 16.4738 11.6204C15.8176 12.1828 14.9279 12.4991 14 12.5Z"
                    fill="white"
                  />
                </svg>
              </i>
              <p className="contactText">Madrid 167, Miraflores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const Footer1 = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerAbout">
          <img src={img1} alt="GlobalEX Logo" className="logoImage" />
          <p>GlobalEX es un líder en servicios financieros con 20 años de experiencia, especializado en cambio de divisas y transferencias nacionales.</p>
        </div>
        <div className="footerHours">
          <h4>Horario de atención:</h4>
          <h4>Lunes a Viernes de 8:30 am a 6:00 pm</h4>
          <h4>Sábados de 8:30 am a 1:00 pm.</h4>
        </div>
        <div className="footerSocialAndContact">
          <div className="socialIcons">
            <img src={linkedin} alt="LinkedIn" className="iconImage" />
            <img src={fb} alt="Facebook" className="iconImage" />
            <img src={ig} alt="Instagram" className="iconImage" />
          </div>
          <div className="contactInfo">
            <div className="contactItem">
              <svg /* SVG del ícono de teléfono */ />
              <p className="contactText">+51 997 501 235</p>
            </div>
            <div className="contactItem">
              <svg /* SVG del ícono de correo */ />
              <p className="contactText">DavidC@globalEX.pe</p>
            </div>
            <div className="contactItem">
              <svg /* SVG del ícono de ubicación */ />
              <p className="contactText">Madrid 167, Miraflores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
