import React, {useState, createContext, useEffect} from 'react'

export const SidebarContext = createContext() 

export const SidebarContextProvider = (props)=>{
    const [sbVis, setSbVis] = useState(false) 
    
    return (
        <SidebarContext.Provider value={[sbVis, setSbVis]}>{props.children}</SidebarContext.Provider>
    );
}

