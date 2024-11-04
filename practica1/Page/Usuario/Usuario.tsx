import { View, Text } from 'react-native'
import React from 'react'
import ContexProvider from '../../Context/ContexProvider'
import FormularioContacto from '../../Components/FormularioContacto'

export default function Usuario() {
  return (
   
 
    <ContexProvider>
          <FormularioContacto></FormularioContacto>
    </ContexProvider>


      

  )
}