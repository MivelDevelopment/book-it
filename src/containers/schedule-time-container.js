import React, { useState } from 'react';
import { ScheduleTime } from '../components';

import { populateSchedule } from '../helpers/populate-schedule-by-interval';

export const ScheduleTimeContainer = ({ setChosenTime }) => {
    const [isChosen, setIsChosen] = useState({time: ''});
    

    const handleClick= (selectedTime) => {
        setChosenTime(chosenTime => chosenTime === selectedTime ? null : selectedTime);
        setIsChosen(({time}) => (time !== selectedTime ? {time: selectedTime} : {time: ''}));
    }

    const timeIntervals = populateSchedule(10, 20, 30).map(time => (
        <ScheduleTime.Inner key={time} chosen={isChosen.time === time} >
            <ScheduleTime.Timestamp onClick={() => handleClick(time)} >
                <span>{time}</span>
            </ScheduleTime.Timestamp>
        </ScheduleTime.Inner>
    ))

    return (
        <ScheduleTime>
            {timeIntervals}
        </ScheduleTime>
    )


}