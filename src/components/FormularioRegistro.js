import React, { useState } from "react";
import { Formik } from "formik";
import "../styles/formularioregistro.css";

function FormularioRegistro() {
  const [registroExitoso, cambiarRegistroExitoso] = useState(false);
  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        genero: "",
        email: "",
        contrasenia: "",
        repetircontrasenia: ""
      }}
      validate={(valores) => {
        let errores = {};

        // Validación del nombre
        if (!valores.nombre) {
          errores.nombre = "Por favor ingrese un nombre";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
          errores.nombre = "El nombre solo puede contener letras y espacios";
        }

        // Validación del apellido
        if (!valores.apellido) {
          errores.apellido = "Por favor ingrese un apellido";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
          errores.apellido =
            "El apellido solo puede contener letras y espacios";
        }

        // Validación del correo
        if (!valores.email) {
          errores.email = "Por favor ingrese un email";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            valores.email
          )
        ) {
          errores.email = "Por favor, ingrese un email válido";
        }

        // Validación de contraseña
        if (!valores.contrasenia) {
          errores.contrasenia = "Por favor ingrese una contraseña";
        } else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
            valores.contrasenia
          )
        ) {
          errores.contrasenia =
            "La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número";
        }

        // Validación de repetición de contraseña
        if (!valores.repetircontrasenia) {
          errores.repetircontrasenia = 'Por favor ingrese una contraseña'
        } else if (valores.contrasenia !== valores.repetircontrasenia) {
          errores.repetircontrasenia = 'Las contraseñas no coinciden'
        }

        return errores;
      }}
      onSubmit={(valores, { resetForm }) => {
        // 'Valores' obtiene cada valor de cada input, desde acá lo puedo mandar a una BD.
        console.log("formulario enviado");
        console.log(valores)
        // Reseteo formulario al tocar el botón registrarse
        resetForm();
        // Muestro párrafo de registro con exito
        cambiarRegistroExitoso(true);
        // Borro párrafo de registro con éxito después de 3 segundos
        setTimeout(() => cambiarRegistroExitoso(false), 3000);
      }}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
      }) => (
        <form className="form-registro" onSubmit={handleSubmit}>
          <label htmlFor="nombre" className="label-register">
            NOMBRE:
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            autoComplete="off"
            value={values.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.nombre && errors.nombre && (
            <div className="div-error">{errors.nombre}</div>
          )}

          <label htmlFor="apellido" className="label-register">
            APELLIDO:
          </label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            autoComplete="off"
            value={values.apellido}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.apellido && errors.apellido && (
            <div className="div-error">{errors.apellido}</div>
          )}

          <p className="titulo-genero">GÉNERO:</p>
          <select
            className="select-genero"
            name="genero"
            value={values.genero}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="masculino">MASCULINO</option>
            <option value="femenino" selected>
              FEMENINO
            </option>
          </select>

          <label htmlFor="email" className="label-register">
            EMAIL:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <div className="div-error">{errors.email}</div>
          )}

          <label htmlFor="contrasenia" className="label-register">
            CONTRASEÑA:
          </label>
          <input
            type="password"
            name="contrasenia"
            id="contrasenia"
            autoComplete="off"
            value={values.contrasenia}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.contrasenia && errors.contrasenia && (
            <div className="div-error">{errors.contrasenia}</div>
          )}

          <label htmlFor="repetircontrasenia" className="label-register">
            REPITA SU CONTRASEÑA:
          </label>
          <input
            type="password"
            name="repetircontrasenia"
            id="repetircontrasenia"
            autoComplete="off"
            value={values.repetircontrasenia}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.repetircontrasenia && errors.repetircontrasenia && <div className="div-error">{errors.repetircontrasenia}</div>}

          <input
            type="submit"
            value="REGISTRARSE"
            className="btn-registrarse"
          />
          {registroExitoso && (
            <p className="registro-exitoso">¡Se ha registrado con exito!</p>
          )}
        </form>
      )}
    </Formik>
  );
}

export default FormularioRegistro;
