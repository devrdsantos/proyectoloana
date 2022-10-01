import img1 from "../assets/img_cards/modelo1.png";
import img2 from "../assets/img_cards/modelo2.png";
import img3 from "../assets/img_cards/modelo3.png";
import img4 from "../assets/img_cards/modelo4.png";
const datos = [
    {
      id: 1,
      imagen: [img1, img2, img3],
      alt: "img not found",
      title: "JEAN WOLLOCK",
      price: 1500,
      talles: [38, 40, 42, 44],
      descuentos: 10,
      nuevo: false,
    },
    {
      id: 2,
      imagen: [img2, img3, img1],
      alt: "img not found",
      title: "SHORT MALDIVA",
      price: 2000,
      talles: [38, 40, 42],
      descuentos: 0,
      nuevo: false,
    },
    {
      id: 3,
      imagen: [img3, img2, img1],
      alt: "img not found",
      title: "JEAN OCHENTOSO",
      price: 2500,
      talles: [38, 40, 42, 48],
      descuentos: 0,
      nuevo: true,
    },
    {
      id: 4,
      imagen: [img4, img2, img3],
      alt: "img not found",
      title: "CAMPERA TIFFANY",
      price: 2500,
      talles: [38, 40, 42],
      nuevo: true,
    },
  ];
  export default datos;