import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from './ThemeLocalProvider'

export default function Setting() {

    const {isDarTheme, toggleTheme} = useTheme()
  return (
    <View style={style.container}>
      <Text>Tema Actual { isDarTheme ? 'Oscuro' : 'Claro'}</Text>

      <Button title='Cambiar Color' onPress={toggleTheme}></Button>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    }
})