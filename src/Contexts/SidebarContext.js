import React, {useState, createContext} from 'react'

export const SidebarContext = createContext() 

export const SidebarContextProvider = (props)=>{
    const [sbVis, setSbVis] = useState(true) 
    return (
        <SidebarContext.Provider value={[sbVis, setSbVis]}>{props.children}</SidebarContext.Provider>
    );
}

