import styled from "styled-components";
import img1 from "../assets/img_cards/imagen-1.jpg";
import img2 from "../assets/img_cards/imagen-2.jpg";
import img3 from "../assets/img_cards/imagen-3.jpg";
import Card from "./Card";
const datos = [
    {   
        id : 1,
        imagen :img1,
        alt:"img not found",
        title: "Jean Oxford",
        price: 1500,
        talles: [38 , 40 , 42 , 44],
        descuentos : 10,
        nuevo : false
    },
    {
        id : 2,
        imagen : img2,
        alt:"img not found",
        title: "Jean Oxford",
        price: 2000,
        talles: [38 , 40 , 42],
        descuentos : 0,
        nuevo : false
    },
    {
        id : 3,
        imagen :img3,
        alt:"img not found",
        title: "Jean Oxford",
        price: 2500,
        talles: [38 , 40 , 42 , 48],
        descuentos :0,
        nuevo: true
    },
    {
        id : 4,
        imagen :img3,
        alt:"img not found",
        title: "Jean Oxford",
        price: 2500,
        talles: [38 , 40 , 42],
        nuevo:true
    },
    {
        id : 5,
        imagen :img3,
        alt:"img not found",
        title: "Jean Oxford",
        price: 2500,
        talles: [38 , 40 , 42 , 46],
        descuentos : 15,
        nuevo:true
    },
    {
        id : 6,
        imagen :img3,
        alt:"img not found",
        title: "Jean Oxford",
        price: 2500,
        talles: [38 , 40 , 42],
        descuentos : 0,
        nuevo: true
    }];
    
function Cards (props) {
    return (
        <div>
            <TextoTitulo>ÚLTIMAS NOVEDADES</TextoTitulo>
            <div>
                <CardSection >
                {
                datos.map(({id,talles,imagen,title,price,alt,descuentos,nuevo}) =>
                    <Card
                    key={id}
                    talles={talles}
                    img ={imagen}
                    titulo = {title}
                    precio = {price}
                    descripcion= {alt}
                    descuentos={descuentos}
                    nuevo={nuevo}
                    cartel={props.showcartel}
                    />
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
        gap: 15px;
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
export default Cards;