import React, { useState } from "react";
import "../styles/header.css";
import logoHeaderDesktop from "../assets/logoheadernuevo.png";
import searchIcon from "../assets/search-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import userVector from "../assets/img__vectores/user.svg";
import infoVector from "../assets/img__vectores/Info.svg";
import bagVector from "../assets/img__vectores/bag-2.svg";
import ModalNavHeaderMobile from "./ModalNavHeaderMobile";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <img
                src={logoHeaderDesktop}
                className="img-logo-header-desktop"
                alt="logo del header"
              />
            </Link>
          </div>
          <div className="nav-desktop">
            <ul className="ul-nav-desktop">
              <li className="li-nav-desktop">
                <Link to="/pantalones" className="link-style">
                  PANTALONES
                </Link>
              </li>
              <li className="li-nav-desktop">
                <Link to="/shorts" className="link-style">
                  SHORTS
                </Link>
              </li>
              <li className="li-nav-desktop">
                <Link to="/camperas" className="link-style">
                  CAMPERAS
                </Link>
              </li>
              <li className="li-nav-desktop">
                <Link to="/ofertas" className="orange-color-ofertas">
                  OFERTAS
                </Link>
              </li>
              <li className="li-nav-desktop">
                <Link to="/novedades" className="link-style">
                  NOVEDADES
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-buttons-desktop">
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
            <button className="profile-button-desktop">
              <Link to="/user">
                <img src={userVector} alt="logo del user" />
              </Link>
            </button>
            <button className="compras-button-desktop">
              <Link to="/faq">
                <img src={infoVector} alt="icono de ayuda" />
              </Link>
            </button>
            <button className="compras-button-desktop pe-5">
              <img src={bagVector} alt="icono de la bolsa de compras" />
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
            <div className="nav-button-mobile">
              <FontAwesomeIcon
                onClick={() => cambiarEstadoModal(!estadoModal)}
                icon={faBars}
                className="fa-xl"
              />
              <ModalNavHeaderMobile
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
              ></ModalNavHeaderMobile>
            </div>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              <img src={logoHeaderDesktop} className="img-logo-mobile" alt="" />
            </Link>
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
