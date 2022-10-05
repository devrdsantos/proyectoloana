import React from "react";
import "../styles/nosotros.css";
import facebook2 from "../assets/facebook2.png";
import instagram2 from "../assets/instagram.png";
import twiter from "../assets/tw.png";
import logoFooterNegro from "../assets/logo-footer-negro.png";

function Nosotros() {
  return (
    <section className="about">
      <div className="container flex items-centre">
        <div className="left flex-1 justify-right">
          <img src={logoFooterNegro} height="400px" alt="profile pic" />
        </div>
        <div className="right flex-1">
          <h1 className="sobre-h1">
            Sobre <span className="sobreSspan">Nosotros</span>
          </h1>
          <p className="textoSobreNosotros">
          We are a clothing store based in Buenos, Argentina that specializes in the sale of women's clothing.

          With over 5 years of experience, LoanaJeans is an energetic, fresh and vibrant team offering creative talent, industry knowledge and extremely high standards.
          </p>
          <div className="socials">
            <span className="enlaces-nosotros" href="#">
              <img src={instagram2} width="40px" alt="" />
            </span>
            <span className="enlaces-nosotros" href="#">
              <img src={twiter} width="40px" alt="" />
            </span>
            <span className="enlaces-nosotros" href="#">
              <img src={facebook2} width="40px" alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
