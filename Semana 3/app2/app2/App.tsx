import { StyleSheet, Text, View } from 'react-native';
import Clase from './Components/Clase';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Primera aplicacion con React Native</Text>

      <Clase nombreAsignatura='Desarrollo Movil' duracionHoras={4}></Clase>

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
