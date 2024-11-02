import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { UseContext } from '../../Context/Provider';
import FlatListApp from '../FlatList/FlatListApp';
import { Snackbar, Icon } from 'react-native-paper';

export default function Usuario() {
  const [visible, setVisible] = useState(false);
    const showSnackbar = () => setVisible(true);
    const hideSnackbar = () => setVisible(false);

  const {isDarkTheme, nombre, apellido, telefono, correo, fechaNacimiento, addUsuario, setNombre, setApellido, setCorreo, setTelefono, setFechaNacimiento} = UseContext();

  const handleSubmit = () => {
    addUsuario();
    showSnackbar();
    console.log('Información Enviada', `Nombre: ${nombre} ${apellido}\ncorreo: ${correo}\ntelefono: ${telefono}\nnFecha de Nacimiento: ${fechaNacimiento}`);
  };
  
  return (
    <View style={[styles.container, {backgroundColor :isDarkTheme ? '#333' : '#fff'}]}>
      <View style={styles.borderedView}>
      <Text style={styles.title}>Información Personal</Text>

      <Text style={styles.label}>Nombre:</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setNombre} placeholder="Nombre" placeholderTextColor="#aaa"/>

      <Text style={styles.label}>Apellido:</Text>
      <TextInput style={styles.input} value={apellido} onChangeText={setApellido} placeholder="Apellido" placeholderTextColor="#aaa" />

      <Text style={styles.label}>Correo:</Text>
      <TextInput style={styles.input} value={correo} onChangeText={setCorreo} placeholder="correo@correo.com" placeholderTextColor="#aaa" />

      <Text style={styles.label}>Teléfono:</Text>
      <TextInput style={styles.input} value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" placeholder="9999-3333" placeholderTextColor="#aaa" />

      <Text style={styles.label}>Fecha de Nacimiento:</Text>
      <TextInput style={styles.input} value={fechaNacimiento} onChangeText={setFechaNacimiento} placeholder="01/01/1990" placeholderTextColor="#aaa" />

      <TouchableOpacity style={[styles.buttonContent]} onPress={handleSubmit}>
        <Text style={styles.button}>Enviar</Text>
      </TouchableOpacity>
      <FlatListApp/>
      </View>
      <Snackbar visible={visible} onDismiss={hideSnackbar} duration={2000} style={styles.snackbar}><Text style={styles.text}><Icon source="check-circle" color='#ffffff' size={15}/> Registro guardado exitosamente! </Text></Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
    marginStart: 10,
  },
  label: {
    marginBottom: 1,
    fontSize: 12,
    color: '#555',
    marginStart: 10,
  },
  input: {
    height: 30,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginStart: 10,
    marginRight:30
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#ffffff', 
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 5,
    marginStart:18,
    width: 65
  },
  buttonContent: {
    alignItems: 'center',  
    justifyContent: 'center', 
    backgroundColor: '#007BFF',
    borderRadius: 6,
    marginStart: 15,
    marginRight:30
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  borderedView: {
    width: 330,
    height: 500,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginStart: 30,
    marginTop: 10
  },
    lightBackground: {
    backgroundColor: '#fff',
  },
    darkBackground: {
    backgroundColor: '#333',
  },
  snackbar: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 13,
  },
});