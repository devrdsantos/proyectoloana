import React,{useState,useEffect , createContext} from "react";
import { Data } from "./Data";
export const DataContext = createContext();

export const DataProvider = (props)=>{
    const [productos, SetProductos] = useState([]);
    const [products, setProducts] =useState([productos]);
    const ordenar = (e) => {
      const ordenAsc = (arr) => arr.sort((a, b) => a.price - b.price);
      const ordenDes = (arr) => arr.sort((a, b) => b.price - a.price );

      switch (e.target.value) {
          case "ascendente":
              setProducts([...ordenAsc(products)]);
              break;
          case "descendente":
              setProducts([...ordenDes(products)]);
              break;
          default:
              setProducts([...ordenAsc(productos)]);
              return;}}
    useEffect(() => {
        const {pantalonesPage} = Data;
        (pantalonesPage)?SetProductos(pantalonesPage):SetProductos([]) 
    },[])
    return (
        <DataContext.Provider value={{
           productos,
           ordenar,
           products
        }}>
            {props.children}
        </DataContext.Provider>
        )
}
