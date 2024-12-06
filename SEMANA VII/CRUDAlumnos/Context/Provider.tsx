import { View, StyleSheet, Alert } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { Content } from './Context';
import Api from '../Service/Api';
import { Alumno } from '../Models/Alumno';
import { Transaccion } from '../Models/Transaccion';
import { AsignaturasXAlumno } from '../Models/Matricula';

interface Props {
  children: React.ReactNode;
}

interface ContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  listAlumnos: Alumno[],
  visibleModal: boolean,
  setVisibleModal: () => void,
  dataAlumno: Alumno,
  setDataAlumno: (dataAlumno: Alumno) => void,
  setSelectIdAlumno: number, selectIdAlumno: number,
  setSelectIdAsignatura: number, selectIdAsignatura: number,
  matricular: () => void,
  borrarClase: () => void,
  listMatricula: AsignaturasXAlumno[],
  crearAsignatura:() => void,
  nombreAsignatura: string, 
  setNombreAsignatura:(nombre: string) => void,
  borrarAsignatura: () => void,
  getAsignaturasXAlumnosById: (id:number) => void,
  visibleModalMat: boolean, setVisibleModalMat: () => void, openModalMatricula: (id_alumno:number) => void
}

export default function Provider({ children }: Props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const [listAlumnos, setListAlumnos] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalMat, setVisibleModalMat] = useState(false);
  const [dataAlumno, setDataAlumnoHook] = useState<Alumno>();
  const [listAsignaturas, setListAsignaturas] = useState([]);
  const [selectIdAlumno, setSelectIdAlumno] = useState(null);
  const [selectIdAsignatura, setSelectIdAsignatura] = useState(null);
  const [listMatricula, setListMatricula] = useState([]);
  const [nombreAsignatura, setNombreAsignatura] = useState('');
  
  const getAlumnos = async () => {
    try {
      console.info("getAlumnos()");
      const response = await Api.get('alumno');
      setListAlumnos(response.data.data);
    } catch (error) {
      console.error('getAlumnos ', error);
    }
  };

  const setDataAlumno = (show: boolean, data: Alumno) => {
    setVisibleModal(show);
    setDataAlumnoHook(data);
    console.log('Abrir modal para', data);
  }

  const openModalMatricula = (show: boolean, id_alumno: number) => {
    setVisibleModalMat(show);
    getAsignaturasXAlumnosById(id_alumno);
    console.log('Abrir modal para');
  }

  const getAsignaturas = async () => {
    try {
      console.info('getAsignaturas()');
      const response = await Api.get('asignatura');
      setListAsignaturas(response.data.data);
      console.log('Cargando...');
    } catch (error) {
      console.error('getAsignaturas ', error);
    }
  }

  const crearAsignatura = async () => {
    try {
      const data = { nombre: nombreAsignatura };
  
      const response = await Api.post('asignatura', data);
      const responseCode = response.data.response_code;
      getAsignaturas();
  
      if (Number(responseCode) === 0) {
        setNombreAsignatura('');
      } else {
        console.error('Error al crear');
      }
    } catch (error) {
      console.error('crearAsignatura error:', error);
    }
  }

  const matricular = async () => {
    try {

      const data = {
        id_asignatura: selectIdAsignatura,
        id_alumno: selectIdAlumno,
      };
      console.info(data);
      const response = await Api.post('asignaturaxalumno', data);
      getAsignaturasXAlumnosById(selectIdAlumno);
    } catch (error) {
      console.error('matricular ', error);
    }
  }

  const borrarClase = (id: number, id_alumno: number) => {
    borrarMatricula(id, id_alumno);
  }

  const borrarMatricula = async (id: number, id_alumno: number) => {
    try {

      const response = await Api.delete('asignaturaxalumno/' + id);
      getAsignaturasXAlumnosById(id_alumno);
    } catch (error) {
      console.error('borrarMatricula ', error);
    }
  }

  const borrarAsignatura = async (id: number) => {
    try {

      const response = await Api.delete('asignatura/' + id);
      getAsignaturas();
    } catch (error) {
      console.error('borrarAsignatura ', error);
    }
  }

  const getAsignaturasXAlumnosById = async (id:number) => {
    try {
      console.info("getAsignaturasXAlumnosById()");
      const response = await Api.get('asignaturasxalumno/'+id);
      setListMatricula(response.data.data);
    } catch (error) {
      console.error('getAlumnos ', error);
    }
  }

  useEffect(() => { getAlumnos(), getAsignaturas() }, []);

  const value: ContextType = {
    isDarkTheme,
    toggleTheme,
    listAlumnos,
    visibleModal, setVisibleModal,
    dataAlumno, setDataAlumno,
    listAsignaturas,
    setSelectIdAlumno, selectIdAlumno, 
    setSelectIdAsignatura, selectIdAsignatura,
    matricular, borrarClase,
    listMatricula,
    crearAsignatura,
    nombreAsignatura, setNombreAsignatura, borrarAsignatura,
    getAsignaturasXAlumnosById,
    visibleModalMat, setVisibleModalMat, openModalMatricula,
  };

  return (
    <Content.Provider value={value}>
      <View style={[styles.container, { backgroundColor: isDarkTheme ? '#333' : '#fff' }]}>
        {children}
      </View>
    </Content.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export const UseContext = () => {
  return useContext(Content);
};
