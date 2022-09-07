import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
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
        talles: [38 , 40 , 42]
    },
    {
        id : 2,
        imagen : img2,
        alt:"img not found",
        title: "Jean Oxford",
        price: 2000,
        talles: [38 , 40 , 42]
    },
    {
        id : 3,
        imagen :img3,
        alt:"img not found",
        title: "Jean Oxford",
        price: 2500,
        talles: [38 , 40 , 42]
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
        talles: [38 , 40 , 42]
    },
    {
        id : 6,
        imagen :img3,
        alt:"img not found",
        title: "Jean Oxford",
        price: 2500,
        talles: [38 , 40 , 42]
    }];
    
function Cards () {
    return (
        <Contenedor>
            <TextoTitulo>ÚLTIMAS NOVEDADES</TextoTitulo>
            <TodoElContenido>
                <CardSection>
                {   
                datos.map(({id,talles,imagen,title,price,alt}) =>
                    <CardsHome key={id} >
                        <span>NEW</span>
                        <ul>
                            {talles.map(talle=>
                                <li>{talle}</li>
                            )}
                        </ul>
                        <button><FontAwesomeIcon icon={faHeart}/></button>
                        <figure>
                        <img src={imagen} alt={alt} />
                        </figure>
                        <h1>{title}</h1>
                        <p>${price}</p>
                    </CardsHome>
                    )
                }
                </CardSection>
            </TodoElContenido>
    </Contenedor>
        
    );
}
const Contenedor = styled.div`


`;

const TodoElContenido = styled.div `
`;
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
        ul{ 
            display: flex;
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
    span{
        background-color: red;
        position: absolute;
        color: white;
        padding: 5px 10px;
    }
    button{
        svg{ 
            margin: 0 0 0 0;
            color: black;
            width: 17.5px;
            height: 17.5px;
        }
        position:absolute;
        top : 8px;
        left: 219px;
        border-radius: 25px;
        &hover{
        }
    }
    img {
        width: 100%;
        height: 331px;
        cursor: pointer;
    }
    h1, p {
        text-align: center;
    }
    p , span, h1{
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 16px;
    }
    @media (max-width: 768px) {
    height: 180px;
    width: 100vw;
    min-width: 108px;
    max-width: 110px;
    span{
        display: none;
    }
    button{
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
    p{
        text-decoration: solid gray;

    }
  }

`;

export default Cards;