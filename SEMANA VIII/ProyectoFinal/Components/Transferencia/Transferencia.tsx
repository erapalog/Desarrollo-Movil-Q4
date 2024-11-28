import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { UseContext } from '../../Context/Provider';
import FlatListApp from '../Tasks/ListTask';
import { Snackbar, Icon } from 'react-native-paper';

export default function Transferencia() {
  const { isDarkTheme, transferir, setNombre, setMonto, setCuenta, monto, saldo } = UseContext();
  const [visible, setVisible] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [snackColor, setSnackColor] = useState('#4CAF50');
  const [icon, setIcon] = useState('');

  const showSnackbar = (message:string, color:string, icon:string) => {
    setSnackMessage(message);
    setSnackColor(color);
    setVisible(true);
    setIcon(icon)
  };

  const hideSnackbar = () => setVisible(false);

  const handleSubmit = () => {
    if (monto > saldo) {
      showSnackbar('Saldo insuficiente', '#f44336', 'danger');
    } else if (parseFloat(monto) == 0) {
        showSnackbar('El monto no puede ser L 0', '#f44336', 'danger');
    } else {
      transferir();
      showSnackbar('Transferencia realizada exitosamente!', '#4CAF50','check-circle');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
      <Text style={styles.title}>Modulo de Transferencias de saldo MiBanco Rapalo</Text>
      <Text style={styles.space}></Text>

      <Text style={styles.label}>Numero cuenta:</Text>
      <TextInput style={styles.input} defaultValue="" placeholder="Cuenta" onChangeText={setCuenta} placeholderTextColor="#aaa" keyboardType='default'/>

      <Text style={styles.label}>Monto: </Text>
      <TextInput style={styles.input} defaultValue="0" placeholder="Monto" onChangeText={setMonto} placeholderTextColor="#aaa" keyboardType='numeric'/>

      <Text style={styles.label}>Nombre destinatario: </Text>
      <TextInput style={styles.input} defaultValue="" placeholder="Nombre destinatario" onChangeText={setNombre} placeholderTextColor="#aaa" keyboardType='default'/>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Transferir saldo</Text>
        </TouchableOpacity>
      </View>
      <Snackbar visible={visible} onDismiss={hideSnackbar} duration={2000} style={[styles.snackbar, { backgroundColor: snackColor }]} >
        <Text style={styles.text}>
          <Icon source={icon} color="#ffffff" size={15} /> {snackMessage}
        </Text>
      </Snackbar>
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
    marginTop: 5,
    marginBottom: 1,
    fontSize: 12,
    color: '#555',
    marginStart: 15,
  },
  input: {
    height: 30,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
    marginStart: 15,
    marginRight: 30,
    textAlign: 'right',
  },
  space: {
    marginTop: 20
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
