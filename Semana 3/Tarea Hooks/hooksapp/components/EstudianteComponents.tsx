import { View, Text, FlatList,StyleSheet  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Estudiante } from '../Modelos/Estudiante'
import FlatListEstudiante from './FlatListEstudiante';

export default function EstudianteComponents() {

  const lista: Estudiante[]=[
    {id:1, name:"Juan"},
    {id:2, name:"Andrea"},
    {id:3, name:"Ana"},
    {id:4, name:"Maria"},
    {id:5, name:"Pedro"},
    {id:6, name:"Luis"},
    {id:7, name:"Adres"},
    {id:8, name:"Allan"},
    {id:9, name:"Carlos"},
    {id:10, name:"Junior"}
  ];


  const [listaEstudiante, setListaEstudiante]=useState<Estudiante[]>(lista);


  useEffect(() => {

    console.log('Realiza el llamado, tamano de la lista ' + listaEstudiante.length)

    const intervalId = setInterval(() => {

      const nuevoEstudiante: Estudiante = {
        id: listaEstudiante.length + 1,
        name: `Estudiante nombre ${listaEstudiante.length + 1}`,
      };

      setListaEstudiante(item => [...item, nuevoEstudiante]);

     
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [listaEstudiante]);


  return (
    <View>
      <Text>
        <FlatListEstudiante listaEstudiante={listaEstudiante}></FlatListEstudiante>
      </Text>
    </View>
  )
}

