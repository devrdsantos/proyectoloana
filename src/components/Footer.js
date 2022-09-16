import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logoFooter from "../assets/logonegrofooter.png";
import iconosFooter from "../assets/img__vectores/location.png";
import iconosFooter2 from "../assets/img__vectores/whatsapp.png";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      {/* FOOTER DESKTOP */}
      <div className="container-fluid footer-desktop">
        <div className="row p-5 pb-2 bg-black text-white">
          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="h3">
              <img src={logoFooter} width="200" alt="logo negro" />
            </div>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="div-p-footer-masinformacion mb-3">
              <p className="h5 mb-2 text-white p-masinformacion-footer">
                MÁS INFORMACIÓN
              </p>
            </div>
            <div className="position-relative mb-4">
              <div className="border-bottom-masinformacion"></div>
            </div>
            <div className="mb-2">
              <button className="button-decoration-footer text-secondary text-decoration-none">
                <Link className=" link-footer-color" to="/jeans">
                  Sobre nosotros
                </Link>
              </button>
            </div>
            <div className="mb-2">
              <button className=" button-decoration-footer text-secondary text-decoration-none">
                <Link className=" link-footer-color" to="/jeans">
                  FAQ
                </Link>
              </button>
            </div>
            <div className="mb-2">
              <button className=" button-decoration-footer text-secondary text-decoration-none">
                <Link className=" link-footer-color" to="/jeans">
                  Ayuda
                </Link>
              </button>
            </div>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-3">
            <div className="div-p-footer-contacto mb-3">
              <p className="h5 text-white">CONTACTO</p>
            </div>
            <div className="position-relative mb-4">
              <div className="border-bottom-contacto"></div>
            </div>
            <div className="d-flex mb-2 text-secondary">
              {" "}
              <img
                className="font-size-footer-logo-direction-number"
                src={iconosFooter}
                alt="ubicacion"
              />{" "}
              <p className=" link-footer-color">
                Av. San Martín 1587, CABA, Buenos Aires
              </p>
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

          <div className="col-xs-12 col-md-6 col-lg-3 ">
            <div className="div-p-footer-seguinos mb-3 padding-seguinos">
              <p className="h5 text-white ">SEGUINOS</p>
            </div>
            <div className="position-relative mb-4">
              <div className="border-bottom-seguinos"></div>
            </div>
            <div className="mb-2">
              <button className=" button-decoration-footer padding-seguinos text-secondary text-decoration-none">
                <Link className=" link-footer-color" to="/jeans">
                  Facebook
                </Link>
              </button>
            </div>
            <div className="mb-2"></div>
            <div className="mb-2">
              <button className=" padding-seguinos button-decoration-footer text-secondary text-decoration-none">
                <Link className=" link-footer-color" to="/jeans">
                  Instagram
                </Link>
              </button>
            </div>
            <div className="mb-2"></div>
          </div>
          <div className="pl-5 pt-3 col-xs-12 text-center">
            © Loana Jeans 2020 - 2022 . Todos los derechos reservados.
          </div>
        </div>
      </div>


      {/* FOOTER MOBILE */}
      <div className="container-fluid bg-black footer-mobile">

        <div className="d-flex justify-content-between">
            
          <div className="d-flex flex-column color-footer-mobile m-3 p-1 " >
            <p className="border-bottom border-white ">Contacto</p>
            <p>Av. San Martín 1587, CABA, Buenos Aires</p>
            <p>(+54) 9 11-5674-1599</p>
          </div>
          <div className="d-flex flex-column color-footer-mobile m-3 p-1 " >
            <p className="border-bottom border-white">Seguinos</p>
            <div className="d-flex flex-column">
              <button className=" button-decoration-footer text-secondary text-decoration-none">
                <Link className=" link-footer-color" to="/">
                  Instagram
                </Link>
              </button>
              <button className=" button-decoration-footer text-secondary text-decoration-none">
                <Link className=" link-footer-color" to="/">
                  Facebook
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center pt-3 copyright-footer-mobile">
          {" "}
          © Loana Jeans 2020 - 2022 . Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;