import { View, StyleSheet } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { Content } from './Context';
import { Task } from '../../Models/Task';
import { Status } from '../../Models/Status';
import Api from '../../Service/Api';

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
  updateTaskStatus: (taskId: number, idEstado: number, avance:number)=> void,
  createTask: (p_task: string, p_descripcion:string, p_id_categoria: number, p_prioridad:number)=> void,
  editTask: (p_id:number, p_task: string, p_descripcion:string, p_id_categoria: number, p_prioridad:number, p_avance:number, p_idestado:number) => void,
  id: number, setId: (id:number) => void, 
  tarea: string, setTarea: (tarea:string) => void, 
  descripcion: string, setDescripcion: (descripcion:string) => void, 
  avance: number, setAvance: (avance:number) => void, 
  idPrioridad: number, setIdPrioridad: (prioridad:number) => void,
  idEstado: number, setIdEstado: (idEstado:number) => void, 
  idCategoria: number, setIdCategoria: (idCategoria:number) => void,
  execute: () => void, 
}

export default function Provider({ children }: Props) {
  const [updateFlag, setUpdateFlag] = useState(false);

  const [listTask, setLlistTask] = useState<Task[]>([]);
  const [listTaskTotal, setListTaskTotal] = useState<Task[]>([]);
  const [listStatus, setListStatus] = useState<Status[]>([]);
  const [estadoFiltro, setEstadoFiltro] = useState<number>(-2);

  const [id, setId] = useState(0);
  const [tarea, setTarea] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [avance, setAvance] = useState(0);
  const [idPrioridad, setIdPrioridad] = useState(0);
  const [idEstado, setIdEstado] = useState(0);
  const [idCategoria, setIdCategoria] = useState(0);
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

  const execute = async () => {
    setUpdateFlag(prev => !prev);
  }

  const applyFilter = (estado: number) => {
    setFiltroTareas(""+estado);
    loadTask(estado);
    loadTaskTotal();
  }

  const load = async () => {
    console.info("Iniciando ********************************");
    loadTask(Number(filtroTareas));
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

  const updateTaskStatus = async (p_taskId: number, p_idEstado: number, p_avance:number) => {
    let avances = 0;

    if (p_idEstado === 4) {
      avances = 100;
    } else {
      avances = p_avance;
    }

    const djson = {
      "id_estado": p_idEstado,
      "modificado_por": "admin",
      "avance": avances
    };

    const response = await Api.put('/update_estado/'+p_taskId, djson);
    console.info('respo: ', response.data.obj_creado[0].changedRows);

    if (response.data.obj_creado[0].changedRows > 0) {
      console.info('response.data '+response.data);
      load();
    } else {
      console.info('Error:', response.data.obj_creado[0].changedRows);
    }
  }

  const createTask = async (p_task: string, p_descripcion:string, p_id_categoria: number, p_prioridad:number) => {
    const djson = {
      "tarea": p_task,
      "descripcion": p_descripcion,
      "id_categoria": p_id_categoria,
      "id_prioridad": p_prioridad,
      "modificado_por": "admin"
    };
    console.info("Creando " + p_task, p_descripcion, p_id_categoria, p_prioridad);
    console.info(djson);

    const response = await Api.post('/', djson);
    console.info('respo: ', response.data.obj_creado[0].changedRows);

    if (response.data.obj_creado[0].affectedRows > 0) {
      console.info('response.data '+response.data);
      load();
    } else {
      console.info('Error:', response.data.obj_creado[0].changedRows);
    }
  }

  const editTask = async (p_id:number, p_task: string, p_descripcion:string, p_id_categoria: number, p_prioridad:number, p_avance:number, p_idestado:number) => {
    let avances = avance;

    if (p_idestado == 4) {
      avances = 100;
    } else {
      avances = p_avance;
    }

    const djson = {
      "tarea": p_task,
      "descripcion": p_descripcion,
      "id_categoria": p_id_categoria,
      "id_prioridad": p_prioridad,
      "id_estado": p_idestado,
      "avance": avances,
      "modificado_por": "admin"
    };

    console.info("UPdate ", djson);

    const response = await Api.put('/'+p_id, djson);
    console.info('respo: ', response.data.obj_creado[0].changedRows);

    if (response.data.obj_creado[0].affectedRows > 0) {
      console.info('response.data '+response.data);
      load();
    } else {
      console.info('Error:', response.data.obj_creado[0].changedRows);
    }
  }

  useEffect(() => { load(); }, [updateFlag]);

  const value: ContextType = {
    isDarkTheme,
    toggleTheme,
    listTask,
    listStatus,
    listTaskTotal,
    applyFilter,
    estadoFiltro,
    updateTaskStatus, createTask, editTask,
    id, setId,
    tarea, setTarea, 
    descripcion, setDescripcion, 
    avance, setAvance, 
    idPrioridad, setIdPrioridad,
    idEstado, setIdEstado, 
    idCategoria, setIdCategoria,
    execute,
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