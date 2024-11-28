import React from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function ProgressBar({ progress, label }) {
    const animatedProgress = new Animated.Value(0);
    React.useEffect(() => {Animated.timing(animatedProgress, { toValue: progress, duration: 1000, useNativeDriver: false, }).start();
    }, [progress]);

    const progressWidth = animatedProgress.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={styles.container}>
            <View style={styles.progressBarBackground}>
                <Animated.View style={[styles.progressBarFill, { width: progressWidth},]}/>
            </View>
            <Text style={styles.percentage}>Avance: {progress}%</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: screenWidth - 30,
        alignItems: 'flex-start',
        marginVertical: 1,
    },
    label: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    progressBarBackground: {
        width: '28%',
        height: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 6,
        overflow: 'hidden',
        marginBottom: 3,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#3498db',
        borderRadius: 6,
    },
    percentage: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#3498db',
    },
});
