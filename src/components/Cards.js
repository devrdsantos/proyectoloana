import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {ReactComponent as FlechaIzquierda} from './../assets/iconmonstr-angel-left-thin.svg';
import {ReactComponent as FlechaDerecha} from './../assets/iconmonstr-angel-right-thin.svg';
import img1 from "../assets/img_cards/imagen-1.jpg";
import img2 from "../assets/img_cards/imagen-2.jpg";
import img3 from "../assets/img_cards/imagen-3.jpg";
const datos = [
    {   
        id : 1,
        imagen :img1,
        alt:"img not found",
        title: "Jean Oxford",
        price: 1500,
        talles: [38 , 40 , 42 , 44],
        descuentos : 10
    },
    {
        id : 2,
        imagen : img2,
        alt:"img not found",
        title: "Jean Oxford",
        price: 2000,
        talles: [38 , 40 , 42],
        descuentos : 0
    },
    {
        id : 3,
        imagen :img3,
        alt:"img not found",
        title: "Jean Oxford",
        price: 2500,
        talles: [38 , 40 , 42 , 48],
        descuentos :0
    },
    {
        id : 4,
        imagen :img3,
        alt:"img not found",
        title: "Jean Oxford",
        price: 2500,
        talles: [38 , 40 , 42]
    },
    {
        id : 5,
        imagen :img3,
        alt:"img not found",
        title: "Jean Oxford",
        price: 2500,
        talles: [38 , 40 , 42 , 46],
        descuentos : 15
    },
    {
        id : 6,
        imagen :img3,
        alt:"img not found",
        title: "Jean Oxford",
        price: 2500,
        talles: [38 , 40 , 42],
        descuentos : 0
    }];
    
function Cards (props) {
    const nextImg = () => {
        console.log("siguiente imagen");
    }
    const previusImg = () => {
        console.log("anterior imagen");
    }
    return (
        <div>
            <TextoTitulo>ÚLTIMAS NOVEDADES</TextoTitulo>
            <div>
                <CardSection>
                {
                datos.map(({id,talles,imagen,title,price,alt,descuentos}) =>
                    <CardsHome key={id} color={descuentos === 0 || descuentos === undefined ? "red" : "#FFCE51;"} >
                        {(props.showcartel)?<span >{descuentos === 0 || descuentos === undefined ? "NEW" : `-${descuentos}%`}</span>:null}
                        <ul>
                            {talles.map((talle , index)=>
                                <li key={index}>{talle}</li>
                            )}
                        </ul>
                        <button className="heart-icon"><FontAwesomeIcon icon={faHeart}/></button>
                        <div className="contenedor-imagen">
                            <img src={imagen} alt={alt} />
                            <Controles className="hidenbutton">
                                <Boton onClick={previusImg}>
                                    <FlechaIzquierda />
                                </Boton>
                                <Boton onClick={nextImg} derecho>
                                    <FlechaDerecha />
                                </Boton>
                            </Controles>
                        </div>
                        <h1>{title}</h1>
                        <p>${price}</p>
                    </CardsHome>
                    )
                }
                </CardSection>
            </div>
    </div>
        
    );
}
const CardSection = styled.section `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 100px ;
    @media (max-width: 768px) {
        gap: 30px;
    }
`;
const TextoTitulo = styled.h1 `
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 40px;
    display: flex;
    justify-content: start;
    margin: 75px 0 30px 0px;
`;
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
export default Cards;