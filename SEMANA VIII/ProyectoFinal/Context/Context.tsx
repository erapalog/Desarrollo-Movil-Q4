import React, { createContext } from "react";
import { Transaccion } from "../Models/Transaccion";
import { Task } from "../Models/Task";

export const Content = createContext({
    isDarkTheme: false,
    toggleTheme: ()=> {},
    listaTareas: [] as Task[],
    listaTransacciones: [] as Transaccion[],
    saldo: 0,
    monto: 0,
    deposito: ()=> {},
    retiro: ()=> {},
    transferir: ()=> {},
    setCuenta: (cuenta:string) => {},
    setMonto: (monto:string) => {},
    setNombre: (nombre:string) => {},
});