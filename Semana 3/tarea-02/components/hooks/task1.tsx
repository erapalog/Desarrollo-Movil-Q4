import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import DataTable from "../Datatable";
import Picker from "../Picker";
import { getListUser, getListTimes } from '../../data/Data'; 

export default function Task1() {

  const data = getListUser();

  const [count, setCount] = useState(data.length);
  const [listStudents, setListStudents] = useState(data);
  const [selectTime, setSelectTime] = useState(3);
  const [active, setActive] = useState(true);

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
      console.info("Agregando " + next);
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
        <Picker selectedValue={selectTime}  onValueChange={(itemValue) => setSelectTime(Number(itemValue))} listValues={getListTimes()} />
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Detener" onPress={stopHandler}/>
        </View>
        
        <DataTable list={listStudents} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: "#f8f9fa",
    width: "100%",
  },
  label: {
    fontSize: 12,
    marginBottom: 9,
  },
});
