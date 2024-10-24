
import { useState, useEffect } from 'react';
import { Personas } from '../../model/Personas';

const Nombres_Alumnos: Personas[] = [
  { id: '1', nombre: 'Erick' },
  { id: '2', nombre: 'Tyffani' },
  { id: '3', nombre: 'Uziel' },
  { id: '4', nombre: 'Stefany' },
  { id: '5', nombre: 'Nathan' },
  { id: '6', nombre: 'Suyapa' },
  { id: '7', nombre: 'Freddy' },
  { id: '8', nombre: 'Nazareth' },
  { id: '9', nombre: 'Esther' },
  { id: '10', nombre: 'Samuel' },
];

export const Estudiantes = () => {
  const [alumnos, setAlumnos] = useState<Personas[]>(Nombres_Alumnos);

  useEffect(() => {
    const Tiempo_nuevo_alumno = setTimeout(() => {
        setAlumnos((prevAlumnos) => [
        ...prevAlumnos,
        { id: '11', nombre: 'Nora' },
        { id: '12', nombre: 'Sara' },
        { id: '13', nombre: 'Fernanda' },
        { id: '14', nombre: 'Wendy' },
        { id: '15', nombre: 'Leny' },
        { id: '16', nombre: 'Genesis' },
        { id: '17', nombre: 'Suany' },
        { id: '18', nombre: 'Elmer' },
        { id: '19', nombre: 'Josue' },
        { id: '20', nombre: 'Antonio' },
        { id: '21', nombre: 'Enil' },
        { id: '22', nombre: 'Fidel' },
        { id: '23', nombre: 'Daniel' },
        { id: '24', nombre: 'Marcos' },
        { id: '25', nombre: 'Andy' },
        { id: '26', nombre: 'Luiz' },
        { id: '27', nombre: 'Raquel' },
        { id: '28', nombre: 'Tucbar' },
        { id: '29', nombre: 'Alejandra' },
        { id: '30', nombre: 'Valerie' },
      ]);
    }, 5000);

    return () => clearTimeout(Tiempo_nuevo_alumno);
  }, []);

  return alumnos;
};


/*
No pude encontrar mas informacionde como agregarlos cada 5 segundos pero Chat.GPT si encontro
no pondre esa parte del codigo para tomar en cuenta que lo demas lo hice en la mayoria con investigacion 

export const Nombres_Alumnos = () => {
  const [estudiantes, setEstudiantes] = useState<Student[]>(Nombres_Alumnos);
  const [index, setIndex] = useState<number>(0);  ------ ni idea de que es eso

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < additionalEstudiantes.length) {
        setEstudiantes((prevEstudiantes) => [
          ...prevEstudiantes,
          additionalEstudiantes[index],
        ]);
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return estudiantes;
};
*/