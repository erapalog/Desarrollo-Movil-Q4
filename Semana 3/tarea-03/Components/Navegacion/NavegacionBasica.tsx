import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Home/Home';
import Conf from '../Configuraciones/Configuraciones';
import User from '../Usuario/Usuario';
import Ua1 from '../../Context/Setting';

export default function NavegacionBasica() {
  const cbtn = createBottomTabNavigator()

  return (
      <NavigationContainer>
          <cbtn.Navigator>
              <cbtn.Screen name='Home' component={Home} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="home-outline" color={color} size={size} />),}}></cbtn.Screen>
              <cbtn.Screen name='Configuraciones' component={Conf} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="construct-outline" color={color} size={size} />),}}></cbtn.Screen>
              <cbtn.Screen name='Usuario' component={User} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="person-outline" color={color} size={size} />),}}></cbtn.Screen>
          </cbtn.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
    }});