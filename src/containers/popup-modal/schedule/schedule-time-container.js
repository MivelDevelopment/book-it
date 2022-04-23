import React, { useState, useEffect, useContext } from 'react';

import { ScheduleTime } from '../../../components';
import { TimestampContainer } from './timestamp-container';
import { getAppointments } from '../../../helpers/get-appointments-for-date';
import { getAppointmentsTime } from '../../../helpers/get-appointments-time';
import { populateSchedule } from '../../../helpers/populate-schedule-by-interval';

import { ChosenDateContext, 
    ScheduledAppointmentsContext } from '../../../context';


export const ScheduleTimeContainer = () => {
    const { chosenDate } = useContext(ChosenDateContext);
    const { scheduledAppointments } = useContext(ScheduledAppointmentsContext);

    const [isChosen, setIsChosen] = useState({time: ''});
    const [chosenDateBookedAppointments, setChosenDateBookedAppointments] = useState([]);
    
    useEffect(() => {
        setChosenDateBookedAppointments(getAppointmentsTime(getAppointments(chosenDate, scheduledAppointments)));
    }, [chosenDate, scheduledAppointments])

    return (
        <ScheduleTime>
            {populateSchedule(8, 17, 30).map(time => {
                return (
                <TimestampContainer 
                    key={`${chosenDate.year}${chosenDate.month}${chosenDate.day}${time}`} 
                    time={time}
                    isChosen={isChosen}
                    setIsChosen={setIsChosen}
                    isBooked={chosenDateBookedAppointments.includes(time)}
                />
            )})}
        </ScheduleTime>
    )


}