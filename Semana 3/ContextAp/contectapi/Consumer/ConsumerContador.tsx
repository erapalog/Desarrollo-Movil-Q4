import { View, Text, Button } from 'react-native'
import React from 'react'
import { useContador } from '../Provider/ProviderContador'

export default function ConsumerContador() {

  const {count,sumar,restar} = useContador();

  return (
    <View>
      <Text>Componet Consumidor</Text>
      <Text>Valor del contador {count}</Text>

      <Button title='Sumar' onPress={sumar}></Button>
      <Button title='restar' onPress={restar}></Button>
    </View>
  )
}