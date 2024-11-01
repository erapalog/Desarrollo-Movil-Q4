import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { UseTheme } from '../../Context/ThemeLocalProvider';

export default function Usuario() {
  const {isDarkTheme} = UseTheme();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const handleSubmit = () => {
    Alert.alert('Información Enviada', `Nombre: ${nombre} ${apellido}\correo: ${correo}\telefono: ${telefono}\nFecha de Nacimiento: ${fechaNacimiento}`);
  };

  return (
    <View style={[styles.container, {backgroundColor :isDarkTheme ? '#333' : '#fff'}]}>
      <View style={styles.borderedView}>
      <Text style={styles.title}>Información Personal</Text>

      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Apellido:</Text>
      <TextInput
        style={styles.input}
        value={apellido}
        onChangeText={setApellido}
      />

      <Text style={styles.label}>Correo:</Text>
      <TextInput
        style={styles.input}
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Teléfono:</Text>
      <TextInput
        style={styles.input}
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Fecha de Nacimiento:</Text>
      <TextInput
        style={styles.input}
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
        placeholder="DD/MM/AAAA"
      />

      <TouchableOpacity style={[styles.buttonContent]} onPress={handleSubmit}>
        <Text style={styles.button}>Enviar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});