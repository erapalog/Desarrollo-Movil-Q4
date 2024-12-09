import React, { createContext } from "react";
import { Task } from "../../Models/Task";

export const Content = createContext({
    isDarkTheme: false,
    toggleTheme: ()=> {},
    listTask: [] as Task[],
    listTaskTotal: [] as Task[],
    applyFilter: (estado:number) => {},
    estadoFiltro: -2,
    updateTaskStatus: (taskId: number, idEstado: number, avance:number)=> {},
    createTask: (p_task: string, p_descripcion:string, p_id_categoria: number, p_prioridad:number)=> {},
    editTask: (pd_id:number, p_task: string, p_descripcion:string, p_id_categoria: number, p_prioridad:number, p_avance:number, p_idestado:number) => {},
    id: 0, setId: (id:number) => {},
    tarea: '', setTarea: (tarea:string) => {},
    descripcion:'', setDescripcion:(descripcion:string) => {},
    avance:0, setAvance: (estado:number) => {},
    idPrioridad: 0, setIdPrioridad: (estado:number) => {},
    idEstado: 0, setIdEstado: (estado:number) => {}, 
    idCategoria: 0, setIdCategoria: (estado:number) => {},
    execute: () => {}
})