import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { DataTable } from 'react-native-paper';
import { UseContext } from '../../Context/Provider';

export default function FlatListApp() {
    const { listaUsuario, nombre} = UseContext();
    return (
        <>
            <Text style={[styles.title]}>Lista de Usuario</Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Nombre</DataTable.Title>
                    <DataTable.Title>Apellido</DataTable.Title>
                    <DataTable.Title>Correo</DataTable.Title>
                    <DataTable.Title>Teléfono</DataTable.Title>
                    <DataTable.Title>Fecha Nac.</DataTable.Title>
                </DataTable.Header>

                {listaUsuario.map((user, index) => (
                    <DataTable.Row key={index}>
                        <DataTable.Cell>{user.nombre}</DataTable.Cell>
                        <DataTable.Cell>{user.apellido}</DataTable.Cell>
                        <DataTable.Cell>{user.correo}</DataTable.Cell>
                        <DataTable.Cell>{user.telefono}</DataTable.Cell>
                        <DataTable.Cell>{user.fechaNacimiento}</DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    table: {
        marginTop: 20,
    },
    header: {
        backgroundColor: '#6200ee',
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    row: {
        backgroundColor: '#fff',
        fontSize: 90
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        marginStart: 10,
        marginTop: 10,
        marginBottom:1
    }
});