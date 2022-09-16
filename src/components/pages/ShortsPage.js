const datos = [
  {   
    id : 1,
    alt:"img not found",
    title: "Jean Oxford",
    price: 1500,
    descuentos : 10,
    talles: [38 , 40 , 42 , 44]
  },
  {
    id : 2,
    alt:"img not found",
    title: "Jean Oxford",
    price: 2000,
    descuentos : 0,
    talles: [38 , 40 , 42]
  },
  {
    id : 3,
    alt:"img not found",
    title: "Jean Oxford",
    price: 2500,
    descuentos :0,
    talles: [38 , 40 , 42 , 48]
  },
  {
    id : 4,
    alt:"img not found",
    title: "Jean Oxford",
    price: 2500,
    talles: [38 , 40 , 42]
  },
  {
    id : 5,
    alt:"img not found",
    title: "Jean Oxford",
    price: 2500,
    descuentos : 15,
    talles: [38 , 40 , 42 , 46]
  },
  {
    id : 6,
    alt:"img not found",
    title: "Jean Oxford",
    price: 2500,
    descuentos : 0,
    talles: [38 , 40 , 42]
  }];
  function ShortsPage() {
    let input = 46;
  return (
    <div>
      {datos.map(e=>
      e.talles.map(talle=><h1>{(talle===input)?e.id : null}</h1>
        )
        )
      }
    </div>
  );
}

export default ShortsPage;
