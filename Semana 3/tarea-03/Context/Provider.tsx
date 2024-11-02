import { View, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { Content } from './Context';
import { Usuario } from '../Models/Usuario';

interface Props {
    children: React.ReactNode;
}

interface ContextType {
    isDarkTheme: boolean;
    toggleTheme: () => void;
    nombre: string,
    apellido: string,
    correo: string,
    telefono: string,
    fechaNacimiento: string,
    listaUsuario: Usuario[],
    addUsuario: () => void;
    setNombre: (nombre: string) => void,
    setApellido: (apellido: string) => void,
    setCorreo: (correo: string) => void;
    setTelefono: (telefono: string) => void,
    setFechaNacimiento:(fechaNacimiento: string) => void;
}

export default function ThemeLocalProvider({ children}: Props) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [listaUsuario, setListaUsuario]= useState<Usuario[]> ([]);

    const addUsuario = () =>{
        const usuario = { nombre, apellido, correo, telefono, fechaNacimiento };
        
        //setListaUsuario([...listaUsuario, data]);
        setListaUsuario(prevList => [...prevList, usuario]);
        console.log(listaUsuario);

        setNombre('');
        setApellido('');
        setCorreo('');
        setTelefono('');
        setFechaNacimiento('');
    }

    const value: ContextType = {
        isDarkTheme,
        toggleTheme,
        nombre,
        apellido,
        correo,
        telefono,
        fechaNacimiento,
        listaUsuario,
        addUsuario,
        setNombre,
        setApellido,
        setCorreo,
        setTelefono,
        setFechaNacimiento  
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
