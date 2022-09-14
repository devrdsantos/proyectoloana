import React from "react";
import "../styles/modalnavheadermobile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../assets/search-icon.png";
import { Link } from "react-router-dom";

const ModalNavHeaderMobile = ({ estado, cambiarEstado }) => {
  return (
    <div className="z-index-menu-nav-mobile">
      {estado && (
        <div className="overlay-modal-header">
          <div className="contenedor-modal-nav-header">
            <div className="contenedor-entry-user-mobile-header">
              <div className="entry-user-mobile-header mb-5">
                <button className="entry-user-modal-header-button">
                  <FontAwesomeIcon icon={faUserCircle} className="fa-xl" />{" "}
                  Ingresar / Registrarse
                </button>
              </div>
            </div>
            <div className="search-modal-nav-header">
              <form
                action="https://www.google.com/search"
                method="get"
                className="search-form-mobile"
              >
                <input
                  type="text"
                  className="input-search-mobile"
                  placeholder="Buscar"
                />
                <button type="submit" className="search-button-mobile">
                  <img src={searchIcon} alt="icono de busqueda" />
                </button>
              </form>
            </div>
            <div className="contenedor-ul-modal-header">
              <ul className="ul-modal-header-mobile">
                <li>
                  <Link
                    onClick={() => cambiarEstado(false)}
                    to="/jeans"
                    className="link-style"
                  >
                    JEANS
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => cambiarEstado(false)}
                    to="/shorts"
                    className="link-style"
                  >
                    SHORTS
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => cambiarEstado(false)}
                    to="/camperas"
                    className="link-style"
                  >
                    CAMPERAS
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => cambiarEstado(false)}
                    to="/ofertas"
                    className="link-style"
                  >
                    OFERTAS
                  </Link>
                </li>
              </ul>
            </div>
            <button
              onClick={() => cambiarEstado(false)}
              className="exit-button-modal-nav-header"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
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
