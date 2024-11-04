import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import {ContextTheme} from './ContexTheme'

interface Props{
    children: React.ReactNode
}



export default function ThemeLocalProvider({children}:Props) {
  
    const [isDarTheme, setIsDarTheme] = useState(false)

    const toggleTheme = () =>{
        setIsDarTheme(!isDarTheme)
    }
  
    return (
    <ContextTheme.Provider value={{isDarTheme,toggleTheme}}>
        <View style={[style.container, {backgroundColor: isDarTheme ? '#333' : '#fff'}]}>
            {children}
        </View>
    </ContextTheme.Provider>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1
    }
})

export const useTheme = () =>{
    const context = useContext(ContextTheme)
    return context
}