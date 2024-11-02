import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Home/Home';
import Conf from '../Configuraciones/Configuraciones';
import User from '../Usuario/Usuario';
import { Provider as PaperProvider } from 'react-native-paper';

export default function NavegacionBasica() {
  const cbtn = createBottomTabNavigator()

  return (
    <PaperProvider>
      <NavigationContainer>
          <cbtn.Navigator initialRouteName="Home">
              <cbtn.Screen name='Home' component={Home} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="home-outline" color={color} size={size} />),}}></cbtn.Screen>
              <cbtn.Screen name='Configuraciones' component={Conf} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="construct-outline" color={color} size={size} />),}}></cbtn.Screen>
              <cbtn.Screen name='Usuario' component={User} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="person-outline" color={color} size={size} />),}}></cbtn.Screen>
          </cbtn.Navigator>
      </NavigationContainer>
      </PaperProvider>
  )
}