import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { UseContext } from '../../Context/Provider';
import FlatListAsignatura from '../FlatList/FlatListAsignatura';

export default function Asignatura() {
  const { isDarkTheme, crearAsignatura, nombreAsignatura, setNombreAsignatura } = UseContext();

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
      <Image source={require('../../assets/UnitecLogo.jpg')} style={styles.logo} />
      <Text style={styles.title}>Modulo de Asignaturas</Text>

      <Text style={styles.space}></Text>

      <Text style={styles.label}>Nombre:</Text>
      <TextInput style={styles.input} value={nombreAsignatura} placeholder="Ciencias Sociales" onChangeText={setNombreAsignatura} placeholderTextColor="#aaa" />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={crearAsignatura}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>

      <FlatListAsignatura></FlatListAsignatura>
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
    width: 100,
    height: 100,
    marginBottom: 5,
    marginTop: 5
  },
  title: {
    fontSize: 20,
    width: '100%',
    fontWeight: 'bold',
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(213, 38, 46)',
    color: 'white',
    textAlign: 'center',
    padding: 2
  }, buttonContainer: {
    width: '80%',
    marginTop: 2,
  }, button: {
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
  }, input: {
    width: '85%',
    height: 60,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 7,
    paddingHorizontal: 10,
    marginStart: 10,
    marginRight: 30,
    textAlign: 'left',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  label: {
    marginTop: 5,
    marginBottom: 1,
    fontSize: 14,
    color: 'gray',
    marginStart: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
