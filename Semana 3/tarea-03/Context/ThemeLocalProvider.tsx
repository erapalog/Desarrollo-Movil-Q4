
import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { ContentTheme } from './ContexTheme';

interface Props{
    children: React.ReactNode
}
export default function ThemeLocalProvider({children}:Props) {
  const [isDarkTheme, setIsDarkTheme]= useState(false);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme)

  return (
    <ContentTheme.Provider value={{isDarkTheme,toggleTheme}}>
        <View style={[ styles.container, {backgroundColor :isDarkTheme ? '#333' : '#fff'} ]}>
            {children}
        </View>
    </ContentTheme.Provider>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
  });

export const UseTheme = () =>{
    return useContext(ContentTheme);
}