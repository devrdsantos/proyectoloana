import React from "react";
import "../styles/nosotros.css";

function Nosotros() {
  return (
    <section className="about">
      <div className="container flex items-centre">
        <div className="left flex-1 justify-right">
          <img
            src="/img/logo-footer-negro.png"
            height="400px"
            alt="profile pic"
          />
        </div>
        <div className="right flex-1">
          <h1 className="sobre-h1">
            Sobre <span class="sobreSspan">Nosotros</span>
          </h1>
          <p className="textoSobreNosotros">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            adipisci distinctio obcaecati aliquid, quia tempora quis optio
            repudiandae officia earum? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </p>
          <div className="socials">
            <div className="enlaces-nosotros">
              <img src="img/instagram.png" width="40px" />
            </div>
            <div className="enlaces-nosotros">
              <img src="img/tw.png" width="40px" />
            </div>
            <div className="enlaces-nosotros">
              <img src="img/facebook.png" width="40px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
