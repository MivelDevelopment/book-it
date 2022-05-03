import React from 'react';
import { useParams } from 'react-router-dom';

import { AppointmentInfo } from '../../../components'

export const SingleAppointmentDetails = ({ booking }) => {
    let params = useParams();
    console.log(params);

    const { year, time } = booking;
    const day = booking?.day < 10 ? `0${booking?.day}` : booking?.day;
    const month = booking?.month + 1 < 10 ? `0${booking?.month + 1}` : booking?.month + 1
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
                    <AppointmentInfo.Info><b>{day} / {month} / {year}</b> at <b>{time}</b></AppointmentInfo.Info>
                </>}
        </>
    )
}