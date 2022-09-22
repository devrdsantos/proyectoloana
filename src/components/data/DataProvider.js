import React,{useState, useEffect, createContext} from "react";
import { Data } from "./Data";
export const DataContext = createContext();

export const DataProvider = (props)=>{
    const [productos, SetProductos] = useState([]);
    useEffect(() => {
        const producto = Data;
        (producto)?SetProductos(producto):SetProductos([]); 
    },[])
    const value = {
        productos: [productos]
    }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
        )
}
