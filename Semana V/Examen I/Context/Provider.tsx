import { View, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { Content } from './Context';
import { Transaccion } from '../Models/Transaccion';

interface Props {
    children: React.ReactNode;
}

interface ContextType {
    isDarkTheme: boolean;
    toggleTheme: () => void;
    listaTransacciones: Transaccion[],
    saldo: number,
    monto: (monto: string) => void,
    deposito: (saldo: number) => void,
    retiro: (saldo: number) => void,
    transferir: (saldo: number) => void,
    setNombre: (nombre: string) => void,
    setCuenta: (cuenta: string) => void,
    setMonto: (monto: string) => void,
}

export default function ThemeLocalProvider({ children}: Props) {

    const [visible, setVisible] = useState(false);
    const showSnackbar = () => setVisible(true);
    const hideSnackbar = () => setVisible(false);

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
      
    const [saldo, setSaldo] = useState(10000.00);
    const [listaTransacciones, setListaTransacciones]= useState([]);

    const [cuenta, setCuenta] = useState('');
    const [monto, setMonto] = useState('0');
    const [nombre, setNombre] = useState('');
    

    const deposito = () => {
        setSaldo(saldo + 500);
        const trans = {
          "No": `T00${listaTransacciones.length + 1}`,
          "fecha": new Date().toLocaleString(),
          "monto": 500,
          "tipoTransaccion": "Deposito",
          "comprobante": `07112024${Math.floor(Math.random() * 1000)}`
        };
    
        setListaTransacciones(prevList => {
            if (Array.isArray(prevList)) {
              return [...prevList, trans];
            } else {
              return [trans];
            }
          });
      };

      const retiro = () => {
        setSaldo(saldo - 200);
        const trans = {
          "No": `T00${listaTransacciones.length + 1}`,
          "fecha": new Date().toLocaleString(),
          "monto": 200,
          "tipoTransaccion": "Retiro",
          "comprobante": `07112024${Math.floor(Math.random() * 1000)}`
        };
    
        setListaTransacciones(prevList => {
            if (Array.isArray(prevList)) {
              return [...prevList, trans];
            } else {
              return [trans];
            }
          });
      };

      const transferir = () => {
        setCuenta('');
        setMonto('0');
        setNombre('');
        setSaldo(saldo - parseFloat(monto));

        const trans = {
          "No": `T00${listaTransacciones.length + 1}`,
          "fecha": new Date().toLocaleString(),
          "monto": parseFloat(monto),
          "tipoTransaccion": "Transferencia",
          "comprobante": `07112024${Math.floor(Math.random() * 1000)}`
        };
    
        setListaTransacciones(prevList => {
            if (Array.isArray(prevList)) {
              return [...prevList, trans];
            } else {
              return [trans];
            }
          });
      };

    const value: ContextType = {
        isDarkTheme,
        toggleTheme,
        saldo,
        deposito,
        retiro,
        transferir,
        setCuenta,
        setMonto,
        setNombre,
        monto,
        listaTransacciones
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
