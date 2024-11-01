import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useContextUsuario } from '../Context/ContextProvider'

export default function ListaUsuario() {

    const { listaUsuario, nombre } = useContextUsuario()

    return (

        <>
            <Text> {nombre}</Text>

            <FlatList
                data={listaUsuario}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                        <Text>{item.nombre} </Text>
                        <Text>{item.apellido} </Text>
                        <Text>{item.correo} </Text>
                        <Text>{item.telefono} </Text>
                        <Text>{item.fechaNacimiento} </Text>
                    </View>
                )}
            >

            </FlatList>
        </>

    )
}

const styles = StyleSheet.create({

    listTile: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20
    },
    userItem: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 5
    }
})