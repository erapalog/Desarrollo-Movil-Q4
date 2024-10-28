import { createContext } from "react";

export const ContextContador = createContext({
    count:0,
    sumar: ()=>{},
    restar: ()=>{},
})