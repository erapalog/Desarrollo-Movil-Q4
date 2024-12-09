import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView, RefreshControl, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { UseContext } from '../Context/Provider';
import {useNavigation} from "@react-navigation/native";

export default function FlatListApp() {
  const navigation = useNavigation();

  const { listTaskTotal, applyFilter } = UseContext();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [selected, setSelected] = useState(-1);

  const [isRefreshing, setIsRefreshing] = useState(false);
    const onRefresh = () => {
        setIsRefreshing(true);
        applyFilter(-2);
        setTimeout(() => setIsRefreshing(false), 1500);
    }

  const filter = (estado:number) => {
    console.info("Filtrando resumen " + estado);
    setSelected(estado);
    applyFilter(estado);
    navigation.navigate("Tareas");
  }

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} tintColor="#3ADF00" /> } >
        { isRefreshing ? 
        <View style={{ alignItems: 'center', marginTop: 10 }}> 
          <Text>Actualizando...</Text>
        </View> : null }
    <View style={styles.container} >
      <Text style={styles.welcomeText}>Bienvenido</Text>
      <View style={styles.cardContainer}>
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <TouchableOpacity style={styles.cardContent} onPress={() => filter(1)}>
            <Ionicons name="alarm" size={32} color="gray" />
            <Text style={styles.cardText}> Por hacer  {selected == 1 ? <Ionicons name="checkmark-circle" size={22} color="green" />: null}</Text>
            <View style={styles.cardRight}>
              <Text style={styles.cardCount}>
                {listTaskTotal.filter(task => task.idestado == Number(1)).length}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <TouchableOpacity style={styles.cardContent} onPress={() => filter(2)}>
            <Ionicons name="bicycle" size={32} color="#0d6efd" />
            <Text style={styles.cardText}> En proceso  {selected == 2 ? <Ionicons name="checkmark-circle" size={22} color="green" />: null}</Text>
            <View style={styles.cardRight}>
              <Text style={styles.cardCount}>
                {listTaskTotal.filter(task => task.idestado == Number(2)).length}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <TouchableOpacity style={styles.cardContent} onPress={() => filter(3)}>
            <Ionicons name="hand-right" size={32} color="red" />
            <Text style={styles.cardText}> Atrasadas  {selected == 3 ? <Ionicons name="checkmark-circle" size={22} color="green" />: null}</Text>
            <View style={styles.cardRight}>
              <Text style={styles.cardCount}>
                {listTaskTotal.filter(task => task.idestado == Number(3)).length}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <TouchableOpacity style={styles.cardContent} onPress={() => filter(4)}>
            <Ionicons name="checkmark-circle" size={32} color="#4CAF50" />
            <Text style={styles.cardText}> Completadas  {selected == 4 ? <Ionicons name="checkmark-circle" size={22} color="green" />: null}</Text>
            <View style={styles.cardRight}>
              <Text style={styles.cardCount}>
                {listTaskTotal.filter(task => task.idestado == Number(4)).length}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <TouchableOpacity style={styles.cardContent} onPress={() => filter(6)}>
            <Ionicons name="close-circle" size={32} color="#FF5733" />
            <Text style={styles.cardText}> Canceladas  {selected == 6 ? <Ionicons name="checkmark-circle" size={22} color="green" />: null}</Text>
            <View style={styles.cardRight}>
              <Text style={styles.cardCount}>
                {listTaskTotal.filter(task => task.idestado == Number(6)).length}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <TouchableOpacity style={styles.cardContent} onPress={() => filter(5)}>
            <Ionicons name="trash" size={32} color="#FF5733" />
            <Text style={styles.cardText}> Borradas  {selected == 5 ? <Ionicons name="checkmark-circle" size={22} color="green" />: null}</Text>
            <View style={styles.cardRight}>
              <Text style={styles.cardCount}>
                {listTaskTotal.filter(task => task.idestado == Number(5)).length}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
          <TouchableOpacity style={styles.cardContent} onPress={() => filter(-1)}>
            <Ionicons name="calculator" size={32} color="gray" />
            <Text style={styles.cardText}> Todas  {selected == -1 ? <Ionicons name="checkmark-circle" size={22} color="green" />: null}</Text>
            <View style={styles.cardRight}>
              <Text style={styles.cardCount}>
                {listTaskTotal.length}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cardContainer: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cardText: {
    fontSize: 19,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  cardRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardCount: {
    fontSize: 23,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'black',
  }
})
