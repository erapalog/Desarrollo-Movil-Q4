import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EstudianteComponents from './components/EstudianteComponents';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Listado de Alumnos</Text>
      <EstudianteComponents></EstudianteComponents>
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
