import React from 'react';

import { AppointmentInfo } from '../../../components'

export const SingleAppointmentDetails = ({ booking }) => {
    
    
    return (
        <AppointmentInfo>
        {booking && 
        <>
            <h3>Scheduler information</h3>
            <p>Name: <b>{booking?.scheduler?.fullName}</b></p>
            <p>Email: <b>{booking?.scheduler?.email}</b></p>
            <p>Phone number: <b>{booking?.scheduler?.number}</b></p>
            <p>Message: <b>{booking?.scheduler?.message}</b></p>
            <h3>Scheduled</h3>
            <p><b>{booking?.appointment?.day} / {booking?.appointment?.month} / {booking?.appointment?.year}</b> at <b>{booking?.appointment?.time}</b></p>
        </>}
        </AppointmentInfo>
    )
}