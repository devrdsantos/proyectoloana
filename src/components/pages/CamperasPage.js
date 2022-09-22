import React, { useContext } from "react";
import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";
import Cards from "../Cards";
import OrderBy from "../OrderBy";
import { DataContext } from "../data/DataProvider";
function CamperasPage() {
  const value = useContext(DataContext)
  const [productos] = value.productos;
  return (
    <>
      <PageSectionImage
        ImgPantalones={ImagePantalones}
        h1PageSection={"CAMPERAS"}
      />
      <OrderBy  />
      <Cards data={productos} />
    </>
  );
}
export default CamperasPage;
