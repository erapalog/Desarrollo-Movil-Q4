
import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { ContentTheme } from './ContexTheme';

interface Props{
    children: React.ReactNode
}

/*type Props{
    children: React.ReactNode
}*/

//export default function ThemeLocalProvider(props:Props) {

export default function ThemeLocalProvider({children}:Props) {

  const [isDarkTheme, setIsDarkTheme]= useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme)


  return (
    //condicion ? verdadoro: falso

    <ContentTheme.Provider value={{isDarkTheme,toggleTheme}}>

        
        <View style={[ style.container, {backgroundColor :isDarkTheme ? '#333' : '#fff'} ]}>
            {children}
        </View>

    </ContentTheme.Provider>
  )
}

const style= StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const useTheme = () =>{
    const context= useContext(ContentTheme);

    return context;
}