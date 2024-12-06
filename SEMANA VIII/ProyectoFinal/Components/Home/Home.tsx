import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function App() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(152, 132, 255, ${opacity})`, 
        strokeWidth: 3, 
      },
    ],
  }

  const chartConfig = {
    backgroundColor: '#f0f0f0',
    backgroundGradientFrom: '#f8f9fa',
    backgroundGradientTo: '#e6f7ff',
    decimalPlaces: 2, 
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 0.6) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726', 
    },
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.chartContainer}>
        <Text style={styles.title}>Gráfico de Línea</Text>
        <LineChart
          data={data}
          width={screenWidth - 60}
          height={240}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  chartContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  chart: {
    borderRadius: 16,
  },
});