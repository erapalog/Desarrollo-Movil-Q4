import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { DataTable } from 'react-native-paper';
import { UseContext } from '../../Context/Provider';

export default function FlatListApp() {
    const { listaTransacciones } = UseContext();
    return (
        <>
            <Text style={[styles.title]}>Ultimas transacciones</Text>
            <DataTable style={styles.dataTable}>
                <DataTable.Header>
                    <DataTable.Title style={styles.headerTitle}>Fecha</DataTable.Title>
                    <DataTable.Title style={styles.headerTitle}>Transacción</DataTable.Title>
                    <DataTable.Title style={styles.headerTitle}>Monto</DataTable.Title>
                </DataTable.Header>

                {listaTransacciones.map((trans, index) => (
                    <DataTable.Row key={index}>
                        <DataTable.Cell style={styles.fechaCell}>{trans.fecha}</DataTable.Cell>
                        <DataTable.Cell>{trans.tipoTransaccion}</DataTable.Cell>
                        <DataTable.Cell>{trans.monto}</DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 3,
        color: '#333',
        textAlign: 'center',
    },
    dataTable: {
        width: '100%',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        marginVertical: 2,
        marginTop: 8
    },
    header: {
        backgroundColor: '#007BFF',
        color: '#fff',
        paddingVertical: 12,
        width: 300
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#fff',
    },
});