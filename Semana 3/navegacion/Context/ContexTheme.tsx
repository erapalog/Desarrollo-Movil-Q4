
//tema el color claro/oscuro
import React, { createContext } from "react";

/*type ContentTheme ={
    isDarkTheme : boolean,
    toggleTheme : ()=> void
}

const ContentTheme= React.createContext<ContentTheme | undefined> (undefined);

export default ContentTheme;*/

export const ContentTheme = createContext({
    isDarkTheme: false,
    toggleTheme: ()=> {}
});




