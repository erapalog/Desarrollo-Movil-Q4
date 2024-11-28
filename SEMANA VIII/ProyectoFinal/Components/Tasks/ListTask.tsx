import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { DataTable } from 'react-native-paper';
import { UseContext } from '../../Context/Provider';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function ListTask() {
    const { listaTareas } = UseContext();

    return (
        <>
            <ScrollView style={styles.scrollContainer}>
                <DataTable style={styles.dataTable}>
                    <DataTable.Header>
                        <DataTable.Title style={[styles.headerTitle, { flex: 2 }]}>
                            <Text style={styles.headerTitle}>Tarea</Text>
                        </DataTable.Title>
                    </DataTable.Header>

                    {listaTareas.map((task, index) => (
                        <DataTable.Row key={index} style={styles.cellBorder}>
                            <DataTable.Cell>
                                <View style={styles.taskContainer}>
                                    <Text style={styles.taskTitle}>
                                        {task.tarea.length >= 40 ? task.id+" | "+task.tarea.substring(0, 40) + "..." :task.id +" | "+task.tarea}
                                    </Text>
                                    {task.descripcion.length >= 53 ?
                                        <View>
                                            <Text style={styles.taskDescription} >{task.descripcion.substring(0, 53) + "..."}</Text>
                                            <Text style={styles.taskDescription} >{task.descripcion.substring(53, 150)}</Text>
                                        </View>
                                        :
                                        <Text style={styles.taskDescription}>{task.descripcion}</Text>
                                    }
                                    <Text style={styles.space}></Text>
                                    <View style={styles.taskRow}>
                                        <View style={styles.buttonContainer}>
                                            <TouchableOpacity style={{marginRight: 15}}>
                                                <Ionicons name={task.icon_app} color={'#3498db'} size={22} style={{marginLeft: 18}}/>
                                                <Text style={{fontSize: 13}}>{task.categoria}</Text>
                                            </TouchableOpacity>
                                            <ScrollView contentContainerStyle={styles.container}>
                                                <ProgressBar progress={task.avance} label={task.avence} />
                                            </ScrollView>
                                            <TouchableOpacity style={[styles.button, styles.editButton]}>
                                                <Ionicons name="create-outline" color={'#3498db'} size={22} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[styles.button, styles.editButton]}>
                                                <Ionicons name="checkmark-circle" color={'#3498db'} size={22} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[styles.button, styles.editButton]}>
                                                <Ionicons name="close-circle" color={'#3498db'} size={22} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[styles.button, styles.editButton]}>
                                                <Ionicons name="trash-bin" color={'#3498db'} size={22} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        width: '100%',
        marginVertical: 10,
    },
    cellBorder: {
        borderColor: 'gray',
        borderWidth: 1,
    },
    space: {
        marginBottom: 1
    },
    dataTable: {
        width: '100%',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderColor: 'gray',
        marginVertical: 2,
        marginTop: 3,
        marginStart: 1,
        marginEnd: 1,
    },
    dataTableCell: {
        fontSize: 18,
        paddingVertical: 1,
    },
    headerTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#333',
        textAlign: 'center',
    },
    taskContainer: {
        padding: 2,
        marginBottom: 1,
    },
    taskRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskTitle: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginRight: 1,
        marginTop: 2,
        marginBottom: 2,
    },
    button: {
        marginLeft: 3,
        padding: 2,
        borderWidth: 1,
        borderRadius: 0,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editButton: {
        borderColor: '#3498db',
        marginRight: 10,
    },
    completeButton: {
        borderColor: '#27ae60',
        marginRight: 10,
    },
    taskDescription: {
        fontSize: 13,
        color: '#7f8c8d',
        marginTop: 2,
        flexWrap: 'wrap',
        width: '100%',
        flexShrink: 1,
    },
});
