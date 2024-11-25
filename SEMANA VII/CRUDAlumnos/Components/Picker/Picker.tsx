import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PickerProps {
  selectedValue: string; 
  onValueChange: (itemValue: string) => void; 
  listValues: { id: string, nombre: string }[]; 
}

export default function PickerComponent({ selectedValue, onValueChange, listValues }: PickerProps) {
  return (
    <View style={styles.pickerContainer}>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange} >
        {listValues.map((value, index) => (
          <Picker.Item key={index} label={value.nombre} value={value.id} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    height: 50,
    width: '85%',
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  }
});
