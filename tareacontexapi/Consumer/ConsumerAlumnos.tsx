import { View, Text, FlatList, StyleSheet, TextInput, Button, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAlumnos } from '../Provider/ProviderAlumnos'

export default function ConsumerAlumnos() {

  const {alumnos, agregar} = useAlumnos()
  const [Nombre, setNombre] = useState('')
  const [nombreAgregar, setNombreAgregar] = useState('')
  
  useEffect(()=>{
    agregar(nombreAgregar)
  },[nombreAgregar])

  function guardar(){
    setNombreAgregar(Nombre)
    setNombre('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.encabezado}>Componente Consumidor</Text>
      <FlatList data={alumnos} 
                renderItem={({item}) => <Text>{item.id} {item.nombre}</Text>}
                style = {styles.lista}
                />
      <TextInput style={styles.txt} placeholder='Nombre Alumno' onChangeText={newnombre => setNombre(newnombre)} defaultValue={Nombre}></TextInput>
      <Button title='Agregar' onPress={guardar}></Button>
      
    </View>
  )
}

const styles = StyleSheet.create({
  lista:{
    marginTop:20
  },
  encabezado:{
    marginTop:20
  },
  txt:{
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 20,
    padding: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
