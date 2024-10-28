import { View, Text, Button } from 'react-native'
import React from 'react'
import { useContador } from '../Provider/ProviderContador'

export default function ConsumerContador() {
  
    const {count, sumar, restar} = useContador()

  
    return (
    <View>
      <Text>Componente Consumidor</Text>
      <Text>Valor del Contador: {count}</Text>

      <Button title='Sumar' onPress={sumar}></Button>
      <Button title='Restar' onPress={restar}></Button>
    </View>
  )
}