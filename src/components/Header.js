import React, { useState } from "react";
import "../styles/header.css";
import logoHeaderDesktop from "../assets/logo-header-desktop.png";
import searchIcon from "../assets/search-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faUserCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import ModalNavHeaderMobile from "./ModalNavHeaderMobile";

function Header() {
  const [estadoModal, cambiarEstadoModal] = useState(false);

  return (
    <header>
      {/* ESTE ES EL HEADER DESKTOP QUE SE VA A UTILIZAR PARA ESCRITORIO */}
      <div className="header-desktop">
        <div className="barra-superior-header">
          <p className="texto-barra-superior">
            3 cuotas sin interés con todas las tarjetas de crédito | Envío
            gratis a todo el país desde $40.000
          </p>
        </div>
        <div className="nav-container-desktop">
          <div className="logo-header-desktop">
            {/* ESTA IMAGEN DEL LOGO DE DESKTOP QUE LLEVA VARIAS MEDIAQUERIES */}
            <img
              src={logoHeaderDesktop}
              className="img-logo-header-desktop"
              alt="logo del header"
            />
          </div>
          <div className="nav-desktop">
            <ul className="ul-nav-desktop">
              <li className="li-nav-desktop">Jeans</li>
              <li className="li-nav-desktop">Shorts</li>
              <li className="li-nav-desktop">Camperas</li>
              <li className="li-nav-desktop">Ofertas</li>
            </ul>
          </div>
          <div className="search-container">
            <form
              action="https://www.google.com/search"
              method="get"
              className="search-form-desktop"
            >
              <input
                type="text"
                className="input-search-desktop"
                placeholder="Buscar"
              />
              <button type="submit" className="search-button-desktop">
                <img src={searchIcon} alt="icono de busqueda" />
              </button>
            </form>
          </div>
          <div className="nav-buttons-desktop">
            <button className="profile-button-desktop">
              <FontAwesomeIcon icon={faUserCircle} className="fa-xl" />
            </button>
            <button className="compras-button-desktop">
              <FontAwesomeIcon icon={faBagShopping} className="fa-xl" />
            </button>
          </div>
        </div>
      </div>
      {/* ESTE ES EL HEADER MOBILE QUE SE VA A MOSTRAR PARA LOS CELULARES */}
      <div className="header-mobile">
        <div className="barra-superior-header">
          <p className="texto-barra-superior">
            3 cuotas sin interés con todas las tarjetas de crédito
          </p>
          <p className="texto-barra-superior">
            Envío gratis a todo el país desde $40.000
          </p>
        </div>
        <nav className="container-header-mobile">
          <div className="nav-button-mobile-container">
            <button className="nav-button-mobile">
              <FontAwesomeIcon
                onClick={() => cambiarEstadoModal(!estadoModal)}
                icon={faBars}
                className="fa-xl"
              />
              <ModalNavHeaderMobile
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
              ></ModalNavHeaderMobile>
            </button>
          </div>
          <div className="logo-mobile">
            <img src={logoHeaderDesktop} className="img-logo-mobile" alt="" />
          </div>
          <div className="compras-button-mobile">
            <FontAwesomeIcon icon={faBagShopping} className="fa-xl" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
