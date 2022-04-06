import React, { useEffect, useContext } from 'react';

import { ScheduleTime } from '../../../components';

import { ChosenTimeContext, 
    ScheduledAppointmentsContext } from '../../../context';


export const TimestampContainer = ({ time, isBooked, isChosen, setIsChosen }) => {
    const { setChosenTime } = useContext(ChosenTimeContext);
    const { scheduledAppointments } = useContext(ScheduledAppointmentsContext);

    useEffect(() => {
        setIsChosen({time: ''});
    }, [setIsChosen, scheduledAppointments])


    const handleClick= (selectedTime) => {
        setChosenTime(chosenTime => chosenTime === selectedTime ? null : selectedTime);
        setIsChosen(({time}) => (time !== selectedTime ? {time: selectedTime} : {time: ''}));
    }

    return (
        <ScheduleTime.Inner 
            onClick={() => handleClick(time)} 
            chosen={isChosen.time === time} 
            disabled={isBooked}
        >
            <ScheduleTime.Timestamp>
                {time}
            </ScheduleTime.Timestamp>
        </ScheduleTime.Inner>
    )
}