import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { UseTheme } from '../../Context/ThemeLocalProvider';

export default function Usuario() {
  const {isDarkTheme} = UseTheme();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = () => {
    // Aquí puedes manejar el envío del formulario
    Alert.alert('Información Enviada', `Nombre: ${firstName} ${lastName}\nCorreo: ${email}\nTeléfono: ${phone}\nFecha de Nacimiento: ${dob}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información Personal</Text>

      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />

      <Text style={styles.label}>Apellido:</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />

      <Text style={styles.label}>Correo:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Teléfono:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Fecha de Nacimiento:</Text>
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={setDob}
        placeholder="DD/MM/AAAA"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }
});