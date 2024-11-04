import { View, Text, StyleSheet, TextStyle, Button  } from 'react-native'
import React, { useState } from 'react'

export default function ComponenteConfiguracion() {
  const [temaClaro, setTemaClaro] = useState(true)
  const [tema, setTema] = useState(styles.temaOscuro)
  function cambiarTema(){
    if (temaClaro){
      setTema(styles.temaOscuro)
      setTemaClaro(false)
      
    }else{
      setTema(styles.temaClaro)
      setTemaClaro(true)
    }
  }
  return (
    <View >
      <Text style={tema}>Componente Configuracion</Text>
      <Button title='Cambiar Tema' onPress={cambiarTema}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  temaClaro: {
    backgroundColor: 'white',
    color:'black'
  },
  temaOscuro: {
     backgroundColor: 'black',
    color:'white'
  }
})