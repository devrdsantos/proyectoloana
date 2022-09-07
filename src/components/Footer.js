import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logoFooter from "../assets/logo-footer-negro.png";
import iconosFooter from "../assets/img__vectores/Vector.png";
import iconosFooter2 from "../assets/img__vectores/Vector_w.png";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row p-5 pb-2 bg-black text-white">
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="h3">
              <img src={logoFooter} width="200" alt="logo negro" />
            </div>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h5 mb-2 text-white">Productos</p>
            <div className="mb-2">
              <button className="button-decoration-footer text-secondary text-decoration-none">
                <Link className=" link-footer-color" to="/jeans">
                  Jeans
                </Link>
              </button>
            </div>
            <div className="mb-2">
              <button className=" button-decoration-footer text-secondary text-decoration-none">
                <Link className=" link-footer-color" to="/jeans">
                  Shorts
                </Link>
              </button>
            </div>
            <div className="mb-2">
              <button className=" button-decoration-footer text-secondary text-decoration-none">
                <Link className=" link-footer-color" to="/jeans">
                  Camperas
                </Link>
              </button>
            </div>
            <div className="mb-2">
              <button className=" button-decoration-footer text-secondary text-decoration-none">
                <Link className=" link-footer-color" to="/jeans">
                  Ofertas
                </Link>
              </button>
            </div>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h5 mb-2 text-white">Contacto</p>
            <div className="d-flex mb-2 text-secondary">
              {" "}
              <img
                className="font-size-footer-logo-direction-number"
                src={iconosFooter}
                alt="ubicacion"
              />{" "}
              <p className=" link-footer-color">Av. San Martín 1587, CABA</p>
            </div>
            <div className="d-flex mb-2 text-secondary">
              {" "}
              <img
                className="font-size-footer-logo-direction-number"
                src={iconosFooter2}
                alt="whatsapp"
              />{" "}
              <p className=" link-footer-color">(+54) 9 11-5674-1599</p>
            </div>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h5 text-white">Nuestras Redes</p>
            <div className="mb-2">
              <button className=" button-decoration-footer text-secondary text-decoration-none">
                <Link className=" link-footer-color" to="/jeans">
                  Facebook
                </Link>
              </button>
            </div>
            <div className="mb-2"></div>
            <div className="mb-2">
              <button className=" button-decoration-footer text-secondary text-decoration-none">
                <Link className=" link-footer-color" to="/jeans">
                  Instagram
                </Link>
              </button>
            </div>
            <div className="mb-2"></div>
          </div>
          <div className="text-center pt-3 col-xs-12">
            © Loana Jeans 2020 - 2022 . Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;