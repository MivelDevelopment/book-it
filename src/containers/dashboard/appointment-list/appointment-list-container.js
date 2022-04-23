import React, { useContext } from 'react';

import { AppointmentList } from '../../../components';
import { AppointmentListItem } from './appointment-list-item';
import { mergeSort } from '../../../helpers/sort-from-lowest';
import { ScheduledAppointmentsContext } from '../../../context';



export const AppointmentListContainer = ({ openSchedule, setOpenSchedule, currentAppointmentShown, setCurrentAppointmentShown }) => {
    const { scheduledAppointments} = useContext(ScheduledAppointmentsContext)

    const handleClick = (booking) => {
        if (!openSchedule || booking.id !== currentAppointmentShown.id) {
            setCurrentAppointmentShown(booking);
            setOpenSchedule(true);
        } else {
            setOpenSchedule(false);
        }
    }

    let sortedIds = scheduledAppointments.reduce((acc, curr) => mergeSort([...acc, curr.id]), [])

    let sortedAppointmentsArray = sortedIds.map(id => scheduledAppointments.find(item => item.id === id));

    let sortedAppointmentList = sortedAppointmentsArray.map(booking => {
        const { appointment } = booking;
        return (
        <AppointmentListItem 
            key={`${appointment.day}${appointment.month}${appointment.year}${appointment.time}`}
            booking={booking} 
            handleClick={() => handleClick(booking)}
        />
    )})



    return (
        <AppointmentList>
            {scheduledAppointments.length < 1 ? 
                <AppointmentList.Subheading>
                    Your schedule is wide open!
                </AppointmentList.Subheading>
            :
            sortedAppointmentList
            }
        </AppointmentList>
    )
}