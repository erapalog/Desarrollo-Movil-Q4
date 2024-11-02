import { View, Text, Switch, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { UseContext } from '../../Context/Provider';

export default function Configuraciones() {
    const { isDarkTheme, toggleTheme } = UseContext();

    return (
        <View style={[styles.container, isDarkTheme ? styles.darkBackground : styles.lightBackground]}>
            <View style={styles.header}>
                <Ionicons name="construct-outline" size={30} color={isDarkTheme ? "#fff" : "#000"} />
                <Text style={[styles.title, { color: isDarkTheme ? "#fff" : "#000" }]}>Configuraciones</Text>
            </View>
            <View style={styles.settingItem}>
                <Text style={[styles.settingText, { color: isDarkTheme ? "#fff" : "#000" }]}>Modo Oscuro</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleTheme}
                    value={isDarkTheme}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    settingText: {
        fontSize: 18,
    },
    lightBackground: {
        backgroundColor: '#fff',
    },
    darkBackground: {
        backgroundColor: '#333',
    },
});
