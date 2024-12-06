import React, { createContext } from "react";
import { Task } from "../Models/Task";

export const Content = createContext({
    isDarkTheme: false,
    toggleTheme: ()=> {},
    listTask: [] as Task[],
    listTaskTotal: [] as Task[],
    applyFilter: (estado:number) => {},
    estadoFiltro: -2,
})