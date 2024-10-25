import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { DataTable } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

export default function Task1() {
  const data = [
    { id: 1, name: "Juan R. Aguilar" },
    { id: 2, name: "Juan F. Ulloua" },
    { id: 3, name: "Abel L. Ruiz" },
    { id: 4, name: "Marcela J. Gutierrez" },
    { id: 5, name: "Roger J. Aguilera" },
    { id: 6, name: "Diana E. Paz" },
    { id: 7, name: "Jose A. Fernandez" },
    { id: 8, name: "Julissa E. Hoya" },
    { id: 9, name: "Javier A. Alonso" },
    { id: 10, name: "Tatiana W. Guilllen" },
  ];

  const [count, setCount] = useState(data.length);
  const [listStudents, setListStudents] = useState(data);
  const [selectTime, setSelectTime] = useState(3);
  const [active, setActive] = useState(true);

  const listTimes = [
    { id: 3, title: "3" },
    { id: 5, title: "5" },
    { id: 10, title: "10" },
    { id: 15, title: "15" },
  ];

  useEffect(() => {
    const time = setInterval(() => {
      if (active) { 
        addStudents(); 
      }
    }, selectTime * 1000);

    return () => clearInterval(time);
  }, [active, selectTime]);

  function addStudents() {   
    
    setCount(prevCount => {
      const next = prevCount + 1;
      console.info("Agregando "+next);
      const randomId = Math.floor(Math.random() * prevCount);
      const student = { ...listStudents[randomId] };
      student.id = next;

      setListStudents(prevStudents => [...prevStudents, student]);
      return next;
    });
  }

  const stopHandler = () => {
    setActive(prevActive => false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tiempo actualización</Text>
      <Picker
        selectedValue={selectTime} onValueChange={(itemValue) => setSelectTime(itemValue)} style={styles.picker} >
        <Picker.Item label="Seleccione una opción" value="" />
        {listTimes.map((object) => (
          <Picker.Item key={object.id} label={object.title} value={object.id} />
        ))}
      </Picker>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Detener" onPress={stopHandler} />
      </View>

      <DataTable>
        <DataTable.Header style={styles.header}>
          <DataTable.Title style={styles.col} numeric>Id</DataTable.Title>
          <DataTable.Title style={styles.col}>Name</DataTable.Title>
        </DataTable.Header>

        {listStudents.map((item) => (
          <DataTable.Row key={item.id} style={styles.row}>
            <DataTable.Cell numeric style={styles.cell}>
              {item.id}
            </DataTable.Cell>
            <DataTable.Cell style={styles.cell}>{item.name}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: "#f8f9fa",
    width: "100%",
  },
  header: {
    backgroundColor: "ffffff",
    color: '#ffffff'
  },
  col: {
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
  },
  row: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6"
  },
  cell: {
    padding: 12,
    textAlign: "left",
    fontSize: 16,
    color: "#495057",
  },
  label: {
    fontSize: 12,
    marginBottom: 9,
  },
  picker: {
    height: 30,
    width: "100%",
    marginBottom: 10,
  },
});
