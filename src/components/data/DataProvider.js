import React,{useState, createContext} from "react";
import { Data } from "./Data";
export const DataContext = createContext();

export const DataProvider = (props)=>{
    const data = Data.pantalonesPage;
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
        <DataContext.Provider value={{
           ordenar,
           products
        }}>
            {props.children}
        </DataContext.Provider>
        )
}
