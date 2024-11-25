import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import { UseContext } from '../../Context/Provider';
import FlatListMatricula from '../FlatList/FlatListMatricula';

export default function ModalAsignatura() {
    const { visibleModalMat, setVisibleModalMat} = UseContext();
    
    return (
        <Modal visible={visibleModalMat} animationType="slide" transparent={true} onRequestClose={() => setVisibleModalMat(false)} >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Clases Matriculadas</Text>
                    <FlatListMatricula tipo={0} />
                    <Button title="Cerrar" onPress={() => setVisibleModalMat(false)} color="#007BFF" />
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
