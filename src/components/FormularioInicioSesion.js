import React from "react";
import { Link } from "react-router-dom";
import "../styles/formularioregistro.css";

function FormularioInicioSesion() {
  return (
    <form className="form-registro">
      <label className="label-mail-contrasenia" htmlFor="email">
        DIRECCIÓN DE E-MAIL:
      </label>
      <input type="email" name="email" id="email" autoComplete="off" />

      <label htmlFor="contrasenia" className="label-mail-contrasenia">
        CONTRASEÑA:
      </label>
      <input
        type="password"
        name="contrasenia"
        id="contrasenia"
        autoComplete="off"
      />

      <Link to={'#'} className="link-cambio-contrasenia">
        ¿Has olvidado tu contraseña?
      </Link>

      <Link to={'/'}><input type="submit" value="INGRESAR" className="btn-registrarse" /></Link>
    </form>
  );
}

export default FormularioInicioSesion;
