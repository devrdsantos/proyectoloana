import React from "react";
import "../styles/filtros.css";


function Filtros({ordenar}) {
    const handleChange = (e) =>{
        ordenar(e)
    };

    return(
        <div className="principal_countainer">
        <div className="filtrar_por">
            <span> Filtrar por: </span>
        </div>
        <div>
            <select
                className="menu"
                defaultValue="relevante"
                ame="select"
                onChange={handleChange}
            >
                    <option value="relevante">Mas relevante</option>
                    <option value="descendente">Mayor precio</option>
                    <option value="ascendente">Menor precio</option>
            </select>
        </div>
    </div>

    )};

export default Filtros;