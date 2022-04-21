import React from 'react';

import { AppointmentList } from '../../../components';

export const AppointmentListItem = ({ booking, handleClick }) => {
    const { appointment, id } = booking;

    return (
        <AppointmentList.Inner onClick={handleClick} appointmentId={id} >
            <AppointmentList.Time>
                {appointment.time}
            </AppointmentList.Time>

            <AppointmentList.Date>
                {appointment.day} / {appointment.month + 1} / {appointment.year}
            </AppointmentList.Date>
        </AppointmentList.Inner>
    )
}