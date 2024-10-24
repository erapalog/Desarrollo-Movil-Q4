import { View, Text } from 'react-native'
import React from 'react'
import { Asignatura } from '../Modelos/Asignatura'
import HooksComponent from './Hooks/HooksComponent'

      /**<Text>Nombre de la Asignatura:{props.nombreAsignatura}</Text>
      <Text>Duracion: {props.duracionHoras}</Text>
      <Text>Seccion: {props.seccion}</Text>*/

export default function Clase(props: Asignatura) {
  return (
    <View>
        <HooksComponent></HooksComponent>
    </View>
  )
}