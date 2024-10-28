import React, { createContext, useState, ReactNode, useContext } from 'react';
import { View} from "react-native";
import { getListUser} from '../data/Data'; 

interface Student {
  id: number;
  name: string;
}

interface AppContextType {
  listStudents: Student[];
  setListStudents: React.Dispatch<React.SetStateAction<Student[]>>;
  selectTime: number;
  setSelectTime: React.Dispatch<React.SetStateAction<number>>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const data = getListUser();
    
  const [listStudents, setListStudents] = useState(data);
  const [selectTime, setSelectTime] = useState(3);
  const [active, setActive] = useState(true);

  return (
    <View>
        <AppContext.Provider value={{ listStudents, setListStudents, selectTime, setSelectTime, active, setActive }}>
        {children}
        </AppContext.Provider>
    </View>
  );
};

export const useAppContext = () => {
    return useContext(AppContext);
}