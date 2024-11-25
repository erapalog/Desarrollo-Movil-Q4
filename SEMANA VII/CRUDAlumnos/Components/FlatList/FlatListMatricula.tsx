import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { DataTable } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { UseContext } from '../../Context/Provider';

interface FlatMatProps {
  tipo: number;
}

const FlatListMatricula: React.FC<FlatMatProps> = ({ tipo }) => {
  const { listMatricula, borrarClase } = UseContext();

  return (
    <ScrollView style={styles.scrollContainer}>
      <DataTable style={styles.dataTable}>
        <DataTable.Header>
          <DataTable.Title style={[styles.headerTitle, { flex: 2 }]}>
            <Text style={styles.headerTitle}>Alumno</Text>
          </DataTable.Title>
          <DataTable.Title style={[styles.headerTitle, { flex: 2 }]}>
            <Text style={styles.headerTitle}>Asignatura</Text>
          </DataTable.Title>
          <DataTable.Title style={[styles.headerTitle, { flex: 2 }]}>
            <Text style={styles.headerTitle}></Text>
          </DataTable.Title>
        </DataTable.Header>

        {listMatricula.map((mat, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>
              <Text style={styles.dataTableCell}>{mat.id_alumno}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={styles.dataTableCell}>{mat.id_asignatura}</Text>
              {tipo === 1 ? (
                <TouchableOpacity style={[styles.dataTableCell, styles.espacio]} onPress={() => borrarClase(mat.id, mat.id_alumno)} >
                  <Ionicons name="trash-bin-outline" color={'black'} size={18} />
                </TouchableOpacity>
              ) : null}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
    marginVertical: 10,
  },
  espacio: {
    paddingStart: 10,
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
  },
});

export default FlatListMatricula;
