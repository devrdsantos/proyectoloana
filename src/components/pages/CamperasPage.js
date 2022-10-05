import React, { useContext } from "react";
import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img_cards/camperas-seccion-img.jpg";
import Cards from "../Cards";
import OrderBy from "../OrderBy";
import { DataContext } from "../data/DataProvider";
function CamperasPage() {
  const {products, ordenar} = useContext(DataContext);
  const filtrado = products.filter(e=>e.seccion==="camperasPage")
  return (
    <>
      <PageSectionImage
        ImgPantalones={ImagePantalones}
        h1PageSection={"CAMPERAS"}
      />
      <OrderBy ordenar={ordenar}  />
      <Cards data={filtrado} />
    </>
  );
}
export default CamperasPage;
