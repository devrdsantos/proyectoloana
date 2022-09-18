import PageSectionImage from "../PageSectionImage";
import ImagePantalones from "../../assets/img-pantalones.png";

const ShortsPage = () => {
  return (
    <>
      <div>
        <PageSectionImage
          ImgPantalones={ImagePantalones}
          h1PageSection={"SHORTS"}
        />
      </div>
    </>
  );
};

export default ShortsPage;
