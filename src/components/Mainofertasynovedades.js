import React from "react";
import "../styles/mainofertasynovedades.css";
import {Link} from "react-router-dom"
function Mainofertasynovedades() {
  return (
    <div className="mainofertasynovedades-container">
      <div className="container-button-mainofertasynovedades">
        <Link to="/ofertas">
        <button className="button-ofertas-main"></button>
        <p className="p-mainofertasynovedades">OFERTAS</p>
        </Link>
      </div>
      <div className="container-button-mainofertasynovedades">
        <Link to="/novedades">
        <button className="button-novedades-main"></button>
        <p className="p-mainofertasynovedades">NOVEDADES</p>
        </Link>
      </div>
    </div>
  );
}

export default Mainofertasynovedades;
