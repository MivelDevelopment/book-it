import React from 'react';

import { AppointmentInfo } from '../../../components'

export const SingleAppointmentDetails = ({ booking }) => {
    
    
    return (
        <>
        {booking && 
        <>
            <AppointmentInfo.Heading>Scheduler information</AppointmentInfo.Heading>
            <AppointmentInfo.Info>Name: <b>{booking?.scheduler?.fullName}</b></AppointmentInfo.Info>
            <AppointmentInfo.Info>Email: <b>{booking?.scheduler?.email}</b></AppointmentInfo.Info>
            <AppointmentInfo.Info>Phone number: <b>{booking?.scheduler?.number || 'N/A'}</b></AppointmentInfo.Info>
            <AppointmentInfo.Info>Message: <b>{booking?.scheduler?.message || 'N/A'}</b></AppointmentInfo.Info>
            <AppointmentInfo.Heading>Scheduled</AppointmentInfo.Heading>
            <AppointmentInfo.Info><b>{booking?.appointment?.day < 10 ? `0${booking?.appointment?.day}` : booking?.appointment?.day} / {booking?.appointment?.month + 1 < 10 ? `0${booking?.appointment?.month + 1}` : booking?.appointment?.month + 1} / {booking?.appointment?.year}</b> at <b>{booking?.appointment?.time}</b></AppointmentInfo.Info>
        </>}
        </>
    )
}