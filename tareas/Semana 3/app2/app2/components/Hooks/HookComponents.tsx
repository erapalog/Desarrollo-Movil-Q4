import { View, Text, Button ,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'

//va ser una aplicacion que permita, manipular el valor de un contador
//incrementat el valor del contador
//restar el valor del contador
//evento click de un boton
export default function HookComponents() {

  //const [contador,setContador]= useState <number> (0);

  const [contador,setContador]= useState (0);

  function sumarContador(){
    setContador(contador+1)
  }

  function restarContador(){

    if(contador==0) return

    setContador(contador-1)
  }

  useEffect(()=>{
        setContador(0)
  }, [])
  
  return (
    <View style={style.container}>
      <Text style={style.text}>Valor Del contador  {contador}</Text>

      <Button title='Sumar Contador' onPress={ ()=> sumarContador()} ></Button>

      <View style={{ height: 10}}></View>

      <Button title='Restar Contador' onPress={restarContador} ></Button>

      <View style={{ height: 10}}></View>
      <TouchableOpacity style={style.button} onPress={sumarContador}>
        <Text style={style.textColor}> Sumar Contador</Text>

      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    container :{
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green'
    },
    text:{
        fontSize:30,
        marginBottom:20
    },
    button:{
        padding: 15,
        backgroundColor: 'red',
        borderRadius:5,
    },
    textColor:{
        color: 'white'
    }

})