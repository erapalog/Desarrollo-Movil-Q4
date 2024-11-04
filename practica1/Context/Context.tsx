import { createContext } from "react";
import { Usuario } from "../Modelos/Usuario";

export const ContextA = createContext({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '',
    agregarUsuario: ()=>{},
    lista: [] as Usuario[],
    setNombre : (nombre:string)=>{},
    setApellido: (apellido:string)=>{},
    setCorreo: (correo:string)=>{},
    setTelefono: (telefono:string)=>{},
    setFechaNacimiento: (fechaNacimiento:string)=>{},
})