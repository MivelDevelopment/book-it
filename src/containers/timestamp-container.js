import React, { useEffect } from 'react';

import { ScheduleTime } from '../components';


export const TimestampContainer = ({ time, isBooked, setChosenTime, isChosen, setIsChosen, scheduledAppointments }) => {
    
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