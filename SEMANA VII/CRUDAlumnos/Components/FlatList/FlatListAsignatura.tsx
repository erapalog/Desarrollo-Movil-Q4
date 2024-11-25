import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { DataTable } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { UseContext } from '../../Context/Provider';

export default function FlatListApp() {
    const { listAsignaturas, borrarAsignatura } = UseContext();

    return (
        <ScrollView style={styles.scrollContainer}>
            <DataTable style={styles.dataTable}>
                <DataTable.Header>
                    <DataTable.Title style={[styles.headerTitle, { flex: 2 }]}>
                        <Text style={styles.headerTitle}></Text>
                    </DataTable.Title>
                    <DataTable.Title style={[styles.headerTitle, { flex: 2 }]}>
                        <Text style={styles.headerTitle}>Id</Text>
                    </DataTable.Title>
                    <DataTable.Title style={[styles.headerTitle, { flex: 2 }]}>
                        <Text style={styles.headerTitle}>Nombre</Text>
                    </DataTable.Title>
                </DataTable.Header>

                {listAsignaturas.map((asignatura, index) => (
                    <DataTable.Row key={index}>
                        <DataTable.Cell>
                                <TouchableOpacity style={styles.dataTableCell, styles.espacio} onPress={() => borrarAsignatura(asignatura.id)}>
                                    <Ionicons name="trash-bin-outline" color={'black'} size={18} />
                                </TouchableOpacity>
                            </DataTable.Cell>
                        <DataTable.Cell>
                            <Text style={styles.dataTableCell}>{asignatura.id}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell>
                            <Text style={styles.dataTableCell}>{asignatura.nombre}</Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        width: '100%',
        marginVertical: 10,
    },
    espacio: {
        paddingStart: 10
    },
    dataTable: {
        width: '100%',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderColor: 'gray',
        marginVertical: 2,
        marginTop: 5,
        marginStart: 7,
        marginEnd: 6,
    },
    dataTableCell: {
        fontSize: 13,
        paddingVertical: 1,
    },
    headerTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3,
        color: '#333',
        textAlign: 'center',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 3,
        color: '#333',
        textAlign: 'center',
    }
});
