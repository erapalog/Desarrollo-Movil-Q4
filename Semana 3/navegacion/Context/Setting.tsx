import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from './ThemeLocalProvider'

export default function Setting({}) {

   const {isDarkTheme, toggleTheme} = useTheme() ;

  return (
    <View>
      <Text>
        Tema Actual { isDarkTheme ? 'Oscuro': 'claro'}
      </Text>

      <Button title='Cambiar color' onPress={toggleTheme}></Button>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})