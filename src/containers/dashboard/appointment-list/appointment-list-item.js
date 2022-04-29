import React from 'react';
import { nanoid } from 'nanoid';

import { AppointmentList } from '../../../components';

export const AppointmentListItem = ({ appointment, handleClick }) => {
    return (
        <AppointmentList.Inner 
            appointmentId={nanoid()} 
            status={appointment.status} 
            onClick={() => handleClick(appointment)}
        >
            <AppointmentList.Time>
                {appointment.time}
            </AppointmentList.Time>

            <AppointmentList.Date>
                {appointment.day} / {appointment.month} / {appointment.year}
            </AppointmentList.Date>
        </AppointmentList.Inner>
    )
}