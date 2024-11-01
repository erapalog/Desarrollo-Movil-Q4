import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { UseTheme } from '../../Context/ThemeLocalProvider';

export default function Contacto() {
  const {isDarkTheme, toggleTheme} = UseTheme();

  return (
    <View style={[style.container, {backgroundColor :isDarkTheme ? '#333' : '#fff'} ]}>
      <Text>Contacto</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 30,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }});