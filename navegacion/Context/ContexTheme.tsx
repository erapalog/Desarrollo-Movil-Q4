import React, { createContext } from "react"

export const ContextTheme = createContext({
    isDarTheme: false,
    toggleTheme: ()=> {}
})

