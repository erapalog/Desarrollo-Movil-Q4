import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import { UseContext } from '../Context/Provider';

export default function Listitem() {
    const [tarea, setTarea] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('personal');
    const [prioridad, setPrioridad] = useState('baja');

    const handleSubmit = () => {
        // Aquí podrías agregar lógica para guardar la tarea
        console.log({
          tarea,
          descripcion,
          categoria,
          prioridad,
        });
      };
      
      <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Nueva Tarea" subtitle="Llena los datos de la tarea" />
        <Card.Content>
          <TextInput
            label="Tarea"
            value={tarea}
            onChangeText={(text) => setTarea(text)}
            style={styles.input}
          />

          <TextInput
            label="Descripción"
            value={descripcion}
            onChangeText={(text) => setDescripcion(text)}
            style={styles.input}
            multiline
            numberOfLines={4}
          />

          <View style={styles.pickerContainer}>
            <Text>Categoría</Text>
            <Picker
              selectedValue={categoria}
              onValueChange={(itemValue) => setCategoria(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Personal" value="personal" />
              <Picker.Item label="Laboral" value="laboral" />
              <Picker.Item label="Educativo" value="educativo" />
              <Picker.Item label="Negocio" value="negocio" />
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Text>Prioridad</Text>
            <Picker
              selectedValue={prioridad}
              onValueChange={(itemValue) => setPrioridad(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Baja" value="baja" />
              <Picker.Item label="Media" value="media" />
              <Picker.Item label="Alta" value="alta" />
            </Picker>
          </View>

          <Button mode="contained" onPress={handleSubmit} style={styles.button}>
            Crear Tarea
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 16,
      backgroundColor: '#f4f4f9',
    },
    card: {
      borderRadius: 12,
      marginBottom: 20,
      backgroundColor: '#ffffff',
    },
    input: {
      marginBottom: 12,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      paddingLeft: 10,
    },
    pickerContainer: {
      marginBottom: 12,
    },
    picker: {
      height: 50,
      borderRadius: 8,
      backgroundColor: '#f0f0f0',
    },
    button: {
      marginTop: 12,
      backgroundColor: '#6200ea',
      borderRadius: 8,
    },
  });