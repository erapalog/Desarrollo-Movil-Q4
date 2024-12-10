import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Usuario } from '../Modelos/Usuario';
import {contextoUsuario} from '../Context/Context'

interface ViewReact{
    children: ReactNode
}

export default function ContextProvider( {children}: ViewReact) {

  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido]= useState<string>('');
  const [correo,setCorreo]=useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [fechaNacimiento, setFechaNacimiento]= useState<string>('');
  const [listaUsuario, setListaUsuario]= useState<Usuario[]> ([]);

  const agregarUsuario = () =>{

    let body: Usuario={
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono,
        fechaNacimiento: fechaNacimiento
    }

    setListaUsuario([...listaUsuario, body]);
    console.log(listaUsuario)
  }

  useEffect(()=>{

  },[nombre]);

  useEffect(()=>{

  },[apellido]);


  useEffect(()=>{

  },[telefono]);

  useEffect(()=>{

  },[correo]);

  useEffect(()=>{

  },[fechaNacimiento]);


  return (
    <View>
        <contextoUsuario.Provider value={{
            nombre,
            apellido,
            correo,
            telefono,
            fechaNacimiento,
            listaUsuario,
            agregarUsuario,
            setNombre,
            setApellido,
            setCorreo,
            setTelefono,
            setFechaNacimiento
        }} >

        {children}

        </contextoUsuario.Provider>
    </View>
  )
}

export const useContextUsuario = () =>{
    return useContext(contextoUsuario)
}