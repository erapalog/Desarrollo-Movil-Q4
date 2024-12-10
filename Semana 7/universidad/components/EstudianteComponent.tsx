import { View, Text, Alert, FlatList, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../service/api';
import { Estudiante } from '../modelo/Estudiante';

export default function EstudianteComponent() {

  const [nombre, setNombre] = useState<string>('');
  const [apellido, setApellido] = useState<string>('')
  const [correo, setCorreo] = useState<string>('')
  const [telefono, setTelefono] = useState<string>('')
  const [idEstudiante, setIdEstudiante] = useState<number>(0)

  const [estudiantes, setEstudiantes] = useState([]);


  const getEstudiante = async () => {
    try {

      const response = await api.get('estudiante');
      setEstudiantes(response.data)

    } catch (error) {
      Alert.alert('Error', 'Ocurrio un error' + error)
    }
  }

  useEffect(() => {
    getEstudiante()
  }, [])


  const guardarEstudiante =async()=>{
    try {
      if(idEstudiante!=0){
        await api.put(`/estudiante/${idEstudiante}`,{nombre,apellido,correo,telefono})
      }
      else{
        await api.post(`/estudiante`,{nombre,apellido,correo,telefono})
      }

      Alert.alert('Exito','Guardado exitosamente')
      getEstudiante()
      setNombre('')
      setApellido('')
      setCorreo('')
      setTelefono('')    
    } catch (error) {
      Alert.alert('Error','Ocurrio un Error al guardar')
    }
  }

  const editar  =(estudiantes:Estudiante)=>{
    setNombre(estudiantes.nombre)
    setApellido(estudiantes.apellido)
    setCorreo(estudiantes.correo)
    setTelefono(estudiantes.telefono)
    setIdEstudiante(estudiantes.idestudiante)
  }

 const eliminar=async(id:number)=>{
try {
  await api.delete(`/estudiante/${id}`)
  Alert.alert('Exito','Se Elimino Correctamente')
  getEstudiante()
  
} catch (error) {
  Alert.alert('Error','Ocurrio un error al eliminar')
}

 }
  return (
    <View style={styles.container}>

      <Text>Gestion de estudiantes</Text>

      <TextInput
        placeholder='Nombre Estudiante'
        value={nombre}
        onChangeText={setNombre}

        style={styles.input}
      />

      <TextInput
        placeholder='Apellido Estudiante'
        value={apellido}
        onChangeText={setApellido}
        style={styles.input}
      />
      <TextInput
        placeholder='correo Estudiante'
        value={correo}
        onChangeText={setCorreo}
        style={styles.input}
      />
      <TextInput
        placeholder='telefono Estudiante'
        value={telefono}
        onChangeText={setTelefono}
        style={styles.input}
      />

      <Button title={idEstudiante!=0 ? 'Actualizar':'Guardar'}  onPress={guardarEstudiante}></Button>

      <FlatList
        data={estudiantes}
        keyExtractor={(item: Estudiante) => item.idestudiante.toString()}
        renderItem={({ item }) => (

          <View style={styles.card}>
            <Text>{`${item.nombre}  ${item.apellido}`}</Text>
            <Text>{item.correo}</Text>
            <Text>{item.telefono} </Text>
            <View style={styles.actions}>
              <Button title='Editar'  onPress={()=>editar(item)}></Button>
              <Button title='Eliminar'  onPress={()=>eliminar(item.idestudiante)}  color='red'></Button>
            </View>
          </View>

        )}

      >


      </FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
    marginTop: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 5
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});