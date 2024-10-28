import { View, Text } from 'react-native'
import React from 'react'
import { useContador } from '../Provider/ProviderContador'


export default function ContadorAdicional() {
  
    const {count} = useContador()
  
    return (
    <View>
      <Text>Contador de Segunda pagina {count}</Text>
    </View>
  )
}