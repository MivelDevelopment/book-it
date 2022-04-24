import React, { createContext, useState } from 'react';

const AvailableSchedulesContext = createContext();

const AvailableSchedulesContextProvider = ({ children }) => {
    const [availableSchedules, setAvailableSchedules] = useState([]);

    return (
        <AvailableSchedulesContext.Provider value={{ availableSchedules, setAvailableSchedules }}>
            {children}
        </AvailableSchedulesContext.Provider>
    )
}

export { AvailableSchedulesContextProvider, AvailableSchedulesContext };