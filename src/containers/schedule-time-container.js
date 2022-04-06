import React, { useState, useEffect } from 'react';
import { ScheduleTime } from '../components';
import { getAppointments } from '../helpers/get-appointments-for-date';
import { getAppointmentsTime } from '../helpers/get-appointments-time';

import { populateSchedule } from '../helpers/populate-schedule-by-interval';
import { TimestampContainer } from './timestamp-container';

export const ScheduleTimeContainer = ({ setChosenTime, chosenDate, scheduledAppointments }) => {
    const [isChosen, setIsChosen] = useState({time: ''});
    const [chosenDateBookedAppointments, setChosenDateBookedAppointments] = useState([]);
    
    useEffect(() => {
        setChosenDateBookedAppointments(getAppointmentsTime(getAppointments(chosenDate, scheduledAppointments)));
    }, [chosenDate, scheduledAppointments])

    return (
        <ScheduleTime>
            {populateSchedule(9, 17, 30).map(time => {
                return (
                <TimestampContainer 
                    key={`${chosenDate.year}${chosenDate.month}${chosenDate.day}${time}`} 
                    scheduledAppointments={scheduledAppointments}
                    time={time}
                    setChosenTime={setChosenTime}
                    isChosen={isChosen}
                    setIsChosen={setIsChosen}
                    chosenDate={chosenDate}
                    isBooked={chosenDateBookedAppointments.includes(time)}
                />
            )})}
        </ScheduleTime>
    )


}