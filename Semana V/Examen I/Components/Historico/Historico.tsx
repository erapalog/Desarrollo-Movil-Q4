import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { UseContext } from '../../Context/Provider';
import FlatListApp from '../FlatList/FlatListApp';

export default function Transferencia() {
  const { isDarkTheme, transferir, setNombre, setMonto, setCuenta, monto, saldo } = UseContext();
  
  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
      <Text style={styles.title}>Modulo de Transacciones de saldo MiBanco Rapalo</Text>
      <Text style={styles.space}></Text>
      <FlatListApp></FlatListApp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(213, 38, 46)',
    color: 'white',
    textAlign: 'center',
    padding: 2
  },
  space: {
    marginTop: 20
  }
});
