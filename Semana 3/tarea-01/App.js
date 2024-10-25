import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tasks from './components/tasks';

export default function App() {
  

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Tasks/>
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