import React,{createContext} from 'react'
import useApi from './useApi'

export const CureContext=createContext();
export const CureContextProvider=props=>{
    return(
        <CureContext.Provider value={{...useApi()}}>
            {props.children}
        </CureContext.Provider>
    )
}
