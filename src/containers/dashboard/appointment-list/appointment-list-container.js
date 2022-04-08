import React, { useContext } from 'react';

import { AppointmentList } from '../../../components';

import { ScheduledAppointmentsContext } from '../../../context';
import { AppointmentListItem } from './appointment-list-item';

export const AppointmentListContainer = () => {
    const { scheduledAppointments} = useContext(ScheduledAppointmentsContext)

    const handleClick = () => {
        console.log('clickity');
    }

    let appointmentsArray = scheduledAppointments.map(({appointment}) => (
        <AppointmentListItem 
            key={`${appointment.day}${appointment.month}${appointment.year}${appointment.time}`}
            appointment={appointment} 
            handleClick={handleClick}
        />
    ))
    
    console.log(scheduledAppointments);

    return (
        <AppointmentList>
            {appointmentsArray.length < 1 ? 
                <AppointmentList.Subheading>
                    Your schedule is wide open!
                </AppointmentList.Subheading>
            :
                appointmentsArray
            }
        </AppointmentList>
    )
}