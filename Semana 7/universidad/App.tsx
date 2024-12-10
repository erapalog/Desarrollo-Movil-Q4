import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EstudianteComponent from './components/EstudianteComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Estudiantes</Text>
      <StatusBar style="auto" />
      <EstudianteComponent></EstudianteComponent>
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
