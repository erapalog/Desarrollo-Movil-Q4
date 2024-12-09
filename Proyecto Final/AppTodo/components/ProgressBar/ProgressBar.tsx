import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Easing } from 'react-native';

const screenWidth = Dimensions.get('window').width;

interface Props {
  progressNumber: number;
  label: string;
}

export default function ProgressBar({ progressNumber, label }: Props) {
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: progressNumber,
      duration: 1000, 
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [progressNumber]);

  const animatedWidth = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <View style={styles.pendingBar}/>        
          <Animated.View style={[styles.progressBar, { width: animatedWidth, backgroundColor: '#0d6efd' }, ]} />
      </View>
      <Text style={styles.percentage}>  Avance {Math.round(progressNumber)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  barContainer: {
    width: '50%',
    height: 12,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 1,
    backgroundColor: '#d3d3d3',
    flexDirection: 'row',
  },
  progressBar: {
    height: '100%',
    borderRadius: 152,
  },
  pendingBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#d3d3d3',
  },
  percentage: {
    fontSize: 11,
  },
});
