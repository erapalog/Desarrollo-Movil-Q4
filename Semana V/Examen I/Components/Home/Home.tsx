import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { UseContext } from '../../Context/Provider';
import FlatListApp from '../FlatList/FlatListApp';

export default function Home() {
  const { isDarkTheme, saldo, deposito, retiro } = UseContext();

  const depositar = () => {
    deposito();
  }

  const retirar = () => {
    retiro();
  }

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
      <Image source={require('../../assets/banca.jpg')} style={styles.logo} />
      <Text style={styles.title}>Bienvenido a la aplicación de MiBanco Rapalo</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={depositar}>
          <Text style={styles.buttonText}>Depositar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={retirar}>
          <Text style={styles.buttonText}>Retirar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.saldoContainer}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Saldo actual:</Text>
        <Text style={styles.saldoText}>L {saldo}</Text>
      </View>
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
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 5,
    marginTop:20
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
  buttonContainer: {
    width: '80%',
    marginTop: 2,
  },
  saldoContainer: {
    backgroundColor: '#f1f1f1',
    padding: 2,
    borderRadius: 10,
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  saldoText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
