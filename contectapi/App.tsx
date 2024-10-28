import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProviderContador from './Provider/ProviderContador';
import ConsumerContador from './Consumer/ConsumerContador';
import ContadorAdicional from './Componets/ContadorAdicional';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Contador Numerico</Text>
     <ProviderContador>
      <ConsumerContador></ConsumerContador>
      <ContadorAdicional></ContadorAdicional>
     </ProviderContador>
     
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
