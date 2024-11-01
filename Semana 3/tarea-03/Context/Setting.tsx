import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { UseTheme } from './ThemeLocalProvider'

export default function Setting({}) {

   const {isDarkTheme, toggleTheme} = UseTheme() ;

  return (
    <View style={[ styles.container, {backgroundColor :isDarkTheme ? '#333' : '#fff'} ]}>
      <Text>
        Tema Actual { isDarkTheme ? 'Oscuro': 'claro'}
      </Text>
      <Button title='Cambiar color' onPress={toggleTheme}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});