import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { useContextUsuario } from '../Context/ContexProvider'
import { FlatList } from 'react-native-gesture-handler'
import DatePicker from 'react-native-date-picker'

export default function FormularioContacto() {
    const {nombre, apellido, telefono, correo, fechaNacimiento, lista, agregarUsuario, setNombre, setApellido, setCorreo, setTelefono, setFechaNacimiento} = useContextUsuario()
    return (
    <View>
      <Text>FormularioContacto</Text>

      <TextInput
        style={style.input}
        placeholder='Nombre'
        value={nombre}
       onChangeText={setNombre}
        />

        <TextInput
         style={style.input}
        placeholder='Apellido'
        value={apellido}
        onChangeText={setApellido}/>

        <TextInput
         style={style.input}
        placeholder='telefono'
        value={telefono}
        onChangeText={setTelefono}/>

        <TextInput
         style={style.input}
        placeholder='Correo'
        value={correo}
        onChangeText={setCorreo}/>
        
        <DatePicker date={fechaNacimiento} onDateChange={setFechaNacimiento}></DatePicker>

        <Button title='Agregar' onPress={agregarUsuario}></Button>

        <FlatList
          data={lista}
          style={style.lista}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item})=>(
            <View>
              <Text style={style.itemLista}>{item.nombre} {item.apellido}</Text>
            </View>
          )}>

        </FlatList>
    </View>
  )
}

const style = StyleSheet.create({
    input:{
        borderColor: 'gray',
        borderWidth: 1,
        padding: 2,
        margin: 2,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    lista:{
      marginTop: 20,    
    },
    itemLista:{
      textAlign: 'center',
      margin:5,
      borderWidth: 2,
      borderColor: 'lightblue'
    }
})