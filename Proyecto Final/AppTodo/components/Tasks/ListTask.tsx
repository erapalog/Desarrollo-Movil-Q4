import React, { useContext, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, RefreshControl, FlatList, ScrollView, Alert, TextInput, Keyboard } from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { DataTable } from 'react-native-paper';
import ProgressBar from '../ProgressBar/ProgressBar';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { FAB, Modal, Portal } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Task } from '../../Models/Task';

import { UseContext } from '../Context/Provider';

export default function Listitem() {

    const { listTask, applyFilter, estadoFiltro, execute, updateTaskStatus, createTask, editTask, id, setId, tarea, setTarea, descripcion, setDescripcion, avance, setAvance, idPrioridad, setIdPrioridad, idEstado, setIdEstado, idCategoria, setIdCategoria } = UseContext();
    const [openSwipeableId, setOpenSwipeableId] = useState(-1);
    const swipeableRefs = useRef({});

    const [visibleModalNew, setVisibleModalNew] = useState(false);
    const showModalNew = () => setVisibleModalNew(true);
    const hideModalNew = () => setVisibleModalNew(false);

    const [visibleModalEdit, setVisibleModalEdit] = useState(false);
    const showModalEdit = () => setVisibleModalEdit(true);
    const hideModalEdit = () => setVisibleModalEdit(false);

    const CreateTask = () => {
        createTask(tarea, descripcion, valueIdCategoria, valueIdPrioridad);
        hideModalNew();
    };

    const saveTask = () => {
        editTask(id, tarea, descripcion, valueIdCategoria, valueIdPrioridad, avance, valueIdEstado);
        hideModalEdit();
    };

    const [isRefreshing, setIsRefreshing] = useState(false);
    const onRefresh = () => {
        setIsRefreshing(true);
        applyFilter(estadoFiltro);
        setTimeout(() => setIsRefreshing(false), 1200);
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
    const dobleClick = (task: Task) => {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime < 300) {
            openEditModal(task);
        }
        setLastClickTime(currentTime);
    }

    const handlerStatus = (taskId: number, idEstado: number, avance: number) => {
        console.log("Cambio estado tarea con ID:", taskId, "Nuevo estado:", idEstado + ", avance: ", avance);
        Alert.alert(
            "Actualización de tarea",
            "¿Desea cambiar el estado a esta tarea?",
            [
                { text: "No", style: "cancel", },
                { text: "Sí", onPress: () => updateTaskStatus(taskId, idEstado, avance), },
            ], { cancelable: false })
        setOpenSwipeableId(-1);
    }

    const renderLeftActions = (taskId: number, statusId: number, avance: number) => {
        return statusId < 4 ? (
            <View style={styles.leftActions}>
                <TouchableOpacity onPress={() => handlerStatus(taskId, 4, avance)} style={styles.actionButton}>
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
                <TouchableOpacity onPress={() => handlerStatus(taskId, 6, 0)} style={styles.actionButton}>
                    <Ionicons name="close-circle" color={'#FF5733'} size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlerStatus(taskId, 5, 0)} style={styles.actionButton}>
                    <Ionicons name="trash" color={'#FF5733'} size={30} />
                </TouchableOpacity>
            </View>
        ) : (
            <View style={styles.noActions}>
                <Ionicons name="close-circle" color={'#6c757d'} size={30} />
                <Text style={styles.noActionText}>No disponible</Text>
            </View>
        )
    }

    const getColor = (idestado) => {
        switch (idestado) {
            case 1:
                return 'gray';
            case 2:
                return '#0d6efd';
            case 3:
                return 'red';
            case 4:
                return '#4CAF50';
            case 5:
                return '#FF5733';
            case 6:
                return 'gray';
            default:
                return 'black';
        }
    };

    const listCategorias = [
        { id: '1', nombre: "Personal" },
        { id: '2', nombre: "Familiar" },
        { id: '3', nombre: "Laboral" },
        { id: '4', nombre: "Negocio" },
        { id: '5', nombre: "Educativo" },
        { id: '6', nombre: "Recordatorio" },
    ];

    const listPrioridad = [
        { id: '1', nombre: "Baja" },
        { id: '2', nombre: "Media" },
        { id: '3', nombre: "Alta" },
    ];

    const listEstado = [
        { id: '1', nombre: "Por hacer" },
        { id: '2', nombre: "En progreso" },
        { id: '3', nombre: "Atrasada" },
        { id: '4', nombre: "Finalizada" },
        { id: '5', nombre: "Borrado" },
        { id: '6', nombre: "Cancelada" },
    ];

    const [valueIdCategoria, setValueIdCategoria] = useState(null);
    const [valueIdPrioridad, setValueIdPrioridad] = useState(null);
    const [valueIdEstado, setValueIdEstado] = useState(null);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const [isFocus3, setIsFocus3] = useState(false);

    const openEditModal = (task: Task) => {
        setId(task.id);
        setTarea(task.tarea);
        setDescripcion(task.descripcion);
        setIdCategoria(task.idcategoria);
        setIdPrioridad(task.idPrioridad);
        setAvance(task.avance);
        setIdEstado(task.idestado);
        setValueIdPrioridad(task.idPrioridad);
        setValueIdCategoria(task.idcategoria);
        setValueIdEstado(task.idestado);
        showModalEdit();
    }

    const avanceEdit = (avance: string) => {
        setAvance(Number(avance));
    }

    const cerrarTeclado = () => {
        Keyboard.dismiss();
    };

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
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => dobleClick(item)}>
                            <Swipeable
                                ref={(ref) => (swipeableRefs.current[item.id] = ref)}
                                onSwipeableWillOpen={() => handleSwipeableOpen(item.id)}
                                onSwipeableClose={() => setOpenSwipeableId(-1)}
                                renderRightActions={() => renderRightActions(item.id, item.idestado)}
                                renderLeftActions={() => renderLeftActions(item.id, item.idestado, item.avance)} >
                                <DataTable.Row
                                    style={!isColor ? [styles.cellBorder, {}]
                                        : [styles.cellBorder, { borderColor: item.border_class, borderWidth: 2, borderBottomColor: item.border_class, borderBottomWidth: 2 }]}>
                                    <DataTable.Cell>
                                        <View style={styles.itemContainer}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <View style={[styles.iconButton, { marginTop: 4 }]}>
                                                    <Ionicons name={item.icon_app} color={'#0d6efd'} size={17} />
                                                    <Text style={styles.iconLabel}>{item.categoria}</Text>
                                                </View>
                                                <View style={[styles.iconButton, { marginTop: 4 }]}>
                                                    <Ionicons name="pricetags" color={item.idPrioridad === 1 ? '#01DF01' : item.idPrioridad === 2 ? '#FFBF00' : '#FF0000'} size={17} />
                                                    <Text style={styles.iconLabel}>{item.prioridad}</Text>
                                                </View>
                                                <View style={[styles.iconButton, { marginTop: 4 }]}>
                                                    <Ionicons name={item.tarea_icon_app} size={17} color={getColor(item.idestado)} />
                                                    <Text style={styles.iconLabel}>{item.estado}</Text>
                                                </View>
                                            </View>
                                            <Text style={!isColor ? [styles.itemTitle, { borderBottomWidth: 1, borderBottomColor: getColor(1) }]
                                                : [styles.itemTitle, { borderBottomWidth: 2, borderBottomColor: getColor(item.idestado) }]}>
                                                {item.tarea.length >= 45 ? `${item.id} | ${item.tarea.substring(0, 45)}...` : `${item.id} | ${item.tarea}`}
                                            </Text>
                                            {
                                                item.descripcion.length >= 130 ?
                                                    <View>
                                                        <Text style={styles.itemDescription}>{item.descripcion.substring(0, 65)}...</Text>
                                                        <Text style={styles.itemDescription}>{item.descripcion.substring(65, 150)}</Text>
                                                    </View> :
                                                    <View>
                                                        <Text style={styles.itemDescription}>{item.descripcion}</Text>
                                                    </View>
                                            }
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Text style={styles.itemDetalles}>
                                                    Fecha: {item.fecha_creacion}
                                                </Text>
                                                <ScrollView style={styles.progressContainer}>
                                                    <ProgressBar progressNumber={item.avance} label={item.avance} />
                                                </ScrollView>
                                            </View>
                                        </View>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            </Swipeable>
                        </TouchableOpacity>
                    )
                }}
                refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} tintColor="#3ADF00" />} ListHeaderComponent={
                    isRefreshing ?
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Text>Actualizando...</Text>
                        </View>
                        : null
                }
            />
            <FAB style={styles.fab} icon="plus" color='white' onPress={showModalNew} />

            <Portal>
                <Modal visible={visibleModalNew} onDismiss={hideModalNew} contentContainerStyle={styles.modalContainer} animationType="slide">
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                            <TouchableOpacity>
                                <Ionicons name="keypad" color={'#0d6efd'} size={22} onPress={cerrarTeclado} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="close" color={'gray'} size={25} onPress={hideModalNew} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.modalTitle}>Crear Nueva Tarea</Text>
                            <TextInput style={styles.input} placeholder="Nombre de Tarea" onChangeText={setTarea} placeholderTextColor="#aaa" keyboardType='default' />
                            <TextInput style={[styles.input, styles.textarea]} placeholder="Descripción de la tarea" onChangeText={setDescripcion} placeholderTextColor="#aaa" multiline={true} numberOfLines={4} keyboardType='default' />
                            <Text>Categoria</Text>
                            <View>
                                <Dropdown
                                    style={[styles.dropdown, isFocus1 && { borderColor: 'blue' }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={listCategorias}
                                    search
                                    maxHeight={300}
                                    labelField="nombre"
                                    valueField="id"
                                    placeholder={!isFocus1 ? 'Selecciona categoria' : '...'}
                                    searchPlaceholder="Search..."
                                    value={valueIdCategoria}
                                    onFocus={() => { setIsFocus1(true); cerrarTeclado(); }}
                                    onBlur={() => setIsFocus1(false)}
                                    onChange={item => {
                                        setValueIdCategoria(item.id);
                                        setIsFocus1(false);
                                    }}
                                    renderLeftIcon={() => (
                                        <AntDesign
                                            style={styles.icon}
                                            color={isFocus1 ? 'blue' : 'black'}
                                            name="Safety"
                                            size={20}
                                        />
                                    )}
                                />
                            </View>
                            <Text>Prioridad</Text>
                            <View>
                                <Dropdown
                                    style={[styles.dropdown, isFocus2 && { borderColor: 'blue' }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={listPrioridad}
                                    search
                                    maxHeight={300}
                                    labelField="nombre"
                                    valueField="id"
                                    placeholder={!isFocus2 ? 'Selecciona prioridad' : '...'}
                                    searchPlaceholder="Search..."
                                    value={valueIdPrioridad}
                                    onFocus={() => { setIsFocus2(true); cerrarTeclado(); }}
                                    onBlur={() => setIsFocus2(false)}
                                    onChange={item => {
                                        setValueIdPrioridad(item.id);
                                        setIsFocus2(false);
                                    }}
                                    renderLeftIcon={() => (
                                        <AntDesign
                                            style={styles.icon}
                                            color={isFocus2 ? 'blue' : 'black'}
                                            name="Safety"
                                            size={20}
                                        />
                                    )}
                                />
                            </View>
                            <TouchableOpacity style={styles.submitButton} onPress={CreateTask}>
                                <Ionicons name="checkmark-circle" color={'white'} size={26} onPress={cerrarTeclado} />
                                <Text style={styles.submitButtonText}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </Portal>

            <Portal>
                <Modal visible={visibleModalEdit} onDismiss={hideModalEdit} contentContainerStyle={styles.modalContainer} animationType="slide">
                    <View >
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                                <TouchableOpacity>
                                    <Ionicons name="keypad" color={'#0d6efd'} size={22} onPress={cerrarTeclado} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="close" color={'gray'} size={25} onPress={hideModalEdit} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.modalTitle}>Modificar Tarea</Text>
                            <TextInput style={styles.input} defaultValue={tarea} placeholder="Nombre de Tarea" onChangeText={setTarea} placeholderTextColor="#aaa" keyboardType='default' />
                            <TextInput style={[styles.input, styles.textarea]} defaultValue={descripcion} placeholder="Descripción de la tarea" onChangeText={setDescripcion} placeholderTextColor="#aaa" multiline={true} numberOfLines={4} keyboardType='default' />
                            <Text>Categoria</Text>
                            <View>
                                <Dropdown
                                    style={[styles.dropdown, isFocus1 && { borderColor: 'blue', borderWidth: 2 }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={listCategorias}
                                    search
                                    maxHeight={300}
                                    labelField="nombre"
                                    valueField="id"
                                    placeholder={!isFocus1 ? 'Selecciona categoria' : '...'}
                                    searchPlaceholder="Search..."
                                    value={"" + idCategoria}
                                    onFocus={() => { setIsFocus1(true); cerrarTeclado(); }}
                                    onBlur={() => setIsFocus1(false)}
                                    onChange={item => {
                                        setValueIdCategoria(item.id);
                                        setIsFocus1(false);
                                    }}
                                    renderLeftIcon={() => (
                                        <AntDesign
                                            style={styles.icon}
                                            color={isFocus1 ? '#0d6efd' : 'green'}
                                            name="Safety"
                                            size={20}
                                        />
                                    )}
                                />
                            </View>
                            <Text>Prioridad</Text>
                            <View>
                                <Dropdown
                                    style={[styles.dropdown, isFocus2 && { borderColor: 'blue', borderWidth: 2 }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={listPrioridad}
                                    search
                                    maxHeight={300}
                                    labelField="nombre"
                                    valueField="id"
                                    placeholder={!isFocus2 ? 'Selecciona prioridad' : '...'}
                                    searchPlaceholder="Search..."
                                    value={"" + idPrioridad}
                                    onFocus={() => { setIsFocus2(true); cerrarTeclado(); }}
                                    onBlur={() => setIsFocus2(false)}
                                    onChange={item => {
                                        setValueIdPrioridad(item.id);
                                        setIsFocus2(false);
                                    }}
                                    renderLeftIcon={() => (
                                        <AntDesign
                                            style={styles.icon}
                                            color={isFocus2 ? '#0d6efd' : 'green'}
                                            name="Safety"
                                            size={20}
                                        />
                                    )}
                                />
                            </View>
                            <Text>Estado</Text>
                            <View>
                                <Dropdown
                                    style={[styles.dropdown, isFocus3 && { borderColor: '#0d6efd', borderWidth: 2 }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={listEstado}
                                    search
                                    maxHeight={300}
                                    labelField="nombre"
                                    valueField="id"
                                    placeholder={!isFocus3 ? 'Selecciona Estado' : '...'}
                                    searchPlaceholder="Search..."
                                    value={"" + idEstado}
                                    onFocus={() => { setIsFocus3(true); cerrarTeclado(); }}
                                    onBlur={() => setIsFocus3(false)}
                                    onChange={item => {
                                        setValueIdEstado(item.id);
                                        setIsFocus3(false);
                                    }}
                                    renderLeftIcon={() => (
                                        <AntDesign
                                            style={styles.icon}
                                            color={isFocus3 ? '#0d6efd' : 'green'}
                                            name="Safety"
                                            size={20}
                                        />
                                    )}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <TextInput style={[styles.input2]} defaultValue={"" + avance} placeholder="Avance de Tarea" onChangeText={avanceEdit} placeholderTextColor="#aaa" keyboardType='numeric' />
                                <Slider style={styles.slider} minimumValue={0} maximumValue={100} step={1} value={avance} onValueChange={setAvance} minimumTrackTintColor="#4caf50" maximumTrackTintColor="#e0e0e0" thumbTintColor="#4caf50" />
                            </View>
                            <TouchableOpacity style={styles.submitButton} onPress={saveTask}>
                                <MaterialCommunityIcons name="content-save" size={24} color="white" />
                                <Text style={styles.submitButtonText}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    slider: {
        width: '80%',
        height: 40,
        marginBottom: 20,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginTop: 5,
        marginBottom: 5
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    container: { flex: 1, backgroundColor: '#f0f4f8' },
    settingRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2, paddingHorizontal: 20 },
    settingItem: { flexDirection: 'row', alignItems: 'center' },
    settingText: { fontSize: 14, color: '#333', marginRight: 8 },
    cellBorder: { marginLeft: 6, marginRight: 6, backgroundColor: 'white', marginTop: 4, borderColor: '#848484', borderWidth: 1, borderRadius: 8, paddingBottom: 4, borderBottomColor: '#848484', borderBottomWidth: 1, paddingTop: 4 },
    //itemContainer: { width: '100%', padding: 0 },
    //itemTitle: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 6, marginTop: 4},
    //itemDescription: { fontSize: 12, color: '#555', marginBottom: 2 },
    //itemRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
    //buttonContainer: { flexDirection: 'row', alignItems: 'center' },
    //iconButton: { flexDirection: 'row', alignItems: 'center', marginRight: 18 },
    //iconLabel: { fontSize: 11, color: '#6c757d', marginLeft: 4 },
    //: { marginTop: 6, marginRight: 10 },
    actionButton: { marginRight: 12, padding: 8, borderRadius: 50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' },
    leftActions: { backgroundColor: '#4CAF50', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 8, borderRadius: 8, marginTop: 5 },
    rightActions: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF5733', padding: 3, borderRadius: 8, marginTop: 5 },
    noActions: { backgroundColor: '#E6E6E6', justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 8, marginTop: 5, marginLeft: 3, marginRight: 3 },
    noActionText: { fontSize: 13, color: '#6c757d' },
    itemContainer: {
        width: '100%',
        padding: 1,
        marginVertical: 2,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 6,
        marginTop: 8,
        textTransform: 'capitalize',
    },
    itemDetalles: {
        fontSize: 11,
        color: '#333',
        marginTop: 8,
    },
    defaultTitle: {
        color: '#555',
    },
    itemDescription: {
        fontSize: 14,
        color: '#777',
        marginBottom: 30,
        lineHeight: 20,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 1,
        backgroundColor: '#f0f4f8',
        padding: 6,
        borderRadius: 5,
    },
    iconLabel: {
        marginLeft: 5,
        fontSize: 11,
        color: '#333',
    },
    progressContainer: {
        marginTop: 1, marginRight: 10
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#0d6efd',
        borderRadius: 30,
        color: 'white',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 15,
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'left',
        backgroundColor: '#f0f4f8',
        padding: 10,
        borderRadius: 6,
        borderColor: 'gray'
    }, input: {
        width: '100%',
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 5,
        paddingHorizontal: 10,
        marginLeft: 0,
        marginRight: 4,
        textAlign: 'left',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }, input2: {
        width: '15%',
        height: 35,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 5,
        paddingHorizontal: 10,
        marginLeft: 0,
        marginRight: 4,
        textAlign: 'right',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

    },
    submitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0d6efd',
        borderRadius: 8,
        paddingVertical: 12,
        marginTop: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '600',
    },
    textarea: {
        height: 60,
    },
})