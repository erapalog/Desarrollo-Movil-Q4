import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useContextUsuario } from '../Context/ContextProvider'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import ListaUsuario from './ListaUsuario'
import {styles} from '../Estilos/EstilosGlobales'

export default function FormularioContacto() {

    const { nombre,
        apellido,
        telefono,
        correo,
        fechaNacimiento,
        listaUsuario,
        agregarUsuario,
        setNombre,
        setApellido,
        setCorreo,
        setTelefono,
        setFechaNacimiento
    } = useContextUsuario()

    return (
        <View>
            <Text>Formulario de Usuario</Text>

            <TextInput
                style={styles.input}
                placeholder='Nombre'
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder='Apellido'
                onChangeText={setApellido}
            />

            <TextInput
                style={styles.input}
                placeholder='Correo'
                value={correo}
                onChangeText={setCorreo}
            />

            <TextInput
                  style={styles.input}
                placeholder='Telefono'
                value={telefono}
                onChangeText={setTelefono}
            />

            <TextInput
                  style={styles.input}
                placeholder='Fecha de nacimiento'
                value={fechaNacimiento}
                onChangeText={setFechaNacimiento}
            />

            <Button title='Agregar Usuario' onPress={agregarUsuario}></Button>

            <ListaUsuario></ListaUsuario>

        </View>
    )
}

