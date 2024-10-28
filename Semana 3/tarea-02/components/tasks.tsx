import { View } from 'react-native';
import React from 'react';
import { AppProvider } from '../context/AppContext';
import Task2 from './hooks/task2';

export default function Tasks() {  
  return (
    <AppProvider>
      <View>
        <Task2></Task2>
      </View>
    </AppProvider>
  )
}