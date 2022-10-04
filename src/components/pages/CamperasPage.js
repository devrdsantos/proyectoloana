import React, { useState } from "react";
import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";
import Cards from "../Cards";
import OrderBy from "../OrderBy";
import {Data} from "../data/Data"
function CamperasPage() {
  const data = Data.camperasPage;
  const [products, setProducts] =useState(data);
  const userDatos = [...products];
    const ordenar = (e) => {
      const ordenAsc = (arr) => arr.sort((a, b) => a.price - b.price);
      const ordenDes = (arr) => arr.sort((a, b) => b.price - a.price );
      switch (e.target.value) {
        case "ascendente":
          setProducts(ordenAsc(userDatos));
          break;
      case "descendente":
          setProducts(ordenDes(userDatos));
          break;
      default:
          setProducts(data);
      }
    }
  return (
    <>
      <PageSectionImage
        ImgPantalones={ImagePantalones}
        h1PageSection={"CAMPERAS"}
      />
      <OrderBy ordenar={ordenar}  />
      <Cards data={products} />
    </>
  );
}
export default CamperasPage;
