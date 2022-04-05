import React, { createContext, useState } from 'react';

const { Provider, Consumer } = createContext();

const ScheduledAppointmentsProvider = ({children}) => {
    const [scheduledAppointments, setScheduledAppointments] = useState([]);
    
    return (
        <Provider value={{scheduledAppointments, setScheduledAppointments}}>
            {children}
        </Provider>
    )
}


export {ScheduledAppointmentsProvider, Consumer as ScheduledAppointmentsConsumer}