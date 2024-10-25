import { View, Text, FlatList,StyleSheet } from 'react-native'
import React from 'react'
import { Estudiante } from '../Modelos/Estudiante'

type Lista={
    listaEstudiante:Estudiante[],
}
export default function FlatListEstudiante(props:Lista) {
  return (
    <View>
       <FlatList data={props.listaEstudiante} 
                keyExtractor={item => item.id.toString()}  
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                            <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                )}
                scrollEnabled={true}
            >
        </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    itemText: {
      fontSize: 18,
    },
  });