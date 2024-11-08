import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Home/Home';
import Transferencia from '..//Transferencia/Transferencia';
import Historico from '../Historico/Historico';
import { Provider as PaperProvider } from 'react-native-paper';

export default function Navigation() {
  const cbtn = createBottomTabNavigator()

  return (
    <PaperProvider>
      <NavigationContainer>
          <cbtn.Navigator initialRouteName="Home">
              <cbtn.Screen name='Inicio' component={Home} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="home-outline" color={color} size={size} />),}}></cbtn.Screen>
              <cbtn.Screen name='Transferencias' component={Transferencia} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="grid-outline" color={color} size={size} />),}}></cbtn.Screen>
              <cbtn.Screen name='Historico' component={Historico} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="list-outline" color={color} size={size} />),}}></cbtn.Screen>
          </cbtn.Navigator>
      </NavigationContainer>
      </PaperProvider>
  )
}
