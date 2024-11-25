import { View, Text, StyleSheet, Image, Button, Modal  } from 'react-native';
import React, {useState} from 'react';
import { UseContext } from '../../Context/Provider';
import FlatListAlumno from '../FlatList/FlatListAlumno';
import ModalAlumno from '../Modal/ModalAlumno';
import ModalListAsignaturas from '../Modal/ModalListAsignaturas';

export default function Home() {
  const { isDarkTheme, setVisibleModal} = UseContext();
  
return (
  <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
    <Image source={require('../../assets/UnitecLogo.jpg')} style={styles.logo} />
    <Text style={styles.title}>Modulo de Alumnos</Text>
    <FlatListAlumno></FlatListAlumno>

    <ModalAlumno></ModalAlumno>
    <ModalListAsignaturas></ModalListAsignaturas>
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
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 5,
    alignItems: 'center',
  }
});
