import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ConsumerAlumnos from './Consumer/ConsumerAlumnos';
import ProviderAlumnos from './Provider/ProviderAlumnos';

export default function App() {
  return (
    <View style={styles.container}>
      <ProviderAlumnos>
      <ConsumerAlumnos></ConsumerAlumnos>
      </ProviderAlumnos>
      
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
