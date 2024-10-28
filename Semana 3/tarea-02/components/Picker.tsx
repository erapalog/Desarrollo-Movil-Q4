import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker as ListPicker } from '@react-native-picker/picker';

interface ListTimes {
  id: number;
  title: string;
}

interface Props {
  selectedValue: number | string;
  onValueChange: (itemValue: number | string) => void;
  listValues: ListTimes[];
}

export default function Picker({ selectedValue, onValueChange, listValues }: Props) {
  return (
    <View style={styles.container}>
      <ListPicker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}
      >
        <ListPicker.Item label="Seleccione una opción" value="" />
        {listValues.map((item) => (
          <ListPicker.Item key={item.id} label={item.title} value={item.id} />
        ))}
      </ListPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  picker: {
    height: 30,
    width: '100%',
  },
});
