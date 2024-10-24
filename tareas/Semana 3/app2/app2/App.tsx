import { StyleSheet, Text, View, FlatList} from 'react-native';
import Clase1 from './components/Clase1';
import { Personas } from './model/Personas';
import { Estudiantes } from './components/Hooks/Hooks_Estudiantes';

 const App: React.FC =  () => {
  
  const personas: Personas[] = Estudiantes();



  return (
  
    <View style={styles.container}>
    <Text style={styles.title}>Lista de Estudiantes</Text>
    <FlatList
      data={personas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.nombre}</Text>
        </View>
      )}
    />
  </View>

  );
}


export default App



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404131',
    alignItems: 'center',
    justifyContent:"center",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  item: {
    backgroundColor: '#2cecdd',
    padding: 15.5,
    borderBottomWidth: 2,
    borderColor: '#000000',
    width: '150%',
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});







/*  <View style={styles.container}>
      <Text>Primera aplicacion con React Native</Text>

      <Clase1 nombreAsignatura='Desarrollo Movil' duracionHoras={4}></Clase1>

    
    
    
    const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


    
      </View>*/ 