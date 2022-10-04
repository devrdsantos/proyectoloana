import React, { useContext } from "react";
import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";
import Cards from "../Cards";
import OrderBy from "../OrderBy";
import { DataContext } from "../data/DataProvider";
function OfertasPage() {
  const {products, ordenar} = useContext(DataContext) 
  return (
    <div>
      <PageSectionImage
        ImgPantalones={ImagePantalones}
        h1PageSection={"OFERTAS"}
      />
      <OrderBy ordenar={ordenar} />
      <Cards data={products} />
    </div>
  );
}

export default OfertasPage;
