import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { UseTheme } from '../../Context/ThemeLocalProvider';

export default function Home() {
  const {isDarkTheme} = UseTheme();

  return (
    <View style={[styles.container, {backgroundColor :isDarkTheme ? '#333' : '#fff'} ]}>
      <Text>
        <Button title='texto de prueba'></Button>
      </Text>
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