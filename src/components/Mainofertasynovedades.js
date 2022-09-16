import React from "react";
import "../styles/mainofertasynovedades.css";

function Mainofertasynovedades() {
  return (
    <div className="mainofertasynovedades-container">
      <div className="container-button-mainofertasynovedades">
        <button className="button-ofertas-main"></button>
        <p className="p-mainofertasynovedades">OFERTAS</p>
      </div>
      <div className="container-button-mainofertasynovedades">
        <button className="button-novedades-main"></button>
        <p className="p-mainofertasynovedades">NOVEDADES</p>
      </div>
    </div>
  );
}

export default Mainofertasynovedades;
