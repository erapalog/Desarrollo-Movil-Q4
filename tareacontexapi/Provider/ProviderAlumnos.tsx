import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { ContextAlumnos } from '../Context/ContexApi'

interface viewReact{
    children: ReactNode
}

export default function ProviderAlumnos(props:viewReact) {
  
    const[alumnos, setAlumnos] = useState([
        {
            id:1,
            nombre: 'Juan'
        },
        {
            id:2,
            nombre:'José'
        },
        {
            id:3,
            nombre: 'Armando'
        },
        {
            id:4,
            nombre: 'Rafael'
        },
        {
            id:5,
            nombre: 'Francisco'
        },
        {
            id:6,
            nombre: 'Maria'
        },
        {
            id:7,
            nombre: 'Fernanda'
        },
        {
            id:8,
            nombre: 'Isabelle'
        },
        {
            id:9,
            nombre: 'Nicole'
        },
        {
            id:10,
            nombre: 'Patricia'
        }
    ])
    
    function agregar(Nombre:''){
        setAlumnos([...alumnos, {id:alumnos.length+1, nombre:Nombre}])
    }
  
    return (
    <View>
      <Text style={styles.encabezado}>Proveedor de Fuciones para Alumnos</Text>

      <ContextAlumnos.Provider value={{alumnos, agregar}}>
        {props.children}
      </ContextAlumnos.Provider>
    </View>
  )
}

export const useAlumnos = () =>{
    return useContext(ContextAlumnos)
}

const styles = StyleSheet.create({
    encabezado:{
      marginTop:100
    }
  })