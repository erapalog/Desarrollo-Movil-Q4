import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Home/Home';
import Transferencia from '../Transferencia/Transferencia';
import Task from '../Tasks/ListTask';
import { Provider as PaperProvider } from 'react-native-paper';

export default function Navigation() {
  const Tab = createBottomTabNavigator()

  return (
    <PaperProvider>
      <NavigationContainer>
          <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarStyle: { backgroundColor: '#0d6efd', borderTopWidth: 0,}, tabBarActiveTintColor: '#fff', tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',}} >
              <Tab.Screen name='Tareas' component={Task} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="desktop-outline" color={color} size={size} />),}}></Tab.Screen>
              <Tab.Screen name='Resumen' component={Transferencia} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="list-outline" color={color} size={size} />),}}></Tab.Screen>
              <Tab.Screen name='Indicadores' component={Home} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="bar-chart-outline" color={color} size={size} />),}}></Tab.Screen>
          </Tab.Navigator>
      </NavigationContainer>
      </PaperProvider>
  )
}