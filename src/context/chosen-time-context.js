import React, { createContext, useState } from 'react';

const { Provider, Consumer } = createContext();

const ChosenTimeContextProvider = ({ children }) => {
    const [ chosenTime, setChosenTime ] = useState('');

    return (
        <Provider value={{chosenTime, setChosenTime}}>
            {children}
        </Provider>
    )
}

export {ChosenTimeContextProvider, Consumer as ChosenTimeContextConsumer}