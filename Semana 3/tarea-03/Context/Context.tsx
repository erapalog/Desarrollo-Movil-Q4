import React, { createContext } from "react";
import { Usuario } from "../Models/Usuario";

export const Content = createContext({
    isDarkTheme: false,
    toggleTheme: ()=> {},
    nombre:'',
    apellido: '',
    correo: '',
    telefono:'',
    fechaNacimiento:'',
    addUsuario: ()=>{},
    listaUsuario: [] as Usuario[],
    setNombre : (nombre:string) => {},
    setApellido : (apellido:string) => {},
    setCorreo : (correo:string) => {},
    setTelefono : (telefono:string) => {},
    setFechaNacimiento : (fechaNacimiento:string) => {},
});