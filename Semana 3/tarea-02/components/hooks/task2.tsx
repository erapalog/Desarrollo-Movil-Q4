import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import DataTable from "../Datatable";
import Picker from "../Picker";
import { getListUser, getListTimes } from '../../data/Data'; 
import { useAppContext } from '../../context/AppContext';

export default function Task2() {
  const { listStudents, setListStudents, selectTime, setSelectTime, active, setActive } = useAppContext();

  const data = getListUser();
  setSelectTime(3);

  const [count, setCount] = useState(data.length);

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
      <StatusBar style="auto" />
      <Text style={styles.label}>Update Status</Text>
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
