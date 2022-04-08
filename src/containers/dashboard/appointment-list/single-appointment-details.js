import React from 'react';

import { AppointmentInfo } from '../../../components'

export const SingleAppointmentDetails = ({ booking }) => {

    const {appointment: {day, month, year, time}, scheduler: {name, email, number, message}, id} = booking;
    
    return (
        <AppointmentInfo>
            <h3>Scheduler information</h3>
            <p>Name: <b>{name}</b></p>
            <p>Email: <b>{email}</b></p>
            <p>Phone number: <b>{number}</b></p>
            <p>Message: <b>{message}</b></p>
            <h3>Scheduled</h3>
            <p><b>{day} / {month} / {year}</b> at <b>{time}</b></p>
            
        </AppointmentInfo>
    )
}