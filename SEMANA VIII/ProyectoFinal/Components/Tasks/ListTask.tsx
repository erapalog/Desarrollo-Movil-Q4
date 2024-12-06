import React, { useContext, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, RefreshControl, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DataTable } from 'react-native-paper';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Swipeable } from 'react-native-gesture-handler';
import { UseContext } from '../../Context/Provider';

export default function Listitem() {
    const { listTask, applyFilter, estadoFiltro } = UseContext();
    const [openSwipeableId, setOpenSwipeableId] = useState(-1);
    const swipeableRefs = useRef({});

    const [isRefreshing, setIsRefreshing] = useState(false);
    const onRefresh = () => {
        setIsRefreshing(true);
        applyFilter(estadoFiltro);
        setTimeout(() => setIsRefreshing(false), 2000);
    }

    const handleSwipeableOpen = (itemId: number) => {
        if (openSwipeableId !== itemId) {
            if (openSwipeableId !== null && swipeableRefs.current[openSwipeableId]) {
                swipeableRefs.current[openSwipeableId].close();
            }
            setOpenSwipeableId(itemId);
        } else {
            setOpenSwipeableId(-1);
        }
    }

    const [isColor, setIsColor] = useState(false);
    const toggleColor = () => setIsColor(!isColor);

    const [lastClickTime, setLastClickTime] = useState(0);
    const handlerDoubleClick = (taskId: number) => {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime < 300) {
            console.info(taskId + " Lo hice!!!");
        }
        setLastClickTime(currentTime);
    }
    
    const handlerStatus = (taskId: number, idEstado: number) => {
        console.log("Cambio estado tarea con ID:", taskId, "Nuevo estado:", idEstado);
    }
    
    const renderLeftActions = (taskId: number, statusId: number) => {
        return statusId < 4 ? (
            <View style={styles.leftActions}>
                <TouchableOpacity onPress={() => handlerStatus(taskId, 4)} style={styles.actionButton}>
                    <Ionicons name="checkmark-circle" color={'#4CAF50'} size={30} />
                </TouchableOpacity>
            </View>
        ) : (
            <View style={styles.noActions}>
                <Ionicons name="close-circle" color={'#6c757d'} size={30} />
                <Text style={styles.noActionText}>No disponible</Text>
            </View>
        );
    }

    const renderRightActions = (taskId: number, statusId: number) => {
        return statusId < 4 ? (
            <View style={styles.rightActions}>
                <TouchableOpacity onPress={() => handlerStatus(taskId, 6)} style={styles.actionButton}>
                    <Ionicons name="close-circle" color={'#FF5733'} size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlerStatus(taskId, 5)} style={styles.actionButton}>
                    <Ionicons name="trash-bin" color={'#FF5733'} size={30} />
                </TouchableOpacity>
            </View>
        ) : (
            <View style={styles.noActions}>
                <Ionicons name="close-circle" color={'#6c757d'} size={30} />
                <Text style={styles.noActionText}>No disponible</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={[styles.settingRow, { backgroundColor: 'white', height: '7%' }]}>
                <View style={styles.settingItem}>
                    <Text style={styles.settingText}>Marcar Estados</Text>
                    <Switch trackColor={{ false: "#BDBDBD", true: "#58FA58" }} thumbColor={isColor ? "white" : 'white'} onValueChange={toggleColor} value={isColor} />
                </View>
            </View>

            <FlatList
                data={listTask}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.id} onPress={() => handlerDoubleClick(item.id)}>
                        <Swipeable
                            key={item.id}
                            ref={(ref) => (swipeableRefs.current[item.id] = ref)}
                            onSwipeableWillOpen={() => handleSwipeableOpen(item.id)}
                            onSwipeableClose={() => setOpenSwipeableId(-1)}
                            renderRightActions={() => renderRightActions(item.id, item.idestado)}
                            renderLeftActions={() => renderLeftActions(item.id, item.idestado)}
                        >
                            <DataTable.Row style={isColor ? [styles.cellBorder, { marginTop: 5, backgroundColor: `${item.color}`, borderColor: item.border_class, borderWidth: 2 }] : [styles.cellBorder, { marginTop: 5, backgroundColor: 'white' }]}>
                                <DataTable.Cell>
                                    <View style={styles.itemContainer}>
                                        <Text style={styles.itemTitle}>
                                            {item.tarea.length >= 45 ? `${item.id} | ${item.tarea.substring(0, 45)}...` : `${item.id} | ${item.tarea}`}
                                        </Text>
                                        {item.descripcion.length >= 57 ? (
                                            <View>
                                                <Text style={styles.itemDescription}>{item.descripcion.substring(0, 57)}...</Text>
                                                <Text style={styles.itemDescription}>{item.descripcion.substring(57, 150)}</Text>
                                            </View>
                                        ) : (
                                            <Text style={styles.itemDescription}>{item.descripcion}</Text>
                                        )}
                                        <View style={styles.itemRow}>
                                            <View style={styles.buttonContainer}>
                                                <TouchableOpacity style={styles.iconButton}>
                                                    <Ionicons name={item.icon_app} color={'#0d6efd'} size={22} />
                                                    <Text style={styles.iconLabel}>{item.categoria}</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.iconButton}>
                                                    <Ionicons name={item.tarea_icon_app} color={item.color} size={22} />
                                                    <Text style={styles.iconLabel}>{item.estado}</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <ScrollView contentContainerStyle={styles.progressContainer}>
                                                <ProgressBar progressNumber={item.avance} label={item.avance} />
                                            </ScrollView>
                                        </View>
                                    </View>
                                </DataTable.Cell>
                            </DataTable.Row>
                        </Swipeable>
                    </TouchableOpacity>
                )}
                refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FE2E9A' },
    settingRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 20 },
    settingItem: { flexDirection: 'row', alignItems: 'center' },
    settingText: { fontSize: 14, color: '#333', marginRight: 8 },
    cellBorder: { borderColor: '#e0e0e0', borderWidth: 1, borderRadius: 8 },
    itemContainer: { padding: 0 },
    itemTitle: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 2 },
    itemDescription: { fontSize: 12, color: '#555', marginBottom: 2 },
    itemRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    buttonContainer: { flexDirection: 'row', alignItems: 'center' },
    iconButton: { flexDirection: 'row', alignItems: 'center', marginRight: 18 },
    iconLabel: { fontSize: 12, color: '#6c757d', marginLeft: 4 },
    progressContainer: { marginTop: 6, marginRight: 10 },
    actionButton: { marginRight: 12, padding: 8, borderRadius: 50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' },
    leftActions: {
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8,
    },
    rightActions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF5733',
        padding: 10,
        borderRadius: 8,
    },
    noActions: {
        backgroundColor: '#E6E6E6',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
    }, noActionText: {
        fontSize: 13,
        color: '#6c757d',
    },
});