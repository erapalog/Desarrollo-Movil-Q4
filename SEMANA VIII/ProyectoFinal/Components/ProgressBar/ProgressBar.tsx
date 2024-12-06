import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import * as Progress from 'react-native-progress';

const screenWidth = Dimensions.get('window').width;
interface props {
    progressNumber: number;
    label: string;
}

export default function ProgressBar({ progressNumber, label }: props) {
    const [progress, setProgress] = useState(progressNumber);

  useEffect(() => {
    if (progress < 1) {
      const interval = setInterval(() => {
        setProgress(prevProgress => Math.round(Math.min(prevProgress + 0.01, 1)));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [progress]);

  return (
    <View style={styles.container}>
      <Progress.Bar 
        progress={progress} 
        width={100} 
        height={10}
        color="#0d6efd"
        unfilledColor="#e0e0e0"
        borderRadius={5}
        borderWidth={0}
      />
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 1,
    },
    title: {
      fontSize: 10,
      fontWeight: '600',
      marginBottom: 1,
      color: '#333',
    },
    progressText: {
      marginTop: 5,
      fontSize: 12,
      color: '#333',
      fontWeight: '500',
    }
  });
  