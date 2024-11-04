import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ThemeLocalProvider from './Context/ThemeLocalProvider';
import Setting from './Context/Setting';

export default function App() {
  return (
    <View >
     <ThemeLocalProvider>
        <Setting></Setting>
     </ThemeLocalProvider>
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
