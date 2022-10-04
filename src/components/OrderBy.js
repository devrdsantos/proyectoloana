function OrderBy(props) {
    const handleChange = (e) =>{
        props.ordenar(e)
    }
     return (
    <div className="principal_countainer">
        <div className="filtrar_por">
            <span> Filtrar por: </span>
        </div>
        <div>
            <select
            className="menu"
            defaultValue="relevante"
            name="select"
            onChange={handleChange}>
                <option value="relevante"> Mas relevante </option>
                <option value="ascendente"> Menor precio </option>
                <option value="descendente"> Mayor precio </option>
            </select>
        </div>
    </div>
);
}

export default OrderBy;