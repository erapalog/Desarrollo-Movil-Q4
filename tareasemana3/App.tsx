import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaAlumnos from './Components/ListaAlumnos';

export default function App() {
  return (
    <View style={styles.container}>
      <ListaAlumnos></ListaAlumnos>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
