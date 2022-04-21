import React, {createContext, useState} from 'react';

const ChosenDateContext = createContext();

const ChosenDateContextProvider = ({ children }) => {
    const [chosenDate, setChosenDate] = useState({day: '', month: '', year:''});
    
    return (
        <ChosenDateContext.Provider value={{chosenDate, setChosenDate}}>
            {children}
        </ChosenDateContext.Provider>
    )
}

export {ChosenDateContextProvider, ChosenDateContext};