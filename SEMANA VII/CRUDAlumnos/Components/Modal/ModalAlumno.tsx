import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import { UseContext } from '../../Context/Provider';

export default function ModalAlumno() {
    const { visibleModal, setVisibleModal, dataAlumno } = UseContext();

    return (
        <Modal  visible={visibleModal}  animationType="slide"  transparent={true}  onRequestClose={() => setVisibleModal(false)} >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Información del Alumno</Text>
                    {dataAlumno && (
                        <>
                            <Text style={styles.modalText}><b>Nombre:</b> {dataAlumno.nombre}</Text>
                            <Text style={styles.modalText}><b>Género:</b> {dataAlumno.genero == 1 ? 'Masculino': 'Femenino'}</Text>
                            <Text style={styles.modalText}><b>Fecha Nacimiento</b>: {dataAlumno.fecha_nacimiento}</Text>
                            <Text style={styles.modalText}><b>DNI:</b> {dataAlumno.dni}</Text>
                        </>
                    )}

                    <Button title="Cerrar" onPress={() => setVisibleModal(false)}  color="#007BFF"  />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    modalText: {
        fontSize: 13,
        color: '#555',
        marginBottom: 10,
        paddingHorizontal: 10,
        fontWeight: 'normal',
    },
});
