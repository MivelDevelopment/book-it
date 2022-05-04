import React from 'react';

import { AppointmentInfo } from '../../../components'
import { Btn } from '../../../components';

export const SingleAppointmentDetailsRender = ({ booking, date, time, handleRemove }) => {
    const {day, month, year} = date;
    
    return (
        <>
        {booking.status === 'available' 
        ?
        <AppointmentInfo>
            <AppointmentInfo.Info><b>{day} / {month} / {year}</b> at <b>{time}</b></AppointmentInfo.Info>
            <Btn.Container direction='row'>
                <Btn type='remove' onClick={handleRemove}>Remove from your schedule</Btn>
            </Btn.Container>
        </AppointmentInfo>
        :
        <AppointmentInfo>
            <AppointmentInfo.Heading>Scheduler information</AppointmentInfo.Heading>
            <AppointmentInfo.Info>Name: <b>{booking?.scheduler?.fullName}</b></AppointmentInfo.Info>
            <AppointmentInfo.Info>Email: <b>{booking?.scheduler?.email}</b></AppointmentInfo.Info>
            <AppointmentInfo.Info>Phone number: <b>{booking?.scheduler?.number || 'N/A'}</b></AppointmentInfo.Info>
            <AppointmentInfo.Info>Message: <b>{booking?.scheduler?.message || 'N/A'}</b></AppointmentInfo.Info>
            <AppointmentInfo.Heading>Scheduled</AppointmentInfo.Heading>
            <AppointmentInfo.Info><b>{day} / {month} / {year}</b> at <b>{time}</b></AppointmentInfo.Info>
        </AppointmentInfo>
        }
        </>
        
    )
}