import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ThemeLocalProvider from './Context/ThemeLocalProvider';
import Setting from './Context/Setting';
import NavegacionBasica from './Components/Navegacion/NavegacionBasica';

export default function App() {
  /*return (


      <ThemeLocalProvider>
        <Setting/>
      </ThemeLocalProvider>
  );*/

  return (
    <NavegacionBasica></NavegacionBasica>
  )

}


