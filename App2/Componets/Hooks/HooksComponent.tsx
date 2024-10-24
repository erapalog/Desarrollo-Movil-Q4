import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function HooksComponent() {

    const [contador, setContador] = useState(0);

    function sumarContador(){
        setContador(contador+1)
    }

    function restarContador(){
        if(contador == 0) return
        setContador(contador-1)
    }

    useEffect(()=>{
        setContador(10)
    }, [])

  return (
    <View style = {style.container}>
      <Text style= {style.text}>Valor del Contador {contador}</Text>

      <Button onPress={sumarContador} title='Sumar'/>

      <View style={{height: 10}}></View>

      <Button  onPress={restarContador} title='Restar'/>

      <TouchableOpacity style={style.button} onPress={sumarContador}>
        <Text>Sumar Contador</Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    container :{
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green',
        
    },

    text: {
        fontSize: 40,
        marginBottom: 20
    },

    button:{
        padding: 10,
        borderColor: 'red',
        borderRadius: 5,
        borderWidth: 5,
        margin: 5
    }
})