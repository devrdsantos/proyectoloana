import React from "react";
import loana1 from "../assets/loana1.png"
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import "../styles/userregister.css"

function UserRegister() {
    return (
        <div className="contenedor-user-register">
        <div className="cont-principal">
            <div className="contenedor-logo">
                <img src={loana1} alt=""/>
            </div>
            <div className="contenedor-formulario">
                <div className="btn-registro-inicio-sesion">
                    <button className="btn-size-register">REGISTRARSE</button> <span className="linea-central-botones">|</span>
                    <button className="btn-size-register">INICIAR SESIÓN</button>
                </div>
                <div className="contenedor-seccion-principal">
                <form action="" className="form-registro" method="post">
                    <label className="label-mail-contrasenia" for="email">DIRECCIÓN DE E-MAIL:</label>
                    <input type="email" name="email" id="email" autocomplete="off"/>
                    <label for="contrasenia" className="label-mail-contrasenia">CONTRASEÑA:</label>
                    <input type="password" name="contrasenia" id="contrasenia" autocomplete="off"/>
                    <p href="#" class="link-cambio-contrasenia">¿Has olvidado tu contraseña?</p>
                    <input type="submit" value="INGRESAR" class="btn-ingresar"/>
                </form>
                <p className="parrafo-inicio-sesion-redes">TAMBIÉN PUEDES INICIAR SESIÓN CON</p>
                <div class="contenedor-google-facebook">
                    <span class="btn-ingreso-redes-sociales"> <img src={google} alt=""/><p href="">GOOGLE</p></span>
                    <span class="btn-ingreso-redes-sociales"> <img src={facebook} alt=""/><p href="">FACEBOOK</p> </span>
                </div>
            </div>
            </div>

        </div>
        </div>
    )

}

export default UserRegister;