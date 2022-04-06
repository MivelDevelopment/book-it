import React, { createContext, useState } from 'react';

const ScheduledAppointmentsContext = createContext();

const ScheduledAppointmentsContextProvider = ({children}) => {
    const [scheduledAppointments, setScheduledAppointments] = useState([]);
    
    return (
        <ScheduledAppointmentsContext.Provider value={{scheduledAppointments, setScheduledAppointments}}>
            {children}
        </ScheduledAppointmentsContext.Provider>
    )
}


export {ScheduledAppointmentsContextProvider, ScheduledAppointmentsContext}