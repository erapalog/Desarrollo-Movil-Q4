import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { UseContext } from '../../Context/Provider';
import Picker from '../Picker/Picker';
import FlatListMatricula from '../FlatList/FlatListMatricula';

export default function Matricula() {
  const {
    isDarkTheme,
    listAlumnos,
    listAsignaturas,
    setSelectIdAlumno,
    setSelectIdAsignatura,
    matricular,
    selectIdAlumno,
    selectIdAsignatura
  } = UseContext();
  
  useEffect(() => {
    console.log('Alumno seleccionado:', selectIdAlumno);
    console.log('Asignatura seleccionada:', selectIdAsignatura);
  }, [selectIdAlumno, selectIdAsignatura]);

  const onValueChangeAlumno = (itemValue) => {
    setSelectIdAlumno(itemValue);
  };

  const onValueChangeAsignatura = (itemValue) => {
    setSelectIdAsignatura(itemValue);
  };

  const guardar = () => {
    matricular();
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
      <Text style={styles.title}>Matrícula</Text>
      <Text style={styles.space}></Text>

      <Text style={styles.label}><b>Estudiante</b></Text>
      <Picker value={selectIdAlumno} onValueChange={onValueChangeAlumno} listValues={listAlumnos} />

      <Text style={styles.label}><b>Asignatura</b></Text>
      <Picker value={selectIdAsignatura} onValueChange={onValueChangeAsignatura} listValues={listAsignaturas} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={guardar}>
          <Text style={styles.buttonText}>Matricular</Text>
        </TouchableOpacity>
      </View>

      <FlatListMatricula tipo={1} />
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
    marginTop: 5,
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
    padding: 2,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 2,
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
  label: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 2,
    fontSize: 13,
    color: '#555',
    marginStart: 1,
  },
});
