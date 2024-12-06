import { View, StyleSheet } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { Content } from './Context';
import { Task } from '../Models/Task';
import { Status } from '../Models/Status';
import Api from '../Service/Api';

interface Props {
  children: React.ReactNode;
}

interface ContextType {
  isDarkTheme: boolean,
  toggleTheme: (estado: boolean) => void,
  listTask: Task[],
  listStatus: Status[],
  listTaskTotal: Task[],
  applyFilter: (estado: number) => void,
  estadoFiltro: number,
}

export default function Provider({ children }: Props) {
  const [listTask, setLlistTask] = useState<Task[]>([]);
  const [listTaskTotal, setListTaskTotal] = useState<Task[]>([]);
  const [listStatus, setListStatus] = useState<Status[]>([]);
  const [estadoFiltro, setEstadoFiltro] = useState<number>(-2);

  const [id, setId] = useState(0);
  const [tarea, setTarea] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [avance, setAvance] = useState(0);
  const [prioridad, setPrioridad] = useState(0);
  const [idestado, setIdestado] = useState(0);
  const [idcategoria, setIdcategoria] = useState(0);
  const [filtroTareas, setFiltroTareas] = useState('-1');

  const [visible, setVisible] = useState(false);
  const showSnackbar = () => setVisible(true);
  const hideSnackbar = () => setVisible(false);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = (estado: boolean) => {
    setIsDarkTheme(!estado);
    if (estado) {
      loadTask(-1);
    } else {
      loadTask(-2);
    }
  }

  const applyFilter = (estado: number) => {
    loadTask(estado);
  }

  const load = async () => {
    console.info("Iniciando ********************************");
    loadTask(-1);
    loadTaskTotal();
    console.info("Finalizado ********************************");
  }

  const loadTask = async (estado: number) => {
    setEstadoFiltro(estado);
    try {
      console.info("loadTask=" + estado);
      const response = await Api.get('/' + estado + '/2');
      setLlistTask(response.data);
    } catch (error) {
      console.error('loadTask ', error);
    }

    console.info("loadTask=" + loadTask.length);
  }

  const loadTaskTotal = async () => {
    try {
      console.info("loadTaskTotal=TODAS");
      const response = await Api.get('/-1/2');
      setListTaskTotal(response.data);
    } catch (error) {
      console.error('loadTaskTotal ', error);
    }
    console.info("loadTaskTotal=" + listTaskTotal.length);
  }

  useEffect(() => { load(); }, []);

  const value: ContextType = {
    isDarkTheme,
    toggleTheme,
    listTask,
    listStatus,
    listTaskTotal,
    applyFilter,
    estadoFiltro,
  }

  return (
    <Content.Provider value={value}>
      <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
        {children}
      </View>
    </Content.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
})

export const UseContext = () => {
  return useContext(Content);
}