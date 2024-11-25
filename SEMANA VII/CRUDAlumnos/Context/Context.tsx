import React, { createContext } from "react";
import { Alumno } from "../Models/Alumno";
import { Asignatura } from "../Models/Asignatura";
import { AsignaturasXAlumno } from '../Models/Matricula';

export const Content = createContext({
    isDarkTheme: false,
    toggleTheme: () => { },
    listAlumnos: [] as Alumno[],
    visibleModal: false,
    setVisibleModal: () => { },
    dataAlumno: Alumno,
    setDataAlumno: () => { },
    listAsignaturas: [] as Asignatura[],
    setSelectIdAlumno: (idalumno: number) => { },selectIdAlumno: 0,
    setSelectIdAsignatura: (idasignatura: number) => { }, selectIdAsignatura: 0,
    matricular: () => { },
    borrarClase: (id: number) => { },
    listMatricula: [] as AsignaturasXAlumno,
    crearAsignatura:() => { },
    nombreAsignatura: '',
    setNombreAsignatura:(nombre: string) => { },
    borrarAsignatura: (id: number) => { },
    getAsignaturasXAlumnosById: (id: number) => { },
    visibleModalMat: false, setVisibleModalMat: () => {}, openModalMatricula: (id_alumno:number) => {},
});