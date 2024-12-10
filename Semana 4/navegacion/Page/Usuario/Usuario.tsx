import { View, Text } from 'react-native'
import React from 'react'
import ContextProvider from '../../Context/ContextProvider'
import FormularioContacto from '../../Componentes/FormularioContacto'

export default function Usuario() {
  return (
    <View>
      
      <ContextProvider>
        <FormularioContacto/>
      </ContextProvider>
    </View>
  )
}