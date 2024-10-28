import { createContext, useEffect } from "react";

export const ContextAlumnos = createContext({

    alumnos: [{id:0, nombre:''}],
    agregar: (nombre:any)=>{}
})