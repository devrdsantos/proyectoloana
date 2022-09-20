import React from "react";
import "../styles/whyloana.css";
import argenMap from "../assets/argenmap.png";
import produccionResponsable from "../assets/produccionresponsable.png";
import orgAmbientalistas from "../assets/orgambientalistas.png";

function Whyloana() {
  return (
    <div className="whyloana">
      <h1 className="h1whyloana">¿POR QUÉ LOANA JEANS?</h1>
      <div className="container-item-whyloana">
        <div className="div-item-whyloana madeinargentina">
          <img
            className="img-item-whyloana1 mb-4 "
            src={argenMap}
            alt="icono de mapa de argentina"
          />
          <div className="div-container-h3-p-whyloana">
            <h3 className="h3-items-whyloana h3-items-whyloana1">
              {" "}
              MADE IN ARGENTINA
            </h3>
            <p className="p-whyloana">
              Estamos orgullosos de ser una empresa nacional que le da trabajo a
              más de 20 familias argentinas.
            </p>
          </div>
        </div>
        <div className="div-item-whyloana produccionresponsable">
          <img
            className="img-item-whyloana2 mb-3"
            src={produccionResponsable}
            alt="icono de produccion"
          />
          <div className="div-container-h3-p-whyloana">
            <h3 className="h3-items-whyloana h3-items-whyloana2">
              PRODUCCION RESPONSABLE
            </h3>
            <p className="p-whyloana">
              Para la confección de nuestras prendas trabajamos con materiales
              biodegradables.{" "}
            </p>
          </div>
        </div>
        <div className="div-item-whyloana colaboracionambientalista">
          <img
            className="img-item-whyloana3 mb-3"
            src={orgAmbientalistas}
            alt="icono org ambientalistas"
          />
          <div className="div-container-h3-p-whyloana3">
            <h3 className="h3-items-whyloana h3-items-whyloana3">
              COLABORAMOS CON ORGANIZACIONES AMBIENTALISTAS
            </h3>
            <p className="p-whyloana">
              Cada fin de mes el 5% de nuestras ventas va destinado a
              organizaciones ambientalistas que ayudan a restaurar nuestros
              bosques.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyloana;
