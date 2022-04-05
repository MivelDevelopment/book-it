import React, {createContext, useState} from 'react';

const { Provider, Consumer } = createContext();

const ChosenDateContextProvider = ({ children }) => {
    const [chosenDate, setChosenDate] = useState({day: '', month: '', year:''});
    
    return (
        <Provider value={{chosenDate, setChosenDate}}>
            {children}
        </Provider>
    )
}

export {ChosenDateContextProvider, Consumer as ChosenDateContextConsumer};