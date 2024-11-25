import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { DataTable } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { UseContext } from '../../Context/Provider';

export default function FlatListApp() {
    const { listAlumnos, setDataAlumno, openModalMatricula } = UseContext();

    return (
        <ScrollView style={styles.scrollContainer}>
            <DataTable style={styles.dataTable}>
                <DataTable.Header>
                    <DataTable.Title style={[styles.headerTitle, { flex: 2 }]}>
                        <Text style={styles.headerTitle}>Nombre</Text>
                    </DataTable.Title>
                    <DataTable.Title style={[styles.headerTitle, { flex: 2 }]}>
                        <Text style={styles.headerTitle}>F. Nacimiento</Text>
                    </DataTable.Title>
                </DataTable.Header>

                {listAlumnos.map((alumno, index) => (
                    <DataTable.Row key={index}>
                        <DataTable.Cell>
                            <Text style={styles.dataTableCell}>{alumno.nombre}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell>
                            <Text style={styles.dataTableCell}>{alumno.fecha_nacimiento}</Text>
                            <DataTable.Cell>
                                <TouchableOpacity style={styles.dataTableCell, styles.espacio} onPress={() => setDataAlumno(true, alumno)}>
                                    <Ionicons name="person-circle-outline" color={'black'} size={25} />
                                </TouchableOpacity>
                            </DataTable.Cell>
                            <DataTable.Cell>
                                <TouchableOpacity style={styles.dataTableCell, styles.espacio} onPress={() => openModalMatricula(true, alumno.id )}>
                                    <Ionicons name="list-outline" color={'black'} size={25} />
                                </TouchableOpacity>
                            </DataTable.Cell>
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
