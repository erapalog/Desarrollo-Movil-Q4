import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { ContextContador } from '../Context/ContextApi';

interface ViewReact{
    children: ReactNode
}
export default function ProviderContador(props:ViewReact) {

   const [count,setCount] = useState(0);
   
   const sumar =()=>{
        setCount(count+1)
   }

   const restar =()=>{
    setCount(count-1)
    }
  return (
    <View>
      <Text>Proveedor de funciones para contador</Text>

      <ContextContador.Provider value={{count,sumar,restar}} >

        {props.children}
      </ContextContador.Provider>
    </View>
  )
}

export const useContador =() =>{
    return useContext(ContextContador)
}