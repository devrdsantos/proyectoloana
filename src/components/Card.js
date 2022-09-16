import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {ReactComponent as FlechaIzquierda} from './../assets/iconmonstr-angel-left-thin.svg';
import {ReactComponent as FlechaDerecha} from './../assets/iconmonstr-angel-right-thin.svg';

const Card = (props) => {
    const nextImg = () => {
        console.log("siguiente imagen");
    }
    const previusImg = () => {
        console.log("anterior imagen");
    }
    return (
        <CardsHome color={props.descuentos === 0 || props.descuentos === undefined ? "red" : "#FFCE51;"} >
            {(props.cartel===props.nuevo || props.cartel=== undefined)
            ?<span>{props.descuentos === 0 || props.descuentos === undefined ? "NEW" 
            :`-${props.descuentos}%`}</span>:null}
            <ul>
                {props.talles.map((talle , index)=>
                    <li key={index}>{talle}</li>
                )}
            </ul>
            <button className="heart-icon"><FontAwesomeIcon icon={faHeart}/></button>
            <div className="contenedor-imagen">
                <img src={props.img} alt={props.descripcion} />
                <Controles className="hidenbutton">
                    <Boton onClick={previusImg}>
                        <FlechaIzquierda />
                    </Boton>
                    <Boton onClick={nextImg} derecho>
                        <FlechaDerecha />
                    </Boton>
                </Controles>
            </div>
            <h1>{props.titulo}</h1>
            <p>${props.precio}</p>
        </CardsHome>
    )
}
const CardsHome = styled.div `
    width: 258px;
    height: 450px;
    min-width: 258px;
    margin: 20px 20px 0 20px;
    position: relative;
    & ul{ 
        display: none;
        align-items: center;
        position: absolute;
        top: 281px;
        width: 100%;
        height: 50px;
        background-color: #5654;
        margin: 0;
        padding: 0;
        }
        ul li{
            padding: 4px 8px 4px 8px ;
            margin-left: 12px;
            background-color: white;
            display: inline-block;
        }
    & span{
        ${props=>(props.color) ?`background-color:${props.color}`: null };
        position: absolute;
        color: white;
        padding: 5px 10px;
    }
    .heart-icon{
        position:absolute;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #E2E2E2;
        top : 8px;
        left: 219px;
        width: 30px;
        height: 30px; 
        border: 0px;
    }
    .heart-icon svg {
            width: 17.5px;
            height: 17.5px;
            padding: 0;
            margin: 0;
            color: rgba(0, 0, 0, 0.4);
    }
    .contenedor-imagen{
        width: 100%;
        height: 331px;
        
    }
    & img {
        width: 100%;
        height :100%;
    }
    & h1, p {
        text-align: center;
    }
    & p , span, h1{
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 16px;
    }
    .hidenbutton{
        visibility: hidden;
    }
    &:hover{
        .hidenbutton {
            visibility: visible;
        }
        ul{
            display: flex;
        }
    }
    @media (max-width: 768px) {
    height: 180px;
    width: 100vw;
    min-width: 108px;
    max-width: 110px;
    .contenedor-imagen{
        width: 100%;
        height: 108px;
    }
    span{
        display: none;
    }
    & button{
        display: none;
    }
    img{
        width: 100%;
        height: 108px;
        border-radius: 15px;
    }
    h1, p{
        font-size: 12px;
    } 
    p{  display: flex;
        justify-content: center;
        width: 50%;
        background-color: gray;

    }
    ul , .heart-icon{
        display: none;
    }
    &:hover{
        ul{
            display: none;
        }
    }
  }
`;
const Controles = styled.div`
    position: absolute;
    top: 31px;
    width: 100%;
    height: 269px;
    pointer-events: none;  
`;
const Boton = styled.button`
    position: absolute;
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    & svg {
        color: rgba(0, 0, 0, 0.4);
    }
    ${props=>(props.derecho)?"right: 0":"left:0"}
`;
export default Card;