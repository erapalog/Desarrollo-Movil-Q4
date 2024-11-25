import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Alumno from '../Alumno/Alumno';
import Asignatura from '../Asignatura/Asignatura';
import Matricula from '../Matricula/Matricula';
import { Provider as PaperProvider } from 'react-native-paper';

export default function Navigation() {
  const cbtn = createBottomTabNavigator()

  return (
    <PaperProvider>
      <NavigationContainer>
          <cbtn.Navigator initialRouteName="Home">
              <cbtn.Screen name='Alumnos' component={Alumno} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="person-circle-outline" color={color} size={size} />),}}></cbtn.Screen>
              <cbtn.Screen name='Asignaturas' component={Asignatura} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="reader-outline" color={color} size={size} />),}}></cbtn.Screen>
              <cbtn.Screen name='Matricula' component={Matricula} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="list-outline" color={color} size={size} />),}}></cbtn.Screen>
          </cbtn.Navigator>
      </NavigationContainer>
      </PaperProvider>
  )
}
