import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";
import OrderBy from "../OrderBy";
import Cards from "../Cards";
import { DataContext } from "../data/DataProvider";
import { useContext } from "react";

function PantalonesPage() {
  const {products, ordenar} = useContext(DataContext);
  const filtrado = products.filter(e=>e.seccion==="pantalonesPage");
  return (
    <>
        <PageSectionImage
          ImgPantalones={ImagePantalones}
          h1PageSection={"PANTALONES"}
        />
        <OrderBy ordenar={ordenar} />
      <Cards data={filtrado} />
    </>
  );
}

export default PantalonesPage;
