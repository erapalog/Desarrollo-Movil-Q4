import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Charts from '../Charts/Charts';
import Resumen from '../Resumen/Resumen';
import Tasks from '../Tasks/ListTask';
import { Provider as PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function Navigation() {
  const Tab = createBottomTabNavigator()

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Inicio" screenOptions={{ tabBarStyle: { backgroundColor: '#0d6efd', borderTopWidth: 0, }, tabBarActiveTintColor: '#fff', tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)', }} >
            <Tab.Screen name='Inicio' component={Resumen} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="list" color={color} size={size} />), }}></Tab.Screen>
            <Tab.Screen name='Tareas' component={Tasks} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="desktop" color={color} size={size} />), }}></Tab.Screen>
            <Tab.Screen name='Indicadores' component={Charts} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="bar-chart" color={color} size={size} />), }}></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>
  )
}