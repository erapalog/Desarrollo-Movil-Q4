import React, { createContext } from "react";

export const ContentTheme = createContext({
    isDarkTheme: false,
    toggleTheme: ()=> {}
});