import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Home/Home'
import Contacto from '../Contacto/Contacto'

export default function NavegacionBasica() {

  const tab = createBottomTabNavigator()

  return (
    <NavigationContainer>

        <tab.Navigator>
            <tab.Screen name='Home' component={Home}></tab.Screen>
            <tab.Screen name='Contacto' component={Contacto}></tab.Screen>
        </tab.Navigator>
    </NavigationContainer>
   
  )
}