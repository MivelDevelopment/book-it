import React from 'react';

import { AppointmentList } from '../../../components';

export const AppointmentListItem = ({ appointment, handleClick }) => {

    return (
        <AppointmentList.Inner onClick={handleClick}>
            <AppointmentList.Title>
                {appointment.day} / {appointment.month} / {appointment.year}
            </AppointmentList.Title>
        </AppointmentList.Inner>
    )
}