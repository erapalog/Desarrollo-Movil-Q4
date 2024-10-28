import React from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';

interface Student {
  id: number;
  name: string;
}

interface Props {
  list: Student[];
}

export default function Datatable({ list }: Props) {
  return (
    <DataTable>
      <DataTable.Header style={styles.header}>
        <DataTable.Title style={styles.col}><Text>Id</Text></DataTable.Title>
        <DataTable.Title style={styles.col}><Text>Name</Text></DataTable.Title>
      </DataTable.Header>

      {list.map((item) => (
        <DataTable.Row key={item.id} style={styles.row}>
          <DataTable.Cell numeric style={styles.cell}>{item.id}</DataTable.Cell>
          <DataTable.Cell style={styles.cell}>{item.name}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f0f0f0',
  },
  col: {
    flex: 1,
  },
  row: {
    backgroundColor: '#ffffff',
  },
  cell: {
    padding: 10,
  },
});
