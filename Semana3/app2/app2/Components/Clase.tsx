import { View, Text } from 'react-native'
import React from 'react'
import { Asignatura } from '../Modelos/Asignatura'
import HookComponents from './Hooks/HookComponents'


/**
 * 
 * <Text>Nombre de asignatura {props.nombreAsignatura}</Text>
            <Text>Duracion {props.duracionHoras}</Text>
            <Text>Seccion {props.seccion}</Text>
 * @returns 
 */
export default function Clase(props: Asignatura){
    return (
        <View>
            <HookComponents></HookComponents>
            
        </View>
  )
}