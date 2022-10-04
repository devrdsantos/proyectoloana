import React, { useState } from "react";
import FormularioInicioSesion from "../FormularioInicioSesion";
import FormularioRegistro from "../FormularioRegistro.js";
//import loana1 from "../../assets/loana1.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import "../../styles/enterprofile.css";
import { Link } from "react-router-dom";

function EnterProfile() {
  const [formularioRegistro, cambiarFormularioRegistro] = useState(false);
  return (
    <div className="App">
      <div className="contenedor-user-register">
        <div className="cont-principal">
          {/* <div className="contenedor-logo">
            <img src={loana1} alt="" />
          </div> */}

          <div className="contenedor-formulario">
            <div className="btn-registro-inicio-sesion">
              <button
                className="btn-size-register"
                onClick={() => {
                  cambiarFormularioRegistro(true);
                }}
              >
                REGISTRARSE
              </button>{" "}
              <span className="linea-central-botones">|</span>
              <button
                className="btn-size-register"
                onClick={() => {
                  cambiarFormularioRegistro(false);
                }}
              >
                INICIAR SESIÓN
              </button>
            </div>

            <div className="contenedor-seccion-principal">
              {formularioRegistro ? (
                <FormularioRegistro />
              ) : (
                <FormularioInicioSesion />
              )}
            </div>

            <p className="parrafo-inicio-sesion-redes">
              TAMBIÉN PUEDES INICIAR SESIÓN CON
            </p>

            <div className="contenedor-google-facebook">
              <a href="https://google.com" className="btn-ingreso-redes-sociales link-cambio-contrasenia">
                {" "}
                <img src={google} alt="" />
                <p href="">GOOGLE</p>
              </a>
              <a href="https://facebook.com" className="btn-ingreso-redes-sociales link-cambio-contrasenia">
                {" "}
                <img src={facebook} alt="" />
                <p href="">FACEBOOK</p>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterProfile;
