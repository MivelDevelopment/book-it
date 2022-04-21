import React, {createContext, useState} from 'react';

const { Provider, Consumer } = createContext();

const SelectedDateContextProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState({day: '', month: '', year:''});
    
    return (
        <Provider value={{selectedDate, setSelectedDate}}>
            {children}
        </Provider>
    )
}

export {SelectedDateContextProvider, Consumer as SelectedDateContextConsumer};