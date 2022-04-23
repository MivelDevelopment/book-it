import React, { createContext, useState } from 'react';

const ChosenTimeContext = createContext();

const ChosenTimeContextProvider = ({ children }) => {
    const [ chosenTime, setChosenTime ] = useState('');

    return (
        <ChosenTimeContext.Provider value={{chosenTime, setChosenTime}}>
            {children}
        </ChosenTimeContext.Provider>
    )
}

export {ChosenTimeContextProvider, ChosenTimeContext}