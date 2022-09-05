import React from "react";
import "../styles/modalnavheadermobile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../assets/search-icon.png";

const ModalNavHeaderMobile = ({ estado, cambiarEstado }) => {
  return (
    <div className="z-index-menu-nav-mobile">
      {estado && (
        <div className="overlay-modal-header">
          <div className="contenedor-modal-nav-header">
            <div className="contenedor-entry-user-mobile-header">
              <div className="entry-user-mobile-header">
                <button className="entry-user-modal-header-button">
                  <FontAwesomeIcon icon={faUserCircle} className="fa-xl" />{" "}
                  Ingresar / Registrarse
                </button>
              </div>
            </div>
            <div className="search-modal-nav-header mt-5 mb-5">
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
            <div className="contenedor-ul-modal-header">
              <ul className="ul-modal-header-mobile">
                <li>Jeans</li>
                <li>Shorts</li>
                <li>Camperas</li>
                <li>Ofertas</li>
              </ul>
            </div>
            <button
              onClick={() => cambiarEstado(false)}
              className="exit-button-modal-nav-header"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalNavHeaderMobile;
