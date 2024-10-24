import { View, Text, Button, ScrollView, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Estudiante } from '../Interfaces/estudiante'

export default function ListaAlumnos() {

const [Nombre, setNombre] = useState('')
const [contador, setContador] = useState(0)
const [refresh, setRefresh] = useState(false)

const [Estudiantes, setEstudiantes] = useState<Estudiante[]>([
    {id:0, nombre:'Juan Perez'},
    {id:1, nombre:'Armando Mejia'},
    {id:2, nombre:'Mariana Hernandez'},
    {id:3, nombre:'Raul Valdiviezo'},
    {id:4, nombre:'Fernando Gonzales'},
    {id:5, nombre:'Maria Pinto'},
    {id:7, nombre:'Juana Rosales'},
    {id:8, nombre:'Justo Martinez'},
    {id:9, nombre:'Alejandra Ramirez'}
   ]
)

let nuevoArreglo = Estudiantes

   function cargarAlumnos(){ 
    let estudiante:Estudiante = {id: Estudiantes.length+1, nombre: Nombre}
    nuevoArreglo.push(estudiante)
    setNombre('')
   }

  
   useEffect(()=>{ 
    setRefresh(true)
    setTimeout(()=>{        
       setRefresh(false)       
    },1000) 
    setTimeout(()=>{    
       setEstudiantes(nuevoArreglo) 
        setContador(contador+1)       
    },3000)    
   }, [contador])

    return (
    <View style={styles.centered}>
        <View style={styles.desplazado}></View>
      <Text>ListaAlumnos</Text>
       <View style={styles.centered}>
        <FlatList
            data={Estudiantes}
            renderItem={({item}) => <Text>{item.id} {item.nombre}</Text>}
            refreshing={refresh}
            onRefresh={()=>{}}
            />
       </View>
       <TextInput placeholder='Nombre Alumno' 
                style={styles.input} 
                onChangeText={newNombre => setNombre(newNombre)} 
                defaultValue={Nombre}></TextInput>
        <TouchableOpacity style={styles.boton} onPress={cargarAlumnos}>
            <Text>Agregar</Text>
        </TouchableOpacity>
   
    </View>
  )
}

const styles = StyleSheet.create({

   
    Dato:{
       marginHorizontal:10
    },
    
    input:{
        borderWidth: 2,
        borderColor: 'black',
        padding: 5
    },

    boton:{
        backgroundColor: 'lightgrey',
        marginTop: 5,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center'
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      desplazado: {
        height: 100
      }
  });