import { View, Text } from 'react-native'
import React, { ReactNode, useState, useContext, useEffect, Children } from 'react'
import { Usuario } from '../Modelos/Usuario'
import { ContextA } from './Context'
interface ViewReact{
    children: ReactNode
}

export default function ContexProvider({children}:ViewReact) {

    const [nombre, setNombre] = useState<string>('')
    const [apellido, setApellido] = useState<string>('')
    const [correo, setCorreo] = useState<string>('')
    const [telefono, setTelefono] = useState<string>('')
    const [fechaNacimiento, setFechaNacimiento] = useState(new Date())
    const [lista, setLista]= useState<Usuario[]>([])

    useEffect(()=>{

    },[nombre])
    useEffect(()=>{

    },[apellido])
    useEffect(()=>{

    },[correo])
    useEffect(()=>{

    },[telefono])
    useEffect(()=>{

    },[fechaNacimiento])
    useEffect(()=>{

    },[lista])

    const agregarUsuario = ()=>{
        let body: Usuario = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            fechaNacimiento:fechaNacimiento
        }
        setLista([...lista, body])
        setNombre(''),
        setApellido(''),
        setCorreo(''),
        setTelefono(''),
        setFechaNacimiento(new Date())
    }
  return (
    <View>
    <ContextA.Provider value={{
        nombre,
        apellido,
        correo,
        telefono,
        fechaNacimiento,
        lista,
        agregarUsuario,
        setNombre,
        setApellido,
        setCorreo,
        setTelefono,
        setFechaNacimiento,
       }}>
        {children}
       </ContextA.Provider>
    </View>
       
   
  )
}

export const useContextUsuario = () =>{
    return useContext(ContextA)
}