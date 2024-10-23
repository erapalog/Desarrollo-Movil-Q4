import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

//Va ser una aplicacion que permita, manipular el valor de un contador
//incrementar el valor del contador
//restar el valor del contador
//evento click de un boton



export default function HookComponents() {

    const [contador, setContador]=useState(0);

    function sumarContador(){
        setContador(contador+1)
    }

    function restarContador(){
        if (contador==0) return

        setContador(contador-1)
    }

    useEffect(()=>{
        setContador(10)

    },[])

    return (
        <View style={style.container}>
            <Text style={style.text}>Valor del contador {contador}</Text>
            <Button title='Sumar contador' onPress={sumarContador}></Button>
            <View style={{height:10}}></View>
            <Button title='Restar Contador' onPress={restarContador}></Button>

            <View style={{height:10}}></View>

            <TouchableOpacity onPress={sumarContador} style={style.button}>
                <Text style={style.textColor}>Sumar Contador</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'green'

    },
    text:{
        fontSize:30,
        marginBottom:20
    },
    button:{
        padding:15,
        backgroundColor: 'red',
        borderRadius:5,
        color: 'white'
    },
    textColor:{
        color:'white'
    }

})